"use client"

import { signIn } from "next-auth/react"
import { User } from "lucide-react"

/* ponytail: มี provider เดียว (Google) — ปุ่มเดียวพอ ไม่ต้องทำ form/provider list */
export function LoginForm() {
    return (
        <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-deep-space-blue px-6 py-3.5 font-bold text-white transition-colors hover:bg-deep-space-blue/90"
        >
            <User className="h-5 w-5" />
            เข้าสู่ระบบด้วย Google
        </button>
    )
}
