"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MonitorPlay, CheckCircle2, CalendarClock, Headphones, LayoutDashboard } from "lucide-react"

const demoHighlights = [
  {
    icon: LayoutDashboard,
    text: "ดู Dashboard จัดการรายได้แบบ Real-time",
  },
  {
    icon: MonitorPlay,
    text: "ทดลองระบบสำหรับให้เช่าตู้ถ่ายภาพจริง",
  },
  {
    icon: CalendarClock,
    text: "นัดหมายได้ทั้งออนไลน์และ On-site",
  },
  {
    icon: Headphones,
    text: "ทีมผู้เชี่ยวชาญพร้อมตอบทุกคำถาม",
  },
]

export function DemoSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "", business: "", date: "", time: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="demo" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Info */}
          <div>
              <p className="text-xs font-semibold text-[#FB8500] uppercase tracking-[0.3em] mb-3">
              นัดเดโมและประเมินราคา
            </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047] leading-tight">
                ขอ <span className="text-[#FB8500]">DEMO + ใบเสนอราคา</span><br />
              สำหรับงานเช่า Photobooth
            </h2>
              <p className="mt-5 text-[#023047]/60 text-base lg:text-lg leading-relaxed">
              ทีมงานช่วยประเมินแพ็กเกจให้เช่าตู้ถ่ายภาพที่เหมาะกับงบและรูปแบบงานของคุณ พร้อมนัดติดตั้งหรือสาธิตระบบจริงก่อนตัดสินใจ
            </p>

            <ul className="mt-8 space-y-4">
              {demoHighlights.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#FB8500]/10 flex items-center justify-center">
                    <item.icon className="size-4 text-[#FB8500]" />
                  </div>
                  <span className="text-[#023047] text-sm font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-3">
              <CheckCircle2 className="size-5 text-[#FB8500] flex-shrink-0" />
              <p className="text-sm text-[#023047]/60">
                ฟรี ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด พร้อมสรุปแผนเช่าและวันติดตั้งเบื้องต้นภายใน <span className="font-semibold text-[#023047]">24 ชั่วโมง</span>
              </p>
            </div>
          </div>

          {/* Right — Form */}
            <div className="bg-white border border-[#023047]/10 rounded-2xl p-8 shadow-lg">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">ได้รับคำขอแล้ว!</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  ทีมงานจะติดต่อกลับเพื่อเสนอราคาและนัดติดตั้งภายใน 24 ชั่วโมง
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-foreground mb-1">ขอราคาและนัดติดตั้งฟรี</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  กรอกข้อมูลด้านล่างเพื่อรับใบเสนอราคาและวันติดตั้งที่เหมาะกับงานของคุณ
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      ชื่อ-นามสกุล <span className="text-primary">*</span>
                    </label>
                    <Input
                      placeholder="เช่น สมชาย ใจดี"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      เบอร์โทรศัพท์ <span className="text-primary">*</span>
                    </label>
                    <Input
                      type="tel"
                      placeholder="0812345678"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      อีเมล <span className="text-primary">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      ประเภทธุรกิจ/ประเภทงาน
                    </label>
                    <Input
                      placeholder="เช่น ห้างสรรพสินค้า, งานแต่ง, Event, บูธโปรโมต"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        วันที่สะดวกติดต่อ <span className="text-primary">*</span>
                      </label>
                      <Input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="cursor-pointer"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        เวลาที่สะดวก <span className="text-primary">*</span>
                      </label>
                      <Input
                        type="time"
                        min="09:00"
                        max="18:00"
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="cursor-pointer"
                        required
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground -mt-1">เวลาทำการ 09:00 – 18:00 น.</p>

                  <Button type="submit" size="lg" className="w-full mt-2">
                    <MonitorPlay className="mr-2 size-4" />
                    ส่งคำขอราคาและนัดติดตั้ง
                  </Button>
                </form>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  หรือติดต่อผ่าน LINE / โทรศัพท์ได้ทันที
                </p>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
