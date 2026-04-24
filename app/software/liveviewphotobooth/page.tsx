import type { Metadata } from "next"
import { LiveviewPageContent } from "./liveview-page-content"

export const metadata: Metadata = {
    title: "Liveview Photobooth Software | ภาพเคลื่อนไหว Pre-capture | IMAGEAUTOMAT",
    description:
        "Liveview Photobooth Software ที่ดีที่สุด — ซอฟต์แวร์ตู้ถ่ายรูป Pre-capture ที่บันทึกช่วงเวลาธรรมชาติก่อนกดชัตเตอร์ ได้ภาพเคลื่อนไหว Living Portrait AI Effect GIF Output พิมพ์รูปทันที เหมาะสำหรับงานแต่งงาน คอนเสิร์ต Corporate Event ราคาไม่มีค่าสมาชิกรายเดือน อัปเดตฟรีตลอดชีพ",
    keywords: [
        "photobooth software",
        "ซอฟต์แวร์ photobooth",
        "software photobooth",
        "Liveview Photobooth",
        "photobooth software ไทย",
        "ซอฟต์แวร์ตู้ถ่ายรูป",
        "pre-capture photobooth software",
        "photobooth software windows",
        "IMAGEAUTOMAT photobooth",
        "photobooth software การแต่งงาน",
        "photobooth software wedding",
        "liveview ตู้ถ่ายรูป",
        "ลื่นวิว โฟโต้บูธ",
        "ซอฟต์แวร์ตู้ถ่ายรูปอีเวนต์",
        "photobooth software thailand",
        "โปรแกรม photobooth ตู้ถ่ายรูป",
        "ตู้ถ่ายรูป liveview",
        "IMAGEAUTOMAT software",
        "ซอฟต์แวร์ตู้ถ่ายรูปงานแต่งงาน",
        "photobooth GIF software",
        "animated photobooth software",
        "photobooth software ราคา",
        "best photobooth software",
    ],
    alternates: {
        canonical: "/software/liveviewphotobooth",
    },
    openGraph: {
        title: "Liveview Photobooth Software | ภาพเคลื่อนไหว Pre-capture | IMAGEAUTOMAT",
        description:
            "ซอฟต์แวร์ Liveview Photobooth ที่ดีที่สุด บันทึกช่วงเวลาก่อนกดชัตเตอร์ด้วยเทคโนโลยี Pre-capture ได้ภาพเคลื่อนไหว Living Portrait ไม่มีค่าสมาชิก อัปเดตฟรี",
        url: "https://www.imageautomat.com/software/liveviewphotobooth",
        type: "website",
        siteName: "IMAGEAUTOMAT — Photobooth Software",
        locale: "th_TH",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Liveview Photobooth Software — ภาพเคลื่อนไหว Pre-capture ตู้ถ่ายรูป IMAGEAUTOMAT",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Liveview Photobooth Software | IMAGEAUTOMAT",
        description:
            "ซอฟต์แวร์ photobooth ดีที่สุด Pre-capture บันทึกช่วงเวลาธรรมชาติ ได้ภาพเคลื่อนไหว AI Effect พิมพ์ทันที",
        images: ["/images/og-image.jpg"],
    },
}

// JSON-LD @graph — SoftwareApplication + VideoObject + BreadcrumbList + FAQPage
function generateJsonLd() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Product",
                "@id": "https://www.imageautomat.com/software/liveviewphotobooth#product",
                name: "IMAGEAUTOMAT Liveview Photobooth Software",
                brand: "IMAGEAUTOMAT",
                description:
                    "ซอฟต์แวร์ตู้ถ่ายรูป Liveview Photobooth ที่บันทึกช่วงเวลาธรรมชาติก่อนกดชัตเตอร์ด้วยเทคโนโลยี Pre-capture ได้ภาพเคลื่อนไหว Living Portrait รองรับ AI Effect, GIF, Video Output, พิมพ์รูป, แชร์ QR Code ทันที",
                image: "https://www.imageautomat.com/images/og-image.jpg",
                url: "https://www.imageautomat.com/software/liveviewphotobooth",
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "98",
                    bestRating: "5",
                    worstRating: "1",
                },
                offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    priceCurrency: "THB",
                    description: "ไม่มีค่าสมาชิกรายเดือน อัปเดตฟรีตลอดชีพ",
                    seller: {
                        "@type": "Organization",
                        name: "IMAGEAUTOMAT",
                        url: "https://www.imageautomat.com",
                    },
                },
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.imageautomat.com/software/liveviewphotobooth#software",
                name: "IMAGEAUTOMAT — Liveview Photobooth",
                applicationCategory: "MultimediaApplication",
                applicationSubCategory: "Photography Software",
                operatingSystem: "Windows 10, Windows 11",
                description:
                    "ซอฟต์แวร์ Liveview Photobooth จาก IMAGEAUTOMAT เปลี่ยนภาพนิ่งให้เป็นภาพเคลื่อนไหวที่มีชีวิต ด้วยเทคโนโลยี Pre-capture บันทึกช่วงเวลาก่อนกดชัตเตอร์ รองรับ AI Effect, GIF, แชร์ QR Code ทันที",
                url: "https://www.imageautomat.com/software/liveviewphotobooth",
                image: "https://www.imageautomat.com/images/og-image.jpg",
                inLanguage: ["th", "en"],
                softwareRequirements: "Windows 10/11, กล้อง DSLR หรือ Webcam USB",
                featureList: [
                    "Pre-capture Technology บันทึกช่วงเวลาก่อนกดชัตเตอร์",
                    "Living Portrait ภาพนิ่งที่มีชีวิต",
                    "GIF และ Cinemagraph Output",
                    "AI Effect เอฟเฟกต์ปรับแต่งอัตโนมัติ",
                    "แชร์ผ่าน QR Code, LINE, Email ทันที",
                    "พิมพ์รูปคุณภาพสูงภายใน 10 วินาที",
                    "ระบบ Live Gallery แสดงผลแบบ Realtime",
                    "อัปเดตฟีเจอร์ใหม่ฟรีตลอดชีพ",
                ],
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "98",
                    bestRating: "5",
                    worstRating: "1",
                },
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
            },
            {
                "@type": "VideoObject",
                "@id": "https://www.imageautomat.com/software/liveviewphotobooth#video",
                name: "ตัวอย่างผลงาน Liveview Photobooth — ภาพความทรงจำที่ขยับได้",
                description:
                    "ตัวอย่างผลลัพธ์ภาพที่ได้จาก Liveview Photobooth Software โดย IMAGEAUTOMAT",
                thumbnailUrl: "https://www.imageautomat.com/images/og-image.jpg",
                uploadDate: "2026-01-01",
                contentUrl: "https://www.imageautomat.com/slideshow/videos/file_photobooth_preview.mp4",
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.imageautomat.com/software/liveviewphotobooth#breadcrumb",
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
                        name: "ซอฟต์แวร์ตู้ถ่ายรูป Photobooth",
                        item: "https://www.imageautomat.com/software",
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: "Liveview Photobooth",
                        item: "https://www.imageautomat.com/software/liveviewphotobooth",
                    },
                ],
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.imageautomat.com/software/liveviewphotobooth#faq",
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "Liveview Photobooth คืออะไร?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Liveview Photobooth คือโหมดหนึ่งในซอฟต์แวร์ IMAGEAUTOMAT ที่บันทึกช่วงเวลาก่อนกดชัตเตอร์ด้วยเทคโนโลยี Pre-capture ทำให้ได้ผลลัพธ์เป็นภาพเคลื่อนไหว (Living Portrait) ที่แตกต่างจากภาพนิ่งทั่วไป เหมือนภาพในหนัง Harry Potter ที่ขยับได้จริง",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "ซอฟต์แวร์ Liveview Photobooth ใช้กับกล้องอะไรได้บ้าง?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "IMAGEAUTOMAT Liveview Photobooth รองรับกล้อง DSLR ทุกยี่ห้อ (Canon, Nikon, Sony) และ Webcam USB ทั่วไป บนระบบปฏิบัติการ Windows 10/11",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "ผลลัพธ์จาก Liveview Photobooth ได้เป็นไฟล์ประเภทใด?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "ได้ทั้ง GIF แบบ Loop, Video Clip (MP4), และภาพนิ่ง JPEG คุณภาพสูง โดยลูกค้าสามารถรับไฟล์ผ่าน QR Code, LINE หรือพิมพ์รูปทันทีภายใน 10 วินาที",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Liveview Photobooth เหมาะกับงานประเภทใด?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "เหมาะสำหรับงานแต่งงาน งานเปิดตัวสินค้า คอนเสิร์ต งาน Corporate Event งาน Social Media activation และงานพรีเมียมที่ต้องการสร้าง Wow Moment ให้แขกในงาน",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Liveview Photobooth ต่างจาก Reel Photobooth อย่างไร?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Liveview Photobooth เน้นบันทึกช่วงเวลาธรรมชาติ ก่อนกดชัตเตอร์ (Pre-capture) ได้ภาพเคลื่อนไหวแบบ Portrait ส่วน Reel Photobooth เน้นบันทึกคลิปสั้นแบบควบคุมได้ คล้าย TikTok/Reels ทั้งสองโหมดรวมอยู่ในซอฟต์แวร์ IMAGEAUTOMAT เดียวกัน",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "ซอฟต์แวร์ Photobooth ราคาเท่าไหร่? มีค่าสมาชิกรายเดือนไหม?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "ซอฟต์แวร์ IMAGEAUTOMAT รวมอยู่ในทุกแพ็กเกจตู้โฟโต้บูธของ IMAGEAUTOMAT ไม่มีค่าสมาชิกรายเดือนหรือรายปี อัปเดตฟีเจอร์ใหม่ฟรีตลอดชีพ สอบถามราคา License แยกได้ที่ LINE @imageautomat",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "สามารถทดลองใช้ซอฟต์แวร์ Liveview Photobooth ก่อนซื้อได้ไหม?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "ได้ครับ ทีมงาน IMAGEAUTOMAT ยินดีให้ทดลองสาธิตซอฟต์แวร์ตู้ถ่ายรูป IMAGEAUTOMAT รวมถึงโหมด Liveview Photobooth ก่อนตัดสินใจ ติดต่อผ่าน LINE @imageautomat หรือโทร 063-654-6249",
                        },
                    },
                ],
            },
            {
                "@type": "HowTo",
                "@id": "https://www.imageautomat.com/software/liveviewphotobooth#howto",
                name: "วิธีใช้ Liveview Photobooth Software",
                description: "ขั้นตอนการใช้งานซอฟต์แวร์ตู้ถ่ายรูป Liveview Photobooth แบบละเอียด 4 ขั้น",
                totalTime: "PT3M",
                step: [
                    {
                        "@type": "HowToStep",
                        position: 1,
                        name: "เข้าตู้ Photobooth และเริ่มต้น",
                        text: "ลูกค้าเข้าสู่ตู้ถ่ายรูป ระบบ Liveview Photobooth Software เริ่มบันทึกช่วงเวลาก่อนกดชัตเตอร์อัตโนมัติผ่าน Pre-capture Technology",
                    },
                    {
                        "@type": "HowToStep",
                        position: 2,
                        name: "Pre-capture บันทึกช่วงเวลาธรรมชาติ",
                        text: "AI ของ IMAGEAUTOMAT Software บันทึกลูกเลนส์การเคลื่อนไหว โพสท์ท่า และการแสดงออกของลูกค้าก่อนกดปุ่มชัตเตอร์ครั้งสุดท้าย ได้ช่วงเวลาที่เป็นธรรมชาติที่สุด",
                    },
                    {
                        "@type": "HowToStep",
                        position: 3,
                        name: "ประมวลผล Effect และสร้าง Living Portrait",
                        text: "ระบบ IMAGEAUTOMAT ตัดต่อ และใส่ Effects, Template, AI Adjustment อัตโนมัติ สร้างภาพเคลื่อนไหว (Living Portrait) ที่สมบูรณ์พร้อมใช้งาน",
                    },
                    {
                        "@type": "HowToStep",
                        position: 4,
                        name: "รับไฟล์ และแชร์ทันที",
                        text: "ลูกค้าสแกน QR Code รับไฟล์ GIF / MP4 ลงมือถือ หรือพิมพ์รูปโปรแกรม IMAGEAUTOMAT ทันที ภายใน 10 วินาที แชร์ต่อ LINE Instagram Facebook ได้เลย",
                    },
                ],
            },
        ],
    }
}

export default function LiveviewPhotoboothPage() {
    const jsonLd = generateJsonLd()

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <LiveviewPageContent />
        </>
    )
}
