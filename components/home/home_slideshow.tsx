"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ImageCarousel } from '@/components/image-carousel'

export function SlideshowSection() {
    return (
        <ImageCarousel
            id="slideshow"
            altPrefix="ผลงานตู้โฟโต้บูธ Photobooth Structure ผลิตภายในประเทศไทย แข็งแรงทนทาน - งานที่"
            header={
                <>
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
                    <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-deep-space-blue tracking-tight leading-[1.1] mb-4">
                        รับผลิต{' '}
                        <span
                            className="italic text-tiger-orange inline-block"
                            style={{ textShadow: '0 0 12px rgba(255,127,80,0.15)' }}
                        >
                            โครงสร้างโฟโต้บูธ
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-deep-space-blue font-medium mb-6 sm:mb-8" style={{ lineHeight: '1.4' }}>
                        แข็งแรง ทนทาน ออกแบบเพื่อใช้งานหนัก
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-deep-space-blue/70 leading-relaxed max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
                        ออกแบบและผลิตตู้โฟโต้บูธครบวงจร แข็งแรง ทนทาน พร้อมติดตั้ง
                    </p>
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
                </>
            }
        />
    )
}
