"use client"

import { Palette, Cpu, Package, Headphones } from "lucide-react"

const services = [
    {
        icon: Palette,
        title: "OEM - ผลิตตามแบรนด์คุณ",
        description: "ผลิตตู้โฟโต้บูธติดโลโก้และแบรนด์ของคุณ ใช้สเปคและดีไซน์ที่เราพัฒนาแล้ว เหมาะสำหรับผู้ที่ต้องการเริ่มธุรกิจเร็ว"
    },
    {
        icon: Cpu,
        title: "ODM - ออกแบบตามสเปค",
        description: "ออกแบบและผลิตตู้โฟโต้บูธตามสเปคและความต้องการของคุณทั้งหมด เหมาะสำหรับธุรกิจที่ต้องการความเป็นเอกลักษณ์"
    },
    {
        icon: Package,
        title: "White Label - พร้อมขาย",
        description: "ตู้โฟโต้บูธพร้อมขายที่ผลิตจากโรงงาน รองรับการติดแบรนด์ของคุณเอง ส่งได้ทันที"
    },
    {
        icon: Headphones,
        title: "After-Sales Support",
        description: "รับประกันสินค้า พร้อมบริการซ่อมบำรุงและอะไหล่ตลอดอายุการใช้งาน มีทีมซัพพอร์ตตลอด 24/7"
    },
]

export function OemServices() {
    return (
        <section className="py-20 lg:py-28 bg-white" aria-labelledby="oem-services-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 id="oem-services-heading" className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-tight mb-6">
                        บริการ<span className="text-tiger-orange">ของเรา</span>
                    </h2>
                    <p className="text-base lg:text-lg text-deep-space-blue/60 leading-relaxed">
                        ครบวงจรตั้งแต่การออกแบบไปจนถึงการผลิตและบริการหลังการขาย
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-deep-space-blue/5 hover:-translate-y-1"
                        >
                            {/* Icon Container */}
                            <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6">
                                <div className="absolute inset-0 rounded-xl bg-tiger-orange/10 group-hover:bg-tiger-orange/20 transition-all duration-300" />
                                <service.icon className="relative w-7 h-7 text-tiger-orange" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-deep-space-blue mb-3 tracking-tight">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-deep-space-blue/60 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-tiger-orange/20 transition-all duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
