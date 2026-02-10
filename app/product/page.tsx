import type { Metadata } from "next"
import { ProductPageContent } from "./product-page-content"

export const metadata: Metadata = {
    title: "สินค้าของเรา",
    description:
        "ตู้ถ่ายรูปและ Photobooth คุณภาพสูงจาก IMAGEAUTOMAT หลากหลายรุ่นให้เลือก เหมาะสำหรับงานแต่งงาน งานอีเวนต์ และงานเปิดตัวสินค้า",
    keywords: [
        "photobooth",
        "ตู้ถ่ายรูป",
        "photobox",
        "เช่าตู้ถ่ายรูป",
        "photobooth rental",
        "camera 360",
    ],
    openGraph: {
        title: "สินค้าของเรา | IMAGEAUTOMAT",
        description:
            "ตู้ถ่ายรูปและ Photobooth คุณภาพสูงจาก IMAGEAUTOMAT หลากหลายรุ่นให้เลือก",
        url: "https://www.imageautomat.com/product",
    },
}

export default function ProductPage() {
    return <ProductPageContent />
}
