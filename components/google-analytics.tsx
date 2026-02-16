"use client"

import Script from "next/script"

/**
 * Google Analytics 4 (GA4) Component
 * 
 * วิธีการใช้งาน:
 * 1. สร้างไฟล์ .env.local ที่ root ของโปรเจค
 * 2. เพิ่ม: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * 3. Component นี้จะโหลดอัตโนมัติเมื่อมี Measurement ID
 * 
 * หมายเหตุ:
 * - Component นี้จะไม่ทำงานใน development mode (process.env.NODE_ENV === 'development')
 * - ใช้ Next.js Script component เพื่อ optimization
 * - Strategy: afterInteractive (โหลดหลังจากหน้าเว็บโต้ตอบได้แล้ว)
 */

export function GoogleAnalytics() {
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

    // ไม่แสดง Google Analytics ใน development mode
    if (process.env.NODE_ENV === "development") {
        return null
    }

    // ไม่แสดงถ้ายังไม่ได้ตั้งค่า Measurement ID
    if (!measurementId) {
        return null
    }

    return (
        <>
            {/* Google Analytics Script */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            />

            {/* Google Analytics Configuration */}
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${measurementId}', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
        </>
    )
}
