"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Star, ChevronRight } from "lucide-react"
import { products } from "@/data/products"
import { ProductDetailModal } from "@/app/product/product-modal"

export function RentalGrid() {
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    // Filter only rental products
    const rentalProducts = products.filter((p) => p.type.includes("rental"))

    return (
        <>
            <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-label="รายการตู้โฟโต้บูธให้เช่า">
                {/* Background decorations */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-tiger-orange/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-deep-space-blue/5 rounded-full blur-3xl" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    {/* Section header */}
                    <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.1] mb-6">
                            เลือกตู้โฟโต้บูธ<span className="text-tiger-orange">สำหรับเช่า</span>
                        </h2>
                        <p className="text-base lg:text-lg text-deep-space-blue/60 leading-relaxed">
                            ส่งตรงถึงงาน พร้อมทีมงานมืออาชีพ รับประกันคุณภาพทุกครั้ง
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
                        {rentalProducts.map((product) => (
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
                                        alt={`${product.nameTh} ${product.name} — ตู้โฟโต้บูธให้เช่า จาก IMAGEAUTOMAT`}
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
                        ))}
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
