"use client"

import { Check, LayoutDashboard, QrCode, BarChart3, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const highlights = [
  {
    icon: LayoutDashboard,
    title: "Cloud Dashboard",
    description: "จัดการตู้และดูสถิติรายได้แบบ Real-time ได้ทุกที่",
  },
  {
    icon: QrCode,
    title: "ระบบชำระเงิน QR Code",
    description: "รองรับ Thai QR, ShopeePay, TrueMoney, Alipay, LINE Pay",
  },
  {
    icon: BarChart3,
    title: "วิเคราะห์รายได้",
    description: "รายงานอัตโนมัติ กราฟรายวัน/สัปดาห์/เดือน ส่งออก CSV ได้",
  },
  {
    icon: Share2,
    title: "แชร์โซเชียลมีเดีย",
    description: "ลูกค้าแชร์รูปได้ทันที LINE, Facebook, Instagram, AirDrop",
  },
]

const plans = [
  {
    name: "ระยะสั้น",
    duration: "3 เดือน",
    description: "เหมาะสำหรับแคมเปญตามฤดูกาลและทดลองใช้",
    features: [
      { name: "เข้าถึง Cloud Dashboard", included: true },
      { name: "กรอบและโอเวอร์เลย์แบบกำหนดเอง", included: true },
      { name: "ระบบชำระเงิน QR Code", included: true },
      { name: "วิเคราะห์รายได้แบบ Real-time", included: true },
      { name: "แชร์โซเชียลมีเดีย", included: true },
      { name: "ซัพพอร์ตทางเทคนิค", included: true, note: "เวลาทำการ" },
      { name: "อัปเดต Software", included: true },
      { name: "จัดการระยะไกล", included: false },
    ],
    highlighted: false,
  },
  {
    name: "ระยะยาว",
    duration: "1 ปี",
    description: "คุ้มค่าที่สุดสำหรับธุรกิจที่มั่นคง",
    badge: "แนะนำ",
    features: [
      { name: "เข้าถึง Cloud Dashboard", included: true },
      { name: "กรอบและโอเวอร์เลย์แบบกำหนดเอง", included: true },
      { name: "ระบบชำระเงิน QR Code", included: true },
      { name: "วิเคราะห์รายได้แบบ Real-time", included: true },
      { name: "แชร์โซเชียลมีเดีย", included: true },
      { name: "ซัพพอร์ตทางเทคนิค", included: true, note: "24/7 Priority" },
      { name: "อัปเดต Software", included: true },
      { name: "จัดการระยะไกล", included: true },
    ],
    highlighted: true,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FB8500]/10 text-[#FB8500] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            PRICING
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047]">
            ราคาเช่า <span className="text-[#FB8500]">Software Photobooth</span>
          </h2>
          <p className="mt-4 text-lg text-[#023047]/60 max-w-2xl mx-auto">
            เปรียบเทียบแพ็กเกจซอฟต์แวร์สำหรับธุรกิจให้เช่าตู้ถ่ายภาพ และให้เช่า Photobooth พร้อมเลือกแผนที่เหมาะกับงบประมาณของคุณ
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm"
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
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-8 rounded-2xl border",
                plan.highlighted
                  ? "bg-[#FB8500]/5 border-[#FB8500] shadow-xl shadow-[#FB8500]/10"
                  : "bg-white border-[#023047]/10"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-[#FB8500] text-white text-sm font-medium rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#023047]">{plan.name}</h3>
                <div className="mt-2 text-3xl font-bold text-[#FB8500]">{plan.duration}</div>
                <p className="mt-2 text-sm text-[#023047]/55">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                        feature.included ? "bg-[#FB8500]/20" : "bg-gray-100"
                      )}
                    >
                      {feature.included ? (
                        <Check className="size-3 text-[#FB8500]" />
                      ) : (
                        <span className="w-2 h-0.5 bg-gray-400/50 rounded" />
                      )}
                    </div>
                    <span
                      className={cn(
                        "text-sm",
                        feature.included ? "text-[#023047]" : "text-[#023047]/35 line-through"
                      )}
                    >
                      {feature.name}
                      {feature.note && (
                        <span className="ml-1 text-[#FB8500] text-xs">({feature.note})</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.highlighted ? "default" : "outline"}
                asChild
              >
                <a href="#contact">ขอใบเสนอราคาแพ็กเกจนี้</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
