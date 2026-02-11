import type { Metadata } from "next"
import { SoftwarePageContent } from "./software-page-content"

export const metadata: Metadata = {
    title: "ซอฟต์แวร์ Photobooth — Imageland Software",
    description:
        "ซอฟต์แวร์ตู้ถ่ายรูป Photobooth จาก IMAGEAUTOMAT ระบบ Imageland ใช้งานง่าย รองรับ AI Filter, Green Screen, GIF, Boomerang และอื่นๆ พร้อมอัปเดตฟรีตลอดชีพ",
    keywords: [
        "ซอฟต์แวร์ตู้ถ่ายรูป",
        "Photobooth Software",
        "Imageland",
        "AI Photobooth",
        "Green Screen",
        "GIF Booth",
        "Boomerang",
        "IMAGEAUTOMAT",
        "photobooth software thailand",
    ],
    alternates: {
        canonical: "/software",
    },
    openGraph: {
        title: "ซอฟต์แวร์ Photobooth — Imageland Software | IMAGEAUTOMAT",
        description:
            "ซอฟต์แวร์ตู้ถ่ายรูป Photobooth ระบบ Imageland ใช้งานง่าย รองรับฟีเจอร์มากมาย พร้อมอัปเดตฟรีตลอดชีพ",
        url: "https://www.imageautomat.com/software",
        type: "website",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ซอฟต์แวร์ Photobooth จาก IMAGEAUTOMAT",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ซอฟต์แวร์ Photobooth — Imageland Software | IMAGEAUTOMAT",
        description:
            "ซอฟต์แวร์ตู้ถ่ายรูป Photobooth ระบบ Imageland ใช้งานง่าย รองรับฟีเจอร์มากมาย",
        images: ["/images/og-image.jpg"],
    },
}

export default function SoftwarePage() {
    return <SoftwarePageContent />
}
