import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturesSection } from "@/components/features-section"
import { GallerySection } from "@/components/gallery-section"
import { ProductSection } from "@/components/product-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <HeroSection />
            <ServicesSection />
            <FeaturesSection />
            <GallerySection />
            <ProductSection />
            <ContactSection />
            <Footer />
        </main>
    )
}
