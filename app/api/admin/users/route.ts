import { NextResponse, type NextRequest } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { isAdmin } from "@/lib/orders"

export const runtime = "nodejs"

// admin อนุมัติ/ระงับสมาชิก — approvedAt: now() = อนุมัติ, null = รออนุมัติ/ระงับ
export async function PATCH(req: NextRequest) {
  const s = await auth()
  if (!isAdmin(s)) return NextResponse.json({ error: "forbidden" }, { status: 403 })

  const { id, approved } = (await req.json().catch(() => ({}))) as { id?: string; approved?: boolean }
  if (!id || typeof approved !== "boolean") return NextResponse.json({ error: "bad request" }, { status: 400 })

  await prisma.user.update({ where: { id }, data: { approvedAt: approved ? new Date() : null } })
  // signIn gate ทำงานแค่ตอน login → ระงับต้องลบ session เดิมด้วย ไม่งั้น user ที่ login ค้างยังใช้ได้จนหมดอายุ
  if (!approved) await prisma.session.deleteMany({ where: { userId: id } })
  return NextResponse.json({ ok: true })
}
