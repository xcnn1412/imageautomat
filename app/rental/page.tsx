import type { Metadata } from "next"
import { RentalPageContent } from "./rental-page-content"

export const metadata: Metadata = {
    title: "เช่าตู้โฟโต้บูธ พร้อมทีมงาน | Imageautomat",
    description: "บริการเช่าตู้ถ่ายรูป Photobooth ครบวงจร พร้อมทีมงานมืออาชีพ ราคาเริ่มต้น 3,000 บาท เหมาะสำหรับงานแต่งงาน งานเปิดตัว และงานอีเวนต์ทุกประเภท มีตู้ให้เลือกกว่า 50 รุ่น",
    keywords: [
        "เช่าโฟโต้บูธ",
        "ให้เช่าตู้ถ่ายรูป",
        "Photobooth เช่า",
        "เช่าตู้ถ่ายรูปงานแต่ง",
        "บริการโฟโต้บูธ",
        "เช่าโฟโต้บูธราคาถูก",
        "Photobooth สำหรับงานอีเวนต์"
    ],
    openGraph: {
        title: "เช่าตู้โฟโต้บูธ พร้อมทีมงาน | Imageautomat",
        description: "บริการเช่าตู้ถ่ายรูป Photobooth ครบวงจร พร้อมทีมงานมืออาชีพ ราคาเริ่มต้น 3,000 บาท",
        url: "https://www.imageautomat.com/rental",
        type: "website",
        siteName: "IMAGEAUTOMAT",
        locale: "th_TH",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "เช่าตู้โฟโต้บูธ พร้อมทีมงาน — IMAGEAUTOMAT",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "เช่าตู้โฟโต้บูธ พร้อมทีมงาน | Imageautomat",
        description: "บริการเช่าตู้ถ่ายรูป Photobooth ครบวงจร พร้อมทีมงานมืออาชีพ ราคาเริ่มต้น 3,000 บาท",
        images: ["/images/og-image.jpg"],
    },
    alternates: {
        canonical: "https://www.imageautomat.com/rental",
    },
}

// JSON-LD Structured Data — Service (Rental)
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "บริการเช่าตู้โฟโต้บูธ — IMAGEAUTOMAT",
    serviceType: "Photobooth Rental Service",
    description: "บริการเช่าตู้ถ่ายรูป Photobooth ครบวงจร พร้อมทีมงานมืออาชีพ สำหรับงานแต่งงาน งานเปิดตัว และงานอีเวนต์ทุกประเภท",
    url: "https://www.imageautomat.com/rental",
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
    offers: {
        "@type": "AggregateOffer",
        priceCurrency: "THB",
        lowPrice: "3000",
        availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "แพ็กเกจเช่าตู้โฟโต้บูธ",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "เช่าตู้โฟโต้บูธงานแต่งงาน",
                    description: "บริการเช่าตู้ถ่ายรูปพร้อมทีมงานสำหรับงานแต่งงาน",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "เช่าตู้โฟโต้บูธงานอีเวนต์",
                    description: "บริการเช่าตู้ถ่ายรูปพร้อมทีมงานสำหรับงานอีเวนต์และงานเปิดตัว",
                },
            },
        ],
    },
}

export default function RentalPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <RentalPageContent />
        </>
    )
}
