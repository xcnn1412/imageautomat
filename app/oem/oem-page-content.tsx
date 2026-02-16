"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OemHero } from "./oem-hero"
import { OemServices } from "./oem-services"
import { OemProcess } from "./oem-process"
import { OemCta } from "./oem-cta"

export function OemPageContent() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <OemHero />
            <OemServices />
            <OemProcess />
            <OemCta />
            <Footer />
        </main>
    )
}
