"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Check } from "lucide-react"

// อัตราหัก ณ ที่จ่ายที่พบบ่อย: 0 ไม่หัก / 1 ขนส่ง / 2 โฆษณา / 3 บริการ-จ้างผลิต / 5 ค่าเช่า
const RATES = [0, 1, 2, 3, 5]

export function WhtSelect({ id, whtRate }: { id: number; whtRate: number }) {
  const router = useRouter()
  const [val, setVal] = useState(String(whtRate))
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle")
  const options = [...new Set([whtRate, ...RATES])].sort((a, b) => a - b)
  const active = Number(val) > 0

  return (
    <div className="flex items-center gap-2">
      <select
        value={val}
        disabled={status === "saving"}
        onChange={async (e) => {
          const next = e.target.value
          setVal(next)
          setStatus("saving")
          await fetch("/api/admin/products", {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ id, whtRate: Number(next) }),
          })
          setStatus("saved")
          router.refresh()
          setTimeout(() => setStatus("idle"), 1500)
        }}
        className={`min-w-[92px] rounded-lg border px-2 py-1.5 text-sm font-semibold transition-colors disabled:opacity-50 ${
          active ? "border-tiger-orange/40 bg-tiger-orange/5 text-tiger-orange" : "border-gray-200 bg-white text-deep-space-blue/70"
        }`}
      >
        {options.map((r) => (
          <option key={r} value={r}>
            {r === 0 ? "ไม่หัก" : `หัก ${r}%`}
          </option>
        ))}
      </select>
      <span className="w-4 shrink-0">
        {status === "saving" && (
          <span className="block h-3.5 w-3.5 animate-spin rounded-full border-2 border-gray-300 border-t-tiger-orange" />
        )}
        {status === "saved" && <Check className="h-4 w-4 text-green-600 [animation:stepPopIn_.3s_ease-out]" />}
      </span>
    </div>
  )
}
