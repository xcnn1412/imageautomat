import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturesSection } from "@/components/features-section"

import { ProductSection } from "@/components/product-section"
import { ContactSection } from "@/components/contact-section"
import { SlideshowSection } from "@/components/slideshow-section"
import { VideoGallery } from "@/components/video-gallery"
import { TextSlideshow } from "@/components/text-slideshow"
import { Footer } from "@/components/footer"

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <HeroSection />
            <SlideshowSection />
            <VideoGallery />
            <ServicesSection />
            <FeaturesSection />
            <ProductSection />
            <ContactSection />
            <Footer />
        </main>
    )
}
