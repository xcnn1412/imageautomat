"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { customerLogos } from "@/data/customer-logos"
import type { CustomerLogo } from "@/data/customer-logos"

/* ────────────────────────────────────────────────────────────
   Infinite Marquee Row
   ──────────────────────────────────────────────────────────── */
function MarqueeRow({
    items,
    direction = "left",
    speed = 30,
}: {
    items: CustomerLogo[]
    direction?: "left" | "right"
    speed?: number
}) {
    const duplicated = [...items, ...items, ...items, ...items]

    return (
        <div className="relative overflow-hidden w-full">
            {/* Fade edges — match orange bg */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-r from-tiger-orange to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-l from-tiger-orange to-transparent z-10 pointer-events-none" />

            <div
                className="marquee-track flex items-center gap-8 sm:gap-10 md:gap-12 py-2"
                style={{
                    animation: `marquee-${direction} ${speed}s linear infinite`,
                    width: "fit-content",
                }}
            >
                {duplicated.map((customer, idx) => (
                    <div
                        key={`${customer.name}-${idx}`}
                        className="shrink-0 w-[125px] h-[125px] sm:w-[140px] sm:h-[140px] md:w-[155px] md:h-[155px] flex items-center justify-center opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                    >
                        <Image
                            src={customer.src}
                            alt={`${customer.name} — ลูกค้าของ ImageAutomat`}
                            width={125}
                            height={125}
                            className="w-[100px] h-[100px] sm:w-[112px] sm:h-[112px] md:w-[125px] md:h-[125px] object-contain drop-shadow-md"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ────────────────────────────────────────────────────────────
   Main Component — CustomerSlideShow (Orange BG)
   ──────────────────────────────────────────────────────────── */
export function CustomerSlideShow() {
    return (
        <section
            className="w-full bg-tiger-orange py-10 sm:py-14"
            aria-label="ลูกค้าของ ImageAutomat"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-6 sm:mb-8"
            >
                <span className="text-xs sm:text-sm font-semibold text-white/70 uppercase tracking-[0.25em]">
                    Trusted By
                </span>
                <h2
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-2"
                    style={{ lineHeight: "1.4" }}
                >
                    แบรนด์ที่ไว้วางใจเรา
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <MarqueeRow items={customerLogos} direction="left" speed={30} />
            </motion.div>
        </section>
    )
}
