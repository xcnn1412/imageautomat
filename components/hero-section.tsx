"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

// LINE Icon Component
const LineIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
)

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--sky-blue-light)_0%,_transparent_50%)] opacity-20" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 lg:pt-40">
        {/* Main Content - Centered Elegant Layout */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Small tagline */}
          <div 
            className={`mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="text-sm font-medium text-deep-space-blue/50 uppercase tracking-[0.3em]">
              Premium Photobooth Experiences
            </span>
          </div>
          
          {/* Main headline - Elegant Serif */}
          <h1 
            className={`font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-deep-space-blue tracking-tight leading-[1.05] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Capturing moments
            <br />
            <span className="italic text-tiger-orange">worth remembering</span>
          </h1>
          
          {/* Description */}
          <p 
            className={`mt-10 text-lg md:text-xl text-deep-space-blue/60 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Transform your events with cutting-edge photobooth technology. 
            Premium experiences for weddings, corporate events, and brand activations.
          </p>
          
          {/* Thai text */}
          <p 
            className={`mt-4 text-base text-deep-space-blue/40 font-thai leading-[1.8] transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            สร้างความทรงจำที่ไม่มีวันลืมด้วยเทคโนโลยีถ่ายภาพระดับพรีเมียม
          </p>
          
          {/* CTA Button - LINE Add Friend */}
          <div 
            className={`mt-12 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <a
              href="https://line.me/ti/p/~@imageautomat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#06C755] hover:bg-[#05b04b] text-white font-bold px-10 py-6 text-base rounded-full transition-all duration-300 shadow-lg shadow-[#06C755]/30 hover:shadow-xl hover:shadow-[#06C755]/50 hover:scale-105 active:scale-95"
            >
              <LineIcon />
              <span className="tracking-wide">ADD FRIEND</span>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div 
          className={`mt-20 lg:mt-28 relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-t-[2rem] lg:rounded-t-[3rem] overflow-hidden">
            <Image
              src="/images/photobooth-hero.jpg"
              alt="Premium IMAGEAUTOMAT photobooth experience"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          
          {/* Floating stats - Positioned at bottom */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-6 md:gap-12">
            <div className="bg-white rounded-2xl px-8 py-5 shadow-xl shadow-deep-space-blue/10 text-center">
              <span className="block text-3xl md:text-4xl font-serif font-bold text-deep-space-blue">500+</span>
              <span className="text-sm text-deep-space-blue/50 mt-1">Events</span>
            </div>
            <div className="bg-tiger-orange rounded-2xl px-8 py-5 shadow-xl shadow-tiger-orange/30 text-center">
              <span className="block text-3xl md:text-4xl font-serif font-bold text-white">50K+</span>
              <span className="text-sm text-white/80 mt-1">Photos</span>
            </div>
            <div className="hidden md:block bg-white rounded-2xl px-8 py-5 shadow-xl shadow-deep-space-blue/10 text-center">
              <span className="block text-3xl md:text-4xl font-serif font-bold text-deep-space-blue">100%</span>
              <span className="text-sm text-deep-space-blue/50 mt-1">Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
