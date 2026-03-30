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
    Zap,
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
        gradient: "from-orange-500 to-amber-400",
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
        gradient: "from-orange-500 to-red-400",
    },
    {
        icon: QrCode,
        title: "แชร์ผ่าน QR ทันที",
        description:
            "ลูกค้าสแกน QR Code รับไฟล์ภาพและวิดีโอลงมือถือทันที แชร์ต่อ LINE, Instagram, Facebook ได้เลย",
        gradient: "from-amber-400 to-orange-400",
    },
    {
        icon: Printer,
        title: "พิมพ์ภาพ + ดิจิทัล",
        description:
            "พิมพ์รูปคุณภาพสูงภายใน 10 วินาที พร้อมได้ไฟล์ดิจิทัลพร้อมกัน ครบทั้ง Physical และ Digital Memory",
        gradient: "from-cyan-500 to-sky-400",
    },
    {
        icon: Zap,
        title: "API Integration มาตรฐาน",
        description:
            "เชื่อมต่อกับ API ระบบคุณภาพมาตรฐาน ส่งภาพไปปรับปรุงหรือแก้ไขโดยอัตโนมัติ รองรับ Webhook และ REST API สำหรับการประมวลผลภาพขั้นสูง",
        gradient: "from-purple-500 to-pink-400",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" as const },
    },
}
function HeroSection() {
    const statItems = [
        { value: "4.9★", label: "คะแนนจากผู้ใช้" },
        { value: "10s", label: "พิมพ์รูปเสร็จ" },
        { value: "Free", label: "อัปเดตตลอดชีพ" },
    ]

    return (
        <section className="bg-white py-20" aria-label="Liveview Photobooth — ภาพเคลื่อนไหวที่มีชีวิต">
            <div className="mx-auto max-w-6xl px-6">
                <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-500 mb-8">
                    <Link href="/" className="hover:text-slate-900 transition-colors">
                        หน้าแรก
                    </Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/software" className="hover:text-slate-900 transition-colors">
                        ซอฟต์แวร์ Photobooth
                    </Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-slate-600">Liveview Photobooth</span>
                </nav>

                <div className="max-w-4xl mx-auto text-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.35em] text-orange-500">Liveview Photobooth</p>
                        <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mx-auto">
                            ภาพที่มีชีวิตด้วยเทคโนโลยี
                            <br />
                            <span className="text-slate-900">Pre-capture</span>
                            <br />
                            Liveview Photobooth
                        </h1>
                        <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
                            ซอฟต์แวร์ IMAGEAUTOMAT บันทึกช่วงเวลาก่อนกดชัตเตอร์
                            เปลี่ยนภาพนิ่งให้ขยับได้ พร้อมส่ง GIF, Video, QR Code และพิมพ์รูปทันที
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <a
                                href="https://lin.ee/Q5DSE1r"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white text-sm font-semibold rounded-full shadow-sm hover:bg-orange-600 transition-colors duration-200"
                            >
                                <Sparkles className="w-4 h-4" />
                                ทดลองสาธิตฟรี
                            </a>
                            <Link
                                href="/software"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-sm font-semibold rounded-full text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-colors duration-200"
                            >
                                ดูซอฟต์แวร์ทั้งหมด
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-8 text-sm text-slate-500 justify-center">
                            {statItems.map((stat) => (
                                <div key={stat.label} className="flex flex-col text-slate-600">
                                    <span className="text-2xl font-semibold text-orange-500">{stat.value}</span>
                                    <span>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ComparisonSection() {
    return (
        <section
            className="py-20 bg-white"
            aria-label="เปรียบเทียบ Liveview กับ Reel กับ Signature กับ 3Shot Photobooth"
        >
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-3">Comparison</p>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900">
                        ภาพรวมของโหมด Photobooth ทั้ง 4
                    </h2>
                    <p className="text-sm text-slate-600 mt-3">
                        IMAGEAUTOMAT มีทั้ง Liveview, Reel, Signature และ 3 Shot อยู่ในซอฟต์แวร์เดียว
                        ดูฟีเจอร์ที่ตอบโจทย์งานพรีเมียมของคุณ
                    </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200">
                                <th className="text-left px-5 py-3 font-semibold text-slate-700 bg-slate-100">
                                    Photobooth Mode
                                </th>
                                <th className="text-center px-5 py-3 font-semibold text-slate-900 bg-white">
                                    Liveview
                                </th>
                                <th className="text-center px-5 py-3 font-semibold text-slate-700 bg-slate-50">
                                    Reel
                                </th>
                                <th className="text-center px-5 py-3 font-semibold text-slate-700 bg-slate-50">
                                    Signature
                                </th>
                                <th className="text-center px-5 py-3 font-semibold text-slate-700 bg-slate-50">
                                    3 Shot
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
                                <tr key={idx} className="border-b border-slate-200">
                                    <td className="px-5 py-3 font-medium text-slate-700">{row.feature}</td>
                                    <td className="px-5 py-3 text-center text-slate-900 font-semibold">{row.liveview}</td>
                                    <td className="px-5 py-3 text-center text-slate-700">{row.reel}</td>
                                    <td className="px-5 py-3 text-center text-slate-700">{row.signature}</td>
                                    <td className="px-5 py-3 text-center text-slate-700">{row.threeshot}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <p className="text-sm text-slate-700 text-center">
                        Liveview Photobooth Software เป็นโหมดที่ทันสมัยที่สุดสำหรับบันทึกช่วงเวลาธรรมชาติในงานพรีเมียม
                        ผสาน Pre-capture กับ Living Portrait ที่ดูสมบูรณ์ พร้อมอัปเดตฟีเจอร์ฟรีตลอดชีพ
                    </p>
                </div>
            </div>
        </section>
    )
}

function WhatIsSection() {
    const keyPoints = [
        "บันทึกช่วงเวลาก่อนกดชัตเตอร์ด้วย Pre-capture",
        "ได้ Living Portrait แบบ Loop ที่ขยับได้จริง",
        "AI ปรับแสง สี และ Effect อัตโนมัติ ทุกภาพสวยสม่ำเสมอ",
        "พิมพ์รูปทันทีพร้อมไฟล์ดิจิทัลผ่าน QR Code",
    ]

    return (
        <section className="py-20 bg-slate-50" aria-label="Liveview Photobooth คืออะไร">
            <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-start">
                <div className="space-y-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-slate-500">What is Liveview?</div>
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
                    <div className="space-y-3 text-sm text-slate-600">
                        {keyPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-orange-400 mt-1" />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.35em] text-orange-500 mb-3">
                        IMAGEAUTOMAT Liveview
                    </p>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                        Pre-capture + Living Portrait
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        เก็บช่วงเวลาเล็ก ๆ ก่อนแท็บชัตเตอร์ ใช้ AI คัดเลือกช่วงเวลาธรรมชาติที่สุด
                        ผสานกับการพิมพ์ภาพทันที และแชร์ผลลัพธ์ผ่าน QR Code หรือ LINE ได้ภายในไม่กี่วินาที
                    </p>
                    <div className="mt-6 space-y-3 text-sm text-slate-600">
                        <p>Pre-capture ที่เริ่มบันทึกอัตโนมัติ เมื่อผู้ใช้งานเข้าตู้</p>
                        <p>Living Portrait ที่ส่งต่อเป็น GIF หรือ MP4 ได้ทันที</p>
                        <p>การควบคุมที่ง่าย ลูกค้าทำเองได้ ไม่ต้องมีทีมงานคอยตั้งค่า</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function FeaturesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    return (
        <section ref={ref} className="py-20 bg-white" aria-label="ฟีเจอร์ Liveview Photobooth Software">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-xs uppercase tracking-[0.35em] text-orange-500 mb-3">Features</p>
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
                            whileHover={{ y: -2 }}
                            className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white mb-4 shadow-sm">
                                <feature.icon className="w-5 h-5 text-slate-700" strokeWidth={1.8} />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

function HowItWorksSection() {
    return (
        <section className="py-20 bg-slate-50" aria-label="ขั้นตอนการใช้งาน Liveview Photobooth Software">
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
                    {steps.map((item) => (
                        <div key={item.step} className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-orange-600 font-semibold mb-4">
                                {item.step}
                            </div>
                            <div className="flex items-center gap-2 text-slate-700 font-semibold mb-2">
                                <item.icon className="w-5 h-5" />
                                <span>{item.title}</span>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

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
                            className="min-h-30 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                        >
                            <div className="text-sm font-semibold text-slate-900 mb-2">{uc.label}</div>
                            <p className="text-xs text-slate-600">{uc.desc}</p>
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
                    <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-[1.1] mb-4">
                        คำถามที่พบบ่อย Liveview Photobooth
                    </h2>
                    <p className="text-slate-500">ทุกข้อสงสัยเกี่ยวกับซอฟต์แวร์ตู้ถ่ายรูปของเรา</p>
                </div>
                <div className="space-y-4">
                    {faqItems.map((item, i) => (
                        <div
                            key={i}
                            className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:bg-white transition-all duration-300"
                        >
                            <h3 className="font-bold text-slate-900 mb-3 flex items-start gap-3">
                                <span className="shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-xs font-bold flex items-center justify-center mt-0.5">
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

function CtaSection() {
    return (
        <section className="py-20 bg-white" aria-label="ติดต่อสอบถาม Liveview Photobooth Software">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-orange-500 mb-3">สนใจ Liveview Photobooth?</p>
                <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
                    ทดลองสาธิต Liveview Photobooth ฟรี ไม่มีเงื่อนไข
                </h2>
                <p className="text-sm text-slate-600 mb-8">
                    ทีมงาน IMAGEAUTOMAT พร้อมสาธิตซอฟต์แวร์ตู้ถ่ายรูป รวมถึงโหมด Liveview Photobooth ให้เห็นผลลัพธ์จริง
                    ก่อนตัดสินใจเลือกแพ็กเกจ
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="https://lin.ee/Q5DSE1r"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white text-sm font-semibold rounded-full shadow-sm hover:bg-orange-600 transition-colors duration-200"
                    >
                        ขอราคาพิเศษ LINE
                    </a>
                    <Link
                        href="/software"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-sm font-semibold rounded-full text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-colors duration-200"
                    >
                        ดูซอฟต์แวร์ทั้งหมด
                        <ArrowRight className="w-4 h-4" />
                    </Link>
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
        <main className="min-h-screen bg-slate-50">
            <Navigation />
            <HeroSection />

            {/* Video gallery — reuse existing component */}
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
