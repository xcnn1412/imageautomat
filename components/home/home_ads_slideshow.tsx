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
      video.play().catch(() => {})
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
      id="showcase"
      className="py-16 lg:py-28 bg-linear-to-b from-tiger-orange/5 via-white to-tiger-orange/5 relative overflow-hidden"
      aria-label="Photo Booth Showcase Gallery"
      itemScope
      itemType="https://schema.org/VideoGallery"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tiger-orange/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-blue-light/10 rounded-full blur-3xl" />

      <motion.div
        className="mx-auto max-w-7xl px-4 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header - Simplified */}
        <motion.header className="text-center mb-8 lg:mb-12" variants={itemVariants}>
          <h2 
            className="font-sans font-extrabold text-3xl md:text-5xl lg:text-6xl text-deep-space-blue tracking-tight leading-[1.1]"
            itemProp="name"
          >
            Our <span className="text-tiger-orange">Work</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-deep-space-blue/50 max-w-xl mx-auto" itemProp="description">
            Showcase of Photo Booth Experiences
          </p>
        </motion.header>

        {/* Main Slideshow Container */}
        <motion.div
          className="relative w-full"
          variants={itemVariants}
          itemProp="video"
          itemScope
          itemType="https://schema.org/VideoObject"
        >
          {/* Video Container */}
          <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-white shadow-2xl shadow-deep-space-blue/15 border border-white/20">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-linear-to-br from-white/30 via-transparent to-tiger-orange/20 opacity-50 pointer-events-none" />

            {/* Fixed-height video area - Optimized for all screens */}
            <div className="relative h-[80vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] max-h-225 min-h-80 w-full overflow-hidden bg-deep-space-blue">
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
                aria-label={currentItem?.title}
              />

              {/* Gradient Overlay - Softer */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-deep-space-blue/70 via-deep-space-blue/5 to-transparent" />

              {/* Video Info Overlay - Minimal & Clean */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-500 ease-out ${textVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="font-sans font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white truncate"
                      itemProp="name"
                    >
                      {currentItem?.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {currentItem?.badge && (
                      <span className="hidden sm:inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {currentItem.badge}
                      </span>
                    )}
                    <span className="inline-block rounded-full bg-tiger-orange px-3 py-1 text-xs font-semibold text-white whitespace-nowrap">
                      {String(currentIndex + 1).padStart(2, "0")} / {String(shuffledItems.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Center Play/Pause Button - Enhanced */}
              <motion.button
                type="button"
                onClick={togglePlay}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 p-4 sm:p-5 md:p-6 backdrop-blur-lg transition-all hover:bg-white/35 shadow-xl"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6 sm:h-7 sm:w-7 md:h-10 md:w-10 text-white" aria-hidden="true" />
                ) : (
                  <Play className="h-6 w-6 sm:h-7 sm:w-7 md:h-10 md:w-10 text-white" aria-hidden="true" />
                )}
              </motion.button>

              {/* Mute Button - Enhanced */}
              <motion.button
                type="button"
                onClick={toggleMute}
                className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full bg-white/25 p-2.5 sm:p-3 backdrop-blur-lg transition-all hover:bg-white/35"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4 sm:h-5 sm:w-5 text-white" aria-hidden="true" />
                ) : (
                  <Volume2 className="h-4 w-4 sm:h-5 sm:w-5 text-white" aria-hidden="true" />
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

          {/* Navigation Arrows - Responsive */}
          <motion.button
            type="button"
            onClick={goPrev}
            className="absolute left-2 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 rounded-full bg-white p-2.5 sm:p-3 md:p-3.5 shadow-2xl shadow-deep-space-blue/25 transition-all hover:bg-tiger-orange hover:text-white border border-deep-space-blue/10 z-10"
            whileHover={{ scale: 1.15, x: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous showcase"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" aria-hidden="true" />
          </motion.button>
          <motion.button
            type="button"
            onClick={goNext}
            className="absolute right-2 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 rounded-full bg-white p-2.5 sm:p-3 md:p-3.5 shadow-2xl shadow-deep-space-blue/25 transition-all hover:bg-tiger-orange hover:text-white border border-deep-space-blue/10 z-10"
            whileHover={{ scale: 1.15, x: 2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next showcase"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" aria-hidden="true" />
          </motion.button>
        </motion.div>

        {/* Dot Indicators - Primary Navigation */}
        <motion.nav
          className="mt-6 lg:mt-8 flex justify-center gap-2.5"
          variants={itemVariants}
          aria-label="Showcase navigation"
        >
          {shuffledItems.map((item, index) => (
            <motion.button
              type="button"
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                ? "w-10 bg-tiger-orange shadow-lg shadow-tiger-orange/30"
                : "w-2.5 bg-deep-space-blue/25 hover:bg-deep-space-blue/50"
                }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`View ${item.title}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </motion.nav>

        {/* Thumbnail Strip - Secondary Navigation (Desktop) */}
        <motion.nav
          className="mt-6 hidden md:flex justify-center gap-3 lg:gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide"
          variants={itemVariants}
          style={{ scrollbarWidth: 'none' }}
          aria-label="Showcase thumbnail navigation"
        >
          {shuffledItems.slice(0, 12).map((item, index) => (
            <motion.button
              type="button"
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`group relative shrink-0 overflow-hidden rounded-lg transition-all duration-300 ${index === currentIndex
                ? "ring-2 ring-tiger-orange ring-offset-2 ring-offset-white scale-105"
                : "opacity-50 hover:opacity-100"
                }`}
              whileHover={{ scale: index === currentIndex ? 1.05 : 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Jump to ${item.title}`}
            >
              <div className="relative w-14 lg:w-16 aspect-square overflow-hidden rounded-lg bg-linear-to-br from-deep-space-blue/90 to-deep-space-blue/70 flex items-center justify-center">
                <span className="text-base lg:text-lg font-bold text-white/90">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index === currentIndex && (
                  <div className="absolute inset-0 rounded-lg bg-tiger-orange/25 border-2 border-tiger-orange/50" />
                )}
              </div>
            </motion.button>
          ))}
        </motion.nav>
      </motion.div>
    </section>
  )
}
