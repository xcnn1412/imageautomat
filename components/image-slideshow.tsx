"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

interface Slide {
  src: string
  alt: string
  title: string
  subtitle: string
}

interface ImageSlideshowProps {
  slides?: Slide[]
  autoPlay?: boolean
  interval?: number
}

const defaultSlides: Slide[] = [
  {
    src: "/images/slideshow-1.jpg",
    alt: "Modern architecture interior",
    title: "Timeless Design",
    subtitle: "Where elegance meets functionality",
  },
  {
    src: "/images/slideshow-2.jpg",
    alt: "Coastal landscape",
    title: "Endless Horizons",
    subtitle: "Discover breathtaking destinations",
  },
  {
    src: "/images/slideshow-3.jpg",
    alt: "Fine dining experience",
    title: "Culinary Excellence",
    subtitle: "Exquisite moments, unforgettable flavors",
  },
  {
    src: "/images/slideshow-4.jpg",
    alt: "Fashion editorial",
    title: "Modern Aesthetics",
    subtitle: "Contemporary style redefined",
  },
  {
    src: "/images/slideshow-5.jpg",
    alt: "Mountain sunrise",
    title: "Nature's Majesty",
    subtitle: "Experience the extraordinary",
  },
]

export function ImageSlideshow({
  slides = defaultSlides,
  autoPlay = true,
  interval = 5000,
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("next")
    setCurrentIndex((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 800)
  }, [slides.length, isAnimating])

  const goToPrev = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("prev")
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 800)
  }, [slides.length, isAnimating])

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setDirection(index > currentIndex ? "next" : "prev")
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 800)
  }

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(goToNext, interval)
    return () => clearInterval(timer)
  }, [isPlaying, interval, goToNext])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev()
      if (e.key === "ArrowRight") goToNext()
      if (e.key === " ") {
        e.preventDefault()
        setIsPlaying((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToNext, goToPrev])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Main Slide Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-all duration-[800ms] ease-out ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : direction === "next"
                  ? index === (currentIndex - 1 + slides.length) % slides.length
                    ? "opacity-0 scale-105"
                    : "opacity-0 scale-95"
                  : index === (currentIndex + 1) % slides.length
                    ? "opacity-0 scale-105"
                    : "opacity-0 scale-95"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end pb-32 md:pb-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          {slides.map((slide, index) => (
            <div
              key={`content-${slide.src}`}
              className={`transition-all duration-700 ease-out ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute"
              }`}
            >
              {index === currentIndex && (
                <>
                  <p className="text-[#8ECAE6] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                    {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                  </p>
                  <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-4 tracking-tight">
                    {slide.title}
                  </h2>
                  <p className="text-white/60 text-lg md:text-xl max-w-md leading-relaxed">
                    {slide.subtitle}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Progress Dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative h-10 flex items-center"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className="relative h-[2px] overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      index === currentIndex ? "w-12 bg-white" : "w-6 bg-white/30 group-hover:bg-white/50"
                    }`}
                  />
                  {index === currentIndex && isPlaying && (
                    <div
                      className="absolute inset-0 bg-[#8ECAE6] origin-left"
                      style={{
                        animation: `progress ${interval}ms linear`,
                      }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnail Preview */}
      <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {slides.map((slide, index) => (
          <button
            key={`thumb-${slide.src}`}
            onClick={() => goToSlide(index)}
            className={`relative w-20 h-14 overflow-hidden rounded transition-all duration-500 ${
              index === currentIndex
                ? "ring-2 ring-white ring-offset-2 ring-offset-[#0a0a0a] scale-110"
                : "opacity-40 hover:opacity-70"
            }`}
            aria-label={`Go to ${slide.title}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>

      {/* Decorative Line */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:block">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      {/* Keyframes for progress animation */}
      <style jsx>{`
        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  )
}
