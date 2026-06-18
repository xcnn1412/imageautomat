import { NextResponse, type NextRequest } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { unitSatangFor, hasFullPrice, type PriceMode } from "@/lib/pricing"
import { computeTax } from "@/lib/tax"
import { createPayment } from "@/lib/payments"
import { isPaymentMethod, type PaymentMethod } from "@/lib/payment-methods"
import { validateInvoice, buildAddressLine, type InvoiceInput } from "@/lib/invoice"

export const runtime = "nodejs"

type ParsedInvoice = {
  type: "personal" | "company"
  name: string
  taxId: string
  address: string // ประกอบเป็นบรรทัดเดียว
  branch: string | null
  email: string
  phone: string
  lineId: string | null
}

// คืน null = ไม่ออกใบกำกับ, {error} = กรอกไม่ถูก, ParsedInvoice = ใช้ได้
// validate ด้วย lib เดียวกับ client (ห้าม trust client) — ราคา/ภาษีคิดใหม่ฝั่ง server อยู่แล้ว
function parseInvoice(raw: unknown): ParsedInvoice | null | { error: string } {
  if (!raw || typeof raw !== "object") return null
  const r = raw as Record<string, unknown>
  if (r.type !== "personal" && r.type !== "company") return null
  const addr = (r.address && typeof r.address === "object" ? r.address : {}) as Record<string, unknown>
  const inv: InvoiceInput = {
    type: r.type,
    name: String(r.name ?? ""),
    taxId: String(r.taxId ?? ""),
    branch: String(r.branch ?? ""),
    email: String(r.email ?? ""),
    phone: String(r.phone ?? ""),
    lineId: String(r.lineId ?? ""),
    address: {
      houseNo: String(addr.houseNo ?? ""),
      soi: String(addr.soi ?? ""),
      road: String(addr.road ?? ""),
      subdistrict: String(addr.subdistrict ?? ""),
      district: String(addr.district ?? ""),
      province: String(addr.province ?? ""),
      zipcode: String(addr.zipcode ?? ""),
    },
  }
  const err = validateInvoice(inv)
  if (err) return { error: err }
  return {
    type: inv.type,
    name: inv.name.trim(),
    taxId: inv.taxId.replace(/\D/g, ""),
    address: buildAddressLine(inv.address),
    branch: inv.type === "company" ? inv.branch.trim() || "สำนักงานใหญ่" : null,
    email: inv.email.trim(),
    phone: inv.phone.replace(/\D/g, ""),
    lineId: inv.lineId.trim() || null,
  }
}

export async function POST(req: NextRequest) {
  const s = await auth()
  if (!s?.user?.id) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

  const body = (await req.json()) as { code?: string; method?: string; invoice?: unknown; policyAccepted?: boolean }
  if (body.policyAccepted !== true)
    return NextResponse.json({ error: "กรุณายอมรับนโยบายการสั่งซื้อและคืนสินค้า" }, { status: 400 })
  const { code, method } = body
  const paymentMethod: PaymentMethod = isPaymentMethod(method) ? method : "ksher_qr"

  const parsedInv = parseInvoice(body.invoice)
  if (parsedInv && "error" in parsedInv) return NextResponse.json({ error: parsedInv.error }, { status: 400 })
  if (!parsedInv) return NextResponse.json({ error: "กรุณากรอกข้อมูลใบกำกับภาษี / ใบเสร็จให้ครบ" }, { status: 400 })
  const invoice = parsedInv // บังคับมีเสมอ — ทุกออเดอร์ต้องมีข้อมูลใบกำกับ

  // อ่านตะกร้าจาก DB แล้ว "คำนวณราคาใหม่ฝั่ง server" — ไม่เชื่อราคาจาก client
  const cart = await prisma.cartItem.findMany({ where: { userId: s.user.id }, include: { product: true } })
  if (cart.length === 0) return NextResponse.json({ error: "ตะกร้าว่าง" }, { status: 400 })

  // กันสินค้าที่ยังไม่ตั้งราคาเต็มจำนวน (null/0) แต่อยู่ในตะกร้าแบบ full (จะ fallback ฿1,000) — ต้องสอบถามราคา
  const noPrice = cart.find((c) => c.priceMode !== "deposit" && !hasFullPrice(c.product))
  if (noPrice)
    return NextResponse.json(
      { error: `"${noPrice.product.name}" ยังไม่มีราคาเต็มจำนวน กรุณาเอาออกจากตะกร้าหรือติดต่อสอบถาม` },
      { status: 400 },
    )

  const items = cart.map((c) => {
    const mode = (c.priceMode === "deposit" ? "deposit" : "full") as PriceMode
    return {
      productRef: `${c.product.category}-${c.product.id}`,
      productName: c.product.name,
      unitAmount: unitSatangFor(c.product, mode),
      priceMode: mode,
      qty: c.qty,
      whtRate: c.product.whtRate,
    }
  })
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
      policyAcceptedAt: new Date(), // หลักฐานยอมรับนโยบาย (server timestamp)
      items: { create: items.map(({ priceMode, ...rest }) => ({ ...rest, priceMode })) },
      ...(invoice && {
        invoiceType: invoice.type,
        invoiceName: invoice.name,
        invoiceTaxId: invoice.taxId,
        invoiceAddress: invoice.address,
        invoiceBranch: invoice.branch,
        invoiceEmail: invoice.email,
        invoicePhone: invoice.phone,
        invoiceLineId: invoice.lineId,
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
