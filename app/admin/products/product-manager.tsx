"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { WhtSelect } from "./wht-select"
import { PriceInput } from "./price-input"

export type AdminProduct = {
  id: number
  name: string
  category: string
  priceTHB: number | null
  image: string
  whtRate: number
}

const CAT: Record<string, { label: string; cls: string }> = {
  buy: { label: "ซื้อ", cls: "bg-blue-100 text-blue-700" },
  rent: { label: "เช่า", cls: "bg-purple-100 text-purple-700" },
}

type CatFilter = "all" | "buy" | "rent"

export function ProductManager({ products }: { products: AdminProduct[] }) {
  const [q, setQ] = useState("")
  const [cat, setCat] = useState<CatFilter>("all")
  const [onlyWht, setOnlyWht] = useState(false)

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    return products.filter(
      (p) =>
        (cat === "all" || p.category === cat) &&
        (!onlyWht || p.whtRate > 0) &&
        (term === "" || p.name.toLowerCase().includes(term) || String(p.id).includes(term)),
    )
  }, [products, q, cat, onlyWht])

  const withWht = products.filter((p) => p.whtRate > 0).length
  const tabs: { key: CatFilter; label: string; n: number }[] = [
    { key: "all", label: "ทั้งหมด", n: products.length },
    { key: "buy", label: "ซื้อ", n: products.filter((p) => p.category === "buy").length },
    { key: "rent", label: "เช่า", n: products.filter((p) => p.category === "rent").length },
  ]

  return (
    <div>
      {/* แถบควบคุม */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 sm:min-w-[240px] sm:flex-none">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-deep-space-blue/30" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ค้นหาชื่อ หรือ #id"
            className="w-full rounded-xl border border-gray-200 py-2.5 pl-9 pr-4 text-sm outline-none focus:border-tiger-orange"
          />
        </div>

        <div className="flex gap-1 rounded-xl bg-gray-100 p-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setCat(t.key)}
              className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors ${
                cat === t.key ? "bg-white text-deep-space-blue shadow-sm" : "text-deep-space-blue/50 hover:text-deep-space-blue"
              }`}
            >
              {t.label} <span className="text-xs opacity-60">{t.n}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOnlyWht((v) => !v)}
          className={`rounded-xl border px-3 py-2 text-sm font-semibold transition-colors ${
            onlyWht ? "border-tiger-orange bg-tiger-orange/5 text-tiger-orange" : "border-gray-200 text-deep-space-blue/60 hover:border-tiger-orange/40"
          }`}
        >
          เฉพาะที่หัก ({withWht})
        </button>
      </div>

      {/* ตาราง */}
      <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/60 text-left text-xs font-bold text-deep-space-blue/50">
              <th className="w-14 px-4 py-2.5" />
              <th className="w-14 px-2 py-2.5">#ID</th>
              <th className="px-2 py-2.5">ชื่อสินค้า</th>
              <th className="w-16 px-2 py-2.5">หมวด</th>
              <th className="w-36 px-2 py-2.5 text-right">ราคา (ก่อน VAT)</th>
              <th className="w-44 px-4 py-2.5">หัก ณ ที่จ่าย</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-deep-space-blue/40">
                  ไม่พบสินค้า
                </td>
              </tr>
            ) : (
              filtered.map((p) => {
                const c = CAT[p.category] ?? { label: p.category, cls: "bg-gray-100 text-gray-600" }
                return (
                  <tr key={p.id} className="transition-colors hover:bg-gray-50/60">
                    <td className="px-4 py-3">
                      <span className="relative block h-10 w-10 overflow-hidden rounded-lg bg-gray-50">
                        <Image src={p.image} alt={p.name} fill className="object-contain p-1" sizes="44px" />
                      </span>
                    </td>
                    <td className="px-2 py-3 font-mono text-xs text-deep-space-blue/40">#{p.id}</td>
                    <td className="px-2 py-3 text-deep-space-blue">
                      <span className="line-clamp-1" title={p.name}>
                        {p.name}
                      </span>
                    </td>
                    <td className="px-2 py-3">
                      <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${c.cls}`}>{c.label}</span>
                    </td>
                    <td className="px-2 py-3">
                      <PriceInput id={p.id} priceTHB={p.priceTHB} />
                    </td>
                    <td className="px-4 py-3">
                      <WhtSelect id={p.id} whtRate={p.whtRate} />
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-deep-space-blue/40">แสดง {filtered.length} จาก {products.length} รายการ</p>
    </div>
  )
}
