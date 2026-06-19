"use client"

import { REEL_VIDEOS } from "@/data/reel-videos"
import { ReelSlideshow } from "@/components/reel-slideshow"

export function ReelVideo() {
    return (
        <ReelSlideshow
            id="reel-photobooth"
            eyebrow="ตู้ถ่ายรูป REEL อัตโนมัติ"
            titleLead="Reel"
            titleSub="ตู้บันทึกคลิปสั้น พร้อมปริ้นภาพสุดคูล"
            description="ตู้ถ่ายรูป Reel Photobooth สร้างคลิปสั้นสุดครีเอทีฟ พร้อมปริ้นภาพคุณภาพสูง แชร์ลง Instagram, TikTok ได้ทันที"
            videos={REEL_VIDEOS}
        />
    )
}
