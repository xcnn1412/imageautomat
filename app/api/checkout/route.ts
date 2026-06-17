import { NextResponse, type NextRequest } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { unitSatang } from "@/lib/pricing"
import { createPayment } from "@/lib/payments"
import { isPaymentMethod, type PaymentMethod } from "@/lib/payment-methods"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  const s = await auth()
  if (!s?.user?.id) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

  const { code, method } = (await req.json()) as { code?: string; method?: string }
  const paymentMethod: PaymentMethod = isPaymentMethod(method) ? method : "ksher_qr"

  // อ่านตะกร้าจาก DB แล้ว "คำนวณราคาใหม่ฝั่ง server" — ไม่เชื่อราคาจาก client
  const cart = await prisma.cartItem.findMany({ where: { userId: s.user.id }, include: { product: true } })
  if (cart.length === 0) return NextResponse.json({ error: "ตะกร้าว่าง" }, { status: 400 })

  const items = cart.map((c) => ({
    productRef: `${c.product.category}-${c.product.id}`,
    productName: c.product.name,
    unitAmount: unitSatang(c.product.priceTHB),
    qty: c.qty,
  }))
  const subtotal = items.reduce((sum, i) => sum + i.unitAmount * i.qty, 0)

  // ส่วนลด — ตรวจฝั่ง server เท่านั้น
  let discountAmount = 0
  let discountCode: string | null = null
  if (code?.trim()) {
    const dc = await prisma.discountCode.findUnique({ where: { code: code.trim() } })
    const valid =
      dc &&
      dc.active &&
      (!dc.expiresAt || dc.expiresAt > new Date()) &&
      (!dc.minAmount || subtotal >= dc.minAmount) &&
      (dc.usageLimit == null || dc.usedCount < dc.usageLimit)
    if (!valid) return NextResponse.json({ error: "โค้ดส่วนลดใช้ไม่ได้" }, { status: 400 })
    discountAmount = dc.type === "percent" ? Math.floor((subtotal * dc.value) / 100) : Math.min(dc.value, subtotal)
    discountCode = dc.code
  }
  const total = Math.max(0, subtotal - discountAmount)

  const merchantOrderId = `IA${Date.now()}`
  const order = await prisma.order.create({
    data: { merchantOrderId, userId: s.user.id, subtotal, discountCode, discountAmount, total, paymentMethod, items: { create: items } },
  })

  try {
    const { url, reference } = await createPayment(paymentMethod, {
      merchantOrderId,
      amountSatang: total,
      note: `IMAGEAUTOMAT ${merchantOrderId}`,
      origin: req.nextUrl.origin,
    })
    await prisma.order.update({ where: { id: order.id }, data: { ksherReference: reference } })
    // ponytail: นับ usedCount ตอนเริ่มจ่าย (ถ้า user ทิ้งจะ over-count เล็กน้อย) — ย้ายไป webhook ถ้าซีเรียส
    if (discountCode) await prisma.discountCode.update({ where: { code: discountCode }, data: { usedCount: { increment: 1 } } })
    await prisma.cartItem.deleteMany({ where: { userId: s.user.id } }) // เคลียร์ตะกร้า
    return NextResponse.json({ url })
  } catch (e) {
    await prisma.order.update({ where: { id: order.id }, data: { status: "failed" } }).catch(() => {})
    return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 502 })
  }
}
