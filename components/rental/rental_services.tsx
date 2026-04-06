"use client"

import Image from "next/image"
import { Wrench, Package, Building2, PartyPopper, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "วางแผนระบบให้เช่าตู้ถ่ายภาพ",
    description: 'ให้คำปรึกษาการเริ่มธุรกิจให้เช่าตู้ถ่ายภาพและให้เช่า Photobooth ตั้งแต่เลือกโมเดลรายได้ อุปกรณ์ ไปจนถึงแผนการติดตั้งใช้งานจริง',
    image: "/photoboothkiosk/packagedetail.webp",
    gradient: "from-orange-500/20 to-amber-400/10",
    iconBg: "bg-orange-100 text-orange-600",
    stat: "Rental Setup",
    href: "https://www.imageautomat.com/rental",
  },
  {
    icon: Package,
    title: "ให้เช่าตู้ถ่ายภาพ / ให้เช่า Photobooth",
    description: 'ให้เช่าตู้ถ่ายภาพ และให้เช่า Photobooth หลากหลายรุ่น เหมาะสำหรับงานแต่ง ปาร์ตี้ และอีเวนต์ พร้อมส่งถึงที่และติดตั้งครบชุด',
    image: "/photoboothkiosk/packagedetail2.webp",
    gradient: "from-blue-500/20 to-sky-400/10",
    iconBg: "bg-blue-100 text-blue-600",
    stat: "Daily / Monthly",
    href: "https://www.imageautomat.com/rental",
  },
  {
    icon: Building2,
    title: "ให้เช่า Software เชิงพาณิชย์",
    description: "ซอฟต์แวร์หารายได้จาก Photobooth พร้อมระบบชำระเงิน QR Code แดชบอร์ดวิเคราะห์รายได้ Real-time",
    image: "/photoboothkiosk/packagedetail3.webp",
    gradient: "from-purple-500/20 to-violet-400/10",
    iconBg: "bg-purple-100 text-purple-600",
    stat: "Pay-per-use",
    href: "https://www.imageautomat.com/software",
  },
  {
    icon: PartyPopper,
    title: "โซลูชันเช่าสำหรับงาน Event",
    description: "แพ็กเกจให้เช่าตู้ถ่ายภาพสำหรับงาน Event พร้อม Branding หน้างาน และแชร์โซเชียลมีเดียได้ทันที",
    image: "/photoboothkiosk/packagedetail4.webp",
    gradient: "from-green-500/20 to-emerald-400/10",
    iconBg: "bg-green-100 text-green-600",
    stat: "Unlimited shots",
    href: "https://www.imageautomat.com/software",
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, rgba(142,202,230,0.10) 0%, #ffffff 100%)" }}
    >
      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute top-20 left-10 w-72 h-72 bg-[#8ECAE6]/25 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-10 w-96 h-96 bg-[#FB8500]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FB8500]/10 text-[#FB8500] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            RENTAL SOLUTIONS
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#023047] tracking-tight">
            แพ็กเกจ<span className="text-[#FB8500]">ให้เช่าตู้ถ่ายภาพ ครบวงจร</span>
          </h2>
          <p className="mt-4 text-[#023047]/60 max-w-xl mx-auto text-base lg:text-lg">
            เลือกแพ็กเกจให้เช่าตู้ถ่ายภาพและให้เช่า Photobooth ที่เหมาะกับงานของคุณ พร้อมติดตั้งและซัพพอร์ตครบตั้งแต่ต้นจนจบ
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((item) => (
            <div
              key={item.title}
              className={`group relative rounded-2xl overflow-hidden border border-white/60 bg-gradient-to-br ${item.gradient} backdrop-blur-sm hover:shadow-xl hover:shadow-[#023047]/10 hover:scale-[1.02] transition-all duration-300`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/9] bg-gradient-to-br from-white via-gray-50 to-gray-100">
                <Image
                  src={item.image}
                  alt={`${item.title} - IMAGEAUTOMAT`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  loading="lazy"
                />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/60 to-transparent" />
                {/* Stat badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#023047] text-white text-[10px] font-bold tracking-wide shadow-md">
                  {item.stat}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${item.iconBg}`}>
                    <item.icon className="size-4" />
                  </div>
                  <h3 className="font-semibold text-[#023047] text-sm leading-tight">{item.title}</h3>
                </div>
                <p className="text-[#023047]/60 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FB8500] hover:gap-2.5 transition-all duration-200"
                >
                  ขอรายละเอียดแพ็กเกจ
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
