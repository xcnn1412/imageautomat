"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import {
    Sparkles,
    Camera,
    Wand2,
    Share2,
    Palette,
    Layers,
    Monitor,
    Zap,
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Play,
    Smartphone,
    CloudUpload,
    Printer,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const VideoGallery = dynamic(() => import("@/components/video-gallery").then(mod => ({ default: mod.VideoGallery })), {
    loading: () => <div className="py-12" />,
    ssr: true,
})

const AutoReel = dynamic(() => import("@/components/AutoReel").then(mod => ({ default: mod.AutoReel })), {
    loading: () => <div className="py-12" />,
    ssr: true,
})

const features = [
    {
        icon: Camera,
        title: "ถ่ายรูป & วิดีโอ",
        titleEn: "Photo & Video",
        description: "รองรับภาพนิ่ง, GIF, Boomerang และวิดีโอ พร้อมสร้างคอนเทนต์ได้หลากหลาย",
        color: "from-orange-500 to-amber-500",
        bgColor: "bg-orange-50",
        iconColor: "text-orange-600",
    },
    {
        icon: Wand2,
        title: "AI Filter & Effect",
        titleEn: "AI-Powered Filters",
        description: "ฟิลเตอร์ AI สุดล้ำ เปลี่ยนภาพให้เป็นสไตล์ต่างๆ อัตโนมัติ สร้างความประทับใจให้ผู้ใช้",
        color: "from-purple-500 to-violet-500",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-600",
    },
    {
        icon: Layers,
        title: "Green Screen",
        titleEn: "Background Removal",
        description: "ลบพื้นหลังอัตโนมัติ เปลี่ยน Background ได้ตามธีมงาน ไม่ต้องใช้ฉากจริง",
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50",
        iconColor: "text-green-600",
    },
    {
        icon: Palette,
        title: "ออกแบบ Template",
        titleEn: "Template Designer",
        description: "ออกแบบ Layout รูปถ่ายได้เอง หรือเลือกจาก Template สำเร็จรูปกว่า 100 แบบ",
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-50",
        iconColor: "text-pink-600",
    },
    {
        icon: Share2,
        title: "แชร์ทันที",
        titleEn: "Instant Sharing",
        description: "แชร์ผ่าน QR Code, Email, LINE, และ Social Media ได้ทันทีหลังถ่าย",
        color: "from-sky-500 to-blue-500",
        bgColor: "bg-sky-50",
        iconColor: "text-sky-600",
    },
    {
        icon: Monitor,
        title: "Live Gallery",
        titleEn: "Real-Time Display",
        description: "แสดงรูปบนจอ Live Gallery แบบเรียลไทม์ สร้างบรรยากาศให้งานอีเวนต์",
        color: "from-indigo-500 to-blue-600",
        bgColor: "bg-indigo-50",
        iconColor: "text-indigo-600",
    },
    {
        icon: Printer,
        title: "พิมพ์รูปทันที",
        titleEn: "Instant Print",
        description: "พิมพ์รูปคุณภาพสูงภายใน 10 วินาที รองรับเครื่องพิมพ์หลากหลายยี่ห้อ",
        color: "from-teal-500 to-cyan-500",
        bgColor: "bg-teal-50",
        iconColor: "text-teal-600",
    },
    {
        icon: Zap,
        title: "อัปเดตฟรีตลอดชีพ",
        titleEn: "Lifetime Updates",
        description: "ซอฟต์แวร์ที่อัปเดตฟีเจอร์ใหม่ฟรีตลอด พร้อมซัพพอร์ตจากทีมงานมืออาชีพ",
        color: "from-amber-500 to-yellow-500",
        bgColor: "bg-amber-50",
        iconColor: "text-amber-600",
    },
]

const workflows = [
    {
        step: "01",
        icon: Camera,
        title: "ถ่ายรูป",
        description: "ผู้ใช้กดปุ่มถ่ายรูป เลือกฟิลเตอร์และเอฟเฟกต์ที่ต้องการ",
    },
    {
        step: "02",
        icon: Wand2,
        title: "ตกแต่งอัตโนมัติ",
        description: "AI ปรับแต่งภาพ ใส่ Frame, Sticker และ Template ที่เลือกไว้",
    },
    {
        step: "03",
        icon: Printer,
        title: "พิมพ์ทันที",
        description: "พิมพ์รูปคุณภาพสูงภายใน 10 วินาที พร้อมรับรูปได้เลย",
    },
    {
        step: "04",
        icon: Share2,
        title: "แชร์ออนไลน์",
        description: "สแกน QR Code เพื่อรับรูปดิจิทัล แชร์ลง Social ได้ทันที",
    },
]

const highlights = [
    "รองรับ Windows 10/11",
    "รองรับกล้อง DSLR ทุกยี่ห้อ",
    "รองรับ Webcam USB",
    "ย่อรูป / ครอปรูป อัตโนมัติ",
    "Countdown Timer ปรับได้",
    "Multi-Language (TH/EN)",
    "ระบบ Analytics & Report",
    "รองรับ Touchscreen",
]

export function SoftwarePageContent() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" aria-label="ซอฟต์แวร์ Photobooth">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-deep-space-blue via-deep-space-blue/95 to-deep-space-blue" />
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                {/* Decorative blurs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tiger-orange/10 rounded-full blur-[100px]" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-tiger-orange text-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
                            <Sparkles className="w-4 h-4" />
                            <span className="uppercase tracking-[0.2em]">Our Software</span>
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6">
                            ซอฟต์แวร์ <span className="text-tiger-orange">Photobooth</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-12">
                            ซอฟต์แวร์ตู้ถ่ายรูปที่ครบครัน ใช้งานง่าย รองรับฟีเจอร์หลากหลาย <br className="hidden md:block" />
                            ตั้งแต่ AI Filter, Green Screen ไปจนถึง Live Gallery
                        </p>

                        {/* Quick stats */}
                        <div className="flex items-center justify-center gap-8 md:gap-14">
                            {[
                                { value: "100+", label: "Template" },
                                { value: "AI", label: "Powered" },
                                { value: "24/7", label: "Support" },
                            ].map((stat, idx) => (
                                <div key={idx} className="relative text-center">
                                    <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">
                                        <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                                            {stat.value}
                                        </span>
                                    </div>
                                    <div className="text-xs md:text-sm text-white/50 font-medium tracking-wide">
                                        {stat.label}
                                    </div>
                                    {idx < 2 && (
                                        <div className="absolute -right-4 md:-right-7 top-1/2 -translate-y-1/2 w-px h-16 md:h-20 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 lg:py-32 bg-white relative overflow-hidden" aria-label="ฟีเจอร์ซอฟต์แวร์">
                {/* Background decorations */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-tiger-orange/5 rounded-full blur-3xl" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.1]">
                            ฟีเจอร์<span className="italic text-tiger-orange">ครบครัน</span><br className="hidden md:block" /> ตอบโจทย์ทุกงาน
                        </h2>
                        <p className="mt-6 text-lg text-deep-space-blue/50 leading-relaxed max-w-2xl mx-auto">
                            ซอฟต์แวร์ที่ออกแบบมาเพื่อสร้างประสบการณ์ถ่ายรูปที่ดีที่สุด ด้วยเทคโนโลยี AI สุดล้ำ
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-white rounded-3xl p-6 lg:p-7 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/80 overflow-hidden"
                            >
                                {/* Hover gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl`} />

                                {/* Icon */}
                                <div className={`relative w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                                </div>

                                {/* Content */}
                                <h3 className="font-serif text-lg text-deep-space-blue mb-1 group-hover:text-tiger-orange transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-xs text-deep-space-blue/30 font-medium uppercase tracking-wider mb-3">
                                    {feature.titleEn}
                                </p>
                                <p className="text-sm text-deep-space-blue/60 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden" aria-label="ขั้นตอนการใช้งาน">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tiger-orange/5 rounded-full blur-[120px]" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-space-blue/5 text-deep-space-blue text-sm font-medium mb-6">
                            <Play className="w-4 h-4 text-tiger-orange" />
                            <span className="uppercase tracking-[0.15em]">How It Works</span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.1]">
                            ใช้งานง่าย<br className="hidden md:block" /> เพียง <span className="italic text-tiger-orange">4 ขั้นตอน</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {workflows.map((item, idx) => (
                            <div key={idx} className="relative text-center group">
                                {/* Connector line */}
                                {idx < workflows.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-tiger-orange/30 to-transparent" />
                                )}

                                {/* Step number */}
                                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg shadow-deep-space-blue/5 mb-6 group-hover:shadow-xl group-hover:shadow-tiger-orange/10 transition-all duration-500 border border-gray-100">
                                    <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-tiger-orange text-white text-xs font-bold flex items-center justify-center shadow-md">
                                        {item.step}
                                    </div>
                                    <item.icon className="w-9 h-9 text-deep-space-blue/70 group-hover:text-tiger-orange transition-colors duration-300" />
                                </div>

                                <h3 className="font-serif text-xl text-deep-space-blue mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-deep-space-blue/50 leading-relaxed max-w-[250px] mx-auto">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Video Gallery Header Section */}
            <section className="pt-12 lg:pt-16 pb-0 bg-deep-space-blue/5 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative text-center">
                    {/* Background decoration */}
                    <div className="absolute top-10 left-10 w-72 h-72 bg-tiger-orange/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                    
                    <div className="relative">
                        {/* Main heading */}
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.1] mb-4">
                            ภาพความทรงจำที่ขยับได้
                            <br />
                            <span className="text-tiger-orange">LIVEVIEW PHOTOBOOTH</span>
                        </h2>
                        
                        {/* Subheading */}
                        <p className="mt-6 text-lg md:text-xl text-deep-space-blue/60 leading-relaxed max-w-2xl mx-auto">
                            ตัวอย่างผลลัพธ์ภาพที่ได้จากโปรแกรม
                        </p>
                    </div>
                </div>
            </section>

            <VideoGallery />

            <AutoReel />

            {/* Compatibility & Highlights */}
            <section className="py-20 lg:py-32 bg-white relative overflow-hidden" aria-label="ความเข้ากันได้">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <div className="bg-gradient-to-br from-deep-space-blue to-deep-space-blue/95 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
                        {/* BG decoration */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-tiger-orange/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

                        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left content */}
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-tiger-orange text-sm font-medium mb-6 border border-white/10">
                                    <Smartphone className="w-4 h-4" />
                                    <span className="uppercase tracking-[0.15em]">Compatibility</span>
                                </div>
                                <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                                    รองรับ<span className="text-tiger-orange">อุปกรณ์</span><br />หลากหลาย
                                </h2>
                                <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-md">
                                    ซอฟต์แวร์ของเราออกแบบมาให้ใช้งานร่วมกับฮาร์ดแวร์ได้อย่างกว้างขวาง ไม่ว่าจะเป็นกล้อง เครื่องพิมพ์ หรือจอสัมผัส
                                </p>
                                <a
                                    href="https://line.me/ti/p/~@imageautomat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-tiger-orange text-white font-bold rounded-full hover:bg-white hover:text-deep-space-blue transition-all duration-300 shadow-lg shadow-tiger-orange/20 hover:shadow-xl"
                                >
                                    <span>สอบถามเพิ่มเติม</span>
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>

                            {/* Right - Checklist */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {highlights.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-tiger-orange flex-shrink-0" />
                                        <span className="text-white/80 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" aria-label="ติดต่อสอบถาม">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tiger-orange/5 rounded-full blur-[120px]" />

                <div className="mx-auto max-w-4xl px-6 lg:px-8 relative text-center">
                    <div className="bg-deep-space-blue rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
                        {/* BG decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-tiger-orange/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-blue-light/10 rounded-full blur-3xl" />

                        <div className="relative">
                            <p className="text-white/40 text-sm uppercase tracking-[0.25em] mb-4">
                                สนใจซอฟต์แวร์?
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                                เริ่มต้นสร้าง<span className="text-tiger-orange">ธุรกิจ</span>
                                <br className="hidden md:block" />ตู้ถ่ายรูปกับเรา
                            </h2>
                            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                                ติดต่อทีมงานเพื่อรับคำปรึกษาฟรี ทดลองใช้ซอฟต์แวร์ พร้อมราคาพิเศษ
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="https://line.me/ti/p/~@imageautomat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#06C755] text-white font-bold rounded-full hover:shadow-xl hover:shadow-[#06C755]/30 hover:scale-105 transition-all duration-300"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                    </svg>
                                    <span className="tracking-wide">ขอราคาพิเศษ</span>
                                </a>
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white hover:text-deep-space-blue transition-all duration-300 border border-white/20"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>กลับหน้าหลัก</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    )
}
