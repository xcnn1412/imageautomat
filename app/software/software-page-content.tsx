"use client"

import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SoftwareHero } from "./software-hero"
import { SoftwareFeatures } from "./software-features"
import { SoftwareReelVideo } from "./software-reelvideo"
import { SoftwareSignatureReel } from "./software-signaturereel"
import { Software3Shot } from "./software-3shot"
import { SoftwareVideoHeader } from "./software-video-header"
import { SoftwareWorkflow } from "./software-workflow"
import { SoftwareCompatibility } from "./software-compatibility"
import { SoftwareCta } from "./software-cta"
import { SoftwarePayment } from "./software-payment"
import { PaymentGatewaySlideshow } from "./payment-gateway-slideshow"

const VideoGallery = dynamic(() => import("@/components/video-gallery").then(mod => ({ default: mod.VideoGallery })), {
    loading: () => <div className="py-12" />,
    ssr: true,
})

const HomeSoftwareFeatures = dynamic(() => import("@/components/home-software-features").then(mod => ({ default: mod.HomeSoftwareFeatures })), {
    loading: () => <div className="py-12" />,
    ssr: true,
})

export function SoftwarePageContent() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <SoftwareHero />
            <HomeSoftwareFeatures />
            <SoftwareCompatibility />
            {/* <PaymentGatewaySlideshow /> */}
            {/* <SoftwarePayment /> */}
            {/* <SoftwareFeatures /> */}
            {/* <HomeSoftwareFeatures /> */}
            <SoftwareReelVideo />
            <SoftwareSignatureReel />
            <Software3Shot />
            <SoftwareWorkflow />
            <SoftwareVideoHeader />
            <VideoGallery />
            {/* <SoftwarePayment /> */}

            <SoftwareCta />
            <Footer />
        </main>
    )
}
