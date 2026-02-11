"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowRight, ArrowLeft, Star, Sparkles, X, ChevronRight, CalendarDays, Package } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { products, tabs, stats, type ProductType } from "@/data/products"
import { catalogProducts } from "@/data/catalogs"

export function ProductPageContent() {
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
    const [hoveredId, setHoveredId] = useState<number | null>(null)
    const [activeTab, setActiveTab] = useState<ProductType>("rental")
    const [clickKey, setClickKey] = useState(0)
    const [showIdlePulse, setShowIdlePulse] = useState(true)

    const filteredProducts = products.filter((p) => p.type.includes(activeTab))
    const activeTabData = tabs.find((t) => t.id === activeTab)!

    // Stop idle pulse after user interacts or after a timeout
    useEffect(() => {
        const timer = setTimeout(() => setShowIdlePulse(false), 6000)
        return () => clearTimeout(timer)
    }, [])

    function handleSelect(option: ProductType) {
        if (option !== activeTab) {
            setActiveTab(option)
            setClickKey((k) => k + 1)
            setShowIdlePulse(false)
        }
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Navigation Bar - Shared from homepage */}
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" aria-label="หัวข้อหน้าสินค้าตู้ถ่ายรูป">
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
                            สินค้าตู้ถ่ายรูป Photobooth
                        </h1>
                        <p className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-12">
                            ตู้ถ่ายรูปและ Photobooth คุณภาพสูง ออกแบบเพื่อสร้างประสบการณ์สุดพิเศษ <br className="hidden md:block" />
                            กว่า 50 รุ่นให้เลือก ทั้งเช่าและซื้อ เหมาะกับทุกรูปแบบงานอีเวนต์
                        </p>

                        {/* Stats */}
                        <motion.div
                            className="flex items-center justify-center gap-6 md:gap-10 lg:gap-14"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.2 } },
                            }}
                        >
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    className="relative text-center group"
                                    variants={{
                                        hidden: { opacity: 0, y: 30, scale: 0.9 },
                                        visible: {
                                            opacity: 1, y: 0, scale: 1,
                                            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                                        },
                                    }}
                                >
                                    {/* Icon container with glow */}
                                    <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl mb-4 mx-auto">
                                        {/* Glow background */}
                                        <div className="absolute inset-0 rounded-2xl bg-tiger-orange/15 blur-xl group-hover:bg-tiger-orange/25 transition-all duration-500" />
                                        {/* Icon bg */}
                                        <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.03] border border-white/15 flex items-center justify-center backdrop-blur-sm group-hover:border-tiger-orange/30 transition-all duration-500">
                                            <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-tiger-orange drop-shadow-[0_0_8px_rgba(251,133,0,0.4)] group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                    </div>

                                    {/* Value */}
                                    <motion.div
                                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight"
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: {
                                                opacity: 1,
                                                transition: { duration: 0.8, delay: 0.3 },
                                            },
                                        }}
                                    >
                                        <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                                            {stat.value}
                                        </span>
                                    </motion.div>

                                    {/* Label */}
                                    <div className="text-xs md:text-sm text-white/50 font-medium tracking-wide">
                                        {stat.label}
                                    </div>

                                    {/* Divider (not on last item) */}
                                    {idx < stats.length - 1 && (
                                        <div className="absolute -right-3 md:-right-5 lg:-right-7 top-1/2 -translate-y-1/2 w-px h-16 md:h-20 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
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
            <section className="py-20 lg:py-32 bg-white relative overflow-hidden" aria-label="รายการสินค้าตู้ถ่ายรูป">
                {/* Background decorations */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-tiger-orange/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-deep-space-blue/5 rounded-full blur-3xl" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">

                    {/* ===== Luxury Toggle Switch ===== */}
                    <div className="flex justify-center mb-14 lg:mb-20">
                        <div className="relative inline-flex items-center justify-center">
                            {/* Idle attention pulse rings */}
                            <AnimatePresence>
                                {showIdlePulse && (
                                    <>
                                        <motion.span
                                            className="pointer-events-none absolute inset-0 rounded-full border-2 border-tiger-orange/30"
                                            animate={{
                                                scale: [1, 1.12, 1],
                                                opacity: [0.5, 0, 0.5],
                                            }}
                                            transition={{
                                                type: "tween",
                                                duration: 1.8,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                            exit={{ opacity: 0 }}
                                        />
                                        <motion.span
                                            className="pointer-events-none absolute inset-0 rounded-full border border-tiger-orange/15"
                                            animate={{
                                                scale: [1, 1.22, 1],
                                                opacity: [0.3, 0, 0.3],
                                            }}
                                            transition={{
                                                type: "tween",
                                                duration: 1.8,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 0.3,
                                            }}
                                            exit={{ opacity: 0 }}
                                        />
                                    </>
                                )}
                            </AnimatePresence>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: showIdlePulse ? [1, 1.02, 1] : 1,
                                }}
                                transition={{
                                    opacity: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                                    y: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                                    scale: showIdlePulse
                                        ? { type: "tween", duration: 1.8, repeat: Infinity, ease: "easeInOut" }
                                        : { type: "tween", duration: 0.2 },
                                }}
                                className="relative inline-flex items-center gap-1.5 rounded-full border-2 border-deep-space-blue/15 bg-white p-2.5 shadow-[0_4px_24px_rgba(2,48,71,0.08)]"
                            >
                                {/* Ripple burst on switch */}
                                <AnimatePresence>
                                    <motion.span
                                        key={`ripple-${clickKey}`}
                                        className="pointer-events-none absolute inset-0 rounded-full border-2 border-tiger-orange/40"
                                        initial={{ scale: 1, opacity: 0.6 }}
                                        animate={{ scale: 1.25, opacity: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
                                    />
                                </AnimatePresence>

                                {/* Rent Button */}
                                <motion.button
                                    type="button"
                                    onClick={() => handleSelect("rental")}
                                    whileHover={{ scale: activeTab === "rental" ? 1 : 1.06 }}
                                    whileTap={{ scale: 0.92 }}
                                    animate={{
                                        backgroundColor: activeTab === "rental" ? "#FB8500" : "transparent",
                                        borderColor: activeTab === "rental" ? "#FB8500" : "transparent",
                                        boxShadow: activeTab === "rental"
                                            ? "0 4px 14px rgba(251,133,0,0.35)"
                                            : "0 0px 0px rgba(251,133,0,0)",
                                    }}
                                    transition={{
                                        type: "tween",
                                        duration: 0.35,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className={cn(
                                        "relative flex items-center gap-3 overflow-hidden rounded-full border px-9 md:px-12 py-6 md:py-7 text-base font-medium tracking-wide",
                                        activeTab === "rental"
                                            ? "text-white"
                                            : "text-deep-space-blue/40 hover:text-deep-space-blue/70"
                                    )}
                                >
                                    {/* Inner glow on active */}
                                    <AnimatePresence>
                                        {activeTab === "rental" && (
                                            <motion.span
                                                className="pointer-events-none absolute inset-0 rounded-full bg-white/10"
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 1.2 }}
                                                transition={{ type: "tween", duration: 0.3 }}
                                            />
                                        )}
                                    </AnimatePresence>

                                    <motion.span
                                        animate={{
                                            rotate: activeTab === "rental" ? [0, -12, 12, -6, 0] : 0,
                                            scale: activeTab === "rental" ? [1, 1.2, 1] : 1,
                                        }}
                                        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                                    >
                                        <CalendarDays className="h-[22px] w-[22px]" strokeWidth={1.8} />
                                    </motion.span>

                                    <motion.span
                                        className="relative font-serif text-lg md:text-xl font-bold"
                                        animate={{
                                            y: activeTab === "rental" ? [4, 0] : 0,
                                            opacity: activeTab === "rental" ? [0.4, 1] : 1,
                                        }}
                                        transition={{ type: "tween", duration: 0.3, delay: 0.05 }}
                                    >
                                        {"เช่า"}
                                        {/* Underline sweep */}
                                        <AnimatePresence>
                                            {activeTab === "rental" && (
                                                <motion.span
                                                    className="absolute -bottom-0.5 left-0 h-[1.5px] bg-white/60"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "100%" }}
                                                    exit={{ width: 0, opacity: 0 }}
                                                    transition={{ type: "tween", duration: 0.35, delay: 0.15, ease: "easeOut" }}
                                                />
                                            )}
                                        </AnimatePresence>
                                    </motion.span>
                                </motion.button>

                                {/* Divider */}
                                <motion.div
                                    className="h-10 w-px bg-deep-space-blue/10"
                                    animate={{ opacity: 0.5, scaleY: 0.6 }}
                                    transition={{ type: "tween", duration: 0.2 }}
                                />

                                {/* Buy Button */}
                                <motion.button
                                    type="button"
                                    onClick={() => handleSelect("buy")}
                                    whileHover={{ scale: activeTab === "buy" ? 1 : 1.06 }}
                                    whileTap={{ scale: 0.92 }}
                                    animate={{
                                        backgroundColor: activeTab === "buy" ? "#FB8500" : "transparent",
                                        borderColor: activeTab === "buy" ? "#FB8500" : "transparent",
                                        boxShadow: activeTab === "buy"
                                            ? "0 4px 14px rgba(251,133,0,0.35)"
                                            : "0 0px 0px rgba(251,133,0,0)",
                                    }}
                                    transition={{
                                        type: "tween",
                                        duration: 0.35,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className={cn(
                                        "relative flex items-center gap-3 overflow-hidden rounded-full border px-9 md:px-12 py-6 md:py-7 text-base font-medium tracking-wide",
                                        activeTab === "buy"
                                            ? "text-white"
                                            : "text-deep-space-blue/40 hover:text-deep-space-blue/70"
                                    )}
                                >
                                    {/* Inner glow on active */}
                                    <AnimatePresence>
                                        {activeTab === "buy" && (
                                            <motion.span
                                                className="pointer-events-none absolute inset-0 rounded-full bg-white/10"
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 1.2 }}
                                                transition={{ type: "tween", duration: 0.3 }}
                                            />
                                        )}
                                    </AnimatePresence>

                                    <motion.span
                                        animate={{
                                            rotate: activeTab === "buy" ? [0, 12, -12, 6, 0] : 0,
                                            scale: activeTab === "buy" ? [1, 1.2, 1] : 1,
                                        }}
                                        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                                    >
                                        <Package className="h-[22px] w-[22px]" strokeWidth={1.8} />
                                    </motion.span>

                                    <motion.span
                                        className="relative font-serif text-lg md:text-xl font-bold"
                                        animate={{
                                            y: activeTab === "buy" ? [4, 0] : 0,
                                            opacity: activeTab === "buy" ? [0.4, 1] : 1,
                                        }}
                                        transition={{ type: "tween", duration: 0.3, delay: 0.05 }}
                                    >
                                        {"ซื้อ"}
                                        {/* Underline sweep */}
                                        <AnimatePresence>
                                            {activeTab === "buy" && (
                                                <motion.span
                                                    className="absolute -bottom-0.5 left-0 h-[1.5px] bg-white/60"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "100%" }}
                                                    exit={{ width: 0, opacity: 0 }}
                                                    transition={{ type: "tween", duration: 0.35, delay: 0.15, ease: "easeOut" }}
                                                />
                                            )}
                                        </AnimatePresence>
                                    </motion.span>
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Section header - dynamic per tab */}
                    <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.1]">
                            {activeTab === "rental" ? (
                                <>เช่าตู้ถ่ายรูปที่ <span className="italic text-tiger-orange">ใช่</span><br className="hidden md:block" /> สำหรับงานของคุณ</>
                            ) : (
                                <>เป็นเจ้าของ<span className="italic text-tiger-orange">ตู้ถ่ายรูป</span><br className="hidden md:block" /> คุณภาพระดับพรีเมียม</>
                            )}
                        </h2>
                        <p className="mt-6 text-lg text-deep-space-blue/50 leading-relaxed max-w-2xl mx-auto">
                            {activeTab === "rental"
                                ? "บริการเช่าตู้ถ่ายรูปพร้อมทีมงานมืออาชีพ เหมาะสำหรับงานอีเวนต์ งานแต่งงาน และงานเลี้ยงสังสรรค์"
                                : "ซื้อตู้ถ่ายรูปคุณภาพสูงเป็นของตัวเอง พร้อมรับประกันและบริการหลังการขาย"
                            }
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
                        {activeTab === "rental" ? (
                            // Rental Tab - Products from products.ts
                            filteredProducts.map((product) => (
                                <article
                                    key={product.id}
                                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/80"
                                    onMouseEnter={() => setHoveredId(product.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    role="listitem"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100/50 overflow-hidden">
                                        <Image
                                            src={product.src}
                                            alt={`${product.nameTh} ${product.name} — ตู้ถ่ายรูป Photobooth จาก IMAGEAUTOMAT`}
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
                                </article>
                            ))
                        ) : (
                            // Buy Tab - Catalogs from catalogs.ts
                            catalogProducts.map((product) => (
                                <article
                                    key={product.id}
                                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/80"
                                    onMouseEnter={() => setHoveredId(product.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    role="listitem"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100/50 overflow-hidden">
                                        <Image
                                            src={product.src}
                                            alt={`${product.nameTh} ${product.name} — สินค้าขายจาก IMAGEAUTOMAT`}
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
                                </article>
                            ))
                        )}
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
            <Footer />

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
                                    alt={`${selectedProduct.nameTh} ${selectedProduct.name} — รายละเอียดตู้ถ่ายรูป Photobooth`}
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
