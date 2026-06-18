"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DEPOSIT_THB } from "@/lib/pricing"
import { payablePreview } from "@/lib/tax"

const baht = (n: number) => `฿${n.toLocaleString("th-TH")}`
const bahtSat = (sat: number) => `฿${(sat / 100).toLocaleString("th-TH", { maximumFractionDigits: 2 })}`

type Result = { ok: true; productId: number; amount: number } | { ok: false; error: string }

export function CustomOrderForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [longDescription, setLongDescription] = useState("")
  const [priceTHB, setPriceTHB] = useState("")
  const [depositTHB, setDepositTHB] = useState("")
  const [whtRate, setWhtRate] = useState("0")
  const [priceMode, setPriceMode] = useState<"full" | "deposit">("full")
  const [image, setImage] = useState("")

  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState<Result | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setResult(null)
    try {
      const res = await fetch("/api/admin/custom-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          description,
          longDescription: longDescription || undefined,
          image: image || undefined,
          priceTHB: Number(priceTHB),
          depositTHB: depositTHB === "" ? undefined : Number(depositTHB),
          whtRate: Number(whtRate),
          priceMode,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setResult({ ok: true, productId: data.productId, amount: Number(priceTHB) || 0 })
        // เคลียร์ฟอร์มหลังสำเร็จ (เก็บ whtRate/mode ไว้)
        setEmail(""); setName(""); setDescription(""); setLongDescription(""); setPriceTHB(""); setDepositTHB(""); setImage("")
        router.refresh() // โหลดรายการที่รอชำระด้านล่างใหม่
      } else {
        setResult({ ok: false, error: data.error ?? "เกิดข้อผิดพลาด" })
      }
    } catch {
      setResult({ ok: false, error: "เชื่อมต่อไม่สำเร็จ" })
    } finally {
      setBusy(false)
    }
  }

  const label = "mb-1 block text-sm font-semibold text-deep-space-blue"
  const input =
    "w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-deep-space-blue outline-none focus:border-tiger-orange"

  // ยอดที่ลูกค้าจะจ่ายจริง ตามราคา+mode+WHT ที่กรอก
  const previewBase = priceMode === "deposit" ? (depositTHB === "" ? DEPOSIT_THB : Number(depositTHB)) : Number(priceTHB)
  const pay = Number.isFinite(previewBase) && previewBase > 0 ? payablePreview(previewBase, Number(whtRate)) : null

  return (
    <form onSubmit={submit} className="space-y-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div>
        <label className={label}>อีเมลลูกค้า *</label>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="customer@example.com" className={input} />
        <p className="mt-1 text-xs text-deep-space-blue/40">ต้องเป็นอีเมลที่ลูกค้าเคยเข้าสู่ระบบด้วย Google อย่างน้อย 1 ครั้ง</p>
      </div>

      <div>
        <label className={label}>ชื่อสินค้า *</label>
        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="ตู้โฟโต้บูธ custom งาน ABC" className={input} />
      </div>

      <div>
        <label className={label}>รายละเอียดย่อ *</label>
        <textarea required rows={2} value={description} onChange={(e) => setDescription(e.target.value)} className={input} />
      </div>

      <div>
        <label className={label}>รายละเอียดเต็ม (ไม่บังคับ)</label>
        <textarea rows={3} value={longDescription} onChange={(e) => setLongDescription(e.target.value)} className={input} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={label}>ราคาเต็ม (บาท, ก่อน VAT) *</label>
          <input type="number" required min={1} value={priceTHB} onChange={(e) => setPriceTHB(e.target.value)} className={input} />
        </div>
        <div>
          <label className={label}>ราคามัดจำ (บาท, ไม่บังคับ)</label>
          <input type="number" min={0} value={depositTHB} onChange={(e) => setDepositTHB(e.target.value)} placeholder="ว่าง = 1,000" className={input} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={label}>หัก ณ ที่จ่าย</label>
          <select value={whtRate} onChange={(e) => setWhtRate(e.target.value)} className={input}>
            <option value="0">ไม่หัก (0%)</option>
            <option value="3">จ้างผลิต (3%)</option>
            <option value="5">เช่า/ซอฟต์แวร์ (5%)</option>
          </select>
        </div>
        <div>
          <label className={label}>ใส่ตะกร้าเป็นราคา</label>
          <select value={priceMode} onChange={(e) => setPriceMode(e.target.value as "full" | "deposit")} className={input}>
            <option value="full">เต็มจำนวน</option>
            <option value="deposit">มัดจำ</option>
          </select>
        </div>
      </div>

      <div>
        <label className={label}>รูป (path, ไม่บังคับ)</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="/images/custom-booth.jpg" className={input} />
      </div>

      {pay && (
        <div className="rounded-lg bg-deep-space-blue/5 p-4">
          <div className="flex items-center justify-between font-bold text-deep-space-blue">
            <span>ลูกค้าจะจ่าย (รับเข้าจริง)</span>
            <span className="text-lg">{bahtSat(pay.personalSatang)}</span>
          </div>
          <p className="mt-1 text-xs text-deep-space-blue/50">
            ฐาน {baht(previewBase)} + VAT 7% · ใส่ตะกร้าเป็นราคา{priceMode === "deposit" ? "มัดจำ" : "เต็มจำนวน"}
          </p>
          {Number(whtRate) > 0 && (
            <p className="mt-0.5 text-xs text-deep-space-blue/50">
              ถ้าลูกค้าเป็นนิติบุคคล: รับเข้า {bahtSat(pay.companySatang)} (หัก ณ ที่จ่าย {whtRate}% — ได้ใบ 50 ทวิแทนเงินสด)
            </p>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-lg bg-tiger-orange px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {busy ? "กำลังสร้าง…" : "สร้าง + ใส่ตะกร้าลูกค้า"}
      </button>

      {result?.ok === true && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
          ✓ สร้างสำเร็จ — สินค้า #{result.productId} อยู่ในตะกร้าลูกค้าแล้ว ({baht(result.amount)})
        </p>
      )}
      {result?.ok === false && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">✗ {result.error}</p>
      )}
    </form>
  )
}
