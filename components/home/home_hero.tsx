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
            className={`font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-space-blue tracking-tight leading-[1.15] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            ผู้นำบริการตู้โฟโต้บูธ ครบวงจร
            <br />
            <span className="inline-block bg-tiger-orange text-white px-4 py-2 rounded-xl mt-2">ให้เช่า ซื้อขาด และรับผลิต OEM</span>
          </h1>

          {/* Description - H2 */}
          <h2
            className={`mt-8 text-base md:text-lg text-deep-space-blue/70 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            ยกระดับงานแต่ง ปาร์ตี้ และงานอีเวนต์ด้วยตู้ถ่ายภาพดีไซน์พรีเมียม หรือเริ่มต้นธุรกิจสร้างรายได้ด้วยตู้โฟโต้บูธสเปคสูง ผลิตในไทย พร้อมซอฟต์แวร์และระบบรับชำระเงิน QR Code ครบจบในที่เดียว
          </h2>

          {/* Trust Badges */}
          <div
            className={`mt-6 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 delay-250 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {[
              '✓ ผลิตในไทย 100%',
              '✓ รับประกันโครงสร้าง 1 ปี',
              '✓ ฟรีอัปเดตซอฟต์แวร์',
              '✓ ซัพพอร์ต 24 ชม.',
            ].map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {/* Primary — orange, breathing glow + shimmer sweep */}
            <Link
              href="/rental"
              className="group relative inline-flex items-center gap-2.5 bg-tiger-orange hover:bg-tiger-orange/90 text-white font-bold px-9 py-4 text-base rounded-full transition-all duration-500 hover:scale-[1.06] active:scale-95 w-full sm:w-auto justify-center overflow-hidden animate-btn-orange-glow"
            >
              <span aria-hidden="true" className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-cta-shimmer pointer-events-none" />
              <span className="relative tracking-wide">เช่าตู้โฟโต้บูธ</span>
              <svg className="relative w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Secondary — navy, refined shadow lift */}
            <Link
              href="/product"
              className="group relative inline-flex items-center gap-2.5 bg-deep-space-blue text-white font-bold px-9 py-4 text-base rounded-full transition-all duration-500 shadow-[0_4px_16px_rgba(2,48,71,0.25)] hover:shadow-[0_8px_32px_rgba(2,48,71,0.4)] hover:bg-[#034a6e] hover:scale-[1.06] active:scale-95 w-full sm:w-auto justify-center overflow-hidden"
            >
              <span className="tracking-wide">ซื้อตู้โฟโต้บูธ</span>
              <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Tertiary — ghost, elegant border fill */}
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-transparent hover:bg-deep-space-blue/5 text-deep-space-blue font-semibold px-9 py-4 text-base rounded-full border-2 border-deep-space-blue/25 hover:border-deep-space-blue/60 transition-all duration-500 hover:scale-[1.04] active:scale-95 w-full sm:w-auto justify-center tracking-wide"
            >
              ปรึกษาเรา
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
