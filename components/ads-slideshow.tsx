"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Play, Pause, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { SHOWCASE_ITEMS, ShowcaseItem } from "@/data/ads-showcase"
import { LazyVideo } from "@/components/lazy-video"

// Shuffle array helper function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function AdsSlideshow() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Initialize with original order (SSR-stable), then shuffle on client mount
  const [shuffledItems, setShuffledItems] = useState(SHOWCASE_ITEMS)

  useEffect(() => {
    setShuffledItems(shuffleArray(SHOWCASE_ITEMS))
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [textVisible, setTextVisible] = useState(true)
  const activeVideoRef = useRef<HTMLVideoElement>(null)
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null)

  const currentItem = shuffledItems[currentIndex] ?? shuffledItems[0]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return
      setTextVisible(false)
      setIsTransitioning(true)
      setProgress(0)

      setTimeout(() => {
        setCurrentIndex(index)
        setTimeout(() => {
          setIsTransitioning(false)
          setTextVisible(true)
        }, 400)
      }, 300)
    },
    [isTransitioning, currentIndex]
  )

  const goNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % shuffledItems.length
    goToSlide(nextIndex)
  }, [currentIndex, shuffledItems.length, goToSlide])

  const goPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + shuffledItems.length) % shuffledItems.length
    goToSlide(prevIndex)
  }, [currentIndex, shuffledItems.length, goToSlide])

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev)
  }, [])

  // Sync video playback state
  useEffect(() => {
    const video = activeVideoRef.current
    if (!video) return

    if (isPlaying) {
      video.play().catch(() => console.log("Video play failed"))
    } else {
      video.pause()
    }
  }, [isPlaying, currentIndex])

  // Sync mute state
  useEffect(() => {
    const video = activeVideoRef.current
    if (video) {
      video.muted = isMuted
    }
  }, [isMuted])

  // Progress bar + auto-advance
  useEffect(() => {
    const video = activeVideoRef.current
    if (!video) return

    const updateProgress = () => {
      if (video.duration) {
        const percent = (video.currentTime / video.duration) * 100
        setProgress(percent)

        // Auto-advance when video ends
        if (video.ended) {
          goNext()
        }
      }
    }

    if (isPlaying) {
      progressInterval.current = setInterval(updateProgress, 100)
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }
    }
  }, [isPlaying, goNext])

  return (
    <section
      ref={sectionRef}
      id="software-showcase"
      className="py-20 lg:py-32 bg-gradient-to-b from-tiger-orange/5 via-white to-tiger-orange/5 relative overflow-hidden"
      aria-label="ตัวอย่างผลลัพธ์จากซอฟต์แวร์"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tiger-orange/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-blue-light/10 rounded-full blur-3xl" />

      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="text-center mb-12 lg:mb-16" variants={itemVariants}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-tiger-orange uppercase tracking-[0.3em] mb-4">
            <motion.svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              <path d="M14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </motion.svg>
            Software Showcase
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.1] mb-4">
            ตัวอย่างผลลัพธ์จาก{" "}
            <span className="text-tiger-orange italic">ซอฟต์แวร์</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-deep-space-blue/60 leading-relaxed max-w-2xl mx-auto">
            ดูผลงานจริงจากระบบโฟโต้บูธของเรา
          </p>
        </motion.div>

        {/* Main Slideshow Container */}
        <motion.div
          className="relative w-full"
          variants={itemVariants}
        >
          {/* Video Container */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-deep-space-blue/20 border border-white/20">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-tiger-orange/20 opacity-50 pointer-events-none" />

            {/* Fixed-height video area - Mobile optimized */}
            <div className="relative h-[75vw] sm:h-[60vw] md:h-[56vw] max-h-[70vh] min-h-[280px] sm:min-h-[350px] md:min-h-[400px] w-full overflow-hidden bg-deep-space-blue">
              {/* Active video */}
              <LazyVideo
                ref={activeVideoRef}
                key={currentItem?.id}
                src={currentItem?.src}
                className={`absolute inset-0 h-full w-full object-contain transition-all duration-500 ease-in-out ${isTransitioning ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100"
                  }`}
                autoPlay
                muted={isMuted}
                playsInline
                loop={false}
                preload="metadata"
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
              />

              {/* Gradient Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-space-blue/80 via-deep-space-blue/10 to-transparent" />

              {/* Video Info Overlay - Mobile optimized */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8 transition-all duration-500 ease-out ${textVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
              >
                <div className="mb-1.5 sm:mb-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="inline-block rounded-full bg-tiger-orange px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold text-white">
                    {String(currentIndex + 1).padStart(2, "0")} /{" "}
                    {String(shuffledItems.length).padStart(2, "0")}
                  </span>
                  {currentItem?.badge && (
                    <span className="inline-block rounded-full bg-white/15 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium text-white backdrop-blur-sm">
                      {currentItem.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                  {currentItem?.title}
                </h3>
                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm md:text-base text-white/80 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  {currentItem?.description}
                </p>
              </div>

              {/* Center Play/Pause Button - Mobile optimized */}
              <motion.button
                type="button"
                onClick={togglePlay}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 sm:p-4 md:p-5 backdrop-blur-md transition-all hover:bg-white/30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                ) : (
                  <Play className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                )}
              </motion.button>

              {/* Mute Button */}
              <motion.button
                type="button"
                onClick={toggleMute}
                className="absolute right-4 top-4 rounded-full bg-white/20 p-2.5 backdrop-blur-md transition-all hover:bg-white/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4 text-white" />
                ) : (
                  <Volume2 className="h-4 w-4 text-white" />
                )}
              </motion.button>
            </div>

            {/* Progress Bar */}
            <div className="h-1 w-full bg-deep-space-blue/10">
              <div
                className="h-full bg-tiger-orange transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Navigation Arrows - Mobile optimized */}
          <motion.button
            type="button"
            onClick={goPrev}
            className="absolute -left-2 sm:-left-3 md:-left-6 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 sm:p-2.5 md:p-3 shadow-xl shadow-deep-space-blue/20 transition-all hover:bg-deep-space-blue/5 border border-deep-space-blue/10"
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous video"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-deep-space-blue" />
          </motion.button>
          <motion.button
            type="button"
            onClick={goNext}
            className="absolute -right-2 sm:-right-3 md:-right-6 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 sm:p-2.5 md:p-3 shadow-xl shadow-deep-space-blue/20 transition-all hover:bg-deep-space-blue/5 border border-deep-space-blue/10"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next video"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-deep-space-blue" />
          </motion.button>
        </motion.div>

        {/* Thumbnail Strip - Mobile optimized with snap scroll */}
        <motion.div
          className="mt-4 sm:mt-6 md:mt-8 flex justify-start sm:justify-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto px-2 sm:px-4 pb-2 snap-x snap-mandatory scrollbar-hide"
          variants={itemVariants}
          style={{ scrollbarWidth: 'none' }}
        >
          {shuffledItems.map((item, index) => (
            <motion.button
              type="button"
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`group relative shrink-0 overflow-hidden rounded-xl transition-all duration-300 ${index === currentIndex
                ? "ring-2 ring-tiger-orange ring-offset-2 ring-offset-background scale-105"
                : "opacity-60 hover:opacity-100"
                }`}
              whileHover={{ scale: index === currentIndex ? 1.05 : 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Go to ${item.title}`}
            >
              <div className="relative w-16 sm:w-20 md:w-24 aspect-square overflow-hidden rounded-lg sm:rounded-xl snap-center bg-linear-to-br from-deep-space-blue/80 to-deep-space-blue/60 flex items-center justify-center">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white/90">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index === currentIndex && (
                  <div className="absolute inset-0 rounded-xl bg-tiger-orange/20 border-2 border-tiger-orange/40" />
                )}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Dot Indicators */}
        <motion.div
          className="mt-4 flex justify-center gap-2"
          variants={itemVariants}
        >
          {shuffledItems.map((item, index) => (
            <motion.button
              type="button"
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? "w-8 bg-tiger-orange"
                : "w-2 bg-deep-space-blue/30 hover:bg-deep-space-blue/50"
                }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
