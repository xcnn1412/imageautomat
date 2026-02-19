"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
    Camera,
    Layers,
    Palette,
    Printer,
    Share2,
    Sparkles,
    ArrowRight,
} from "lucide-react"
import Link from "next/link"

/* ────────────────────────────────────────────────────────────
   Data — 3 Shot Features
   ──────────────────────────────────────────────────────────── */
const features = [
    {
        icon: Camera,
        title: "ถ่ายต่อเนื่อง 1-3 ภาพเป็นต้นไป",
        description:
            "กดครั้งเดียว ถ่ายอัตโนมัติ 3 ช็อต พร้อมนับถอยหลังให้โพสท่าได้ทัน ลูกค้าสนุกทุกเฟรม",
        gradient: "from-green-500 to-emerald-400",
    },
    {
        icon: Layers,
        title: "เลย์เอาต์อัตโนมัติ",
        description:
            "จัดวาง 3 ภาพลงเทมเพลตสำเร็จรูปทันที รองรับทั้งแนวตั้ง แนวนอน และ Strip 3 ช่อง",
        gradient: "from-emerald-500 to-teal-400",
    },
    {
        icon: Palette,
        title: "เทมเพลตหลากหลายสไตล์",
        description:
            "เปลี่ยนธีมได้ตามงาน งานแต่ง คอนเสิร์ต อีเวนต์แบรนด์ ปรับโลโก้และสีได้อิสระ",
        gradient: "from-teal-500 to-cyan-400",
    },
    {
        icon: Printer,
        title: "ปริ้นคุณภาพสูงทันที",
        description:
            "พิมพ์ภาพคมชัดภายใน 8 วินาที กระดาษ Dye-sublimation ทนน้ำ ไม่ซีดจาง กันรอยนิ้วมือ",
        gradient: "from-green-600 to-emerald-500",
    },
    {
        icon: Share2,
        title: "แชร์โซเชียลได้ทันที",
        description:
            "ส่งภาพผ่าน QR Code ไปยังมือถือลูกค้า แชร์ต่อ LINE, Instagram ได้ทันทีไม่ต้องรอ",
        gradient: "from-emerald-400 to-green-500",
    },
    {
        icon: Sparkles,
        title: "ฟิลเตอร์และสติกเกอร์",
        description:
            "เพิ่มความสนุกด้วยฟิลเตอร์สีสันและสติกเกอร์ตกแต่ง ลูกค้าเลือกเองบนหน้าจอสัมผัส",
        gradient: "from-cyan-500 to-green-400",
    },
]

/* ────────────────────────────────────────────────────────────
   Animation Variants
   ──────────────────────────────────────────────────────────── */
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
}

/* ────────────────────────────────────────────────────────────
   Component — 3 Shot Photobooth
   ──────────────────────────────────────────────────────────── */
export function ThreeShotPhotobooth() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

    return (
        <section
            ref={sectionRef}
            id="3shot-photobooth"
            className="py-16 lg:py-24 bg-white relative overflow-hidden"
            aria-label="3 Shot Photobooth — ถ่ายต่อเนื่อง 3 ภาพ จัดเลย์เอาต์อัตโนมัติ"
        >
            {/* Background decorations */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

            <motion.div
                className="mx-auto max-w-7xl px-6 lg:px-8 relative"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* ── Header ── */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-14 lg:mb-18"
                    variants={itemVariants}
                >
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 uppercase tracking-[0.3em] mb-4">
                        <Camera className="w-4 h-4" strokeWidth={2} />
                        ถ่ายภาพนิ่ง 3 ช็อต
                    </span>

                    <h2
                        className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight mb-4"
                        style={{ lineHeight: "1.2" }}
                    >
                        3 Shot{" "}
                        <span className="text-green-500 italic">
                            PHOTOBOOTH
                        </span>
                        <br />
                        ถ่าย 3 ช็อต ได้ภาพจัดเต็ม
                    </h2>

                    <p
                        className="mt-6 text-base md:text-lg text-deep-space-blue/55 leading-relaxed max-w-2xl mx-auto"
                        style={{ lineHeight: "1.8" }}
                    >
                        โหมดถ่ายภาพนิ่งต่อเนื่อง 3 ภาพ จัดเลย์เอาต์อัตโนมัติ
                        เลือกเทมเพลตได้หลากหลาย
                        ปริ้นภาพคมชัดและแชร์ลงโซเชียลได้ทันที
                    </p>

                    {/* Decorative line */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-[3px] bg-gradient-to-r from-green-500 to-emerald-400 mx-auto mt-6 rounded-full"
                    />
                </motion.div>

                {/* ── Feature Grid ── */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mb-14"
                    variants={containerVariants}
                >
                    {features.map((feature, index) => (
                        <motion.article
                            key={feature.title}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="group relative bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 shadow-md shadow-deep-space-blue/[0.04] hover:shadow-xl hover:shadow-green-500/[0.08] transition-all duration-400 border border-deep-space-blue/[0.04]"
                        >
                            {/* Large faded number */}
                            <span className="absolute top-4 right-5 text-5xl sm:text-6xl font-black text-green-500 opacity-[0.06] select-none leading-none pointer-events-none">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* Icon */}
                            <div
                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg mb-5 group-hover:scale-105 transition-transform duration-300`}
                            >
                                <feature.icon
                                    className="w-6 h-6 text-white"
                                    strokeWidth={1.8}
                                />
                            </div>

                            {/* Title */}
                            <h3
                                className="text-lg sm:text-xl font-bold text-deep-space-blue mb-2 group-hover:text-green-600 transition-colors duration-300"
                                style={{ lineHeight: "1.5" }}
                            >
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-sm text-deep-space-blue/55 leading-relaxed"
                                style={{ lineHeight: "1.7" }}
                            >
                                {feature.description}
                            </p>

                            {/* Hover accent — bottom line */}
                            <div
                                className={`absolute bottom-0 left-0 right-0 h-[3px] rounded-b-3xl bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                            />
                        </motion.article>
                    ))}
                </motion.div>

                {/* ── CTA Section ── */}
                <motion.div
                    className="text-center"
                    variants={itemVariants}
                >
                    <Link
                        href="#contact"
                        className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold text-base shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 hover:scale-[1.03] active:scale-95 transition-all duration-300"
                    >
                        สอบถามรายละเอียด
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <p className="mt-4 text-sm text-deep-space-blue/40">
                        ปรึกษาฟรี พร้อมสาธิตการใช้งานจริง
                    </p>
                </motion.div>
            </motion.div>
        </section>
    )
}
