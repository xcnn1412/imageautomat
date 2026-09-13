"use client"

import {
    Camera,
    Wand2,
    Printer,
    Share2,
    Play,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface WorkflowStep {
    step: string
    icon: LucideIcon
    title: string
    description: string
}

const workflows: WorkflowStep[] = [
    {
        step: "01",
        icon: Camera,
        title: "ถ่ายรูป",
        description: "ผู้ใช้กดปุ่มถ่ายรูป เลือกฟิลเตอร์และเอฟเฟกต์ที่ต้องการ",
    },
    {
        step: "02",
        icon: Wand2,
        title: "ตกแต่งอัตโนมัติ",
        description: "AI ปรับแต่งภาพ ใส่ Frame, Sticker และ Template ที่เลือกไว้",
    },
    {
        step: "03",
        icon: Printer,
        title: "พิมพ์ทันที",
        description: "พิมพ์รูปคุณภาพสูงภายใน 10 วินาที พร้อมรับรูปได้เลย",
    },
    {
        step: "04",
        icon: Share2,
        title: "แชร์ออนไลน์",
        description: "สแกน QR Code เพื่อรับรูปดิจิทัล แชร์ลง Social ได้ทันที",
    },
]

export function SoftwareWorkflow() {
    return (
        <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden" aria-label="ขั้นตอนการใช้งานซอฟต์แวร์ตู้ถ่ายรูป Photobooth">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tiger-orange/5 rounded-full blur-[120px]" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-space-blue/5 text-deep-space-blue text-sm font-medium mb-6">
                        <Play className="w-4 h-4 text-tiger-orange" />
                        <span className="uppercase tracking-[0.15em]">How It Works</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.1]">
                        ซอฟต์แวร์ Photobooth ใช้งานง่าย<br className="hidden md:block" /> เพียง <span className="italic text-tiger-orange">4 ขั้นตอน</span>
                    </h2>
                    <p className="mt-6 text-lg text-deep-space-blue/50 leading-relaxed max-w-2xl mx-auto">
                        ตู้ถ่ายรูปของเราใช้งานง่ายไม่ต้องมีพนักงานดูแล ตั้งแต่ถ่ายรูปไปจนถึงแชร์ออนไลน์เสร็จภายในไม่กี่วินาที
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
                    {workflows.map((item, idx) => (
                        <div key={idx} className="relative text-center group" role="listitem">
                            {/* Connector line */}
                            {idx < workflows.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-tiger-orange/30 to-transparent" />
                            )}

                            {/* Step number */}
                            <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg shadow-deep-space-blue/5 mb-6 group-hover:shadow-xl group-hover:shadow-tiger-orange/10 transition-all duration-500 border border-gray-100">
                                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-tiger-orange text-white text-xs font-bold flex items-center justify-center shadow-md">
                                    {item.step}
                                </div>
                                <item.icon className="w-9 h-9 text-deep-space-blue/70 group-hover:text-tiger-orange transition-colors duration-300" />
                            </div>

                            <h3 className="font-serif text-xl text-deep-space-blue mb-3">
                                {item.title}
                            </h3>
                            <p className="text-sm text-deep-space-blue/50 leading-relaxed max-w-[250px] mx-auto">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
