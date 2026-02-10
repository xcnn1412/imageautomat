import type { Metadata } from "next"
import { ProductPageContent } from "./product-page-content"
import { products } from "@/data/products"

export const metadata: Metadata = {
    title: "สินค้าตู้ถ่ายรูป Photobooth — เช่า & ซื้อ",
    description:
        "ตู้ถ่ายรูป Photobooth คุณภาพสูงจาก IMAGEAUTOMAT กว่า 50 รุ่น ทั้งเช่าและซื้อ เหมาะสำหรับงานแต่งงาน งานอีเวนต์ งานเปิดตัวสินค้า พร้อมทีมงานมืออาชีพ บริการทั่วประเทศไทย",
    keywords: [
        "ตู้ถ่ายรูป",
        "photobooth",
        "เช่าตู้ถ่ายรูป",
        "ซื้อตู้ถ่ายรูป",
        "photobox",
        "ซอฟต์แวร์ตู้ถ่ายรูป",
        "Photobooth Software",
        "camera 360",
        "photobooth งานแต่งงาน",
        "photobooth งานอีเวนต์",
        "เช่า photobooth กรุงเทพ",
        "Imageland",
        "IMAGEAUTOMAT",
    ],
    alternates: {
        canonical: "/product",
    },
    openGraph: {
        title: "สินค้าตู้ถ่ายรูป Photobooth — เช่า & ซื้อ | IMAGEAUTOMAT",
        description:
            "ตู้ถ่ายรูปและ Photobooth คุณภาพสูงกว่า 50 รุ่น ทั้งเช่าและซื้อ เหมาะสำหรับทุกรูปแบบงาน พร้อมทีมงานมืออาชีพ",
        url: "https://www.imageautomat.com/product",
        type: "website",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "สินค้าตู้ถ่ายรูป Photobooth จาก IMAGEAUTOMAT",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "สินค้าตู้ถ่ายรูป Photobooth — เช่า & ซื้อ | IMAGEAUTOMAT",
        description:
            "ตู้ถ่ายรูปและ Photobooth คุณภาพสูงกว่า 50 รุ่น ทั้งเช่าและซื้อ เหมาะสำหรับทุกรูปแบบงาน",
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
