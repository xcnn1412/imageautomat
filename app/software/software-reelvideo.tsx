"use client"

import dynamic from "next/dynamic"

const ReelVideo = dynamic(() => import("@/components/ReelVideo").then(mod => ({ default: mod.ReelVideo })), {
    loading: () => <div className="py-12" />,
    ssr: true,
})

export function SoftwareReelVideo() {
    return (
        <div id="reel-photobooth">
            <ReelVideo />
        </div>
    )
}
