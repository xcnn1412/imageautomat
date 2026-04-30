"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
    Briefcase,
    Phone,
    MessageCircle,
    Mail,
    ArrowRight,
    Users,
    Heart,
    TrendingUp,
    Sparkles,
    MapPin,
    Clock,
    GraduationCap,
    HandCoins,
    PartyPopper,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { jobs } from "@/data/jobs"

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

/* ──────────────── Data ──────────────── */
const benefits = [
    {
        icon: HandCoins,
        title: "เงินเดือน + คอมมิชชัน",
        description: "ฐานเงินเดือนตามประสบการณ์ พร้อมโบนัสและคอมมิชชันตามผลงาน",
    },
    {
        icon: PartyPopper,
        title: "ประกันสังคม + วันหยุด",
        description: "ประกันสังคม ลาพักร้อน วันหยุดประจำปี และโบนัสประจำปี",
    },
    {
        icon: GraduationCap,
        title: "เรียนรู้ทักษะใหม่",
        description: "ฝึกอบรมการใช้งานตู้ Photobooth ระบบ AI และซอฟต์แวร์ที่ทันสมัย",
    },
    {
        icon: Users,
        title: "ทีมงานเป็นกันเอง",
        description: "บรรยากาศการทำงานสบาย ๆ ทีมเล็กแต่อบอุ่น ไม่มีการเมือง",
    },
    {
        icon: TrendingUp,
        title: "เติบโตไปด้วยกัน",
        description: "บริษัทกำลังเติบโต มีโอกาสก้าวหน้าในสายงานชัดเจน",
    },
    {
        icon: Heart,
        title: "งานสนุก ไม่จำเจ",
        description: "ได้สัมผัสงานอีเวนต์หลากหลาย ทั้งงานแต่ง คอนเสิร์ต และงานแบรนด์ดัง",
    },
]

const steps = [
    {
        number: "01",
        title: "ส่งใบสมัคร",
        description: "ส่ง Resume / CV และตำแหน่งที่สนใจมาที่ LINE หรืออีเมลของบริษัท",
    },
    {
        number: "02",
        title: "นัดสัมภาษณ์",
        description: "ทีม HR จะติดต่อกลับเพื่อนัดสัมภาษณ์ภายใน 3–5 วันทำการ",
    },
    {
        number: "03",
        title: "เริ่มงาน",
        description: "หากผ่านการสัมภาษณ์ จะแจ้งผลและกำหนดวันเริ่มงานทันที",
    },
]

/* ──────────────── Animation Variants ──────────────── */
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
}

/* ──────────────── Component ──────────────── */
export function CareersPageContent() {
    const heroRef = useRef(null)
    const benefitsRef = useRef(null)
    const jobsRef = useRef(null)
    const stepsRef = useRef(null)
    const ctaRef = useRef(null)

    const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
    const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })
    const jobsInView = useInView(jobsRef, { once: true, amount: 0.1 })
    const stepsInView = useInView(stepsRef, { once: true, amount: 0.3 })
    const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white">
                {/* ─── Hero Section ─── */}
                <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-deep-space-blue via-deep-space-blue to-deep-space-blue/95" />
                    <div className="absolute top-20 right-0 w-96 h-96 bg-tiger-orange/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />

                    <motion.div
                        ref={heroRef}
                        className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                    >
                        <motion.span
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-tiger-orange uppercase tracking-[0.3em] mb-6"
                        >
                            <Briefcase className="w-4 h-4" />
                            We&apos;re Hiring
                        </motion.span>

                        <motion.h1
                            variants={itemVariants}
                            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6"
                        >
                            ร่วมเป็นทีมเดียวกับ{" "}
                            <span className="text-tiger-orange italic">
                                IMAGE AUTOMAT
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-10"
                        >
                            เรากำลังเติบโต และมองหาคนรุ่นใหม่ที่อยากสร้างประสบการณ์อีเวนต์ที่น่าจดจำ
                            ผ่านตู้ถ่ายรูป Photobooth ที่ดีที่สุดในประเทศไทย
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <a
                                href="#open-positions"
                                className="group relative inline-flex items-center gap-3 bg-tiger-orange hover:bg-tiger-orange/90 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-tiger-orange/20 hover:shadow-xl hover:shadow-tiger-orange/40 hover:scale-105 active:scale-95 overflow-hidden"
                            >
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                <Sparkles className="relative z-10 w-5 h-5" />
                                <span className="relative z-10">
                                    ดูตำแหน่งที่เปิดรับ
                                </span>
                            </a>
                            <a
                                href="https://lin.ee/Q5DSE1r"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors duration-300"
                            >
                                <LineIcon className="w-4 h-4" />
                                <span>สมัครผ่าน LINE @imageautomat</span>
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
                        >
                            {[
                                {
                                    value: jobs.length.toString(),
                                    label: "ตำแหน่งที่เปิดรับ",
                                },
                                { value: "100+", label: "งานอีเวนต์ต่อปี" },
                                { value: "10+", label: "ปีในวงการ Photobooth" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="font-serif text-3xl md:text-4xl text-tiger-orange mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-white/50">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>

                {/* ─── Benefits Section ─── */}
                <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-tiger-orange/5 rounded-full blur-3xl" />

                    <motion.div
                        ref={benefitsRef}
                        className="mx-auto max-w-6xl px-6 lg:px-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={benefitsInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="text-center mb-14"
                        >
                            <span className="inline-flex items-center gap-2 text-xs font-semibold text-tiger-orange uppercase tracking-[0.3em] mb-4">
                                <Heart className="w-4 h-4" />
                                Why Join Us
                            </span>
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight mb-4">
                                ทำไมต้องร่วมงานกับ{" "}
                                <span className="text-tiger-orange italic">
                                    เรา
                                </span>
                            </h2>
                            <p className="text-deep-space-blue/50 max-w-xl mx-auto">
                                เราเชื่อว่าคนเก่งที่อยู่ในที่ที่ใช่ จะสร้างผลงานที่ยอดเยี่ยม
                                เราจึงดูแลทีมงานเหมือนคนในครอบครัว
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {benefits.map((benefit) => (
                                <motion.div
                                    key={benefit.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -4 }}
                                    className="group p-7 rounded-2xl bg-deep-space-blue/[0.02] hover:bg-deep-space-blue/[0.04] border border-deep-space-blue/5 hover:border-tiger-orange/20 transition-all duration-500"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-tiger-orange/10 group-hover:bg-tiger-orange/20 flex items-center justify-center mb-5 transition-colors duration-300">
                                        <benefit.icon className="w-6 h-6 text-tiger-orange" />
                                    </div>
                                    <h3 className="font-serif text-xl text-deep-space-blue mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-deep-space-blue/60 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ─── Open Positions ─── */}
                <section
                    id="open-positions"
                    className="py-16 lg:py-24 bg-deep-space-blue/[0.02] relative overflow-hidden scroll-mt-24"
                >
                    <div className="absolute top-40 right-10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />

                    <motion.div
                        ref={jobsRef}
                        className="mx-auto max-w-6xl px-6 lg:px-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={jobsInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="text-center mb-14"
                        >
                            <span className="inline-flex items-center gap-2 text-xs font-semibold text-tiger-orange uppercase tracking-[0.3em] mb-4">
                                <Briefcase className="w-4 h-4" />
                                Open Positions
                            </span>
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight mb-4">
                                ตำแหน่งที่{" "}
                                <span className="text-tiger-orange italic">
                                    เปิดรับ
                                </span>
                            </h2>
                            <p className="text-deep-space-blue/50 max-w-xl mx-auto">
                                เลือกตำแหน่งที่สนใจ เพื่อดูรายละเอียดและช่องทางสมัครงาน
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {jobs.map((job) => (
                                <motion.div
                                    key={job.slug}
                                    variants={itemVariants}
                                    whileHover={{ y: -6 }}
                                >
                                    <Link
                                        href={`/careers/${job.slug}`}
                                        className="group relative flex flex-col h-full bg-white rounded-3xl shadow-lg shadow-deep-space-blue/5 hover:shadow-2xl hover:shadow-deep-space-blue/10 border border-gray-100/80 hover:border-tiger-orange/20 overflow-hidden transition-all duration-500"
                                    >
                                        {/* Top — Icon & Title */}
                                        <div
                                            className={`p-7 ${job.bgColor} border-b border-deep-space-blue/5`}
                                        >
                                            <div
                                                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${job.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                <job.icon
                                                    className="w-7 h-7 text-white"
                                                    strokeWidth={1.8}
                                                />
                                            </div>
                                            <p className="text-xs tracking-[0.2em] uppercase text-deep-space-blue/40 mb-2">
                                                {job.subtitle}
                                            </p>
                                            <h3 className="font-serif text-xl text-deep-space-blue leading-tight">
                                                {job.title}
                                            </h3>
                                        </div>

                                        {/* Body — Summary & Meta */}
                                        <div className="flex flex-col flex-1 p-7">
                                            <p className="text-sm text-deep-space-blue/60 leading-relaxed mb-5 flex-1">
                                                {job.summary}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-5">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${job.badgeColor}`}
                                                >
                                                    <Clock className="w-3 h-3" />
                                                    {job.type}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-deep-space-blue/5 text-deep-space-blue/70">
                                                    <MapPin className="w-3 h-3" />
                                                    {job.location}
                                                </span>
                                            </div>
                                            <div className="inline-flex items-center gap-2 text-tiger-orange font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                                <span>
                                                    ดูรายละเอียดและสมัคร
                                                </span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ─── How to Apply / Steps ─── */}
                <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
                    <div className="absolute bottom-10 left-10 w-80 h-80 bg-tiger-orange/5 rounded-full blur-3xl" />

                    <motion.div
                        ref={stepsRef}
                        className="mx-auto max-w-5xl px-6 lg:px-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={stepsInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="text-center mb-14"
                        >
                            <span className="inline-flex items-center gap-2 text-xs font-semibold text-tiger-orange uppercase tracking-[0.3em] mb-4">
                                <Sparkles className="w-4 h-4" />
                                How to Apply
                            </span>
                            <h2 className="font-serif text-3xl md:text-4xl text-deep-space-blue tracking-tight mb-4">
                                ขั้นตอน
                                <span className="text-tiger-orange italic">
                                    สมัครงาน
                                </span>
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {steps.map((step, idx) => (
                                <motion.div
                                    key={step.number}
                                    variants={itemVariants}
                                    className="relative"
                                >
                                    {idx < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] right-0 h-px bg-gradient-to-r from-tiger-orange/30 to-transparent" />
                                    )}
                                    <div className="bg-deep-space-blue/[0.02] hover:bg-deep-space-blue/[0.04] rounded-2xl p-7 border border-deep-space-blue/5 transition-colors duration-300 h-full">
                                        <div className="font-serif text-5xl text-tiger-orange/20 mb-4 leading-none">
                                            {step.number}
                                        </div>
                                        <h3 className="font-serif text-xl text-deep-space-blue mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-deep-space-blue/60 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ─── Final CTA ─── */}
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
                                    <MessageCircle className="w-7 h-7 text-tiger-orange" />
                                </div>
                                <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-4">
                                    พร้อมร่วมทีมกับเราแล้วใช่ไหม?
                                </h2>
                                <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                                    ส่งเรซูเม่และตำแหน่งที่สนใจมาที่ LINE @imageautomat
                                    หรืออีเมล imageautomat@gmail.com
                                    ทีม HR จะติดต่อกลับโดยเร็วที่สุด
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <a
                                        href="https://lin.ee/Q5DSE1r"
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
                                        href="tel:+66636546249"
                                        className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold px-4 py-3 transition-colors duration-300"
                                    >
                                        <Phone className="w-4 h-4" />
                                        <span>063-654-6249</span>
                                    </a>
                                    <a
                                        href="mailto:imageautomat@gmail.com?subject=สมัครงาน IMAGE AUTOMAT"
                                        className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold px-4 py-3 transition-colors duration-300"
                                    >
                                        <Mail className="w-4 h-4" />
                                        <span>imageautomat@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    )
}
