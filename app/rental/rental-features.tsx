"use client"

import { Sparkles, Users, Truck, Shield, Clock } from "lucide-react"

const features = [
    {
        icon: Sparkles,
        title: "ตู้ให้เลือกกว่า 50 รุ่น",
        description: "จากคลาสสิคไปจนถึงระบบ 360 องศา มีครบทุกสไตล์ให้เลือกตามธีมงาน"
    },
    {
        icon: Users,
        title: "ทีมงานมืออาชีพ",
        description: "พนักงานประจำตู้ช่วยดูแลและจัดการตลอดงาน ให้คุณผ่อนคลายมั่นใจ"
    },
    {
        icon: Truck,
        title: "ส่งและติดตั้งให้ฟรี",
        description: "บริการจัดส่ง ติดตั้ง และรื้อถอนตามสถานที่งาน ไม่มีค่าใช้จ่ายเพิ่มเติม"
    },
    {
        icon: Shield,
        title: "รับประกันคุณภาพ",
        description: "อุปกรณ์ทุกชิ้นผ่านการตรวจสอบก่อนส่ง พร้อมอุปกรณ์สำรองฉุกเฉิน"
    },
    {
        icon: Clock,
        title: "จองล่วงหน้าได้ตลอด",
        description: "จองได้ทุกวัน ตลอด 24 ชั่วโมง รองรับงานด่วนและงานจองล่วงหน้า"
    },
]

export function RentalFeatures() {
    return (
        <section className="py-20 lg:py-28 bg-white" aria-labelledby="rental-features-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 id="rental-features-heading" className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-tight mb-6">
                        ทำไมต้อง<span className="text-tiger-orange">เช่ากับเรา</span>
                    </h2>
                    <p className="text-base lg:text-lg text-deep-space-blue/60 leading-relaxed">
                        บริการครบวงจร จากผู้เชี่ยวชาญที่มีประสบการณ์กว่า 5,000 งาน
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-deep-space-blue/5 hover:-translate-y-1"
                        >
                            {/* Icon Container */}
                            <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6">
                                <div className="absolute inset-0 rounded-xl bg-tiger-orange/10 group-hover:bg-tiger-orange/20 transition-all duration-300" />
                                <feature.icon className="relative w-7 h-7 text-tiger-orange" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-deep-space-blue mb-3 tracking-tight">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-deep-space-blue/60 leading-relaxed">
                                {feature.description}
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
