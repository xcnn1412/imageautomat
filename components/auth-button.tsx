"use client"

import { useState } from "react"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import { LogOut, Package, User } from "lucide-react"

export function AuthButton() {
    const { data: session, status } = useSession()
    const [open, setOpen] = useState(false)

    if (status === "loading") return <div className="h-9 w-9 animate-pulse rounded-full bg-gray-100" />

    if (!session?.user) {
        return (
            <button
                onClick={() => signIn("google")}
                className="inline-flex items-center gap-2 rounded-full border border-deep-space-blue/15 px-5 py-2.5 text-sm font-bold text-deep-space-blue transition-colors hover:bg-deep-space-blue/5"
            >
                <User className="h-4 w-4" />
                เข้าสู่ระบบ
            </button>
        )
    }

    const u = session.user
    return (
        <div className="relative">
            <button onClick={() => setOpen((o) => !o)} className="flex items-center gap-2" aria-label="เมนูผู้ใช้">
                {u.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={u.image} alt={u.name ?? "user"} className="h-9 w-9 rounded-full" referrerPolicy="no-referrer" />
                ) : (
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-tiger-orange text-sm font-bold text-white">
                        {(u.name ?? "U").charAt(0)}
                    </span>
                )}
            </button>

            {open && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
                    <div className="absolute right-0 z-50 mt-2 w-56 rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                        <div className="border-b border-gray-100 px-3 py-2">
                            <p className="truncate text-sm font-semibold text-deep-space-blue">{u.name}</p>
                            <p className="truncate text-xs text-deep-space-blue/50">{u.email}</p>
                        </div>
                        <Link
                            href="/account/orders"
                            onClick={() => setOpen(false)}
                            className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-deep-space-blue/80 hover:bg-deep-space-blue/5"
                        >
                            <Package className="h-4 w-4" /> ออเดอร์ของฉัน
                        </Link>
                        <button
                            onClick={() => signOut()}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                        >
                            <LogOut className="h-4 w-4" /> ออกจากระบบ
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
