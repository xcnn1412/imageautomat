"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
    Phone,
    Mail,
    Check,
    ArrowRight,
    ArrowLeft,
    MapPin,
    Clock,
    Briefcase,
    ListChecks,
    UserCheck,
    Sparkles,
    FileCheck,
    Info,
    Layers,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getJobBySlug } from "@/data/jobs"

/* ──────────────── LINE Icon ──────────────── */
const LineIcon = ({ className = "" }: { className?: string }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
)

/* ──────────────── Animation Variants ──────────────── */
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
}

/* ──────────────── Component ──────────────── */
export function JobDetailContent({ slug }: { slug: string }) {
    const job = getJobBySlug(slug)
    if (!job) return null

    const heroRef = useRef(null)
    const detailRef = useRef(null)
    const ctaRef = useRef(null)

    const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
    const detailInView = useInView(detailRef, { once: true, amount: 0.1 })
    const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

    const lineMessage = encodeURIComponent(
        `สวัสดีครับ/ค่ะ สนใจสมัครงานตำแหน่ง "${job.title}" รบกวนขอข้อมูลเพิ่มเติมครับ/ค่ะ`
    )
    const emailSubject = encodeURIComponent(`สมัครงานตำแหน่ง ${job.title}`)
    const emailBody = encodeURIComponent(
        `เรียน ทีม HR IMAGE AUTOMAT\n\nผม/ดิฉัน สนใจสมัครงานตำแหน่ง "${job.title}"\n\nชื่อ-นามสกุล: \nเบอร์ติดต่อ: \nประสบการณ์โดยย่อ: \n\n*แนบเรซูเม่ / CV ในอีเมลนี้\n\nขอบคุณครับ/ค่ะ`
    )

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white">
                {/* ─── Hero Section ─── */}
                <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-deep-space-blue via-deep-space-blue to-deep-space-blue/95" />
                    <div className="absolute top-20 right-0 w-96 h-96 bg-tiger-orange/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />

                    <motion.div
                        ref={heroRef}
                        className="relative mx-auto max-w-5xl px-6 lg:px-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                    >
                        {/* Breadcrumb */}
                        <motion.nav
                            variants={itemVariants}
                            aria-label="Breadcrumb"
                            className="mb-8 flex items-center gap-2 text-sm text-white/50"
                        >
                            <Link
                                href="/careers"
                                className="inline-flex items-center gap-1.5 hover:text-tiger-orange transition-colors duration-300"
                            >
                                <ArrowLeft className="w-3.5 h-3.5" />
                                <span>ร่วมงานกับเรา</span>
                            </Link>
                            <span className="text-white/30">/</span>
                            <span className="text-white/80 font-medium">
                                {job.title}
                            </span>
                        </motion.nav>

                        <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-start">
                            {/* Icon */}
                            <motion.div
                                variants={itemVariants}
                                className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br ${job.color} flex items-center justify-center shadow-2xl shadow-tiger-orange/20`}
                            >
                                <job.icon
                                    className="w-10 h-10 md:w-12 md:h-12 text-white"
                                    strokeWidth={1.6}
                                />
                            </motion.div>

                            {/* Title block */}
                            <div>
                                <motion.span
                                    variants={itemVariants}
                                    className="inline-flex items-center gap-2 text-xs font-semibold text-tiger-orange uppercase tracking-[0.3em] mb-3"
                                >
                                    <Briefcase className="w-3.5 h-3.5" />
                                    {job.subtitle}
                                </motion.span>
                                <motion.h1
                                    variants={itemVariants}
                                    className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mb-4"
                                >
                                    {job.title}
                                </motion.h1>
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-wrap gap-2 mb-5"
                                >
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-tiger-orange/15 text-tiger-orange backdrop-blur-sm">
                                        <Clock className="w-3 h-3" />
                                        {job.type}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/80 backdrop-blur-sm">
                                        <MapPin className="w-3 h-3" />
                                        {job.location}
                                    </span>
                                </motion.div>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl"
                                >
                                    {job.summary}
                                </motion.p>

                                {/* Quick Apply */}
                                <motion.div
                                    variants={itemVariants}
                                    className="mt-8 flex flex-col sm:flex-row gap-3"
                                >
                                    <a
                                        href="https://lin.ee/Q5DSE1r"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b04b] text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all duration-300 shadow-lg shadow-[#06C755]/30 hover:shadow-xl hover:shadow-[#06C755]/40 hover:scale-105 active:scale-95 overflow-hidden"
                                    >
                                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                        <LineIcon className="relative z-10 w-4 h-4" />
                                        <span className="relative z-10">
                                            สมัครผ่าน LINE
                                        </span>
                                    </a>
                                    <a
                                        href="tel:+66624249936"
                                        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300 border border-white/10"
                                    >
                                        <Phone className="w-4 h-4" />
                                        <span>062-424-9936</span>
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* ─── Detail Section ─── */}
                <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-tiger-orange/5 rounded-full blur-3xl" />

                    <motion.div
                        ref={detailRef}
                        className="mx-auto max-w-5xl px-6 lg:px-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={detailInView ? "visible" : "hidden"}
                    >
                        {/* Tech Stack — แสดงเฉพาะตำแหน่งสาย dev */}
                        {job.techStack && job.techStack.length > 0 && (
                            <motion.div
                                variants={itemVariants}
                                className="mb-8 relative bg-gradient-to-br from-violet-500/[0.04] to-fuchsia-500/[0.04] rounded-3xl p-8 md:p-10 border border-violet-500/10 overflow-hidden"
                            >
                                <div className="absolute -top-10 -right-10 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl" />
                                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-3xl" />
                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-11 h-11 rounded-xl bg-violet-500/15 flex items-center justify-center">
                                            <Layers className="w-5 h-5 text-violet-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs tracking-[0.2em] uppercase text-violet-600/80 font-semibold mb-0.5">
                                                Tech Stack
                                            </p>
                                            <h2 className="font-serif text-xl md:text-2xl text-deep-space-blue">
                                                เทคโนโลยีที่จะได้ใช้
                                            </h2>
                                        </div>
                                    </div>
                                    <p className="text-sm text-deep-space-blue/55 leading-relaxed mt-4 mb-5 max-w-2xl">
                                        งานจริง ใช้สแต็กจริง — ตำแหน่งนี้คุณจะได้ลงมือกับเครื่องมือเหล่านี้ในโปรเจกต์ที่ deploy ใช้งานจริง
                                    </p>
                                    <div className="flex flex-wrap gap-2.5">
                                        {job.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bg-white text-deep-space-blue border border-violet-500/15 shadow-sm shadow-violet-500/5"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Responsibilities */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-deep-space-blue/[0.02] hover:bg-deep-space-blue/[0.04] rounded-3xl p-8 md:p-10 border border-deep-space-blue/5 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-11 h-11 rounded-xl bg-tiger-orange/10 flex items-center justify-center">
                                        <ListChecks className="w-5 h-5 text-tiger-orange" />
                                    </div>
                                    <h2 className="font-serif text-2xl text-deep-space-blue">
                                        หน้าที่ความรับผิดชอบ
                                    </h2>
                                </div>
                                <ul className="space-y-4">
                                    {job.responsibilities.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 text-sm md:text-base text-deep-space-blue/75 leading-relaxed"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-tiger-orange/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-tiger-orange" />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Qualifications */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-deep-space-blue/[0.02] hover:bg-deep-space-blue/[0.04] rounded-3xl p-8 md:p-10 border border-deep-space-blue/5 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-11 h-11 rounded-xl bg-sky-500/10 flex items-center justify-center">
                                        <UserCheck className="w-5 h-5 text-sky-600" />
                                    </div>
                                    <h2 className="font-serif text-2xl text-deep-space-blue">
                                        คุณสมบัติผู้สมัคร
                                    </h2>
                                </div>
                                <ul className="space-y-4">
                                    {job.qualifications.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 text-sm md:text-base text-deep-space-blue/75 leading-relaxed"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-sky-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-sky-600" />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Documents */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-8 bg-deep-space-blue/[0.02] hover:bg-deep-space-blue/[0.04] rounded-3xl p-8 md:p-10 border border-deep-space-blue/5 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center">
                                    <FileCheck className="w-5 h-5 text-violet-600" />
                                </div>
                                <h2 className="font-serif text-2xl text-deep-space-blue">
                                    เอกสารที่ต้องใช้สมัครงาน
                                </h2>
                            </div>
                            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                                {job.documents.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm md:text-base text-deep-space-blue/75 leading-relaxed"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-violet-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-violet-600" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            {job.documentsNote && (
                                <div className="mt-7 pt-5 border-t border-deep-space-blue/5 flex items-start gap-2.5 text-xs md:text-sm text-deep-space-blue/55 leading-relaxed">
                                    <Info className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                                    <span>{job.documentsNote}</span>
                                </div>
                            )}
                        </motion.div>

                        {/* Quick info bar */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-10 grid sm:grid-cols-3 gap-4"
                        >
                            <div className="bg-white rounded-2xl p-5 border border-deep-space-blue/5 shadow-sm flex items-center gap-4">
                                <div className="w-11 h-11 rounded-xl bg-tiger-orange/10 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 text-tiger-orange" />
                                </div>
                                <div>
                                    <p className="text-xs tracking-[0.18em] uppercase text-deep-space-blue/40 mb-1">
                                        ประเภทงาน
                                    </p>
                                    <p className="text-sm font-semibold text-deep-space-blue">
                                        {job.type}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-5 border border-deep-space-blue/5 shadow-sm flex items-center gap-4">
                                <div className="w-11 h-11 rounded-xl bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-sky-600" />
                                </div>
                                <div>
                                    <p className="text-xs tracking-[0.18em] uppercase text-deep-space-blue/40 mb-1">
                                        สถานที่
                                    </p>
                                    <p className="text-sm font-semibold text-deep-space-blue">
                                        {job.location}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-5 border border-deep-space-blue/5 shadow-sm flex items-center gap-4">
                                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                    <Briefcase className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="text-xs tracking-[0.18em] uppercase text-deep-space-blue/40 mb-1">
                                        ทีมงาน
                                    </p>
                                    <p className="text-sm font-semibold text-deep-space-blue">
                                        {job.subtitle}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* ─── Apply CTA ─── */}
                <section className="py-16 lg:py-24 bg-deep-space-blue/[0.02] relative overflow-hidden">
                    <motion.div
                        ref={ctaRef}
                        className="mx-auto max-w-4xl px-6 lg:px-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={ctaInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="relative bg-deep-space-blue rounded-3xl overflow-hidden p-10 md:p-14 text-center"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-tiger-orange/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />

                            <div className="relative">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-tiger-orange/20 mb-6">
                                    <Sparkles className="w-7 h-7 text-tiger-orange" />
                                </div>
                                <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-4">
                                    สนใจตำแหน่งนี้ใช่ไหม?
                                </h2>
                                <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                                    ส่งเรซูเม่ / CV ของคุณมาทาง LINE
                                    หรืออีเมลของบริษัท ทีม HR
                                    จะติดต่อกลับภายใน 3–5 วันทำการ
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                                    <a
                                        href={`https://line.me/R/oaMessage/@imageautomat/?${lineMessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center gap-3 bg-[#06C755] hover:bg-[#05b04b] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#06C755]/30 hover:shadow-xl hover:shadow-[#06C755]/40 hover:scale-105 active:scale-95 overflow-hidden"
                                    >
                                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                        <LineIcon className="relative z-10 w-5 h-5" />
                                        <span className="relative z-10">
                                            สมัครงานผ่าน LINE
                                        </span>
                                        <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <a
                                        href={`mailto:imageautomat@gmail.com?subject=${emailSubject}&body=${emailBody}`}
                                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-semibold px-6 py-4 rounded-full transition-all duration-300 border border-white/10"
                                    >
                                        <Mail className="w-4 h-4" />
                                        <span>ส่งเรซูเม่ทางอีเมล</span>
                                    </a>
                                </div>
                                <div className="flex items-center justify-center gap-3 text-sm text-white/40">
                                    <Phone className="w-4 h-4" />
                                    <span>หรือโทร 062-424-9936</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Back to careers */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-10 text-center"
                        >
                            <Link
                                href="/careers"
                                className="inline-flex items-center gap-2 text-deep-space-blue/60 hover:text-tiger-orange font-semibold text-sm transition-colors duration-300"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span>ดูตำแหน่งงานอื่นทั้งหมด</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    )
}
