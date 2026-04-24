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
    ArrowRight,
    ChevronRight,
    Zap,
    Check,
    MessageCircle,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const VideoGallery = dynamic(
    () => import("@/components/video-gallery").then((mod) => ({ default: mod.VideoGallery })),
    { loading: () => <div className="min-h-150 bg-white" />, ssr: false }
)

const features = [
    {
        icon: Camera,
        title: "Pre-capture Technology",
        description: "บันทึกช่วงเวลาธรรมชาติก่อนกดชัตเตอร์ ได้ภาพที่ไม่อาจวางแผนล่วงหน้า เป็นช่วงเวลาที่แท้จริงที่สุด",
        gradient: "from-orange-500 to-amber-400",
    },
    {
        icon: MonitorPlay,
        title: "Living Portrait",
        description: "แปลงภาพนิ่งธรรมดาให้กลายเป็น Living Portrait ภาพเคลื่อนไหวแบบ Loop ที่มีชีวิต เหมือนภาพในโลกเวทมนตร์",
        gradient: "from-blue-500 to-indigo-400",
    },
    {
        icon: Film,
        title: "GIF & Video Output",
        description: "ได้ผลลัพธ์ทั้ง GIF แบบ Loop สำหรับแชร์โซเชียล และ Video Clip (MP4) คุณภาพสูงพร้อมใช้งานทันที",
        gradient: "from-indigo-500 to-violet-400",
    },
    {
        icon: Wand2,
        title: "AI Effect อัตโนมัติ",
        description: "ปรับแสง สี และ Effect อัตโนมัติด้วย AI ไม่ต้องตั้งค่าด้วยตัวเอง ทุกภาพสวยงามสม่ำเสมอ",
        gradient: "from-orange-500 to-red-400",
    },
    {
        icon: QrCode,
        title: "แชร์ผ่าน QR ทันที",
        description: "ลูกค้าสแกน QR Code รับไฟล์ภาพและวิดีโอลงมือถือทันที แชร์ต่อ LINE, Instagram, Facebook ได้เลย",
        gradient: "from-amber-400 to-orange-500",
    },
    {
        icon: Printer,
        title: "พิมพ์ภาพ + ดิจิทัล",
        description: "พิมพ์รูปคุณภาพสูงภายใน 10 วินาที พร้อมได้ไฟล์ดิจิทัลพร้อมกัน ครบทั้ง Physical และ Digital Memory",
        gradient: "from-cyan-500 to-sky-400",
    },
    {
        icon: Zap,
        title: "API Integration มาตรฐาน",
        description: "เชื่อมต่อกับ API ระบบคุณภาพมาตรฐาน ส่งภาพไปปรับปรุงหรือแก้ไขโดยอัตโนมัติ รองรับ Webhook และ REST API สำหรับการประมวลผลภาพขั้นสูง",
        gradient: "from-purple-500 to-pink-400",
    },
]

const steps = [
    {
        step: "01",
        icon: Camera,
        title: "เข้าตู้ & เริ่มต้น",
        description: "ลูกค้าเข้าสู่ตู้ ระบบ Liveview เริ่มบันทึกช่วงเวลาก่อนกดชัตเตอร์อัตโนมัติ",
        gradient: "from-orange-500 to-amber-400",
    },
    {
        step: "02",
        icon: MonitorPlay,
        title: "Pre-capture บันทึก",
        description: "AI บันทึกการเคลื่อนไหวก่อนกดครั้งสุดท้าย ได้ช่วงเวลาที่เป็นธรรมชาติที่สุด",
        gradient: "from-blue-500 to-indigo-400",
    },
    {
        step: "03",
        icon: Wand2,
        title: "ประมวลผล & Effect",
        description: "ระบบ IMAGEAUTOMAT ใส่ Effects และ Template อัตโนมัติ ได้ Living Portrait สมบูรณ์",
        gradient: "from-purple-500 to-violet-400",
    },
    {
        step: "04",
        icon: Share2,
        title: "รับ & แชร์ทันที",
        description: "สแกน QR Code รับไฟล์ GIF/MP4 ลงมือถือ หรือพิมพ์รูปทันที ภายใน 10 วินาที",
        gradient: "from-cyan-500 to-sky-400",
    },
]

const useCases = [
    { label: "งานแต่งงาน", icon: "💍", desc: "สร้างความทรงจำที่ขยับได้ให้แขกในงาน" },
    { label: "คอนเสิร์ต & Festival", icon: "🎵", desc: "บันทึกพลังงานและความตื่นเต้นในทันที" },
    { label: "Corporate Event", icon: "🏢", desc: "Branding Activation ที่ Viral บน Social" },
    { label: "งานเปิดตัวสินค้า", icon: "🚀", desc: "Product Launch ที่แขกไม่มีวันลืม" },
    { label: "ร้านถ่ายรูปสตูดิโอ", icon: "📸", desc: "บริการใหม่ที่สร้าง Revenue เพิ่มเติม" },
    { label: "งาน Exhibition", icon: "🎨", desc: "ดึงดูดผู้เข้าชม สร้าง Engagement สูง" },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
}

// ─── Hero ───────────────────────────────────
function HeroSection() {
    const statItems = [
        { value: "4.9★", label: "คะแนนจากผู้ใช้" },
        { value: "10s", label: "พิมพ์รูปเสร็จ" },
        { value: "Free", label: "อัปเดตตลอดชีพ" },
    ]

    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" aria-label="Liveview Photobooth — ภาพเคลื่อนไหวที่มีชีวิต">
            <div className="absolute inset-0 bg-linear-to-br from-deep-space-blue via-deep-space-blue/95 to-deep-space-blue" />
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
            </div>
            <div className="absolute top-0 right-0 w-125 h-125 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-100 h-100 bg-sky-400/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative mx-auto max-w-6xl px-6">
                <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40 mb-12">
                    <Link href="/" className="hover:text-white/70 transition-colors">หน้าแรก</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/software" className="hover:text-white/70 transition-colors">ซอฟต์แวร์ Photobooth</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-white/60">Liveview Photobooth</span>
                </nav>

                <motion.div
                    initial={{ opacity: 1, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-tiger-orange text-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
                        <Sparkles className="w-4 h-4" />
                        <span className="uppercase tracking-[0.2em]">Liveview Photobooth</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
                        ภาพที่มีชีวิตด้วย
                        <br />
                        <span className="text-tiger-orange">Pre-capture</span>
                        <br />
                        Liveview Photobooth
                    </h1>
                    <p className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed mb-10">
                        ซอฟต์แวร์ IMAGEAUTOMAT บันทึกช่วงเวลาก่อนกดชัตเตอร์
                        เปลี่ยนภาพนิ่งให้ขยับได้ พร้อมส่ง GIF, Video, QR Code และพิมพ์รูปทันที
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center mb-14">
                        <a
                            href="https://lin.ee/Q5DSE1r"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-tiger-orange text-white text-sm font-semibold rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-colors duration-200"
                        >
                            <Sparkles className="w-4 h-4" />
                            ทดลองสาธิตฟรี
                        </a>
                        <Link
                            href="/software"
                            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-sm font-semibold rounded-full text-white/70 hover:border-white/40 hover:text-white transition-colors duration-200 backdrop-blur-sm"
                        >
                            ดูซอฟต์แวร์ทั้งหมด
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-8 md:gap-14">
                        {statItems.map((stat, idx) => (
                            <div key={stat.label} className="relative text-center">
                                <div className="text-3xl md:text-4xl font-extrabold mb-1">
                                    <span className="bg-linear-to-b from-white to-white/70 bg-clip-text text-transparent">
                                        {stat.value}
                                    </span>
                                </div>
                                <div className="text-xs text-white/50 font-medium tracking-wide">{stat.label}</div>
                                {idx < 2 && (
                                    <div className="absolute -right-4 md:-right-7 top-1/2 -translate-y-1/2 w-px h-14 bg-linear-to-b from-transparent via-white/15 to-transparent" />
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
                </svg>
            </div>
        </section>
    )
}

// ─── What Is ─────────────────────────────────
function WhatIsSection() {
    const keyPoints = [
        "บันทึกช่วงเวลาก่อนกดชัตเตอร์ด้วย Pre-capture",
        "ได้ Living Portrait แบบ Loop ที่ขยับได้จริง",
        "AI ปรับแสง สี และ Effect อัตโนมัติ ทุกภาพสวยสม่ำเสมอ",
        "พิมพ์รูปทันทีพร้อมไฟล์ดิจิทัลผ่าน QR Code",
    ]

    return (
        <section className="py-20 bg-white" aria-label="Liveview Photobooth คืออะไร">
            <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-tiger-orange">What is Liveview?</div>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900">
                        Liveview Photobooth คือภาพที่ขยับได้
                        <br />
                        ก่อนกดชัตเตอร์เท่านั้น
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed">
                        Liveview Photobooth คือโหมดพิเศษของซอฟต์แวร์ IMAGEAUTOMAT ที่ใช้เทคโนโลยี Pre-capture
                        เพื่อบันทึกการเคลื่อนไหวก่อนผู้ใช้งานกดชัตเตอร์ครั้งสุดท้าย จึงได้ Living Portrait
                        ที่ขยับได้ พร้อม GIF หรือ Video ที่พร้อมแชร์ทันทีจากชุดเครื่องเดียว
                    </p>
                    <div className="space-y-3">
                        {keyPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <span className="shrink-0 w-5 h-5 rounded-full bg-linear-to-br from-orange-500 to-amber-400 flex items-center justify-center mt-0.5">
                                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                </span>
                                <span className="text-sm text-slate-600">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative rounded-3xl bg-linear-to-br from-deep-space-blue to-deep-space-blue/90 p-8 shadow-xl shadow-deep-space-blue/10 overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="relative">
                        <p className="text-xs uppercase tracking-[0.35em] text-tiger-orange mb-3">IMAGEAUTOMAT Liveview</p>
                        <h3 className="text-2xl font-serif text-white mb-4">Pre-capture + Living Portrait</h3>
                        <p className="text-sm text-white/60 leading-relaxed mb-6">
                            เก็บช่วงเวลาเล็ก ๆ ก่อนแท็บชัตเตอร์ ใช้ AI คัดเลือกช่วงเวลาธรรมชาติที่สุด
                            ผสานกับการพิมพ์ภาพทันที และแชร์ผลลัพธ์ผ่าน QR Code หรือ LINE ได้ภายในไม่กี่วินาที
                        </p>
                        <div className="space-y-3">
                            {[
                                "Pre-capture ที่เริ่มบันทึกอัตโนมัติ เมื่อผู้ใช้งานเข้าตู้",
                                "Living Portrait ที่ส่งต่อเป็น GIF หรือ MP4 ได้ทันที",
                                "การควบคุมที่ง่าย ลูกค้าทำเองได้ ไม่ต้องมีทีมงานคอยตั้งค่า",
                            ].map((text, idx) => (
                                <div key={idx} className="flex items-start gap-2.5">
                                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-tiger-orange mt-2" />
                                    <span className="text-sm text-white/70">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ─── Features ────────────────────────────────
function FeaturesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    return (
        <section ref={ref} className="py-20 bg-slate-50" aria-label="ฟีเจอร์ Liveview Photobooth Software">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-xs uppercase tracking-[0.35em] text-tiger-orange mb-3">Features</p>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900">
                        ฟีเจอร์ Liveview Photobooth ที่เน้นความจริงจังและเรียบง่าย
                    </h2>
                    <p className="text-sm text-slate-600 mt-3">
                        ซอฟต์แวร์เดียวที่จัดการ Pre-capture, Living Portrait, GIF, Video, AI Effect และการพิมพ์รูป
                        ได้ทันทีโดยไม่ต้องเปลี่ยนอินเทอร์เฟซ
                    </p>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature) => (
                        <motion.article
                            key={feature.title}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-sm`}>
                                <feature.icon className="w-5 h-5 text-white" strokeWidth={2} />
                            </div>
                            <h3 className="text-base font-semibold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

// ─── How It Works ─────────────────────────────
function HowItWorksSection() {
    return (
        <section className="py-20 bg-white" aria-label="ขั้นตอนการใช้งาน Liveview Photobooth Software">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-3">How It Works</p>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900">
                        ใช้งาน Liveview Photobooth ใน 4 ขั้นตอนเรียบง่าย
                    </h2>
                    <p className="text-sm text-slate-600 mt-3">
                        ระบบออกแบบให้ผู้ใช้งานทำทุกอย่างได้เองในตู้ ไม่ต้องมีทีมงานคอยตั้งค่า
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((item, idx) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: idx * 0.12, duration: 0.45, ease: "easeOut" }}
                            className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className={`w-14 h-14 mx-auto rounded-full bg-linear-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-base mb-4 shadow-sm`}>
                                {item.step}
                            </div>
                            <div className="flex items-center justify-center gap-2 text-slate-700 font-semibold mb-2">
                                <item.icon className="w-4 h-4" />
                                <span className="text-sm">{item.title}</span>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ─── Comparison ──────────────────────────────
function ComparisonSection() {
    const modes = [
        {
            name: "Liveview",
            badge: true,
            icon: "🎞️",
            tagline: "ช่วงเวลาที่ไม่ได้วางแผน",
            desc: "บันทึกอารมณ์ก่อนกดชัตเตอร์ ได้ภาพเคลื่อนไหว Living Portrait ที่เป็นธรรมชาติที่สุด",
            best: ["งานแต่งงานพรีเมียม", "คอนเสิร์ต & Music Festival", "งาน Gala / Exclusive Event"],
            gradient: "from-deep-space-blue to-[#034a6a]",
            borderClass: "border-[#fb8500]",
        },
        {
            name: "Reel",
            badge: false,
            icon: "🎬",
            tagline: "คลิปสั้นสไตล์ Social",
            desc: "บันทึกวิดีโอสั้นควบคุมได้เอง พร้อมเพลงและ Template สไตล์ TikTok/Reels ส่งตรงถึงมือถือ",
            best: ["Corporate Event & Branding", "งาน Product Launch", "Pop-up Store & Activation"],
            gradient: "from-indigo-600 to-violet-600",
            borderClass: "border-indigo-300",
        },
        {
            name: "Signature",
            badge: false,
            icon: "🖊️",
            tagline: "ความทรงจำแบบคลาสสิก",
            desc: "ถ่ายรูปแล้วเซ็นชื่อลงบนภาพ ได้ภาพนิ่งพิมพ์ได้ทันที เหมาะกับงานที่ต้องการความสุภาพ",
            best: ["งาน Exhibition & Museum", "งานเปิดตัวหนังสือ / Art Gallery", "งานระดับ VIP / Chairman"],
            gradient: "from-slate-600 to-slate-700",
            borderClass: "border-slate-300",
        },
        {
            name: "3 Shot",
            badge: false,
            icon: "📸",
            tagline: "ถ่ายครบ 3 ครั้งในชุดเดียว",
            desc: "ถ่าย 3 ช็อตต่อเนื่อง รวมเป็นเลย์เอาต์เดียว พิมพ์ได้ทันที เหมาะสำรับงานที่อยากได้รูปหมู่",
            best: ["งาน Team Building", "งานเลี้ยงประจำปี / Year-end Party", "งานแต่งงาน Family Table"],
            gradient: "from-amber-500 to-orange-500",
            borderClass: "border-amber-300",
        },
    ]

    return (
        <section className="py-20 bg-slate-50" aria-label="โหมด Photobooth ที่เหมาะสมกับแต่ละงาน">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-3">Which Mode Fits?</p>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900">เลือกโหมดให้เหมาะกับงาน</h2>
                    <p className="text-sm text-slate-600 mt-3">
                        ซอฟต์แวร์ IMAGEAUTOMAT รวม 4 โหมดไว้ในแพ็กเกจเดียว — เลือกใช้ได้ตามสไตล์ของงานนั้นได้เลย
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {modes.map((mode) => (
                        <div
                            key={mode.name}
                            className={`relative rounded-2xl border-2 ${mode.badge ? mode.borderClass : "border-slate-200"} bg-white overflow-hidden shadow-sm flex flex-col`}
                        >
                            {/* Header */}
                            <div className={`bg-linear-to-br ${mode.gradient} px-5 pt-5 pb-6`}>
                                {mode.badge && (
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-tiger-orange text-white text-[10px] font-bold rounded-full uppercase tracking-wider mb-2">
                                        ✦ แนะนำ
                                    </span>
                                )}
                                <div className="text-2xl mb-2">{mode.icon}</div>
                                <div className="text-lg font-bold text-white">{mode.name}</div>
                                <div className="text-xs text-white/70 mt-0.5">{mode.tagline}</div>
                            </div>
                            {/* Body */}
                            <div className="px-5 py-4 flex-1 flex flex-col gap-4">
                                <p className="text-xs text-slate-600 leading-relaxed">{mode.desc}</p>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2">เหมาะกับงาน</p>
                                    <ul className="space-y-1.5">
                                        {mode.best.map((item) => (
                                            <li key={item} className="flex items-start gap-2">
                                                <span className="shrink-0 w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                                                    <Check className="w-2.5 h-2.5 text-emerald-600" strokeWidth={3} />
                                                </span>
                                                <span className="text-xs text-slate-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50/50 p-5">
                    <p className="text-sm text-slate-700 text-center">
                        ทุกโหมดรวมอยู่ในซอฟต์แวร์ IMAGEAUTOMAT ชุดเดียว — ไม่ต้องซื้อแยก ไม่มีค่าสมาชิกรายเดือน อัปเดตฟรีตลอดชีพ
                    </p>
                </div>
            </div>
        </section>
    )
}

// ─── Use Cases ───────────────────────────────
function UseCasesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.25 })
    return (
        <section ref={ref} className="py-20 bg-white" aria-label="งานที่เหมาะกับ Liveview Photobooth">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900">
                        Liveview Photobooth เหมาะกับงานที่ต้องการความชัดเจน
                    </h2>
                    <p className="text-sm text-slate-600 mt-3">
                        เหมาะสำหรับงานแต่งงาน คอนเสิร์ต งานอีเวนต์พรีเมียม หรือพื้นที่ป๊อปอัปที่ต้องการความล้ำหน้าในทุกช็อต
                    </p>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {useCases.map((uc) => (
                        <motion.div
                            key={uc.label}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="rounded-2xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-6 shadow-sm hover:shadow-md hover:border-orange-100 transition-all duration-300 cursor-default"
                        >
                            <div className="text-3xl mb-3">{uc.icon}</div>
                            <div className="text-sm font-semibold text-slate-900 mb-1.5">{uc.label}</div>
                            <p className="text-xs text-slate-500 leading-relaxed">{uc.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

// ─── FAQ ─────────────────────────────────────
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
            a: "ได้ครับ ทีมงาน IMAGEAUTOMAT ยินดีสาธิตซอฟต์แวร์รวมถึงโหมด Liveview Photobooth ก่อนตัดสินใจ ติดต่อผ่าน LINE @imageautomat หรือโทร 063-654-6249",
        },
    ]

    return (
        <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden" aria-label="คำถามที่พบบ่อยเกี่ยวกับ Liveview Photobooth Software">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-xs uppercase tracking-[0.35em] text-tiger-orange mb-3">FAQ</p>
                    <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-[1.1] mb-4">
                        คำถามที่พบบ่อย Liveview Photobooth
                    </h2>
                    <p className="text-slate-500">ทุกข้อสงสัยเกี่ยวกับซอฟต์แวร์ตู้ถ่ายรูปของเรา</p>
                </div>
                <div className="space-y-4">
                    {faqItems.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-sm transition-all duration-300"
                        >
                            <h3 className="font-bold text-slate-900 mb-3 flex items-start gap-3">
                                <span className="shrink-0 w-6 h-6 rounded-full bg-linear-to-br from-tiger-orange to-amber-400 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                                    {i + 1}
                                </span>
                                {item.q}
                            </h3>
                            <p className="text-slate-600 leading-relaxed pl-9">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ─── CTA ─────────────────────────────────────
function CtaSection() {
    return (
        <section className="py-20 bg-white" aria-label="ติดต่อสอบถาม Liveview Photobooth Software">
            <div className="mx-auto max-w-4xl px-6">
                <div className="relative rounded-3xl bg-linear-to-br from-deep-space-blue to-deep-space-blue/90 px-8 py-14 text-center overflow-hidden shadow-2xl shadow-deep-space-blue/20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/15 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-400/10 rounded-full blur-[60px] pointer-events-none" />
                    <div className="relative">
                        <p className="text-xs uppercase tracking-[0.35em] text-tiger-orange mb-4">สนใจ Liveview Photobooth?</p>
                        <h2 className="font-serif text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-4">
                            ทดลองสาธิต Liveview Photobooth
                            <br />
                            <span className="text-tiger-orange">ฟรี ไม่มีเงื่อนไข</span>
                        </h2>
                        <p className="text-white/60 text-sm mb-10 max-w-lg mx-auto leading-relaxed">
                            ทีมงาน IMAGEAUTOMAT พร้อมสาธิตซอฟต์แวร์ตู้ถ่ายรูป รวมถึงโหมด Liveview Photobooth ให้เห็นผลลัพธ์จริง
                            ก่อนตัดสินใจเลือกแพ็กเกจ
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <a
                                href="https://lin.ee/Q5DSE1r"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-tiger-orange text-white text-sm font-semibold rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-colors duration-200"
                            >
                                <MessageCircle className="w-4 h-4" />
                                ขอราคาพิเศษ LINE
                            </a>
                            <Link
                                href="/software"
                                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-sm font-semibold rounded-full text-white/70 hover:border-white/40 hover:text-white transition-colors duration-200"
                            >
                                ดูซอฟต์แวร์ทั้งหมด
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ─── Main export ──────────────────────────────
export function LiveviewPageContent() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <HeroSection />
            <section className="pt-12 lg:pt-16 pb-0 bg-white" aria-label="ตัวอย่างผลงานวิดีโอ Liveview Photobooth">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-8">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.1] mb-4">
                        ตัวอย่างผลงาน — Liveview Photobooth
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        ผลลัพธ์ภาพเคลื่อนไหวจากซอฟต์แวร์ Liveview Photobooth โดย IMAGEAUTOMAT
                    </p>
                </div>
                <VideoGallery />
            </section>
            <WhatIsSection />
            <FeaturesSection />
            <HowItWorksSection />
            <ComparisonSection />
            <UseCasesSection />
            <FaqSection />
            <CtaSection />
            <Footer />
        </main>
    )
}