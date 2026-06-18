import { NextResponse, type NextRequest } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { isAdmin, CUSTOM_PRODUCT_ID_BASE } from "@/lib/orders"

export const runtime = "nodejs"

const PLACEHOLDER_IMG = "/images/custom-booth.jpg"

type ProductFields = {
  name: string
  description: string
  longDescription: string | null
  image: string
  priceTHB: number
  depositTHB: number | null
  whtRate: number
}

// validate ฟิลด์สินค้า (ใช้ร่วม POST/PATCH) — คืน error string หรือ data + priceMode
function parseFields(b: Record<string, unknown>): { error: string } | { data: ProductFields; priceMode: "full" | "deposit" } {
  const name = String(b.name ?? "").trim()
  const description = String(b.description ?? "").trim()
  if (!name) return { error: "name required" }
  if (!description) return { error: "description required" }

  const priceTHB = Number(b.priceTHB)
  if (!Number.isInteger(priceTHB) || priceTHB <= 0) return { error: "priceTHB required" }

  let depositTHB: number | null = null
  if (b.depositTHB !== undefined && b.depositTHB !== null && b.depositTHB !== "") {
    const v = Number(b.depositTHB)
    if (!Number.isInteger(v) || v < 0) return { error: "bad depositTHB" }
    depositTHB = v
  }

  const whtRate = Number(b.whtRate ?? 0)
  if (![0, 3, 5].includes(whtRate)) return { error: "bad whtRate" }

  const priceMode = b.priceMode === "deposit" ? "deposit" : "full"
  const longDescription = b.longDescription ? String(b.longDescription).trim() : null
  const image = b.image ? String(b.image).trim() : PLACEHOLDER_IMG

  return { data: { name, description, longDescription, image, priceTHB, depositTHB, whtRate }, priceMode }
}

// สร้างสินค้าพิเศษ (hidden) แล้วยัดลงตะกร้า user คนเดียวโดยตรง
export async function POST(req: NextRequest) {
  const s = await auth()
  if (!isAdmin(s)) return NextResponse.json({ error: "forbidden" }, { status: 403 })

  const b = (await req.json().catch(() => ({}))) as Record<string, unknown>
  const email = String(b.email ?? "").trim().toLowerCase()
  if (!email) return NextResponse.json({ error: "email required" }, { status: 400 })

  const parsed = parseFields(b)
  if ("error" in parsed) return NextResponse.json({ error: parsed.error }, { status: 400 })

  const user = await prisma.user.findUnique({ where: { email }, select: { id: true } })
  if (!user) return NextResponse.json({ error: "ไม่พบ user อีเมลนี้ — ต้องเคยเข้าสู่ระบบอย่างน้อย 1 ครั้ง" }, { status: 404 })

  // gen id: max(CUSTOM_ID_BASE, maxId+1) — Product.id ไม่ auto
  const { _max } = await prisma.product.aggregate({ _max: { id: true } })
  const nextId = Math.max(CUSTOM_PRODUCT_ID_BASE, (_max.id ?? 0) + 1)

  await prisma.$transaction([
    prisma.product.create({
      data: { id: nextId, category: "buy", hidden: true, ...parsed.data },
    }),
    prisma.cartItem.create({
      data: { userId: user.id, productId: nextId, qty: 1, priceMode: parsed.priceMode },
    }),
  ])

  return NextResponse.json({ ok: true, productId: nextId })
}

// แก้ไขออเดอร์พิเศษ — ได้เฉพาะตอนยังอยู่ในตะกร้า (ลูกค้ายังไม่กดชำระ)
export async function PATCH(req: NextRequest) {
  const s = await auth()
  if (!isAdmin(s)) return NextResponse.json({ error: "forbidden" }, { status: 403 })

  const b = (await req.json().catch(() => ({}))) as Record<string, unknown>
  const pid = Number(b.productId)
  if (!Number.isInteger(pid)) return NextResponse.json({ error: "bad request" }, { status: 400 })

  // lock: ต้องยังมี CartItem ของ hidden product = ลูกค้ายังไม่กดชำระ
  const cartItem = await prisma.cartItem.findFirst({ where: { productId: pid, product: { hidden: true } } })
  if (!cartItem) return NextResponse.json({ error: "ลูกค้าชำระเงินแล้วหรือไม่พบในตะกร้า — แก้ไขไม่ได้" }, { status: 409 })

  const parsed = parseFields(b)
  if ("error" in parsed) return NextResponse.json({ error: parsed.error }, { status: 400 })

  await prisma.$transaction([
    prisma.product.update({ where: { id: pid }, data: parsed.data }),
    prisma.cartItem.update({ where: { id: cartItem.id }, data: { priceMode: parsed.priceMode } }),
  ])

  return NextResponse.json({ ok: true })
}

// ยกเลิกออเดอร์พิเศษ — เอาออกจากตะกร้าลูกค้า + ลบ hidden Product (ได้เฉพาะตอนยังไม่ชำระ)
export async function DELETE(req: NextRequest) {
  const s = await auth()
  if (!isAdmin(s)) return NextResponse.json({ error: "forbidden" }, { status: 403 })

  const b = (await req.json().catch(() => ({}))) as Record<string, unknown>
  const pid = Number(b.productId)
  if (!Number.isInteger(pid)) return NextResponse.json({ error: "bad request" }, { status: 400 })

  const cartItem = await prisma.cartItem.findFirst({ where: { productId: pid, product: { hidden: true } } })
  if (!cartItem) return NextResponse.json({ error: "ลูกค้าชำระเงินแล้วหรือไม่พบในตะกร้า — ยกเลิกไม่ได้" }, { status: 409 })

  await prisma.$transaction([
    prisma.cartItem.deleteMany({ where: { productId: pid } }),
    prisma.product.delete({ where: { id: pid } }),
  ])

  return NextResponse.json({ ok: true })
}
