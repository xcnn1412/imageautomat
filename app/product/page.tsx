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
// JSON-LD Structured Data — ใช้ catalogProducts (ข้อมูลจริงที่แสดงบนหน้า)
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
        "@type": "ItemList",
        name: "ซื้อตู้ถ่ายรูป Photobooth คุณภาพพรีเมียม จาก IMAGEAUTOMAT",
        description:
            "รวมตู้ถ่ายรูปและโฟโต้บูธคุณภาพสูงทุกรุ่นพร้อมจำหน่าย ราคาคุ้มค่า รับประกัน 1 ปี บริการหลังการขายครบวงจร",
        numberOfItems: catalogProducts.length,
        itemListElement: itemListElements,
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
