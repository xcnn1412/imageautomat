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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh] py-20 lg:py-24">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left space-y-8"
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-space-blue/5 border border-deep-space-blue/10">
              <span className="w-2 h-2 bg-tiger-orange rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-deep-space-blue">Premium Photo Booth Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-deep-space-blue tracking-tight leading-[1.15]">
              <span className="whitespace-nowrap">ผู้นำตู้โฟโต้บูธ</span> <span className="whitespace-nowrap">ครบวงจร</span>
              <br />
              <span className="inline-block bg-tiger-orange text-white px-6 py-3 rounded-2xl mt-3 text-3xl sm:text-4xl lg:text-5xl whitespace-nowrap">
                ให้เช่า ซื้อขาด และผลิต OEM
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-deep-space-blue/60 leading-relaxed max-w-xl">
              ยกระดับงานอีเวนต์ให้ปัง หรือสร้างธุรกิจใหม่รายได้สูง ด้วยตู้ถ่ายภาพคุณภาพผลิตในไทย พร้อมระบบซอฟต์แวร์สุดล้ำ จบครบในที่เดียว
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
                <span className="text-green-600 font-medium text-sm">✓ ผลิตในไทย 100%</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
                <span className="text-green-600 font-medium text-sm">✓ รับประกันโครงสร้าง 1 ปี</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
                <span className="text-green-600 font-medium text-sm">✓ ฟรีอัปเดตซอฟต์แวร์</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
                <span className="text-green-600 font-medium text-sm">✓ ซัพพอร์ต 24 ชม.</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/rental"
                className="group relative inline-flex items-center justify-center gap-3 bg-tiger-orange hover:bg-tiger-orange/90 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-tiger-orange/25 overflow-hidden"
              >
                <span className="relative z-10">เช่าตู้โฟโต้บูธ</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>

              <Link
                href="/product"
                className="group inline-flex items-center justify-center gap-3 bg-deep-space-blue hover:bg-deep-space-blue/90 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-deep-space-blue/25"
              >
                <span>ซื้อตู้โฟโต้บูธ</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-transparent hover:bg-deep-space-blue/5 text-deep-space-blue font-semibold px-8 py-4 rounded-full border-2 border-deep-space-blue/20 hover:border-deep-space-blue transition-all duration-300"
              >
                <span>ปรึกษาเรา</span>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-tiger-orange">50,000฿+</span>
                <span className="text-xs sm:text-sm text-deep-space-blue/60 mt-1">เริ่มต้น</span>
              </div>
              <div className="w-px h-12 bg-deep-space-blue/10" />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-tiger-orange">ROI 200-300%</span>
                <span className="text-xs sm:text-sm text-deep-space-blue/60 mt-1">ต่อปี</span>
              </div>
              <div className="w-px h-12 bg-deep-space-blue/10" />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-tiger-orange">100%</span>
                <span className="text-xs sm:text-sm text-deep-space-blue/60 mt-1">ผลิตในไทย</span>
              </div>
            </div>

            {/* Secondary Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm pt-2">
              <Link href="/rental" className="text-deep-space-blue/60 hover:text-tiger-orange transition-colors font-medium">
                บริการเช่า
              </Link>
              <span className="text-deep-space-blue/20">•</span>
              <Link href="/oem" className="text-deep-space-blue/60 hover:text-tiger-orange transition-colors font-medium">
                รับผลิต OEM
              </Link>
              <span className="text-deep-space-blue/20">•</span>
              <Link href="/software" className="text-deep-space-blue/60 hover:text-tiger-orange transition-colors font-medium">
                ซอฟต์แวร์ Imageland
              </Link>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main Visual Container */}
            <div className="relative aspect-video max-w-2xl ml-auto">
              {/* Decorative Elements - Behind video */}
              <div className="absolute -top-8 -right-8 w-80 h-80 bg-tiger-orange/8 rounded-3xl blur-2xl -z-10" />
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-sky-blue-light/8 rounded-3xl blur-2xl -z-10" />
              
              {/* Central Video Container */}
              <div className="relative z-10 rounded-3xl overflow-hidden bg-deep-space-blue/5 border border-deep-space-blue/10 shadow-2xl">
                {heroVideos.map((videoSrc, index) => (
                  <video
                    key={videoSrc}
                    src={videoSrc}
                    className={`w-full h-full object-contain bg-gradient-to-br from-slate-50 to-slate-100 transition-opacity duration-1000 ${
                      index === currentVideoIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                    }`}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ))}
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-deep-space-blue/10 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-tiger-orange/10 flex items-center justify-center">
                    <span className="text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-xs text-deep-space-blue/60">อัปเดตฟรี</p>
                    <p className="text-sm font-bold text-deep-space-blue">ตลอดสัญญา</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-deep-space-blue/10 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                  <div>
                    <p className="text-xs text-deep-space-blue/60">ROI</p>
                    <p className="text-sm font-bold text-deep-space-blue">200-300%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
