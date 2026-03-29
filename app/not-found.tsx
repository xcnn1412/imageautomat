import type { Metadata } from "next"
import { NotFoundContent } from "@/components/404/not-found-content"

export const metadata: Metadata = {
    title: "404 — ไม่พบหน้าที่ต้องการ",
    description: "ไม่พบหน้าที่คุณต้องการ กรุณาตรวจสอบ URL อีกครั้ง หรือกลับไปหน้าแรก IMAGEAUTOMAT",
    robots: {
        index: false,
        follow: true,
    },
}

export default function NotFound() {
    return <NotFoundContent />
}
