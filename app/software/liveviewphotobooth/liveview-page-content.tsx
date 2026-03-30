"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
    MonitorPlay,
    Sparkles,
    Film,
    Share2,
    Printer,
    Wand2,
    Camera,
    QrCode,
    Play,
    ArrowRight,
    ChevronRight,
    CheckCircle2,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// ─────────────────────────────────────────────
// Lazy-load heavy components
// ─────────────────────────────────────────────
const VideoGallery = dynamic(
    () => import("@/components/video-gallery").then((mod) => ({ default: mod.VideoGallery })),
    { loading: () => <div className="min-h-125" />, ssr: true }
)

// ─────────────────────────────────────────────
// Data — Feature cards
// ─────────────────────────────────────────────
const features = [
    {
        icon: Camera,
        title: "Pre-capture Technology",
        description:
            "บันทึกช่วงเวลาธรรมชาติก่อนกดชัตเตอร์ ได้ภาพที่ไม่อาจวางแผนล่วงหน้า เป็นช่วงเวลาที่แท้จริงที่สุด",
        gradient: "from-sky-500 to-blue-400",
    },
    {
        icon: MonitorPlay,
        title: "Living Portrait",
        description:
            "แปลงภาพนิ่งธรรมดาให้กลายเป็น Living Portrait ภาพเคลื่อนไหวแบบ Loop ที่มีชีวิต เหมือนภาพในโลกเวทมนตร์",
        gradient: "from-blue-500 to-indigo-400",
    },
    {
        icon: Film,
        title: "GIF & Video Output",
        description:
            "ได้ผลลัพธ์ทั้ง GIF แบบ Loop สำหรับแชร์โซเชียล และ Video Clip (MP4) คุณภาพสูงพร้อมใช้งานทันที",
        gradient: "from-indigo-500 to-violet-400",
    },
    {
        icon: Wand2,
        title: "AI Effect อัตโนมัติ",
        description:
            "ปรับแสง สี และ Effect อัตโนมัติด้วย AI ไม่ต้องตั้งค่าด้วยตัวเอง ทุกภาพสวยงามสม่ำเสมอ",
        gradient: "from-violet-500 to-purple-400",
    },
    {
        icon: QrCode,
        title: "แชร์ผ่าน QR ทันที",
        description:
            "ลูกค้าสแกน QR Code รับไฟล์ภาพและวิดีโอลงมือถือทันที แชร์ต่อ LINE, Instagram, Facebook ได้เลย",
        gradient: "from-sky-400 to-cyan-400",
    },
    {
        icon: Printer,
        title: "พิมพ์ภาพ + ดิจิทัล",
        description:
            "พิมพ์รูปคุณภาพสูงภายใน 10 วินาที พร้อมได้ไฟล์ดิจิทัลพร้อมกัน ครบทั้ง Physical และ Digital Memory",
        gradient: "from-cyan-500 to-sky-400",
    },
]

// ─────────────────────────────────────────────
// Data — How it works steps
// ─────────────────────────────────────────────
const steps = [
    {
        step: "01",
        icon: Camera,
        title: "เข้าตู้ & เริ่มต้น",
        description: "ลูกค้าเข้าสู่ตู้ ระบบ Liveview เริ่มบันทึกช่วงเวลาก่อนกดชัตเตอร์อัตโนมัติ",
    },
    {
        step: "02",
        icon: MonitorPlay,
        title: "Pre-capture บันทึก",
        description: "AI บันทึกการเคลื่อนไหวก่อนกดครั้งสุดท้าย ได้ช่วงเวลาที่เป็นธรรมชาติที่สุด",
    },
    {
        step: "03",
        icon: Wand2,
        title: "ประมวลผล & Effect",
        description: "ระบบ IMAGEAUTOMAT ใส่ Effects และ Template อัตโนมัติ ได้ Living Portrait สมบูรณ์",
    },
    {
        step: "04",
        icon: Share2,
        title: "รับ & แชร์ทันที",
        description: "สแกน QR Code รับไฟล์ GIF/MP4 ลงมือถือ หรือพิมพ์รูปทันที ภายใน 10 วินาที",
    },
]

// ─────────────────────────────────────────────
// Data — Use cases
// ─────────────────────────────────────────────
const useCases = [
    { label: "งานแต่งงาน", desc: "สร้างความทรงจำที่ขยับได้ให้แขกในงาน" },
    { label: "คอนเสิร์ต & Festival", desc: "บันทึกพลังงานและความตื่นเต้นในทันที" },
    { label: "Corporate Event", desc: "Branding Activation ที่ Viral บน Social" },
    { label: "งานเปิดตัวสินค้า", desc: "Product Launch ที่แขกไม่มีวันลืม" },
    { label: "ร้านถ่ายรูปสตูดิโอ", desc: "บริการใหม่ที่สร้าง Revenue เพิ่มเติม" },
    { label: "งาน Exhibition", desc: "ดึงดูดผู้เข้าชม สร้าง Engagement สูร" },
]

// ─────────────────────────────────────────────
// Animation variants
// ─────────────────────────────────────────────
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────
function HeroSection() {
    return (
        <section
            className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
            aria-label="Liveview Photobooth — ภาพเคลื่อนไหวที่มีชีวิต"
        >
            <div className="absolute inset-0 bg-linear-to-br from-deep-space-blue via-deep-space-blue/95 to-deep-space-blue" />
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />
            <div className="absolute top-0 right-0 w-125 h-125 bg-sky-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-100 h-100 bg-blue-500/10 rounded-full blur-[100px]" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav
                    aria-label="breadcrumb"
                    className="flex items-center gap-2 text-white/40 text-sm mb-10"
                >
                    <Link href="/" className="hover:text-white transition-colors">หน้าแรก</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/software" className="hover:text-white transition-colors">ซอฟต์แวร์ Photobooth</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-white/70">Liveview Photobooth</span>
                </nav>

                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 text-sky-300 text-sm font-medium mb-8 backdrop-blur-sm border border-sky-500/30">
                        <MonitorPlay className="w-4 h-4" />
                        <span className="uppercase tracking-[0.2em]">Liveview Photobooth Software</span>
                    </div>

                    {/* H1 — Primary keyword */}
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6">
                        ซอฟต์แวร์{" "}
                        <span className="text-sky-400">Liveview</span>
                        <br className="hidden md:block" />
                        <span className="text-tiger-orange">Photobooth</span>
                    </h1>

                    <p className="text-lg lg:text-xl text-white/55 leading-relaxed max-w-2xl mx-auto mb-10">
                        เทคโนโลยี Pre-capture บันทึกช่วงเวลาธรรมชาติก่อนกดชัตเตอร์
                        <br className="hidden md:block" />
                        เปลี่ยนภาพนิ่งธรรมดาให้กลายเป็น{" "}
                        <strong className="text-white/80">ภาพความทรงจำที่ขยับได้</strong>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a
                            href="https://lin.ee/Q5DSE1r"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-tiger-orange text-white font-bold rounded-full hover:shadow-xl hover:shadow-tiger-orange/40 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
                        >
                            <Sparkles className="w-5 h-5" />
                            <span>ทดลองสาธิตฟรี</span>
                        </a>
                        <Link
                            href="/software"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 w-full sm:w-auto justify-center"
                        >
                            <span>ดูซอฟต์แวร์ทั้งหมด</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Quick stats */}
                    <div className="flex items-center justify-center gap-8 md:gap-14">
                        {[
                            { value: "4.9★", label: "คะแนนจากผู้ใช้" },
                            { value: "10s", label: "พิมพ์รูปเสร็จ" },
                            { value: "Free", label: "อัปเดตตลอดชีพ" },
                        ].map((stat, idx) => (
                            <div key={idx} className="relative text-center">
                                <div className="text-3xl md:text-4xl font-extrabold mb-1">
                                    <span className="bg-linear-to-b from-white to-white/70 bg-clip-text text-transparent">
                                        {stat.value}
                                    </span>
                                </div>
                                <div className="text-xs md:text-sm text-white/45 font-medium tracking-wide">
                                    {stat.label}
                                </div>
                                {idx < 2 && (
                                    <div className="absolute -right-4 md:-right-7 top-1/2 -translate-y-1/2 w-px h-12 bg-linear-to-b from-transparent via-white/15 to-transparent" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
                </svg>
            </div>
        </section>
    )
}

function WhatIsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    return (
        <section
            ref={ref}
            className="py-20 lg:py-28 bg-white relative overflow-hidden"
            aria-label="Liveview Photobooth คืออะไร"
        >
            <div className="absolute top-20 right-10 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Left - Text */}
                    <motion.div variants={itemVariants}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-600 text-sm font-medium mb-6 border border-sky-100">
                            <MonitorPlay className="w-4 h-4" />
                            <span className="uppercase tracking-[0.15em]">What is Liveview?</span>
                        </div>
                        {/* H2 — Secondary keyword */}
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.15] mb-6">
                            Liveview Photobooth คืออะไร?
                            <br />
                            <span className="text-sky-500">ภาพที่มีชีวิต</span> ไม่ใช่แค่ภาพนิ่ง
                        </h2>
                        <p className="text-lg text-deep-space-blue/60 leading-relaxed mb-6">
                            <strong className="text-deep-space-blue">Liveview Photobooth</strong> คือโหมดพิเศษในซอฟต์แวร์{" "}
                            <strong className="text-sky-600">IMAGEAUTOMAT</strong> ที่ใช้เทคโนโลยี{" "}
                            <strong className="text-deep-space-blue">Pre-capture</strong>{" "}
                            บันทึกช่วงเวลาก่อนที่ลูกค้าจะกดปุ่มชัตเตอร์ครั้งสุดท้าย
                        </p>
                        <p className="text-lg text-deep-space-blue/60 leading-relaxed mb-8">
                            ผลลัพธ์คือ <strong className="text-deep-space-blue">Living Portrait</strong> ภาพเคลื่อนไหวแบบ Loop
                            ที่บันทึกช่วงเวลาธรรมชาติ เหมือนภาพในหนัง Harry Potter
                            ที่ขยับได้จริง พร้อมส่งต่อเป็น GIF หรือ Video Clip ทันที
                        </p>
                        <div className="flex flex-col gap-3">
                            {[
                                "บันทึกช่วงเวลาก่อนกดชัตเตอร์ด้วย Pre-capture",
                                "ได้ GIF Loop สำหรับแชร์ Social Media",
                                "AI ปรับ Effect อัตโนมัติ ทุกภาพสวยงาม",
                                "พิมพ์รูปทันที + รับไฟล์ดิจิทัลผ่าน QR Code",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                                    <span className="text-deep-space-blue/70">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Highlight card */}
                    <motion.div variants={itemVariants}>
                        <div className="relative bg-linear-to-br from-deep-space-blue via-deep-space-blue/95 to-deep-space-blue/85 rounded-[2.5rem] p-10 overflow-hidden border border-white/10 shadow-2xl">
                            <div className="absolute top-0 right-0 w-56 h-56 bg-sky-500/20 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-tiger-orange/15 rounded-full blur-3xl" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-2 h-2 bg-sky-400 rounded-full" />
                                    <span className="text-sky-300 text-xs font-bold uppercase tracking-[0.25em]">IMAGEAUTOMAT — Liveview Mode</span>
                                </div>
                                
                                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 leading-tight">
                                    ซอฟต์แวร์ Photobooth เดียว
                                </h3>
                                <p className="text-tiger-orange font-bold text-2xl md:text-3xl mb-8 flex items-center gap-2">
                                    <span>4 โหมดในตัว</span>
                                    <Sparkles className="w-5 h-5" />
                                </p>
                                
                                <div className="space-y-3">
                                    {[
                                        { name: "Liveview Photobooth", color: "bg-sky-500", dotColor: "from-sky-400 to-blue-500", href: "/software/liveviewphotobooth", active: true },
                                        { name: "Reel Photobooth", color: "bg-tiger-orange", dotColor: "from-tiger-orange to-amber-500", href: "/software#reel-photobooth", active: false },
                                        { name: "Signature Photobooth", color: "bg-purple-500", dotColor: "from-purple-400 to-violet-500", href: "/software#signature-photobooth", active: false },
                                        { name: "3 Shot Photobooth", color: "bg-rose-500", dotColor: "from-rose-400 to-pink-500", href: "/software#3shot-photobooth", active: false },
                                    ].map((mode) => (
                                        <Link
                                            key={mode.name}
                                            href={mode.href}
                                            className={`group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 overflow-hidden ${
                                                mode.active
                                                    ? "bg-white/15 border border-white/30 shadow-lg shadow-sky-500/20"
                                                    : "bg-white/5 hover:bg-white/10 border border-white/10"
                                            }`}
                                        >
                                            {/* Animated background for active */}
                                            {mode.active && (
                                                <div className="absolute inset-0 bg-linear-to-r from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            )}
                                            
                                            {/* Dot indicator */}
                                            <div className={`w-4 h-4 rounded-full shrink-0 relative ${mode.color}`}>
                                                {mode.active && (
                                                    <div className={`absolute inset-0 rounded-full animate-pulse bg-linear-to-r ${mode.dotColor} opacity-40`} />
                                                )}
                                            </div>
                                            
                                            {/* Mode name */}
                                            <span className={`font-semibold text-base transition-colors ${mode.active ? "text-white" : "text-white/70 group-hover:text-white/90"}`}>
                                                {mode.name}
                                            </span>
                                            
                                            {/* Active indicator badge */}
                                            {mode.active && (
                                                <span className="ml-auto text-xs bg-sky-500/40 text-sky-200 px-3 py-1 rounded-full font-medium border border-sky-400/30">
                                                    หน้านี้
                                                </span>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                                
                                <Link
                                    href="/software"
                                    className="mt-8 flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-all duration-200 group"
                                >
                                    <span>ดูซอฟต์แวร์ทั้งหมด</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

function FeaturesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.15 })
    return (
        <section
            ref={ref}
            className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden"
            aria-label="ฟีเจอร์ Liveview Photobooth Software"
        >
            <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-600 text-sm font-medium mb-6 border border-sky-100">
                        <Sparkles className="w-4 h-4" />
                        <span className="uppercase tracking-[0.15em]">Features</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.1] mb-4">
                        ฟีเจอร์ <span className="text-sky-500 italic">Liveview Photobooth</span>
                        <br className="hidden md:block" /> ครบทุกความต้องการ
                    </h2>
                    <p className="text-lg text-deep-space-blue/55 leading-relaxed">
                        ซอฟต์แวร์ Photobooth รองรับทุกสิ่งที่ต้องการในงานอีเวนต์ระดับพรีเมียม
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.article
                            key={feature.title}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-sky-500/8 transition-all duration-400 border border-gray-100"
                        >
                            <span className="absolute text-6xl font-black text-sky-500 opacity-[0.04] select-none leading-none pointer-events-none right-5 top-4">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div
                                className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.gradient} flex items-center justify-center shadow-md mb-5 group-hover:scale-105 transition-transform duration-300`}
                            >
                                <feature.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                            </div>
                            <h3 className="text-lg font-bold text-deep-space-blue mb-2 group-hover:text-sky-600 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-deep-space-blue/55 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

function HowItWorksSection() {
    return (
        <section
            className="py-20 lg:py-28 bg-white relative overflow-hidden"
            aria-label="ขั้นตอนการใช้งาน Liveview Photobooth Software"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-sky-500/5 rounded-full blur-[120px]" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-space-blue/5 text-deep-space-blue text-sm font-medium mb-6">
                        <Play className="w-4 h-4 text-tiger-orange" />
                        <span className="uppercase tracking-[0.15em]">How It Works</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.1]">
                        ใช้งาน Liveview Photobooth
                        <br className="hidden md:block" /> <span className="italic text-tiger-orange">4 ขั้นตอน</span> เสร็จ
                    </h2>
                    <p className="mt-6 text-lg text-deep-space-blue/50 leading-relaxed max-w-2xl mx-auto">
                        ซอฟต์แวร์ตู้ถ่ายรูปออกแบบมาให้ใช้ง่าย ไม่ต้องมีพนักงานดูแล ลูกค้าทำได้เองทุกขั้นตอน
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
                    {steps.map((item, idx) => (
                        <div key={idx} className="relative text-center group" role="listitem">
                            {idx < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-linear-to-r from-sky-400/30 to-transparent" />
                            )}
                            <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg shadow-deep-space-blue/5 mb-6 group-hover:shadow-xl group-hover:shadow-sky-500/10 transition-all duration-500 border border-gray-100">
                                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-sky-500 text-white text-xs font-bold flex items-center justify-center shadow-md">
                                    {item.step}
                                </div>
                                <item.icon className="w-9 h-9 text-deep-space-blue/70 group-hover:text-sky-500 transition-colors duration-300" />
                            </div>
                            <h3 className="font-serif text-xl text-deep-space-blue mb-3">{item.title}</h3>
                            <p className="text-sm text-deep-space-blue/50 leading-relaxed max-w-55 mx-auto">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function ComparisonSection() {
    return (
        <section
            className="py-20 lg:py-28 bg-white relative overflow-hidden"
            aria-label="เปรียบเทียบ Liveview กับ Reel กับ Signature กับ 3Shot Photobooth"
        >
            <div className="absolute top-20 right-10 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-600 text-sm font-medium mb-6 border border-sky-100">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="uppercase tracking-[0.15em]">Comparison</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.1] mb-4">
                        Photobooth Software<span className="text-sky-500 italic"> เปรียบเทียบ</span>
                    </h2>
                    <p className="text-lg text-deep-space-blue/55 leading-relaxed">
                        ซอฟต์แวร์ IMAGEAUTOMAT รวม 4 โหมดในตัว เลือกโหมดที่เหมาะกับงานของคุณ
                    </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="border-b-2 border-sky-200">
                                <th className="text-left px-6 py-4 font-bold text-deep-space-blue bg-sky-50">
                                    Photobooth Mode
                                </th>
                                <th className="text-center px-6 py-4 font-bold text-white bg-sky-500">
                                    <span className="text-base">Liveview</span>
                                </th>
                                <th className="text-center px-6 py-4 font-bold text-deep-space-blue bg-gray-50">
                                    <span className="text-base">Reel</span>
                                </th>
                                <th className="text-center px-6 py-4 font-bold text-deep-space-blue bg-gray-50">
                                    <span className="text-base">Signature</span>
                                </th>
                                <th className="text-center px-6 py-4 font-bold text-deep-space-blue bg-gray-50">
                                    <span className="text-base">3 Shot</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { feature: "Pre-capture Technology", liveview: "✓", reel: "✕", signature: "✕", threeshot: "✕" },
                                { feature: "Living Portrait (ภาพเคลื่อนไหว)", liveview: "✓", reel: "✓", signature: "✕", threeshot: "✕" },
                                { feature: "เหมาะสำหรับงานแต่งงาน", liveview: "✓", reel: "✓", signature: "✓", threeshot: "✓" },
                                { feature: "GIF Output", liveview: "✓", reel: "✓", signature: "✕", threeshot: "✓" },
                                { feature: "AI Auto Effect", liveview: "✓", reel: "✓", signature: "✓", threeshot: "✓" },
                                { feature: "Green Screen", liveview: "✓", reel: "✓", signature: "✓", threeshot: "✓" },
                                { feature: "ควบคุมเวลาถ่ายรูปเอง", liveview: "✕", reel: "✓", signature: "✓", threeshot: "✓" },
                                { feature: "Cinemagraph Output", liveview: "✓", reel: "✕", signature: "✕", threeshot: "✕" },
                            ].map((row, idx) => (
                                <tr key={idx} className="border-b border-gray-100 hover:bg-sky-50/30 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-deep-space-blue">{row.feature}</td>
                                    <td className="px-6 py-4 text-center text-sky-600 font-bold text-lg">{row.liveview}</td>
                                    <td className="px-6 py-4 text-center text-deep-space-blue/60 text-lg">{row.reel}</td>
                                    <td className="px-6 py-4 text-center text-deep-space-blue/60 text-lg">{row.signature}</td>
                                    <td className="px-6 py-4 text-center text-deep-space-blue/60 text-lg">{row.threeshot}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-10 p-6 bg-sky-50 rounded-2xl border border-sky-100">
                    <p className="text-deep-space-blue/70 text-center max-w-2xl mx-auto">
                        <strong className="text-deep-space-blue">Liveview Photobooth Software</strong> เป็นโหมดที่ทันสมัยที่สุด
                        สำหรับบันทึกช่วงเวลาธรรมชาติของลูกค้าในงานพรีเมียม ผสมผสาน Pre-capture technology กับ Living Portrait
                        ที่ดูสมบูรณ์ ไม่มีค่าสมาชิกรายเดือน อัปเดตฟรีตลอดชีพ
                    </p>
                </div>
            </div>
        </section>
    )
}

function UseCasesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    return (
        <section
            ref={ref}
            className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden"
            aria-label="งานที่เหมาะกับ Liveview Photobooth"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl text-deep-space-blue tracking-tight leading-[1.1] mb-4">
                        Liveview Photobooth เหมาะกับ{" "}
                        <span className="text-tiger-orange italic">งานประเภทใด?</span>
                    </h2>
                    <p className="text-lg text-deep-space-blue/55">
                        ซอฟต์แวร์ตู้ถ่ายรูปที่ออกแบบมาสำหรับทุกประเภทอีเวนต์พรีเมียม
                    </p>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {useCases.map((uc, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-sky-100 transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-sky-500 to-blue-400 flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-deep-space-blue mb-1">{uc.label}</h3>
                                <p className="text-sm text-deep-space-blue/55">{uc.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

function FaqSection() {
    const faqItems = [
        {
            q: "Liveview Photobooth คืออะไร?",
            a: "Liveview Photobooth คือโหมดพิเศษในซอฟต์แวร์ IMAGEAUTOMAT ที่บันทึกช่วงเวลาก่อนกดชัตเตอร์ด้วยเทคโนโลยี Pre-capture ทำให้ได้ผลลัพธ์เป็นภาพเคลื่อนไหว (Living Portrait) แตกต่างจากภาพนิ่งทั่วไปอย่างสิ้นเชิง",
        },
        {
            q: "ซอฟต์แวร์ Liveview Photobooth ใช้กับกล้องอะไรได้บ้าง?",
            a: "รองรับกล้อง DSLR ทุกยี่ห้อ (Canon, Nikon, Sony) และ Webcam USB ทั่วไป บนระบบปฏิบัติการ Windows 10/11",
        },
        {
            q: "ผลลัพธ์ได้เป็นไฟล์อะไร?",
            a: "ได้ทั้ง GIF แบบ Loop, Video Clip (MP4) และภาพนิ่ง JPEG คุณภาพสูง โดยลูกค้าสแกน QR Code รับไฟล์ลงมือถือทันที หรือพิมพ์รูปภายใน 10 วินาที",
        },
        {
            q: "Liveview Photobooth ต่างจาก Reel Photobooth อย่างไร?",
            a: "Liveview เน้นบันทึกช่วงเวลาธรรมชาติก่อนกดชัตเตอร์ (Pre-capture) ส่วน Reel Photobooth เน้นบันทึกคลิปสั้นแบบควบคุมได้ คล้าย TikTok/Reels ทั้งสองโหมดรวมอยู่ในซอฟต์แวร์ IMAGEAUTOMAT เดียวกัน",
        },
        {
            q: "ซอฟต์แวร์ Photobooth ราคาเท่าไหร่?",
            a: "ซอฟต์แวร์ IMAGEAUTOMAT รวมอยู่ในทุกแพ็กเกจตู้ IMAGEAUTOMAT ไม่มีค่าสมาชิกรายเดือน อัปเดตฟีเจอร์ฟรีตลอดชีพ สอบถาม License แยกได้ที่ LINE @imageautomat",
        },
        {
            q: "สามารถทดลองใช้ก่อนซื้อได้ไหม?",
            a: "ได้ครับ ทีมงาน IMAGEAUTOMAT ยินดีสาธิตซอฟต์แวร์รวมถึงโหมด Liveview Photobooth ก่อนตัดสินใจ ติดต่อผ่าน LINE @imageautomat หรือโทร 063-594-4429",
        },
    ]

    return (
        <section
            className="py-20 lg:py-28 bg-white relative overflow-hidden"
            aria-label="คำถามที่พบบ่อยเกี่ยวกับ Liveview Photobooth Software"
        >
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl text-deep-space-blue tracking-tight leading-[1.1] mb-4">
                        คำถามที่พบบ่อย{" "}
                        <span className="text-sky-500 italic">Liveview Photobooth</span>
                    </h2>
                    <p className="text-deep-space-blue/55">ทุกข้อสงสัยเกี่ยวกับซอฟต์แวร์ตู้ถ่ายรูปของเรา</p>
                </div>
                <div className="space-y-4">
                    {faqItems.map((item, i) => (
                        <div
                            key={i}
                            className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-sky-100 hover:bg-sky-50/30 transition-all duration-300"
                        >
                            <h3 className="font-bold text-deep-space-blue mb-3 flex items-start gap-3">
                                <span className="shrink-0 w-6 h-6 rounded-full bg-sky-100 text-sky-600 text-xs font-bold flex items-center justify-center mt-0.5">
                                    {i + 1}
                                </span>
                                {item.q}
                            </h3>
                            <p className="text-deep-space-blue/60 leading-relaxed pl-9">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function CtaSection() {
    return (
        <section
            className="py-24 lg:py-32 bg-linear-to-b from-gray-50 to-white relative overflow-hidden"
            aria-label="ติดต่อสอบถาม Liveview Photobooth Software"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-tiger-orange/5 rounded-full blur-[120px]" />
            <div className="mx-auto max-w-4xl px-6 lg:px-8 relative text-center">
                <div className="bg-deep-space-blue rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/15 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-tiger-orange/10 rounded-full blur-3xl" />
                    <div className="relative">
                        <p className="text-white/40 text-sm uppercase tracking-[0.25em] mb-4">
                            สนใจ Liveview Photobooth?
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                            ทดลองสาธิต
                            <span className="text-sky-400"> Liveview Photobooth</span>
                            <br className="hidden md:block" /> ฟรี ไม่มีเงื่อนไข
                        </h2>
                        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                            ทีมงาน IMAGEAUTOMAT พร้อมสาธิตซอฟต์แวร์ตู้ถ่ายรูป IMAGEAUTOMAT รวมถึงโหมด Liveview Photobooth
                            ให้คุณเห็นผลลัพธ์จริงก่อนตัดสินใจ
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://lin.ee/Q5DSE1r"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#06C755] text-white font-bold rounded-full hover:shadow-xl hover:shadow-[#06C755]/30 hover:scale-105 transition-all duration-300"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                </svg>
                                <span>ขอราคาพิเศษ LINE</span>
                            </a>
                            <Link
                                href="/software"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white hover:text-deep-space-blue transition-all duration-300 border border-white/20"
                            >
                                <ArrowRight className="w-4 h-4" />
                                <span>ดูซอฟต์แวร์ทั้งหมด</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ─────────────────────────────────────────────
// Main export
// ─────────────────────────────────────────────
export function LiveviewPageContent() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <HeroSection />
            <WhatIsSection />
            <FeaturesSection />
            <HowItWorksSection />
            <ComparisonSection />

            {/* Video gallery — reuse existing component */}
            <section className="pt-12 lg:pt-16 pb-0 bg-deep-space-blue/5" aria-label="ตัวอย่างผลงานวิดีโอ Liveview Photobooth">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-8">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.1] mb-4">
                        ตัวอย่างผลงาน —{" "}
                        <span className="text-tiger-orange">Liveview Photobooth</span>
                    </h2>
                    <p className="text-lg text-deep-space-blue/55 max-w-2xl mx-auto">
                        ผลลัพธ์ภาพเคลื่อนไหวที่ได้จากซอฟต์แวร์ตู้ถ่ายรูป IMAGEAUTOMAT — โหมด Liveview
                    </p>
                </div>
                <VideoGallery />
            </section>

            <UseCasesSection />
            <FaqSection />
            <CtaSection />
            <Footer />
        </main>
    )
}
