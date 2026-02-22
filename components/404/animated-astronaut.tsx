"use client"

import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export function AnimatedAstronaut() {
    return (
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
    )
}
