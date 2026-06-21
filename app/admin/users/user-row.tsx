"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export function UserRow({
  id,
  name,
  email,
  image,
  createdAt,
  approved,
}: {
  id: string
  name: string | null
  email: string | null
  image: string | null
  createdAt: string
  approved: boolean
}) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)

  async function set(next: boolean) {
    setSaving(true)
    await fetch("/api/admin/users", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id, approved: next }),
    })
    router.refresh()
    setSaving(false)
  }

  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={name ?? "user"} className="h-10 w-10 rounded-full" referrerPolicy="no-referrer" />
      ) : (
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tiger-orange text-sm font-bold text-white">
          {(name ?? email ?? "U").charAt(0).toUpperCase()}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-deep-space-blue">{name ?? "—"}</p>
        <p className="truncate text-xs text-deep-space-blue/50">{email}</p>
        <p className="text-xs text-deep-space-blue/40">สมัคร {new Date(createdAt).toLocaleDateString("th-TH")}</p>
      </div>
      {approved ? (
        <button
          onClick={() => set(false)}
          disabled={saving}
          className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-semibold text-deep-space-blue/60 hover:bg-gray-50 disabled:opacity-50"
        >
          ระงับ
        </button>
      ) : (
        <button
          onClick={() => set(true)}
          disabled={saving}
          className="rounded-lg bg-green-600 px-3 py-1.5 text-sm font-bold text-white hover:bg-green-700 disabled:opacity-50"
        >
          อนุมัติ
        </button>
      )}
    </div>
  )
}
