import type { Metadata } from "next"
import { RentalPageContent } from "./rental-page-content"

export const metadata: Metadata = {
    title: "เช่าตู้โฟโต้บูธ พร้อมทีมงาน | Imageautomat",
    description: "บริการเช่าตู้ถ่ายรูป Photobooth ครบวงจร พร้อมทีมงานมืออาชีพ ราคาเริ่มต้น 3,000 บาท เหมาะสำหรับงานแต่งงาน งานเปิดตัว และงานอีเวนต์ทุกประเภท มีตู้ให้เลือกกว่า 50 รุ่น",
    keywords: [
        "เช่าโฟโต้บูธ",
        "ให้เช่าตู้ถ่ายรูป",
        "Photobooth เช่า",
        "เช่าตู้ถ่ายรูปงานแต่ง",
        "บริการโฟโต้บูธ",
        "เช่าโฟโต้บูธราคาถูก",
        "Photobooth สำหรับงานอีเวนต์"
    ],
    openGraph: {
        title: "เช่าตู้โฟโต้บูธ พร้อมทีมงาน | Imageautomat",
        description: "บริการเช่าตู้ถ่ายรูป Photobooth ครบวงจร พร้อมทีมงานมืออาชีพ ราคาเริ่มต้น 3,000 บาท",
        type: "website",
        locale: "th_TH",
    },
    alternates: {
        canonical: "https://imageautomat.com/rental"
    }
}

export default function RentalPage() {
    return <RentalPageContent />
}
