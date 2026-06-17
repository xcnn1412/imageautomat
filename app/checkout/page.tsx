"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useCart } from "@/components/cart/cart-context"
import { PAYMENT_METHODS, type PaymentMethod } from "@/lib/payment-methods"

const baht = (n: number) => `฿${n.toLocaleString("th-TH")}`

export default function CheckoutPage() {
    const { items, subtotalTHB } = useCart()
    const [code, setCode] = useState("")
    const [method, setMethod] = useState<PaymentMethod>("ksher_qr")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function pay() {
        setLoading(true)
        setError("")
        const res = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code, method }),
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
                                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50">
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
                            <div className="mb-4 flex justify-between text-lg font-bold text-deep-space-blue">
                                <span>ยอดรวม</span>
                                <span>{baht(subtotalTHB)}</span>
                            </div>
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
