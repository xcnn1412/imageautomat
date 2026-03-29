import type { Metadata } from "next"
import { OemPageContent } from "./oem-page-content"

export const metadata: Metadata = {
    title: "รับผลิตตู้โฟโต้บูธ OEM | Imageautomat",
    description: "รับผลิตตู้ถ่ายรูป Photobooth แบบ OEM/ODM ตามสั่ง ออกแบบและผลิตให้ตรงตามความต้องการ MOQ เริ่มต้น 10 ตู้ สำหรับธุรกิจและผู้ประกอบการ",
    keywords: [
        "ผลิตตู้โฟโต้บูธ",
        "OEM Photobooth",
        "ODM ตู้ถ่ายรูป",
        "รับผลิตตู้ถ่ายรูป",
        "Photobooth Manufacturer",
        "ผู้ผลิตโฟโต้บูธ",
        "สั่งผลิตตู้ตามสเปค"
    ],
    openGraph: {
        title: "รับผลิตตู้โฟโต้บูธ OEM | Imageautomat",
        description: "รับผลิตตู้ถ่ายรูป Photobooth แบบ OEM/ODM ตามสั่ง ออกแบบและผลิตให้ตรงตามความต้องการ",
        url: "https://www.imageautomat.com/oem",
        type: "website",
        siteName: "IMAGEAUTOMAT",
        locale: "th_TH",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "รับผลิตตู้โฟโต้บูธ OEM/ODM — IMAGEAUTOMAT",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "รับผลิตตู้โฟโต้บูธ OEM | Imageautomat",
        description: "รับผลิตตู้ถ่ายรูป Photobooth แบบ OEM/ODM ตามสั่ง ออกแบบและผลิตให้ตรงตามความต้องการ",
        images: ["/images/og-image.jpg"],
    },
    alternates: {
        canonical: "https://www.imageautomat.com/oem",
    },
}

// JSON-LD Structured Data — Service (OEM/ODM)
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "รับผลิตตู้โฟโต้บูธ OEM/ODM — IMAGEAUTOMAT",
    serviceType: "OEM/ODM Photobooth Manufacturing",
    description: "รับผลิตตู้ถ่ายรูป Photobooth แบบ OEM/ODM ตามสั่ง ออกแบบและผลิตให้ตรงตามความต้องการ MOQ เริ่มต้น 10 ตู้",
    url: "https://www.imageautomat.com/oem",
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
        name: "บริการผลิตตู้โฟโต้บูธ OEM/ODM",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "OEM — ผลิตตามแบบลูกค้า",
                    description: "ผลิตตู้โฟโต้บูธตามดีไซน์และสเปคของลูกค้า ติดแบรนด์ลูกค้า",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "ODM — ออกแบบและผลิตให้",
                    description: "ออกแบบและผลิตตู้โฟโต้บูธใหม่ตั้งแต่ต้น ตามความต้องการเฉพาะ",
                },
            },
        ],
    },
}

export default function OemPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <OemPageContent />
        </>
    )
}
