"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, MessageCircle, ShieldCheck } from "lucide-react"
import { useSession, signIn } from "next-auth/react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AddToCartButton } from "@/components/cart/add-to-cart-button"
import { DEPOSIT_THB, hasFullPrice, type PriceMode } from "@/lib/pricing"
import type { Product } from "@prisma/client"

const LINE = "https://lin.ee/Q5DSE1r"
const baht = (n: number) => `฿${n.toLocaleString("th-TH")}`

const CAT_LABEL: Record<string, { label: string; cls: string }> = {
  buy: { label: "ซื้อ", cls: "bg-tiger-orange/10 text-tiger-orange" },
  rent: { label: "เช่า", cls: "bg-deep-space-blue/10 text-deep-space-blue" },
  software: { label: "License", cls: "bg-violet-100 text-violet-700" },
}

type Spec = { label: string; value: string }

export function ProductDetailContent({ product }: { product: Product }) {
  const { status } = useSession()
  const isAuthed = status === "authenticated"
  // ไม่มีราคาเต็มจำนวน (null/0) → default เป็นมัดจำ (full จะเป็นปุ่มสอบถามราคา)
  const [mode, setMode] = useState<PriceMode>(hasFullPrice(product) ? "full" : "deposit")

  const canBuy = product.category === "buy" || product.category === "software"
  const cat = CAT_LABEL[product.category] ?? { label: product.category, cls: "bg-gray-100 text-gray-600" }

  const fullPrice = hasFullPrice(product) ? product.priceTHB : null
  const depositPrice = product.depositTHB ?? DEPOSIT_THB

  // ponytail: ถ้าไม่มีราคาเต็มจำนวน ให้ default เป็น deposit
  const specs: Spec[] = Array.isArray(product.specs) ? (product.specs as Spec[]) : []

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-8 lg:pt-36">
        {/* Breadcrumb */}
        <Link href="/shop" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-deep-space-blue/50 transition-colors hover:text-deep-space-blue">
          <ArrowLeft className="h-4 w-4" />
          กลับไปร้านค้า
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100/60">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-10"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              quality={90}
            />
            <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${cat.cls}`}>
              {cat.label}
            </span>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-3xl leading-tight text-deep-space-blue lg:text-4xl">{product.name}</h1>
            <p className="mt-3 text-base leading-relaxed text-deep-space-blue/60">{product.description}</p>

            {product.longDescription && (
              <p className="mt-4 text-sm leading-relaxed text-deep-space-blue/50">{product.longDescription}</p>
            )}

            {/* Price selector */}
            {canBuy && (
              <div className="mt-8">
                {isAuthed ? (
                  <>
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-deep-space-blue/40">เลือกราคา</p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      {/* ราคาเต็มจำนวน */}
                      <label className={`flex flex-1 cursor-pointer items-center gap-3 rounded-2xl border-2 p-4 transition-all ${mode === "full" ? "border-deep-space-blue bg-deep-space-blue/5" : "border-gray-200 hover:border-gray-300"}`}>
                        <input type="radio" name="priceMode" value="full" checked={mode === "full"} onChange={() => setMode("full")} className="sr-only" />
                        <span className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 ${mode === "full" ? "border-deep-space-blue bg-deep-space-blue" : "border-gray-300"}`}>
                          {mode === "full" && <span className="h-2 w-2 rounded-full bg-white" />}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-deep-space-blue/50">ราคาเต็มจำนวน</span>
                          <span className="text-xl font-bold text-deep-space-blue">
                            {fullPrice ? baht(fullPrice) : "สอบถามราคา"}
                          </span>
                        </div>
                      </label>

                      {/* ราคามัดจำ */}
                      <label className={`flex flex-1 cursor-pointer items-center gap-3 rounded-2xl border-2 p-4 transition-all ${mode === "deposit" ? "border-tiger-orange bg-tiger-orange/5" : "border-gray-200 hover:border-gray-300"}`}>
                        <input type="radio" name="priceMode" value="deposit" checked={mode === "deposit"} onChange={() => setMode("deposit")} className="sr-only" />
                        <span className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 ${mode === "deposit" ? "border-tiger-orange bg-tiger-orange" : "border-gray-300"}`}>
                          {mode === "deposit" && <span className="h-2 w-2 rounded-full bg-white" />}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-deep-space-blue/50">ราคามัดจำ</span>
                          <span className="text-xl font-bold text-tiger-orange">{baht(depositPrice)}</span>
                        </div>
                      </label>
                    </div>
                    <p className="mt-2 text-xs text-deep-space-blue/40">ราคาก่อน VAT 7% — จ่ายส่วนที่เหลือเมื่อรับสินค้า</p>

                    {mode === "full" && fullPrice === null ? (
                      <Link
                        href="/contact"
                        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-deep-space-blue py-4 text-sm font-bold text-white shadow-lg shadow-deep-space-blue/20 transition-colors hover:bg-tiger-orange"
                      >
                        <MessageCircle className="h-4 w-4" />
                        สอบถามราคา (ติดต่อเรา)
                      </Link>
                    ) : (
                      <AddToCartButton
                        productId={product.id}
                        mode={mode}
                        label={mode === "deposit" ? "วางมัดจำ" : "เพิ่มลงตะกร้า"}
                        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-deep-space-blue py-4 text-sm font-bold text-white shadow-lg shadow-deep-space-blue/20 transition-colors hover:bg-tiger-orange disabled:opacity-70"
                      />
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => signIn("google")}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-deep-space-blue py-4 text-sm font-bold text-white transition-colors hover:bg-tiger-orange"
                  >
                    เข้าสู่ระบบเพื่อดูราคาและสั่งซื้อ
                  </button>
                )}
              </div>
            )}

            {/* Rent / inquiry CTA */}
            {!canBuy && (
              <a
                href={LINE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-deep-space-blue py-4 text-sm font-bold text-white transition-colors hover:bg-tiger-orange"
              >
                <MessageCircle className="h-4 w-4" />
                สอบถามราคาเช่า
              </a>
            )}

            {/* Features */}
            {product.features.length > 0 && (
              <ul className="mt-8 space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-deep-space-blue/70">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-tiger-orange" />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            {/* Specs */}
            {specs.length > 0 && (
              <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50/50 p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-deep-space-blue/40">สเปค</p>
                <dl className="grid grid-cols-2 gap-3">
                  {specs.map((s, i) => (
                    <div key={i}>
                      <dt className="text-xs text-deep-space-blue/40">{s.label}</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-deep-space-blue">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Trust badge */}
            <div className="mt-8 flex items-center gap-2 text-xs text-deep-space-blue/40">
              <ShieldCheck className="h-4 w-4" />
              ชำระเงินปลอดภัย · ส่งสินค้าพร้อมใบกำกับภาษี · ซัพพอร์ตหลังการขาย
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
