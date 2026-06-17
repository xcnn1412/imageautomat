import type { Metadata } from "next"
import { ShopPageContent } from "./shop-page-content"

export const metadata: Metadata = {
    title: "ช้อปตู้โฟโต้บูธ ซื้อ-เช่า-โครงสร้าง-ซอฟต์แวร์ — IMAGEAUTOMAT",
    description:
        "รวมทุกอย่างไว้ที่เดียว: ซื้อตู้ถ่ายรูป Photobooth, เช่าตู้โฟโต้บูธ, โครงสร้างตู้ และ License ซอฟต์แวร์ จ่ายออนไลน์ด้วย ShopeePay จาก IMAGEAUTOMAT",
    keywords: [
        "ช้อปตู้ถ่ายรูป",
        "ซื้อตู้โฟโต้บูธ",
        "เช่าตู้ถ่ายรูป",
        "โครงสร้างตู้โฟโต้บูธ",
        "ซอฟต์แวร์ photobooth",
        "photobooth license",
        "ShopeePay photobooth",
        "IMAGEAUTOMAT",
    ],
    alternates: {
        canonical: "/shop",
    },
    openGraph: {
        title: "ช้อปตู้โฟโต้บูธ ซื้อ-เช่า-โครงสร้าง-ซอฟต์แวร์ | IMAGEAUTOMAT",
        description:
            "รวมตู้ถ่ายรูปขาย เช่าตู้ โครงสร้าง และ License ซอฟต์แวร์ จ่ายออนไลน์ด้วย ShopeePay",
        url: "https://www.imageautomat.com/shop",
        type: "website",
        siteName: "IMAGEAUTOMAT",
        locale: "th_TH",
    },
}

export default function ShopPage() {
    return <ShopPageContent />
}
