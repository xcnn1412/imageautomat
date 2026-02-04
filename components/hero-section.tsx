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

          {/* CTA Button - LINE Add Friend with Premium Motion */}
          <div
            className={`mt-12 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <a
              href="https://line.me/ti/p/~@imageautomat"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-[#06C755] hover:bg-[#05b04b] text-white font-bold px-10 py-6 text-base rounded-full transition-all duration-300 shadow-lg shadow-[#06C755]/30 hover:shadow-2xl hover:shadow-[#06C755]/60 hover:scale-105 active:scale-95 animate-subtle-bounce overflow-hidden"
            >
              {/* Animated glow ring */}
              <span className="absolute inset-0 rounded-full animate-pulse-glow" />

              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />

              {/* LINE Icon with wiggle animation */}
              <span className="relative z-10 transition-transform duration-300 group-hover:animate-wiggle">
                <LineIcon />
              </span>

              {/* Text with slight lift on hover */}
              <span className="relative z-10 tracking-wide transition-transform duration-300 group-hover:-translate-y-0.5">
                ขอราคาพิเศษ
              </span>
            </a>
          </div>

          {/* Phone CTA Section */}
          <div
            className={`mt-8 flex flex-col items-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {/* Divider with text */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-deep-space-blue/10" />
              <span className="text-sm text-deep-space-blue/40 font-medium tracking-wider uppercase">
                หรือโทรหาเรา
              </span>
              <span className="w-12 h-px bg-deep-space-blue/10" />
            </div>

            {/* Phone Numbers - Elegant Cards */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { number: "065 646 6414", tel: "0656466414" },
                { number: "063 594 4429", tel: "0635944429" },
                { number: "062 424 9936", tel: "0624249936" },
              ].map((phone, index) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="group relative inline-flex items-center gap-2.5 bg-white/60 backdrop-blur-sm border border-deep-space-blue/10 hover:border-tiger-orange/30 hover:bg-white px-5 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-tiger-orange/10 hover:scale-105 active:scale-95"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Phone Icon */}
                  <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-tiger-orange to-tiger-orange/80 text-white shadow-sm group-hover:shadow-md group-hover:shadow-tiger-orange/30 transition-all duration-300">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:animate-wiggle"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>

                  {/* Phone Number */}
                  <span className="font-semibold text-deep-space-blue/80 group-hover:text-deep-space-blue tracking-wide transition-colors duration-300">
                    {phone.number}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
