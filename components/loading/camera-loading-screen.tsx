"use client"

import { useState, useEffect, useCallback } from "react"
import { CameraBody } from "./camera-body"
import { ShutterBlades } from "./shutter-blades"

type AnimationPhase =
    | "enter"
    | "idle"
    | "shutter-close"
    | "flash"
    | "hold-white"
    | "done"

interface CameraLoadingScreenProps {
    onComplete?: () => void
}

export function CameraLoadingScreen({ onComplete }: CameraLoadingScreenProps) {
    const [phase, setPhase] = useState<AnimationPhase>("enter")

    const advancePhase = useCallback(() => {
        setPhase((prev) => {
            switch (prev) {
                case "enter":
                    return "idle"
                case "idle":
                    return "shutter-close"
                case "shutter-close":
                    return "flash"
                case "flash":
                    return "hold-white"
                case "hold-white":
                    return "done"
                default:
                    return prev
            }
        })
    }, [])

    useEffect(() => {
        const timings: Record<string, number> = {
            enter: 800,
            idle: 1000,
            "shutter-close": 300,
            flash: 200,
            "hold-white": 600,
        }

        const delay = timings[phase]
        if (delay === undefined) return

        const timer = setTimeout(advancePhase, delay)
        return () => clearTimeout(timer)
    }, [phase, advancePhase])

    useEffect(() => {
        if (phase === "done") {
            onComplete?.()
        }
    }, [phase, onComplete])

    const isFlashing = phase === "flash" || phase === "hold-white"
    const isDone = phase === "done"

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            style={{
                background: isDone ? "transparent" : "#FB8500",
                pointerEvents: isDone ? "none" : "auto",
            }}
        >
            {/* Subtle ambient background decoration */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background:
                        "radial-gradient(ellipse at 30% 20%, #FFB703 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, #E07600 0%, transparent 50%)",
                    opacity: isFlashing || isDone ? 0 : 0.15,
                    transition: "opacity 0.3s ease",
                }}
            />

            {/* Camera container */}
            <div
                className="relative flex flex-col items-center gap-8"
                style={{
                    opacity: isDone ? 0 : 1,
                    transform:
                        phase === "enter"
                            ? "scale(0.6) translateY(40px)"
                            : isFlashing
                                ? "scale(1.02)"
                                : "scale(1) translateY(0)",
                    transition:
                        phase === "enter"
                            ? "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
                            : "all 0.3s ease",
                }}
            >
                {/* Camera */}
                <div className="relative w-64 h-48 sm:w-80 sm:h-60">
                    <CameraBody className="w-full h-full" />
                    <ShutterBlades
                        closing={
                            phase === "shutter-close" ||
                            phase === "flash" ||
                            phase === "hold-white"
                        }
                    />

                    {/* Shutter button press animation */}
                    {(phase === "shutter-close" ||
                        phase === "flash") && (
                        <div
                            className="absolute"
                            style={{
                                top: "14%",
                                right: "18%",
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                background: "#FFFFFF",
                                boxShadow: "0 0 16px rgba(255, 255, 255, 0.6)",
                                animation: "buttonPress 0.3s ease-in-out",
                            }}
                        />
                    )}
                </div>

                {/* Brand name */}
                <h1
                    className="text-2xl sm:text-3xl font-bold tracking-widest uppercase"
                    style={{ color: "#FFFFFF" }}
                >
                    imageautomat
                </h1>
                <p
                    className="text-sm sm:text-base font-medium tracking-[0.3em] uppercase -mt-5"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                    thailand
                </p>

                {/* Status text */}
                <div className="text-center -mt-2">
                    <p
                        className="text-sm font-medium tracking-wide"
                        style={{
                            color: "#FFFFFF",
                            opacity: 0.8,
                        }}
                    >
                        {phase === "enter" && "Preparing..."}
                        {phase === "idle" && "Ready to capture"}
                        {phase === "shutter-close" && "Capturing..."}
                        {(phase === "flash" || phase === "hold-white") && ""}
                        {phase === "done" && ""}
                    </p>

                    {/* Progress dots */}
                    <div className="flex items-center justify-center gap-2 mt-3">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="rounded-full"
                                style={{
                                    width: "6px",
                                    height: "6px",
                                    background: "#FFFFFF",
                                    opacity: isFlashing ? 0 : 0.5,
                                    animation:
                                        phase === "idle"
                                            ? `dotPulse 1.2s ease-in-out ${i * 0.2}s infinite`
                                            : "none",
                                    transition: "background 0.3s ease, opacity 0.3s ease",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Flash overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: "#FAFAFA",
                    opacity:
                        phase === "flash"
                            ? 1
                            : phase === "hold-white"
                                ? 0.95
                                : 0,
                    transition:
                        phase === "flash"
                            ? "opacity 0.05s ease-in"
                            : phase === "hold-white"
                                ? "opacity 0.6s ease-out"
                                : "opacity 0.3s ease-out",
                    pointerEvents: "none",
                }}
            />

            <style jsx>{`
                @keyframes dotPulse {
                    0%,
                    100% {
                        transform: scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: scale(1.6);
                        opacity: 0.8;
                    }
                }

                @keyframes buttonPress {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(0.8);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
            `}</style>
        </div>
    )
}
