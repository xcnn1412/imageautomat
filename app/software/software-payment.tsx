"use client"

import { motion } from "framer-motion"
import {
    CreditCard,
    Ticket,
    CalendarCheck,
    QrCode,
    ShieldCheck,
    Zap,
    ScanBarcode,
    Users,
    CheckCircle2,
    Sparkles,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

/* ────────────────────────────────────────────────────────────
   Data — 3 Access Modes
   ──────────────────────────────────────────────────────────── */
interface AccessMode {
    icon: LucideIcon
    title: string
    label: string
    tagline: string
    description: string
    features: { icon: LucideIcon; text: string }[]
    gradientFrom: string
    gradientTo: string
    accentColor: string
    number: string
}

const accessModes: AccessMode[] = [
    {
        icon: CreditCard,
        title: "ระบบชำระเงิน",
        label: "Payment Gateway",
        tagline: "เชื่อมต่อ PromptPay ง่ายๆ จ่ายปุ๊บ ถ่ายปั๊บ",
        description:
            "เชื่อมต่อระบบ Payment Gateway ผ่าน PromptPay มาตรฐานของไทย รองรับการชำระเงินอัตโนมัติ สแกน QR Code จ่ายเงินผ่านแอปธนาคาร ระบบตรวจสอบสถานะการชำระเงินแบบเรียลไทม์ ปลดล็อคตู้ถ่ายรูปทันทีเมื่อชำระเงินสำเร็จ",
        features: [
            { icon: QrCode, text: "สแกน QR PromptPay จ่ายผ่านแอปธนาคาร" },
            { icon: ShieldCheck, text: "ตรวจสอบยอดชำระแบบเรียลไทม์" },
            { icon: Zap, text: "ปลดล็อคถ่ายภาพทันทีเมื่อชำระสำเร็จ" },
        ],
        gradientFrom: "from-emerald-500",
        gradientTo: "to-teal-400",
        accentColor: "text-emerald-500",
        number: "01",
    },
    {
        icon: Ticket,
        title: "ระบบคูปอง",
        label: "Coupon System",
        tagline: "ใช้รหัสปลดล็อค ผูก POS ได้ทันที",
        description:
            "ระบบคูปองรหัส 6-12 หลัก สำหรับปลดล็อคเพื่อถ่ายภาพ สามารถ Generate QR Code จากรหัสคูปอง เพื่อให้ลูกค้าสแกนได้สะดวก รองรับการผูกกับเครื่อง POS เพื่อจัดการระบบชำระเงินผ่านหน้าร้าน",
        features: [
            { icon: ScanBarcode, text: "รหัสคูปอง 6-12 หลัก พร้อม QR Code" },
            { icon: CreditCard, text: "ผูกกับเครื่อง POS ชำระเงินได้ทันที" },
            { icon: ShieldCheck, text: "จัดการคูปอง สร้าง / ยกเลิก / ตรวจสอบ" },
        ],
        gradientFrom: "from-rose-500",
        gradientTo: "to-pink-400",
        accentColor: "text-rose-500",
        number: "02",
    },
    {
        icon: CalendarCheck,
        title: "ระบบอีเวนต์",
        label: "Event Mode",
        tagline: "เปิดใช้ฟรี ไม่ต้องจ่าย ไม่ต้องใส่รหัส",
        description:
            "โหมดงานอีเวนต์ เข้าใช้งานได้ทันทีโดยไม่ต้องผ่านระบบชำระเงินหรือคูปอง เหมาะสำหรับงานอีเวนต์ งานแต่งงาน งานเปิดตัวสินค้า หรืองานที่ผู้จัดงานต้องการให้แขกทุกคนใช้งานตู้ถ่ายรูปได้อย่างอิสระ",
        features: [
            { icon: Users, text: "เปิดให้แขกใช้งานได้ทันที ไม่จำกัดจำนวน" },
            { icon: Zap, text: "ไม่ต้องชำระเงินหรือใส่รหัสคูปอง" },
            { icon: CalendarCheck, text: "เหมาะกับงานแต่ง อีเวนต์ เปิดตัวสินค้า" },
        ],
        gradientFrom: "from-indigo-500",
        gradientTo: "to-blue-400",
        accentColor: "text-indigo-500",
        number: "03",
    },
]

/* ────────────────────────────────────────────────────────────
   Animation Variants
   ──────────────────────────────────────────────────────────── */
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.65, ease: "easeOut" as const },
    },
}

/* ────────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────────── */
export function SoftwarePayment() {
    return (
        <section
            className="w-full bg-[#FAFAFA] py-16 sm:py-20 md:py-24 lg:py-28 px-4 md:px-8 relative overflow-hidden"
            aria-label="ระบบการเข้าใช้งานตู้ถ่ายรูป — ชำระเงิน คูปอง และอีเวนต์"
        >
            {/* Subtle top divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-deep-space-blue/10 to-transparent" />

            {/* Background decorations */}
            <div className="absolute top-24 -left-20 w-80 h-80 bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-24 -right-20 w-96 h-96 bg-indigo-500/[0.04] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.02] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative">
                {/* ═══════════════════════════════════════════════
                   1. Section Header
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
                            Access System
                        </span>
                        <Sparkles className="w-4 h-4 text-tiger-orange" strokeWidth={2} />
                    </div>

                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-deep-space-blue mb-4 sm:mb-5"
                        style={{ lineHeight: "1.35" }}
                    >
                        3 ระบบการเข้าถึง
                        <br className="hidden sm:block" />
                        <span className="text-tiger-orange">ที่ตอบโจทย์ทุกรูปแบบธุรกิจ</span>
                    </h2>

                    <p
                        className="text-sm sm:text-base md:text-lg text-deep-space-blue/50 max-w-2xl mx-auto"
                        style={{ lineHeight: "1.8" }}
                    >
                        เลือกรูปแบบการเข้าใช้งานตู้ถ่ายรูปได้ตามต้องการ ไม่ว่าจะเป็นระบบชำระเงินผ่าน PromptPay
                        ระบบคูปองผูก POS หรือเปิดให้ใช้ฟรีในงานอีเวนต์
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
                   2. Access Mode Cards (3 Cards)
                   ═══════════════════════════════════════════════ */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mb-14 sm:mb-16 md:mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {accessModes.map((mode) => (
                        <motion.div
                            key={mode.title}
                            variants={cardVariants}
                            whileHover={{ y: -6 }}
                            className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 shadow-md shadow-deep-space-blue/[0.06] hover:shadow-xl hover:shadow-deep-space-blue/[0.1] transition-all duration-400 border border-deep-space-blue/[0.04] flex flex-col"
                        >
                            {/* Large faded number — top-left */}
                            <span
                                className={`absolute top-4 left-5 sm:top-5 sm:left-6 text-5xl sm:text-6xl lg:text-7xl font-black ${mode.accentColor} opacity-[0.07] select-none leading-none pointer-events-none`}
                            >
                                {mode.number}
                            </span>

                            {/* Top row — icon + label */}
                            <div className="flex items-start justify-between mb-5 sm:mb-6 relative z-10">
                                <div>
                                    <span className="text-[10px] sm:text-xs font-semibold text-deep-space-blue/30 uppercase tracking-[0.2em]">
                                        {mode.label}
                                    </span>
                                </div>
                                <div
                                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${mode.gradientFrom} ${mode.gradientTo} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
                                >
                                    <mode.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.8} />
                                </div>
                            </div>

                            {/* Title */}
                            <h3
                                className="relative z-10 text-lg sm:text-xl font-bold text-deep-space-blue mb-1.5 group-hover:text-tiger-orange transition-colors duration-300"
                                style={{ lineHeight: "1.5" }}
                            >
                                {mode.title}
                            </h3>

                            {/* Tagline */}
                            <p className="relative z-10 text-xs sm:text-sm font-medium text-deep-space-blue/40 mb-4 sm:mb-5">
                                {mode.tagline}
                            </p>

                            {/* Description */}
                            <p
                                className="relative z-10 text-xs sm:text-sm text-deep-space-blue/50 mb-5 sm:mb-6"
                                style={{ lineHeight: "1.8" }}
                            >
                                {mode.description}
                            </p>

                            {/* Feature list */}
                            <ul className="relative z-10 space-y-3 mt-auto">
                                {mode.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        <div
                                            className={`mt-0.5 w-7 h-7 rounded-lg bg-gradient-to-br ${mode.gradientFrom} ${mode.gradientTo} flex items-center justify-center flex-shrink-0 opacity-90`}
                                        >
                                            <feature.icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                                        </div>
                                        <span
                                            className="text-xs sm:text-sm text-deep-space-blue/60"
                                            style={{ lineHeight: "1.7" }}
                                        >
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Hover accent — bottom line */}
                            <div
                                className={`absolute bottom-0 left-0 right-0 h-[3px] rounded-b-3xl bg-gradient-to-r ${mode.gradientFrom} ${mode.gradientTo} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* ═══════════════════════════════════════════════
                   3. Bottom Highlights Strip
                   ═══════════════════════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-gradient-to-br from-deep-space-blue to-deep-space-blue/95 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 overflow-hidden"
                >
                    {/* BG decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-tiger-orange/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="text-center mb-8 sm:mb-10">
                            <span className="inline-block text-[10px] sm:text-xs font-semibold text-tiger-orange tracking-[0.2em] uppercase mb-3">
                                Why Choose Us
                            </span>
                            <h3
                                className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                                style={{ lineHeight: "1.4" }}
                            >
                                ทำไมต้องเลือก<span className="text-tiger-orange"> ระบบของเรา</span>
                            </h3>
                        </div>

                        {/* Highlights grid */}
                        <ul
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
                            role="list"
                        >
                            {[
                                "รองรับ PromptPay มาตรฐานไทย",
                                "Generate QR Code อัตโนมัติ",
                                "ผูกระบบ POS ได้ทันที",
                                "เปลี่ยนโหมดได้แบบเรียลไทม์",
                                "ระบบ Dashboard จัดการทุกอย่าง",
                                "รายงานรายได้อัตโนมัติ",
                                "รหัสคูปอง 6-12 หลัก ปลอดภัย",
                                "โหมดอีเวนต์ ใช้งานฟรีทันที",
                            ].map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3.5 hover:bg-white/10 transition-all duration-300"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-tiger-orange flex-shrink-0" />
                                    <span className="text-white/80 text-xs sm:text-sm font-medium">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* Subtle bottom divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-deep-space-blue/10 to-transparent" />
        </section>
    )
}
