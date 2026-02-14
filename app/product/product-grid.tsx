"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowRight, Star, ChevronRight, CalendarDays, Package } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { products, tabs, type ProductType } from "@/data/products"
import { catalogProducts } from "@/data/catalogs"
import { ProductDetailModal } from "./product-modal"

export function ProductGrid() {
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
    const [hoveredId, setHoveredId] = useState<number | null>(null)
    const [activeTab, setActiveTab] = useState<ProductType>("rental")
    const [clickKey, setClickKey] = useState(0)
    const [showIdlePulse, setShowIdlePulse] = useState(true)

    const filteredProducts = products.filter((p) => p.type.includes(activeTab))

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
        <>
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

            {/* Product Detail Modal */}
            <ProductDetailModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </>
    )
}
