"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Star } from "lucide-react"

const products = [
    {
        id: 1,
        src: "/models/images/product-08-768x768.webp",
        name: "MODEL 1",
        nameTh: "คลาสสิค บูธ",
        label: "PHOTOBOX",
        description: "ตู้ถ่ายรูปแบบคลาสสิค ดีไซน์เรียบหรู เหมาะสำหรับงานแต่งงานและงานทางการ",
        features: ["ใช้พื้นที่น้อย", "พิมพ์ได้ไม่จำกัด", "warp ตกแต่งตู้ได้", "เหมาะสำหรับงานอีเวนต์"],
    },
    {
        id: 2,
        src: "/models/images/product-09-768x768.webp",
        name: "PHOTOBOX MODEL 2",
        nameTh: "โฟโต้บูธ โมเดลที่2",
        label: "PHOTOBOOTH",
        description: "โฟโต้บูธสไตล์วินเทจร่วมสมัย",
        features: ["หน้าจอสัมผัส Full HD", "ผ้าม่านเลือกสีได้", "ไฟสตูดิโอ"],
    },
    {
        id: 3,
        src: "/models/images/product-10-768x768.webp",
        name: "PHOTOBOX MODEL 3",
        nameTh: "โฟโต้บูธ โมเดลที่3",
        label: "PHOTOBOOTH",
        description: "แพลตฟอร์มหมุน 360 องศา สร้างวิดีโอสุดเท่ที่ไวรัลได้ง่าย",
        features: ["วิดีโอ Slow-motion", "แชร์โซเชียลทันที", "พื้นที่กว้าง 1.2 ม."],
    },
    {
        id: 4,
        src: "/models/images/photobox-model5.png",
        name: "PHOTOBOX MODEL 4",
        nameTh: "โฟโต้บูธ โมเดลที่4",
        label: "PHOTOBOOTH",
        description: "ตู้ถ่ายรูปขนาดกะทัดรัด เคลื่อนย้ายง่าย เหมาะกับทุกขนาดงาน",
        features: ["น้ำหนักเบา", "ติดตั้งใน 15 นาที", "ประหยัดพื้นที่"],
    },
    {
        id: 5,
        src: "/models/images/photobox-model4.png",
        name: "PHOTOBOX MODEL 5",
        nameTh: "โฟโต้บูธ โมเดลที่5",
        label: "PHOTOBOOTH",
        description: "ดีไซน์ย้อนยุค สไตล์วินเทจ สร้างบรรยากาศพิเศษให้งานของคุณ",
        features: ["ฟิลเตอร์วินเทจ", "กรอบรูปคลาสสิค", "ม่านแดงหรูหรา"],
    },
    {
        id: 6,
        src: "/models/images/photobox-model3.png",
        name: "Camera 360",
        nameTh: "Camera 360",
        label: "PHOTOBOOTH",
        description: "กรอบไฟ LED เปลี่ยนสีได้ ปรับแต่งตามธีมงานได้อย่างอิสระ",
        features: ["RGB LED 16 ล้านสี", "รีโมทควบคุม", "เอฟเฟกต์เคลื่อนไหว"],
    },
    {
        id: 7,
        src: "/models/images/photobox-model2.png",
        name: "HIGH ANGLE PHOTOBOOTH",
        nameTh: "ตู้มุมสูง",
        label: "PHOTOBOOTH",
        description: "ชุดพรีเมียมครบเซ็ต รวมตู้ถ่ายรูป ไฟสตูดิโอ และอุปกรณ์ครบครัน",
        features: ["ชุดพร้อมใช้งาน", "ไฟสตูดิโอ Pro", "อุปกรณ์ Props ครบ"],
    },
]

export function ProductSection() {
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <section id="products" className="py-14 sm:py-16 bg-gradient-to-b from-sky-blue-light/20 via-white to-orange-50/30 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.015]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23023047' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-tiger-orange/10 to-orange-400/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-sky-blue-light/15 to-blue-400/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                {/* Header — ชิดซ้าย ขนาดเท่าหัวข้อบล็อก OEM ด้านบน */}
                <div className="mb-10">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-tiger-orange">Our Products</p>
                    <h2 className="mt-4 font-sans font-extrabold text-3xl sm:text-4xl text-deep-space-blue leading-tight">
                        แบบตู้ <span className="text-tiger-orange">Photo Booth</span> ยอดนิยมที่ลูกค้าสั่งทำมากที่สุด
                    </h2>
                    <p className="mt-3 leading-relaxed text-deep-space-blue/60 max-w-4xl">
                        รวมดีไซน์และทรงตู้ถ่ายรูปอัตโนมัติที่ได้รับความนิยม พร้อมบริการรับผลิตตู้ Photo Booth สั่งทำ
                        ปรับสี รูปทรง และฟังก์ชันให้เหมาะกับแบรนด์และพื้นที่ใช้งานของคุณ
                    </p>
                </div>

                {/* Bottom Grid - Remaining Products */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                    {products.slice(3).map((product, idx) => (
                        <div
                            key={product.id}
                            className="group relative bg-slate-200 hover:bg-orange-100/70 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(2,48,71,0.09)] hover:shadow-[0_18px_45px_rgba(251,133,0,0.3)] transition-all duration-500 hover:-translate-y-2"
                            onMouseEnter={() => setHoveredId(product.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="relative aspect-square">
                                <Image
                                    src={product.src}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    quality={75}
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-5 text-center border-t border-white/60">
                                <span className="text-tiger-orange text-[13.2px] font-medium uppercase tracking-[0.15em]">{product.label}</span>
                                <p className="mt-1 text-[12.6px] font-light text-slate-500">สามารถผลิตสั่งทำได้หลายรูปแบบ</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-6 sm:p-8 bg-deep-space-blue rounded-3xl">
                        <div className="text-center sm:text-left">
                            <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-1">
                                ต้องการคำแนะนำเพิ่มเติม?
                            </p>
                            <p className="text-white text-xl font-sans font-semibold">
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
