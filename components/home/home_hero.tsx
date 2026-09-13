"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Play, Settings, CalendarDays, BarChart3, Code2 } from "lucide-react"

const features = [
  { icon: Settings, label: "ผลิตโครงสร้างพร้อมใช้งาน", accent: true },
  { icon: CalendarDays, label: "เช่าตู้ถ่ายรูปสแกนจ่ายได้ ระยะสั้น", accent: false },
  { icon: BarChart3, label: "เพิ่มยอดขายด้วยการวางตู้แบ่งเปอร์เซ็นต์รายได้", accent: true },
  { icon: Code2, label: "Custom Software ระบบถ่ายภาพเป็นของคุณเอง", accent: false },
]

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
    <section className="relative bg-deep-space-blue overflow-hidden">
      {/* Background wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,#04456a_0%,#023047_45%,#011c2b_100%)] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[620px] h-[620px] bg-tiger-orange/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative tagline */}
      {/* ponytail: วางระดับ section (กว้างเต็มจอ) ให้ไปอยู่ขอบขวาบน พ้นกรอบวิดีโอที่ถูกดันเข้าด้วย xl:pr-[190px] */}
      <div className="absolute right-[6vw] top-[max(18%,96px)] w-[14.8vw] xl:w-[190px] z-20 rotate-[-8deg] text-center pointer-events-none select-none">
        <p
          className="text-[2.34vw] xl:text-[30px] font-normal leading-[1.4] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
          style={{ fontFamily: "var(--font-playpen-thai), cursive" }}
        >
          ทุกช่วงเวลา
          <br />
          สร้างโอกาส
          <br />
          ให้ธุรกิจคุณ
        </p>
        <svg viewBox="0 0 160 20" className="w-[11.7vw] xl:w-[150px] h-[1.6vw] xl:h-5 mt-1 mx-auto" fill="none" aria-hidden="true">
          <path d="M4 14C40 4 110 2 156 8" stroke="#fb8500" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[45fr_55fr] gap-[5vw] xl:gap-16 items-center xl:min-h-[85vh] pt-[max(5vw,80px)] pb-[5vw] xl:pt-24 xl:pb-24">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-left space-y-[1.6vw] xl:space-y-5"
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-[0.6vw] xl:gap-2 px-[1.25vw] py-[0.6vw] xl:px-4 xl:py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-sm">
              <span className="w-[0.63vw] h-[0.63vw] xl:w-2 xl:h-2 bg-tiger-orange rounded-full animate-pulse" />
              <span className="text-[1.1vw] xl:text-sm font-semibold text-white/90">Premium Photo Booth Solutions</span>
            </div>

            {/* Wordmark + Headline */}
            {/* ponytail: ขนาดเป็น vw ให้ทุกบรรทัดอยู่บรรทัดเดียวทุกจอ (คอลัมน์ซ้าย = ครึ่งกริดบน lg+) */}
            <h1 className="font-sans font-extrabold whitespace-nowrap tracking-tight leading-[1.35] space-y-1">
              <span className="block text-[4.06vw] xl:text-[52px] text-white">
                IMAGE<span className="text-tiger-orange">AUTOMAT</span>
              </span>
              <span className="block text-[3.28vw] xl:text-[42px] text-tiger-orange">
                ผู้นำตู้โฟโต้บูธครบวงจร
              </span>
              <span className="block text-[2.66vw] xl:text-[34px] font-bold text-white/85">
                พร้อมสร้างรายได้ให้ธุรกิจคุณ
              </span>
            </h1>

            {/* Feature rows */}
            <ul className="space-y-[1.1vw] xl:space-y-3.5">
              {features.map(({ icon: Icon, label, accent }) => (
                <li key={label} className="flex items-center gap-[1.25vw] xl:gap-4">
                  <span
                    className={`w-[3.75vw] h-[3.75vw] xl:w-12 xl:h-12 shrink-0 rounded-full flex items-center justify-center ${
                      accent ? "bg-tiger-orange text-white" : "bg-white text-deep-space-blue"
                    }`}
                  >
                    <Icon className="w-[1.9vw] h-[1.9vw] xl:w-6 xl:h-6" />
                  </span>
                  <span className="text-[1.4vw] xl:text-lg text-white/85 text-balance">{label}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-nowrap items-center gap-[1vw] xl:gap-3 pt-[0.6vw] xl:pt-2">
              <Link
                href="#contact"
                className="group inline-flex shrink-0 whitespace-nowrap items-center gap-[0.5vw] xl:gap-2 rounded-full bg-white px-[1.7vw] py-[0.86vw] xl:px-5 xl:py-3 text-[1.1vw] xl:text-[15px] font-bold text-deep-space-blue transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                ขอคำปรึกษาและใบเสนอราคา
                <ArrowRight className="w-[1.25vw] h-[1.25vw] xl:w-4 xl:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://lin.ee/OfAit9I"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 whitespace-nowrap items-center gap-[0.5vw] xl:gap-2 rounded-full bg-tiger-orange px-[1.7vw] py-[0.86vw] xl:px-5 xl:py-3 text-[1.1vw] xl:text-[15px] font-bold text-white transition-all duration-300 hover:bg-tiger-orange/90 hover:shadow-lg hover:shadow-tiger-orange/25"
              >
                สอบถามรายละเอียด
                <ArrowRight className="w-[1.25vw] h-[1.25vw] xl:w-4 xl:h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-end pr-[12.1vw] xl:pr-[155px]"
          >
            <div className="relative w-full max-w-lg -translate-x-[20%] translate-y-[5%]">

              {/* Decorations */}
              {/* ponytail: วงกลมเกรเดียนต์ + แท่นวาง = div ล้วน (ไม่มีรูป/ไม่มี lib) วางก่อนกรอบวิดีโอจึงอยู่ด้านหลังเอง */}
              <div className="absolute -top-[18%] -right-[45%] w-[130%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(251,133,0,0.5)_0%,rgba(251,133,0,0.14)_45%,transparent_70%)] blur-2xl pointer-events-none" />
              <div className="absolute top-[25%] -left-[40%] w-[95%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(33,158,188,0.45)_0%,rgba(33,158,188,0.1)_50%,transparent_72%)] blur-2xl pointer-events-none" />
              <div className="hidden xl:block absolute -bottom-10 -left-[12%] -right-[88%] h-28 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.09)_45%,transparent_75%)] pointer-events-none" />

              {/* Video Frame */}
              <div className="relative aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 ring-1 ring-deep-space-blue/10 bg-slate-900">

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

              {/* ponytail: <xl วางใต้วิดีโอ, xl+ ลอยไปมุมขวาล่างข้างวิดีโอ (ไฟล์ PNG พื้นหลังโปร่งอยู่แล้ว) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute bottom-4 -right-[78%] w-[84%] z-20 drop-shadow-2xl"
              >
                <Image
                  src="/images/photobooth-kiosk-v4.png"
                  alt="ตู้โฟโต้บูธ FOTOAUTOMAT"
                  width={709}
                  height={912}
                  className="w-full h-auto"
                />
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
