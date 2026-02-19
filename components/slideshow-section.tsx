"use client"

import { useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// 🎯 วิธีใช้: เมื่อเพิ่มรูปใหม่ ให้เปลี่ยนแค่ตัวเลข MAX_IMAGES ด้านล่างนี้
const MAX_IMAGES = 24; // เปลี่ยนตัวเลขนี้เมื่อเพิ่มรูปใหม่ (เช่น มีรูปใหม่เป็น photobooth_25.webp ให้เปลี่ยนเป็น 25)

// Auto-generate image paths
const SLIDESHOW_IMAGES = Array.from({ length: MAX_IMAGES }, (_, i) =>
    `/slideshow/images/photobooth_${i + 1}.webp`
)

export function SlideshowSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
    const [hoveredButton, setHoveredButton] = useState<'prev' | 'next' | null>(null)

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'center',
            skipSnaps: false,
        },
        [Autoplay({ delay: 4000, stopOnInteraction: false }) as any]
    )

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section
            ref={sectionRef}
            id="slideshow"
            className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden"
        >
            {/* Subtle Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-space-blue/3 to-transparent pointer-events-none" />

            <motion.div
                className="mx-auto max-w-7xl px-6 lg:px-8 relative"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, staggerChildren: 0.15, delayChildren: 0.1 }}
            >
                <motion.div
                    className="max-w-4xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.span
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-tiger-orange uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.svg
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            animate={{ rotate: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                            <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                        </motion.svg>
                        Photobooth Structure
                    </motion.span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-deep-space-blue tracking-tight leading-[1.1] mb-4">
                        รับผลิต{' '}
                        <span
                            className="italic text-tiger-orange inline-block"
                            style={{ textShadow: '0 0 12px rgba(255,127,80,0.15)' }}
                        >
                            โครงสร้างโฟโต้บูธ
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-deep-space-blue font-medium mb-6 sm:mb-8" style={{ lineHeight: '1.4' }}>
                        Designed for stability
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-deep-space-blue/70 leading-relaxed max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
                        ออกแบบและผลิตตู้โฟโต้บูธครบวงจร แข็งแรง ทนทาน พร้อมติดตั้ง
                    </p>
                    
                    {/* CTA Button */}
                    <div className="mt-8">
                        <Link
                            href="/oem"
                            className="inline-flex items-center gap-2 bg-tiger-orange hover:bg-tiger-orange/90 text-white font-bold px-8 py-4 text-base rounded-full transition-all duration-300 shadow-lg shadow-tiger-orange/30 hover:shadow-xl hover:shadow-tiger-orange/50 hover:scale-105 active:scale-95"
                        >
                            <span className="tracking-wide">รับผลิตโครงสร้าง</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>

                {/* Embla Carousel Container */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-4 lg:gap-6">
                            {SLIDESHOW_IMAGES.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_85%] lg:flex-[0_0_70%]"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-xl shadow-deep-space-blue/10 group">
                                        {/* Subtle border effect */}
                                        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-tiger-orange/5 via-transparent to-deep-space-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                        <Image
                                            src={image}
                                            alt={`ผลงานตู้โฟโต้บูธ Photobooth Structure ผลิตภายในประเทศไทย แข็งแรงทนทาน - งานที่ ${index + 1}`}
                                            fill
                                            className="object-contain transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 70vw"
                                            quality={index === 0 ? 65 : 50}
                                            priority={index === 0}
                                            loading={index === 0 ? "eager" : "lazy"}
                                        />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-deep-space-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons with Enhanced Animations */}
                    <motion.button
                        onClick={scrollPrev}
                        onHoverStart={() => setHoveredButton('prev')}
                        onHoverEnd={() => setHoveredButton(null)}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-deep-space-blue rounded-full p-2.5 sm:p-3 md:p-4 shadow-lg shadow-deep-space-blue/15 focus:outline-none focus:ring-2 focus:ring-tiger-orange focus:ring-offset-2"
                        aria-label="Previous image"
                        whileHover={{
                            scale: 1.1,
                            rotate: -3,
                            boxShadow: "0 12px 30px rgba(25, 42, 86, 0.25)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <motion.svg
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                            animate={hoveredButton === 'prev' ? { x: [-1, 1, -1] } : {}}
                            transition={{ duration: 0.5, repeat: hoveredButton === 'prev' ? Infinity : 0 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </motion.svg>
                    </motion.button>

                    <motion.button
                        onClick={scrollNext}
                        onHoverStart={() => setHoveredButton('next')}
                        onHoverEnd={() => setHoveredButton(null)}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-deep-space-blue rounded-full p-2.5 sm:p-3 md:p-4 shadow-lg shadow-deep-space-blue/15 focus:outline-none focus:ring-2 focus:ring-tiger-orange focus:ring-offset-2"
                        aria-label="Next image"
                        whileHover={{
                            scale: 1.1,
                            rotate: 3,
                            boxShadow: "0 12px 30px rgba(25, 42, 86, 0.25)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <motion.svg
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                            animate={hoveredButton === 'next' ? { x: [-1, 1, -1] } : {}}
                            transition={{ duration: 0.5, repeat: hoveredButton === 'next' ? Infinity : 0 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </motion.svg>
                    </motion.button>
                </motion.div>

                {/* Decorative Auto Scroll Indicator */}
                <motion.div
                    className="mt-8 sm:mt-10 md:mt-12 flex justify-center gap-4 sm:gap-6 md:gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                >
                    <motion.div
                        className="flex items-center gap-2 text-xs sm:text-sm text-deep-space-blue/50"
                        animate={{ opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <motion.div
                            className="w-8 sm:w-10 md:w-12 h-px bg-gradient-to-r from-transparent via-tiger-orange to-transparent"
                            animate={{ scaleX: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <span className="uppercase tracking-wider sm:tracking-widest font-medium">Auto Scroll</span>
                        <motion.div
                            className="w-8 sm:w-10 md:w-12 h-px bg-gradient-to-r from-transparent via-tiger-orange to-transparent"
                            animate={{ scaleX: [1.2, 0.8, 1.2] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}
