"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Users, Clock, Award } from "lucide-react"

const stats = [
    { icon: Award, value: "10+", label: "ปีแห่งประสบการณ์", color: "text-tiger-orange" },
    { icon: Calendar, value: "5,000+", label: "งานที่ให้บริการ", color: "text-sky-blue-light" },
    { icon: Users, value: "1,000+", label: "ลูกค้าที่ไว้วางใจ", color: "text-deep-space-blue" },
    { icon: Clock, value: "24/7", label: "บริการตลอดเวลา", color: "text-purple-500" },
]

export function HomeStatsSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

    return (
        <section
            ref={sectionRef}
            className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-deep-space-blue/5 via-deep-space-blue/10 to-deep-space-blue/5"
            aria-label="สถิติและความน่าเชื่อถือ"
        >
            {/* Decorative elements */}
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-tiger-orange/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-sky-blue-light/15 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23023047' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight mb-4">
                        ความเชื่อมั่นจากลูกค้า
                    </h2>
                    <p className="text-base lg:text-lg text-deep-space-blue/60">
                        ประสบการณ์กว่า 10 ปีในวงการโฟโต้บูธ
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } },
                    }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="relative text-center group"
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.9 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                                },
                            }}
                        >
                            {/* Icon Container */}
                            <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl mb-4 mx-auto">
                                {/* Glow effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 blur-lg group-hover:blur-xl transition-all duration-500" />
                                {/* Icon background */}
                                <div className="relative w-full h-full rounded-2xl bg-white border border-gray-100 flex items-center justify-center group-hover:border-tiger-orange/30 group-hover:shadow-lg transition-all duration-500">
                                    <stat.icon className={`w-8 h-8 md:w-10 md:h-10 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                                </div>
                            </div>

                            {/* Value */}
                            <motion.div
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-deep-space-blue mb-2 tracking-tight"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { duration: 0.8, delay: 0.2 },
                                    },
                                }}
                            >
                                <span className="bg-gradient-to-b from-deep-space-blue to-deep-space-blue/70 bg-clip-text text-transparent">
                                    {stat.value}
                                </span>
                            </motion.div>

                            {/* Label */}
                            <div className="text-sm md:text-base text-deep-space-blue/60 font-medium px-2">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
