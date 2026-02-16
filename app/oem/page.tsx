import type { Metadata } from "next"
import { OemPageContent } from "./oem-page-content"

export const metadata: Metadata = {
    title: "รับผลิตตู้โฟโต้บูธ OEM | Imageautomat",
    description: "รับผลิตตู้ถ่ายรูป Photobooth แบบ OEM/ODM ตามสั่ง ออกแบบและผลิตให้ตรงตามความต้องการ MOQ เริ่มต้น 10 ตู้ สำหรับธุรกิจและผู้ประกอบการ",
    keywords: [
        "ผลิตตู้โฟโต้บูธ",
        "OEM Photobooth",
        "ODM ตู้ถ่ายรูป",
        "รับผลิตตู้ถ่ายรูป",
        "Photobooth Manufacturer",
        "ผู้ผลิตโฟโต้บูธ",
        "สั่งผลิตตู้ตามสเปค"
    ],
    openGraph: {
        title: "รับผลิตตู้โฟโต้บูธ OEM | Imageautomat",
        description: "รับผลิตตู้ถ่ายรูป Photobooth แบบ OEM/ODM ตามสั่ง ออกแบบและผลิตให้ตรงตามความต้องการ",
        type: "website",
        locale: "th_TH",
    },
    alternates: {
        canonical: "https://imageautomat.com/oem"
    }
}

export default function OemPage() {
    return <OemPageContent />
}
