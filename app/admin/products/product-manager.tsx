"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Eye, EyeOff, Pencil, Plus, RotateCcw, Search, Trash2, X } from "lucide-react"
import { DEPOSIT_THB } from "@/lib/pricing"
import { payablePreview, computeTax } from "@/lib/tax"
import { ImageUpload } from "@/components/admin/image-upload"

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
  stock: number
  hidden: boolean
  deletedAt: Date | string | null
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

// ─── EditDrawer (create + edit) ────────────────────────────────────────────────
// product === null → โหมดสร้างใหม่ (POST, เริ่มแบบซ่อน) / มีค่า → โหมดแก้ไข (PATCH)

const BLANK_FORM = { name: "", description: "", longDescription: "", image: "", category: "buy", priceTHB: "", depositTHB: "", whtRate: "0", stock: "0", features: "", specs: "" }

function EditDrawer({ product, categoryOptions, onClose, onSaved, onCreated }: {
  product: AdminProduct | null
  categoryOptions: string[]
  onClose: () => void
  onSaved: (p: AdminProduct) => void
  onCreated: (p: AdminProduct) => void
}) {
  const isNew = product === null
  const specs = Array.isArray(product?.specs) ? (product!.specs as Spec[]) : []
  const [form, setForm] = useState(
    product
      ? {
          name: product.name,
          description: product.description,
          longDescription: product.longDescription ?? "",
          image: product.image,
          category: product.category,
          priceTHB: product.priceTHB !== null ? String(product.priceTHB) : "",
          depositTHB: product.depositTHB !== null ? String(product.depositTHB) : "",
          whtRate: String(product.whtRate),
          stock: String(product.stock),
          features: product.features.join("\n"),
          specs: specs.map((s) => `${s.label}|${s.value}`).join("\n"),
        }
      : BLANK_FORM,
  )
  const [saving, setSaving] = useState(false)
  const [err, setErr] = useState("")
  const [addingCat, setAddingCat] = useState(false) // สลับ dropdown ↔ ช่องพิมพ์ประเภทใหม่

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  // form → ฟิลด์ที่ส่ง/เก็บ (ใช้ทั้งสร้างและแก้)
  const buildFields = () => ({
    name: form.name,
    description: form.description,
    longDescription: form.longDescription || null,
    image: form.image,
    category: form.category,
    whtRate: Number(form.whtRate),
    stock: Number(form.stock) || 0,
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
  })

  async function save() {
    if (!form.name.trim()) { setErr("กรุณากรอกชื่อสินค้า"); return }
    if (!form.category.trim()) { setErr("กรุณาเลือกหรือกรอกประเภทสินค้า"); return }
    if (isNew && !form.image.trim()) { setErr("กรุณาอัปโหลดรูปสินค้า"); return }
    setSaving(true)
    setErr("")
    try {
      const fields = buildFields()
      if (isNew) {
        const res = await fetch("/api/admin/products", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(fields) })
        if (!res.ok) { setErr((await res.json()).error ?? "เกิดข้อผิดพลาด"); return }
        onCreated((await res.json()) as AdminProduct)
      } else {
        const res = await fetch("/api/admin/products", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: product!.id, ...fields }) })
        if (!res.ok) { setErr((await res.json()).error ?? "เกิดข้อผิดพลาด"); return }
        onSaved({ ...product!, ...fields })
      }
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
            <h2 className="font-serif text-xl text-deep-space-blue">{isNew ? "เพิ่มสินค้า" : "แก้ไขสินค้า"}</h2>
            <p className="text-xs text-deep-space-blue/40">{isNew ? "สร้างใหม่ — เริ่มแบบซ่อน กดแสดงเมื่อพร้อมขาย" : `#${product!.id} · ${product!.name}`}</p>
          </div>
          <button onClick={onClose} className="rounded-full p-2 text-deep-space-blue/50 hover:bg-gray-100"><X className="h-5 w-5" /></button>
        </header>

        {/* Body */}
        <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
          {/* Image preview */}
          <div>
            <label className="mb-1 block text-xs font-semibold text-deep-space-blue/50">รูปภาพสินค้า{isNew ? " *" : ""}</label>
            <ImageUpload value={form.image} onChange={(url) => setForm((f) => ({ ...f, image: url }))} />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-deep-space-blue/50">ชื่อสินค้า *</label>
            <input value={form.name} onChange={set("name")} className={field} />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-deep-space-blue/50">หมวดหมู่ / ประเภท</label>
            {addingCat ? (
              <div className="flex gap-2">
                <input autoFocus value={form.category} onChange={set("category")} className={field} placeholder="ชื่อประเภทใหม่ เช่น accessory" />
                <button type="button" onClick={() => { setAddingCat(false); setForm((f) => ({ ...f, category: categoryOptions[0] ?? "buy" })) }}
                  className="shrink-0 rounded-xl border border-gray-200 px-3 text-sm font-semibold text-deep-space-blue/50 transition-colors hover:border-gray-300">
                  ยกเลิก
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <select value={form.category} onChange={set("category")} className={field}>
                  {categoryOptions.map((c) => <option key={c} value={c}>{CAT[c]?.label ?? c}</option>)}
                </select>
                <button type="button" onClick={() => { setAddingCat(true); setForm((f) => ({ ...f, category: "" })) }}
                  className="inline-flex shrink-0 items-center gap-1 rounded-xl border border-tiger-orange/40 px-3 text-sm font-semibold text-tiger-orange transition-colors hover:bg-tiger-orange/5">
                  <Plus className="h-4 w-4" /> ใหม่
                </button>
              </div>
            )}
            <p className="mt-1 text-[11px] text-deep-space-blue/40">เลือกจากที่มี หรือกด “+ ใหม่” เพื่อเพิ่มประเภทใหม่</p>
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

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs font-semibold text-deep-space-blue/50">WHT (%)</label>
              <select value={form.whtRate} onChange={set("whtRate")} className={field}>
                <option value="0">0% — ไม่หัก (ซื้อสินค้า)</option>
                <option value="3">3% — จ้างผลิต/บริการ</option>
                <option value="5">5% — ค่าเช่า software</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-deep-space-blue/50">จำนวนคงเหลือ (ชิ้น)</label>
              <input type="number" min={0} value={form.stock} onChange={set("stock")} className={field} placeholder="0" />
              <p className="mt-1 text-[11px] text-deep-space-blue/40">0 = สินค้าหมด (ซื้อไม่ได้บนร้าน)</p>
            </div>
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
            {saving ? "กำลังบันทึก…" : isNew ? "สร้างสินค้า (ซ่อนไว้)" : "บันทึกการเปลี่ยนแปลง"}
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
  const [view, setView] = useState<"active" | "trash">("active")
  const [editing, setEditing] = useState<AdminProduct | null>(null)
  const [creating, setCreating] = useState(false)

  const active = useMemo(() => products.filter((p) => !p.deletedAt), [products])
  const trash = useMemo(() => products.filter((p) => p.deletedAt), [products])
  const categoryOptions = useMemo(() => [...new Set(["buy", "rent", "software", ...products.map((p) => p.category)])], [products])

  const filtered = useMemo(() => {
    const base = view === "trash" ? trash : active
    const term = q.trim().toLowerCase()
    return base.filter(
      (p) =>
        (cat === "all" || p.category === cat) &&
        (!onlyWht || p.whtRate > 0) &&
        (term === "" || p.name.toLowerCase().includes(term) || String(p.id).includes(term)),
    )
  }, [active, trash, view, q, cat, onlyWht])

  const withWht = active.filter((p) => p.whtRate > 0).length
  const tabs: { key: CatFilter; label: string; n: number }[] = [
    { key: "all", label: "ทั้งหมด", n: active.length },
    { key: "buy", label: "ซื้อ", n: active.filter((p) => p.category === "buy").length },
    { key: "rent", label: "เช่า", n: active.filter((p) => p.category === "rent").length },
    { key: "software", label: "Software", n: active.filter((p) => p.category === "software").length },
  ]

  function onSaved(updated: AdminProduct) {
    setProducts((ps) => ps.map((p) => (p.id === updated.id ? updated : p)))
  }
  function onCreated(created: AdminProduct) {
    setProducts((ps) => [created, ...ps])
  }

  // optimistic — toggle ซ่อน/แสดง
  async function toggleHidden(p: AdminProduct) {
    const next = !p.hidden
    setProducts((ps) => ps.map((x) => (x.id === p.id ? { ...x, hidden: next } : x)))
    await fetch("/api/admin/products", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: p.id, hidden: next }) })
  }
  // soft-delete → ถังขยะ
  async function softDelete(p: AdminProduct) {
    if (!confirm(`ลบ "${p.name}"?\nสินค้าจะย้ายไปถังขยะ (กู้คืนได้) และถูกนำออกจากตะกร้าลูกค้า`)) return
    setProducts((ps) => ps.map((x) => (x.id === p.id ? { ...x, deletedAt: new Date() } : x)))
    await fetch(`/api/admin/products?id=${p.id}`, { method: "DELETE" })
  }
  async function restore(p: AdminProduct) {
    setProducts((ps) => ps.map((x) => (x.id === p.id ? { ...x, deletedAt: null } : x)))
    await fetch(`/api/admin/products?id=${p.id}&restore=1`, { method: "DELETE" })
  }

  // ปุ่มจัดการ — ใช้ร่วม table (desktop) + card (mobile)
  const rowActions = (p: AdminProduct) =>
    p.deletedAt ? (
      <button onClick={() => restore(p)} title="กู้คืน"
        className="inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-emerald-600 transition-colors hover:bg-emerald-50">
        <RotateCcw className="h-3.5 w-3.5" /> กู้คืน
      </button>
    ) : (
      <div className="flex items-center gap-0.5">
        <button onClick={() => toggleHidden(p)} title={p.hidden ? "แสดงบนร้าน" : "ซ่อนจากร้าน"}
          className="rounded-lg p-2 text-deep-space-blue/30 transition-colors hover:bg-gray-100 hover:text-deep-space-blue">
          {p.hidden ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
        <button onClick={() => setEditing(p)} title="แก้ไขรายละเอียด"
          className="rounded-lg p-2 text-deep-space-blue/30 transition-colors hover:bg-tiger-orange/10 hover:text-tiger-orange">
          <Pencil className="h-4 w-4" />
        </button>
        <button onClick={() => softDelete(p)} title="ลบ (ย้ายไปถังขยะ)"
          className="rounded-lg p-2 text-deep-space-blue/30 transition-colors hover:bg-red-50 hover:text-red-500">
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    )

  return (
    <div>
      {/* View switch + add */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex gap-1 rounded-xl bg-gray-100 p-1">
          <button type="button" onClick={() => setView("active")}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors ${view === "active" ? "bg-white text-deep-space-blue shadow-sm" : "text-deep-space-blue/50 hover:text-deep-space-blue"}`}>
            สินค้า <span className="text-xs opacity-60">{active.length}</span>
          </button>
          <button type="button" onClick={() => setView("trash")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors ${view === "trash" ? "bg-white text-deep-space-blue shadow-sm" : "text-deep-space-blue/50 hover:text-deep-space-blue"}`}>
            <Trash2 className="h-3.5 w-3.5" /> ถังขยะ <span className="text-xs opacity-60">{trash.length}</span>
          </button>
        </div>

        <button type="button" onClick={() => setCreating(true)}
          className="inline-flex items-center gap-1.5 rounded-full bg-tiger-orange px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-deep-space-blue">
          <Plus className="h-4 w-4" /> เพิ่มสินค้า
        </button>
      </div>

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

      {/* Table (desktop) — มือถือใช้ card ด้านล่างแทน (กันต้องเลื่อนแนวนอน 11 คอลัมน์) */}
      <div className="hidden overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm md:block">
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
              <th className="w-20 px-2 py-2.5 text-right">คงเหลือ</th>
              <th className="w-28 px-4 py-2.5" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr><td colSpan={11} className="px-4 py-10 text-center text-deep-space-blue/40">{view === "trash" ? "ถังขยะว่าง" : "ไม่พบสินค้า"}</td></tr>
            ) : (
              filtered.map((p) => {
                const c = CAT[p.category] ?? { label: p.category, cls: "bg-gray-100 text-gray-600" }
                const payFull = p.priceTHB != null ? payablePreview(p.priceTHB, p.whtRate) : null
                const payDep = payablePreview(p.depositTHB ?? DEPOSIT_THB, p.whtRate)
                return (
                  <tr key={p.id} className={`transition-colors hover:bg-gray-50/60 ${p.deletedAt ? "opacity-50" : p.hidden ? "bg-amber-50/30" : ""}`}>
                    <td className="px-4 py-3">
                      <span className="relative block h-10 w-10 overflow-hidden rounded-lg bg-gray-50">
                        <Image src={p.image} alt={p.name} fill className="object-contain p-1" sizes="44px" />
                      </span>
                    </td>
                    <td className="px-2 py-3 font-mono text-xs text-deep-space-blue/40">#{p.id}</td>
                    <td className="px-2 py-3 text-deep-space-blue">
                      <span className="line-clamp-1" title={p.name}>{p.name}</span>
                      {!p.deletedAt && p.hidden && <span className="ml-1 inline-block rounded bg-amber-100 px-1.5 py-0.5 align-middle text-[10px] font-semibold text-amber-700">ซ่อน</span>}
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
                    <td className="px-2 py-3 text-right tabular-nums">
                      {p.stock > 0 ? (
                        <span className="text-sm font-semibold text-deep-space-blue/70">{p.stock}</span>
                      ) : (
                        <span className="inline-block rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600">หมด</span>
                      )}
                    </td>
                    <td className="px-4 py-3">{rowActions(p)}</td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Cards (mobile) — ข้อมูลเดียวกับตาราง จัดเป็นการ์ดอ่านง่ายบนจอแคบ */}
      <div className="space-y-3 md:hidden">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-white py-12 text-center text-sm text-deep-space-blue/40">
            {view === "trash" ? "ถังขยะว่าง" : "ไม่พบสินค้า"}
          </div>
        ) : (
          filtered.map((p) => {
            const c = CAT[p.category] ?? { label: p.category, cls: "bg-gray-100 text-gray-600" }
            const payFull = p.priceTHB != null ? payablePreview(p.priceTHB, p.whtRate) : null
            const payDep = payablePreview(p.depositTHB ?? DEPOSIT_THB, p.whtRate)
            return (
              <article key={p.id} className={`rounded-2xl border border-gray-100 bg-white p-4 shadow-sm ${p.deletedAt ? "opacity-60" : p.hidden ? "bg-amber-50/30" : ""}`}>
                <div className="flex gap-3">
                  <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-gray-50">
                    <Image src={p.image} alt={p.name} fill className="object-contain p-1" sizes="56px" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold ${c.cls}`}>{c.label}</span>
                      <span className="font-mono text-[11px] text-deep-space-blue/40">#{p.id}</span>
                      {!p.deletedAt && p.hidden && <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700">ซ่อน</span>}
                    </div>
                    <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-deep-space-blue">{p.name}</h3>
                  </div>
                  <div className="shrink-0">{rowActions(p)}</div>
                </div>

                {/* ข้อมูลย่อ: ราคา · จ่ายจริง · WHT · คงเหลือ */}
                <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-gray-50 pt-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-deep-space-blue/40">ราคาเต็ม</dt>
                    <dd className="font-semibold text-deep-space-blue/70">{baht(p.priceTHB)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-deep-space-blue/40">มัดจำ</dt>
                    <dd className="text-deep-space-blue/60">{baht(p.depositTHB)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-deep-space-blue/40">จ่ายเต็ม</dt>
                    <dd className="font-semibold text-deep-space-blue">{payFull ? bahtSat(payFull.personalSatang) : "—"}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-deep-space-blue/40">จ่ายมัดจำ</dt>
                    <dd className="font-semibold text-deep-space-blue">{bahtSat(payDep.personalSatang)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-deep-space-blue/40">WHT</dt>
                    <dd>{p.whtRate > 0 ? <span className="font-semibold text-amber-700">หัก {p.whtRate}%</span> : <span className="text-deep-space-blue/30">ไม่หัก</span>}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-deep-space-blue/40">คงเหลือ</dt>
                    <dd>{p.stock > 0 ? <span className="font-semibold text-deep-space-blue/70">{p.stock} ชิ้น</span> : <span className="font-semibold text-red-600">หมด</span>}</dd>
                  </div>
                </dl>
              </article>
            )
          })
        )}
      </div>

      <p className="mt-3 text-xs text-deep-space-blue/40">แสดง {filtered.length} จาก {view === "trash" ? trash.length : active.length} รายการ</p>

      {(editing || creating) && (
        <EditDrawer
          product={editing}
          categoryOptions={categoryOptions}
          onClose={() => { setEditing(null); setCreating(false) }}
          onSaved={onSaved}
          onCreated={onCreated}
        />
      )}
    </div>
  )
}
