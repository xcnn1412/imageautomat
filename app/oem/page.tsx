import type { Metadata } from "next"
import { OemPageContent } from "./oem-page-content"

export const metadata: Metadata = {
    title: "รับผลิตตู้โฟโต้บูธ OEM/ODM ผลิตในไทย MOQ 10 ตู้ | IMAGEAUTOMAT",
    description: "รับผลิตตู้ถ่ายรูป Photobooth แบบ OEM/ODM ตามสั่ง ออกแบบและผลิตตามสเปคและแบรนด์ของคุณ ผลิตในไทย 100% MOQ เริ่มต้น 10 ตู้ รับประกันคุณภาพทุกขั้นตอน เหมาะสำหรับผู้ประกอบการและนักลงทุน",
    keywords: [
        "ผลิตตู้โฟโต้บูธ",
        "OEM Photobooth",
        "ODM ตู้ถ่ายรูป",
        "รับผลิตตู้ถ่ายรูป",
        "Photobooth Manufacturer",
        "ผู้ผลิตโฟโต้บูธ",
        "สั่งผลิตตู้ตามสเปค",
        "รับผลิต photobooth ไทย",
        "ผลิตตู้ถ่ายรูปตามแบรนด์",
        "OEM photobooth thailand",
        "ผู้ผลิตตู้ถ่ายรูปไทย",
        "โรงงานผลิตโฟโต้บูธ",
        "สั่งผลิตตู้ photobooth",
        "ผลิตตู้โฟโต้บูธ MOQ",
        "IMAGEAUTOMAT",
    ],
    openGraph: {
        title: "รับผลิตตู้โฟโต้บูธ OEM/ODM ผลิตในไทย | IMAGEAUTOMAT",
        description: "รับผลิตตู้ถ่ายรูป Photobooth แบบ OEM/ODM ตามสั่ง ผลิตในไทย 100% MOQ เริ่มต้น 10 ตู้ รับประกันคุณภาพ",
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
        title: "รับผลิตตู้โฟโต้บูธ OEM/ODM ผลิตในไทย | IMAGEAUTOMAT",
        description: "รับผลิตตู้ถ่ายรูป Photobooth แบบ OEM/ODM ตามสั่ง ผลิตในไทย 100% MOQ เริ่มต้น 10 ตู้",
        images: ["/images/og-image.jpg"],
    },
    alternates: {
        canonical: "/oem",
    },
}

// JSON-LD Structured Data — @graph: Service + Organization + BreadcrumbList + FAQPage
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "@id": "https://www.imageautomat.com/oem#service",
            name: "รับผลิตตู้โฟโต้บูธ OEM/ODM — IMAGEAUTOMAT",
            serviceType: "OEM/ODM Photobooth Manufacturing",
            description: "รับผลิตตู้ถ่ายรูป Photobooth แบบ OEM/ODM ตามสั่ง ออกแบบและผลิตตามสเปคและแบรนด์ของคุณ ผลิตในไทย 100% MOQ เริ่มต้น 10 ตู้ รับประกันคุณภาพทุกขั้นตอน",
            url: "https://www.imageautomat.com/oem",
            image: "https://www.imageautomat.com/images/og-image.jpg",
            provider: {
                "@type": "Organization",
                "@id": "https://www.imageautomat.com#organization",
                name: "IMAGEAUTOMAT",
                url: "https://www.imageautomat.com",
                telephone: "+66-63-594-4429",
                sameAs: ["https://lin.ee/Q5DSE1r"],
            },
            areaServed: [
                { "@type": "Country", name: "Thailand" },
                { "@type": "Country", name: "Southeast Asia" },
            ],
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "บริการผลิตตู้โฟโต้บูธ OEM/ODM",
                itemListElement: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "OEM — ผลิตตามแบบลูกค้า",
                            description: "ผลิตตู้โฟโต้บูธตามดีไซน์และสเปคของลูกค้า ติดแบรนด์และ Logo ของลูกค้าได้ทั้งหมด",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "ODM — ออกแบบและผลิตให้",
                            description: "ออกแบบและผลิตตู้โฟโต้บูธใหม่ตั้งแต่ต้น รวมซอฟต์แวร์ Imageland พร้อมส่งมอบ",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "White Label — ติดแบรนด์ซอฟต์แวร์",
                            description: "ติดแบรนด์บนซอฟต์แวร์ Imageland ให้เป็นชื่อและโลโก้ของลูกค้าโดยสมบูรณ์",
                        },
                    },
                ],
            },
        },
        {
            "@type": "Organization",
            "@id": "https://www.imageautomat.com#organization",
            name: "IMAGEAUTOMAT",
            url: "https://www.imageautomat.com",
            description: "ผู้ผลิตตู้โฟโต้บูธคุณภาพพรีเมียมในประเทศไทย ผลิตกว่า 500 ตู้ต่อปี ประสบการณ์กว่า 10 ปี",
            foundingDate: "2014",
            areaServed: { "@type": "Country", name: "Thailand" },
            knowsAbout: [
                "Photobooth Manufacturing",
                "OEM/ODM Production",
                "Photobooth Software",
                "Event Photography Equipment",
            ],
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.imageautomat.com/oem#breadcrumb",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "หน้าแรก",
                    item: "https://www.imageautomat.com",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "รับผลิตตู้โฟโต้บูธ OEM/ODM",
                    item: "https://www.imageautomat.com/oem",
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.imageautomat.com/oem#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "รับผลิตตู้โฟโต้บูธ OEM ขั้นต่ำกี่ตู้?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "MOQ เริ่มต้นที่ 10 ตู้ต่อ Order สำหรับลูกค้าที่ต้องการสั่งจำนวนมากกว่านั้นมีราคาพิเศษ สอบถามได้ที่ LINE @imageautomat",
                    },
                },
                {
                    "@type": "Question",
                    name: "ผลิตตู้โฟโต้บูธ OEM ใช้เวลานานแค่ไหน?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ระยะเวลาผลิตโดยเฉลี่ย 4-8 สัปดาห์ ขึ้นอยู่กับจำนวน ความซับซ้อนของดีไซน์ และปริมาณ Customization ที่ต้องการ",
                    },
                },
                {
                    "@type": "Question",
                    name: "สามารถติดแบรนด์ของตัวเองบนตู้และซอฟต์แวร์ได้ไหม?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ได้ครับ ทั้ง OEM ตัวตู้และ White Label บนซอฟต์แวร์ Imageland สามารถเปลี่ยนชื่อ โลโก้ และสีธีมให้ตรงกับแบรนด์ของลูกค้าได้ทั้งหมด",
                    },
                },
                {
                    "@type": "Question",
                    name: "ตู้โฟโต้บูธ OEM ผลิตจากที่ไหน?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ผลิตในประเทศไทย 100% ที่โรงงานของ IMAGEAUTOMAT ควบคุมคุณภาพทุกขั้นตอน ใช้วัสดุคุณภาพสูงและทดสอบก่อนส่งมอบทุกคัน",
                    },
                },
                {
                    "@type": "Question",
                    name: "รับผลิตตู้โฟโต้บูธ OEM ส่งออกต่างประเทศได้ไหม?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ได้ครับ เรามีประสบการณ์ส่งออกไปยังหลายประเทศในอาเซียนและเอเชีย สอบถามเงื่อนไขการส่งออกและบรรจุภัณฑ์ได้โดยตรง",
                    },
                },
                {
                    "@type": "Question",
                    name: "มีบริการออกแบบตู้โฟโต้บูธให้ด้วยไหม (ODM)?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "มีบริการ ODM ครบวงจร ตั้งแต่ออกแบบโครงสร้าง เลือกวัสดุ กำหนดสเปคฮาร์ดแวร์ จนถึงพัฒนาซอฟต์แวร์ให้ตรงกับ Use Case ของลูกค้า",
                    },
                },
            ],
        },
    ],
}
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
