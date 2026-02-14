"use client"

import { motion } from "framer-motion"
import { Film, PenLine, MonitorPlay, ChevronDown } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface CtaItem {
    icon: LucideIcon
    title: string
    subtitle: string
    href: string
    color: string
    glowColor: string
}

const ctaButtons: CtaItem[] = [
    {
        icon: Film,
        title: "Reel Photobooth",
        subtitle: "ตู้บันทึกคลิปสั้น พร้อมปริ้นภาพสุดคูล",
        href: "#reel-photobooth",
        color: "from-orange-500 to-amber-500",
        glowColor: "bg-orange-500/20",
    },
    {
        icon: PenLine,
        title: "Signature Photobooth",
        subtitle: "ตู้ REEL ลายเซ็นต์ พร้อมถ่ายภาพ",
        href: "#signature-photobooth",
        color: "from-purple-500 to-violet-500",
        glowColor: "bg-purple-500/20",
    },
    {
        icon: MonitorPlay,
        title: "Liveview Photobooth",
        subtitle: "ภาพความทรงจำที่ขยับได้",
        href: "#liveview-photobooth",
        color: "from-sky-500 to-blue-500",
        glowColor: "bg-sky-500/20",
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
}

export function SoftwareFeatures() {
    return (
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden" aria-label="เลือกดูซอฟต์แวร์ Photobooth">
            {/* Background decorations */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-tiger-orange/5 rounded-full blur-3xl" />

            <div className="mx-auto max-w-5xl px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.1]">
                        ซอฟต์แวร์ Photobooth <span className="italic text-tiger-orange">3 แบบยอดนิยม</span>
                        <br className="hidden md:block" /> ตอบโจทย์ทุกงานอีเวนต์
                    </h2>
                    <p className="mt-6 text-lg text-deep-space-blue/50 leading-relaxed max-w-2xl mx-auto">
                        เลือกสรรฟีเจอร์ตู้ถ่ายรูปที่ใช่ เพื่อมอบประสบการณ์ที่น่าประทับใจและแตกต่างให้แก่แขกในงานของคุณ
                    </p>
                </div>

                {/* CTA Buttons Grid */}
                <motion.div
                    className="grid md:grid-cols-3 gap-5 lg:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {ctaButtons.map((item) => (
                        <motion.a
                            key={item.title}
                            href={item.href}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="group relative flex flex-col items-center text-center p-8 lg:p-10 rounded-3xl bg-white border-2 border-gray-100/80 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                        >
                            {/* Hover gradient background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 rounded-3xl`} />

                            {/* Shimmer sweep effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                            {/* Icon with glow + floating animation */}
                            <motion.div
                                className="relative mb-6"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <motion.div
                                    className={`absolute inset-0 ${item.glowColor} rounded-2xl blur-xl scale-150`}
                                    animate={{ opacity: [0.3, 0.7, 0.3], scale: [1.3, 1.6, 1.3] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className="w-8 h-8 text-white" strokeWidth={1.8} />
                                </div>
                            </motion.div>

                            {/* Title */}
                            <h3 className="font-serif text-xl lg:text-2xl text-deep-space-blue mb-2 group-hover:text-tiger-orange transition-colors duration-300">
                                {item.title}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-sm text-deep-space-blue/50 leading-relaxed mb-5">
                                {item.subtitle}
                            </p>

                            {/* Arrow indicator - always visible with bounce */}
                            <motion.div
                                className="flex items-center gap-1.5 text-tiger-orange text-sm font-medium"
                                animate={{ y: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <span>ดูรายละเอียด</span>
                                <ChevronDown className="w-4 h-4" />
                            </motion.div>

                            {/* Bottom accent line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
