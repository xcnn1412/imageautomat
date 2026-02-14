import type { Metadata } from "next"
import { ContactPageContent } from "./contact-page-content"

export const metadata: Metadata = {
    title: "ติดต่อเรา — IMAGE AUTOMAT | เช่าตู้ถ่ายรูป Photobooth",
    description:
        "ติดต่อ IMAGE AUTOMAT สอบถามราคาเช่าตู้ถ่ายรูป Photobooth สำหรับงานแต่งงาน งานอีเวนต์ งานเปิดตัวสินค้า โทร 063-594-4429 หรือแชท LINE @imageautomat",
    keywords: [
        "ติดต่อเรา",
        "เช่าตู้ถ่ายรูป",
        "ขอราคา Photobooth",
        "IMAGE AUTOMAT",
        "ตู้ถ่ายรูปงานแต่งงาน",
        "Photobooth อีเวนต์",
        "เช่า Photobooth กรุงเทพ",
    ],
    openGraph: {
        title: "ติดต่อเรา — IMAGE AUTOMAT | เช่าตู้ถ่ายรูป Photobooth",
        description:
            "สอบถามราคาเช่าตู้ถ่ายรูป Photobooth สำหรับทุกงานอีเวนต์ โทร 063-594-4429 | LINE @imageautomat",
        url: "https://www.imageautomat.com/contact",
        type: "website",
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "IMAGE AUTOMAT",
    description:
        "บริการเช่าและจำหน่ายตู้ถ่ายรูป Photobooth คุณภาพสูง สำหรับงานแต่งงาน งานอีเวนต์ และงานเปิดตัวสินค้า",
    url: "https://www.imageautomat.com",
    telephone: "+66635944429",
    email: "imageautomat@gmail.com",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Bangkok",
        addressCountry: "TH",
    },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
    },
}

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ContactPageContent />
        </>
    )
}
