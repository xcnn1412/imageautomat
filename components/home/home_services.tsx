"use client"

import { useRef } from "react"
import { Factory, ShieldCheck, HeadphonesIcon, TrendingUp, Wrench, Sparkles } from "lucide-react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { customerLogos } from "@/data/customer-logos"

/* ── Infinite Marquee ── */
function LogoMarquee({ direction = "left", speed = 45 }: { direction?: "left" | "right"; speed?: number }) {
    const logos = [...customerLogos, ...customerLogos, ...customerLogos]
    return (
        <div className="relative overflow-hidden w-full">
            {/* Fade edges — match orange bg */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-tiger-orange to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-tiger-orange to-transparent z-10 pointer-events-none" />

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
                        className="shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-500"
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

const trustPillars = [
    {
        title: "ผลิตในไทย 100%",
        description: "ผลิตเองทุกขั้นตอนในไทย ออกแบบ ประกอบ ส่งมอบ ไม่ผ่านคนกลาง ได้ราคาโรงงานโดยตรง ควบคุมคุณภาพได้เต็มที่",
        icon: Factory,
        stat: "7 รุ่น",
        statLabel: "ให้เลือก",
    },
    {
        title: "วัสดุเกรดพาณิชย์",
        description: "วัสดุเกรดอุตสาหกรรม ทนทานใช้งานหนัก เหมาะสำหรับห้างฯ โรงแรม งานอีเวนต์ รับประกันโครงสร้างและอุปกรณ์ 1 ปีเต็ม",
        icon: ShieldCheck,
        stat: "รับประกัน 1 ปี",
        statLabel: "โครงสร้าง + อุปกรณ์",
    },
    {
        title: "ซอฟต์แวร์อัปเดตฟรีตลอดชีพ",
        description: "ซอฟต์แวร์เฉพาะ เหมาะสำหรับ Photobooth โดยเฉพาะ Support ภาษาไทย แก้ไขง่าย อัปเดตฟรีตลอดชีพ รองรับ AR Filter, GIF, Boomerang, Green Screen",
        icon: Sparkles,
        stat: "ฟรีตลอดชีพ",
        statLabel: "ไม่มีค่ารายเดือน",
    },
    {
        title: "ซัพพอร์ต 24 ชม.",
        description: "ทีมช่างเทคนิคพร้อมช่วยเหลือ 24 ชม. สื่อสารภาษาไทย ซ่อมบำรุง แก้ปัญหาซอฟต์แวร์ ให้คำปรึกษาการตั้งค่าตู้สำหรับทุกงานอีเวนต์",
        icon: HeadphonesIcon,
        stat: "< 15 นาที",
        statLabel: "เวลาตอบสนอง",
    },
    {
        title: "รับผลิต OEM / ODM",
        description: "รับผลิตตามแบรนด์ ทั้ง OEM และ ODM ติดโลโก้ ปรับสี ปรับขนาด พัฒนาซอฟต์แวร์เฉพาะ ปรับปรุงให้เหมาะสมกับธุรกิจของคุณ",
        icon: Wrench,
        stat: "Custom",
        statLabel: "ออกแบบตามแบรนด์",
    },
    {
        title: "คืนทุนเร็ว",
        description: "คืนทุนภายใน 6–12 เดือน สร้างรายได้จากงานอีเวนต์ งานแต่ง งานเปิดตัวสินค้า เช่ารายวัน ตัวเลขจริงจากลูกค้า",
        icon: TrendingUp,
        stat: "6–12 เดือน",
        statLabel: "คืนทุนโดยเฉลี่ย",
    },
]

const serviceTypes = [
    "ซื้อตู้โฟโต้บูธ",
    "เช่าตู้โฟโต้บูธ",
    "OEM/ODM",
    "Camera 360°",
    "Classic Booth",
    "High Angle Booth",
    "ซอฟต์แวร์ Photo Booth",
]

/* 60-30-10 color theory:
   60% White (card bg, section bg)
   30% Deep Space Blue (headings, body text, borders)
   10% Tiger Orange (icons, stat pills, accents, hover) */

export function HomeServicesSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "ทำไมต้องเลือก IMAGEAUTOMAT — ผู้ผลิตตู้โฟโต้บูธอันดับ 1 ในไทย",
        description: "จุดเด่นของ IMAGEAUTOMAT ผู้ผลิตและจำหน่ายตู้โฟโต้บูธครบวงจรในประเทศไทย",
        numberOfItems: trustPillars.length,
        itemListElement: trustPillars.map((pillar, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: pillar.title,
            description: pillar.description,
        })),
    }

    return (
        <section
            ref={sectionRef}
            className="relative pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-14 lg:pb-16 overflow-hidden"
            aria-labelledby="why-imageautomat"
            itemScope
            itemType="https://schema.org/Organization"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Luxurious layered background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/60 to-white" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(2,48,71,0.03),transparent)]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* ── Section Header ── */}
                <motion.header
                    className="text-center max-w-2xl mx-auto mb-8 sm:mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <span className="inline-block text-[11px] sm:text-xs font-semibold text-tiger-orange uppercase tracking-[0.35em] mb-4">
                        Why IMAGEAUTOMAT?
                    </span>
                    <h2
                        id="why-imageautomat"
                        className="font-sans font-extrabold text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] text-deep-space-blue tracking-tight leading-tight mb-5"
                    >
                        ทำไมต้องเลือก{" "}
                        <span className="text-tiger-orange" itemProp="name">IMAGEAUTOMAT</span>
                    </h2>
                    <p className="text-[15px] sm:text-base text-deep-space-blue/50 leading-relaxed max-w-xl mx-auto" itemProp="description">
                        ผู้ผลิตและจำหน่ายตู้โฟโต้บูธครบวงจรในไทย ทั้งซื้อ เช่า และรับผลิต OEM
                        พร้อมซอฟต์แวร์อัปเดตฟรีตลอดชีพ และรับประกัน 1 ปี
                    </p>
                </motion.header>

                {/* ── Trusted-By Logo Slideshow ── */}
                <motion.div
                    className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mb-16 sm:mb-20 bg-tiger-orange py-12 sm:py-16"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.15 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10 px-5">
                        <div className="h-px w-8 sm:w-12 bg-white/10" />
                        <p className="text-sm sm:text-base font-semibold text-white/40 uppercase tracking-[0.4em]">
                            Trusted by
                        </p>
                        <div className="h-px w-8 sm:w-12 bg-white/10" />
                    </div>
                    <LogoMarquee />
                </motion.div>

                {/* ── Service Tags ── */}
                <motion.nav
                    className="mb-14 sm:mb-16 lg:mb-20"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    aria-label="บริการของ IMAGEAUTOMAT"
                >
                    <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
                        {serviceTypes.map((name, i) => (
                            <motion.span
                                key={name}
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.25 + i * 0.05 }}
                                className="text-xs sm:text-[13px] font-medium text-deep-space-blue/40 px-4 py-2 rounded-full bg-white border border-deep-space-blue/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-tiger-orange/30 hover:text-tiger-orange transition-all duration-300 cursor-default select-none"
                            >
                                {name}
                            </motion.span>
                        ))}
                    </div>
                </motion.nav>

                {/* ── Trust Pillars ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6" role="list">
                    {trustPillars.map((pillar, index) => (
                            <motion.article
                                key={pillar.title}
                                role="listitem"
                                initial={{ opacity: 0, y: 24 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: "easeOut" }}
                                className="group"
                            >
                                <div
                                    className="relative h-full rounded-2xl sm:rounded-3xl bg-white
                                        ring-1 ring-deep-space-blue/[0.06]
                                        shadow-[0_1px_4px_rgba(0,0,0,0.03)]
                                        hover:shadow-[0_8px_30px_rgba(251,133,0,0.08)]
                                        hover:-translate-y-1
                                        transition-all duration-500 overflow-hidden"
                                >
                                    {/* 10% — Orange accent bar */}
                                    <div className="h-1 w-full bg-gradient-to-r from-tiger-orange/80 to-tiger-orange/20" />

                                    <div className="p-6 sm:p-7 lg:p-8">
                                        {/* Icon + Title row */}
                                        <div className="flex items-center gap-4 mb-4">
                                            {/* 10% — Orange icon */}
                                            <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-tiger-orange/10 flex items-center justify-center group-hover:bg-tiger-orange/15 transition-colors duration-500">
                                                <pillar.icon className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-tiger-orange" aria-hidden="true" strokeWidth={1.8} />
                                            </div>
                                            {/* 30% — Blue heading */}
                                            <h3 className="font-sans font-bold text-base sm:text-[17px] lg:text-lg text-deep-space-blue leading-snug group-hover:text-tiger-orange transition-colors duration-300">
                                                {pillar.title}
                                            </h3>
                                        </div>

                                        {/* 30% — Blue body text */}
                                        <p className="text-[13px] sm:text-sm text-deep-space-blue/50 leading-[1.7] mb-5">
                                            {pillar.description}
                                        </p>

                                        {/* 10% — Orange stat pill */}
                                        <div className="inline-flex items-baseline gap-2 px-3.5 py-1.5 rounded-full border bg-tiger-orange/8 border-tiger-orange/15 text-xs sm:text-[13px]">
                                            <strong className="font-extrabold text-tiger-orange">{pillar.stat}</strong>
                                            <span className="text-deep-space-blue/40 font-normal">{pillar.statLabel}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                    ))}
                </div>

                {/* ── Bottom social proof ── */}
                <motion.p
                    className="text-center mt-14 sm:mt-16 text-sm text-deep-space-blue/35"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    เข้าร่วมกับ{" "}
                    <strong className="font-semibold text-deep-space-blue/60">ธุรกิจและผู้ประกอบการทั่วประเทศ</strong>
                    {" "}ที่เลือกใช้ตู้โฟโต้บูธจาก IMAGEAUTOMAT
                </motion.p>
            </div>
        </section>
    )
}
