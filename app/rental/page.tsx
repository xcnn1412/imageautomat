import type { Metadata } from "next"
import { RentalPageContent } from "./rental-page-content"

export const metadata: Metadata = {
    title: "เช่าตู้โฟโต้บูธ พร้อมทีมงาน ราคาเริ่ม 3,000 บาท | IMAGEAUTOMAT",
    description: "บริการเช่าตู้ถ่ายรูป Photobooth ครบวงจร พร้อมทีมงานมืออาชีพ ราคาเริ่มต้น 3,000 บาท เหมาะสำหรับงานแต่งงาน งานเปิดตัวสินค้า งานคอร์ปอเรท และงานอีเวนต์ทุกประเภท บริการทั่วประเทศ จัดส่ง-ติดตั้ง-เก็บคืนโดยทีมงาน",
    keywords: [
        "เช่าโฟโต้บูธ",
        "ให้เช่าตู้ถ่ายรูป",
        "Photobooth เช่า",
        "เช่าตู้ถ่ายรูปงานแต่ง",
        "บริการโฟโต้บูธ",
        "เช่าโฟโต้บูธราคาถูก",
        "Photobooth สำหรับงานอีเวนต์",
        "เช่าตู้ถ่ายรูปกรุงเทพ",
        "เช่า photobooth ต่างจังหวัด",
        "โฟโต้บูธงานแต่งงาน",
        "เช่าตู้โฟโต้บูธพร้อมทีมงาน",
        "ราคาเช่าโฟโต้บูธ",
        "photobooth rental thailand",
        "เช่าตู้ถ่ายรูปงานคอร์ปอเรท",
        "IMAGEAUTOMAT",
    ],
    openGraph: {
        title: "เช่าตู้โฟโต้บูธ พร้อมทีมงาน ราคาเริ่ม 3,000 บาท | IMAGEAUTOMAT",
        description: "บริการเช่าตู้ถ่ายรูป Photobooth ครบวงจร พร้อมทีมงานมืออาชีพ ราคาเริ่มต้น 3,000 บาท บริการทั่วประเทศ",
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
        title: "เช่าตู้โฟโต้บูธ พร้อมทีมงาน ราคาเริ่ม 3,000 บาท | IMAGEAUTOMAT",
        description: "บริการเช่าตู้ถ่ายรูป Photobooth ครบวงจร พร้อมทีมงานมืออาชีพ ราคาเริ่มต้น 3,000 บาท บริการทั่วประเทศ",
        images: ["/images/og-image.jpg"],
    },
    alternates: {
        canonical: "/rental",
    },
}

// JSON-LD Structured Data — @graph: Service + AggregateRating + BreadcrumbList + FAQPage
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "@id": "https://www.imageautomat.com/rental#service",
            name: "บริการเช่าตู้โฟโต้บูธ — IMAGEAUTOMAT",
            serviceType: "Photobooth Rental Service",
            description: "บริการเช่าตู้ถ่ายรูป Photobooth ครบวงจร พร้อมทีมงานมืออาชีพ สำหรับงานแต่งงาน งานเปิดตัวสินค้า งานคอร์ปอเรท และงานอีเวนต์ทุกประเภท ราคาเริ่มต้น 3,000 บาท บริการทั่วประเทศไทย",
            url: "https://www.imageautomat.com/rental",
            image: "https://www.imageautomat.com/images/og-image.jpg",
            provider: {
                "@type": "Organization",
                name: "IMAGEAUTOMAT",
                url: "https://www.imageautomat.com",
                telephone: "+66-63-594-4429",
                sameAs: ["https://lin.ee/Q5DSE1r"],
            },
            areaServed: {
                "@type": "Country",
                name: "Thailand",
            },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "320",
                bestRating: "5",
                worstRating: "1",
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
                            description: "บริการเช่าตู้ถ่ายรูป Photobooth พร้อมทีมงานสำหรับงานแต่งงาน ตกแต่งตู้ตามธีมงาน",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "เช่าตู้โฟโต้บูธงานอีเวนต์",
                            description: "บริการเช่าตู้ถ่ายรูป Photobooth พร้อมทีมงานสำหรับงานอีเวนต์ งานเปิดตัวสินค้า และงานคอร์ปอเรท",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "เช่าตู้โฟโต้บูธงานเปิดตัวสินค้า",
                            description: "บริการ Photobooth สำหรับงาน Product Launch Branding Activation ติด Wrap Sticker แบรนด์ได้ทั้งตู้",
                        },
                    },
                ],
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.imageautomat.com/rental#breadcrumb",
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
                    name: "เช่าตู้โฟโต้บูธ พร้อมทีมงาน",
                    item: "https://www.imageautomat.com/rental",
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.imageautomat.com/rental#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "เช่าตู้โฟโต้บูธ Photobooth ราคาเท่าไหร่?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ราคาเริ่มต้น 3,000 บาทต่อครั้ง ขึ้นอยู่กับรุ่นตู้และระยะเวลาการใช้งาน สอบถามราคาพิเศษได้ที่ LINE @imageautomat",
                    },
                },
                {
                    "@type": "Question",
                    name: "เช่าตู้ถ่ายรูป Photobooth ต่างจังหวัดได้ไหม?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "บริการทั่วประเทศไทย มีทีมงานจัดส่งและติดตั้งถึงสถานที่จัดงาน ทั้งในกรุงเทพฯ ปริมณฑล และต่างจังหวัด",
                    },
                },
                {
                    "@type": "Question",
                    name: "ต้องจองล่วงหน้ากี่วัน?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "แนะนำจองล่วงหน้าอย่างน้อย 7 วัน สำหรับช่วงเทศกาล วันหยุดยาว หรืองานแต่งงานควรจองล่วงหน้า 1 เดือนเพื่อความมั่นใจ",
                    },
                },
                {
                    "@type": "Question",
                    name: "เช่าตู้โฟโต้บูธมีทีมงานมาดูแลในวันงานไหม?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "มีทีมงานมืออาชีพดูแลตลอดงาน ตั้งแต่ติดตั้ง ดูแลระบบระหว่างงาน จนถึงเก็บอุปกรณ์คืนหลังงาน",
                    },
                },
                {
                    "@type": "Question",
                    name: "สามารถตกแต่งหรือติดแบรนด์บนตู้โฟโต้บูธได้ไหม?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ได้ครับ สามารถติด Wrap Sticker ตามธีมงานหรือแบรนด์บนตู้ได้ทั้งคัน รวมถึงออกแบบ Template ภาพถ่ายให้ตรงกับแบรนด์ของลูกค้า",
                    },
                },
                {
                    "@type": "Question",
                    name: "ตู้โฟโต้บูธรุ่นไหนเหมาะกับงานแต่งงาน?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ยอดนิยมสำหรับงานแต่งงานคือ Signature Photobooth (ลายเซ็น + ถ่ายภาพ) และ Reel Photobooth (คลิปสั้น) ทั้งสองรุ่นสร้าง Engagement และ Moment สุดพิเศษให้แขกในงาน",
                    },
                },
            ],
        },
    ],
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
