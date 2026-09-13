"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PaymentGatewaySlideshow } from "@/app/photo-booth-software/payment-gateway-slideshow"
import { SoftwarePayment } from "@/app/photo-booth-software/software-payment"
import { SoftwareCta } from "@/app/photo-booth-software/software-cta"

export function PaymentPageContent() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <h1 className="sr-only">ระบบชำระเงินตู้ถ่ายรูป — PromptPay, QR Code, คูปอง | IMAGEAUTOMAT</h1>
            <SoftwarePayment />
            <PaymentGatewaySlideshow />
            <SoftwareCta />
            <Footer />
        </main>
    )
}
