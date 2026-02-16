"use client"

import { MessageCircle } from "lucide-react"

export function RentalCta() {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden" aria-label="เรียกดูบริการเช่าตู้ถ่ายรูป">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-deep-space-blue to-deep-space-blue/95" />
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Blur Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tiger-orange/10 rounded-full blur-[150px]" />

            <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
                    พร้อมสร้างความประทับใจ<br className="hidden md:block" />
                    <span className="text-tiger-orange">ในงานของคุณ?</span>
                </h2>

                <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
                    ทีมงานพร้อมให้คำปรึกษาและเสนอแพ็คเกจที่เหมาะกับงานของคุณ<br className="hidden md:block" />
                    ฟรี! ไม่มีค่าใช้จ่าย
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://lin.ee/Q5DSE1r"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 bg-[#06C755] hover:bg-[#05b04b] text-white font-bold px-8 py-5 text-base rounded-full transition-all duration-300 shadow-xl shadow-[#06C755]/30 hover:shadow-2xl hover:shadow-[#06C755]/50 hover:scale-105 active:scale-95 overflow-hidden w-full sm:w-auto justify-center"
                    >
                        {/* Shimmer Effect */}
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />

                        <MessageCircle className="relative z-10 w-5 h-5" />
                        <span className="relative z-10 tracking-wide">สอบถามข้อมูลเพิ่มเติม</span>
                    </a>

                    <a
                        href="/product"
                        className="group relative inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-5 text-base rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
                    >
                        <span className="tracking-wide">หรือซื้อตู้เป็นเจ้าของ</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
