import type { Metadata } from "next"
import { ProductPageContent } from "./product-page-content"
import { products } from "@/data/products"

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

// JSON-LD Structured Data — Product Catalog + ItemList
function generateJsonLd() {
    const itemListElements = products.map((product, index) => ({
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
        name: "สินค้าตู้ถ่ายรูป Photobooth จาก IMAGEAUTOMAT",
        description:
            "รวมตู้ถ่ายรูปและ Photobooth คุณภาพสูงทุกรุ่น ทั้งบริการเช่าและจำหน่าย",
        numberOfItems: products.length,
        itemListElement: itemListElements,
    }
}

export default function ProductPage() {
    const jsonLd = generateJsonLd()

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProductPageContent />
        </>
    )
}
