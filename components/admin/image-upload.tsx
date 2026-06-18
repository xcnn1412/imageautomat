"use client"

import { useState } from "react"
import { Upload } from "lucide-react"

// อัปโหลดรูปสินค้า (admin) — ปุ่มอัปโหลด + พรีวิว + ช่องวาง URL เอง. ใช้ร่วม products + custom-order
export function ImageUpload({ value, onChange }: { value: string; onChange: (url: string) => void }) {
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState("")

  async function upload(file: File) {
    setErr("")
    setBusy(true)
    try {
      const fd = new FormData()
      fd.append("file", file)
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setErr(data.error ?? "อัปโหลดไม่สำเร็จ")
        return
      }
      onChange(data.url)
    } catch {
      setErr("อัปโหลดไม่สำเร็จ")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="flex items-start gap-3">
      <span className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element -- thumb เล็ก ไม่ต้อง optimize + รองรับ host ใดก็ได้
          <img src={value} alt="" className="h-full w-full object-contain p-1" />
        ) : (
          <span className="text-[10px] text-deep-space-blue/30">ไม่มีรูป</span>
        )}
      </span>
      <div className="flex-1 space-y-1.5">
        <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-deep-space-blue transition-colors hover:border-tiger-orange">
          <Upload className="h-3.5 w-3.5" />
          {busy ? "กำลังอัปโหลด…" : "อัปโหลดรูป"}
          <input
            type="file"
            accept="image/*"
            disabled={busy}
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) upload(f)
              e.target.value = ""
            }}
          />
        </label>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="หรือวาง URL / path เอง"
          className="w-full rounded-lg border border-gray-200 px-3 py-1.5 text-xs outline-none focus:border-tiger-orange"
        />
        {err && <p className="text-xs text-red-500">{err}</p>}
      </div>
    </div>
  )
}
