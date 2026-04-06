"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, Cpu, LayoutDashboard, Palette, QrCode, Quote, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Sparkles,
    shortTitle: "AI & Canvas",
    image: "/images/event-photobooth.jpg",
    imageAlt: "ลูกค้าใช้งานตู้ถ่ายภาพ Photobooth พร้อมระบบ AI Digital Canvas สำหรับงานอีเวนต์",
    title: "ยกระดับประสบการณ์ให้เช่าตู้ถ่ายภาพด้วย AI & Digital Canvas",
    description: "ดึงดูดลูกค้าให้กลับมาถ่ายซ้ำด้วยลูกเล่นที่ปรับแต่งได้อิสระ มอบประสบการณ์ตู้ถ่ายภาพระดับพรีเมียมในทุกช็อต",
    subFeatures: [
      { title: "Touchscreen & Digital Stickers", description: "หน้าจอสัมผัสลื่นไหล ให้ลูกค้าตกแต่งภาพด้วยสติกเกอร์และเขียนข้อความแบบ Digital Canvas ได้ตามใจชอบก่อนสั่งพิมพ์" },
      { title: "Premium Color Grading & LUTs", description: "รองรับไฟล์ .cube LUTs เพื่อให้ภาพสวยคมชัดระดับสตูดิโอ หรือเลือกใช้ฟิลเตอร์อัจฉริยะได้ทันที" },
      { title: "AI Face-swap & Style Filters", description: "สร้างความแตกต่างด้วยระบบ AI ที่เปลี่ยนสไตล์ภาพให้สนุกและแปลกใหม่แบบ Real-time" },
    ],
  },
  {
    icon: Cpu,
    shortTitle: "ระบบเสถยร",
    image: "/images/catalog-booth.jpg",
    imageAlt: "ตู้ถ่ายภาพอัตโนมัติ Photobooth หลากหลายรุ่น รองรับฮาร์ดแวร์ระดับอุตสาหกรรม",
    title: "ระบบทำงานเสถียร รองรับตู้ถ่ายภาพเชิงพาณิชย์",
    description: "หมดปัญหาตู้ค้างหรืออุปกรณ์สะดุด พัฒนามาเพื่อรองรับงานให้เช่า Photobooth ที่ใช้งานหนักตลอดวัน",
    subFeatures: [
      { title: "Native Camera & Printer Integration", description: "เชื่อมต่อและดึงประสิทธิภาพสูงสุดจากกล้อง DSLR/Mirrorless ชั้นนำ และเครื่องพิมพ์ภาพระดับอุตสาหกรรม เช่น DNP" },
      { title: "Smart Hardware Control", description: "รองรับการทำงานร่วมกับบอร์ดคอนโทรลเลอร์เพื่อควบคุมระบบไฟและกระแสไฟอัตโนมัติ" },
      { title: "Auto-Recovery & Error Handling", description: "ระบบฟื้นตัวเองอัจฉริยะ หากเกิดกรณีกระดาษติดหรือลูกค้าต้องการถ่ายใหม่ ระบบจัดการต่อได้ทันที" },
    ],
  },
  {
    icon: QrCode,
    shortTitle: "ชำระเงน QR",
    image: "/images/mall-photobooth.jpg",
    imageAlt: "ตู้ Photobooth ในห้างสรรพสินค้า พร้อมระบบชำระเงิน QR PromptPay อัตโนมัติ",
    title: "รับชำระเงินอัตโนมัติสำหรับให้เช่าตู้ถ่ายภาพ",
    description: "รับเงินง่าย จบไว ไม่ต้องใช้พนักงานประจำตู้ รองรับ PromptPay และช่องทางชำระเงินไทยครบทุกช่องทาง",
    subFeatures: [
      { title: "Dynamic QR Code (PromptPay)", description: "สร้าง QR Code พร้อมเพย์แบบอัตโนมัติ สแกนจ่ายง่าย ปลอดภัย รองรับ PromptPay และ TrueMoney Wallet" },
      { title: "Auto-Verify Payment", description: "ระบบตรวจสอบยอดเงินเข้าอัตโนมัติและสั่งเริ่มทำงานทันทีเมื่อได้รับชำระเงิน" },
      { title: "Digital Download via QR Cloud", description: "ลูกค้าสแกน QR เพื่อดาวน์โหลดไฟล์ภาพดิจิทัลและวิดีโอลงมือถือได้ทันที" },
    ],
  },
  {
    icon: LayoutDashboard,
    shortTitle: "Cloud Dashboard",
    image: "/images/dashboard-preview.jpg",
    imageAlt: "หน้าจอ Cloud Dashboard สำหรับจัดการธุรกิจให้เช่าตู้ถ่ายภาพแบบ Real-time",
    title: "บริหารธุรกิจให้เช่า Photobooth ได้จากทุกที่",
    description: "ดูแลทุกสาขาได้จากหน้าจอเดียว ไม่ว่าจะมีตู้เดียวหรือหลายสาขา ผ่านระบบ Cloud Dashboard",
    subFeatures: [
      { title: "Real-time Revenue Tracking", description: "ติดตามยอดขายรายวันและวิเคราะห์รายได้ของแต่ละสาขาแบบ Real-time บนหน้าจอเดียว" },
      { title: "Consumables Alert", description: "ระบบแจ้งเตือนอัจฉริยะเมื่อกระดาษหรือริบบอนใกล้หมด ช่วยให้วางแผนเติมของได้ทันเวลา" },
      { title: "Remote Management & Updates", description: "อัปเดตเฟรมภาพ เปลี่ยนโปรโมชั่น หรือตรวจสอบสถานะตู้ได้จากระยะไกลผ่านระบบ Cloud" },
    ],
  },
  {
    icon: Palette,
    shortTitle: "White-Label",
    image: "/images/custom-booth.jpg",
    imageAlt: "ตู้ Photobooth ปรับแบรนด์เฉพาะองค์กรด้วย White-Label Custom UI",
    title: "ปรับแบรนด์ตู้ถ่ายภาพได้ 100% ด้วย White-Label",
    description: "สร้างตู้ถ่ายภาพอัตโนมัติที่เป็นเอกลักษณ์ของแบรนด์คุณเอง รองรับทั้งงานอีเวนต์และการติดตั้งถาวร",
    subFeatures: [
      { title: "Custom Interface & Standby Ads", description: "เปลี่ยนโลโก้ สีสัน UI และตั้งค่าวิดีโอโฆษณาบนหน้าจอสแตนด์บายเพื่อสร้าง Brand Awareness" },
      { title: "Event-Ready Deployment", description: "เหมาะสำหรับต่อยอดรับงานอีเวนต์ โปรโมตสินค้า หรือแคมเปญการตลาดขององค์กรได้ทันที" },
    ],
  },
]

const testimonials = [
  {
    quote: "ระบบชำระเงิน QR Code ช่วยเพิ่มรายได้จากตู้ถ่ายภาพของเราได้ชัดเจน ติดตั้งง่ายและใช้งานได้ทันที",
    author: "ผู้จัดการห้างสรรพสินค้า",
    company: "ห้างชั้นนำในเครือข่ายระดับประเทศ",
  },
  {
    quote: "เราใช้ระบบนี้กับงาน Corporate Event ทุกงาน ปรับแบรนด์สำหรับให้เช่า Photobooth ได้เร็วมาก",
    author: "ผู้อำนวยการ Event",
    company: "เอเจนซีจัดงานชั้นนำ",
  },
]

export function FeaturesSection() {
  const [active, setActive] = useState(0)
  const feature = features[active]

  return (
    <section id="features" aria-labelledby="features-heading" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FB8500]/10 text-[#FB8500] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            <Sparkles className="size-3" />
            CORE FEATURES
          </span>
          <h2 id="features-heading" className="text-3xl lg:text-5xl font-extrabold text-[#023047] tracking-tight">
            ฟีเจอร<span className="text-[#FB8500]">ไฮไลต์</span>
          </h2>
          <p className="mt-4 text-[#023047]/60 max-w-sm mx-auto text-base leading-relaxed">
            ฟีเจอร์สำหรับธุรกิจให้เช่าตู้ถ่ายภาพ และให้เช่า Photobooth ที่ต้องการใช้งานจริงในเชิงพาณิชย์
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-1">
          <div className="flex gap-2 p-1 rounded-2xl bg-[#023047]/5 min-w-max">
            {features.map((f, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={f.title}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap",
                  active === i
                    ? "bg-white text-[#023047] shadow-sm"
                    : "text-[#023047]/50 hover:text-[#023047]"
                )}
              >
                <f.icon className="size-3.5 shrink-0" />
                {f.shortTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Panel */}
        <div className="overflow-hidden rounded-3xl border border-[#023047]/10 bg-white shadow-md shadow-[#023047]/5">
          <div className="grid lg:grid-cols-2">

            {/* Image Side */}
            <div className="relative min-h-[260px] lg:min-h-[480px] overflow-hidden">
              <Image
                key={feature.image}
                src={feature.image}
                alt={feature.imageAlt}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Content Side */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="w-11 h-11 rounded-2xl bg-[#FB8500]/10 flex items-center justify-center mb-6">
                <feature.icon className="size-5 text-[#FB8500]" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#023047] leading-snug mb-3">
                {feature.title}
              </h3>
              <p className="text-[#023047]/60 leading-relaxed text-sm lg:text-base mb-8 max-w-sm">
                {feature.description}
              </p>
              <ul className="space-y-3" aria-label={`ฟีเจอร์ของ ${feature.title}`}>
                {feature.subFeatures.map((sub) => (
                  <li key={sub.title} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FB8500]/15 flex items-center justify-center shrink-0">
                      <Check className="size-3 text-[#FB8500]" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80">{sub.title}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-5" role="tablist" aria-label="ฟีเจอร์">
          {features.map((f, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full transition-all duration-300",
                active === i
                  ? "w-6 h-2 bg-[#023047]"
                  : "w-2 h-2 bg-[#023047]/20 hover:bg-[#023047]/40"
              )}
              aria-label={f.shortTitle}
            />
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-xl font-bold text-[#023047] text-center mb-8">ความสำเร็จของลูกค้า</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-[#023047]/10 hover:border-[#FB8500]/30 hover:shadow-md transition-all duration-300"
              >
                <Quote className="size-7 text-[#FB8500]/20 mb-4" />
                <p className="text-[#023047]/80 text-sm mb-5 italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#FB8500]/10 border border-[#FB8500]/20 flex items-center justify-center shrink-0">
                      <span className="text-[#FB8500] text-xs font-bold">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#023047] text-sm">{testimonial.author}</p>
                      <p className="text-xs text-[#023047]/50 mt-0.5">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}