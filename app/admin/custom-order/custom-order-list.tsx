"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Pencil, Trash2, X, Clock } from "lucide-react"
import { DEPOSIT_THB } from "@/lib/pricing"
import { payablePreview } from "@/lib/tax"

export type PendingCustomOrder = {
  productId: number
  name: string
  description: string
  longDescription: string | null
  image: string
  priceTHB: number | null
  depositTHB: number | null
  whtRate: number
  priceMode: string
  qty: number
  createdAt: string
  userName: string | null
  userEmail: string | null
}

const baht = (n: number) => `฿${n.toLocaleString("th-TH")}`
const bahtSat = (sat: number) => `฿${(sat / 100).toLocaleString("th-TH", { maximumFractionDigits: 2 })}`
const dt = (s: string) => new Date(s).toLocaleString("th-TH", { dateStyle: "medium", timeStyle: "short" })

export function CustomOrderList({ orders }: { orders: PendingCustomOrder[] }) {
  const [editing, setEditing] = useState<PendingCustomOrder | null>(null)

  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold text-deep-space-blue">
        ออเดอร์พิเศษที่รอชำระ <span className="text-sm font-normal text-deep-space-blue/40">({orders.length})</span>
      </h2>
      <p className="mb-3 mt-0.5 text-xs text-deep-space-blue/40">
        แก้ไข/ยกเลิกได้จนกว่าลูกค้าจะกดชำระเงิน — จ่ายแล้วจะย้ายไปหน้า “ออเดอร์” โดยอัตโนมัติ
      </p>

      {orders.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-200 bg-white py-12 text-center text-sm text-deep-space-blue/40">
          ยังไม่มีออเดอร์พิเศษที่รอชำระ
        </div>
      ) : (
        <div className="space-y-3">
          {orders.map((o) => {
            const base = o.priceMode === "deposit" ? o.depositTHB ?? DEPOSIT_THB : o.priceTHB ?? DEPOSIT_THB
            const pay = payablePreview(base, o.whtRate)
            return (
              <article key={o.productId} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
                      <Clock className="h-3 w-3" /> รอลูกค้าชำระ
                    </span>
                    <span className="text-[11px] text-deep-space-blue/40">{dt(o.createdAt)}</span>
                  </div>
                  <h3 className="mt-1 truncate font-semibold text-deep-space-blue">{o.name}</h3>
                  <p className="truncate text-xs text-deep-space-blue/50">{o.userName ?? "—"} · {o.userEmail ?? "—"}</p>
                  <p className="mt-1 text-sm text-deep-space-blue/70">
                    ราคา{o.priceMode === "deposit" ? "มัดจำ" : "เต็มจำนวน"} {baht(base)} · ลูกค้าจ่าย{" "}
                    <span className="font-bold text-deep-space-blue">{bahtSat(pay.personalSatang)}</span>
                    {o.whtRate > 0 && <span className="text-deep-space-blue/40"> (นิติฯ {bahtSat(pay.companySatang)})</span>}
                  </p>
                </div>
                <div className="flex shrink-0 gap-1">
                  <button onClick={() => setEditing(o)} title="แก้ไข" className="rounded-lg p-2 text-deep-space-blue/40 transition-colors hover:bg-tiger-orange/10 hover:text-tiger-orange">
                    <Pencil className="h-4 w-4" />
                  </button>
                  <DeleteButton productId={o.productId} />
                </div>
              </article>
            )
          })}
        </div>
      )}

      {editing && <EditDrawer order={editing} onClose={() => setEditing(null)} />}
    </section>
  )
}

function DeleteButton({ productId }: { productId: number }) {
  const router = useRouter()
  const [busy, setBusy] = useState(false)
  async function del() {
    if (!confirm("ยกเลิกออเดอร์พิเศษนี้? จะถูกเอาออกจากตะกร้าลูกค้าทันที")) return
    setBusy(true)
    const res = await fetch("/api/admin/custom-order", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    })
    if (res.ok) {
      router.refresh()
    } else {
      alert((await res.json().catch(() => ({}))).error ?? "ยกเลิกไม่สำเร็จ")
      setBusy(false)
    }
  }
  return (
    <button onClick={del} disabled={busy} title="ยกเลิก" className="rounded-lg p-2 text-deep-space-blue/40 transition-colors hover:bg-red-50 hover:text-red-600 disabled:opacity-50">
      <Trash2 className="h-4 w-4" />
    </button>
  )
}

function EditDrawer({ order, onClose }: { order: PendingCustomOrder; onClose: () => void }) {
  const router = useRouter()
  const [form, setForm] = useState({
    name: order.name,
    description: order.description,
    longDescription: order.longDescription ?? "",
    image: order.image,
    priceTHB: order.priceTHB !== null ? String(order.priceTHB) : "",
    depositTHB: order.depositTHB !== null ? String(order.depositTHB) : "",
    whtRate: String(order.whtRate),
    priceMode: (order.priceMode === "deposit" ? "deposit" : "full") as "full" | "deposit",
  })
  const [saving, setSaving] = useState(false)
  const [err, setErr] = useState("")

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  async function save() {
    setSaving(true)
    setErr("")
    try {
      const res = await fetch("/api/admin/custom-order", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: order.productId,
          name: form.name,
          description: form.description,
          longDescription: form.longDescription || undefined,
          image: form.image || undefined,
          priceTHB: Number(form.priceTHB),
          depositTHB: form.depositTHB === "" ? undefined : Number(form.depositTHB),
          whtRate: Number(form.whtRate),
          priceMode: form.priceMode,
        }),
      })
      if (!res.ok) {
        setErr((await res.json().catch(() => ({}))).error ?? "บันทึกไม่สำเร็จ")
        return
      }
      router.refresh()
      onClose()
    } finally {
      setSaving(false)
    }
  }

  const field = "w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-deep-space-blue outline-none focus:border-tiger-orange"
  const label = "mb-1 block text-xs font-semibold text-deep-space-blue/50"

  // live preview ยอดที่ลูกค้าจะจ่าย
  const previewBase = form.priceMode === "deposit" ? (form.depositTHB === "" ? DEPOSIT_THB : Number(form.depositTHB)) : Number(form.priceTHB)
  const pay = Number.isFinite(previewBase) && previewBase > 0 ? payablePreview(previewBase, Number(form.whtRate)) : null

  return (
    <div className="fixed inset-0 z-200" aria-modal>
      <div className="absolute inset-0 bg-deep-space-blue/50 backdrop-blur-sm" onClick={onClose} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <header className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div>
            <h2 className="font-serif text-xl text-deep-space-blue">แก้ไขออเดอร์พิเศษ</h2>
            <p className="truncate text-xs text-deep-space-blue/40">#{order.productId} · {order.userEmail ?? "—"}</p>
          </div>
          <button onClick={onClose} className="rounded-full p-2 text-deep-space-blue/50 hover:bg-gray-100"><X className="h-5 w-5" /></button>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
          <div>
            <label className={label}>ชื่อสินค้า *</label>
            <input value={form.name} onChange={set("name")} className={field} />
          </div>
          <div>
            <label className={label}>รายละเอียดย่อ *</label>
            <textarea rows={2} value={form.description} onChange={set("description")} className={field} />
          </div>
          <div>
            <label className={label}>รายละเอียดเต็ม</label>
            <textarea rows={3} value={form.longDescription} onChange={set("longDescription")} className={field} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={label}>ราคาเต็ม (ก่อน VAT) *</label>
              <input type="number" min={1} value={form.priceTHB} onChange={set("priceTHB")} className={field} />
            </div>
            <div>
              <label className={label}>ราคามัดจำ</label>
              <input type="number" min={0} value={form.depositTHB} onChange={set("depositTHB")} className={field} placeholder="ว่าง = 1,000" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={label}>หัก ณ ที่จ่าย</label>
              <select value={form.whtRate} onChange={set("whtRate")} className={field}>
                <option value="0">ไม่หัก (0%)</option>
                <option value="3">จ้างผลิต (3%)</option>
                <option value="5">เช่า/ซอฟต์แวร์ (5%)</option>
              </select>
            </div>
            <div>
              <label className={label}>ใส่ตะกร้าเป็นราคา</label>
              <select value={form.priceMode} onChange={set("priceMode")} className={field}>
                <option value="full">เต็มจำนวน</option>
                <option value="deposit">มัดจำ</option>
              </select>
            </div>
          </div>
          <div>
            <label className={label}>รูป (path)</label>
            <input value={form.image} onChange={set("image")} className={field} placeholder="/images/custom-booth.jpg" />
          </div>

          {pay && (
            <div className="rounded-lg bg-deep-space-blue/5 p-3 text-sm">
              <div className="flex justify-between font-bold text-deep-space-blue">
                <span>ลูกค้าจะจ่าย</span>
                <span>{bahtSat(pay.personalSatang)}</span>
              </div>
              <p className="mt-0.5 text-xs text-deep-space-blue/50">ฐาน {baht(previewBase)} + VAT 7%{Number(form.whtRate) > 0 ? ` · นิติฯ ${bahtSat(pay.companySatang)}` : ""}</p>
            </div>
          )}

          {err && <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">{err}</p>}
        </div>

        <footer className="border-t border-gray-100 px-6 py-4">
          <button onClick={save} disabled={saving} className="w-full rounded-lg bg-deep-space-blue py-2.5 text-sm font-bold text-white transition-colors hover:bg-tiger-orange disabled:opacity-60">
            {saving ? "กำลังบันทึก…" : "บันทึกการแก้ไข"}
          </button>
        </footer>
      </aside>
    </div>
  )
}
