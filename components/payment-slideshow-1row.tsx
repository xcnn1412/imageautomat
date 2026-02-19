"use client"

import { motion } from "framer-motion"
import { paymentPartners } from "@/data/payment-partners"
import type { PaymentPartner } from "@/data/payment-partners"

/* ────────────────────────────────────────────────────────────
   Infinite Marquee Row
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
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

            <div
                className="marquee-track flex items-center gap-4 sm:gap-5 py-2"
                style={{
                    animation: `marquee-${direction} ${speed}s linear infinite`,
                    width: "fit-content",
                }}
            >
                {duplicated.map((partner, idx) => (
                    <div
                        key={`${partner.name}-${idx}`}
                        className="flex-shrink-0 w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[110px] flex items-center justify-center bg-white rounded-2xl border border-deep-space-blue/[0.04] shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <img
                            src={partner.src}
                            alt={`${partner.name} — ช่องทางชำระเงิน`}
                            className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] md:w-[62px] md:h-[62px] object-contain"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ────────────────────────────────────────────────────────────
   Main Component — 1 Row Only
   ──────────────────────────────────────────────────────────── */
export function PaymentSlideShow1Row() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full mt-8 sm:mt-10 mb-10 sm:mb-12"
            aria-label="Payment Partners"
        >
            <MarqueeRow items={paymentPartners} direction="left" speed={35} />
        </motion.div>
    )
}
