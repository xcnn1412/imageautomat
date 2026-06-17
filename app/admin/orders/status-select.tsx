"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { ORDER_STATUS, ORDER_STATUSES } from "@/lib/orders"

export function StatusSelect({ id, status }: { id: string; status: string }) {
  const router = useRouter()
  const [val, setVal] = useState(status)
  const [saving, setSaving] = useState(false)

  return (
    <select
      value={val}
      disabled={saving}
      onChange={async (e) => {
        const next = e.target.value
        setVal(next)
        setSaving(true)
        await fetch("/api/admin/orders", {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ id, status: next }),
        })
        router.refresh()
        setSaving(false)
      }}
      className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-sm font-semibold text-deep-space-blue disabled:opacity-50"
    >
      {ORDER_STATUSES.map((s) => (
        <option key={s} value={s}>
          {ORDER_STATUS[s].label}
        </option>
      ))}
    </select>
  )
}
