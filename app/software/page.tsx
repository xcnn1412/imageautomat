import type { Metadata } from "next"
import { SoftwarePageContent } from "./software-page-content"

export const metadata: Metadata = {
    title: "ซอฟต์แวร์ตู้ถ่ายรูป Photobooth — Imageland | อัปเดตฟรีตลอดชีพ",
    description:
        "ซอฟต์แวร์ตู้ถ่ายรูป Photobooth จาก IMAGEAUTOMAT ระบบ Imageland ครบครัน ใช้งานง่าย รองรับ AI Filter, Green Screen, GIF, Boomerang, Live Gallery, พิมพ์รูปทันที และแชร์ QR Code พร้อมอัปเดตฟีเจอร์ใหม่ฟรีตลอดชีพ สำหรับงานอีเวนต์ งานแต่งงาน และธุรกิจตู้ถ่ายรูป",
    keywords: [
        "ซอฟต์แวร์ตู้ถ่ายรูป",
        "ซอฟต์แวร์โฟโต้บูธ",
        "Photobooth Software",
        "Imageland",
        "AI Photobooth",
        "Green Screen Photobooth",
        "GIF Booth",
        "Boomerang Booth",
        "Live Gallery",
        "ระบบตู้ถ่ายรูป",
        "ซอฟต์แวร์ Photobooth ไทย",
        "photobooth software thailand",
        "IMAGEAUTOMAT",
        "ซอฟต์แวร์งานอีเวนต์",
        "โปรแกรมตู้ถ่ายรูป",
    ],
    alternates: {
        canonical: "/software",
    },
    openGraph: {
        title: "ซอฟต์แวร์ตู้ถ่ายรูป Photobooth — Imageland | IMAGEAUTOMAT",
        description:
            "ซอฟต์แวร์ตู้ถ่ายรูปครบวงจร ระบบ Imageland รองรับ AI Filter, Green Screen, GIF, Boomerang, Live Gallery และพิมพ์รูปทันที พร้อมอัปเดตฟรีตลอดชีพ เหมาะสำหรับงานอีเวนต์ งานแต่ง และธุรกิจตู้ถ่ายรูป",
        url: "https://www.imageautomat.com/software",
        type: "website",
        siteName: "IMAGEAUTOMAT",
        locale: "th_TH",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ซอฟต์แวร์ตู้ถ่ายรูป Photobooth ระบบ Imageland จาก IMAGEAUTOMAT",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ซอฟต์แวร์ตู้ถ่ายรูป Photobooth — Imageland | IMAGEAUTOMAT",
        description:
            "ซอฟต์แวร์ตู้ถ่ายรูปครบวงจร รองรับ AI Filter, Green Screen, Live Gallery และอื่นๆ พร้อมอัปเดตฟรีตลอดชีพ เหมาะสำหรับงานอีเวนต์และธุรกิจตู้ถ่ายรูป",
        images: ["/images/og-image.jpg"],
    },
}

// JSON-LD Structured Data — SoftwareApplication
function generateJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Imageland — ซอฟต์แวร์ตู้ถ่ายรูป Photobooth",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Windows 10, Windows 11",
        description:
            "ซอฟต์แวร์ตู้ถ่ายรูป Photobooth ครบวงจร รองรับ AI Filter, Green Screen, GIF, Boomerang, Live Gallery, พิมพ์รูปทันที และแชร์ผ่าน QR Code พร้อมอัปเดตฟีเจอร์ใหม่ฟรีตลอดชีพ",
        url: "https://www.imageautomat.com/software",
        image: "https://www.imageautomat.com/images/og-image.jpg",
        author: {
            "@type": "Organization",
            name: "IMAGEAUTOMAT",
            url: "https://www.imageautomat.com",
        },
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "THB",
            seller: {
                "@type": "Organization",
                name: "IMAGEAUTOMAT",
            },
        },
        featureList: [
            "ถ่ายรูปและวิดีโอ รองรับ GIF และ Boomerang",
            "AI Filter และ Effect อัตโนมัติ",
            "Green Screen ลบพื้นหลังอัตโนมัติ",
            "ออกแบบ Template กว่า 100 แบบ",
            "แชร์ผ่าน QR Code, Email, LINE ทันที",
            "Live Gallery แสดงรูปแบบเรียลไทม์",
            "พิมพ์รูปคุณภาพสูงภายใน 10 วินาที",
            "อัปเดตฟีเจอร์ใหม่ฟรีตลอดชีพ",
        ],
        softwareRequirements: "Windows 10/11, กล้อง DSLR หรือ Webcam USB",
        inLanguage: ["th", "en"],
    }
}

export default function SoftwarePage() {
    const jsonLd = generateJsonLd()

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <SoftwarePageContent />
        </>
    )
}
