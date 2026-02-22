"use client"

import { AnimatedAstronaut } from "./animated-astronaut"
import { RedirectCountdown } from "./redirect-countdown"

export function NotFoundContent() {
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
                {/* Animated illustration */}
                <AnimatedAstronaut />

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
                <RedirectCountdown />
            </div>
        </main>
    )
}
