"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { paymentPartners } from "@/data/payment-partners"
import type { PaymentPartner } from "@/data/payment-partners"

/* ────────────────────────────────────────────────────────────
   Component — Infinite Marquee Row
   ──────────────────────────────────────────────────────────── */
function MarqueeRow({
    items,
    direction = "left",
    speed = 30,
}: {
    items: PaymentPartner[]
    direction?: "left" | "right"
    speed?: number
}) {
    const duplicated = [...items, ...items, ...items, ...items]

    return (
        <div className="relative overflow-hidden w-full">
            {/* Fade edges — subtle */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div
                className="marquee-track flex items-center gap-3 py-2"
                style={{
                    animation: `marquee-${direction} ${speed}s linear infinite`,
                    width: "fit-content",
                }}
            >
                {duplicated.map((partner, idx) => (
                    <div
                        key={`${partner.name}-${idx}`}
                        className="logo-card flex-shrink-0 w-[108px] h-[108px] sm:w-[126px] sm:h-[126px] md:w-[138px] md:h-[138px] flex items-center justify-center bg-white rounded-2xl border-2 border-transparent shadow-sm cursor-pointer"
                    >
                        <img
                            src={partner.src}
                            alt={`${partner.name} — ช่องทางชำระเงินที่รองรับ`}
                            className="w-[60px] h-[60px] sm:w-[66px] sm:h-[66px] md:w-[72px] md:h-[72px] object-contain"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ────────────────────────────────────────────────────────────
   Main Component
   ──────────────────────────────────────────────────────────── */
export function PaymentGatewaySlideshow() {
    const firstHalf = paymentPartners.slice(0, Math.ceil(paymentPartners.length / 2))
    const secondHalf = paymentPartners.slice(Math.ceil(paymentPartners.length / 2))

    return (
        <section
            id="payment"
            className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
            aria-label="ช่องทางชำระเงินที่รองรับ — Payment Gateway Partners"
        >
            {/* Subtle top divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-deep-space-blue/10 to-transparent" />

            {/* Background decorations */}
            <div className="absolute top-10 left-1/4 w-64 h-64 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-tiger-orange/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12 md:mb-14"
                >
                    <div className="inline-flex items-center gap-2 mb-4">
                        <Sparkles className="w-4 h-4 text-tiger-orange" strokeWidth={2} />
                        <span className="text-xs sm:text-sm font-semibold text-tiger-orange tracking-widest uppercase">
                            Payment Partners
                        </span>
                        <Sparkles className="w-4 h-4 text-tiger-orange" strokeWidth={2} />
                    </div>

                    <h2
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-deep-space-blue mb-1 sm:mb-2"
                        style={{ lineHeight: "1.35" }}
                    >
                        3 ระบบการเข้าถึง
                    </h2>
                    <h3
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-tiger-orange mb-4 sm:mb-5"
                        style={{ lineHeight: "1.35" }}
                    >
                        ที่ตอบโจทย์ทุกรูปแบบธุรกิจ
                    </h3>

                    <p
                        className="text-xs sm:text-sm md:text-base text-deep-space-blue/50 max-w-xl mx-auto"
                        style={{ lineHeight: "1.8" }}
                    >
                        เลือกรูปแบบการเข้าใช้งานตู้ถ่ายรูปได้ตามต้องการ ไม่ว่าจะเป็นระบบชำระเงินผ่าน
                        <br className="hidden sm:block" />
                        PromptPay ระบบคูปองผูก POS หรือเปิดให้ใช้ฟรีในงานอีเวนต์
                    </p>

                    {/* Decorative line */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-[2px] bg-tiger-orange mx-auto mt-5 sm:mt-6 rounded-full"
                    />
                </motion.div>
            </div>

            {/* Marquee Rows — separate left/right infinite loop */}
            <div className="space-y-4 sm:space-y-5">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <MarqueeRow items={firstHalf} direction="left" speed={25} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <MarqueeRow items={secondHalf} direction="right" speed={30} />
                </motion.div>
            </div>

            {/* Subtle bottom divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-deep-space-blue/10 to-transparent" />

        </section>
    )
}
