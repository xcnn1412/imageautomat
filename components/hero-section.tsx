"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-white overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Main Content - Centered Bold Layout */}
        <div className="text-center">
          
          {/* Main headline - Bold Sans-Serif with Orange Highlight */}
          <h1
            className={`font-sans font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-deep-space-blue tracking-tight leading-[1.1] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            เป็นเจ้าของตู้
            <br />
            <span className="inline-block bg-tiger-orange text-white px-4 py-2 rounded-xl mt-2">โฟโต้บูธ</span>
            <br />
            ของคุณเอง
          </h1>

          {/* Description - One-liner Benefit */}
          <p
            className={`mt-8 text-lg md:text-xl text-deep-space-blue/70 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            ลงทุนครั้งเดียว สร้างรายได้ระยะยาว — คืนทุนภายใน 6-12 เดือน
          </p>

          {/* Feature Pills */}
          <div
            className={`mt-6 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 delay-250 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {[
              { text: 'ผลิตในไทย', bg: 'bg-green-50', text_color: 'text-green-700' },
              { text: 'รับประกัน 1 ปี', bg: 'bg-blue-50', text_color: 'text-blue-700' },
              { text: 'ฟรีอัปเดต', bg: 'bg-purple-50', text_color: 'text-purple-700' },
              { text: 'บริการหลังขาย', bg: 'bg-orange-50', text_color: 'text-orange-700' }
            ].map((badge) => (
              <span 
                key={badge.text}
                className={`px-4 py-2 rounded-full ${badge.bg} ${badge.text_color} text-sm font-medium`}
              >
                {badge.text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Link
              href="/product"
              className="group relative inline-flex items-center gap-2 bg-deep-space-blue hover:bg-deep-space-blue/90 text-white font-bold px-8 py-4 text-base rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto justify-center">
              <span className="tracking-wide">ดูรุ่นและราคา</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-deep-space-blue font-semibold px-8 py-4 text-base rounded-full border-2 border-deep-space-blue/20 hover:border-deep-space-blue/40 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center">
              <span className="tracking-wide">ปรึกษาฟรี</span>
            </Link>
          </div>

          {/* Mini Stats Row */}
          <div  
            className={`mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-deep-space-blue/60 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="flex items-center gap-2">
              <span className="text-tiger-orange font-bold">50,000฿+</span>
              <span>เริ่มต้น</span>
            </div>
            <span className="text-deep-space-blue/20">•</span>
            <div className="flex items-center gap-2">
              <span className="text-tiger-orange font-bold">ROI 200-300%</span>
              <span>ต่อปี</span>
            </div>
            <span className="text-deep-space-blue/20">•</span>
            <div className="flex items-center gap-2">
              <span className="text-tiger-orange font-bold">100%</span>
              <span>ผลิตในไทย</span>
            </div>
          </div>

          {/* Service Links */}
          <div
            className={`mt-8 flex items-center justify-center gap-6 text-sm transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Link href="/rental" className="text-deep-space-blue/60 hover:text-deep-space-blue transition-colors">
              บริการเช่า
            </Link>
            <span className="text-deep-space-blue/20">•</span>
            <Link href="/oem" className="text-deep-space-blue/60 hover:text-deep-space-blue transition-colors">
              รับผลิต OEM
            </Link>
            <span className="text-deep-space-blue/20">•</span>
            <Link href="/software" className="text-deep-space-blue/60 hover:text-deep-space-blue transition-colors">
              ซอฟต์แวร์ Imageland
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
