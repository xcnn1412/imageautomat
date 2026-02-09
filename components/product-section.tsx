"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Star, Sparkles } from "lucide-react"

const products = [
    {
        id: 1,
        src: "/models/images/product-08-768x768.webp",
        name: "MODEL 1",
        nameTh: "คลาสสิค บูธ",
        label: "PHOTOBOX",
        description: "ตู้ถ่ายรูปแบบคลาสสิค ดีไซน์เรียบหรู เหมาะสำหรับงานแต่งงานและงานทางการ",
        features: ["ใช้พื้นที่น้อย", "พิมพ์ได้ไม่จำกัด", "warp ตกแต่งตู้ได้", "เหมาะสำหรับงานอีเวนต์"],
        badge: "ขายดี",
        badgeColor: "bg-tiger-orange",
    },
    {
        id: 2,
        src: "/models/images/product-09-768x768.webp",
        name: "PHOTOBOX MODEL 2",
        nameTh: "โฟโต้บูธ โมเดลที่2",
        label: "PHOTOBOOTH",
        description: "โฟโต้บูธสไตล์วินเทจร่วมสมัย",
        features: ["หน้าจอสัมผัส Full HD", "ผ้าม่านเลือกสีได้", "ไฟสตูดิโอ"],
        badge: "Premium",
        badgeColor: "bg-purple-600",
    },
    {
        id: 3,
        src: "/models/images/product-10-768x768.webp",
        name: "PHOTOBOX MODEL 3",
        nameTh: "โฟโต้บูธ โมเดลที่3",
        label: "PHOTOBOOTH",
        description: "แพลตฟอร์มหมุน 360 องศา สร้างวิดีโอสุดเท่ที่ไวรัลได้ง่าย",
        features: ["วิดีโอ Slow-motion", "แชร์โซเชียลทันที", "พื้นที่กว้าง 1.2 ม."],
        badge: "ยอดนิยม",
        badgeColor: "bg-green-600",
    },
    {
        id: 4,
        src: "/models/images/product-11-768x768.webp",
        name: "PHOTOBOX MODEL 4",
        nameTh: "โฟโต้บูธ โมเดลที่4",
        label: "PHOTOBOOTH",
        description: "ตู้ถ่ายรูปขนาดกะทัดรัด เคลื่อนย้ายง่าย เหมาะกับทุกขนาดงาน",
        features: ["น้ำหนักเบา", "ติดตั้งใน 15 นาที", "ประหยัดพื้นที่"],
        badge: null,
        badgeColor: "",
    },
    {
        id: 5,
        src: "/models/images/product-12-768x768.webp",
        name: "PHOTOBOX MODEL 5",
        nameTh: "โฟโต้บูธ โมเดลที่5",
        label: "PHOTOBOOTH",
        description: "ดีไซน์ย้อนยุค สไตล์วินเทจ สร้างบรรยากาศพิเศษให้งานของคุณ",
        features: ["ฟิลเตอร์วินเทจ", "กรอบรูปคลาสสิค", "ม่านแดงหรูหรา"],
        badge: null,
        badgeColor: "",
    },
    {
        id: 6,
        src: "/models/images/product-13-768x768.webp",
        name: "Camera 360",
        nameTh: "Camera 360",
        label: "PHOTOBOOTH",
        description: "กรอบไฟ LED เปลี่ยนสีได้ ปรับแต่งตามธีมงานได้อย่างอิสระ",
        features: ["RGB LED 16 ล้านสี", "รีโมทควบคุม", "เอฟเฟกต์เคลื่อนไหว"],
        badge: "ใหม่",
        badgeColor: "bg-sky-500",
    },
    {
        id: 7,
        src: "/models/images/product-14-768x768.webp",
        name: "HIGH ANGLE PHOTOBOOTH",
        nameTh: "ตู้มุมสูง",
        label: "PHOTOBOOTH",
        description: "ชุดพรีเมียมครบเซ็ต รวมตู้ถ่ายรูป ไฟสตูดิโอ และอุปกรณ์ครบครัน",
        features: ["ชุดพร้อมใช้งาน", "ไฟสตูดิโอ Pro", "อุปกรณ์ Props ครบ"],
        badge: "Best Value",
        badgeColor: "bg-rose-500",
    },
]

export function ProductSection() {
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <section id="products" className="py-32 lg:py-40 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.015]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23023047' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-tiger-orange/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-deep-space-blue/5 rounded-full blur-3xl" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tiger-orange/10 text-tiger-orange text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span className="uppercase tracking-[0.2em]">Our Products</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-space-blue tracking-tight leading-[1.1]">
                        เลือกตู้ถ่ายรูปที่ <span className="italic text-tiger-orange">ใช่</span>
                        <br className="hidden md:block" /> สำหรับงานของคุณ
                    </h2>
                    <p className="mt-8 text-lg text-deep-space-blue/50 leading-relaxed max-w-2xl mx-auto">
                        เรามีตู้ถ่ายรูปหลากหลายรูปแบบให้เลือก ทุกรุ่นมาพร้อมเทคโนโลยีล่าสุดและการออกแบบที่ทันสมัย
                    </p>
                </div>

                {/* Products Grid - Featured Layout */}
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Featured Product - Large */}
                    <div
                        className="lg:col-span-8 group relative bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                        onMouseEnter={() => setHoveredId(products[0].id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <div className="flex flex-col md:flex-row h-full">
                            {/* Image Side */}
                            <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto">
                                <Image
                                    src={products[0].src}
                                    alt={products[0].name}
                                    fill
                                    className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    quality={80}
                                    priority
                                />
                                {products[0].badge && (
                                    <span className={`absolute top-6 left-6 px-4 py-2 ${products[0].badgeColor} text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg`}>
                                        {products[0].badge}
                                    </span>
                                )}
                            </div>
                            {/* Content Side */}
                            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-deep-space-blue to-deep-space-blue/90">
                                <span className="text-tiger-orange text-sm font-medium uppercase tracking-[0.2em] mb-2">PHOTOBOOTH  </span>
                                <h3 className="font-serif text-3xl lg:text-4xl text-white mb-2">
                                    {products[0].name}
                                </h3>
                                <p className="text-white/60 text-lg mb-6">{products[0].nameTh}</p>
                                <p className="text-white/80 leading-relaxed mb-8">
                                    {products[0].description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {products[0].features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-white/70">
                                            <Star className="w-4 h-4 text-tiger-orange fill-tiger-orange" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-tiger-orange text-white font-medium rounded-full hover:bg-white hover:text-deep-space-blue transition-all duration-300 w-fit group/btn"
                                >
                                    <span>สอบถามราคา</span>
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Products - Right Column */}
                    <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
                        {products.slice(1, 3).map((product, idx) => (
                            <div
                                key={product.id}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                                onMouseEnter={() => setHoveredId(product.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100">
                                    <Image
                                        src={product.src}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 1024px) 50vw, 25vw"
                                        quality={75}
                                        loading="lazy"
                                    />
                                    {product.badge && (
                                        <span className={`absolute top-4 left-4 px-3 py-1 ${product.badgeColor} text-white text-xs font-bold uppercase tracking-wider rounded-full`}>
                                            {product.badge}
                                        </span>
                                    )}
                                </div>
                                <div className="p-6 border-t border-gray-100">
                                    <span className="text-tiger-orange text-xs font-medium uppercase tracking-[0.15em]">{product.label}</span>
                                    <h3 className="font-serif text-xl text-deep-space-blue mt-1 mb-1">{product.name}</h3>
                                    <p className="text-deep-space-blue/50 text-sm">{product.nameTh}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Grid - Remaining Products */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-8">
                    {products.slice(3).map((product, idx) => (
                        <div
                            key={product.id}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                            onMouseEnter={() => setHoveredId(product.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100/50">
                                <Image
                                    src={product.src}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    quality={75}
                                    loading="lazy"
                                />
                                {product.badge && (
                                    <span className={`absolute top-3 left-3 px-2.5 py-1 ${product.badgeColor} text-white text-[10px] font-bold uppercase tracking-wider rounded-full`}>
                                        {product.badge}
                                    </span>
                                )}
                                {/* Hover Overlay */}
                                <div className={`absolute inset-0 bg-deep-space-blue/90 flex items-center justify-center transition-opacity duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}>
                                    <a
                                        href="#contact"
                                        className="px-6 py-3 bg-tiger-orange text-white text-sm font-medium rounded-full flex items-center gap-2 hover:bg-white hover:text-deep-space-blue transition-colors"
                                    >
                                        <span>ดูรายละเอียด</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-5 text-center border-t border-gray-100">
                                <span className="text-tiger-orange text-[10px] font-medium uppercase tracking-[0.15em]">{product.label}</span>
                                <h3 className="font-serif text-lg text-deep-space-blue mt-1">{product.name}</h3>
                                <p className="text-deep-space-blue/40 text-xs mt-0.5">{product.nameTh}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-6 sm:p-8 bg-deep-space-blue rounded-3xl">
                        <div className="text-center sm:text-left">
                            <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-1">
                                ต้องการคำแนะนำเพิ่มเติม?
                            </p>
                            <p className="text-white text-xl font-serif">
                                ทีมงานพร้อมช่วยเลือก<span className="text-tiger-orange">ตู้ถ่ายรูป</span>ที่เหมาะกับงานของคุณ
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-tiger-orange text-white font-medium rounded-full hover:bg-white hover:text-deep-space-blue transition-all duration-300 group whitespace-nowrap"
                        >
                            <span>ติดต่อเราวันนี้</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
