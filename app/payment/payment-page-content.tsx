"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PaymentGatewaySlideshow } from "@/app/software/payment-gateway-slideshow"
import { SoftwarePayment } from "@/app/software/software-payment"
import { SoftwareCta } from "@/app/software/software-cta"

export function PaymentPageContent() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <SoftwarePayment />
            <PaymentGatewaySlideshow />
            <SoftwareCta />
            <Footer />
        </main>
    )
}
