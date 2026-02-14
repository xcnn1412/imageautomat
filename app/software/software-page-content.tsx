"use client"

import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SoftwareHero } from "./software-hero"
import { SoftwareFeatures } from "./software-features"
import { SoftwareReelVideo } from "./software-reelvideo"
import { SoftwareSignatureReel } from "./software-signaturereel"
import { SoftwareVideoHeader } from "./software-video-header"
import { SoftwareWorkflow } from "./software-workflow"
import { SoftwareCompatibility } from "./software-compatibility"
import { SoftwareCta } from "./software-cta"

const VideoGallery = dynamic(() => import("@/components/video-gallery").then(mod => ({ default: mod.VideoGallery })), {
    loading: () => <div className="py-12" />,
    ssr: true,
})

export function SoftwarePageContent() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <SoftwareHero />
            <SoftwareFeatures />
            <SoftwareReelVideo />
            <SoftwareSignatureReel />
            <SoftwareVideoHeader />
            <VideoGallery />
            <SoftwareWorkflow />
            <SoftwareCompatibility />
            <SoftwareCta />
            <Footer />
        </main>
    )
}
