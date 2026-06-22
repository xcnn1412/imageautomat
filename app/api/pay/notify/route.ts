import { NextResponse, type NextRequest } from "next/server"
// @ts-expect-error ksher-pay ships no type declarations
import PaySDK from "ksher-pay"
import { prisma } from "@/lib/prisma"

export const runtime = "nodejs"

// Ksher เรียก webhook นี้เมื่อสถานะจ่ายเปลี่ยน
// URL นี้ต้องตั้งใน Ksher dashboard ให้ตรงกับ KSHER_NOTIFY_URL เป๊ะ (ใช้คำนวณลายเซ็น)
export async function POST(req: NextRequest) {
  const { KSHER_TOKEN: token, KSHER_NOTIFY_URL: notifyUrl } = process.env
  if (!token || !notifyUrl) return NextResponse.json({ error: "ksher not configured" }, { status: 503 })

  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: "bad body" }, { status: 400 })

  // ตรวจลายเซ็นก่อนเสมอ — ห้ามเชื่อ payload ที่ไม่ผ่าน sign (กันปลอม "paid")
  const sdk = new PaySDK({ host: "", token })
  if (!sdk.checkSignature(notifyUrl, body)) return NextResponse.json({ error: "bad signature" }, { status: 401 })

  // ponytail: ชื่อ field สถานะอิงเอกสาร Ksher — ยืนยันกับ payload จริงครั้งแรกที่ยิงเข้ามา
  // fail-safe: ถ้า field ไม่ตรง จะ mark "failed" ไม่มีทาง mark "paid" เกินจริง
  const merchantOrderId = body.merchant_order_id
  const paid = body.result === "SUCCESS" || body.status === "PAID" || body.pay_status === "PAID"
  if (merchantOrderId) {
    // เปลี่ยนได้เฉพาะตอนยังไม่ผ่าน (pending/failed) — กัน webhook ซ้ำ/มาช้าทับสถานะที่ admin เลื่อนไปแล้ว (processing/shipped)
    await prisma.order
      .updateMany({ where: { merchantOrderId, status: { in: ["pending", "failed"] } }, data: { status: paid ? "paid" : "failed" } })
      .catch(() => {}) // order ไม่เจอ = ไม่ใช่ของเรา ปล่อยผ่าน
  }
  return NextResponse.json({ code: "SUCCESS" }) // ack ให้ Ksher หยุด retry
}
