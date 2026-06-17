"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

// ponytail: ปุ่มพรีวิว dev เท่านั้น — หน้า server ห่อด้วยเช็ค NODE_ENV ก่อน render
export function MockPayButton({ merchantOrderId }: { merchantOrderId: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  return (
    <button
      type="button"
      disabled={loading}
      onClick={async () => {
        setLoading(true)
        await fetch("/api/dev/mock-pay", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ merchantOrderId }),
        })
        router.refresh()
        setLoading(false)
      }}
      className="mt-3 w-full rounded-lg border border-dashed border-amber-400 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-700 transition hover:bg-amber-100 disabled:opacity-50"
    >
      {loading ? "กำลังจำลอง…" : "🧪 จำลองจ่ายสำเร็จ (dev)"}
    </button>
  )
}
