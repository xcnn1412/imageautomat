"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useCart } from "@/components/cart/cart-context"
import { PAYMENT_METHODS, type PaymentMethod } from "@/lib/payment-methods"
import { computeTax, VAT_RATE } from "@/lib/tax"
import { InvoiceForm } from "@/components/checkout/invoice-form"
import { emptyInvoice, validateInvoice, type InvoiceInput } from "@/lib/invoice"

const baht = (n: number) => `฿${n.toLocaleString("th-TH")}`
const money = (satang: number) =>
    `฿${(satang / 100).toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

export default function CheckoutPage() {
    const { items } = useCart()
    const [code, setCode] = useState("")
    const [method, setMethod] = useState<PaymentMethod>("ksher_qr")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    // ใบกำกับภาษี / ใบเสร็จ — บังคับกรอกทุกคน (เลือกบุคคลธรรมดา / นิติบุคคล)
    const [invoice, setInvoice] = useState<InvoiceInput>(emptyInvoice)
    const [agreed, setAgreed] = useState(false) // ยอมรับนโยบายสั่งซื้อ/คืนสินค้า

    // พรีวิวภาษี (ส่วนลดคิดจริงตอนกดชำระฝั่ง server) — ราคาเป็นก่อน VAT
    const isCompany = invoice.type === "company"
    const tax = computeTax(items.map((i) => ({ base: i.unitTHB * 100 * i.qty, whtRate: i.whtRate })), 0, isCompany)

    async function pay() {
        setError("")
        if (!agreed) {
            setError("กรุณายอมรับนโยบายการสั่งซื้อและคืนสินค้าก่อนชำระเงิน")
            return
        }
        const err = validateInvoice(invoice)
        if (err) {
            setError(err)
            return
        }
        setLoading(true)
        const res = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code, method, invoice, policyAccepted: true }),
        })
        const data = await res.json()
        if (!res.ok) {
            setError(data.error ?? "เกิดข้อผิดพลาด")
            setLoading(false)
            return
        }
        window.location.href = data.url
    }

    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <section className="mx-auto max-w-2xl px-6 pb-24 pt-28 lg:pt-36">
                <h1 className="mb-8 font-serif text-3xl text-deep-space-blue lg:text-4xl">ชำระเงิน</h1>

                {items.length === 0 ? (
                    <div className="text-center">
                        <p className="text-deep-space-blue/50">ตะกร้าว่างเปล่า</p>
                        <Link href="/shop" className="mt-4 inline-block font-bold text-tiger-orange">
                            ไปเลือกสินค้า →
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* รายการ */}
                        <ul className="space-y-4">
                            {items.map((i) => (
                                <li key={i.productId} className="flex items-center gap-4">
                                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-50">
                                        <Image src={i.image} alt={i.name} fill className="object-contain p-2" sizes="64px" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="line-clamp-1 text-sm font-semibold text-deep-space-blue">{i.name}</p>
                                        <p className="text-xs text-deep-space-blue/50">
                                            {baht(i.unitTHB)} × {i.qty}
                                        </p>
                                    </div>
                                    <span className="font-bold text-deep-space-blue">{baht(i.unitTHB * i.qty)}</span>
                                </li>
                            ))}
                        </ul>

                        {/* โค้ดส่วนลด */}
                        <div className="mt-8">
                            <label className="mb-2 block text-sm font-bold text-deep-space-blue">โค้ดส่วนลด</label>
                            <input
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                placeholder="กรอกโค้ด (ถ้ามี)"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-tiger-orange"
                            />
                            <p className="mt-1 text-xs text-deep-space-blue/40">ส่วนลดจะคำนวณตอนกดชำระเงิน</p>
                        </div>

                        {/* ใบเสร็จ / ใบกำกับภาษี — บังคับกรอกทุกคน */}
                        <div className="mt-8">
                            <p className="text-sm font-bold text-deep-space-blue">ข้อมูลใบเสร็จ / ใบกำกับภาษี</p>
                            <p className="mt-0.5 text-xs text-deep-space-blue/40">กรอกข้อมูลให้ครบเพื่อออกใบกำกับภาษี — เลือกประเภทผู้ซื้อด้านล่าง</p>
                            <InvoiceForm value={invoice} onChange={setInvoice} />
                        </div>

                        {/* ช่องทางจ่าย */}
                        <div className="mt-8">
                            <p className="mb-3 text-sm font-bold text-deep-space-blue">ช่องทางชำระเงิน</p>
                            <div className="space-y-2">
                                {PAYMENT_METHODS.map((m) => (
                                    <label
                                        key={m.id}
                                        className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm transition-colors ${method === m.id ? "border-tiger-orange bg-tiger-orange/5" : "border-gray-200"}`}
                                    >
                                        <input
                                            type="radio"
                                            name="method"
                                            checked={method === m.id}
                                            onChange={() => setMethod(m.id)}
                                            className="accent-tiger-orange"
                                        />
                                        <span className="font-medium text-deep-space-blue">{m.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* สรุป + จ่าย */}
                        <div className="mt-8 border-t border-gray-100 pt-6">
                            <dl className="mb-4 space-y-2 text-sm">
                                <div className="flex justify-between text-deep-space-blue/70">
                                    <dt>ยอดก่อน VAT</dt>
                                    <dd>{money(tax.baseAmount)}</dd>
                                </div>
                                <div className="flex justify-between text-deep-space-blue/70">
                                    <dt>VAT {VAT_RATE}%</dt>
                                    <dd>+{money(tax.vatAmount)}</dd>
                                </div>
                                {tax.whtByRate.map((w) => (
                                    <div key={w.rate} className="flex justify-between text-deep-space-blue/70">
                                        <dt>หัก ณ ที่จ่าย {w.rate}%</dt>
                                        <dd className="text-tiger-orange">−{money(w.amount)}</dd>
                                    </div>
                                ))}
                                <div className="flex justify-between border-t border-gray-100 pt-2 text-lg font-bold text-deep-space-blue">
                                    <dt>ยอดชำระ</dt>
                                    <dd>{money(tax.total)}</dd>
                                </div>
                            </dl>
                            {isCompany && (
                                <p className="mb-3 text-xs text-deep-space-blue/40">
                                    หัก ณ ที่จ่ายเฉพาะรายการบริการ · ส่วนลดคำนวณตอนกดชำระเงิน
                                </p>
                            )}
                            <label className="mb-4 flex cursor-pointer items-start gap-2.5 text-sm">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="mt-0.5 h-4 w-4 shrink-0 accent-tiger-orange"
                                />
                                <span className="text-deep-space-blue/70">
                                    ฉันได้อ่านและยอมรับ{" "}
                                    <Link href="/policy" target="_blank" className="font-semibold text-tiger-orange underline">
                                        นโยบายการสั่งซื้อและคืนสินค้า
                                    </Link>
                                </span>
                            </label>

                            {error && <p className="mb-3 text-sm text-red-600">{error}</p>}
                            <button
                                onClick={pay}
                                disabled={loading}
                                className="w-full rounded-full bg-deep-space-blue py-4 text-sm font-bold text-white transition-colors hover:bg-tiger-orange disabled:opacity-60"
                            >
                                {loading ? "กำลังไปหน้าชำระเงิน..." : "ชำระเงิน"}
                            </button>
                        </div>
                    </>
                )}
            </section>
            <Footer />
        </main>
    )
}
