"use client"

import {
    forwardRef,
    useCallback,
    useEffect,
    useRef,
    useState,
    type VideoHTMLAttributes,
} from "react"

export interface LazyVideoProps
    extends VideoHTMLAttributes<HTMLVideoElement> {
    /**
     * Video source URL — will only be applied after
     * the element enters the viewport (+ rootMargin buffer).
     */
    src?: string
    /**
     * IntersectionObserver rootMargin.
     * Positive values start loading *before* the element is visible.
     * @default "200px"
     */
    rootMargin?: string
    /**
     * IntersectionObserver threshold (0–1).
     * @default 0
     */
    threshold?: number
}

/**
 * Drop-in replacement for `<video>` that defers setting `src`
 * until the element scrolls into (or near) the viewport.
 *
 * Supports `forwardRef` so parent components can still call
 * `.play()`, `.pause()`, etc. on the underlying HTMLVideoElement.
 */
export const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(
    function LazyVideo(
        { src, rootMargin = "200px", threshold = 0, ...videoProps },
        forwardedRef
    ) {
        const internalRef = useRef<HTMLVideoElement | null>(null)
        const [isVisible, setIsVisible] = useState(false)

        /* ── Merge forwarded ref + internal ref ── */
        const setRefs = useCallback(
            (node: HTMLVideoElement | null) => {
                internalRef.current = node
                if (typeof forwardedRef === "function") {
                    forwardedRef(node)
                } else if (forwardedRef) {
                    ; (
                        forwardedRef as React.MutableRefObject<HTMLVideoElement | null>
                    ).current = node
                }
            },
            [forwardedRef]
        )

        /* ── Observe visibility ── */
        useEffect(() => {
            const el = internalRef.current
            if (!el || isVisible) return

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.unobserve(el)
                    }
                },
                { rootMargin, threshold }
            )

            observer.observe(el)
            return () => observer.disconnect()
        }, [rootMargin, threshold, isVisible])

        return (
            <video
                ref={setRefs}
                src={isVisible ? src : undefined}
                {...videoProps}
            />
        )
    }
)
