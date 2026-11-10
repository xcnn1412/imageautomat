import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ClipboardCheck, Headphones, Laptop, Palette, PencilRuler, ShieldCheck, Truck, Wrench } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LINE_OA_URL } from "@/lib/constants"

export const metadata: Metadata = {
    title: "ออกแบบและผลิตตู้โฟโต้บูธตามแบบ — IMAGEAUTOMAT",
    description:
        "ออกแบบตัวตู้โฟโต้บูธใหม่ ทั้งรูปทรง ขนาด และการจัดวางอุปกรณ์ตามความต้องการ ไม่จำกัดเฉพาะรุ่นสำเร็จรูป ส่งแบบอ้างอิงให้ประเมินพร้อมใบเสนอราคา จาก IMAGEAUTOMAT",
    keywords: [
        "ผลิตตู้โฟโต้บูธ",
        "ออกแบบตู้ถ่ายรูป",
        "ตู้โฟโต้บูธตามแบบ",
        "สั่งทำตู้ถ่ายรูป",
        "ซื้อตู้โฟโต้บูธ",
        "ราคาตู้โฟโต้บูธ",
        "ตู้โฟโต้บูธผลิตในไทย",
        "IMAGEAUTOMAT",
    ],
    alternates: { canonical: "/buy-photo-booth" },
    openGraph: {
        title: "ออกแบบตัวตู้ใหม่ ให้เป็นเอกลักษณ์ของคุณ | IMAGEAUTOMAT",
        description: "ออกแบบตัวตู้ใหม่ ทั้งรูปทรง ขนาด และการจัดวางอุปกรณ์ตามความต้องการ ไม่จำกัดเฉพาะรุ่นสำเร็จรูป",
        url: "https://www.imageautomat.com/buy-photo-booth",
        type: "website",
        siteName: "IMAGEAUTOMAT",
        locale: "th_TH",
    },
    twitter: {
        card: "summary_large_image",
        title: "ออกแบบตัวตู้ใหม่ ให้เป็นเอกลักษณ์ของคุณ | IMAGEAUTOMAT",
        description: "ออกแบบตัวตู้ใหม่ ทั้งรูปทรง ขนาด และการจัดวางอุปกรณ์ตามความต้องการ",
    },
}

const heroBooths = [
    { src: "/catalogs/images/booth-truth-or-dare.png", w: 832, h: 1353, size: "h-36 sm:h-[230px] md:h-[346px] origin-right scale-x-110", name: "ตู้ถ่ายรูปไม้สีน้ำตาลพร้อมป้าย Truth or Dare" },
    { src: "/catalogs/images/booth-soft-glow.png", w: 958, h: 1347, size: "h-40 sm:h-64 md:h-96", name: "ป้ายโฟโต้บูธส่องแสงนุ่มนวล" },
    {
        // ponytail: ไฟล์ต้นฉบับไม่ตัดขอบ (1254², ตัวตู้อยู่ที่ x226–988, y28–1180) — ครอปขอบใสด้วย CSS ให้กรอบเท่าตู้สีน้ำตาล (832×1.1 : 1353)
        src: "/catalogs/images/booth-beige-curtain-steel.png", w: 1254, h: 1254, name: "ม่านเบจลอนคลื่นเหนือบูธสเตนเลส",
        size: "h-36 sm:h-[230px] md:h-[346px] aspect-[915/1353]",
        crop: { width: "164.6%", height: "108.9%", left: "-29.7%", top: "-2.4%" },
    },
]

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "ออกแบบและผลิตตู้โฟโต้บูธตามแบบ",
            serviceType: "Custom photobooth manufacturing",
            provider: { "@type": "Organization", name: "IMAGEAUTOMAT", url: "https://www.imageautomat.com" },
            areaServed: "TH",
            url: "https://www.imageautomat.com/buy-photo-booth",
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "หน้าแรก", item: "https://www.imageautomat.com" },
                { "@type": "ListItem", position: 2, name: "ผลิตตู้ตามแบบ", item: "https://www.imageautomat.com/buy-photo-booth" },
            ],
        },
    ],
}

const steps = [
    { icon: PencilRuler, color: "border-tiger-orange text-tiger-orange", title: ["ยืนยันแบบ", "และเริ่มโครงการ"], items: ["ยืนยันใบเสนอราคา", "ออกแบบรูปทรงและขนาดตู้", "สรุปอุปกรณ์และการตกแต่ง", "เลือกระบบชำระเงิน", "วางกำหนดการจัดส่ง"] },
    { icon: Wrench, color: "border-tiger-orange text-tiger-orange", title: ["ผลิตโครงสร้าง", "และเตรียมอุปกรณ์"], items: ["ส่งแบบให้ทีมผลิตโครงสร้าง", "สั่งซื้อและเตรียมอุปกรณ์", "ติดตามเอกสาร", "ระบบชำระเงินออนไลน์"] },
    { icon: Laptop, color: "border-tiger-orange text-tiger-orange", title: ["พัฒนาซอฟต์แวร์", "และจัดวางอุปกรณ์"], items: ["ยืนยันหน้าจอ UX/UI", "และกรอบรูปกับลูกค้า", "พัฒนาซอฟต์แวร์โฟโต้บูธ", "จัดวางอุปกรณ์กับตู้จริง"] },
    { icon: ClipboardCheck, color: "border-tiger-orange text-tiger-orange", title: ["ตรวจแบบและเตรียม", "พื้นที่ติดตั้ง"], items: ["ยืนยันอาร์ตเวิร์กและแบบ", "ตรวจประตู ลิฟต์ และพื้นที่", "สรุปแผนติดตั้งตู้ถ่ายรูป", "เตรียมอินเทอร์เน็ตใช้งาน"] },
    { icon: Truck, color: "border-tiger-orange text-tiger-orange", title: ["ตรวจอุปกรณ์", "และเตรียมจัดส่ง"], items: ["ตรวจอุปกรณ์ก่อนปิดตู้ส่ง", "ยืนยันวัน เวลา และขนส่ง", "สรุปรายละเอียดให้ทีม", "จัดส่งและติดตั้งตู้ถ่ายรูป"] },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <p className="flex items-center gap-5 text-[0.975rem] font-semibold uppercase tracking-[0.25em] text-tiger-orange">
            <span className="h-0.5 w-16 bg-tiger-orange" />
            {children}
        </p>
    )
}

export default function CustomBoothPage() {
    return (
        <main className="min-h-screen bg-white text-deep-space-blue">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <Navigation />

            {/* Hero */}
            <section id="custom" className="scroll-mt-20 overflow-hidden pt-28 text-center lg:pt-36">
                <div className="px-4">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-tiger-orange md:text-sm">
                        IMAGEAUTOMAT | OEM Manufacturing
                    </p>
                    <h1 className="mt-3 text-[1.625rem] font-bold leading-snug text-deep-space-blue md:text-[1.95rem]">
                        รับออกแบบและผลิตตู้ Photo Booth ตามแบรนด์ของคุณ
                    </h1>
                    <p className="mx-auto mt-2 whitespace-nowrap text-[clamp(0.6rem,2.1vw,1.25rem)] text-deep-space-blue/70">
                        ออกแบบและผลิตตามสเปก พร้อมพัฒนาซอฟต์แวร์และระบบชำระเงินออนไลน์ เพื่อรองรับการใช้งานทางธุรกิจ
                    </p>
                </div>

                <div className="mx-auto mt-10 flex max-w-5xl items-end justify-center gap-3 px-4 pb-4 md:gap-8">
                    {heroBooths.map((b) =>
                        b.crop ? (
                            <div key={b.name} className={`${b.size} relative shrink-0 overflow-hidden`}>
                                <Image src={b.src} alt={b.name} width={b.w} height={b.h} priority sizes="50vw" className="absolute max-w-none object-fill" style={b.crop} />
                            </div>
                        ) : (
                            <Image key={b.name} src={b.src} alt={b.name} width={b.w} height={b.h} priority sizes="33vw" className={`${b.size} w-auto min-w-0 object-contain`} />
                        ),
                    )}
                </div>
            </section>

            {/* Examples */}
            <section id="examples" className="scroll-mt-20 py-16 lg:py-24">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-6">
                    <div>
                        <Eyebrow>Image Automat</Eyebrow>
                        <h2 className="mt-6 text-[1.95rem] font-bold leading-snug text-deep-space-blue md:text-[2.6rem]">
                            เริ่มต้นธุรกิจโฟโต้บูธ ด้วยตู้ถ่ายรูปที่ออกแบบเป็นแบรนด์ของคุณ
                        </h2>
                        <p className="mt-5 text-[1.3rem] leading-relaxed text-deep-space-blue/70 md:text-[1.4625rem]">
                            เรารับผลิตตู้ถ่ายภาพตามความต้องการของลูกค้า สามารถปรับรูปทรง ขนาด วัสดุ สี
                            และการจัดวางอุปกรณ์ให้สอดคล้องกับเอกลักษณ์ของแบรนด์ พร้อมรองรับระบบถ่ายภาพและพิมพ์รูป
                        </p>
                        <p className="mt-8 border-l-4 border-tiger-orange pl-5 text-[1.3rem] font-bold text-deep-space-blue md:text-[1.4625rem]">ปรึกษาการออกแบบและสั่งผลิตตู้ Photo Booth สำหรับธุรกิจของคุณ</p>
                    </div>

                    <div className="grid min-w-0 grid-cols-[1.15fr_1fr] gap-3">
                        <figure className="relative row-span-2 min-h-[442px] rounded-xl bg-tiger-orange">
                            <Image src="/catalogs/images/photobox-model-3.png" alt="PHOTOBOX MODEL 1" fill sizes="(max-width:1024px) 50vw, 30vw" className="object-contain p-5 pb-16" />
                            <figcaption className="absolute inset-x-0 bottom-6 text-center text-[0.975rem] font-semibold tracking-[0.25em]">PHOTOBOX MODEL 1</figcaption>
                        </figure>
                        {[
                            { n: "2", name: "PHOTOBOX MODEL 2" },
                            { n: "4", name: "PHOTOBOX MODEL 3" },
                        ].map((v) => (
                            <figure key={v.n} className="flex min-h-[215px] items-center rounded-xl bg-tiger-orange">
                                <div className="relative w-1/2 shrink-0 self-stretch">
                                    <Image src={`/catalogs/images/photobox-model-${v.n}.png`} alt={v.name} fill sizes="20vw" className="scale-110 object-contain p-1" />
                                </div>
                                <figcaption className="min-w-0 flex-1 whitespace-pre-line pr-3 text-[20px] font-semibold leading-relaxed tracking-widest">
                                    {v.name.replace(" MODEL", "\nMODEL")}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* Steps */}
            <section id="steps" className="scroll-mt-20 bg-gray-50 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 lg:px-6">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-deep-space-blue md:text-[2rem] md:leading-snug">5 ขั้นตอนผลิตตู้โฟโต้บูธสำหรับธุรกิจ</h2>
                        <p className="mt-3 text-deep-space-blue/70 md:text-lg">รับผลิตตู้ถ่ายรูปตามแบบ พร้อมซอฟต์แวร์ที่พัฒนาเองและการเชื่อมต่อชำระเงินออนไลน์</p>
                        <p className="mt-3 text-sm font-semibold text-deep-space-blue md:text-base">ประสบการณ์ด้านโฟโต้บูธกว่า 8 ปี</p>
                    </div>

                    <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
                        {steps.map((st, i) => (
                            <li key={st.title[0]} className="relative rounded-xl border border-gray-100 bg-white p-5 pb-16 shadow-sm">
                                <div className="flex items-start justify-between">
                                    <span className={`rounded border px-1.5 text-xs font-semibold ${st.color}`}>{String(i + 1).padStart(2, "0")}</span>
                                    <st.icon aria-hidden strokeWidth={1.25} className="h-12 w-12 text-deep-space-blue" />
                                </div>
                                <h3 className="mt-4 whitespace-nowrap text-lg font-bold leading-relaxed text-deep-space-blue">
                                    {st.title[0]}
                                    <br />
                                    {st.title[1]}
                                </h3>
                                <ul className="mt-4 space-y-2.5 whitespace-nowrap text-[15px] text-deep-space-blue/70 xl:text-base">
                                    {st.items.map((it) => <li key={it}>{it}</li>)}
                                </ul>
                                {/* timeline: วงกลม + เส้นต่อไปการ์ดถัดไป (lg ขึ้นไปเท่านั้น) */}
                                <div aria-hidden className="absolute bottom-7 left-5 right-0 hidden items-center lg:flex">
                                    <span className={`h-3 w-3 shrink-0 rounded-full border-[1.5px] bg-white ${st.color}`} />
                                    {i < steps.length - 1 && <span className="-mr-4 h-px flex-1 bg-gray-300" />}
                                </div>
                            </li>
                        ))}
                    </ol>

                </div>
            </section>

            {/* Services */}
            <section className="pb-16 lg:pb-24" aria-labelledby="services-heading">
                <div className="mx-auto max-w-7xl px-4 lg:px-6">
                    <div className="text-center">
                        <h2 id="services-heading" className="text-[2.34rem] font-bold text-deep-space-blue md:text-[3.12rem] md:leading-snug">
                            บริการ<span className="text-tiger-orange">ของเรา</span>
                        </h2>
                        <p className="mt-3 text-[1.755rem] font-semibold text-deep-space-blue md:text-[1.95rem]">บริการออกแบบและผลิตตู้ Photo Booth OEM แบบครบวงจร</p>
                        <p className="mt-2 text-[1.56rem] text-deep-space-blue/70 md:text-[1.755rem]">ดูแลทุกขั้นตอน ตั้งแต่การออกแบบ การผลิต การพัฒนาระบบ ไปจนถึงบริการหลังการขาย</p>
                    </div>
                    <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                        {([
                            [PencilRuler, "Custom Design & Manufacturing", "ออกแบบและผลิตตู้ตามรูปแบบ ขนาด และข้อกำหนดของแต่ละแบรนด์"],
                            [Palette, "OEM Branding", "ปรับรูปลักษณ์ สี และองค์ประกอบภายนอกให้สอดคล้องกับอัตลักษณ์ของแบรนด์"],
                            [ShieldCheck, "Quality Assurance", "ควบคุมคุณภาพและตรวจสอบความเรียบร้อยตลอดกระบวนการผลิต"],
                            [Headphones, "After-Sales Service", "ให้คำปรึกษาและบริการดูแลหลังการขาย"],
                        ] as const).map(([Icon, title, desc]) => (
                            <li key={title} className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                                <span className="flex h-[4.225rem] w-[4.225rem] shrink-0 items-center justify-center rounded-md bg-tiger-orange/10 text-tiger-orange">
                                    <Icon className="h-[1.95rem] w-[1.95rem]" aria-hidden />
                                </span>
                                <div>
                                    <h3 className="text-[1.56rem] font-bold text-deep-space-blue md:text-[1.755rem]">{title}</h3>
                                    <p className="mt-1 text-[1.365rem] leading-relaxed text-deep-space-blue/70">{desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 rounded-xl bg-tiger-orange/10 px-4 py-6 text-center">
                        <p className="text-[1.95rem] font-bold text-tiger-orange md:text-[2.34rem]">เริ่มต้นการผลิตขั้นต่ำ (MOQ) 10 ตู้</p>
                        <p className="mt-1 text-[1.365rem] text-deep-space-blue/70">รองรับการสั่งผลิตสำหรับธุรกิจและผู้ประกอบการ</p>
                        <div className="mt-16 flex flex-col gap-2 px-2 text-left sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-[1.1rem] text-deep-space-blue/70">ผลิตตามแบบ • พัฒนาซอฟต์แวร์เอง • เชื่อมต่อชำระเงินออนไลน์</p>
                            <a href={LINE_OA_URL} target="_blank" rel="noopener noreferrer" className="shrink-0 text-[1.25rem] font-bold text-deep-space-blue hover:underline">ปรึกษาสั่งผลิตตู้ถ่ายรูป</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
