"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RentalHero } from "./rental-hero"
import { RentalPackages } from "./rental-packages"
import { RentalFeatures } from "./rental-features"
import { RentalGrid } from "./rental-grid"
import { RentalCta } from "./rental-cta"

export function RentalPageContent() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <RentalHero />
            <RentalFeatures />
            <RentalGrid />
            {/* <RentalPackages /> */}
            <RentalCta />
            <Footer />
        </main>
    )
}
