"use client"

import { useEffect, useState } from "react"
import { CTA } from "@/components/CTA"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-background overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--sky-blue-light)_0%,_transparent_50%)] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Content - Centered Elegant Layout */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Small tagline */}
          <div
            className={`mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="text-sm font-medium text-deep-space-blue/50 uppercase tracking-[0.3em]">
              ประสบการณ์การถ่ายภาพที่แตกต่าง
            </span>
          </div>

          {/* Main headline - Elegant Serif */}
          <h1
            className={`font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-deep-space-blue tracking-tight leading-[1.05] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            รับผลิตตู้โฟโต้บูธ
            <br />
            <span className=" text-tiger-orange">พร้อมซอฟต์แวร์ระบบถ่ายภาพ</span>
          </h1>

          {/* Description */}
          <p
            className={`mt-10 text-lg md:text-xl text-deep-space-blue/60 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            เปลี่ยนพื้นที่ว่างให้เป็นรายได้ รับผลิตตู้โฟโต้บูธคุณภาพสูงและซอฟต์แวร์ใช้งานง่าย
          </p>

          {/* Thai text */}
          <p
            className={`mt-4 text-base text-deep-space-blue/40 font-thai leading-[1.8] transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Software & Structure ผลิตภายในประเทศไทยทั้งหมด
          </p>

          {/* CTA Component */}
          <CTA isVisible={isVisible} />
        </div>


      </div>
    </section>
  )
}
