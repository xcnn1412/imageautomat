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
        canonical: "https://www.imageautomat.com/rental",
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
                    name: "ให้เช่าตู้ถ่ายภาพ ราคาเริ่มต้นเท่าไหร่?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ราคาให้เช่าตู้ถ่ายภาพและให้เช่า Photobooth ขึ้นอยู่กับระยะเวลาเช่า รูปแบบงาน และฟีเจอร์ที่เลือก เช่น ระบบชำระเงินหรือ Branding หน้างาน ติดต่อทีมงานเพื่อรับใบเสนอราคาที่เหมาะกับงานของคุณ",
                    },
                },
                {
                    "@type": "Question",
                    name: "ให้เช่า Photobooth รายวัน รายเดือน และรายปี ต่างกันอย่างไร?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "แพ็กเกจรายวันเหมาะกับงานอีเวนต์ระยะสั้น แพ็กเกจรายเดือนเหมาะกับการทดลองตลาด และแพ็กเกจรายปีเหมาะกับธุรกิจที่ต้องการต้นทุนต่อเดือนคุ้มค่าที่สุด โดยทุกแผนสามารถเลือกฟีเจอร์เสริมได้ตามต้องการ",
                    },
                },
                {
                    "@type": "Question",
                    name: "ระบบชำระเงินของ Photobooth Software รองรับช่องทางอะไรบ้าง?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ระบบชำระเงิน Photobooth ของเรารองรับ PromptPay, TrueMoney Wallet, Alipay, WeChat Pay, ShopeePay และบัตรเครดิต Visa/Mastercard/JCB รายได้ทุกธุรกรรมถูกบันทึกอัตโนมัติใน Dashboard พร้อมรายงานละเอียด",
                    },
                },
                {
                    "@type": "Question",
                    name: "สามารถปรับแต่งกรอบรูปและเทมเพลตได้ไหม?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ได้ ซอฟต์แวร์ของเรามีเครื่องมือแก้ไขดีไซน์ที่ใช้งานง่าย รองรับการสร้างกรอบรูป โอเวอร์เลย์ และเทมเพลตแบรนด์เองได้ สามารถเปลี่ยนดีไซน์ตามธีมงาน เทศกาล หรือแคมเปญโปรโมชันได้ทันที",
                    },
                },
                {
                    "@type": "Question",
                    name: "มีบริการ Support หลังการขายไหม?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ทุกแผนเช่าซอฟต์แวร์มีบริการ Support ทางเทคนิค แผนระยะสั้นรองรับในเวลาทำการ แผนระยะยาวได้รับ Priority Support 24/7 พร้อมการฝึกอบรมและเอกสารประกอบเพื่อให้เริ่มต้นได้อย่างรวดเร็ว",
                    },
                },
                {
                    "@type": "Question",
                    name: "ให้เช่าตู้ถ่ายภาพ ใช้เวลาติดตั้งนานแค่ไหน?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "บริการให้เช่าตู้ถ่ายภาพและให้เช่า Photobooth โดยทั่วไปสามารถนัดติดตั้งล่วงหน้าได้ตามรูปแบบงาน ทีมงานของเราจะประสานงานตั้งแต่ขนส่ง ติดตั้ง ทดสอบระบบ จนพร้อมใช้งานหน้างาน",
                    },
                },
                {
                    "@type": "Question",
                    name: "จัดการตู้เช่า Photobooth หลายสาขาจากที่เดียวได้ไหม?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ได้ Cloud Dashboard ของเราช่วยให้ติดตามและจัดการตู้ได้ทุกสาขา พุชอัปเดต เปลี่ยนการตั้งค่า และดูรายงานรายได้รวมของทุกตู้ในหน้าจอเดียว",
                    },
                },
                {
                    "@type": "Question",
                    name: "ลูกค้าจะได้รับรูปถ่ายอย่างไร?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ลูกค้าสามารถรับรูปผ่าน QR Code (ไม่ต้องโหลดแอป), อีเมล, SMS หรือพิมพ์ออกมาทันที รองรับการแชร์ LINE, Facebook และ Instagram ได้ทันทีเพื่อเพิ่ม Engagement",
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
