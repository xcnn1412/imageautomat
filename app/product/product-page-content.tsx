"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, ArrowLeft, Star, Sparkles, X, ChevronRight, Camera, Zap, Users } from "lucide-react"

const products = [
    {
        id: 1,
        src: "/models/images/product-08-768x768.webp",
        name: "MODEL 1",
        nameTh: "คลาสสิค บูธ",
        label: "PHOTOBOX",
        description: "ตู้ถ่ายรูปแบบคลาสสิค ดีไซน์เรียบหรู เหมาะสำหรับงานแต่งงานและงานทางการ",
        longDescription: "ตู้ถ่ายรูปแบบคลาสสิคที่ออกแบบมาเพื่อความเรียบหรูและทันสมัย เหมาะสำหรับงานแต่งงาน งานเลี้ยงสังสรรค์ และงานทางการทุกรูปแบบ มาพร้อมฟังก์ชันครบครัน ใช้งานง่าย พิมพ์รูปได้ไม่จำกัด",
        features: ["ใช้พื้นที่น้อย", "พิมพ์ได้ไม่จำกัด", "warp ตกแต่งตู้ได้", "เหมาะสำหรับงานอีเวนต์"],
        specs: { size: "60 x 60 x 180 cm", weight: "45 kg", printTime: "< 10 วินาที", resolution: "Full HD" },
        badge: "ขายดี",
        badgeColor: "bg-tiger-orange",
        category: "classic",
    },
    {
        id: 2,
        src: "/models/images/product-09-768x768.webp",
        name: "PHOTOBOX MODEL 2",
        nameTh: "โฟโต้บูธ โมเดลที่2",
        label: "PHOTOBOOTH",
        description: "โฟโต้บูธสไตล์วินเทจร่วมสมัย",
        longDescription: "โฟโต้บูธที่ผสมผสานสไตล์วินเทจเข้ากับเทคโนโลยีสมัยใหม่ หน้าจอสัมผัส Full HD ผ้าม่านเลือกสีได้ตามธีมงาน พร้อมไฟสตูดิโอระดับมืออาชีพ",
        features: ["หน้าจอสัมผัส Full HD", "ผ้าม่านเลือกสีได้", "ไฟสตูดิโอ", "ดีไซน์วินเทจร่วมสมัย"],
        specs: { size: "70 x 70 x 200 cm", weight: "55 kg", printTime: "< 10 วินาที", resolution: "Full HD" },
        badge: "Premium",
        badgeColor: "bg-purple-600",
        category: "premium",
    },
    {
        id: 3,
        src: "/models/images/product-10-768x768.webp",
        name: "PHOTOBOX MODEL 3",
        nameTh: "โฟโต้บูธ โมเดลที่3",
        label: "PHOTOBOOTH",
        description: "แพลตฟอร์มหมุน 360 องศา สร้างวิดีโอสุดเท่ที่ไวรัลได้ง่าย",
        longDescription: "แพลตฟอร์มถ่ายวิดีโอ 360 องศาที่สร้างคอนเทนต์สุดเท่ วิดีโอ Slow-motion คุณภาพสูง แชร์ลงโซเชียลได้ทันที เหมาะสำหรับงานเปิดตัวสินค้าและอีเวนต์สุดพิเศษ",
        features: ["วิดีโอ Slow-motion", "แชร์โซเชียลทันที", "พื้นที่กว้าง 1.2 ม.", "เอฟเฟกต์พิเศษหลากหลาย"],
        specs: { size: "120 cm (เส้นผ่านศูนย์กลาง)", weight: "35 kg", printTime: "ประมวลผล 30 วินาที", resolution: "4K Video" },
        badge: "ยอดนิยม",
        badgeColor: "bg-green-600",
        category: "360",
    },
    {
        id: 4,
        src: "/models/images/product-11-768x768.webp",
        name: "PHOTOBOX MODEL 4",
        nameTh: "โฟโต้บูธ โมเดลที่4",
        label: "PHOTOBOOTH",
        description: "ตู้ถ่ายรูปขนาดกะทัดรัด เคลื่อนย้ายง่าย เหมาะกับทุกขนาดงาน",
        longDescription: "ตู้ถ่ายรูปขนาดกะทัดรัดที่ออกแบบมาเพื่อความสะดวกในการเคลื่อนย้าย น้ำหนักเบา ติดตั้งง่าย ใน 15 นาที เหมาะกับทุกขนาดงาน ทั้งงานเล็กและงานใหญ่",
        features: ["น้ำหนักเบา", "ติดตั้งใน 15 นาที", "ประหยัดพื้นที่", "เคลื่อนย้ายง่าย"],
        specs: { size: "50 x 50 x 170 cm", weight: "30 kg", printTime: "< 10 วินาที", resolution: "Full HD" },
        badge: null,
        badgeColor: "",
        category: "compact",
    },
    {
        id: 5,
        src: "/models/images/product-12-768x768.webp",
        name: "PHOTOBOX MODEL 5",
        nameTh: "โฟโต้บูธ โมเดลที่5",
        label: "PHOTOBOOTH",
        description: "ดีไซน์ย้อนยุค สไตล์วินเทจ สร้างบรรยากาศพิเศษให้งานของคุณ",
        longDescription: "ตู้ถ่ายรูปสไตล์วินเทจที่จะสร้างบรรยากาศย้อนยุคสุดพิเศษให้กับงานของคุณ มาพร้อมฟิลเตอร์วินเทจ กรอบรูปคลาสสิค และม่านแดงหรูหรา",
        features: ["ฟิลเตอร์วินเทจ", "กรอบรูปคลาสสิค", "ม่านแดงหรูหรา", "บรรยากาศย้อนยุค"],
        specs: { size: "65 x 65 x 190 cm", weight: "50 kg", printTime: "< 10 วินาที", resolution: "Full HD" },
        badge: null,
        badgeColor: "",
        category: "vintage",
    },
    {
        id: 6,
        src: "/models/images/product-13-768x768.webp",
        name: "Camera 360",
        nameTh: "Camera 360",
        label: "PHOTOBOOTH",
        description: "กรอบไฟ LED เปลี่ยนสีได้ ปรับแต่งตามธีมงานได้อย่างอิสระ",
        longDescription: "ตู้ถ่ายรูปพร้อมกรอบไฟ LED เปลี่ยนสีได้ 16 ล้านสี ปรับแต่งตามธีมงานของคุณได้อย่างอิสระ ควบคุมง่ายผ่านรีโมท มาพร้อมเอฟเฟกต์เคลื่อนไหวสุดเท่",
        features: ["RGB LED 16 ล้านสี", "รีโมทควบคุม", "เอฟเฟกต์เคลื่อนไหว", "ปรับแต่งตามธีม"],
        specs: { size: "120 cm (เส้นผ่านศูนย์กลาง)", weight: "40 kg", printTime: "ประมวลผล 30 วินาที", resolution: "4K Video" },
        badge: "ใหม่",
        badgeColor: "bg-sky-500",
        category: "led",
    },
    {
        id: 7,
        src: "/models/images/product-14-768x768.webp",
        name: "HIGH ANGLE PHOTOBOOTH",
        nameTh: "ตู้มุมสูง",
        label: "PHOTOBOOTH",
        description: "ชุดพรีเมียมครบเซ็ต รวมตู้ถ่ายรูป ไฟสตูดิโอ และอุปกรณ์ครบครัน",
        longDescription: "ชุดพรีเมียมครบเซ็ตที่รวมทุกอย่างไว้ในที่เดียว ตู้ถ่ายรูปมุมสูงที่ให้มุมมองใหม่ ไฟสตูดิโอระดับ Pro และอุปกรณ์ Props ครบครัน พร้อมให้บริการทันที",
        features: ["ชุดพร้อมใช้งาน", "ไฟสตูดิโอ Pro", "อุปกรณ์ Props ครบ", "มุมถ่ายสูงพิเศษ"],
        specs: { size: "80 x 80 x 250 cm", weight: "60 kg", printTime: "< 10 วินาที", resolution: "Full HD" },
        badge: "Best Value",
        badgeColor: "bg-rose-500",
        category: "premium",
    },
]

const stats = [
    { icon: Camera, value: "7+", label: "รุ่นให้เลือก" },
    { icon: Zap, value: "10s", label: "พิมพ์เสร็จ" },
    { icon: Users, value: "500+", label: "งานที่ให้บริการ" },
]

export function ProductPageContent() {
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <main className="min-h-screen bg-white">
            {/* Navigation Bar - Minimal */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-gray-100/50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <Link href="/" className="flex items-center group">
                            <span className="font-serif text-2xl lg:text-3xl tracking-tight text-deep-space-blue">
                                IMAGE<span className="text-tiger-orange">AUTOMAT</span>
                            </span>
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-deep-space-blue/60 hover:text-deep-space-blue transition-colors duration-300"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>กลับหน้าหลัก</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-deep-space-blue via-deep-space-blue/95 to-deep-space-blue" />
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                {/* Decorative blurs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tiger-orange/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-blue-light/10 rounded-full blur-[100px]" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-tiger-orange text-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
                            <Sparkles className="w-4 h-4" />
                            <span className="uppercase tracking-[0.2em]">Our Products</span>
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6">
                            สินค้าของเรา
                        </h1>
                        <p className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-12">
                            ตู้ถ่ายรูปคุณภาพสูงที่ออกแบบมาเพื่อสร้างประสบการณ์สุดพิเศษ <br className="hidden md:block" />
                            หลากหลายรุ่นให้เลือก เหมาะกับทุกรูปแบบงาน
                        </p>

                        {/* Stats */}
                        <div className="flex items-center justify-center gap-8 md:gap-16">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mb-3">
                                        <stat.icon className="w-5 h-5 text-tiger-orange" />
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
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

            {/* Products Grid */}
            <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-tiger-orange/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-deep-space-blue/5 rounded-full blur-3xl" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    {/* Section header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.1]">
                            เลือกตู้ถ่ายรูปที่ <span className="italic text-tiger-orange">ใช่</span>
                            <br className="hidden md:block" /> สำหรับงานของคุณ
                        </h2>
                        <p className="mt-6 text-lg text-deep-space-blue/50 leading-relaxed max-w-2xl mx-auto">
                            ทุกรุ่นมาพร้อมเทคโนโลยีล่าสุดและการออกแบบที่ทันสมัย พร้อมบริการจัดส่งและติดตั้งทั่วประเทศ
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/80"
                                onMouseEnter={() => setHoveredId(product.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Image */}
                                <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100/50 overflow-hidden">
                                    <Image
                                        src={product.src}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        quality={80}
                                        loading="lazy"
                                    />
                                    {product.badge && (
                                        <span className={`absolute top-5 left-5 px-4 py-1.5 ${product.badgeColor} text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg`}>
                                            {product.badge}
                                        </span>
                                    )}

                                    {/* Hover overlay */}
                                    <div className={`absolute inset-0 bg-deep-space-blue/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}>
                                        <button
                                            onClick={() => setSelectedProduct(product)}
                                            className="px-8 py-4 bg-tiger-orange text-white font-medium rounded-full flex items-center gap-2 hover:bg-white hover:text-deep-space-blue transition-all duration-300 transform hover:scale-105 shadow-xl"
                                        >
                                            <span>ดูรายละเอียด</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 border-t border-gray-100">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-tiger-orange text-xs font-medium uppercase tracking-[0.15em]">{product.label}</span>
                                        <ChevronRight className="w-4 h-4 text-deep-space-blue/30 group-hover:text-tiger-orange group-hover:translate-x-1 transition-all duration-300" />
                                    </div>
                                    <h3 className="font-serif text-xl text-deep-space-blue mb-1">{product.name}</h3>
                                    <p className="text-deep-space-blue/40 text-sm mb-3">{product.nameTh}</p>
                                    <p className="text-deep-space-blue/60 text-sm leading-relaxed line-clamp-2">{product.description}</p>

                                    {/* Features preview */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {product.features.slice(0, 2).map((feature, idx) => (
                                            <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-50 text-deep-space-blue/60 text-xs">
                                                <Star className="w-3 h-3 text-tiger-orange fill-tiger-orange" />
                                                {feature}
                                            </span>
                                        ))}
                                        {product.features.length > 2 && (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 text-deep-space-blue/40 text-xs">
                                                +{product.features.length - 2} อื่นๆ
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tiger-orange/5 rounded-full blur-[120px]" />

                <div className="mx-auto max-w-4xl px-6 lg:px-8 relative text-center">
                    <div className="bg-deep-space-blue rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
                        {/* BG decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-tiger-orange/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-blue-light/10 rounded-full blur-3xl" />

                        <div className="relative">
                            <p className="text-white/40 text-sm uppercase tracking-[0.25em] mb-4">
                                พร้อมเริ่มต้นแล้วหรือยัง?
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                                ให้เราช่วยเลือก<span className="text-tiger-orange">ตู้ถ่ายรูป</span>
                                <br className="hidden md:block" />ที่เหมาะกับงานของคุณ
                            </h2>
                            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                                ติดต่อทีมงานเพื่อรับคำแนะนำฟรี พร้อมใบเสนอราคาภายใน 24 ชั่วโมง
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
            <footer className="py-8 bg-white border-t border-gray-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <Link href="/" className="inline-flex items-center group mb-4">
                        <span className="font-serif text-xl tracking-tight text-deep-space-blue">
                            IMAGE<span className="text-tiger-orange">AUTOMAT</span>
                        </span>
                    </Link>
                    <p className="text-deep-space-blue/40 text-sm">
                        © {new Date().getFullYear()} IMAGEAUTOMAT. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    onClick={() => setSelectedProduct(null)}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-deep-space-blue/60 backdrop-blur-md" />

                    {/* Modal */}
                    <div
                        className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-[modalIn_0.3s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-deep-space-blue hover:bg-tiger-orange hover:text-white transition-all duration-300 shadow-lg"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col lg:flex-row">
                            {/* Image side */}
                            <div className="relative w-full lg:w-1/2 aspect-square bg-gradient-to-br from-gray-50 to-gray-100">
                                <Image
                                    src={selectedProduct.src}
                                    alt={selectedProduct.name}
                                    fill
                                    className="object-contain p-8"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    quality={90}
                                />
                                {selectedProduct.badge && (
                                    <span className={`absolute top-6 left-6 px-4 py-2 ${selectedProduct.badgeColor} text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg`}>
                                        {selectedProduct.badge}
                                    </span>
                                )}
                            </div>

                            {/* Content side */}
                            <div className="flex-1 p-8 lg:p-10">
                                <span className="text-tiger-orange text-xs font-medium uppercase tracking-[0.2em]">
                                    {selectedProduct.label}
                                </span>
                                <h3 className="font-serif text-3xl text-deep-space-blue mt-2 mb-1">
                                    {selectedProduct.name}
                                </h3>
                                <p className="text-deep-space-blue/50 text-lg mb-4">{selectedProduct.nameTh}</p>
                                <p className="text-deep-space-blue/70 leading-relaxed mb-8">
                                    {selectedProduct.longDescription}
                                </p>

                                {/* Features */}
                                <div className="mb-8">
                                    <h4 className="text-sm font-bold text-deep-space-blue uppercase tracking-wider mb-4">คุณสมบัติเด่น</h4>
                                    <ul className="space-y-3">
                                        {selectedProduct.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-deep-space-blue/70">
                                                <Star className="w-4 h-4 text-tiger-orange fill-tiger-orange flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Specs */}
                                <div className="mb-8">
                                    <h4 className="text-sm font-bold text-deep-space-blue uppercase tracking-wider mb-4">สเปค</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {Object.entries(selectedProduct.specs).map(([key, value]) => (
                                            <div key={key} className="bg-gray-50 rounded-xl p-3">
                                                <span className="text-[10px] text-deep-space-blue/40 uppercase tracking-widest block mb-1">
                                                    {key === "size" ? "ขนาด" : key === "weight" ? "น้ำหนัก" : key === "printTime" ? "เวลาพิมพ์" : "ความละเอียด"}
                                                </span>
                                                <span className="text-sm font-medium text-deep-space-blue">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <a
                                    href="https://line.me/ti/p/~@imageautomat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-tiger-orange text-white font-bold rounded-full hover:bg-deep-space-blue transition-all duration-300 w-full justify-center shadow-lg shadow-tiger-orange/20 hover:shadow-deep-space-blue/20"
                                >
                                    <span>สอบถามราคา</span>
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal animation style */}
            <style jsx global>{`
                @keyframes modalIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
            `}</style>
        </main>
    )
}
