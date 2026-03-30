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

// JSON-LD Structured Data — @graph: SoftwareApplication + BreadcrumbList + FAQPage
function generateJsonLd() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.imageautomat.com/software#software",
                name: "Imageland — ซอฟต์แวร์ตู้ถ่ายรูป Photobooth",
                applicationCategory: "MultimediaApplication",
                operatingSystem: "Windows 10, Windows 11",
                description:
                    "ซอฟต์แวร์ตู้ถ่ายรูป Photobooth ครบวงจร รองรับ AI Filter, Green Screen, GIF, Boomerang, Live Gallery, พิมพ์รูปทันที และแชร์ผ่าน QR Code พร้อมอัปเดตฟีเจอร์ใหม่ฟรีตลอดชีพ",
                url: "https://www.imageautomat.com/software",
                image: "https://www.imageautomat.com/images/og-image.jpg",
                inLanguage: ["th", "en"],
                softwareRequirements: "Windows 10/11, กล้อง DSLR หรือ Webcam USB",
                featureList: [
                    "ถ่ายรูปและวิดีโอ รองรับ GIF และ Boomerang",
                    "AI Filter และ Effect อัตโนมัติ",
                    "Green Screen ลบพื้นหลังอัตโนมัติ",
                    "ออกแบบ Template กว่า 100 แบบ",
                    "แชร์ผ่าน QR Code, Email, LINE ทันที",
                    "Live Gallery แสดงรูปแบบเรียลไทม์",
                    "พิมพ์รูปคุณภาพสูงภายใน 10 วินาที",
                    "อัปเดตฟีเจอร์ใหม่ฟรีตลอดชีพ",
                    "Multi-Language รองรับทั้งภาษาไทยและอังกฤษ",
                    "ระบบ Analytics & Report",
                ],
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "120",
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
                "@type": "BreadcrumbList",
                "@id": "https://www.imageautomat.com/software#breadcrumb",
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
                        name: "ซอฟต์แวร์ตู้ถ่ายรูป Photobooth — Imageland",
                        item: "https://www.imageautomat.com/software",
                    },
                ],
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.imageautomat.com/software#faq",
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "ซอฟต์แวร์ตู้ถ่ายรูป Imageland รองรับ Windows รุ่นไหนบ้าง?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "ซอฟต์แวร์ Imageland รองรับ Windows 10 และ Windows 11 ทั้งแบบ 32-bit และ 64-bit พร้อมรองรับกล้อง DSLR ทุกยี่ห้อและ Webcam USB ทั่วไป",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "ซอฟต์แวร์ Photobooth Imageland มีฟีเจอร์อะไรบ้าง?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Imageland รองรับการถ่ายรูป GIF Boomerang และวิดีโอ พร้อม AI Filter และ Green Screen อัตโนมัติ ออกแบบ Template กว่า 100 แบบ แชร์ผ่าน QR Code, Email หรือ LINE ได้ทันที ระบบ Live Gallery แสดงรูปเรียลไทม์ และพิมพ์รูปคุณภาพสูงภายใน 10 วินาที",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "อัปเดตซอฟต์แวร์ตู้ถ่ายรูปต้องเสียค่าใช้จ่ายเพิ่มไหม?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "ไม่มีค่าใช้จ่ายเพิ่มเติม ซอฟต์แวร์ Imageland อัปเดตฟีเจอร์ใหม่ฟรีตลอดชีพ ไม่มีค่าสมาชิกรายเดือนหรือรายปี",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "ซอฟต์แวร์ Photobooth รองรับภาษาไทยไหม?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "รองรับทั้งภาษาไทยและภาษาอังกฤษ (Multi-Language TH/EN) สามารถสลับภาษาได้ตามความต้องการของงาน",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "ซอฟต์แวร์ Photobooth ใช้กับเครื่องพิมพ์รุ่นไหนได้บ้าง?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Imageland รองรับเครื่องพิมพ์ภาพถ่ายยี่ห้อดัง เช่น DNP DS-Series, Mitsubishi CP-Series, Hiti และเครื่องพิมพ์ทั่วไปผ่าน Windows Driver",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "ซอฟต์แวร์ Photobooth ซื้อพร้อมตู้หรือซื้อแยกได้?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "ซอฟต์แวร์ Imageland รวมอยู่ในทุกแพ็กเกจตู้โฟโต้บูธของ IMAGEAUTOMAT สอบถามการซื้อ License แยกสำหรับฮาร์ดแวร์ที่มีอยู่ผ่าน LINE @imageautomat",
                        },
                    },
                ],
            },
        ],
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
