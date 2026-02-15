"use client"

import { motion } from "framer-motion"
import {
    Film,
    PenLine,
    MonitorPlay,
    ArrowRight,
    Sparkles,
    CreditCard,
    Ticket,
    CalendarCheck,
} from "lucide-react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

/* ────────────────────────────────────────────────────────────
   Data — Program Cards
   ──────────────────────────────────────────────────────────── */
interface ProgramItem {
    icon: LucideIcon
    title: string
    tagline: string
    features: string[]
    accentColor: string
    gradientFrom: string
    gradientTo: string
    number: string
    href: string
}

const programs: ProgramItem[] = [
    {
        icon: Film,
        title: "Reel Photobooth",
        tagline: "บันทึกคลิปสั้น สุดไวรัล",
        features: [
            "ถ่ายคลิปสั้นพร้อมปริ้นภาพ",
            "ใส่ฟิลเตอร์และเอฟเฟกต์แบบเรียลไทม์",
            "แชร์โซเชียลได้ทันที",
        ],
        accentColor: "text-tiger-orange",
        gradientFrom: "from-tiger-orange",
        gradientTo: "to-amber-400",
        number: "01",
        href: "/software#reel-photobooth",
    },
    {
        icon: PenLine,
        title: "Signature Photobooth",
        tagline: "เซ็นลายเซ็นต์ ลงบน REEL",
        features: [
            "เขียนลายเซ็นบนหน้าจอสัมผัส",
            "ผสมลายเซ็นเข้ากับคลิป Reel",
            "เหมาะกับงาน Event พรีเมียม",
        ],
        accentColor: "text-purple-500",
        gradientFrom: "from-purple-500",
        gradientTo: "to-violet-400",
        number: "02",
        href: "/software#signature-photobooth",
    },
    {
        icon: MonitorPlay,
        title: "Liveview Photobooth",
        tagline: "ภาพเคลื่อนไหว มีชีวิตชีวา",
        features: [
            "ถ่ายภาพพอร์ตเทรตเคลื่อนไหว",
            "เอฟเฟกต์มืออาชีพในตัว",
            "สร้างประสบการณ์ที่แตกต่าง",
        ],
        accentColor: "text-sky-500",
        gradientFrom: "from-sky-500",
        gradientTo: "to-blue-400",
        number: "03",
        href: "/software#liveview-photobooth",
    },
]

/* ────────────────────────────────────────────────────────────
   Data — Backend / Integrated System Features
   ──────────────────────────────────────────────────────────── */
interface SystemFeature {
    icon: LucideIcon
    title: string
    label: string
    description: string
    gradientFrom: string
    gradientTo: string
}

const systemFeatures: SystemFeature[] = [
    {
        icon: CreditCard,
        title: "ระบบชำระเงิน",
        label: "Payment",
        description: "รองรับหลายช่องทาง ปลอดภัย รวดเร็ว",
        gradientFrom: "from-emerald-500",
        gradientTo: "to-teal-400",
    },
    {
        icon: Ticket,
        title: "ระบบคูปอง",
        label: "Coupon",
        description: "สร้างและจัดการคูปองส่วนลดได้ง่าย ยืดหยุ่น",
        gradientFrom: "from-rose-500",
        gradientTo: "to-pink-400",
    },
    {
        icon: CalendarCheck,
        title: "ระบบอีเวนต์",
        label: "Event",
        description: "จัดการงานอีเวนต์ได้อย่างมีประสิทธิภาพ ครบวงจร",
        gradientFrom: "from-indigo-500",
        gradientTo: "to-blue-400",
    },
]

/* ────────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────────── */
export function HomeSoftwareFeatures() {
    return (
        <section
            className="w-full bg-[#FAFAFA] py-16 sm:py-20 md:py-24 lg:py-28 px-4 md:px-8 relative overflow-hidden"
            aria-label="ซอฟต์แวร์โฟโต้บูธครบวงจร ระบบชำระเงิน คูปอง และอีเวนต์"
        >
            {/* Subtle top divider — visual bridge from prev section */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-deep-space-blue/10 to-transparent" />

            <div className="max-w-6xl mx-auto relative">
                {/* ═══════════════════════════════════════════════
                   1. Main Header Section
                   ═══════════════════════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-14 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-5">
                        <Sparkles className="w-4 h-4 text-tiger-orange" strokeWidth={2} />
                        <span className="text-xs sm:text-sm font-semibold text-tiger-orange tracking-widest uppercase">
                            โปรแกรมของเรา
                        </span>
                        <Sparkles className="w-4 h-4 text-tiger-orange" strokeWidth={2} />
                    </div>

                    <h3
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-deep-space-blue mb-4 sm:mb-5"
                        style={{ lineHeight: "1.35" }}
                    >
                        เลือกโปรแกรมที่ใช่
                        <br className="hidden sm:block" />
                        <span className="text-tiger-orange">ให้ตรงกับงานของคุณ</span>
                    </h3>

                    <p
                        className="text-sm sm:text-base md:text-lg text-deep-space-blue/50 max-w-xl mx-auto"
                        style={{ lineHeight: "1.8" }}
                    >
                        ซอฟต์แวร์ Photobooth 3 รูปแบบ ครอบคลุมทุกรูปแบบงานอีเวนต์
                    </p>

                    {/* Decorative line */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-[3px] bg-tiger-orange mx-auto mt-6 sm:mt-8 rounded-full"
                    />
                </motion.div>

                {/* ═══════════════════════════════════════════════
                   2. Program Selection Grid (3 Cards)
                   ═══════════════════════════════════════════════ */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mb-14 sm:mb-16 md:mb-20">
                    {programs.map((program, index) => (
                        <Link key={program.title} href={program.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.12 * index }}
                                whileHover={{ y: -6 }}
                                className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 shadow-md shadow-deep-space-blue/[0.06] hover:shadow-xl hover:shadow-deep-space-blue/[0.1] transition-all duration-400 border border-deep-space-blue/[0.04] cursor-pointer h-full"
                            >
                                {/* Large faded number — top-left */}
                                <span
                                    className={`absolute top-4 left-5 sm:top-5 sm:left-6 text-5xl sm:text-6xl lg:text-7xl font-black ${program.accentColor} opacity-[0.07] select-none leading-none pointer-events-none`}
                                >
                                    {program.number}
                                </span>

                                {/* Top row — icon */}
                                <div className="flex items-start justify-end mb-5 sm:mb-6 relative z-10">
                                    <div
                                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${program.gradientFrom} ${program.gradientTo} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
                                    >
                                        <program.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.8} />
                                    </div>
                                </div>

                                {/* Title */}
                                <h4
                                    className="relative z-10 text-lg sm:text-xl font-bold text-deep-space-blue mb-1.5 group-hover:text-tiger-orange transition-colors duration-300"
                                    style={{ lineHeight: "1.5" }}
                                >
                                    {program.title}
                                </h4>

                                {/* Tagline */}
                                <p className="relative z-10 text-xs sm:text-sm font-medium text-deep-space-blue/40 mb-4 sm:mb-5">
                                    {program.tagline}
                                </p>

                                {/* Feature list */}
                                <ul className="relative z-10 space-y-2.5 sm:space-y-3 mb-1">
                                    {program.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-2.5">
                                            <span
                                                className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${program.gradientFrom} ${program.gradientTo}`}
                                            />
                                            <span
                                                className="text-xs sm:text-sm text-deep-space-blue/60"
                                                style={{ lineHeight: "1.6" }}
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Hover accent — bottom line */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 h-[3px] rounded-b-3xl bg-gradient-to-r ${program.gradientFrom} ${program.gradientTo} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                                />
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* ═══════════════════════════════════════════════
                   3. Integrated System Section (Slate-50 zone)
                   ═══════════════════════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-slate-50 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 mb-12 sm:mb-14 md:mb-16 border border-deep-space-blue/[0.04]"
                >
                    {/* Subtle background decoration */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-tiger-orange/[0.03] rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/[0.03] rounded-full blur-3xl pointer-events-none" />

                    {/* Sub-header */}
                    <div className="text-center mb-8 sm:mb-10 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <span className="inline-block text-[10px] sm:text-xs font-semibold text-deep-space-blue/40 tracking-[0.2em] uppercase mb-3">
                                Backend System
                            </span>
                            <h4
                                className="text-xl sm:text-2xl md:text-3xl font-bold text-deep-space-blue"
                                style={{ lineHeight: "1.4" }}
                            >
                                เสริมประสิทธิภาพด้วย
                                <span className="text-tiger-orange"> ระบบจัดการหลังบ้าน</span>
                            </h4>
                        </motion.div>
                    </div>

                    {/* 3-column compact feature cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 relative z-10">
                        {systemFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                whileHover={{ y: -4 }}
                                className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm shadow-deep-space-blue/[0.04] hover:shadow-md hover:shadow-deep-space-blue/[0.08] transition-all duration-300 border border-deep-space-blue/[0.03]"
                            >
                                {/* Icon + label row */}
                                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                    <div
                                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <feature.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                                    </div>
                                    <div>
                                        <h5 className="text-sm sm:text-base font-bold text-deep-space-blue leading-tight">
                                            {feature.title}
                                        </h5>
                                        <span className="text-[10px] sm:text-xs font-medium text-deep-space-blue/30 uppercase tracking-wider">
                                            {feature.label}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p
                                    className="text-xs sm:text-sm text-deep-space-blue/50"
                                    style={{ lineHeight: "1.7" }}
                                >
                                    {feature.description}
                                </p>

                                {/* Hover accent — bottom line */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ═══════════════════════════════════════════════
                   4. Call to Action (CTA)
                   ═══════════════════════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex justify-center"
                >
                    <Link href="/payment">
                        <motion.span
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="group inline-flex items-center gap-2.5 px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 bg-tiger-orange text-white text-sm sm:text-base font-bold rounded-full shadow-lg shadow-tiger-orange/20 hover:shadow-xl hover:shadow-tiger-orange/30 transition-all duration-300 cursor-pointer"
                        >
                            ระบบชำระเงิน
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.span>
                    </Link>
                </motion.div>
            </div>

            {/* Subtle bottom divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-deep-space-blue/10 to-transparent" />
        </section>
    )
}
