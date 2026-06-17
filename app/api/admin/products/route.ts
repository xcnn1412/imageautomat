import { NextResponse, type NextRequest } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { isAdmin } from "@/lib/orders"

export const runtime = "nodejs"

// admin แก้ราคา/อัตราหัก ณ ที่จ่ายต่อสินค้า — gate + validate ฝั่ง server (partial update)
export async function PATCH(req: NextRequest) {
  const s = await auth()
  if (!isAdmin(s)) return NextResponse.json({ error: "forbidden" }, { status: 403 })

  const { id, whtRate, priceTHB } = (await req.json().catch(() => ({}))) as {
    id?: number
    whtRate?: number
    priceTHB?: number | null
  }
  const pid = Number(id)
  if (!Number.isInteger(pid)) return NextResponse.json({ error: "bad request" }, { status: 400 })

  const data: { whtRate?: number; priceTHB?: number | null } = {}
  if (whtRate !== undefined) {
    const rate = Number(whtRate)
    if (!Number.isInteger(rate) || rate < 0 || rate > 100) return NextResponse.json({ error: "bad whtRate" }, { status: 400 })
    data.whtRate = rate
  }
  if (priceTHB !== undefined) {
    if (priceTHB === null) data.priceTHB = null
    else {
      const price = Number(priceTHB)
      if (!Number.isInteger(price) || price < 0) return NextResponse.json({ error: "bad priceTHB" }, { status: 400 })
      data.priceTHB = price
    }
  }
  if (Object.keys(data).length === 0) return NextResponse.json({ error: "nothing to update" }, { status: 400 })

  await prisma.product.update({ where: { id: pid }, data })
  return NextResponse.json({ ok: true })
}
