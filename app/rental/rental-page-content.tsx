"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/rental/rental_hero"
import { ServicesSection } from "@/components/rental/rental_services"
import { RentalSection } from "@/components/rental/rental_section"
import { StructureRentalSection } from "@/components/rental/rental_structure"
import { PricingSection } from "@/components/rental/rental_pricing"
import { FeaturesSection } from "@/components/rental/rental_features"
import { PaymentSection } from "@/components/rental/rental_payment"
import { GallerySection } from "@/components/rental/rental_gallery"
import { TrustSection } from "@/components/rental/rental_trust"
import { DemoSection } from "@/components/rental/rental_demo"
import { FAQSection } from "@/components/rental/rental_faq"
import { KisokGallery } from "@/components/rental/rental_kiosk_gallery"
import { RentalSlideshow } from "@/components/rental/rental_slideshow"

export function RentalPageContent() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            <HeroSection />
            <ServicesSection />
            <KisokGallery />
            <StructureRentalSection />
            <RentalSlideshow />
            <RentalSection />
            <PricingSection />
            <FeaturesSection />
            <PaymentSection />
            <GallerySection />
            <TrustSection />
            <DemoSection />
            <FAQSection />
            <Footer />
        </main>
    )
}
