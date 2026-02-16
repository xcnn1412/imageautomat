"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-sky-blue-light/30 via-white to-tiger-orange/10 overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tiger-orange)_0%,_transparent_50%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--sky-blue-light)_0%,_transparent_50%)] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Content - Centered Elegant Layout */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Small tagline */}
          <div
            className={`mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-tiger-orange/20 to-sky-blue-light/20 border border-tiger-orange/30 text-sm font-medium text-deep-space-blue uppercase tracking-[0.3em] shadow-lg shadow-tiger-orange/10">
              ตู้โฟโต้บูธคุณภาพพรีเมียม
            </span>
          </div>

          {/* Main headline - Elegant Serif */}
          <h1
            className={`font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-deep-space-blue tracking-tight leading-[1.05] transition-all duration-1000 delay-200 drop-shadow-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            เป็นเจ้าของตู้
            <br />
            <span className="bg-gradient-to-r from-tiger-orange via-orange-500 to-tiger-orange bg-clip-text text-transparent animate-gradient">โฟโต้บูธ</span>ของคุณเอง
          </h1>

          {/* Service tags */}
          <div
            className={`mt-8 flex flex-wrap items-center justify-center gap-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {[
              { text: 'ผลิตในไทย', color: 'from-green-500/20 to-emerald-500/20 border-green-500/30' },
              { text: 'รับประกัน 1 ปี', color: 'from-blue-500/20 to-sky-500/20 border-blue-500/30' },
              { text: 'ฟรีอัปเดต', color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30' },
              { text: 'บริการหลังขาย', color: 'from-orange-500/20 to-tiger-orange/20 border-orange-500/30' }
            ].map((tag, index) => (
              <span 
                key={tag.text}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${tag.color} text-deep-space-blue text-sm font-medium border shadow-md hover:scale-105 transition-transform duration-300`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {tag.text}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className={`mt-10 text-lg md:text-xl text-deep-space-blue/60 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            ลงทุนครั้งเดียว สร้างรายได้ระยะยาว<br className="hidden md:block" />
            ตู้คุณภาพพรีเมียม อัปเดตฟรีตลอดชีพ พร้อมทีมซัพพอร์ตมืออาชีพ
          </p>

          {/* CTAs */}
          <div
            className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Link
              href="/product"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-tiger-orange to-orange-600 hover:from-orange-600 hover:to-tiger-orange text-white font-bold px-8 py-4 text-base rounded-full transition-all duration-300 shadow-xl shadow-tiger-orange/40 hover:shadow-2xl hover:shadow-tiger-orange/60 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center">
              <span className="tracking-wide">ดูรุ่นและราคา</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-white to-gray-50 hover:from-sky-blue-light/10 hover:to-white text-deep-space-blue font-bold px-8 py-4 text-base rounded-full border-2 border-deep-space-blue/20 hover:border-sky-blue-light transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl">
              <span className="tracking-wide">ปรึกษาฟรี</span>
            </Link>
          </div>

          {/* Secondary links */}
          <div
            className={`mt-8 flex items-center justify-center gap-6 text-sm transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Link href="/rental" className="text-deep-space-blue/60 hover:text-tiger-orange transition-colors underline underline-offset-4">
              บริการเช่า
            </Link>
            <span className="text-deep-space-blue/20">•</span>
            <Link href="/oem" className="text-deep-space-blue/60 hover:text-tiger-orange transition-colors underline underline-offset-4">
              รับผลิต OEM
            </Link>
            <span className="text-deep-space-blue/20">•</span>
            <Link href="/software" className="text-deep-space-blue/60 hover:text-tiger-orange transition-colors underline underline-offset-4">
              ซอฟต์แวร์ Imageland
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
