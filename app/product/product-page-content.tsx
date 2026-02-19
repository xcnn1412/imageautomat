"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductHero } from "./product-hero"
import { ProductGrid } from "./product-grid"
import { ProductCta } from "./product-cta"


export function ProductPageContent() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <ProductHero />
            <ProductGrid />
            <ProductCta />
            <Footer />
        </main>
    )
}
