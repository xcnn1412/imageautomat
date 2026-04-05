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
            α╣Çα╕¢α╣çα╕Öα╣Çα╕êα╣ëα╕▓α╕éα╕¡α╕çα╕òα╕╣α╣ë
            <br />
            <span className="inline-block bg-tiger-orange text-white px-4 py-2 rounded-xl mt-2">α╣éα╕ƒα╣éα╕òα╣ëα╕Üα╕╣α╕ÿ</span>
            <br />
            α╕éα╕¡α╕çα╕äα╕╕α╕ôα╣Çα╕¡α╕ç
          </h1>

          {/* Description - One-liner Benefit */}
          <p
            className={`mt-8 text-lg md:text-xl text-deep-space-blue/70 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            α╕Ñα╕çα╕ùα╕╕α╕Öα╕äα╕úα╕▒α╣ëα╕çα╣Çα╕öα╕╡α╕óα╕º α╕¬α╕úα╣ëα╕▓α╕çα╕úα╕▓α╕óα╣äα╕öα╣ëα╕úα╕░α╕óα╕░α╕óα╕▓α╕º ΓÇö α╕äα╕╖α╕Öα╕ùα╕╕α╕Öα╕áα╕▓α╕óα╣âα╕Ö 6-12 α╣Çα╕öα╕╖α╕¡α╕Ö
          </p>

          {/* Feature Pills */}
          <div
            className={`mt-6 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 delay-250 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {[
              { text: 'α╕£α╕Ñα╕┤α╕òα╣âα╕Öα╣äα╕ùα╕ó', bg: 'bg-green-50', text_color: 'text-green-700' },
              { text: 'α╕úα╕▒α╕Üα╕¢α╕úα╕░α╕üα╕▒α╕Ö 1 α╕¢α╕╡', bg: 'bg-blue-50', text_color: 'text-blue-700' },
              { text: 'α╕ƒα╕úα╕╡α╕¡α╕▒α╕¢α╣Çα╕öα╕ò', bg: 'bg-purple-50', text_color: 'text-purple-700' },
              { text: 'α╕Üα╕úα╕┤α╕üα╕▓α╕úα╕½α╕Ñα╕▒α╕çα╕éα╕▓α╕ó', bg: 'bg-orange-50', text_color: 'text-orange-700' }
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
              <span className="tracking-wide">α╕öα╕╣α╕úα╕╕α╣êα╕Öα╣üα╕Ñα╕░α╕úα╕▓α╕äα╕▓</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-deep-space-blue font-semibold px-8 py-4 text-base rounded-full border-2 border-deep-space-blue/20 hover:border-deep-space-blue/40 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center">
              <span className="tracking-wide">α╕¢α╕úα╕╢α╕üα╕⌐α╕▓α╕ƒα╕úα╕╡</span>
            </Link>
          </div>

          {/* Mini Stats Row */}
          <div  
            className={`mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-deep-space-blue/60 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="flex items-center gap-2">
              <span className="text-tiger-orange font-bold">50,000α╕┐+</span>
              <span>α╣Çα╕úα╕┤α╣êα╕íα╕òα╣ëα╕Ö</span>
            </div>
            <span className="text-deep-space-blue/20">ΓÇó</span>
            <div className="flex items-center gap-2">
              <span className="text-tiger-orange font-bold">ROI 200-300%</span>
              <span>α╕òα╣êα╕¡α╕¢α╕╡</span>
            </div>
            <span className="text-deep-space-blue/20">ΓÇó</span>
            <div className="flex items-center gap-2">
              <span className="text-tiger-orange font-bold">100%</span>
              <span>α╕£α╕Ñα╕┤α╕òα╣âα╕Öα╣äα╕ùα╕ó</span>
            </div>
          </div>

          {/* Service Links */}
          <div
            className={`mt-8 flex items-center justify-center gap-6 text-sm transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Link href="/rental" className="text-deep-space-blue/60 hover:text-deep-space-blue transition-colors">
              α╕Üα╕úα╕┤α╕üα╕▓α╕úα╣Çα╕èα╣êα╕▓
            </Link>
            <span className="text-deep-space-blue/20">ΓÇó</span>
            <Link href="/oem" className="text-deep-space-blue/60 hover:text-deep-space-blue transition-colors">
              α╕úα╕▒α╕Üα╕£α╕Ñα╕┤α╕ò OEM
            </Link>
            <span className="text-deep-space-blue/20">ΓÇó</span>
            <Link href="/software" className="text-deep-space-blue/60 hover:text-deep-space-blue transition-colors">
              α╕ïα╕¡α╕ƒα╕òα╣îα╣üα╕ºα╕úα╣î Imageland
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
