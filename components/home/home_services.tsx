"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { customerLogos } from "@/data/customer-logos"

/* ── Infinite Marquee ── */
function LogoMarquee({ direction = "left", speed = 45 }: { direction?: "left" | "right"; speed?: number }) {
    const logos = [...customerLogos, ...customerLogos, ...customerLogos]
    return (
        <div className="relative overflow-hidden w-full">
            {/* Fade edges — match orange bg */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-deep-space-blue to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-deep-space-blue to-transparent z-10 pointer-events-none" />

            <div
                className="flex items-center gap-12 sm:gap-16 md:gap-20 py-1"
                style={{
                    animation: `marquee-${direction} ${speed}s linear infinite`,
                    width: "fit-content",
                }}
            >
                {logos.map((logo, idx) => (
                    <div
                        key={`${logo.name}-${idx}`}
                        className="shrink-0"
                        title={logo.name}
                    >
                        <Image
                            src={logo.src}
                            alt={`${logo.name} — ลูกค้าของ IMAGEAUTOMAT`}
                            width={100}
                            height={100}
                            sizes="(max-width: 640px) 72px, (max-width: 768px) 80px, 88px"
                            className="w-[72px] h-[72px] sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}



/* 60-30-10 color theory:
   60% White (card bg, section bg)
   30% Deep Space Blue (headings, body text, borders)
   10% Tiger Orange (icons, stat pills, accents, hover) */

export function HomeServicesSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

    return (
        <section
            ref={sectionRef}
            className="relative pt-[3.84rem] sm:pt-[4.48rem] lg:pt-[5.76rem] pb-0 overflow-hidden"
            aria-label="ทำไมต้องเลือก IMAGEAUTOMAT"
            itemScope
            itemType="https://schema.org/Organization"
        >

            {/* Luxurious layered background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/60 to-white" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(2,48,71,0.03),transparent)]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* ── Trusted-By Logo Slideshow ── */}
                <motion.div
                    className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen -mt-12 sm:-mt-14 bg-deep-space-blue py-6 sm:py-8"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.15 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6 px-5">
                        <div className="h-px w-8 sm:w-12 bg-white/70" />
                        <p className="text-[24px] sm:text-[27px] font-bold text-white uppercase tracking-[0.4em]">
                            Trusted by
                        </p>
                        <div className="h-px w-8 sm:w-12 bg-white/70" />
                    </div>
                    <LogoMarquee />
                </motion.div>

            </div>
        </section>
    )
}
