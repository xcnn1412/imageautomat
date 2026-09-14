"use client"

import { FileText, Paintbrush, Factory, CheckCircle, Truck, Wrench, Package } from "lucide-react"

const steps = [
    {
        icon: FileText,
        step: "01",
        title: "ปรึกษาความต้องการ",
        description: "พูดคุยกับทีมงานเพื่อประเมินความต้องการและงบประมาณ"
    },
    {
        icon: Paintbrush,
        step: "02",
        title: "ออกแบบและเสนอราคา",
        description: "ออกแบบตามสเปคและเสนอใบเสนอราคาพร้อมไทม์ไลน์"
    },
    {
        icon: Factory,
        step: "03",
        title: "ผลิตและควบคุมคุณภาพ",
        description: "เริ่มกระบวนการผลิตพร้อมควบคุมคุณภาพทุกขั้นตอน"
    },
    {
        icon: CheckCircle,
        step: "04",
        title: "ตรวจสอบก่อนส่ง",
        description: "ทดสอบและตรวจสอบคุณภาพก่อนส่งมอบทุกครั้ง"
    },
    {
        icon: Truck,
        step: "05",
        title: "จัดส่งและติดตั้ง",
        description: "จัดส่งถึงมือคุณพร้อมคู่มือการใช้งานและอบรมทีมงาน"
    },
    {
        icon: Wrench,
        step: "06",
        title: "บริการหลังการขาย",
        description: "รับประกันสินค้าและบริการซ่อมบำรุงตลอดการใช้งาน"
    },
]

export function OemProcess() {
    return (
        <section id="process" className="py-20 lg:py-28 bg-gray-50/50" aria-labelledby="oem-process-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 id="oem-process-heading" className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-tight mb-6">
                        ขั้นตอน<span className="text-tiger-orange">การผลิต</span>
                    </h2>
                    <p className="text-base lg:text-lg text-deep-space-blue/60 leading-relaxed">
                        กระบวนการผลิตที่โปร่งใส ตั้งแต่เริ่มต้นจนถึงส่งมอบ
                    </p>
                </div>

                {/* Process Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-deep-space-blue/5 hover:-translate-y-1"
                        >
                            {/* Step Number Badge */}
                            <div className="absolute -top-4 -right-4">
                                <div className="w-12 h-12 rounded-full bg-tiger-orange text-white font-bold text-lg flex items-center justify-center shadow-lg shadow-tiger-orange/30">
                                    {step.step}
                                </div>
                            </div>

                            {/* Icon */}
                            <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6">
                                <div className="absolute inset-0 rounded-xl bg-deep-space-blue/5 group-hover:bg-tiger-orange/10 transition-all duration-300" />
                                <step.icon className="relative w-7 h-7 text-deep-space-blue group-hover:text-tiger-orange transition-colors duration-300" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-deep-space-blue mb-3 tracking-tight">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-deep-space-blue/60 leading-relaxed">
                                {step.description}
                            </p>

                            {/* Connecting Line (not on last row) */}
                            {idx < steps.length - 3 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-deep-space-blue/10" />
                            )}
                        </div>
                    ))}
                </div>

                {/* MOQ Notice */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-tiger-orange/10 text-deep-space-blue border border-tiger-orange/20">
                        <Package className="w-5 h-5 text-tiger-orange" />
                        <span className="font-medium">MOQ (Minimum Order Quantity): <span className="font-bold text-tiger-orange">10 ตู้</span></span>
                    </div>
                </div>
            </div>
        </section>
    )
}
