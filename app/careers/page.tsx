import type { Metadata } from "next"
import { jobs } from "@/data/jobs"
import { CareersPageContent } from "./careers-page-content"

export const metadata: Metadata = {
    title: "ร่วมงานกับเรา — IMAGE AUTOMAT | รับสมัครพนักงานขาย แอดมินบัญชี ช่างไม้",
    description:
        "IMAGE AUTOMAT เปิดรับสมัครพนักงานขาย (Admin-sale), แอดมินบัญชี และช่างไม้ ร่วมเป็นส่วนหนึ่งของทีมตู้ถ่ายรูป Photobooth ชั้นนำของไทย สนใจสมัคร โทร 063-654-6249 หรือ LINE @imageautomat",
    keywords: [
        "รับสมัครงาน",
        "สมัครงาน Photobooth",
        "งาน IMAGE AUTOMAT",
        "พนักงานขาย Admin sale",
        "แอดมินบัญชี",
        "ช่างไม้",
        "หางาน Photobooth",
        "งานบริษัทตู้ถ่ายรูป",
    ],
    openGraph: {
        title: "ร่วมงานกับเรา — IMAGE AUTOMAT | รับสมัครงาน",
        description:
            "เปิดรับพนักงานขาย (Admin-sale), แอดมินบัญชี และช่างไม้ ร่วมงานกับ IMAGE AUTOMAT ผู้นำด้านตู้ถ่ายรูป Photobooth",
        url: "https://www.imageautomat.com/careers",
        type: "website",
        siteName: "IMAGEAUTOMAT",
        locale: "th_TH",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ร่วมงานกับ IMAGE AUTOMAT — รับสมัครงาน",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ร่วมงานกับเรา — IMAGE AUTOMAT | รับสมัครงาน",
        description:
            "เปิดรับพนักงานขาย (Admin-sale), แอดมินบัญชี และช่างไม้ ร่วมงานกับ IMAGE AUTOMAT",
        images: ["/images/og-image.jpg"],
    },
    alternates: {
        canonical: "https://www.imageautomat.com/careers",
    },
}

const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ตำแหน่งงานที่เปิดรับ — IMAGE AUTOMAT",
    itemListElement: jobs.map((job, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://www.imageautomat.com/careers/${job.slug}`,
        name: job.title,
    })),
}

export default function CareersPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(itemListJsonLd),
                }}
            />
            <CareersPageContent />
        </>
    )
}
