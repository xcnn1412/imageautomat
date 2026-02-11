"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, Camera, Printer, Smartphone } from "lucide-react"

export function AutoReel() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-tiger-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

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
            Auto Reel
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.1] mb-4">
            ตู้ถ่าย{" "}
            <span className="text-tiger-orange italic">วิดีโออัตโนมัติ</span>
            <br />
            พร้อมปริ้นภาพ
          </h2>
          <p className="mt-6 text-lg md:text-xl text-deep-space-blue/60 leading-relaxed max-w-2xl mx-auto">
            ระบบสร้างวิดีโอ REEL อัตโนมัติ พร้อมโพสต์ลงทุก Platform
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          variants={itemVariants}
        >
          {/* Video Container */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              playsInline
              muted={isMuted}
              autoPlay
            >
              <source src="/videos/autoreel-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Play/Pause Button */}
                  <motion.button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white" fill="white" />
                    ) : (
                      <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                    )}
                  </motion.button>

                  {/* Mute/Unmute Button */}
                  <motion.button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </motion.button>
                </div>

                <div className="text-white/80 text-sm font-medium">
                  Auto Reel Demo
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
