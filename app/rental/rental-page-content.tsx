"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/salepage-hero-section"
import { ServicesSection } from "@/components/services-section"
import { RentalSection } from "@/components/rental-section"
import { StructureRentalSection } from "@/components/structure-rental-section"
import { PricingSection } from "@/components/pricing-section"
import { FeaturesSection } from "@/components/features-section"
import { PaymentSection } from "@/components/payment-section"
import { GallerySection } from "@/components/gallery-section"
import { TrustSection } from "@/components/trust-section"
import { DemoSection } from "@/components/demo-section"
import { FAQSection } from "@/components/faq-section"

export function RentalPageContent() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            <HeroSection />
            <ServicesSection />
            <RentalSection />
            <StructureRentalSection />
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
