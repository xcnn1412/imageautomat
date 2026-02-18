"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { CameraLoadingScreen } from "./camera-loading-screen"

/**
 * Extract the main route segment from a pathname.
 * e.g. "/product" → "product", "/rental" → "rental", "/" → ""
 *      "/software#reel" → "software"
 */
function getMainSegment(pathname: string): string {
    const segments = pathname.split("/").filter(Boolean)
    return segments[0] ?? ""
}

export function AppLoadingWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const previousSegment = useRef<string | null>(null)
    const [showLoading, setShowLoading] = useState(false)
    const [contentVisible, setContentVisible] = useState(true)

    useEffect(() => {
        const currentSegment = getMainSegment(pathname)

        // On very first render, just record the segment — don't show loading
        if (previousSegment.current === null) {
            previousSegment.current = currentSegment
            return
        }

        // Only trigger loading when navigating FROM homepage to another page
        // e.g. / → /product, / → /rental (shows loading)
        // but /product → /rental, /rental → / (no loading)
        const wasOnHomepage = previousSegment.current === ""
        const isLeavingHomepage = wasOnHomepage && currentSegment !== ""

        if (currentSegment !== previousSegment.current) {
            previousSegment.current = currentSegment

            if (isLeavingHomepage) {
                setContentVisible(false)
                setShowLoading(true)
            }
        }
    }, [pathname])

    const handleComplete = () => {
        setShowLoading(false)
        setContentVisible(true)
    }

    return (
        <>
            {showLoading && <CameraLoadingScreen onComplete={handleComplete} />}
            <div
                style={{
                    opacity: contentVisible ? 1 : 0,
                    transition: contentVisible ? "opacity 0.4s ease-in" : "none",
                }}
            >
                {children}
            </div>
        </>
    )
}
