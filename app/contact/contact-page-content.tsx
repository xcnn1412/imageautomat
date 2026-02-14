"use client"

import type React from "react"
import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    ArrowRight,
    Check,
    MessageCircle,
    Send,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

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
const contactCards = [
    {
        icon: Phone,
        label: "โทรศัพท์",
        value: "063-594-4429",
        href: "tel:+66635944429",
        description: "โทรหาเราได้ทุกวัน",
        color: "from-tiger-orange to-amber-500",
        bgColor: "bg-tiger-orange/5",
    },
    {
        icon: MessageCircle,
        label: "LINE Official",
        value: "@imageautomat",
        href: "https://line.me/ti/p/~@imageautomat",
        description: "แชทสอบถามราคาพิเศษ",
        color: "from-[#06C755] to-emerald-500",
        bgColor: "bg-[#06C755]/5",
        isLine: true,
    },
    {
        icon: Mail,
        label: "อีเมล",
        value: "imageautomat@gmail.com",
        href: "mailto:imageautomat@gmail.com",
        description: "ส่งรายละเอียดงานของคุณ",
        color: "from-sky-500 to-blue-500",
        bgColor: "bg-sky-500/5",
    },
    {
        icon: MapPin,
        label: "ที่ตั้ง",
        value: "กรุงเทพมหานคร",
        href: "#",
        description: "ให้บริการทั่วประเทศไทย",
        color: "from-purple-500 to-violet-500",
        bgColor: "bg-purple-500/5",
    },
]

const faqItems = [
    {
        q: "เช่าตู้ถ่ายรูป Photobooth ราคาเท่าไหร่?",
        a: "ราคาเริ่มต้นขึ้นอยู่กับรุ่นที่เลือกและระยะเวลาการเช่า สอบถามราคาพิเศษผ่าน LINE @imageautomat ได้เลย",
    },
    {
        q: "สามารถเช่าตู้ถ่ายรูปต่างจังหวัดได้ไหม?",
        a: "ได้ครับ เราให้บริการทั่วประเทศไทย มีทีมงานจัดส่งและติดตั้งให้ถึงสถานที่จัดงาน",
    },
    {
        q: "ต้องจองล่วงหน้ากี่วัน?",
        a: "แนะนำให้จองล่วงหน้าอย่างน้อย 7 วัน สำหรับช่วงเทศกาลหรือวันหยุดยาว ควรจองล่วงหน้า 1 เดือน",
    },
    {
        q: "ตู้ถ่ายรูปมีกี่แบบ?",
        a: "เรามี 3 รุ่นหลัก ได้แก่ Reel Photobooth, Signature Photobooth และ Liveview Photobooth ดูรายละเอียดได้ที่หน้าซอฟต์แวร์ของเรา",
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
export function ContactPageContent() {
    const heroRef = useRef(null)
    const cardsRef = useRef(null)
    const formRef = useRef(null)
    const faqRef = useRef(null)
    const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
    const cardsInView = useInView(cardsRef, { once: true, amount: 0.2 })
    const formInView = useInView(formRef, { once: true, amount: 0.2 })
    const faqInView = useInView(faqRef, { once: true, amount: 0.2 })

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        eventType: "",
        eventDate: "",
        message: "",
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Build LINE message
        const msg = `สวัสดีครับ ผมชื่อ ${formData.name}\nเบอร์โทร: ${formData.phone}\nประเภทงาน: ${formData.eventType}\nวันจัดงาน: ${formData.eventDate}\nข้อความ: ${formData.message}`
        const lineUrl = `https://line.me/ti/p/~@imageautomat?text=${encodeURIComponent(msg)}`
        window.open(lineUrl, "_blank")
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white">
                {/* ─── Hero Section ─── */}
                <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
                    {/* Background */}
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
                            <Send className="w-4 h-4" />
                            Contact Us
                        </motion.span>

                        <motion.h1
                            variants={itemVariants}
                            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6"
                        >
                            ติดต่อ{" "}
                            <span className="text-tiger-orange italic">
                                เรา
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-8"
                        >
                            พร้อมให้บริการเช่าตู้ถ่ายรูป Photobooth
                            สำหรับทุกงานอีเวนต์
                            <br className="hidden md:block" />
                            สอบถามราคาพิเศษได้ทันที
                        </motion.p>

                        {/* Quick contact */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <a
                                href="https://line.me/ti/p/~@imageautomat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 bg-[#06C755] hover:bg-[#05b04b] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#06C755]/20 hover:shadow-xl hover:shadow-[#06C755]/40 hover:scale-105 active:scale-95 overflow-hidden"
                            >
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                <LineIcon className="relative z-10 w-5 h-5" />
                                <span className="relative z-10">
                                    แชท LINE @imageautomat
                                </span>
                            </a>
                            <a
                                href="tel:+66635944429"
                                className="inline-flex items-center gap-2 text-white/60 hover:text-white font-medium transition-colors duration-300"
                            >
                                <Phone className="w-4 h-4" />
                                <span>063-594-4429</span>
                            </a>
                        </motion.div>

                        {/* Opening hours badge */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-10 inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 text-sm text-white/50"
                        >
                            <Clock className="w-4 h-4 text-tiger-orange" />
                            เปิดให้บริการทุกวัน 09:00 – 21:00 น.
                        </motion.div>
                    </motion.div>
                </section>

                {/* ─── Contact Cards ─── */}
                <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-tiger-orange/5 rounded-full blur-3xl" />

                    <motion.div
                        ref={cardsRef}
                        className="mx-auto max-w-6xl px-6 lg:px-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={cardsInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="text-center mb-12"
                        >
                            <h2 className="font-serif text-3xl md:text-4xl text-deep-space-blue tracking-tight mb-4">
                                ช่องทาง
                                <span className="text-tiger-orange italic">
                                    ติดต่อ
                                </span>
                            </h2>
                            <p className="text-deep-space-blue/50 max-w-lg mx-auto">
                                เลือกช่องทางที่สะดวกสำหรับคุณ
                                ทีมงานพร้อมให้บริการ
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {contactCards.map((card) => (
                                <motion.a
                                    key={card.label}
                                    href={card.href}
                                    target={
                                        card.href.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        card.href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    variants={itemVariants}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    className={`group relative flex flex-col items-center text-center p-8 rounded-2xl ${card.bgColor} border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-500 cursor-pointer`}
                                >
                                    {/* Icon */}
                                    <div
                                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                    >
                                        {card.isLine ? (
                                            <LineIcon className="w-6 h-6 text-white" />
                                        ) : (
                                            <card.icon
                                                className="w-6 h-6 text-white"
                                                strokeWidth={1.8}
                                            />
                                        )}
                                    </div>

                                    <p className="text-xs tracking-[0.2em] uppercase text-deep-space-blue/40 mb-1.5">
                                        {card.label}
                                    </p>
                                    <p className="font-serif text-lg text-deep-space-blue font-semibold mb-1">
                                        {card.value}
                                    </p>
                                    <p className="text-sm text-deep-space-blue/40">
                                        {card.description}
                                    </p>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ─── Form + Map Section ─── */}
                <section className="py-16 lg:py-24 bg-deep-space-blue/[0.02] relative overflow-hidden">
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

                    <motion.div
                        ref={formRef}
                        className="mx-auto max-w-6xl px-6 lg:px-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={formInView ? "visible" : "hidden"}
                    >
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                            {/* Left — Form */}
                            <motion.div variants={itemVariants}>
                                <div className="bg-white rounded-3xl shadow-xl shadow-deep-space-blue/5 p-8 md:p-10 border border-gray-100/80">
                                    {isSubmitted ? (
                                        <div className="flex flex-col items-center justify-center py-16 text-center">
                                            <motion.div
                                                initial={{
                                                    scale: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    scale: 1,
                                                    opacity: 1,
                                                }}
                                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tiger-orange to-amber-500 flex items-center justify-center mb-6 shadow-lg"
                                            >
                                                <Check className="w-8 h-8 text-white" />
                                            </motion.div>
                                            <h3 className="font-serif text-2xl text-deep-space-blue mb-3">
                                                ส่งข้อมูลเรียบร้อย!
                                            </h3>
                                            <p className="text-deep-space-blue/50">
                                                ทีมงานจะติดต่อกลับภายใน 24
                                                ชั่วโมง
                                            </p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="mb-8">
                                                <h3 className="font-serif text-2xl text-deep-space-blue mb-2">
                                                    ส่งข้อมูลหาเรา
                                                </h3>
                                                <p className="text-sm text-deep-space-blue/40">
                                                    กรอกรายละเอียดงานของคุณ
                                                    เราจะติดต่อกลับพร้อมราคาพิเศษ
                                                </p>
                                            </div>

                                            <form
                                                onSubmit={handleSubmit}
                                                className="space-y-6"
                                            >
                                                {/* Name */}
                                                <div>
                                                    <label
                                                        htmlFor="contact-name"
                                                        className="block text-xs tracking-[0.15em] uppercase text-deep-space-blue/50 mb-2"
                                                    >
                                                        ชื่อ – นามสกุล
                                                    </label>
                                                    <input
                                                        id="contact-name"
                                                        type="text"
                                                        value={formData.name}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                name: e.target
                                                                    .value,
                                                            })
                                                        }
                                                        className="w-full h-12 px-4 bg-deep-space-blue/[0.03] border border-deep-space-blue/10 rounded-xl focus:border-tiger-orange focus:ring-1 focus:ring-tiger-orange/20 text-deep-space-blue placeholder:text-deep-space-blue/25 transition-all duration-300 outline-none"
                                                        placeholder="ชื่อของคุณ"
                                                        required
                                                    />
                                                </div>

                                                {/* Phone */}
                                                <div>
                                                    <label
                                                        htmlFor="contact-phone"
                                                        className="block text-xs tracking-[0.15em] uppercase text-deep-space-blue/50 mb-2"
                                                    >
                                                        เบอร์โทรศัพท์
                                                    </label>
                                                    <input
                                                        id="contact-phone"
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                phone: e.target
                                                                    .value,
                                                            })
                                                        }
                                                        className="w-full h-12 px-4 bg-deep-space-blue/[0.03] border border-deep-space-blue/10 rounded-xl focus:border-tiger-orange focus:ring-1 focus:ring-tiger-orange/20 text-deep-space-blue placeholder:text-deep-space-blue/25 transition-all duration-300 outline-none"
                                                        placeholder="063-594-4429"
                                                        required
                                                    />
                                                </div>

                                                <div className="grid sm:grid-cols-2 gap-6">
                                                    {/* Event Type */}
                                                    <div>
                                                        <label
                                                            htmlFor="contact-event-type"
                                                            className="block text-xs tracking-[0.15em] uppercase text-deep-space-blue/50 mb-2"
                                                        >
                                                            ประเภทงาน
                                                        </label>
                                                        <select
                                                            id="contact-event-type"
                                                            value={
                                                                formData.eventType
                                                            }
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    eventType:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            className="w-full h-12 px-4 bg-deep-space-blue/[0.03] border border-deep-space-blue/10 rounded-xl focus:border-tiger-orange focus:ring-1 focus:ring-tiger-orange/20 text-deep-space-blue transition-all duration-300 outline-none"
                                                        >
                                                            <option value="">
                                                                เลือกประเภทงาน
                                                            </option>
                                                            <option value="wedding">
                                                                งานแต่งงาน
                                                            </option>
                                                            <option value="corporate">
                                                                งานอีเวนต์องค์กร
                                                            </option>
                                                            <option value="brand">
                                                                งานเปิดตัวสินค้า
                                                            </option>
                                                            <option value="party">
                                                                ปาร์ตี้ส่วนตัว
                                                            </option>
                                                            <option value="concert">
                                                                คอนเสิร์ต /
                                                                เทศกาล
                                                            </option>
                                                            <option value="other">
                                                                อื่นๆ
                                                            </option>
                                                        </select>
                                                    </div>

                                                    {/* Event Date */}
                                                    <div>
                                                        <label
                                                            htmlFor="contact-event-date"
                                                            className="block text-xs tracking-[0.15em] uppercase text-deep-space-blue/50 mb-2"
                                                        >
                                                            วันจัดงาน
                                                        </label>
                                                        <input
                                                            id="contact-event-date"
                                                            type="date"
                                                            value={
                                                                formData.eventDate
                                                            }
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    eventDate:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            className="w-full h-12 px-4 bg-deep-space-blue/[0.03] border border-deep-space-blue/10 rounded-xl focus:border-tiger-orange focus:ring-1 focus:ring-tiger-orange/20 text-deep-space-blue transition-all duration-300 outline-none"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Message */}
                                                <div>
                                                    <label
                                                        htmlFor="contact-message"
                                                        className="block text-xs tracking-[0.15em] uppercase text-deep-space-blue/50 mb-2"
                                                    >
                                                        ข้อความเพิ่มเติม
                                                    </label>
                                                    <textarea
                                                        id="contact-message"
                                                        value={
                                                            formData.message
                                                        }
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                message:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                        className="w-full px-4 py-3 bg-deep-space-blue/[0.03] border border-deep-space-blue/10 rounded-xl focus:border-tiger-orange focus:ring-1 focus:ring-tiger-orange/20 text-deep-space-blue placeholder:text-deep-space-blue/25 transition-all duration-300 outline-none resize-none"
                                                        placeholder="บอกเราเกี่ยวกับงานของคุณ..."
                                                        rows={4}
                                                    />
                                                </div>

                                                {/* Submit */}
                                                <button
                                                    type="submit"
                                                    className="group w-full relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-tiger-orange to-amber-500 hover:from-tiger-orange hover:to-tiger-orange text-white font-bold h-14 rounded-xl text-sm tracking-wide transition-all duration-300 shadow-lg shadow-tiger-orange/20 hover:shadow-xl hover:shadow-tiger-orange/30 hover:scale-[1.01] active:scale-[0.99] overflow-hidden"
                                                >
                                                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                                    <span className="relative z-10">
                                                        ส่งข้อมูล
                                                    </span>
                                                    <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </form>
                                        </>
                                    )}
                                </div>
                            </motion.div>

                            {/* Right — Info & FAQ */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col gap-8"
                            >
                                {/* Why us card */}
                                <div className="bg-deep-space-blue rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-tiger-orange/10 rounded-full blur-3xl" />
                                    <h3 className="font-serif text-2xl mb-6 relative">
                                        ทำไมต้อง{" "}
                                        <span className="text-tiger-orange">
                                            IMAGE AUTOMAT
                                        </span>
                                    </h3>
                                    <ul className="space-y-4 relative">
                                        {[
                                            "ตู้ถ่ายรูปคุณภาพสูงระดับพรีเมียม",
                                            "ซอฟต์แวร์อัปเดตฟรีตลอดชีพ",
                                            "ทีมงานจัดส่งและติดตั้งทั่วประเทศ",
                                            "ปริ้นภาพคุณภาพสูงทันที",
                                            "รองรับ Reel, Signature & Liveview",
                                        ].map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-3 text-white/70"
                                            >
                                                <div className="w-5 h-5 rounded-full bg-tiger-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check className="w-3 h-3 text-tiger-orange" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Hours card */}
                                <div className="bg-white rounded-3xl p-8 shadow-lg shadow-deep-space-blue/5 border border-gray-100/80">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-tiger-orange/10 flex items-center justify-center">
                                            <Clock className="w-5 h-5 text-tiger-orange" />
                                        </div>
                                        <h4 className="font-serif text-lg text-deep-space-blue">
                                            เวลาทำการ
                                        </h4>
                                    </div>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between items-center py-2 border-b border-deep-space-blue/5">
                                            <span className="text-deep-space-blue/60">
                                                จันทร์ – ศุกร์
                                            </span>
                                            <span className="text-deep-space-blue font-medium">
                                                09:00 – 21:00
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-deep-space-blue/5">
                                            <span className="text-deep-space-blue/60">
                                                เสาร์ – อาทิตย์
                                            </span>
                                            <span className="text-deep-space-blue font-medium">
                                                09:00 – 21:00
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-deep-space-blue/60">
                                                วันหยุดนักขัตฤกษ์
                                            </span>
                                            <span className="text-tiger-orange font-medium">
                                                เปิดตามปกติ
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* ─── FAQ Section ─── */}
                <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
                    <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl" />

                    <motion.div
                        ref={faqRef}
                        className="mx-auto max-w-3xl px-6 lg:px-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={faqInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="text-center mb-12"
                        >
                            <h2 className="font-serif text-3xl md:text-4xl text-deep-space-blue tracking-tight mb-4">
                                คำถามที่พบ
                                <span className="text-tiger-orange italic">
                                    บ่อย
                                </span>
                            </h2>
                        </motion.div>

                        <div className="space-y-4">
                            {faqItems.map((faq, i) => (
                                <motion.details
                                    key={i}
                                    variants={itemVariants}
                                    className="group bg-deep-space-blue/[0.02] hover:bg-deep-space-blue/[0.04] rounded-2xl border border-deep-space-blue/5 transition-colors duration-300"
                                >
                                    <summary className="flex items-center justify-between cursor-pointer p-6 text-deep-space-blue font-medium list-none">
                                        <span>{faq.q}</span>
                                        <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-tiger-orange/10 flex items-center justify-center text-tiger-orange group-open:rotate-45 transition-transform duration-300">
                                            +
                                        </span>
                                    </summary>
                                    <div className="px-6 pb-6 text-deep-space-blue/60 leading-relaxed">
                                        {faq.a}
                                    </div>
                                </motion.details>
                            ))}
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    )
}
