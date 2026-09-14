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
import { REEL_VIDEOS } from "@/data/reel-videos"
import { AUTOREEL_VIDEOS } from "@/data/autoreel-videos"

const VideoGallery = dynamic(() => import("@/components/video-gallery").then(mod => ({ default: mod.VideoGallery })), {
    loading: () => <div className="py-12" />,
})

const HomeSoftwareFeatures = dynamic(() => import("@/components/home-software-features").then(mod => ({ default: mod.HomeSoftwareFeatures })), {
    loading: () => <div className="py-12" />,
})

const ReelSlideshow = dynamic(() => import("@/components/reel-slideshow").then(mod => ({ default: mod.ReelSlideshow })), {
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
            <ReelSlideshow
                id="reel-photobooth"
                eyebrow="ตู้ถ่ายรูป REEL อัตโนมัติ"
                titleLead="Reel"
                titleSub="ตู้บันทึกคลิปสั้น พร้อมปริ้นภาพสุดคูล"
                description="ตู้ถ่ายรูป Reel Photobooth สร้างคลิปสั้นสุดครีเอทีฟ พร้อมปริ้นภาพคุณภาพสูง แชร์ลง Instagram, TikTok ได้ทันที"
                videos={REEL_VIDEOS}
            />
            <ReelSlideshow
                id="signature-photobooth"
                eyebrow="ตู้ถ่าย REEL อัตโนมัติ"
                titleLead="Signature"
                titleSub="ตู้ REEL ลายเซ็นต์ พร้อมถ่ายภาพ"
                description="ระบบสร้างวิดีโอ REEL อัตโนมัติ พร้อมโพสต์ลงทุก Platform"
                videos={AUTOREEL_VIDEOS}
            />
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
