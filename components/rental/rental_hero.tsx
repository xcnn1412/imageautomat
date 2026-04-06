"use client"

import Image from "next/image"
import { ArrowRight, Camera, Users, Monitor } from "lucide-react"

const featurePills = [
  { label: "ตู้ถ่ายภาพ & Photobooth", color: "bg-green-100 text-green-700" },
  { label: "Software ระดับพรีเมียม", color: "bg-blue-100 text-blue-700" },
  { label: "ระบบชำระเงิน QR", color: "bg-purple-100 text-purple-700" },
  { label: "ติดตั้งทั่วไทย", color: "bg-orange-100 text-orange-700" },
]

const stats = [
  { icon: Camera, number: "50+", label: "ตู้ที่ติดตั้งแล้ว" },
  { icon: Users, number: "10+", label: "พาร์ทเนอร์" },
  { icon: Monitor, number: "5M+", label: "รูปที่ถ่ายแล้ว" },
]

export function HeroSection() {
  return (
    <section className="relative bg-white pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute top-0 right-0 w-[700px] h-[700px] bg-[#8ECAE6]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FB8500]/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Feature pills */}
        <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
          {featurePills.map((pill) => (
            <span
              key={pill.label}
              className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${pill.color}`}
            >
              {pill.label}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h1
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#023047] leading-[1.15] tracking-tight animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              ให้เช่าตู้ถ่ายภาพ &{" "}
              <span className="relative inline-block bg-[#FB8500] text-white px-4 py-2 rounded-xl animate-orange-glow overflow-hidden">
                <span className="absolute inset-0 -translate-x-full animate-auto-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-12deg]" />
                Photobooth
              </span>
              <br />
              พร้อมติดตั้งทั่วไทย
            </h1>

            <p
              className="mt-8 text-lg lg:text-xl text-[#023047]/65 max-w-lg leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              บริการให้เช่าตู้ถ่ายภาพและ Photobooth สำหรับงานแต่ง ปาร์ตี้ อีเวนต์ และห้างสรรพสินค้า พร้อม Software Photobooth และระบบชำระเงิน QR Code ครบวงจร
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#023047] text-white rounded-full font-semibold text-base hover:bg-[#023047]/90 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                ดูแพ็กเกจเช่าทั้งหมด
                <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#023047]/20 rounded-full font-semibold text-base text-[#023047] hover:border-[#023047]/40 hover:bg-[#023047]/5 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                ขอราคาและนัดติดตั้ง
              </a>
            </div>

            {/* Mini stats row */}
            <div
              className="mt-12 flex flex-wrap gap-8 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FB8500]/10 flex items-center justify-center">
                    <stat.icon className="size-5 text-[#FB8500]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#023047]">{stat.number}</p>
                    <p className="text-sm text-[#023047]/55">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="relative animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#023047]/15 max-w-[75%] mx-auto">
              <Image
                src="/photoboothkiosk/headersection.webp"
                alt="ให้เช่าตู้ถ่ายภาพและ Photobooth โดย IMAGEAUTOMAT"
                width={600}
                height={450}
                className="w-full h-auto object-contain"
                priority
                fetchPriority="high"
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#023047]/20 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-[#023047]/10 rounded-xl p-4 shadow-lg shadow-[#023047]/10">
              <p className="text-xs font-medium text-[#023047]/60">ไว้วางใจโดย</p>
              <p className="text-lg font-bold text-[#FB8500]">50+ แบรนด์</p>
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#8ECAE6]/30 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
