"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react"
import { useCart } from "./cart-context"

const baht = (n: number) => `฿${n.toLocaleString("th-TH")}`

export function CartDrawer() {
    const { items, count, open, setOpen, subtotalTHB, setQty, remove } = useCart()

    return (
        <div className={`fixed inset-0 z-[100] ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-deep-space-blue/50 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
                onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <aside
                className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header */}
                <header className="flex items-center justify-between px-6 py-5">
                    <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tiger-orange/10 text-tiger-orange">
                            <ShoppingBag className="h-5 w-5" />
                        </span>
                        <div>
                            <h2 className="font-serif text-xl leading-none text-deep-space-blue">ตะกร้าของคุณ</h2>
                            <p className="mt-1 text-xs text-deep-space-blue/40">{count} ชิ้น</p>
                        </div>
                    </div>
                    <button onClick={() => setOpen(false)} className="rounded-full p-2 text-deep-space-blue/60 transition-colors hover:bg-gray-100 hover:text-deep-space-blue" aria-label="ปิด">
                        <X className="h-5 w-5" />
                    </button>
                </header>

                {/* Items */}
                <div className="flex-1 overflow-y-auto px-6">
                    {items.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center text-center">
                            <span className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-50 text-deep-space-blue/20">
                                <ShoppingBag className="h-9 w-9" />
                            </span>
                            <p className="font-semibold text-deep-space-blue">ตะกร้ายังว่างอยู่</p>
                            <p className="mt-1 text-sm text-deep-space-blue/40">เลือกสินค้าที่คุณสนใจได้เลย</p>
                            <Link href="/shop" onClick={() => setOpen(false)} className="mt-5 rounded-full bg-deep-space-blue px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-tiger-orange">
                                เลือกสินค้า
                            </Link>
                        </div>
                    ) : (
                        <ul className="space-y-3 py-2">
                            {items.map((i) => (
                                <li
                                    key={i.productId}
                                    className="flex gap-4 rounded-2xl border border-gray-100 p-3 [animation:cartItemIn_0.25s_ease-out]"
                                >
                                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50">
                                        <Image src={i.image} alt={i.name} fill className="object-contain p-2" sizes="96px" />
                                    </div>
                                    <div className="flex min-w-0 flex-1 flex-col">
                                        <p className="line-clamp-2 text-sm font-semibold text-deep-space-blue">{i.name}</p>
                                        <div className="mt-0.5 flex items-center gap-2">
                                            <p className="text-sm font-bold text-tiger-orange">{baht(i.unitTHB)}</p>
                                            <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${i.priceMode === "deposit" ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-500"}`}>
                                                {i.priceMode === "deposit" ? "มัดจำ" : "เต็มจำนวน"}
                                            </span>
                                        </div>
                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center gap-1 rounded-full border border-gray-200 p-0.5">
                                                <button onClick={() => setQty(i.productId, i.qty - 1)} className="flex h-7 w-7 items-center justify-center rounded-full text-deep-space-blue/70 transition-colors hover:bg-gray-100" aria-label="ลด">
                                                    <Minus className="h-3.5 w-3.5" />
                                                </button>
                                                <span className="w-7 text-center text-sm font-semibold">{i.qty}</span>
                                                <button onClick={() => setQty(i.productId, i.qty + 1)} className="flex h-7 w-7 items-center justify-center rounded-full text-deep-space-blue/70 transition-colors hover:bg-gray-100" aria-label="เพิ่ม">
                                                    <Plus className="h-3.5 w-3.5" />
                                                </button>
                                            </div>
                                            <button onClick={() => remove(i.productId)} className="rounded-full p-2 text-deep-space-blue/30 transition-colors hover:bg-red-50 hover:text-red-500" aria-label="ลบ">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <footer className="border-t border-gray-100 bg-gray-50/50 px-6 py-5">
                        <div className="mb-1 flex items-center justify-between">
                            <span className="text-sm text-deep-space-blue/60">ยอดรวม</span>
                            <span className="text-xl font-bold text-deep-space-blue">{baht(subtotalTHB)}</span>
                        </div>
                        <p className="mb-4 text-xs text-deep-space-blue/40">ส่วนลดและช่องทางชำระเงินเลือกได้ในขั้นตอนถัดไป</p>
                        <Link
                            href="/checkout"
                            onClick={() => setOpen(false)}
                            className="flex w-full items-center justify-center rounded-full bg-tiger-orange py-4 text-sm font-bold text-white shadow-lg shadow-tiger-orange/25 transition-all hover:bg-deep-space-blue hover:shadow-deep-space-blue/25"
                        >
                            ดำเนินการชำระเงิน
                        </Link>
                    </footer>
                )}
            </aside>
        </div>
    )
}
