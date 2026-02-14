"use client"

import Image from "next/image"
import { ArrowRight, Star, X } from "lucide-react"
import { products } from "@/data/products"

interface ProductDetailModalProps {
    product: typeof products[0] | null
    onClose: () => void
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
    if (!product) return null

    return (
        <>
            <div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                onClick={onClose}
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
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-deep-space-blue hover:bg-tiger-orange hover:text-white transition-all duration-300 shadow-lg"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="flex flex-col lg:flex-row">
                        {/* Image side */}
                        <div className="relative w-full lg:w-1/2 aspect-square bg-gradient-to-br from-gray-50 to-gray-100">
                            <Image
                                src={product.src}
                                alt={`${product.nameTh} ${product.name} — รายละเอียดตู้ถ่ายรูป Photobooth`}
                                fill
                                className="object-contain p-8"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                quality={90}
                            />
                            {product.badge && (
                                <span className={`absolute top-6 left-6 px-4 py-2 ${product.badgeColor} text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg`}>
                                    {product.badge}
                                </span>
                            )}
                        </div>

                        {/* Content side */}
                        <div className="flex-1 p-8 lg:p-10">
                            <span className="text-tiger-orange text-xs font-medium uppercase tracking-[0.2em]">
                                {product.label}
                            </span>
                            <h3 className="font-serif text-3xl text-deep-space-blue mt-2 mb-1">
                                {product.name}
                            </h3>
                            <p className="text-deep-space-blue/50 text-lg mb-4">{product.nameTh}</p>
                            <p className="text-deep-space-blue/70 leading-relaxed mb-8">
                                {product.longDescription}
                            </p>

                            {/* Features */}
                            <div className="mb-8">
                                <h4 className="text-sm font-bold text-deep-space-blue uppercase tracking-wider mb-4">คุณสมบัติเด่น</h4>
                                <ul className="space-y-3">
                                    {product.features.map((feature, idx) => (
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
                                    {Object.entries(product.specs).map(([key, value]) => (
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
        </>
    )
}
