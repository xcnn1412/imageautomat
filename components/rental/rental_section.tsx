"use client"

import { Check, Box, Zap, MonitorSmartphone, Calendar, Clock, BadgeCheck, ShieldCheck, Wallet, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const included = [
  {
    icon: Box,
    title: "ตู้ถ่ายภาพพร้อมใช้งาน",
    description: "ตู้ถ่ายภาพและ Photobooth KIOSK คุณภาพสูง พร้อมหน้าจอสัมผัส กล้อง และเครื่องพิมพ์",
  },
  {
    icon: Zap,
    title: "อุปกรณ์ไฟฟ้าครบชุด",
    description: "CPU, UPS สำรองไฟ, ระบบสายไฟภายใน ติดตั้งพร้อมใช้งาน",
  },
  {
    icon: MonitorSmartphone,
    title: "ซอฟต์แวร์สำหรับให้เช่า Photobooth",
    description: "ลิขสิทธิ์ซอฟต์แวร์ครบฟีเจอร์ QR Code, แดชบอร์ด และแชร์โซเชียลสำหรับงานเชิงพาณิชย์",
  },
]

const plans = [
  {
    name: "รายวัน",
    duration: "1–7 วัน",
    tag: null,
    description: "เหมาะสำหรับงาน Event ครั้งเดียว งานแต่ง ปาร์ตี้ หรือ Pop-up",
    icon: Sparkles,
    cardClass: "bg-sky-50 border-sky-200 shadow-sky-100",
    iconClass: "bg-sky-100 text-sky-600",
    barClass: "from-sky-400 to-cyan-400",
    checkClass: "bg-sky-100 text-sky-600",
    tagClass: "bg-sky-500 text-white",
    features: [
      "ตู้ถ่ายภาพ / Photobooth พร้อมใช้",
      "อุปกรณ์ไฟฟ้าและระบบสายไฟครบชุด",
      "License ซอฟต์แวร์ (สูงสุด 7 วัน)",
      "ติดตั้งและเก็บตู้บริการถึงที่",
      "ซัพพอร์ตตลอดงาน (On-site)",
      "กำหนด Branding / ธีมงานได้",
    ],
    highlighted: false,
    cta: "ขอราคา + นัดติดตั้งรายวัน",
  },
  {
    name: "ระยะสั้น",
    duration: "3 เดือน",
    tag: null,
    description: "เหมาะสำหรับงาน Event ตามฤดูกาลหรือทดลองตลาด",
    icon: Clock,
    cardClass: "bg-amber-50 border-amber-200 shadow-amber-100",
    iconClass: "bg-amber-100 text-amber-600",
    barClass: "from-amber-400 to-orange-400",
    checkClass: "bg-amber-100 text-amber-600",
    tagClass: "bg-amber-500 text-white",
    features: [
      "ตู้ถ่ายภาพ / Photobooth พร้อมใช้",
      "อุปกรณ์ไฟฟ้าและระบบสายไฟครบชุด",
      "License ซอฟต์แวร์เชิงพาณิชย์ (3 เดือน)",
      "ติดตั้งและทดสอบระบบฟรี",
      "ซัพพอร์ตเวลาทำการ (จ–ศ)",
      "อัปเดตซอฟต์แวร์ตลอดระยะเช่า",
    ],
    highlighted: false,
    cta: "ขอราคา + นัดติดตั้งระยะสั้น",
  },
  {
    name: "ระยะยาว",
    duration: "1 ปี",
    tag: "คุ้มค่าที่สุด",
    description: "ลงทุนน้อย รายได้ต่อเนื่อง เหมาะกับห้างและธุรกิจถาวร",
    icon: Calendar,
    cardClass: "bg-[#FB8500]/5 border-[#FB8500] shadow-[#FB8500]/10",
    iconClass: "bg-[#FB8500] text-white",
    barClass: "from-[#FB8500] to-[#FB8500]/70",
    checkClass: "bg-[#FB8500]/15 text-[#FB8500]",
    tagClass: "bg-[#FB8500] text-white",
    features: [
      "ตู้ถ่ายภาพ / Photobooth พร้อมใช้",
      "อุปกรณ์ไฟฟ้าและระบบสายไฟครบชุด",
      "License ซอฟต์แวร์เชิงพาณิชย์ (1 ปี)",
      "ติดตั้งและทดสอบระบบฟรี",
      "ซัพพอร์ต 24/7 Priority",
      "อัปเดตซอฟต์แวร์ตลอดระยะเช่า",
      "บำรุงรักษาฮาร์ดแวร์เชิงป้องกัน",
      "จัดการระบบระยะไกล (Remote Management)",
    ],
    highlighted: true,
    cta: "ขอราคา + นัดติดตั้งระยะยาว",
  },
]

export function RentalSection() {
  return (
    <section id="rental" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#FB8500]/10 text-[#FB8500] text-xs font-semibold tracking-[0.3em] uppercase">
            บริการเช่าแบบครบวงจร
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047]">
            แพ็กเกจ<span className="text-[#FB8500]">ให้เช่าตู้ถ่ายภาพพร้อมโปรแกรม</span>
          </h2>
          <p className="mt-4 text-lg text-[#023047]/60 max-w-2xl mx-auto">
            ไม่ต้องลงทุนซื้อขาด เลือกแผนเช่ารายวัน รายเดือน หรือรายปี สำหรับให้เช่าตู้ถ่ายภาพและให้เช่า Photobooth พร้อมอุปกรณ์ครบชุด
          </p>
        </div>

        {/* What's Included + Payment */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {included.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white border border-[#023047]/10 shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FB8500]/10 flex items-center justify-center shrink-0">
                <item.icon className="size-7 text-[#FB8500]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#023047]">{item.title}</h3>
                <p className="mt-1 text-sm text-[#023047]/55">{item.description}</p>
              </div>
            </div>
          ))}

          {/* Payment card */}
          <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white border border-[#023047]/10 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#FB8500]/10 flex items-center justify-center shrink-0">
              <Wallet className="size-7 text-[#FB8500]" />
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-[#023047]">ช่องทางชำระเงิน</h3>
              <p className="mt-1 text-sm text-[#023047]/55 mb-3">รองรับ e-Wallet และ QR Payment สำหรับธุรกิจให้เช่าตู้ถ่ายภาพครบทุกเจ้า</p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {[
                  { label: "Thai QR", bg: "bg-[#1a3a6b]/10", text: "text-[#1a3a6b]", border: "border-[#1a3a6b]/20", dot: "bg-[#1a3a6b]" },
                  { label: "ShopeePay", bg: "bg-[#EE4D2D]/10", text: "text-[#EE4D2D]", border: "border-[#EE4D2D]/20", dot: "bg-[#EE4D2D]" },
                  { label: "TrueMoney", bg: "bg-[#FF6600]/10", text: "text-[#FF6600]", border: "border-[#FF6600]/20", dot: "bg-[#FF6600]" },
                  { label: "Alipay", bg: "bg-[#1677FF]/10", text: "text-[#1677FF]", border: "border-[#1677FF]/20", dot: "bg-[#1677FF]" },
                  { label: "LINE Pay", bg: "bg-[#06C755]/10", text: "text-[#06C755]", border: "border-[#06C755]/20", dot: "bg-[#06C755]" },
                ].map((ch) => (
                  <span
                    key={ch.label}
                    className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium",
                      ch.bg, ch.text, ch.border
                    )}
                  >
                    <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", ch.dot)} />
                    {ch.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
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
                <div className="flex items-center gap-4 mb-6">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", plan.iconClass)}>
                    <plan.icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#023047]">{plan.name}</h3>
                    <div className="text-2xl font-extrabold text-[#FB8500] leading-none mt-0.5">
                      {plan.duration}
                    </div>
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

        {/* Trust note */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2 text-[#023047]/60">
            <ShieldCheck className="size-4 text-[#FB8500] shrink-0" />
            ตู้มีประกันตลอดระยะเช่า
          </span>
          <span className="hidden sm:block w-px h-4 bg-[#023047]/15" />
          <span className="flex items-center gap-2 text-[#023047]/60">
            <BadgeCheck className="size-4 text-[#FB8500] shrink-0" />
            ติดตั้งฟรี ไม่มีค่าใช้จ่ายแอบแฝง
          </span>
          <span className="hidden sm:block w-px h-4 bg-[#023047]/15" />
          <span className="flex items-center gap-2 text-[#023047]/60">
            <Check className="size-4 text-[#FB8500] shrink-0" />
            ยืดหยุ่น ต่ออายุหรือเปลี่ยนแผนได้
          </span>
        </div>

      </div>
    </section>
  )
}
