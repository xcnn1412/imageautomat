"use client"

import Image from "next/image"
import { BadgeCheck, ArrowRight, Camera, Users, Monitor } from "lucide-react"

const featurePills = [
  { label: "ตู้ถ่ายภาพ & Photobooth", color: "bg-tiger-orange/10 text-tiger-orange" },
  { label: "Software ระดับพรีเมียม", color: "bg-tiger-orange/10 text-tiger-orange" },
  { label: "ระบบชำระเงิน QR", color: "bg-tiger-orange/10 text-tiger-orange" },
  { label: "ติดตั้งทั่วไทย", color: "bg-tiger-orange/10 text-tiger-orange" },
]

const stats = [
  { icon: Camera, number: "50+", label: "ตู้ที่ติดตั้งแล้ว" },
  { icon: Users, number: "10+", label: "พาร์ทเนอร์" },
  { icon: Monitor, number: "5M+", label: "รูปที่ถ่ายแล้ว" },
  { icon: BadgeCheck, number: "50+", label: "แบรนด์ที่ไว้วางใจ" },
]

export function HeroSection() {
  return (
    <section className="relative bg-white pt-32 pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
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
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-deep-space-blue leading-[1.45] tracking-tight animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              เช่าตู้ถ่ายรูปและ{" "}
              <span className="text-tiger-orange">วางตู้แบ่งรายได้</span>
            </h1>

            <p
              className="mt-8 text-lg lg:text-xl text-deep-space-blue/65 max-w-lg leading-relaxed animate-fade-in-up"
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#023047]/20 rounded-full font-semibold text-base text-deep-space-blue hover:border-[#023047]/40 hover:bg-[#023047]/5 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                ขอราคาและนัดติดตั้ง
              </a>
            </div>

            {/* Mini stats row */}
            <div
              className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-start gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#FB8500]/10 flex items-center justify-center">
                    <stat.icon className="size-5 text-tiger-orange" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-deep-space-blue">{stat.number}</p>
                    <p className="whitespace-nowrap text-sm text-deep-space-blue/55">{stat.label}</p>
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
            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#8ECAE6]/30 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
