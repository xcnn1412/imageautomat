"use client"

import { useState, useRef, useEffect, useCallback } from "react"

// เครื่องเล่นวิดีโอเพลย์ลิสต์ — เลื่อนสไลด์ถัดไปเมื่อวิดีโอจบ (ไม่ใช่ timer แบบ embla)
// ใช้ร่วม ReelSlideshow + AdsSlideshow: progress bar, mute, play/pause, transition
export function useReelPlayer(length: number) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)
    const [progress, setProgress] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [textVisible, setTextVisible] = useState(true)
    const activeVideoRef = useRef<HTMLVideoElement>(null)
    const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null)

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
        goToSlide((currentIndex + 1) % length)
    }, [currentIndex, length, goToSlide])

    const goPrev = useCallback(() => {
        goToSlide((currentIndex - 1 + length) % length)
    }, [currentIndex, length, goToSlide])

    const togglePlay = useCallback(() => setIsPlaying((prev) => !prev), [])
    const toggleMute = useCallback(() => setIsMuted((prev) => !prev), [])

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

    // Progress bar + auto-advance when video ends
    useEffect(() => {
        const video = activeVideoRef.current
        if (!video) return

        const updateProgress = () => {
            if (video.duration) {
                setProgress((video.currentTime / video.duration) * 100)
                if (video.ended) goNext()
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

    return {
        currentIndex,
        isPlaying,
        isMuted,
        progress,
        isTransitioning,
        textVisible,
        activeVideoRef,
        goToSlide,
        goNext,
        goPrev,
        togglePlay,
        toggleMute,
    }
}
