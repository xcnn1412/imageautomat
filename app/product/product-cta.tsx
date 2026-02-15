"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function ProductCta() {
    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" aria-label="ติดต่อสอบถาม">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tiger-orange/5 rounded-full blur-[120px]" />

            <div className="mx-auto max-w-4xl px-6 lg:px-8 relative text-center">
                <div className="bg-deep-space-blue rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
                    {/* BG decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-tiger-orange/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-blue-light/10 rounded-full blur-3xl" />

                    <div className="relative">
                        <p className="text-white/40 text-sm uppercase tracking-[0.25em] mb-4">
                            พร้อมเริ่มต้นแล้วหรือยัง?
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                            ให้เราช่วยเลือก<span className="text-tiger-orange">ตู้ถ่ายรูป</span>
                            <br className="hidden md:block" />ที่เหมาะกับงานของคุณ
                        </h2>
                        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                            ติดต่อทีมงานเพื่อรับคำแนะนำฟรี พร้อมใบเสนอราคาภายใน 24 ชั่วโมง
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://lin.ee/Q5DSE1r"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#06C755] text-white font-bold rounded-full hover:shadow-xl hover:shadow-[#06C755]/30 hover:scale-105 transition-all duration-300"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                </svg>
                                <span className="tracking-wide">ขอราคาพิเศษ</span>
                            </a>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white hover:text-deep-space-blue transition-all duration-300 border border-white/20"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span>กลับหน้าหลัก</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
