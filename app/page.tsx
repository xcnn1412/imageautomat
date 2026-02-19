import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProductSection } from "@/components/product-section"
import dynamic from "next/dynamic"

// Lazy load below-the-fold components to reduce initial JS bundle
const HomeServicesSection = dynamic(() => import("@/components/home-services-section").then(mod => ({ default: mod.HomeServicesSection })), {
    loading: () => <div className="min-h-[600px]" />,
    ssr: true,
})
const AdsSlideshow = dynamic(() => import("@/components/ads-slideshow").then(mod => ({ default: mod.AdsSlideshow })), {
    loading: () => <div className="min-h-[600px]" />,
    ssr: true,
})
const HomeSoftwareFeatures = dynamic(() => import("@/components/home-software-features").then(mod => ({ default: mod.HomeSoftwareFeatures })), {
    loading: () => <div className="min-h-[800px]" />,
    ssr: true,
})
const HomeStatsSection = dynamic(() => import("@/components/home-stats-section").then(mod => ({ default: mod.HomeStatsSection })), {
    loading: () => <div className="min-h-[400px]" />,
    ssr: true,
})
const VideoGallery = dynamic(() => import("@/components/video-gallery").then(mod => ({ default: mod.VideoGallery })), {
    loading: () => <div className="min-h-[500px]" />,
    ssr: true,
})
const SignatureReel = dynamic(() => import("@/components/SignatureReel").then(mod => ({ default: mod.SignatureReel })), {
    loading: () => <div className="min-h-[500px]" />,
    ssr: true,
})
const SlideshowSection = dynamic(() => import("@/components/slideshow-section").then(mod => ({ default: mod.SlideshowSection })), {
    loading: () => <div className="min-h-[700px]" />,
    ssr: true,
})
const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => ({ default: mod.ContactSection })), {
    loading: () => <div className="min-h-[500px]" />,
    ssr: true,
})
const CustomerSlideShow = dynamic(() => import("@/components/customer-slideshow").then(mod => ({ default: mod.CustomerSlideShow })), {
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
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "120",
        "bestRating": "5"
    },
    "review": [
        {
            "@type": "Review",
            "author": { "@type": "Person", "name": "ลูกค้า IMAGEAUTOMAT" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "ตู้คุณภาพดี ซอฟต์แวร์ใช้ง่าย อัปเดตฟรีตลอด บริการหลังขายดีมาก"
        }
    ],
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
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ตู้โฟโต้บูธคุณภาพพรีเมียม ผลิตในไทย IMAGEAUTOMAT",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ซื้อตู้โฟโต้บูธคุณภาพพรีเมียม — ผลิตในไทย | IMAGEAUTOMAT",
        description: "ลงทุนครั้งเดียว สร้างรายได้ระยะยาว ตู้โฟโต้บูธคุณภาพพรีเมียม ผลิตในไทย",
        images: ["/images/og-image.jpg"],
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
            <HomeServicesSection />
            <AdsSlideshow />
            <HomeSoftwareFeatures />
            <SlideshowSection />
            <ProductSection />
            <VideoGallery />
            <SignatureReel />
            <HomeStatsSection />
            <CustomerSlideShow />
            <ContactSection />
            <Footer />
        </main>
    )
}
