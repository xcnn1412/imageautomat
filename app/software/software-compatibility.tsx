"use client"

import {
    Smartphone,
    ArrowRight,
    CheckCircle2,
} from "lucide-react"

const highlights = [
    "รองรับ Windows 10/11",
    "รองรับกล้อง DSLR",
    "รองรับ Webcam USB",
    "ย่อรูป / ครอปรูป อัตโนมัติ",
    "Countdown Timer ปรับได้",
    "Multi-Language (TH/EN)",
    "ระบบ Analytics & Report",
    "รองรับ Touchscreen",
]

export function SoftwareCompatibility() {
    return (
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden" aria-label="ความเข้ากันได้ของซอฟต์แวร์ตู้ถ่ายรูป Photobooth กับอุปกรณ์ต่างๆ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                <div className="bg-gradient-to-br from-deep-space-blue to-deep-space-blue/95 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
                    {/* BG decoration */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-tiger-orange/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

                    <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-tiger-orange text-sm font-medium mb-6 border border-white/10">
                                <Smartphone className="w-4 h-4" />
                                <span className="uppercase tracking-[0.15em]">Compatibility</span>
                            </div>
                            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                                ซอฟต์แวร์ตู้ถ่ายรูปที่รองรับ<span className="text-tiger-orange">อุปกรณ์</span><br />หลากหลาย
                            </h2>
                            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-md">
                                ซอฟต์แวร์ Photobooth ของเราออกแบบมาให้ใช้งานร่วมกับฮาร์ดแวร์ได้อย่างกว้างขวาง ไม่ว่าจะเป็นกล้อง DSLR เครื่องพิมพ์ภาพถ่าย หรือจอสัมผัส Touchscreen
                            </p>
                            <a
                                href="https://lin.ee/Q5DSE1r"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-tiger-orange text-white font-bold rounded-full hover:bg-white hover:text-deep-space-blue transition-all duration-300 shadow-lg shadow-tiger-orange/20 hover:shadow-xl"
                            >
                                <span>สอบถามเพิ่มเติม</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Right - Checklist */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
                            {highlights.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition-all duration-300"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-tiger-orange flex-shrink-0" />
                                    <span className="text-white/80 text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
