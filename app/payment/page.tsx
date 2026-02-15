import type { Metadata } from "next"
import { PaymentPageContent } from "./payment-page-content"

export const metadata: Metadata = {
    title: "ระบบชำระเงินตู้ถ่ายรูป — PromptPay, QR Code, คูปอง | IMAGEAUTOMAT",
    description:
        "ระบบชำระเงินตู้ถ่ายรูป Photobooth ครบวงจร รองรับ PromptPay, QR Code Payment, คูปอง และโหมดอีเวนต์ ชำระเงินอัตโนมัติ ตรวจสอบเรียลไทม์ เชื่อมต่อกับธนาคารชั้นนำ KBank, SCB, Bangkok Bank และระบบ TrueMoney Wallet",
    keywords: [
        "ระบบชำระเงินตู้ถ่ายรูป",
        "PromptPay Photobooth",
        "QR Code Payment ตู้ถ่ายรูป",
        "คูปองตู้ถ่ายรูป",
        "ระบบชำระเงิน Photobooth",
        "Payment Gateway Photobooth",
        "ชำระเงินอัตโนมัติ",
        "ตู้ถ่ายรูปหยอดเหรียญ",
        "Photobooth Payment System",
        "IMAGEAUTOMAT",
        "ระบบคูปอง Photobooth",
        "Event Mode Photobooth",
    ],
    alternates: {
        canonical: "/payment",
    },
    openGraph: {
        title: "ระบบชำระเงินตู้ถ่ายรูป — PromptPay, QR Code, คูปอง | IMAGEAUTOMAT",
        description:
            "ระบบชำระเงินตู้ถ่ายรูปครบวงจร รองรับ PromptPay, QR Code, คูปอง และโหมดอีเวนต์ ชำระเงินอัตโนมัติ ตรวจสอบเรียลไทม์ เชื่อมต่อกับธนาคารชั้นนำ",
        url: "https://www.imageautomat.com/payment",
        type: "website",
        siteName: "IMAGEAUTOMAT",
        locale: "th_TH",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ระบบชำระเงินตู้ถ่ายรูป Photobooth — IMAGEAUTOMAT",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ระบบชำระเงินตู้ถ่ายรูป — PromptPay, QR Code, คูปอง | IMAGEAUTOMAT",
        description:
            "ระบบชำระเงินตู้ถ่ายรูปครบวงจร รองรับ PromptPay, QR Code, คูปอง และโหมดอีเวนต์ ชำระเงินอัตโนมัติพร้อมตรวจสอบเรียลไทม์",
        images: ["/images/og-image.jpg"],
    },
}

// JSON-LD Structured Data — Service
function generateJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "ระบบชำระเงินตู้ถ่ายรูป Photobooth — IMAGEAUTOMAT",
        serviceType: "Payment Processing System",
        description:
            "ระบบชำระเงินตู้ถ่ายรูป Photobooth ครบวงจร รองรับ PromptPay, QR Code Payment, คูปอง และโหมดอีเวนต์ ชำระเงินอัตโนมัติ ตรวจสอบเรียลไทม์",
        url: "https://www.imageautomat.com/payment",
        image: "https://www.imageautomat.com/images/og-image.jpg",
        provider: {
            "@type": "Organization",
            name: "IMAGEAUTOMAT",
            url: "https://www.imageautomat.com",
        },
        areaServed: {
            "@type": "Country",
            name: "Thailand",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "ระบบชำระเงินตู้ถ่ายรูป",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "ระบบ PromptPay QR Code",
                        description: "ชำระเงินผ่าน PromptPay สแกน QR Code ตรวจสอบเรียลไทม์ ปลดล็อคตู้ถ่ายรูปอัตโนมัติ",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "ระบบคูปอง",
                        description: "รองรับรหัสคูปอง 6-12 หลัก สร้าง QR Code คูปอง เชื่อมต่อกับระบบ POS",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "โหมดอีเวนต์",
                        description: "เข้าใช้งานฟรีทันที ไม่ต้องชำระเงินหรือใส่คูปอง เหมาะสำหรับงานอีเวนต์และงานแต่งงาน",
                    },
                },
            ],
        },
        inLanguage: ["th", "en"],
    }
}

export default function PaymentPage() {
    const jsonLd = generateJsonLd()

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PaymentPageContent />
        </>
    )
}
