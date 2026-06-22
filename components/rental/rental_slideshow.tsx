"use client"

import { ImageCarousel } from '@/components/image-carousel'

export function RentalSlideshow() {
    return (
        <ImageCarousel
            id="rental-slideshow"
            altPrefix="ให้เช่าโครงสร้างตู้สติ๊กเกอร์ Photobooth Rental - งานที่"
            cardExtraClass="border border-deep-space-blue/10"
            navShadow="0 12px 30px rgba(2,48,71,0.25)"
            header={
                <>
                    <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-sky-blue-light/20 text-deep-space-blue text-xs font-semibold tracking-[0.3em] uppercase">
                        เช่าโครงสร้างตู้ถ่ายภาพ
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-deep-space-blue mb-4">
                        ให้เช่า<span className="text-tiger-orange">โครงสร้างตู้สติ๊กเกอร์</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-deep-space-blue font-medium mb-4">
                        ให้เช่าโครงสร้างตู้สติ๊กเกอร์ระยะสั้น ระยะยาว
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-deep-space-blue/60 leading-relaxed max-w-2xl mx-auto">
                        เลือกแพ็กเกจให้เช่าที่เหมาะกับธุรกิจของคุณ ทั้งแบบรายวัน รายเดือน หรือรายปี พร้อมบริการติดตั้งและดูแลครบวงจร
                    </p>
                </>
            }
        />
    )
}
