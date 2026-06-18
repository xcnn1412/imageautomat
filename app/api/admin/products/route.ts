import { NextResponse, type NextRequest } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { isAdmin } from "@/lib/orders"

export const runtime = "nodejs"

// admin แก้ข้อมูลสินค้าทุกฟิลด์ — gate + validate ฝั่ง server
export async function PATCH(req: NextRequest) {
  const s = await auth()
  if (!isAdmin(s)) return NextResponse.json({ error: "forbidden" }, { status: 403 })

  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>
  const pid = Number(body.id)
  if (!Number.isInteger(pid)) return NextResponse.json({ error: "bad request" }, { status: 400 })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: Record<string, any> = {}

  if (body.name !== undefined) {
    const v = String(body.name).trim()
    if (!v) return NextResponse.json({ error: "name required" }, { status: 400 })
    data.name = v
  }
  if (body.description !== undefined) data.description = String(body.description).trim()
  if (body.longDescription !== undefined) data.longDescription = body.longDescription ? String(body.longDescription).trim() : null
  if (body.image !== undefined) data.image = String(body.image).trim()
  if (body.category !== undefined) {
    const v = String(body.category)
    if (!["buy", "rent", "software"].includes(v)) return NextResponse.json({ error: "bad category" }, { status: 400 })
    data.category = v
  }
  if (body.features !== undefined) {
    if (!Array.isArray(body.features)) return NextResponse.json({ error: "features must be array" }, { status: 400 })
    data.features = (body.features as unknown[]).map(String)
  }
  if (body.specs !== undefined) {
    if (!Array.isArray(body.specs)) return NextResponse.json({ error: "specs must be array" }, { status: 400 })
    data.specs = body.specs
  }
  if (body.whtRate !== undefined) {
    const rate = Number(body.whtRate)
    if (!Number.isInteger(rate) || rate < 0 || rate > 100) return NextResponse.json({ error: "bad whtRate" }, { status: 400 })
    data.whtRate = rate
  }
  if (body.priceTHB !== undefined) {
    if (body.priceTHB === null) { data.priceTHB = null }
    else {
      const v = Number(body.priceTHB)
      if (!Number.isInteger(v) || v < 0) return NextResponse.json({ error: "bad priceTHB" }, { status: 400 })
      data.priceTHB = v
    }
  }
  if (body.depositTHB !== undefined) {
    if (body.depositTHB === null) { data.depositTHB = null }
    else {
      const v = Number(body.depositTHB)
      if (!Number.isInteger(v) || v < 0) return NextResponse.json({ error: "bad depositTHB" }, { status: 400 })
      data.depositTHB = v
    }
  }

  if (Object.keys(data).length === 0) return NextResponse.json({ error: "nothing to update" }, { status: 400 })

  await prisma.product.update({ where: { id: pid }, data })
  return NextResponse.json({ ok: true })
}
