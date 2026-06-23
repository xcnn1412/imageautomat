"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Lock, PackageOpen } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useSession, signIn } from "next-auth/react"
import { cn } from "@/lib/utils"
import { DEPOSIT_THB, isBuyableCategory } from "@/lib/pricing"

type ShopProduct = {
    id: number
    name: string
    description: string
    image: string
    category: string
    priceTHB: number | null
    depositTHB: number | null
    stock: number
}

// แท็บมาตรฐาน — ประเภทอื่นที่ admin เพิ่ม จะต่อท้ายแบบ dynamic
const KNOWN_TABS: { key: string; label: string; hint: string }[] = [
    { key: "buy", label: "ซื้อตู้", hint: "เป็นเจ้าของตู้โฟโต้บูธ" },
    { key: "rent", label: "เช่าตู้", hint: "เช่าสำหรับงานอีเวนต์" },
    { key: "software", label: "Software", hint: "License ซอฟต์แวร์" },
]

const BADGE: Record<string, { label: string; cls: string }> = {
    buy: { label: "ซื้อ", cls: "bg-tiger-orange/10 text-tiger-orange" },
    rent: { label: "เช่า", cls: "bg-deep-space-blue/10 text-deep-space-blue" },
    software: { label: "License", cls: "bg-violet-100 text-violet-700" },
}

const baht = (n: number) => `฿${n.toLocaleString("th-TH")}`

export function ShopPageContent({ products }: { products: ShopProduct[] }) {
    const [tab, setTab] = useState<string>("buy")
    const { status } = useSession()
    const isAuthed = status === "authenticated"

    // แท็บมาตรฐาน + ประเภทใหม่ที่มีสินค้าจริง (ต่อท้าย, label = ชื่อประเภท)
    const known = new Set(KNOWN_TABS.map((t) => t.key))
    const extra = [...new Set(products.map((p) => p.category))].filter((c) => !known.has(c))
    const tabs = [...KNOWN_TABS, ...extra.map((c) => ({ key: c, label: c, hint: `หมวด ${c}` }))]

    const items = products.filter((p) => p.category === tab)
    const activeHint = tabs.find((t) => t.key === tab)?.hint

    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            {/* Hero header */}
            <header className="border-b border-gray-100 bg-linear-to-b from-gray-50/80 to-white">
                <div className="mx-auto max-w-7xl px-6 pb-10 pt-28 lg:px-8 lg:pb-12 lg:pt-36">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-tiger-orange">IMAGEAUTOMAT SHOP</span>
                    <h1 className="mt-3 font-serif text-4xl tracking-tight text-deep-space-blue lg:text-6xl">ร้านค้าออนไลน์</h1>
                    <p className="mt-3 max-w-xl text-base text-deep-space-blue/60 lg:text-lg">
                        ตู้โฟโต้บูธ ซื้อ · เช่า · ซอฟต์แวร์ — สั่งซื้อและชำระเงินออนไลน์ได้ทันที
                    </p>
                </div>
            </header>

            {/* Sticky category tabs */}
            <div className="sticky top-20 z-30 border-b border-gray-100 bg-white/90 backdrop-blur-md lg:top-24">
                <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-6 sm:gap-2 lg:px-8" role="tablist">
                    {tabs.map((t) => {
                        const count = products.filter((p) => p.category === t.key).length
                        const active = tab === t.key
                        return (
                            <button
                                key={t.key}
                                role="tab"
                                aria-selected={active}
                                onClick={() => setTab(t.key)}
                                className={cn(
                                    "-mb-px flex items-center gap-2 border-b-2 px-3 py-4 text-sm font-bold tracking-wide transition-colors sm:px-5",
                                    active
                                        ? "border-tiger-orange text-deep-space-blue"
                                        : "border-transparent text-deep-space-blue/40 hover:text-deep-space-blue/70"
                                )}
                            >
                                {t.label}
                                <span className={cn("rounded-full px-2 py-0.5 text-xs font-semibold", active ? "bg-tiger-orange/10 text-tiger-orange" : "bg-gray-100 text-deep-space-blue/40")}>
                                    {count}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Grid */}
            <section className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8 lg:pt-12">
                <p className="mb-6 text-sm text-deep-space-blue/50">
                    {activeHint} · {items.length} รายการ
                </p>

                {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <PackageOpen className="h-12 w-12 text-deep-space-blue/20" />
                        <p className="mt-4 font-semibold text-deep-space-blue">ยังไม่มีสินค้าในหมวดนี้</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 lg:gap-x-6 lg:gap-y-10 xl:grid-cols-4">
                        {items.map((p) => (
                            <ProductCard key={p.id} product={p} isAuthed={isAuthed} />
                        ))}
                    </div>
                )}
            </section>

            <Footer />
        </main>
    )
}

function ProductCard({ product: p, isAuthed }: { product: ShopProduct; isAuthed: boolean }) {
    const badge = BADGE[p.category] ?? { label: p.category, cls: "bg-gray-100 text-gray-600" }
    const fullPrice = p.priceTHB
    const depositPrice = p.depositTHB ?? DEPOSIT_THB
    const soldOut = isBuyableCategory(p.category) && p.stock <= 0

    return (
        <Link
            href={`/shop/${p.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-xl hover:shadow-deep-space-blue/5"
        >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-linear-to-br from-gray-50 to-gray-100/60">
                <span className={cn("absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[11px] font-bold", badge.cls)}>
                    {badge.label}
                </span>
                {soldOut && (
                    <span className="absolute right-3 top-3 z-10 rounded-full bg-red-500/90 px-2.5 py-1 text-[11px] font-bold text-white">
                        สินค้าหมด
                    </span>
                )}
                <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className={cn("object-contain p-6 transition-transform duration-500 group-hover:scale-105", soldOut && "opacity-40 grayscale")}
                    sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    quality={80}
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4">
                <h3 className="line-clamp-2 min-h-11 text-sm font-semibold leading-snug text-deep-space-blue">{p.name}</h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-deep-space-blue/50">{p.description}</p>

                {/* Price */}
                <div className="mt-3 min-h-6">
                    {isAuthed ? (
                        <div className="flex flex-col gap-0.5">
                            <p className="text-lg font-bold text-deep-space-blue">
                                {fullPrice ? baht(fullPrice) : p.category === "rent" ? "เช่ารายวัน / อีเวนต์" : "สอบถามราคา"}
                            </p>
                            {isBuyableCategory(p.category) && (
                                <p className="text-xs text-deep-space-blue/40">
                                    มัดจำ {baht(depositPrice)}
                                    {soldOut ? (
                                        <span className="ml-1 font-semibold text-red-500">· สินค้าหมด</span>
                                    ) : (
                                        <span className="ml-1 text-emerald-600">· เหลือ {p.stock} ชิ้น</span>
                                    )}
                                </p>
                            )}
                        </div>
                    ) : (
                        <button
                            onClick={(e) => { e.preventDefault(); signIn("google") }}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-tiger-orange transition-opacity hover:opacity-80"
                        >
                            <Lock className="h-3.5 w-3.5" />
                            เข้าสู่ระบบเพื่อดูราคา
                        </button>
                    )}
                </div>

                <div className="mt-3 text-xs font-semibold text-tiger-orange/70 group-hover:text-tiger-orange">
                    ดูรายละเอียด →
                </div>
            </div>
        </Link>
    )
}
