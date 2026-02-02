"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

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
          
          {/* CTA Buttons */}
          <div 
            className={`mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Button 
              size="lg"
              className="bg-deep-space-blue hover:bg-deep-space-blue/90 text-white font-medium px-10 py-7 text-base rounded-full transition-all duration-300 group"
            >
              Request a Quote
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a 
              href="#gallery"
              className="text-deep-space-blue/70 hover:text-deep-space-blue font-medium text-base underline underline-offset-4 decoration-deep-space-blue/30 hover:decoration-deep-space-blue transition-all"
            >
              View our work
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
