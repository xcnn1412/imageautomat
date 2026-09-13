import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/home/home_hero"
import { TrustBar } from "@/components/home/home_trust_bar"
import dynamic from "next/dynamic"

// Lazy load below-the-fold components to reduce initial JS bundle
const HomeServicesSection = dynamic(() => import("@/components/home/home_services").then(mod => ({ default: mod.HomeServicesSection })), {
    loading: () => <div className="min-h-[600px]" />,
    ssr: true,
})
const CompetitiveAdvantagesSection = dynamic(() => import("@/components/home/home_competitive_advantages").then(mod => ({ default: mod.CompetitiveAdvantagesSection })), {
    loading: () => <div className="min-h-[600px]" />,
    ssr: true,
})
const HomeCapabilities = dynamic(() => import("@/components/home/home_capabilities").then(mod => ({ default: mod.HomeCapabilities })), {
    loading: () => <div className="min-h-[600px]" />,
})

const HomeStatsSection = dynamic(() => import("@/components/home/home_stats").then(mod => ({ default: mod.HomeStatsSection })), {
    loading: () => <div className="min-h-[400px]" />,
    ssr: true,
})
const ContactSection = dynamic(() => import("@/components/home/home_contact").then(mod => ({ default: mod.ContactSection })), {
    loading: () => <div className="min-h-[500px]" />,
    ssr: true,
})
const CustomerSlideShow = dynamic(() => import("@/components/home/home_customer_slideshow").then(mod => ({ default: mod.CustomerSlideShow })), {
    loading: () => <div className="min-h-[200px]" />,
    ssr: true,
})
const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
    ssr: true,
})

// Product Schema for SEO (Sales Intent)
const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ตู้โฟโต้บูธ IMAGEAUTOMAT",
    "description": "ตู้โฟโต้บูธคุณภาพพรีเมียม ผลิตในไทย 100% พร้อมซอฟต์แวร์ Imageland อัปเดตฟรีตลอดชีพ รับประกัน 1 ปี",
    "brand": {
        "@type": "Brand",
        "name": "IMAGEAUTOMAT"
    },
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "THB",
        "lowPrice": "50000",
        "availability": "https://schema.org/InStock",
        "seller": {
            "@type": "Organization",
            "name": "IMAGEAUTOMAT"
        }
    },
    "image": "https://www.imageautomat.com/images/og-image.jpg",
    "manufacturer": {
        "@type": "Organization",
        "name": "IMAGEAUTOMAT",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "TH"
        }
    }
}

// FAQ Schema for Rich Results
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "ตู้โฟโต้บูธราคาเท่าไร?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "ตู้โฟโต้บูธ IMAGEAUTOMAT เริ่มต้นที่ 50,000 บาท ผลิตในไทย 100% พร้อมซอฟต์แวร์ Imageland และรับประกัน 1 ปี"
            }
        },
        {
            "@type": "Question",
            "name": "ลงทุนตู้โฟโต้บูธคืนทุนกี่เดือน?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "ลูกค้าส่วนใหญ่คืนทุนภายใน 6-12 เดือน โดยมี ROI 200-300% ต่อปี ขึ้นอยู่กับทำเลและจำนวนงาน"
            }
        },
        {
            "@type": "Question",
            "name": "มีรับประกันตู้โฟโต้บูธไหม?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "มีรับประกัน 1 ปีเต็ม ครอบคลุมทั้งฮาร์ดแวร์และซอฟต์แวร์ พร้อมทีมซัพพอร์ตตลอด 24/7"
            }
        },
        {
            "@type": "Question",
            "name": "มีบริการเช่าตู้โฟโต้บูธไหม?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "มีบริการเช่าตู้โฟโต้บูธพร้อมทีมงานมืออาชีพ สำหรับงานแต่งงาน งานอีเวนต์ และงานองค์กร"
            }
        },
        {
            "@type": "Question",
            "name": "ซอฟต์แวร์ Imageland อัปเดตฟรีจริงไหม?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "ซอฟต์แวร์ Imageland อัปเดตฟรีตลอดชีพ ไม่มีค่าใช้จ่ายเพิ่มเติม รองรับฟีเจอร์ใหม่ๆ อย่างต่อเนื่อง"
            }
        }
    ]
}

export const metadata: Metadata = {
    title: "ซื้อตู้โฟโต้บูธ คุณภาพพรีเมียม ผลิตในไทย | IMAGEAUTOMAT",
    description: "ลงทุนครั้งเดียว สร้างรายได้ระยะยาว ตู้โฟโต้บูธคุณภาพพรีเมียม ผลิตในไทย 100% รับประกัน 1 ปี อัปเดตซอฟต์แวร์ฟรีตลอดชีพ พร้อมทีมซัพพอร์ตมืออาชีพ",
    keywords: [
        // Sales Intent (Primary)
        "ซื้อตู้โฟโต้บูธ", "ตู้ถ่ายรูปขาย", "photobooth ราคา", "ซื้อตู้ถ่ายรูป", "ราคาตู้โฟโต้บูธ",
        "ตู้ถ่ายรูป ราคา", "จำหน่ายตู้โฟโต้บูธ", "ตู้โฟโต้บูธราคาถูก",
        // Production/Quality
        "ผลิตตู้โฟโต้บูธ", "ตู้โฟโต้บูธผลิตในไทย", "ตู้ถ่ายรูปคุณภาพพรีเมียม",
        "OEM photobooth", "ODM ตู้ถ่ายรูป", "รับผลิตตู้ถ่ายรูป",
        // Software 
        "ซอฟต์แวร์โฟโต้บูธ", "Imageland", "photobooth software", "ซอฟต์แวร์ตู้ถ่ายรูป",
        // Rental (Secondary)
        "เช่าโฟโต้บูธ", "เช่าตู้ถ่ายรูป", "photobooth rental", "ให้เช่าตู้ถ่ายรูป",
        // Brand
        "IMAGEAUTOMAT", "imageautomat", "โฟโต้บูธ", "photobooth", "ตู้ถ่ายรูป"
    ],
    openGraph: {
        title: "ซื้อตู้โฟโต้บูธคุณภาพพรีเมียม — ผลิตในไทย | IMAGEAUTOMAT",
        description: "ลงทุนครั้งเดียว สร้างรายได้ระยะยาว ตู้โฟโต้บูธคุณภาพพรีเมียม ผลิตในไทย รับประกัน 1 ปี อัปเดตฟรีตลอดชีพ",
        url: "https://www.imageautomat.com",
        type: "website",
        locale: "th_TH",
        siteName: "IMAGEAUTOMAT",
    },
    twitter: {
        card: "summary_large_image",
        title: "ซื้อตู้โฟโต้บูธคุณภาพพรีเมียม — ผลิตในไทย | IMAGEAUTOMAT",
        description: "ลงทุนครั้งเดียว สร้างรายได้ระยะยาว ตู้โฟโต้บูธคุณภาพพรีเมียม ผลิตในไทย",
    },
    alternates: {
        canonical: "https://www.imageautomat.com",
    },
}

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Navigation />
            <HeroSection />
            <TrustBar />
            <CompetitiveAdvantagesSection />
            <HomeServicesSection />
            <HomeCapabilities />
            
            <HomeStatsSection />
            <CustomerSlideShow />
            <ContactSection />
            <Footer />
        </main>
    )
}
