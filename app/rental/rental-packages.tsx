"use client"

import { Check, Clock, Package, Star } from "lucide-react"

const packages = [
    {
        name: "แพ็คเกจ Basic",
        price: "3,000",
        duration: "4 ชั่วโมง",
        icon: Package,
        description: "เหมาะสำหรับงานเล็กๆ ที่อบอุ่น",
        features: [
            "ตู้ถ่ายรูปคลาสสิค 1 ตู้",
            "พนักงานดูแล 1 คน",
            "กระดาษพิมพ์รูป 200 แผ่น",
            "พร็อพถ่ายรูป 10 ชิ้น",
            "ส่งและติดตั้งให้ฟรี",
        ],
        highlighted: false,
    },
    {
        name: "แพ็คเกจ Premium",
        price: "6,000",
        duration: "6 ชั่วโมง",
        icon: Star,
        description: "ยอดนิยมสำหรับงานแต่งและงานใหญ่",
        features: [
            "เลือกตู้พรีเมียมได้ทุกรุ่น",
            "พนักงานดูแล 2 คน",
            "กระดาษพิมพ์รูป 500 แผ่น",
            "พร็อพถ่ายรูปพิเศษ 20 ชิ้น",
            "ออกแบบกรอบรูปตามธีมฟรี",
            "ส่งไฟล์ภาพ Hi-Res ทั้งหมด",
        ],
        highlighted: true,
    },
    {
        name: "แพ็คเกจ VIP",
        price: "12,000",
        duration: "งานเต็มวัน",
        icon: Clock,
        description: "ครบเซ็ตสำหรับงานระดับองค์กร",
        features: [
            "ตู้ 360° + ตู้คลาสสิค",
            "ทีมงาน 3 คน",
            "กระดาษพิมพ์รูปไม่จำกัด",
            "พร็อพครบชุด + ฉากหลัง",
            "กรอบรูปพิเศษ + AR Filter",
            "Live Slideshow + Social Share",
            "วิดีโอ Highlight ความยาว 3 นาที",
        ],
        highlighted: false,
    },
]

export function RentalPackages() {
    return (
        <section id="packages" className="py-20 lg:py-28 bg-gray-50/50" aria-labelledby="rental-packages-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 id="rental-packages-heading" className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-tight mb-6">
                        แพ็คเกจ<span className="text-tiger-orange">ให้เช่า</span>
                    </h2>
                    <p className="text-base lg:text-lg text-deep-space-blue/60 leading-relaxed">
                        เลือกแพ็คเกจที่เหมาะกับงานของคุณ ปรับแต่งได้ตามต้องการ
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, idx) => (
                        <div
                            key={idx}
                            className={`group relative bg-white rounded-3xl p-8 transition-all duration-300 ${pkg.highlighted
                                ? "ring-2 ring-tiger-orange shadow-2xl shadow-tiger-orange/20 scale-105 lg:scale-110"
                                : "shadow-lg shadow-deep-space-blue/5 hover:shadow-xl hover:shadow-deep-space-blue/10 hover:-translate-y-1"
                                }`}
                        >
                            {/* Popular Badge */}
                            {pkg.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="bg-tiger-orange text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                                        🔥 ยอดนิยม
                                    </div>
                                </div>
                            )}

                            {/* Icon */}
                            <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6">
                                <div className={`absolute inset-0 rounded-2xl ${pkg.highlighted ? "bg-tiger-orange/20" : "bg-deep-space-blue/5"}`} />
                                <pkg.icon className={`relative w-8 h-8 ${pkg.highlighted ? "text-tiger-orange" : "text-deep-space-blue"}`} />
                            </div>

                            {/* Package Name */}
                            <h3 className="text-2xl font-bold text-deep-space-blue mb-2 tracking-tight">
                                {pkg.name}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-deep-space-blue/60 mb-6">
                                {pkg.description}
                            </p>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className={`text-4xl font-extrabold tracking-tight ${pkg.highlighted ? "text-tiger-orange" : "text-deep-space-blue"}`}>
                                        ฿{pkg.price}
                                    </span>
                                    <span className="text-deep-space-blue/50 text-sm font-medium">/ {pkg.duration}</span>
                                </div>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, featureIdx) => (
                                    <li key={featureIdx} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.highlighted ? "text-tiger-orange" : "text-green-600"}`} />
                                        <span className="text-sm text-deep-space-blue/80 leading-relaxed">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <a
                                href="https://lin.ee/Q5DSE1r"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group/btn inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 text-sm rounded-full transition-all duration-300 w-full ${pkg.highlighted
                                    ? "bg-tiger-orange hover:bg-tiger-orange/90 text-white shadow-lg shadow-tiger-orange/30 hover:shadow-xl hover:shadow-tiger-orange/50"
                                    : "bg-deep-space-blue hover:bg-deep-space-blue/90 text-white shadow-md hover:shadow-lg"
                                    } hover:scale-105 active:scale-95`}
                            >
                                <span className="tracking-wide">จองแพ็คเกจนี้</span>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Custom Package Note */}
                <div className="mt-12 text-center">
                    <p className="text-deep-space-blue/60 mb-4">
                        💡 ต้องการปรับแต่งแพ็คเกจเฉพาะ?
                    </p>
                    <a
                        href="https://lin.ee/Q5DSE1r"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-tiger-orange font-bold hover:underline"
                    >
                        <span>ติดต่อเราเพื่อขอใบเสนอราคา</span>
                        <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
