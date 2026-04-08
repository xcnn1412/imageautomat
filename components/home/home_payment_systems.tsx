"use client"

import { motion } from "framer-motion"
import {
    ArrowRight,
    CreditCard,
    Ticket,
    CalendarCheck,
    Globe,
} from "lucide-react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { PaymentSlideShow1Row } from "@/components/payment-slideshow-1row"

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
    {
        icon: Globe,
        title: "ระบบจัดการหลังบ้าน",
        label: "dashboard",
        description: "ระบบจัดการหลังบ้านผ่าน Website Online 100%",
        gradientFrom: "from-tiger-orange",
        gradientTo: "to-amber-400",
    }
]

/* ────────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────────── */
export function HomePaymentSystems() {
    return (
        <section
            className="w-full bg-[#FAFAFA] py-16 sm:py-20 md:py-24 lg:py-28 px-4 md:px-8 relative overflow-hidden"
            aria-label="ระบบชำระเงิน คูปอง และอีเวนต์"
        >
            {/* Subtle top divider — visual bridge from prev section */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-deep-space-blue/10 to-transparent" />

            <div className="max-w-7xl mx-auto relative">
                {/* Integrated System Section (Slate-50 zone) */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-slate-50 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14 lg:p-16 mb-12 sm:mb-14 md:mb-16 border border-deep-space-blue/[0.04]"
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
                            <h2
                                className="text-xl sm:text-2xl md:text-3xl font-bold text-deep-space-blue"
                                style={{ lineHeight: "1.4" }}
                            >
                                เสริมประสิทธิภาพด้วย
                                <span className="text-tiger-orange"> ระบบชำระเงินหลากหลาย</span>
                            </h2>
                        </motion.div>
                    </div>

                    {/* 4-column compact feature cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 relative z-10">
                        {systemFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                whileHover={{ y: -6 }}
                                className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 shadow-md shadow-deep-space-blue/[0.06] hover:shadow-xl hover:shadow-deep-space-blue/[0.1] transition-all duration-400 border border-deep-space-blue/[0.04]"
                            >
                                {/* Icon */}
                                <div className="flex items-start justify-start mb-5 sm:mb-6 relative z-10">
                                    <div
                                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
                                    >
                                        <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.8} />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3
                                    className="relative z-10 text-lg sm:text-xl font-bold text-deep-space-blue mb-1.5 group-hover:text-tiger-orange transition-colors duration-300"
                                    style={{ lineHeight: "1.5" }}
                                >
                                    {feature.title}
                                </h3>

                                {/* Label */}
                                <span className="relative z-10 text-xs sm:text-sm font-medium text-deep-space-blue/30 uppercase tracking-wider block mb-4 sm:mb-5">
                                    {feature.label}
                                </span>

                                {/* Description */}
                                <p
                                    className="relative z-10 text-sm sm:text-base text-deep-space-blue/50"
                                    style={{ lineHeight: "1.7" }}
                                >
                                    {feature.description}
                                </p>

                                {/* Hover accent — bottom line */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 h-[3px] rounded-b-3xl bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Payment Partners Slideshow (1 Row) */}
                <PaymentSlideShow1Row />

                {/* Call to Action (CTA) */}
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
