"use client"

import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SoftwareHero } from "./software-hero"
import { SoftwareFeatures } from "./software-features"
import { Software3Shot } from "./software-3shot"
import { SoftwareVideoHeader } from "./software-video-header"
import { SoftwareWorkflow } from "./software-workflow"
import { SoftwareCompatibility } from "./software-compatibility"
import { SoftwareCta } from "./software-cta"
import { SoftwarePayment } from "./software-payment"
import { PaymentGatewaySlideshow } from "./payment-gateway-slideshow"

const VideoGallery = dynamic(() => import("@/components/video-gallery").then(mod => ({ default: mod.VideoGallery })), {
    loading: () => <div className="py-12" />,
})

const HomeSoftwareFeatures = dynamic(() => import("@/components/home-software-features").then(mod => ({ default: mod.HomeSoftwareFeatures })), {
    loading: () => <div className="py-12" />,
})

const ReelVideo = dynamic(() => import("@/components/ReelVideo").then(mod => ({ default: mod.ReelVideo })), {
    loading: () => <div className="py-12" />,
})

const SignatureReel = dynamic(() => import("@/components/SignatureReel").then(mod => ({ default: mod.SignatureReel })), {
    loading: () => <div className="py-12" />,
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
            <ReelVideo />
            <SignatureReel />
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
