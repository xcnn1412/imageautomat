"use client"

import Image from "next/image"
import { Camera, Zap } from "lucide-react"

const kioskImages = [
  {
    src: "/photoboothkisok/m1.webp",
    alt: "ตู้ถ่ายภาพให้เช่า รุ่น Model 1",
    modelName: "Model 1",
  },
  {
    src: "/photoboothkisok/m2.webp",
    alt: "ตู้ถ่ายภาพให้เช่า รุ่น Model 2",
    modelName: "Model 2",
  },
  {
    src: "/photoboothkisok/m3.webp",
    alt: "ตู้ถ่ายภาพให้เช่า รุ่น Model 3",
    modelName: "Model 3",
  },
  {
    src: "/photoboothkisok/m4.webp",
    alt: "ตู้ถ่ายภาพให้เช่า รุ่น Model 4",
    modelName: "Model 4",
  },
  {
    src: "/photoboothkisok/m5.webp",
    alt: "ตู้ถ่ายภาพให้เช่า รุ่น Model 5",
    modelName: "Model 5",
  },
  {
    src: "/photoboothkisok/vintage copy.webp",
    alt: "ตู้ถ่ายภาพให้เช่าสไตล์วินเทจ",
    modelName: "Vintage",
  },
]

export function KisokGallery() {

  return (
    <div className="mt-16 rounded-3xl border border-[#023047]/10 bg-gradient-to-br from-white via-[#8ECAE6]/5 to-white/50 backdrop-blur-sm p-6 md:p-10 lg:p-12 shadow-xl shadow-[#8ECAE6]/15">
      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1 w-12 bg-gradient-to-r from-[#FB8500] to-[#8ECAE6] rounded-full"></div>
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.3em] uppercase bg-gradient-to-r from-[#FB8500]/10 to-[#8ECAE6]/10 text-[#023047] border border-[#8ECAE6]/20">
            <Camera className="size-3.5 text-[#FB8500]" />
            Kiosk Gallery
          </p>
        </div>
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#023047] mt-4">
          Model ที่เรามี<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8500] to-[#8ECAE6]">ให้เช่า</span>
        </h3>
        <p className="mt-3 text-base md:text-lg text-[#023047]/65 max-w-2xl">
          เลือกดีไซน์โครงสร้างให้เหมาะกับธีมงาน พื้นที่ติดตั้ง และภาพลักษณ์แบรนด์ของคุณ
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
        {kioskImages.map((item, idx) => (
          <div
            key={item.src}
            className="group relative flex flex-col rounded-3xl border border-[#023047]/8 bg-white overflow-hidden shadow-md hover:shadow-2xl hover:border-[#FB8500]/40 transition-all duration-500 hover:-translate-y-1"
          >
            {/* Gradient Border Top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8ECAE6] via-[#FB8500] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Image Container */}
            <div className="relative h-64 sm:h-72 bg-gradient-to-br from-[#023047]/3 to-[#8ECAE6]/5 overflow-hidden flex items-center justify-center">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={idx < 3}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#023047]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col items-center text-center flex-1 bg-gradient-to-b from-white to-[#023047]/1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FB8500]/10 text-[#FB8500] text-xs font-bold tracking-wide mb-2">
                <Zap className="size-3" />
                MODEL {idx + 1}
              </div>
              <h3 className="text-xl font-extrabold text-[#023047]">{item.modelName}</h3>
              <p className="mt-2 text-sm text-[#023047]/55 font-medium">โครงสร้างตู้ถ่ายภาพ</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="rounded-3xl bg-gradient-to-r from-[#8ECAE6]/20 via-[#FB8500]/10 to-[#8ECAE6]/10 border border-[#8ECAE6]/30 px-6 md:px-8 py-6 md:py-7 backdrop-blur-sm shadow-lg shadow-[#8ECAE6]/5 hover:shadow-xl hover:shadow-[#FB8500]/10 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center size-10 rounded-xl bg-[#FB8500]/15 text-[#FB8500]">
              <Camera className="size-5" />
            </div>
          </div>
          <div>
            <p className="text-[#023047] text-base md:text-lg">
              <span className="font-bold text-[#023047]">โครงสร้างอื่นๆ นอกเหนือจากนี้?</span> {" "}
              สามารถ{" "}
              <a href="#contact" className="text-[#FB8500] font-semibold hover:text-[#023047] hover:underline transition-all duration-300 inline-flex items-center gap-1">
                ติดต่อสอบถามเพิ่มเติม
                <span className="text-lg">→</span>
              </a>{" "}
              หรือให้เราช่วยออกแบบตามความต้องการเฉพาะของงานคุณได้
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
