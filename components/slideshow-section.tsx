"use client"

import { useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const SLIDESHOW_IMAGES = [
    '/slideshow/photobooth_1.webp',
    '/slideshow/photobooth_2.webp',
    '/slideshow/photobooth_3.webp',
    '/slideshow/photobooth_4.webp',
    '/slideshow/photobooth_5.webp',
    '/slideshow/photobooth_6.webp',
    '/slideshow/photobooth_7.webp',
    '/slideshow/photobooth_8.webp',
    '/slideshow/photobooth_9.webp',
    '/slideshow/photobooth_10.webp',
    '/slideshow/photobooth_11.webp',
    '/slideshow/photobooth_12.webp',
    '/slideshow/photobooth_13.webp',
    '/slideshow/photobooth_14.webp',
    '/slideshow/photobooth_15.webp',
    '/slideshow/photobooth_16.webp',
    '/slideshow/photobooth_17.webp',
    '/slideshow/photobooth_18.webp',
    '/slideshow/photobooth_19.webp',
]

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
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    )

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    const carouselVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3
            }
        }
    }

    return (
        <section 
            ref={sectionRef}
            id="slideshow" 
            className="py-8 lg:py-12 bg-gradient-to-b from-background to-deep-space-blue/5 relative overflow-hidden"
        >
            {/* Animated Background Decoration */}
            <motion.div 
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,127,80,0.03),transparent_50%)]"
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div 
                className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(25,42,86,0.03),transparent_50%)]"
                animate={{
                    scale: [1.05, 1, 1.05],
                    opacity: [0.5, 0.3, 0.5]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4
                }}
            />

            <motion.div 
                className="mx-auto max-w-7xl px-6 lg:px-8 relative"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div 
                    className="max-w-3xl mb-6 lg:mb-8"
                    variants={itemVariants}
                >
                    <motion.span 
                        className="inline-flex items-center gap-2 text-sm font-semibold text-tiger-orange uppercase tracking-[0.3em] mb-6"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.svg 
                            className="w-4 h-4" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                            animate={{ rotate: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                            <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                        </motion.svg>
                        Gallery
                    </motion.span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-space-blue tracking-tight leading-[1.1]">
                        Precision{' '}
                        <motion.span 
                            className="italic text-tiger-orange inline-block"
                            animate={{ 
                                textShadow: [
                                    "0 0 0px rgba(255,127,80,0)",
                                    "0 0 20px rgba(255,127,80,0.3)",
                                    "0 0 0px rgba(255,127,80,0)"
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            in every structure
                        </motion.span>{' '}
                        Designed for stability
                    </h2>
                    <p className="mt-8 text-lg text-deep-space-blue/70 leading-relaxed max-w-2xl">
                    ออกแบบและผลิตตู้โฟโต้บูธครบวงจร แข็งแรง ทนทาน พร้อมติดตั้ง
                    </p>
                </motion.div>

                {/* Embla Carousel Container */}
                <motion.div 
                    className="relative"
                    variants={carouselVariants}
                >
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-4 lg:gap-6">
                            {SLIDESHOW_IMAGES.map((image, index) => (
                                <motion.div 
                                    key={index} 
                                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_85%] lg:flex-[0_0_70%]"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl shadow-deep-space-blue/20 border border-white/20 group">
                                        {/* Gradient border effect */}
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-tiger-orange/20 opacity-50 pointer-events-none" />
                                        {/* Inner glow */}
                                        <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] pointer-events-none" />
                                        <Image
                                            src={image}
                                            alt={`ผลงานตู้โฟโต้บูธ Photobooth Structure ผลิตภายในประเทศไทย แข็งแรงทนทาน - งานที่ ${index + 1}`}
                                            fill
                                            className="object-contain transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 70vw"
                                            priority={index === 0}
                                        />
                                        {/* Subtle gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-deep-space-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-deep-space-blue rounded-full p-4 shadow-xl shadow-deep-space-blue/20 focus:outline-none focus:ring-2 focus:ring-tiger-orange focus:ring-offset-2 border border-deep-space-blue/10"
                        aria-label="Previous image"
                        whileHover={{ 
                            scale: 1.15,
                            rotate: -5,
                            backgroundColor: "rgba(255, 255, 255, 1)",
                            boxShadow: "0 20px 40px rgba(25, 42, 86, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <motion.svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth={2.5} 
                            viewBox="0 0 24 24"
                            animate={hoveredButton === 'prev' ? { x: [-2, 2, -2] } : {}}
                            transition={{ duration: 0.5, repeat: hoveredButton === 'prev' ? Infinity : 0 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </motion.svg>
                    </motion.button>

                    <motion.button
                        onClick={scrollNext}
                        onHoverStart={() => setHoveredButton('next')}
                        onHoverEnd={() => setHoveredButton(null)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-deep-space-blue rounded-full p-4 shadow-xl shadow-deep-space-blue/20 focus:outline-none focus:ring-2 focus:ring-tiger-orange focus:ring-offset-2 border border-deep-space-blue/10"
                        aria-label="Next image"
                        whileHover={{ 
                            scale: 1.15,
                            rotate: 5,
                            backgroundColor: "rgba(255, 255, 255, 1)",
                            boxShadow: "0 20px 40px rgba(25, 42, 86, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <motion.svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth={2.5} 
                            viewBox="0 0 24 24"
                            animate={hoveredButton === 'next' ? { x: [-2, 2, -2] } : {}}
                            transition={{ duration: 0.5, repeat: hoveredButton === 'next' ? Infinity : 0 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </motion.svg>
                    </motion.button>
                </motion.div>

                {/* Decorative Elements with Animation */}
                <motion.div 
                    className="mt-12 flex justify-center gap-8"
                    variants={itemVariants}
                >
                    <motion.div 
                        className="flex items-center gap-2 text-sm text-deep-space-blue/50"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <motion.div 
                            className="w-12 h-px bg-gradient-to-r from-transparent via-tiger-orange to-transparent"
                            animate={{ scaleX: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <span className="uppercase tracking-widest font-medium">Auto Scroll</span>
                        <motion.div 
                            className="w-12 h-px bg-gradient-to-r from-transparent via-tiger-orange to-transparent"
                            animate={{ scaleX: [1.2, 0.8, 1.2] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}
