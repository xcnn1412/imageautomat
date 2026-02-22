"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Home } from "lucide-react"

export function RedirectCountdown() {
    const [count, setCount] = useState(5)
    const router = useRouter()

    useEffect(() => {
        if (count <= 0) {
            router.push("/")
            return
        }

        const timer = setTimeout(() => {
            setCount((prev) => prev - 1)
        }, 1000)

        return () => clearTimeout(timer)
    }, [count, router])

    const progress = ((5 - count) / 5) * 100

    return (
        <div className="flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
            {/* Countdown text */}
            <p className="text-white text-sm font-sans leading-relaxed tracking-wide" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
                {"กำลังพากลับหน้าแรกใน "}
                <span className="text-white font-semibold text-base tabular-nums">
                    {count}
                </span>
                {" วินาที"}
            </p>

            {/* Progress bar */}
            <div className="w-48 md:w-64 h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                    className="h-full bg-white rounded-full transition-all duration-1000 ease-linear"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Go home button - Deep Space Blue on orange bg */}
            <button
                onClick={() => router.push("/")}
                className="group flex items-center gap-2.5 px-8 py-3.5 bg-[#023047] text-white rounded-2xl
          font-semibold text-sm tracking-wide
          shadow-[0_4px_24px_rgba(2,48,71,0.3)]
          hover:shadow-[0_8px_32px_rgba(2,48,71,0.4)]
          hover:scale-[1.03] active:scale-[0.97]
          transition-all duration-300 ease-out cursor-pointer"
            >
                <Home className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                <span>กลับหน้าแรก</span>
            </button>
        </div>
    )
}
