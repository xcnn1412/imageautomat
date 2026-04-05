"use client"

import { Check, Box, Wrench, Truck, ShieldCheck, PhoneCall, Ruler, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { KisokGallery } from "@/components/kisok-gallery"

const whatsIncluded = [
  {
    icon: Box,
    title: "โครงสร้างตู้ถ่ายภาพ",
    description: "ตัวตู้โลหะและอะคริลิกคุณภาพสูง สำหรับธุรกิจให้เช่าตู้ถ่ายภาพ พร้อมช่องติดตั้งอุปกรณ์",
  },
  {
    icon: Ruler,
    title: "หลากหลายขนาด",
    description: "มีให้เลือกหลายขนาด เหมาะกับทุกพื้นที่วาง",
  },
  {
    icon: Palette,
    title: "ดีไซน์ตามธีมงาน",
    description: "ติดสติ๊กเกอร์หรือ Wrap ตามแบรนด์ของคุณได้",
  },
  {
    icon: Truck,
    title: "ขนส่งและติดตั้ง",
    description: "จัดส่งถึงที่ ติดตั้งและเก็บตู้หลังงานบริการครบ",
  },
]

const structurePlans = [
  {
    name: "รายวัน",
    duration: "1–7 วัน",
    tag: null,
    description: "เหมาะงานแต่ง ปาร์ตี้ Pop-up Store หรืองาน Event ครั้งเดียว",
    cardClass: "bg-sky-50 border-sky-200 shadow-sky-100",
    barClass: "from-sky-400 to-cyan-400",
    checkClass: "bg-sky-100 text-sky-600",
    tagClass: "bg-sky-500 text-white",
    features: [
      "โครงสร้างตู้ KIOSK พร้อมใช้",
      "ขนส่งและติดตั้งถึงสถานที่จัดงาน",
      "เก็บตู้หลังเสร็จงาน",
      "เลือกขนาดและสีตู้ได้",
      "ซัพพอร์ต On-site ตลอดงาน",
    ],
    highlighted: false,
    cta: "ขอราคาโครงสร้างรายวัน",
  },
  {
    name: "รายเดือน",
    duration: "1–3 เดือน",
    tag: null,
    description: "เหมาะสำหรับ Pop-up ระยะสั้น หรือทดลองพื้นที่ก่อนตัดสินใจ",
    cardClass: "bg-amber-50 border-amber-200 shadow-amber-100",
    barClass: "from-amber-400 to-orange-400",
    checkClass: "bg-amber-100 text-amber-600",
    tagClass: "bg-amber-500 text-white",
    features: [
      "โครงสร้างตู้ KIOSK พร้อมใช้",
      "ขนส่งและติดตั้งถึงสถานที่",
      "บำรุงรักษาโครงสร้างตลอดระยะ",
      "เลือกขนาด / Wrap ตามธีมได้",
      "เปลี่ยนตำแหน่งวางได้ 1 ครั้ง/เดือน",
      "ซัพพอร์ตเวลาทำการ",
    ],
    highlighted: false,
    cta: "ขอราคาโครงสร้างรายเดือน",
  },
  {
    name: "รายปี",
    duration: "1 ปี",
    tag: "ราคาดีที่สุด",
    description: "เหมาะสำหรับห้าง ร้านค้า หรือธุรกิจที่ต้องการตู้ถาวรในราคาประหยัด",
    cardClass: "bg-[#FB8500]/5 border-[#FB8500] shadow-[#FB8500]/10",
    barClass: "from-[#FB8500] to-[#FB8500]/70",
    checkClass: "bg-[#FB8500]/15 text-[#FB8500]",
    tagClass: "bg-[#FB8500] text-white",
    features: [
      "โครงสร้างตู้ KIOSK พร้อมใช้",
      "ขนส่งและติดตั้งถึงสถานที่",
      "บำรุงรักษาโครงสร้างตลอดระยะ",
      "เลือกขนาด / ดีไซน์ / Wrap ได้เต็มที่",
      "เปลี่ยนตำแหน่งวางได้ไม่จำกัด",
      "ซัพพอร์ต 24/7",
      "ประกันโครงสร้างตลอดสัญญา",
    ],
    highlighted: true,
    cta: "ขอราคาโครงสร้างรายปี",
  },
]

export function StructureRentalSection() {
  return (
    <section id="structure-rental" className="py-20 lg:py-32" style={{ background: 'linear-gradient(180deg, #ffffff 0%, rgba(142,202,230,0.08) 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#8ECAE6]/20 text-[#023047] text-xs font-semibold tracking-[0.3em] uppercase">
            เช่าเฉพาะโครงสร้าง
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047]">
            แพ็กเกจเช่า<span className="text-[#FB8500]">โครงสร้างตู้ถ่ายภาพ / Photobooth</span>
          </h2>
          <p className="mt-4 text-lg text-[#023047]/60 max-w-2xl mx-auto">
            มีซอฟต์แวร์อยู่แล้ว? เช่าเฉพาะตัวตู้ถ่ายภาพ โครงเหล็ก และอุปกรณ์ติดตั้ง
            ไม่ต้องจ่ายค่า License ซ้ำ
          </p>
        </div>

        {/* What's Included */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whatsIncluded.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white border border-[#023047]/10 shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#8ECAE6]/20 flex items-center justify-center shrink-0">
                <item.icon className="size-7 text-[#023047]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#023047]">{item.title}</h3>
                <p className="mt-1 text-sm text-[#023047]/55">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mb-10 max-w-2xl mx-auto rounded-2xl bg-[#8ECAE6]/15 border border-[#8ECAE6]/30 px-6 py-4 flex gap-3 items-start">
          <PhoneCall className="size-5 text-[#023047] shrink-0 mt-0.5" />
          <p className="text-sm text-[#023047]/80">
            <span className="font-semibold">หมายเหตุ:</span> แพ็กเกจนี้{" "}
            <span className="text-[#FB8500] font-semibold">ไม่รวมซอฟต์แวร์</span>{" "}
            - หากต้องการให้เช่าตู้ถ่ายภาพพร้อมโปรแกรมครบชุด ดูได้ที่{" "}
            <a href="#rental" className="underline underline-offset-2 text-[#FB8500] hover:text-[#023047] transition-colors">
              แพ็กเกจเช่าตู้พร้อมโปรแกรม
            </a>
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {structurePlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border transition-shadow overflow-hidden",
                plan.highlighted ? `${plan.cardClass} shadow-xl` : `${plan.cardClass} shadow-sm hover:shadow-md`
              )}
            >
              {/* Color accent bar */}
              <div className={cn("h-1.5 w-full bg-gradient-to-r", plan.barClass)} />

              <div className="p-8 flex flex-col flex-1">
                {plan.tag && (
                  <div className="absolute top-5 right-5">
                    <span className={cn("px-3 py-1 text-xs font-semibold rounded-full shadow", plan.tagClass)}>
                      {plan.tag}
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#023047]">{plan.name}</h3>
                  <div className="text-2xl font-extrabold text-[#FB8500] leading-none mt-0.5">
                    {plan.duration}
                  </div>
                </div>

                <p className="text-sm text-[#023047]/60 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <div className={cn("flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5", plan.checkClass)}>
                        <Check className="size-3" />
                      </div>
                      <span className="text-[#023047]/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <a href="#contact">{plan.cta}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <KisokGallery />

        {/* Trust note */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-primary shrink-0" />
            ประกันโครงสร้างตู้ถ่ายภาพตลอดระยะเช่า
          </span>
          <span className="hidden sm:block w-px h-4 bg-border" />
          <span className="flex items-center gap-2">
            <Truck className="size-4 text-primary shrink-0" />
            ขนส่งและติดตั้งถึงที่
          </span>
          <span className="hidden sm:block w-px h-4 bg-border" />
          <span className="flex items-center gap-2">
            <Wrench className="size-4 text-primary shrink-0" />
            ซ่อมบำรุงฟรีตลอดสัญญา
          </span>
        </div>

      </div>
    </section>
  )
}
