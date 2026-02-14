"use client"

import { Sparkles } from "lucide-react"

export function SoftwareHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" aria-label="ซอฟต์แวร์ตู้ถ่ายรูป Photobooth ระบบ Imageland จาก IMAGEAUTOMAT">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-deep-space-blue via-deep-space-blue/95 to-deep-space-blue" />
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tiger-orange/10 rounded-full blur-[100px]" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-tiger-orange text-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
                        <Sparkles className="w-4 h-4" />
                        <span className="uppercase tracking-[0.2em]">Our Software</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6">
                        ซอฟต์แวร์ตู้ถ่ายรูป <span className="text-tiger-orange">Photobooth</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-12">
                        ซอฟต์แวร์โฟโต้บูธ <strong className="font-semibold text-white/60">IMAGEAUTOMAT</strong> ครบครัน ใช้งานง่าย รองรับหลายฟีเจอร์ <br className="hidden md:block" />
                        ตั้งแต่ AI Filter, Green Screen, GIF, Boomerang ไปจนถึง Live Gallery
                    </p>

                    {/* Quick stats */}
                    <div className="flex items-center justify-center gap-8 md:gap-14">
                        {[
                            { value: "100+", label: "Template" },
                            { value: "AI", label: "Powered" },
                            { value: "24/7", label: "Support" },
                        ].map((stat, idx) => (
                            <div key={idx} className="relative text-center">
                                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">
                                    <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                                        {stat.value}
                                    </span>
                                </div>
                                <div className="text-xs md:text-sm text-white/50 font-medium tracking-wide">
                                    {stat.label}
                                </div>
                                {idx < 2 && (
                                    <div className="absolute -right-4 md:-right-7 top-1/2 -translate-y-1/2 w-px h-16 md:h-20 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
                </svg>
            </div>
        </section>
    )
}
