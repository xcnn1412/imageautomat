import { NextResponse, type NextRequest } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { unitSatang } from "@/lib/pricing"
import { computeTax } from "@/lib/tax"
import { createPayment } from "@/lib/payments"
import { isPaymentMethod, type PaymentMethod } from "@/lib/payment-methods"

export const runtime = "nodejs"

type Invoice = { type: "personal" | "company"; name: string; taxId: string; address: string; branch: string | null }

// คืน null = ไม่ออกใบกำกับ, "invalid" = กรอกไม่ครบ, Invoice = ใช้ได้
function parseInvoice(raw: unknown): Invoice | null | "invalid" {
  if (!raw || typeof raw !== "object") return null
  const r = raw as Record<string, unknown>
  if (r.type !== "personal" && r.type !== "company") return null
  const name = String(r.name ?? "").trim()
  const taxId = String(r.taxId ?? "").replace(/\D/g, "")
  const address = String(r.address ?? "").trim()
  if (!name || taxId.length !== 13 || !address) return "invalid"
  const branch = r.type === "company" ? String(r.branch ?? "").trim() || "สำนักงานใหญ่" : null
  return { type: r.type, name, taxId, address, branch }
}

export async function POST(req: NextRequest) {
  const s = await auth()
  if (!s?.user?.id) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

  const body = (await req.json()) as { code?: string; method?: string; invoice?: unknown }
  const { code, method } = body
  const paymentMethod: PaymentMethod = isPaymentMethod(method) ? method : "ksher_qr"

  const invoice = parseInvoice(body.invoice)
  if (invoice === "invalid")
    return NextResponse.json({ error: "กรอกข้อมูลใบกำกับภาษีให้ครบ (เลขผู้เสียภาษีต้อง 13 หลัก)" }, { status: 400 })

  // อ่านตะกร้าจาก DB แล้ว "คำนวณราคาใหม่ฝั่ง server" — ไม่เชื่อราคาจาก client
  const cart = await prisma.cartItem.findMany({ where: { userId: s.user.id }, include: { product: true } })
  if (cart.length === 0) return NextResponse.json({ error: "ตะกร้าว่าง" }, { status: 400 })

  const items = cart.map((c) => ({
    productRef: `${c.product.category}-${c.product.id}`,
    productName: c.product.name,
    unitAmount: unitSatang(c.product.priceTHB),
    qty: c.qty,
    whtRate: c.product.whtRate,
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
  // ภาษี — ราคาเป็นก่อน VAT, ยอดจ่าย = base + VAT − WHT. WHT เฉพาะนิติบุคคล
  const isCompany = invoice?.type === "company"
  const tax = computeTax(items.map((i) => ({ base: i.unitAmount * i.qty, whtRate: i.whtRate })), discountAmount, isCompany)

  const merchantOrderId = `IA${Date.now()}`
  const order = await prisma.order.create({
    data: {
      merchantOrderId,
      userId: s.user.id,
      subtotal,
      discountCode,
      discountAmount,
      baseAmount: tax.baseAmount,
      vatAmount: tax.vatAmount,
      whtAmount: tax.whtAmount,
      total: tax.total,
      paymentMethod,
      items: { create: items },
      ...(invoice && {
        invoiceType: invoice.type,
        invoiceName: invoice.name,
        invoiceTaxId: invoice.taxId,
        invoiceAddress: invoice.address,
        invoiceBranch: invoice.branch,
      }),
    },
  })

  try {
    const { url, reference } = await createPayment(paymentMethod, {
      merchantOrderId,
      amountSatang: tax.total,
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
