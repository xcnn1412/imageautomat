import { NextResponse, type NextRequest } from "next/server"
import { Prisma } from "@prisma/client"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { isAdmin, ADMIN_PRODUCT_ID_BASE, CUSTOM_PRODUCT_ID_BASE } from "@/lib/orders"

export const runtime = "nodejs"

// แปลง body → fields ที่ validate แล้ว (ใช้ร่วม POST/PATCH). คืน string = error message
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseFields(body: Record<string, unknown>, data: Record<string, any>): string | null {
  if (body.name !== undefined) {
    const v = String(body.name).trim()
    if (!v) return "name required"
    data.name = v
  }
  if (body.description !== undefined) data.description = String(body.description).trim()
  if (body.longDescription !== undefined) data.longDescription = body.longDescription ? String(body.longDescription).trim() : null
  if (body.image !== undefined) data.image = String(body.image).trim()
  if (body.category !== undefined) {
    // รับประเภทใดก็ได้ (admin เพิ่มประเภทใหม่ได้) — แค่ไม่ว่าง/ไม่ยาวเกิน
    const v = String(body.category).trim()
    if (!v || v.length > 40) return "bad category"
    data.category = v
  }
  if (body.features !== undefined) {
    if (!Array.isArray(body.features)) return "features must be array"
    data.features = (body.features as unknown[]).map(String)
  }
  if (body.specs !== undefined) {
    if (!Array.isArray(body.specs)) return "specs must be array"
    data.specs = body.specs
  }
  if (body.whtRate !== undefined) {
    const rate = Number(body.whtRate)
    if (!Number.isInteger(rate) || rate < 0 || rate > 100) return "bad whtRate"
    data.whtRate = rate
  }
  if (body.stock !== undefined) {
    const v = Number(body.stock)
    if (!Number.isInteger(v) || v < 0) return "bad stock"
    data.stock = v
  }
  for (const key of ["priceTHB", "depositTHB"] as const) {
    if (body[key] === undefined) continue
    if (body[key] === null) { data[key] = null; continue }
    const v = Number(body[key])
    if (!Number.isInteger(v) || v < 0) return `bad ${key}`
    data[key] = v
  }
  return null
}

// admin สร้างสินค้าใหม่ — gen id ในช่วง admin (ไม่ชน catalog/custom), เริ่มแบบซ่อน (hidden)
export async function POST(req: NextRequest) {
  const s = await auth()
  if (!isAdmin(s)) return NextResponse.json({ error: "forbidden" }, { status: 403 })

  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: Record<string, any> = {}
  const err = parseFields(body, data)
  if (err) return NextResponse.json({ error: err }, { status: 400 })
  if (!data.name) return NextResponse.json({ error: "name required" }, { status: 400 })
  if (!data.category) return NextResponse.json({ error: "category required" }, { status: 400 })
  if (!data.image) return NextResponse.json({ error: "image required" }, { status: 400 })

  // gen id: max(ADMIN_BASE, maxId ที่ < CUSTOM_BASE + 1) — Product.id ไม่ auto
  const { _max } = await prisma.product.aggregate({ _max: { id: true }, where: { id: { lt: CUSTOM_PRODUCT_ID_BASE } } })
  const nextId = Math.max(ADMIN_PRODUCT_ID_BASE, (_max.id ?? 0) + 1)

  // name/category/image ผ่าน validate แล้วด้านบน — เติม default แล้ว cast (data เป็น Record<string,any>)
  data.id = nextId
  data.hidden = true
  data.description ??= ""
  data.features ??= []
  const created = await prisma.product.create({
    data: data as Prisma.ProductUncheckedCreateInput,
    select: { id: true, name: true, description: true, longDescription: true, features: true, specs: true, category: true, priceTHB: true, depositTHB: true, image: true, whtRate: true, stock: true, hidden: true, deletedAt: true },
  })
  return NextResponse.json(created)
}

// admin แก้ข้อมูลสินค้าทุกฟิลด์ + toggle hidden — gate + validate ฝั่ง server
export async function PATCH(req: NextRequest) {
  const s = await auth()
  if (!isAdmin(s)) return NextResponse.json({ error: "forbidden" }, { status: 403 })

  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>
  const pid = Number(body.id)
  if (!Number.isInteger(pid)) return NextResponse.json({ error: "bad request" }, { status: 400 })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: Record<string, any> = {}
  const err = parseFields(body, data)
  if (err) return NextResponse.json({ error: err }, { status: 400 })
  if (body.hidden !== undefined) data.hidden = Boolean(body.hidden)

  if (Object.keys(data).length === 0) return NextResponse.json({ error: "nothing to update" }, { status: 400 })

  await prisma.product.update({ where: { id: pid }, data })
  return NextResponse.json({ ok: true })
}

// soft-delete (?restore=1 = กู้คืน) — เคลียร์ตะกร้าตอนลบ กัน checkout เจอของที่ลบ
export async function DELETE(req: NextRequest) {
  const s = await auth()
  if (!isAdmin(s)) return NextResponse.json({ error: "forbidden" }, { status: 403 })

  const pid = Number(req.nextUrl.searchParams.get("id"))
  if (!Number.isInteger(pid)) return NextResponse.json({ error: "bad request" }, { status: 400 })
  const restore = req.nextUrl.searchParams.get("restore") === "1"

  if (restore) {
    await prisma.product.update({ where: { id: pid }, data: { deletedAt: null } })
  } else {
    await prisma.$transaction([
      prisma.cartItem.deleteMany({ where: { productId: pid } }),
      prisma.product.update({ where: { id: pid }, data: { deletedAt: new Date() } }),
    ])
  }
  return NextResponse.json({ ok: true })
}
