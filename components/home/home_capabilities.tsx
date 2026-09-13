"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ProductSection } from "@/components/home/home_product"
import { motion } from "framer-motion"
import { PaymentSlideShow1Row } from "@/components/payment-slideshow-1row"
import {
  Camera, LayoutGrid, Cloud, BarChart3, Settings, CalendarDays,
  CreditCard, Ticket, CalendarCheck, Globe, ArrowRight,
} from "lucide-react"

const softwareFeatures = [
  { icon: Camera, label: "ถ่ายภาพคุณภาพสูง" },
  { icon: LayoutGrid, label: "ปรับดีไซน์ได้ทันที" },
  { icon: Cloud, label: "เชื่อมต่อออนไลน์" },
  { icon: BarChart3, label: "ดูรายงานการใช้งาน" },
  { icon: Settings, label: "รองรับธุรกิจหลายรูปแบบ" },
]

const paymentFeatures = [
  { icon: CreditCard, title: "ระบบชำระเงิน", en: "PAYMENT", description: "รองรับหลายช่องทาง\nปลอดภัย รวดเร็ว" },
  { icon: Ticket, title: "ระบบคูปอง", en: "COUPON", description: "สร้างและจัดการคูปอง\nส่วนลดได้ง่าย ยืดหยุ่น" },
  { icon: CalendarCheck, title: "ระบบอีเวนต์", en: "EVENT", description: "จัดการงานอีเวนต์ได้\nอย่างมีประสิทธิภาพ ครบวงจร" },
  { icon: Globe, title: "ระบบจัดการหลังบ้าน", en: "DASHBOARD", description: "ระบบจัดการหลังบ้าน\nผ่าน Website Online 100%" },
]

const rentalModes = [
  {
    icon: CalendarDays,
    href: "/photo-booth-rental-revenue-share",
    title: "เช่าระยะสั้น พร้อมระบบชำระเงินก่อนถ่าย",
    description: "เหมาะสำหรับงานอีเวนต์ งานแต่งงาน หรืองานพิเศษ\nพร้อมระบบชำระเงินในตัว",
    card: "border-tiger-orange/40",
    tile: "bg-tiger-orange text-white",
    button: "bg-tiger-orange hover:bg-tiger-orange/90",
  },
  {
    icon: BarChart3,
    href: "/contact",
    title: "วางตู้แบ่งเปอร์เซ็นต์รายได้",
    description: "เหมาะสำหรับห้างสรรพสินค้า ร้านค้า หรือสถานที่ที่มีผู้คน\nให้เราไปวางตู้และแบ่งรายได้ร่วมกัน",
    card: "border-deep-space-blue/50",
    tile: "bg-deep-space-blue text-white",
    button: "bg-deep-space-blue hover:bg-deep-space-blue/90",
  },
]

/* ponytail: สไลด์รูปผลงาน — render เฉพาะรูปที่กำลังโชว์ (key เปลี่ยน = fade ใหม่) ไม่ต้องโหลดทั้ง 24 รูป */
const oemSlides = Array.from({ length: 24 }, (_, i) => `/slideshow/images/photobooth_${i + 1}.webp`)

function OemSlideshow() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % oemSlides.length), 3500)
    return () => clearInterval(t)
  }, [])
  // ponytail: รูปผลงานมีทั้งแนวตั้ง/แนวนอน — object-contain กันตัดขอบ พื้นหลังเทาอ่อนรับส่วนที่เหลือ
  return (
    <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl bg-slate-100">
      <motion.div
        key={oemSlides[index]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0"
      >
        <Image
          src={oemSlides[index]}
          alt="ผลงานรับผลิตตู้โฟโต้บูธ OEM ภายใต้แบรนด์ของคุณ"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain"
        />
      </motion.div>
    </div>
  )
}

/* ponytail: 4 บล็อกในไฟล์เดียว — ไม่มีใครใช้ซ้ำที่อื่น แยกคอมโพเนนต์ไว้ก่อนคือ YAGNI */
export function HomeCapabilities() {
  const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.55, ease: "easeOut" as const },
  }

  return (
    <section className="bg-white">

      {/* ── SOFTWARE ── */}
      <motion.div {...fade} className="bg-sky-50/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 sm:py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-tiger-orange">• Software</p>
            {/* ponytail: min(6vw,29px) = เล็กลงจาก 36px ไม่เกิน 20% และยังบรรทัดเดียวถึงจอ 430px */}
            <h2 className="mt-4 font-sans font-extrabold leading-tight whitespace-nowrap text-[min(6.7vw,34px)] text-deep-space-blue">
              ซอฟต์แวร์ควบคุมครบวงจร
            </h2>
            <p className="mt-3 leading-relaxed text-deep-space-blue/60 text-balance">
              ใช้งานง่าย ฟีเจอร์ครบ ตอบโจทย์ทั้งธุรกิจเช่าและวางตู้
            </p>
            {/* ponytail: flex+justify-center แทน grid — แถวสุดท้ายที่ไม่เต็มคอลัมน์จะอยู่กึ่งกลาง ไม่ชิดซ้าย */}
            <ul className="mt-9 flex flex-wrap justify-center gap-x-4 gap-y-5">
              {softwareFeatures.map(({ icon: Icon, label }) => (
                <li key={label} className="w-[28%] sm:w-[17%] text-center">
                  <span className="mx-auto flex w-14 h-14 items-center justify-center rounded-2xl bg-white shadow-[0_2px_10px_rgba(2,48,71,0.08)]">
                    <Icon className="w-6 h-6 text-deep-space-blue" strokeWidth={1.6} />
                  </span>
                  <span className="mt-2 block min-h-[2.6em] text-[12px] leading-snug text-deep-space-blue/60 text-balance">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/dashboard-preview.jpg"
              alt="ซอฟต์แวร์ควบคุมตู้โฟโต้บูธ"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* ── PAYMENT SYSTEM ── */}
      <motion.div {...fade} className="grid lg:grid-cols-2">
        <div className="bg-tiger-orange px-6 lg:px-8 py-14 sm:py-16">
          <div className="lg:ml-auto lg:max-w-[640px]">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/80">• Payment System</p>
            <h2 className="mt-4 font-sans font-extrabold leading-tight text-[min(7.5vw,38px)] text-white">
              ระบบชำระเงินก่อนถ่าย
            </h2>
            <p className="mt-3 text-[18px] leading-relaxed text-white/90 whitespace-pre-line">
              {"รองรับการชำระเงินหลากหลายช่องทาง\nใช้งานง่าย ปลอดภัย ตรวจสอบได้"}
            </p>
            <ul className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
              {paymentFeatures.map(({ icon: Icon, title, en, description }) => (
                <li key={en}>
                  <span className="flex w-12 h-12 items-center justify-center rounded-xl bg-white">
                    <Icon className="w-6 h-6 text-tiger-orange" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 font-sans font-bold text-[14px] leading-snug text-white">{title}</h3>
                  <p className="font-bold text-[14px] tracking-[0.1em] text-white/85">{en}</p>
                  <p className="mt-3 text-[12px] font-light leading-relaxed text-white/90 whitespace-pre-line">{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* ponytail: วิดีโอเล่นวนเงียบ ๆ แทนรูป — preload=auto + muted/playsInline ให้ autoplay ได้ทุกเบราว์เซอร์ */}
        <div className="relative min-h-[280px] bg-slate-900 lg:min-h-0">
          <video
            src="/videos/sample.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="ตัวอย่างการใช้งานระบบชำระเงินก่อนถ่าย"
          />
          <span className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-black/55 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            วีดีโอตัวอย่าง
          </span>
        </div>
      </motion.div>

      {/* ── โลโก้ช่องทางชำระเงิน (แถบขาวใต้บล็อกส้ม) ── */}
      <div className="bg-white overflow-hidden">
        <PaymentSlideShow1Row />
      </div>

      {/* ── RENTAL ── */}
      <motion.div {...fade} className="bg-sky-50/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-11 sm:pt-[3.2rem] pb-14 sm:pb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-tiger-orange">• Rental</p>
          <h2 className="mt-4 font-sans font-extrabold leading-tight text-3xl sm:text-4xl text-deep-space-blue">
            บริการเช่าตู้ถ่ายรูป <span className="text-tiger-orange">2</span> รูปแบบ:
            <br />
            เช่าระยะสั้น หรือวางตู้แบ่งรายได้
          </h2>
          {/* ponytail: สีการ์ด/ไทล์/ปุ่ม เก็บเป็น class string ใน data — ไม่ต้อง map index เป็นธีม */}
          <div className="mt-9 grid md:grid-cols-2 gap-6">
            {rentalModes.map(({ icon: Icon, href, title, description, card, tile, button }) => (
              <div
                key={title}
                className={`flex overflow-hidden rounded-2xl border bg-white shadow-[0_2px_12px_rgba(2,48,71,0.06)] ${card}`}
              >
                <div className={`w-20 sm:w-24 shrink-0 flex items-center justify-center ${tile}`}>
                  <Icon className="w-[38px] h-[38px]" strokeWidth={2.5} />
                </div>
                <div className="flex-1 flex flex-col p-5">
                  <h3 className="font-sans font-bold text-lg leading-snug text-deep-space-blue min-h-[1.4em]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-deep-space-blue/60 whitespace-pre-line">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── OEM ── */}
      <motion.div {...fade}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 sm:py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-tiger-orange">OEM</p>
            <h2 className="mt-4 font-sans font-extrabold leading-tight text-3xl sm:text-4xl text-deep-space-blue">
              ผลิต OEM ภายใต้แบรนด์ของคุณ
            </h2>
            <p className="mt-3 leading-relaxed text-deep-space-blue/60 whitespace-pre-line">
              {"เรามีบริการผลิตตู้โฟโต้บูธ OEM ครบวงจร\nออกแบบตามความต้องการ พร้อมซอฟต์แวร์และการซัพพอร์ต"}
            </p>
          </div>
          <OemSlideshow />
        </div>
      </motion.div>

      {/* ── สินค้าตู้โฟโต้บูธ (ต่อท้ายบล็อก OEM) ── */}
      <ProductSection />

    </section>
  )
}
