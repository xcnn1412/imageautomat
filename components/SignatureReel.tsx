"use client"

import { AUTOREEL_VIDEOS } from "@/data/autoreel-videos"
import { ReelSlideshow } from "@/components/reel-slideshow"

export function SignatureReel() {
    return (
        <ReelSlideshow
            id="signature-photobooth"
            eyebrow="ตู้ถ่าย REEL อัตโนมัติ"
            titleLead="Signature"
            titleSub="ตู้ REEL ลายเซ็นต์ พร้อมถ่ายภาพ"
            description="ระบบสร้างวิดีโอ REEL อัตโนมัติ พร้อมโพสต์ลงทุก Platform"
            videos={AUTOREEL_VIDEOS}
        />
    )
}
