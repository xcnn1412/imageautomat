"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Check } from "lucide-react"

// ราคาเป็น "ก่อน VAT" (ex-VAT). ว่าง = ใช้ค่ามัดจำ default. บันทึกตอน blur/Enter
export function PriceInput({ id, priceTHB }: { id: number; priceTHB: number | null }) {
  const router = useRouter()
  const initial = priceTHB?.toString() ?? ""
  const [val, setVal] = useState(initial)
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle")

  async function commit() {
    if (val === initial) return
    const next = val.trim() === "" ? null : Number(val)
    setStatus("saving")
    await fetch("/api/admin/products", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id, priceTHB: next }),
    })
    setStatus("saved")
    router.refresh()
    setTimeout(() => setStatus("idle"), 1500)
  }

  return (
    <div className="flex items-center justify-end gap-1.5">
      <div className="relative">
        <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-deep-space-blue/40">฿</span>
        <input
          value={val}
          inputMode="numeric"
          placeholder="มัดจำ"
          disabled={status === "saving"}
          onChange={(e) => setVal(e.target.value.replace(/[^\d]/g, ""))}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === "Enter") (e.target as HTMLInputElement).blur()
          }}
          className="w-24 rounded-lg border border-gray-200 py-1.5 pl-6 pr-2 text-right text-sm outline-none focus:border-tiger-orange disabled:opacity-50"
        />
      </div>
      <span className="w-4 shrink-0">
        {status === "saving" && (
          <span className="block h-3.5 w-3.5 animate-spin rounded-full border-2 border-gray-300 border-t-tiger-orange" />
        )}
        {status === "saved" && <Check className="h-4 w-4 text-green-600 [animation:stepPopIn_.3s_ease-out]" />}
      </span>
    </div>
  )
}
