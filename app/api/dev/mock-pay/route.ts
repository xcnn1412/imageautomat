import { NextResponse, type NextRequest } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export const runtime = "nodejs"

// ponytail: dev-only mock — จำลอง webhook จ่ายสำเร็จ เพื่อพรีวิวหน้า "ออเดอร์ของฉัน" โดยไม่ต้องต่อ Ksher จริง
// เปลี่ยนเฉพาะออเดอร์ของ user เอง + สถานะ pending เท่านั้น → ปลอม "paid" เกินจริงไม่ได้
export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV === "production") return NextResponse.json({ error: "not found" }, { status: 404 })

  const s = await auth()
  if (!s?.user?.id) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

  const { merchantOrderId } = (await req.json().catch(() => ({}))) as { merchantOrderId?: string }
  if (!merchantOrderId) return NextResponse.json({ error: "merchantOrderId required" }, { status: 400 })

  const r = await prisma.order.updateMany({
    where: { merchantOrderId, userId: s.user.id, status: "pending" },
    data: { status: "paid" },
  })
  return NextResponse.json({ updated: r.count })
}
