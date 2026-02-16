"use client"

import { useRef } from "react"
import { Calendar, ShoppingCart, Factory, Cpu } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

const services = [
    {
        title: "เป็นเจ้าของตู้โฟโต้บูธ",
        description: "ลงทุนเริ่มต้น 50,000 บาท คืนทุนภายใน 6 เดือน",
        icon: ShoppingCart,
        link: "/product",
        stats: "ROI 200-300% ต่อปี",
        cta: "ดูรุ่นและราคา",
        gradient: "from-tiger-orange/20 to-tiger-orange/5",
        iconColor: "text-tiger-orange",
        hoverShadow: "hover:shadow-tiger-orange/20",
    },
    {
        title: "รับผลิต OEM/ODM",
        description: "ออกแบบและผลิตตามสเปคของคุณ MOQ 10 ตู้",
        icon: Factory,
        link: "/oem",
        stats: "500+ ตู้ผลิตต่อปี",
        cta: "ขอใบเสนอราคา",
        gradient: "from-deep-space-blue/20 to-deep-space-blue/5",
        iconColor: "text-deep-space-blue",
        hoverShadow: "hover:shadow-deep-space-blue/10",
    },
    {
        title: "เช่าตู้โฟโต้บูธ",
        description: "พร้อมทีมงานมืออาชีพ ราคาเริ่มต้น 3,000 บาท",
        icon: Calendar,
        link: "/rental",
        stats: "5,000+ งานที่ให้บริการ",
        cta: "ดูแพ็คเกจเช่า",
        gradient: "from-sky-blue-light/20 to-sky-blue-light/5",
        iconColor: "text-sky-blue-light",
        hoverShadow: "hover:shadow-sky-blue-light/20",
    },
    {
        title: "ซอฟต์แวร์ Imageland",
        description: "ระบบครบครัน AI Filter, Green Screen, Live Gallery",
        icon: Cpu,
        link: "/software",
        stats: "อัปเดตฟรีตลอดชีพ",
        cta: "ดูฟีเจอร์ทั้งหมด",
        gradient: "from-purple-500/20 to-purple-500/5",
        iconColor: "text-purple-500",
        hoverShadow: "hover:shadow-purple-500/20",
    },
]

export function HomeServicesSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

    return (
        <section
            ref={sectionRef}
            className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-sky-blue-light/10 via-white to-white"
            aria-label="บริการของเรา"
        >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-tiger-orange/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-space-blue/5 rounded-full blur-3xl" />
            
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-sm font-medium text-tiger-orange uppercase tracking-[0.3em] mb-4">
                            Our Services
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight mb-6">
                            เลือกบริการที่เหมาะกับคุณ
                        </h2>
                        <p className="text-base lg:text-lg text-deep-space-blue/60 leading-relaxed">
                            บริการครบวงจรสำหรับทุกความต้องการด้านโฟโต้บูธของคุณ
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <Link href={service.link}>
                                <div
                                    className={`relative h-full p-8 lg:p-10 rounded-3xl bg-white border border-gray-100 
                                    shadow-lg shadow-gray-200/50 ${service.hoverShadow} 
                                    hover:shadow-2xl hover:-translate-y-2 
                                    transition-all duration-500 overflow-hidden`}
                                >
                                    {/* Background gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    
                                    {/* Content */}
                                    <div className="relative">
                                        {/* Icon */}
                                        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 mb-6 group-hover:scale-110 transition-transform duration-500">
                                            <service.icon className={`w-8 h-8 md:w-10 md:h-10 ${service.iconColor}`} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-serif text-2xl lg:text-3xl text-deep-space-blue mb-3 group-hover:text-tiger-orange transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-base text-deep-space-blue/60 leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Stats Badge */}
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-6">
                                            <span className="text-sm font-medium text-deep-space-blue/70">
                                                {service.stats}
                                            </span>
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-tiger-orange font-semibold group-hover:gap-4 transition-all duration-300">
                                            <span>{service.cta}</span>
                                            <svg
                                                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
