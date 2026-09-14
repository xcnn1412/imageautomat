import { NextResponse, type NextRequest } from "next/server"
import { requireAdmin } from "@/auth"
import { prisma } from "@/lib/prisma"
import { isOrderStatus } from "@/lib/orders"

export const runtime = "nodejs"

// admin เปลี่ยนสถานะออเดอร์ — gate ด้วย requireAdmin, validate status ฝั่ง server
export async function PATCH(req: NextRequest) {
  const forbidden = await requireAdmin()
  if (forbidden) return forbidden

  const { id, status } = (await req.json().catch(() => ({}))) as { id?: string; status?: string }
  if (!id || !status || !isOrderStatus(status)) return NextResponse.json({ error: "bad request" }, { status: 400 })

  await prisma.order.update({ where: { id }, data: { status } })
  return NextResponse.json({ ok: true })
}
