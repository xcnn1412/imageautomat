"use client"

import { motion } from "framer-motion"
import { Shield, Wrench, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const coreSolutions = [
    {
        title: "พัฒนาระบบ",
        description: "ระบบซอฟต์แวร์ที่ใช้งานง่าย\nและมีฟังก์ชันหลากหลาย",
        image: "/images/system-development.png",
        href: "/photo-booth-software",
    },
    {
        title: "ผลิตงานคุณภาพ",
        description: "ออกแบบและผลิตโครงสร้าง\nของบูธที่ตรงตามความต้องการ",
        image: "/images/quality-manufacturing.png",
        href: "/buy-photo-booth",
    },
    {
        title: "ทีมงานเซอร์วิส",
        description: "แก้ไขปัญหาเฉพาะหน้า\nช่วยเหลือเมื่ออุปกรณ์ขัดข้อง",
        image: "/images/professional-service-team.png",
        href: "/contact",
    },
]

const solutions = [
  {
    no: "01",
    href: "/buy-photo-booth",
    title: "ผลิตตู้พร้อมใช้งาน",
    description: "ตู้คุณภาพ ผลิตในไทย",
    image: "/images/solution-manufacture.jpg",
    points: ["ผลิตตามสเปกที่ต้องการ", "เลือกวัสดุและดีไซน์ได้", "รับประกันโครงสร้าง 1 ปี"],
  },
  {
    no: "02",
    href: "/photo-booth-rental-revenue-share",
    title: "เช่าตู้ระยะสั้น",
    description: "เหมาะกับงานอีเวนต์ทุกรูปแบบ",
    image: "/images/solution-rental.png",
    points: ["ระบบชำระเงินก่อนถ่าย", "ติดตั้งพร้อมใช้งาน", "ตรวจสอบยอดขายได้"],
  },
  {
    no: "03",
    href: "/contact",
    title: "วางตู้แบ่งรายได้",
    description: "เพิ่มรายได้ ไม่ต้องลงทุนเอง",
    image: "/images/solution-revenue-share.jpg",
    points: ["ประเมินศักยภาพทำเล", "ตรวจสอบยอดผ่านระบบ", "แบ่งรายได้ตามข้อตกลง"],
  },
  {
    no: "04",
    href: "/photo-booth-software",
    title: "Custom Software ถ่ายภาพ",
    description: "พัฒนาระบบตามที่คุณต้องการ",
    image: "/images/solution-custom-software.jpg",
    points: ["Custom Software", "Custom Branding", "รองรับ OEM / ODM"],
  },
]

const competitiveAdvantages = [
  { icon: <Shield className="w-[2.7vw] h-[2.7vw] xl:w-[34px] xl:h-[34px] shrink-0" />, text: "รับประกัน 1 ปีเต็ม" },
  { icon: <Zap className="w-[2.7vw] h-[2.7vw] xl:w-[34px] xl:h-[34px] shrink-0" />, text: "อัปเดตฟรีตลอดชีพ" },
  { icon: <Wrench className="w-[2.7vw] h-[2.7vw] xl:w-[34px] xl:h-[34px] shrink-0" />, text: "ไม่มีค่าบำรุงรักษา" }
]

export function CompetitiveAdvantagesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 bg-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23023047\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }} />
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-sans font-bold text-[min(7vw,56px)] text-deep-space-blue mb-6">
            ทำไมต้องเลือก
            <br />
            <span className="whitespace-nowrap"><span className="text-tiger-orange">IMAGEAUTOMAT</span> ?</span>
          </h2>
          {/* ponytail: บังคับจุดตัดบรรทัดด้วย <br /> — ให้แบ่ง 2 บรรทัดเหมือนกันทุกจอ */}
          <p className="text-[min(3vw,22px)] text-deep-space-blue/70 mx-auto leading-relaxed mb-8">
            ฮาร์ดแวร์คุณภาพอุตสาหกรรม ซอฟต์แวร์ระดับ
            <br />
            Enterprise และซัพพอร์ต 24 ชม. — ครบในที่เดียว
          </p>
        </motion.div>

        {/* ── Our Core Solutions ── */}
        <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            {/* ponytail: ลูกศรเป็น item ใน flex คั่นกลาง ไม่ต้องวาดเส้นเชื่อม absolute */}
            <div className="flex flex-nowrap items-start justify-center gap-[1vw] xl:gap-3">
                {coreSolutions.map((item, i) => (
                    <div key={item.title} className="contents">
                        {i > 0 && (
                            <ArrowRight
                                className="w-[3.6vw] xl:w-[46px] h-[3.6vw] xl:h-[46px] shrink-0 text-tiger-orange mt-[7.2vw] xl:mt-[92px]"
                                aria-hidden="true"
                            />
                        )}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                            className="w-[28vw] xl:w-[352px] text-center"
                        >
                            <Link href={item.href} className="group block">
                                <div className="relative mx-auto w-[18vw] h-[18vw] xl:w-[230px] xl:h-[230px] rounded-full overflow-hidden ring-[0.31vw] xl:ring-4 ring-white shadow-[0_4px_16px_rgba(2,48,71,0.12)]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 1280px) 18vw, 230px"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h4 className="mt-[1.6vw] xl:mt-5 font-sans font-bold text-[2.9vw] xl:text-[37px] text-deep-space-blue group-hover:text-tiger-orange transition-colors">
                                    {item.title}
                                </h4>
                                <p className="mt-[0.47vw] xl:mt-1.5 text-[2.14vw] xl:text-[27px] font-medium leading-relaxed text-deep-space-blue/75 whitespace-pre-line">
                                    {item.description}
                                </p>
                            </Link>
                        </motion.div>
                    </div>
                ))}
            </div>
        </motion.div>

        {/* Competitive Advantages Pills */}
        <div className="flex flex-nowrap items-center justify-center gap-[2.16vw] xl:gap-7 mb-16">
          {competitiveAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                ease: "easeOut",
                delay: index * 0.1
              }}
              className="flex shrink-0 items-center gap-[1.1vw] xl:gap-3.5 whitespace-nowrap px-[2.16vw] py-[1.1vw] xl:px-7 xl:py-3.5 bg-deep-space-blue text-white rounded-full text-[1.9vw] xl:text-[24px] font-medium"
            >
              {advantage.icon}
              {advantage.text}
            </motion.div>
          ))}
        </div>

        {/* 4 Solutions */}
        {/* ponytail: การ์ดสลับสีส้ม/ฟ้าด้วย index % 2 ไม่ต้องเก็บสีใน data */}
        <div className="mb-10">
          <h3 className="font-sans font-bold whitespace-nowrap text-[min(5vw,38px)] text-deep-space-blue">
            <span className="text-tiger-orange">4</span> SOLUTIONS สำหรับธุรกิจของคุณ
          </h3>
          <p className="mt-1 whitespace-nowrap text-[min(2.9vw,22px)] font-medium text-deep-space-blue/80">เลือกโมเดลที่เหมาะกับเป้าหมายธุรกิจของคุณ</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((item, index) => (
            <motion.div
              key={item.no}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            >
              {/* ponytail: การ์ดเป็น div (ไม่ใช่ Link) เพราะมีปุ่มลิงก์อยู่ข้างใน — ซ้อน <a> ไม่ได้ */}
              <div
                className={`group flex h-full flex-col rounded-2xl p-4 transition-shadow hover:shadow-lg ${
                  index % 2 === 0 ? "bg-orange-50/70" : "bg-slate-50"
                }`}
              >
                {/* ponytail: เลข+หัวข้อแถวเดียว ขนาดเท่ากัน — ที่ lg (4 คอลัมน์) การ์ดแคบสุด จึงย่อด้วย vw ไม่ให้ตัดบรรทัด */}
                <div className="flex items-baseline gap-2 whitespace-nowrap text-[16px] lg:text-[min(1.38vw,16px)]">
                  <span
                    className={`font-sans font-bold leading-none ${
                      index % 2 === 0 ? "text-tiger-orange" : "text-slate-400"
                    }`}
                  >
                    {item.no}
                  </span>
                  <h4 className="font-sans font-bold leading-snug text-deep-space-blue">
                    {item.title}
                  </h4>
                </div>
                {/* ponytail: บรรทัดเดียวทุกจอ — ที่ lg การ์ดแคบสุด ต้องย่อถึง 0.77vw (สูงสุด 10px) ข้อความจึงเล็ก */}
                <p className="mt-2 whitespace-nowrap text-[16px] lg:text-[min(1.38vw,16px)] leading-relaxed text-deep-space-blue/60">
                  {item.description}
                </p>

                <div className="mt-4 relative aspect-4/3 rounded-xl overflow-hidden bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <ul className="mt-5 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[15px] text-deep-space-blue/75">
                      <span className="mt-[0.5em] w-1.5 h-1.5 shrink-0 rounded-full bg-tiger-orange" />
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl font-medium text-deep-space-blue mb-2">
              พร้อมเริ่มต้นแล้วหรือยัง?
            </p>
            <p className="text-deep-space-blue/60 leading-relaxed mb-8">
              เลือกซื้อ เช่า หรือสอบถามเพิ่มเติมได้เลย — ทีมงานพร้อมให้คำปรึกษาฟรี
            </p>
            <div className="flex flex-nowrap justify-center gap-[1.63vw] xl:gap-6">
              <Link
                href="/buy-photo-booth"
                className="inline-flex shrink-0 whitespace-nowrap items-center gap-[1.1vw] xl:gap-3.5 px-[3.29vw] py-[1.63vw] xl:px-10 xl:py-5 rounded-full bg-deep-space-blue text-white font-bold text-[1.9vw] xl:text-[24px] hover:bg-deep-space-blue/90 hover:shadow-lg hover:shadow-deep-space-blue/25 transition-all duration-300"
              >
                ดูสินค้าและราคา <ArrowRight className="w-[2.2vw] h-[2.2vw] xl:w-7 xl:h-7 shrink-0" />
              </Link>
              <Link
                href="/photo-booth-rental-revenue-share"
                className="inline-flex shrink-0 whitespace-nowrap items-center gap-[1.1vw] xl:gap-3.5 px-[3.29vw] py-[1.63vw] xl:px-10 xl:py-5 rounded-full bg-tiger-orange text-white font-bold text-[1.9vw] xl:text-[24px] hover:bg-tiger-orange/90 hover:shadow-lg hover:shadow-tiger-orange/25 transition-all duration-300"
              >
                สอบถามเช่าตู้ <ArrowRight className="w-[2.2vw] h-[2.2vw] xl:w-7 xl:h-7 shrink-0" />
              </Link>
              <Link
                href="/photo-booth-software"
                className="inline-flex shrink-0 whitespace-nowrap items-center gap-[1.1vw] xl:gap-3.5 px-[3.29vw] py-[1.63vw] xl:px-10 xl:py-5 rounded-full border-2 border-deep-space-blue/40 text-deep-space-blue font-bold text-[1.9vw] xl:text-[24px] hover:border-deep-space-blue hover:bg-deep-space-blue/5 transition-all duration-300"
              >
                ซอฟต์แวร์ Imageland <ArrowRight className="w-[2.2vw] h-[2.2vw] xl:w-7 xl:h-7 shrink-0" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "IMAGEAUTOMAT",
            "description": "ผู้นำด้านตู้โฟโต้บูธคุณภาพพรีเมียม ผลิตในไทย",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Core Strengths",
              "itemListElement": [
                {
                  "@type": "Product",
                  "name": "Hardware คุณภาพ",
                  "description": "ผลิตโครงสร้างเองในไทย ทนทาน ดีไซน์ปรับได้",
                  "manufacturer": {
                    "@type": "Organization",
                    "name": "IMAGEAUTOMAT",
                    "address": {
                      "@type": "PostalAddress", 
                      "addressCountry": "TH"
                    }
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Software ระดับ Enterprise", 
                  "description": "พัฒนาเอง 100% แก้บั๊กไว เสถียรสูง รองรับ API",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Windows, Android"
                },
                {
                  "@type": "Service",
                  "name": "Full Service Support",
                  "description": "ทีมดูแล On-site และซ่อมบำรุง 24/5",
                  "serviceType": "Technical Support",
                  "areaServed": "Thailand"
                }
              ]
            },
            "slogan": "สิ่งที่เราทำได้ดีกว่าตลาด (Hardware + Software + Support)"
          })
        }}
      />
    </section>
  )
}