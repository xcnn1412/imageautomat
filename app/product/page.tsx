import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductHero } from "./product-hero"
import { ProductGrid } from "./product-grid"
import { ProductCta } from "./product-cta"
import { catalogProducts } from "@/data/catalogs"

export const metadata: Metadata = {
    title: "ซื้อตู้โฟโต้บูธ Photobooth — IMAGEAUTOMAT",
    description:
        "ซื้อตู้ถ่ายรูป Photobooth คุณภาพพรีเมียม พร้อมรับประกันและบริการหลังการขาย เหมาะสำหรับธุรกิจรับจ้างถ่ายภาพ งานอีเวนต์ และร้านสตูดิโอ จาก IMAGEAUTOMAT",
    keywords: [
        "ซื้อตู้ถ่ายรูป",
        "ตู้ถ่ายรูปขาย",
        "photobooth ราคา",
        "ซื้อ photobooth",
        "ตู้โฟโต้บูธมือสอง",
        "photobooth มือสอง",
        "ตู้ถ่ายรูปคุณภาพสูง",
        "ซื้อตู้โฟโต้บูธ",
        "ขายตู้ photobooth",
        "photobooth ธุรกิจ",
        "ตู้โฟโต้บูธผลิตในไทย",
        "ราคาตู้โฟโต้บูธ",
        "ตู้ถ่ายรูปรับประกัน",
        "photobooth พร้อมซอฟต์แวร์",
        "ตู้ถ่ายรูปงานอีเวนต์",
        "IMAGEAUTOMAT",
    ],
    alternates: {
        canonical: "/product",
    },
    openGraph: {
        title: "ซื้อตู้โฟโต้บูธคุณภาพพรีเมียม | IMAGEAUTOMAT",
        description:
            "ซื้อตู้ถ่ายรูป Photobooth คุณภาพสูง พร้อมรับประกันและบริการหลังการขาย เหมาะสำหรับธุรกิจและสตูดิโอ",
        url: "https://www.imageautomat.com/product",
        type: "website",
        siteName: "IMAGEAUTOMAT",
        locale: "th_TH",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ซื้อตู้ถ่ายรูป Photobooth จาก IMAGEAUTOMAT",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ซื้อตู้โฟโต้บูธคุณภาพพรีเมียม | IMAGEAUTOMAT",
        description:
            "ซื้อตู้ถ่ายรูป Photobooth คุณภาพสูง พร้อมรับประกันและบริการหลังการขาย",
        images: ["/images/og-image.jpg"],
    },
}

// ============================================================
// JSON-LD Structured Data — @graph: ItemList + BreadcrumbList + FAQPage
// ============================================================
function generateJsonLd() {
    const itemListElements = catalogProducts.map((product, index) => ({
        "@type": "ListItem" as const,
        position: index + 1,
        item: {
            "@type": "Product" as const,
            name: `${product.nameTh} — ${product.name}`,
            description: product.longDescription,
            image: `https://www.imageautomat.com${product.src}`,
            brand: {
                "@type": "Brand" as const,
                name: "IMAGEAUTOMAT",
            },
            category: "ตู้ถ่ายรูป Photobooth",
            aggregateRating: {
                "@type": "AggregateRating" as const,
                ratingValue: "4.8",
                reviewCount: "85",
                bestRating: "5",
                worstRating: "1",
            },
            offers: {
                "@type": "Offer" as const,
                availability: "https://schema.org/InStock",
                priceCurrency: "THB",
                seller: {
                    "@type": "Organization" as const,
                    name: "IMAGEAUTOMAT",
                },
            },
        },
    }))

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ItemList",
                "@id": "https://www.imageautomat.com/product#itemlist",
                name: "ซื้อตู้ถ่ายรูป Photobooth คุณภาพพรีเมียม จาก IMAGEAUTOMAT",
                description:
                    "รวมตู้ถ่ายรูปและโฟโต้บูธคุณภาพสูงทุกรุ่นพร้อมจำหน่าย ผลิตในไทย ราคาคุ้มค่า รับประกัน 1 ปี บริการหลังการขายครบวงจร",
                numberOfItems: catalogProducts.length,
                itemListElement: itemListElements,
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.imageautomat.com/product#breadcrumb",
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
                        name: "ซื้อตู้โฟโต้บูธ Photobooth",
                        item: "https://www.imageautomat.com/product",
                    },
                ],
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.imageautomat.com/product#faq",
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "ตู้โฟโต้บูธ Photobooth ราคาเท่าไหร่?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "ราคาตู้โฟโต้บูธของ IMAGEAUTOMAT มีหลายรุ่นให้เลือกตามงบประมาณ สอบถามราคาล่าสุดและโปรโมชั่นพิเศษผ่าน LINE @imageautomat ได้เลย",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "ซื้อตู้โฟโต้บูธมาพร้อมซอฟต์แวร์ไหม?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "ทุกรุ่นมาพร้อมซอฟต์แวร์ Imageland ครบชุดพร้อมใช้งานทันที รวม Template กว่า 100 แบบ รองรับ AI Filter, Green Screen, GIF, Boomerang และอัปเดตฟรีตลอดชีพ",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "ตู้โฟโต้บูธ IMAGEAUTOMAT รับประกันกี่ปี?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "รับประกันอุปกรณ์ไฟฟ้า 1 ปี พร้อมทีมบริการหลังการขายที่ดูแลตลอด มีทีมช่างพร้อมให้ความช่วยเหลือผ่าน LINE และโทรศัพท์",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "จัดส่งตู้โฟโต้บูธไปต่างจังหวัดได้ไหม?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "จัดส่งทั่วประเทศไทย สำหรับกรุงเทพฯ และปริมณฑล ฟรีค่าขนส่งและติดตั้ง สำหรับต่างจังหวัดสอบถามรายละเอียดผ่าน LINE @imageautomat",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "ตู้โฟโต้บูธเหมาะกับธุรกิจอะไรบ้าง?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "เหมาะสำหรับธุรกิจรับจ้างถ่ายภาพงานอีเวนต์ สตูดิโอถ่ายภาพ ร้านค้าที่ต้องการเพิ่มจุดดึงดูดลูกค้า งานแต่งงาน งานเลี้ยง และผู้ประกอบการที่ต้องการสร้างรายได้เพิ่มเติม",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "ตู้โฟโต้บูธผลิตจากที่ไหน?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "ตู้โฟโต้บูธทุกรุ่นของ IMAGEAUTOMAT ผลิตในประเทศไทย 100% คุมคุณภาพทุกขั้นตอนการผลิต ใช้วัสดุคุณภาพสูงและผ่านการทดสอบก่อนจัดส่งทุกคัน",
                        },
                    },
                ],
            },
        ],
    }
}

// ============================================================
// Server Component — Googlebot indexes เนื้อหานี้ได้โดยตรง (ไม่ต้องรอ JS)
// ============================================================
export default function ProductPage() {
    const jsonLd = generateJsonLd()

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Navigation />
            <ProductHero />
            <ProductGrid />
            <ProductCta />
            <Footer />
        </main>
    )
}
