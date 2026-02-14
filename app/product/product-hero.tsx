"use client"

import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { stats } from "@/data/products"

export function ProductHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" aria-label="หัวข้อหน้าสินค้าตู้ถ่ายรูป">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-deep-space-blue via-deep-space-blue/95 to-deep-space-blue" />
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tiger-orange/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-blue-light/10 rounded-full blur-[100px]" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-tiger-orange text-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
                        <Sparkles className="w-4 h-4" />
                        <span className="uppercase tracking-[0.2em]">Our Products</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6">
                        สินค้าตู้ถ่ายรูป Photobooth
                    </h1>
                    <p className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-12">
                        ตู้ถ่ายรูปและ Photobooth คุณภาพสูง ออกแบบเพื่อสร้างประสบการณ์สุดพิเศษ <br className="hidden md:block" />
                        กว่า 50 รุ่นให้เลือก ทั้งเช่าและซื้อ เหมาะกับทุกรูปแบบงานอีเวนต์
                    </p>

                    {/* Stats */}
                    <motion.div
                        className="flex items-center justify-center gap-6 md:gap-10 lg:gap-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.2 } },
                        }}
                    >
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                className="relative text-center group"
                                variants={{
                                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                                    visible: {
                                        opacity: 1, y: 0, scale: 1,
                                        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                                    },
                                }}
                            >
                                {/* Icon container with glow */}
                                <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl mb-4 mx-auto">
                                    {/* Glow background */}
                                    <div className="absolute inset-0 rounded-2xl bg-tiger-orange/15 blur-xl group-hover:bg-tiger-orange/25 transition-all duration-500" />
                                    {/* Icon bg */}
                                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.03] border border-white/15 flex items-center justify-center backdrop-blur-sm group-hover:border-tiger-orange/30 transition-all duration-500">
                                        <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-tiger-orange drop-shadow-[0_0_8px_rgba(251,133,0,0.4)] group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                </div>

                                {/* Value */}
                                <motion.div
                                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: { duration: 0.8, delay: 0.3 },
                                        },
                                    }}
                                >
                                    <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                                        {stat.value}
                                    </span>
                                </motion.div>

                                {/* Label */}
                                <div className="text-xs md:text-sm text-white/50 font-medium tracking-wide">
                                    {stat.label}
                                </div>

                                {/* Divider (not on last item) */}
                                {idx < stats.length - 1 && (
                                    <div className="absolute -right-3 md:-right-5 lg:-right-7 top-1/2 -translate-y-1/2 w-px h-16 md:h-20 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
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
