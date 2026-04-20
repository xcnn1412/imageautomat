"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const heroVideos = [
    "/slideshow/videos/frame_event_1.mp4",
    "/slideshow/videos/frame_event_2.mp4",
    "/slideshow/videos/frame_event_3.mp4",
    "/slideshow/videos/frame_event_4.mp4",
    "/slideshow/videos/frame_event_5.mp4",
    "/slideshow/videos/frame_event_6.mp4",
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length)
    }, 5000) // Change video every 5 seconds

    return () => clearInterval(interval)
  }, [heroVideos.length])

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-blue-light/5 via-white to-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tiger-orange/3 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[85vh] py-16 lg:py-24">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left space-y-5"
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-space-blue/5 border border-deep-space-blue/10">
              <span className="w-2 h-2 bg-tiger-orange rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-deep-space-blue">Premium Photo Booth Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-6xl text-deep-space-blue tracking-tight leading-[1.15]">
              <span className="whitespace-nowrap">ผู้นำตู้โฟโต้บูธ</span> <span className="whitespace-nowrap">ครบวงจร</span>
              <br />
              <span className="inline-block bg-tiger-orange text-white px-6 py-3 rounded-2xl mt-3 text-3xl sm:text-4xl lg:text-5xl whitespace-nowrap">
                ให้เช่า ซื้อขาด และผลิต OEM
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-deep-space-blue/60 leading-relaxed max-w-xl">
              ตู้ถ่ายภาพคุณภาพผลิตในไทย พร้อมซอฟต์แวร์สุดล้ำ — เช่างาน ซื้อลงทุน หรือ OEM จบครบในที่เดียว
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/product"
                className="group relative inline-flex items-center justify-center gap-3 bg-tiger-orange hover:bg-tiger-orange/90 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-tiger-orange/25 overflow-hidden"
              >
                <span className="relative z-10">ซื้อตู้โฟโต้บูธ</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>

              <Link
                href="/rental"
                className="group inline-flex items-center justify-center gap-3 bg-deep-space-blue hover:bg-deep-space-blue/90 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-deep-space-blue/25"
              >
                <span>เช่าตู้โฟโต้บูธ</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* LINE CTA */}
            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm text-deep-space-blue/60 hover:text-tiger-orange transition-colors font-medium"
              >
                <span>หรือสอบถามผ่าน LINE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
                <span className="text-green-600 font-medium text-xs sm:text-sm">✓ ผลิตในไทย 100%</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
                <span className="text-green-600 font-medium text-xs sm:text-sm">✓ รับประกัน 1 ปี</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
                <span className="text-green-600 font-medium text-xs sm:text-sm">✓ ฟรีอัปเดตซอฟต์แวร์</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
                <span className="text-green-600 font-medium text-xs sm:text-sm">✓ ซัพพอร์ต 24 ชม.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">

              {/* Glow decorations */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-tiger-orange/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-sky-blue-light/10 rounded-full blur-3xl pointer-events-none" />

              {/* Video Frame */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 ring-1 ring-deep-space-blue/10 bg-slate-900">

                {/* Active video with fade-in */}
                {heroVideos.map((videoSrc, index) =>
                  index === currentVideoIndex ? (
                    <motion.video
                      key={videoSrc}
                      src={videoSrc}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                  ) : null
                )}

                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />

                {/* Slide indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-20">
                  {heroVideos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentVideoIndex(i)}
                      aria-label={`วิดีโอที่ ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-400 ${
                        i === currentVideoIndex
                          ? "bg-white w-6"
                          : "bg-white/40 w-1.5 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating card — bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 16 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-4 py-3 shadow-xl border border-deep-space-blue/8 z-30 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <span className="text-base">✓</span>
                </div>
                <div>
                  <p className="text-[11px] text-deep-space-blue/50 leading-none mb-0.5">อัปเดตซอฟต์แวร์</p>
                  <p className="text-sm font-bold text-deep-space-blue leading-none">ฟรีตลอดชีพ</p>
                </div>
              </motion.div>

              {/* Floating card — top right */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -16 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -top-5 -right-5 bg-white rounded-2xl px-4 py-3 shadow-xl border border-deep-space-blue/8 z-30 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-tiger-orange/10 flex items-center justify-center shrink-0">
                  <span className="text-base">⚡</span>
                </div>
                <div>
                  <p className="text-[11px] text-deep-space-blue/50 leading-none mb-0.5">ROI ต่อปี</p>
                  <p className="text-sm font-bold text-deep-space-blue leading-none">200–300%</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
