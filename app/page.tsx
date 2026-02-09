import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TextSlideshow2 } from "@/components/text-slideshow2"
import { ProductSection } from "@/components/product-section"
import dynamic from "next/dynamic"

// Lazy load below-the-fold components to reduce initial JS bundle
const TextSlideshowProgram = dynamic(() => import("@/components/textslideshow-program").then(mod => ({ default: mod.TextSlideshowProgram })), {
    loading: () => <div className="py-24" />,
    ssr: true,
})
const VideoGallery = dynamic(() => import("@/components/video-gallery").then(mod => ({ default: mod.VideoGallery })), {
    loading: () => <div className="py-12" />,
    ssr: true,
})
const SlideshowSection = dynamic(() => import("@/components/slideshow-section").then(mod => ({ default: mod.SlideshowSection })), {
    loading: () => <div className="py-24" />,
    ssr: true,
})
const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => ({ default: mod.ContactSection })), {
    loading: () => <div className="py-32" />,
    ssr: true,
})
const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
    ssr: true,
})

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <HeroSection />
            <TextSlideshow2 />
            <ProductSection />
            <TextSlideshowProgram />
            <VideoGallery />
            <SlideshowSection />
            <ContactSection />
            <Footer />
        </main>
    )
}
