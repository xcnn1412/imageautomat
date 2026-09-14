"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Home } from "lucide-react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export function NotFoundContent() {
    const [count, setCount] = useState(5)
    const router = useRouter()

    useEffect(() => {
        if (count <= 0) {
            router.push("/")
            return
        }
        const timer = setTimeout(() => setCount((prev) => prev - 1), 1000)
        return () => clearTimeout(timer)
    }, [count, router])

    const progress = ((5 - count) / 5) * 100

    return (
        <main
            className="min-h-dvh flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden"
            style={{ background: "linear-gradient(160deg, #FB8500 0%, #E07600 50%, #C96A00 100%)" }}
        >
            {/* Subtle background decoration - soft white/cream blurs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[8%] left-[3%] w-80 h-80 rounded-full bg-white/8 blur-3xl" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-[#FFB703]/20 blur-3xl" />
                <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8 max-w-md mx-auto text-center">
                {/* Animated astronaut illustration */}
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                    {/* Background glow rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full bg-white/10 animate-pulse-ring" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/15 animate-pulse-ring"
                            style={{ animationDelay: "0.5s" }}
                        />
                    </div>

                    {/* Lottie Animation */}
                    <div className="absolute inset-0 flex items-center justify-center drop-shadow-2xl">
                        <DotLottieReact
                            src="https://lottie.host/898fc65e-9a20-4bc6-9bf9-4ae6bf372882/w5MaAvJj09.lottie"
                            loop
                            autoplay
                            className="w-64 h-64 md:w-80 md:h-80"
                        />
                    </div>

                    {/* Floating stars */}
                    <div className="absolute top-2 left-2 animate-float-slow" style={{ animationDelay: "0.5s" }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" fill="#FFFFFF" opacity="0.7" />
                        </svg>
                    </div>
                    <div className="absolute top-12 right-0 animate-float-slow" style={{ animationDelay: "1.5s" }}>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                            <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" fill="#FFB703" opacity="0.6" />
                        </svg>
                    </div>
                    <div className="absolute bottom-6 left-6 animate-float-slow" style={{ animationDelay: "2s" }}>
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                            <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" fill="#FFFFFF" opacity="0.5" />
                        </svg>
                    </div>
                    <div className="absolute bottom-14 right-4 animate-float-slow" style={{ animationDelay: "0.8s" }}>
                        <svg width="8" height="8" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="3" fill="#023047" opacity="0.3" />
                        </svg>
                    </div>
                    <div className="absolute top-20 left-0 animate-float-slow" style={{ animationDelay: "1.2s" }}>
                        <svg width="6" height="6" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="4" fill="#FFFFFF" opacity="0.5" />
                        </svg>
                    </div>
                </div>

                {/* 404 number - white text on orange bg */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
                    <h1 className="text-8xl md:text-9xl font-extrabold text-white tracking-tighter leading-none select-none drop-shadow-lg">
                        <span className="relative">
                            4
                            <span className="absolute inset-0 animate-shimmer-404 rounded-2xl" />
                        </span>
                        <span className="text-[#023047] relative inline-block animate-wiggle-404">
                            0
                        </span>
                        <span className="relative">
                            4
                            <span className="absolute inset-0 animate-shimmer-404 rounded-2xl" style={{ animationDelay: "1s" }} />
                        </span>
                    </h1>
                </div>

                {/* Message - white typography on orange */}
                <div className="flex flex-col gap-3 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
                    <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed tracking-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                        {"ไม่พบหน้าที่คุณค้นหา"}
                    </h2>
                    <p className="text-white text-sm md:text-base leading-relaxed max-w-sm mx-auto" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
                        {"หน้าที่คุณกำลังมองหาอาจถูกย้าย ลบ หรือไม่เคยมีอยู่"}
                    </p>
                </div>

                {/* Countdown & redirect */}
                <div className="flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
                    <p className="text-white text-sm font-sans leading-relaxed tracking-wide" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
                        {"กำลังพากลับหน้าแรกใน "}
                        <span className="text-white font-semibold text-base tabular-nums">{count}</span>
                        {" วินาที"}
                    </p>

                    <div className="w-48 md:w-64 h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                        <div
                            className="h-full bg-white rounded-full transition-all duration-1000 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

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
            </div>
        </main>
    )
}
