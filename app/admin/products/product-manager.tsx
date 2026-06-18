"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Pencil, Plus, Search, Trash2, X } from "lucide-react"
import { DEPOSIT_THB } from "@/lib/pricing"
import { payablePreview, computeTax } from "@/lib/tax"

type Spec = { label: string; value: string }

export type AdminProduct = {
  id: number
  name: string
  description: string
  longDescription: string | null
  features: string[]
  specs: unknown // Prisma Json
  category: string
  priceTHB: number | null
  depositTHB: number | null
  image: string
  whtRate: number
}

const CAT: Record<string, { label: string; cls: string }> = {
  buy: { label: "ซื้อ", cls: "bg-blue-100 text-blue-700" },
  rent: { label: "เช่า", cls: "bg-purple-100 text-purple-700" },
  software: { label: "Software", cls: "bg-violet-100 text-violet-700" },
}

type CatFilter = "all" | "buy" | "rent" | "software"

const baht = (n: number | null) => (n ? `฿${n.toLocaleString("th-TH")}` : "—")
const bahtSat = (sat: number) => `฿${(sat / 100).toLocaleString("th-TH", { maximumFractionDigits: 2 })}`

// เซลล์ "ลูกค้าจ่าย" ต่อโหมด — บุคคลธรรมดา (รวม VAT) + นิติบุคคล (หัก WHT) ถ้ามี
function PayCell({ pay, whtRate }: { pay: ReturnType<typeof payablePreview> | null; whtRate: number }) {
  return (
    <td className="px-2 py-3 text-right leading-tight">
      <span className="block text-sm font-semibold text-deep-space-blue">{pay ? bahtSat(pay.personalSatang) : "—"}</span>
      {pay && whtRate > 0 && (
        <span className="block text-[11px] text-deep-space-blue/40" title="ผู้ซื้อนิติบุคคล: หัก ณ ที่จ่ายแล้ว">
          นิติฯ {bahtSat(pay.companySatang)}
        </span>
      )}
    </td>
  )
}

// ─── EditDrawer ──────────────────────────────────────────────────────────────

function EditDrawer({ product, onClose, onSaved }: { product: AdminProduct; onClose: () => void; onSaved: (p: AdminProduct) => void }) {
  const specs = Array.isArray(product.specs) ? (product.specs as Spec[]) : []
  const [form, setForm] = useState({
    name: product.name,
    description: product.description,
    longDescription: product.longDescription ?? "",
    image: product.image,
    category: product.category,
    priceTHB: product.priceTHB !== null ? String(product.priceTHB) : "",
    depositTHB: product.depositTHB !== null ? String(product.depositTHB) : "",
    whtRate: String(product.whtRate),
    features: product.features.join("\n"),
    specs: specs.map((s) => `${s.label}|${s.value}`).join("\n"),
  })
  const [saving, setSaving] = useState(false)
  const [err, setErr] = useState("")

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  async function save() {
    setSaving(true)
    setErr("")
    try {
      const body: Record<string, unknown> = {
        id: product.id,
        name: form.name,
        description: form.description,
        longDescription: form.longDescription || null,
        image: form.image,
        category: form.category,
        whtRate: Number(form.whtRate),
        priceTHB: form.priceTHB !== "" ? Number(form.priceTHB) : null,
        depositTHB: form.depositTHB !== "" ? Number(form.depositTHB) : null,
        features: form.features.split("\n").map((s) => s.trim()).filter(Boolean),
        specs: form.specs
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean)
          .map((s) => {
            const [label, ...rest] = s.split("|")
            return { label: label.trim(), value: rest.join("|").trim() }
          }),
      }
      const res = await fetch("/api/admin/products", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
      if (!res.ok) { setErr((await res.json()).error ?? "เกิดข้อผิดพลาด"); return }
      onSaved({
        ...product,
        name: form.name,
        description: form.description,
        longDescription: form.longDescription || null,
        image: form.image,
        category: form.category,
        whtRate: Number(form.whtRate),
        priceTHB: form.priceTHB !== "" ? Number(form.priceTHB) : null,
        depositTHB: form.depositTHB !== "" ? Number(form.depositTHB) : null,
        features: form.features.split("\n").map((s) => s.trim()).filter(Boolean),
        specs: form.specs.split("\n").map((s) => s.trim()).filter(Boolean).map((s) => {
          const [label, ...rest] = s.split("|")
          return { label: label.trim(), value: rest.join("|").trim() }
        }),
      })
      onClose()
    } finally {
      setSaving(false)
    }
  }

  const field = "w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-tiger-orange"

  // สรุปยอดที่ต้องได้รับ (live) — computeTax ตัวเดียวกับ checkout, กรณีนิติบุคคล (รวมหัก WHT)
  const wht = Number(form.whtRate) || 0
  const calc = (baseTHB: number) => computeTax([{ base: Math.round(baseTHB * 100), whtRate: wht }], 0, true)
  const taxFull = form.priceTHB !== "" ? calc(Number(form.priceTHB)) : null
  const taxDep = calc(form.depositTHB !== "" ? Number(form.depositTHB) : DEPOSIT_THB)
  const fmt = (sat: number, sign: string) => (sat === 0 ? bahtSat(0) : `${sign}${bahtSat(sat)}`)
  const sumRows = [
    { label: "ยอดก่อน VAT", sign: "", full: taxFull?.baseAmount, dep: taxDep.baseAmount },
    { label: "VAT 7%", sign: "+", full: taxFull?.vatAmount, dep: taxDep.vatAmount },
    { label: wht > 0 ? `หัก ณ ที่จ่าย ${wht}%` : "หัก ณ ที่จ่าย", sign: "−", full: taxFull?.whtAmount, dep: taxDep.whtAmount },
  ]

  return (
    <div className="fixed inset-0 z-200" aria-modal>
      <div className="absolute inset-0 bg-deep-space-blue/50 backdrop-blur-sm" onClick={onClose} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-xl flex-col bg-white shadow-2xl">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div>
            <h2 className="font-serif text-xl text-deep-space-blue">แก้ไขสินค้า</h2>
            <p className="text-xs text-deep-space-blue/40">#{product.id} · {product.name}</p>
          </div>
          <button onClick={onClose} className="rounded-full p-2 text-deep-space-blue/50 hover:bg-gray-100"><X className="h-5 w-5" /></button>
        </header>

        {/* Body */}
        <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
          {/* Image preview */}
          <div className="flex items-center gap-4">
            <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-50">
              <Image src={form.image || "/placeholder.png"} alt="" fill className="object-contain p-1" sizes="64px" />
            </span>
            <div className="flex-1">
              <label className="mb-1 block text-xs font-semibold text-deep-space-blue/50">URL รูปภาพ</label>
              <input value={form.image} onChange={set("image")} className={field} placeholder="/catalogs/images/..." />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-deep-space-blue/50">ชื่อสินค้า *</label>
            <input value={form.name} onChange={set("name")} className={field} />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-deep-space-blue/50">หมวดหมู่</label>
            <select value={form.category} onChange={set("category")} className={field}>
              <option value="buy">ซื้อ</option>
              <option value="rent">เช่า</option>
              <option value="software">Software</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-deep-space-blue/50">คำอธิบายสั้น (แสดงบนการ์ด)</label>
            <textarea rows={2} value={form.description} onChange={set("description")} className={field} />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-deep-space-blue/50">คำอธิบายยาว (แสดงหน้ารายละเอียด)</label>
            <textarea rows={4} value={form.longDescription} onChange={set("longDescription")} className={field} placeholder="รายละเอียดเพิ่มเติม..." />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs font-semibold text-deep-space-blue/50">ราคาเต็ม (บาท, ก่อน VAT)</label>
              <input type="number" min={0} value={form.priceTHB} onChange={set("priceTHB")} className={field} placeholder={`fallback ฿${DEPOSIT_THB}`} />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-deep-space-blue/50">ราคามัดจำ (บาท, ก่อน VAT)</label>
              <input type="number" min={0} value={form.depositTHB} onChange={set("depositTHB")} className={field} placeholder={`fallback ฿${DEPOSIT_THB}`} />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-deep-space-blue/50">WHT (%)</label>
            <select value={form.whtRate} onChange={set("whtRate")} className={field}>
              <option value="0">0% — ไม่หัก (ซื้อสินค้า)</option>
              <option value="3">3% — จ้างผลิต/บริการ</option>
              <option value="5">5% — ค่าเช่า software</option>
            </select>
          </div>

          <div>
            <label className="mb-1 flex items-center justify-between text-xs font-semibold text-deep-space-blue/50">
              <span>ฟีเจอร์เด่น</span>
              <span className="font-normal opacity-60">1 บรรทัด / 1 ข้อ</span>
            </label>
            <textarea
              rows={4}
              value={form.features}
              onChange={set("features")}
              className={`${field} font-mono text-xs`}
              placeholder={"พร้อมใช้งานทันที\nฟรีขนส่งในกรุงเทพฯ"}
            />
          </div>

          <div>
            <label className="mb-1 flex items-center justify-between text-xs font-semibold text-deep-space-blue/50">
              <span>สเปค</span>
              <span className="font-normal opacity-60">รูปแบบ: ชื่อ|ค่า (1 บรรทัด / 1 รายการ)</span>
            </label>
            <textarea
              rows={4}
              value={form.specs}
              onChange={set("specs")}
              className={`${field} font-mono text-xs`}
              placeholder={"ขนาด|80 x 80 x 180 cm\nน้ำหนัก|55 kg"}
            />
          </div>

          {/* สรุปยอดที่ต้องได้รับ — คำนวณสดจากราคา + WHT ในฟอร์ม */}
          <div className="rounded-2xl border border-tiger-orange/20 bg-tiger-orange/3 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold text-deep-space-blue">ยอดที่ต้องได้รับ</h3>
              {wht > 0 && (
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700">นิติบุคคล · หัก {wht}%</span>
              )}
            </div>

            {/* breakdown ต่อโหมด — ใช้ table ให้คอลัมน์ตรงกันชัวร์ */}
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[11px] text-deep-space-blue/40">
                  <th className="pb-1.5 text-left font-bold" />
                  <th className="pb-1.5 text-right font-bold">ราคาเต็ม</th>
                  <th className="pb-1.5 text-right font-bold">ราคามัดจำ</th>
                </tr>
              </thead>
              <tbody>
                {sumRows.map((r) => (
                  <tr key={r.label}>
                    <td className="py-0.5 text-deep-space-blue/55">{r.label}</td>
                    <td className="py-0.5 text-right tabular-nums text-deep-space-blue/80">{taxFull ? fmt(r.full ?? 0, r.sign) : "—"}</td>
                    <td className="py-0.5 text-right tabular-nums text-deep-space-blue/80">{fmt(r.dep, r.sign)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ยอดสุทธิ — เขียนอธิบายชัดเจนต่อโหมด */}
            <div className="mt-3 border-t-2 border-tiger-orange/20 pt-3">
              <p className="mb-2 text-xs font-bold text-deep-space-blue">ยอดสุทธิที่ต้องได้รับ</p>
              <div className="flex items-center justify-between py-0.5">
                <span className="text-sm text-deep-space-blue/70">ลูกค้าจ่ายเต็มจำนวน</span>
                <span className="text-base font-bold tabular-nums text-tiger-orange">{taxFull ? bahtSat(taxFull.total) : "—"}</span>
              </div>
              <div className="flex items-center justify-between py-0.5">
                <span className="text-sm text-deep-space-blue/70">ลูกค้าจ่ายมัดจำ</span>
                <span className="text-base font-bold tabular-nums text-tiger-orange">{bahtSat(taxDep.total)}</span>
              </div>
            </div>

            {wht > 0 && (
              <p className="mt-3 text-[11px] leading-relaxed text-deep-space-blue/40">
                * หัก ณ ที่จ่ายเฉพาะผู้ซื้อนิติบุคคล — บุคคลธรรมดาจ่ายเต็ม (ไม่หัก) · WHT รับเป็นใบ 50 ทวิ ไม่ใช่เงินสด
              </p>
            )}
            {!taxFull && (
              <p className="mt-2 text-[11px] text-deep-space-blue/40">ยังไม่ได้ตั้งราคาเต็ม — กรอกช่อง “ราคาเต็ม” ด้านบนเพื่อดูยอด</p>
            )}
          </div>

          {err && <p className="rounded-xl bg-red-50 px-4 py-2 text-sm text-red-600">{err}</p>}
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-100 px-6 py-4">
          <button
            onClick={save}
            disabled={saving}
            className="w-full rounded-full bg-deep-space-blue py-3 text-sm font-bold text-white transition-colors hover:bg-tiger-orange disabled:opacity-60"
          >
            {saving ? "กำลังบันทึก…" : "บันทึกการเปลี่ยนแปลง"}
          </button>
        </footer>
      </aside>
    </div>
  )
}

// ─── ProductManager ──────────────────────────────────────────────────────────

export function ProductManager({ products: initial }: { products: AdminProduct[] }) {
  const [products, setProducts] = useState(initial)
  const [q, setQ] = useState("")
  const [cat, setCat] = useState<CatFilter>("all")
  const [onlyWht, setOnlyWht] = useState(false)
  const [editing, setEditing] = useState<AdminProduct | null>(null)

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
    { key: "software", label: "Software", n: products.filter((p) => p.category === "software").length },
  ]

  function onSaved(updated: AdminProduct) {
    setProducts((ps) => ps.map((p) => (p.id === updated.id ? updated : p)))
  }

  return (
    <div>
      {/* Controls */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 sm:min-w-60 sm:flex-none">
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
            <button key={t.key} type="button" onClick={() => setCat(t.key)}
              className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors ${cat === t.key ? "bg-white text-deep-space-blue shadow-sm" : "text-deep-space-blue/50 hover:text-deep-space-blue"}`}>
              {t.label} <span className="text-xs opacity-60">{t.n}</span>
            </button>
          ))}
        </div>

        <button type="button" onClick={() => setOnlyWht((v) => !v)}
          className={`rounded-xl border px-3 py-2 text-sm font-semibold transition-colors ${onlyWht ? "border-tiger-orange bg-tiger-orange/5 text-tiger-orange" : "border-gray-200 text-deep-space-blue/60 hover:border-tiger-orange/40"}`}>
          เฉพาะที่หัก ({withWht})
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
        <table className="w-full min-w-175 border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/60 text-left text-xs font-bold text-deep-space-blue/50">
              <th className="w-14 px-4 py-2.5" />
              <th className="w-14 px-2 py-2.5">#ID</th>
              <th className="px-2 py-2.5">ชื่อสินค้า</th>
              <th className="w-20 px-2 py-2.5">หมวด</th>
              <th className="w-28 px-2 py-2.5 text-right">ราคาเต็ม</th>
              <th className="w-28 px-2 py-2.5 text-right">มัดจำ</th>
              <th className="w-32 px-2 py-2.5 text-right">จ่ายเต็ม<br /><span className="font-normal opacity-60">รวม VAT</span></th>
              <th className="w-32 px-2 py-2.5 text-right">จ่ายมัดจำ<br /><span className="font-normal opacity-60">รวม VAT</span></th>
              <th className="w-24 px-2 py-2.5">WHT</th>
              <th className="w-14 px-4 py-2.5" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr><td colSpan={10} className="px-4 py-10 text-center text-deep-space-blue/40">ไม่พบสินค้า</td></tr>
            ) : (
              filtered.map((p) => {
                const c = CAT[p.category] ?? { label: p.category, cls: "bg-gray-100 text-gray-600" }
                const payFull = p.priceTHB != null ? payablePreview(p.priceTHB, p.whtRate) : null
                const payDep = payablePreview(p.depositTHB ?? DEPOSIT_THB, p.whtRate)
                return (
                  <tr key={p.id} className="transition-colors hover:bg-gray-50/60">
                    <td className="px-4 py-3">
                      <span className="relative block h-10 w-10 overflow-hidden rounded-lg bg-gray-50">
                        <Image src={p.image} alt={p.name} fill className="object-contain p-1" sizes="44px" />
                      </span>
                    </td>
                    <td className="px-2 py-3 font-mono text-xs text-deep-space-blue/40">#{p.id}</td>
                    <td className="px-2 py-3 text-deep-space-blue">
                      <span className="line-clamp-1" title={p.name}>{p.name}</span>
                    </td>
                    <td className="px-2 py-3">
                      <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${c.cls}`}>{c.label}</span>
                    </td>
                    <td className="px-2 py-3 text-right text-sm text-deep-space-blue/70">
                      {baht(p.priceTHB)}
                    </td>
                    <td className="px-2 py-3 text-right text-xs text-deep-space-blue/50">
                      {baht(p.depositTHB)}
                    </td>
                    <PayCell pay={payFull} whtRate={p.whtRate} />
                    <PayCell pay={payDep} whtRate={p.whtRate} />
                    <td className="px-2 py-3">
                      {p.whtRate > 0 ? (
                        <span className="inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">หัก {p.whtRate}%</span>
                      ) : (
                        <span className="text-xs text-deep-space-blue/30">ไม่หัก</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setEditing(p)}
                        title="แก้ไขรายละเอียด"
                        className="rounded-lg p-2 text-deep-space-blue/30 transition-colors hover:bg-tiger-orange/10 hover:text-tiger-orange"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-deep-space-blue/40">แสดง {filtered.length} จาก {products.length} รายการ</p>

      {editing && (
        <EditDrawer
          product={editing}
          onClose={() => setEditing(null)}
          onSaved={onSaved}
        />
      )}
    </div>
  )
}
