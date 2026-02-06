import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturesSection } from "@/components/features-section"

import { ProductSection } from "@/components/product-section"
import { ContactSection } from "@/components/contact-section"
import { SlideshowSection } from "@/components/slideshow-section"
import { VideoGallery } from "@/components/video-gallery"
import { TextSlideshow } from "@/components/text-slideshow"
import { TextSlideshow2 } from "@/components/text-slideshow2"
import { TextSlideshowProgram } from "@/components/textslideshow-program"
import { Footer } from "@/components/footer"

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <HeroSection />
            {/* <TextSlideshow /> */}
            <SlideshowSection />        
            <TextSlideshow2 />
            <ProductSection />
            <TextSlideshowProgram />
            <VideoGallery />
            <ServicesSection />
            <FeaturesSection />
            <ContactSection />
            <Footer />
        </main>
    )
}
