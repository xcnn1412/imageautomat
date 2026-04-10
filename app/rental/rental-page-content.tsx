"use client"

import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/rental/rental_hero"

// Lazy load all below-the-fold sections
const ServicesSection = dynamic(
    () => import("@/components/rental/rental_services").then(mod => ({ default: mod.ServicesSection })),
    { loading: () => <div className="min-h-[400px]" />, ssr: true }
)
const KisokGallery = dynamic(
    () => import("@/components/rental/rental_kiosk_gallery").then(mod => ({ default: mod.KisokGallery })),
    { loading: () => <div className="min-h-[600px]" />, ssr: true }
)
const StructureRentalSection = dynamic(
    () => import("@/components/rental/rental_structure").then(mod => ({ default: mod.StructureRentalSection })),
    { loading: () => <div className="min-h-[400px]" />, ssr: true }
)
const RentalSlideshow = dynamic(
    () => import("@/components/rental/rental_slideshow").then(mod => ({ default: mod.RentalSlideshow })),
    { loading: () => <div className="min-h-[500px]" />, ssr: true }
)
const RentalSection = dynamic(
    () => import("@/components/rental/rental_section").then(mod => ({ default: mod.RentalSection })),
    { loading: () => <div className="min-h-[400px]" />, ssr: true }
)
const PricingSection = dynamic(
    () => import("@/components/rental/rental_pricing").then(mod => ({ default: mod.PricingSection })),
    { loading: () => <div className="min-h-[600px]" />, ssr: true }
)
const FeaturesSection = dynamic(
    () => import("@/components/rental/rental_features").then(mod => ({ default: mod.FeaturesSection })),
    { loading: () => <div className="min-h-[400px]" />, ssr: true }
)
const PaymentSection = dynamic(
    () => import("@/components/rental/rental_payment").then(mod => ({ default: mod.PaymentSection })),
    { loading: () => <div className="min-h-[400px]" />, ssr: true }
)
const GallerySection = dynamic(
    () => import("@/components/rental/rental_gallery").then(mod => ({ default: mod.GallerySection })),
    { loading: () => <div className="min-h-[400px]" />, ssr: true }
)
const TrustSection = dynamic(
    () => import("@/components/rental/rental_trust").then(mod => ({ default: mod.TrustSection })),
    { loading: () => <div className="min-h-[300px]" />, ssr: true }
)
const DemoSection = dynamic(
    () => import("@/components/rental/rental_demo").then(mod => ({ default: mod.DemoSection })),
    { loading: () => <div className="min-h-[500px]" />, ssr: true }
)
const FAQSection = dynamic(
    () => import("@/components/rental/rental_faq").then(mod => ({ default: mod.FAQSection })),
    { loading: () => <div className="min-h-[400px]" />, ssr: true }
)

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
