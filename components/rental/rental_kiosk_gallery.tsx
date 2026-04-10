"use client"

import Image from "next/image"
import { Camera } from "lucide-react"

const kioskImages = [
  {
    src: "/photoboothkiosk/m1.webp",
    alt: "ตู้ถ่ายภาพให้เช่า รุ่น Model 1",
    modelName: "Model 1",
  },
  {
    src: "/photoboothkiosk/m2.webp",
    alt: "ตู้ถ่ายภาพให้เช่า รุ่น Model 2",
    modelName: "Model 2",
  },
  {
    src: "/photoboothkiosk/m3.webp",
    alt: "ตู้ถ่ายภาพให้เช่า รุ่น Model 3",
    modelName: "Model 3",
  },
  {
    src: "/photoboothkiosk/m4.webp",
    alt: "ตู้ถ่ายภาพให้เช่า รุ่น Model 4",
    modelName: "Model 4",
  },
  {
    src: "/photoboothkiosk/m5.webp",
    alt: "ตู้ถ่ายภาพให้เช่า รุ่น Model 5",
    modelName: "Model 5",
  },
  {
    src: "/photoboothkiosk/vintage copy.webp",
    alt: "ตู้ถ่ายภาพให้เช่าสไตล์วินเทจ",
    modelName: "Vintage&Newspaper",
  },
  {
    src: "/photoboothkiosk/highangel.webp",
    alt: "ตู้ถ่ายภาพให้เช่าสไตล์ High Angel",
    modelName: "High Angel",
  },
  {
    src: "/photoboothkiosk/reel.webp",
    alt: "ตู้ถ่ายภาพให้เช่าสไตล์ Reel",
    modelName: "Reel&Signage",
  },
]

export function KisokGallery() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "linear-gradient(180deg, #ffffff 0%, rgba(142,202,230,0.08) 50%, #ffffff 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.3em] uppercase bg-gradient-to-r from-[#FB8500]/10 to-[#8ECAE6]/10 text-[#023047] border border-[#8ECAE6]/20 mb-4">
            <Camera className="size-3.5 text-[#FB8500]" />
            Kiosk Gallery
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047]">
            Model ที่เรามี<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8500] to-[#8ECAE6]">ให้เช่า</span>
          </h2>
          <p className="mt-3 text-base lg:text-lg text-[#023047]/65 max-w-2xl mx-auto">
            เลือกดีไซน์โครงสร้างให้เหมาะกับธีมงาน พื้นที่ติดตั้ง และภาพลักษณ์แบรนด์ของคุณ
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {kioskImages.map((item, idx) => (
            <div
              key={item.src}
              className="group relative flex flex-col rounded-2xl border border-[#023047]/8 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-[#FB8500]/30 transition-all duration-400 hover:-translate-y-1"
            >
              {/* Hover accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FB8500] to-[#8ECAE6] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Image */}
              <div className="relative h-96 bg-gradient-to-br from-[#023047]/3 to-[#8ECAE6]/5 overflow-hidden flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Label */}
              <div className="px-4 py-3 flex items-center justify-between border-t border-[#023047]/5">
                <h3 className="text-sm font-bold text-[#023047]">{item.modelName}</h3>
                <span className="text-[10px] font-semibold text-[#FB8500] bg-[#FB8500]/10 px-2 py-0.5 rounded-full">
                  เช่าได้
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-[#023047]/3 border border-[#023047]/10 px-6 py-5 flex items-center gap-4">
          <div className="flex-shrink-0 size-10 rounded-xl bg-[#FB8500]/15 flex items-center justify-center">
            <Camera className="size-5 text-[#FB8500]" />
          </div>
          <p className="text-[#023047]/80 text-sm">
            <span className="font-semibold text-[#023047]">ต้องการโครงสร้างอื่น?</span>{" "}
            <a href="#contact" className="text-[#FB8500] font-semibold hover:underline transition-colors">
              ติดต่อสอบถามเพิ่มเติม →
            </a>{" "}
            ทีมงานพร้อมออกแบบตามความต้องการเฉพาะของงานคุณ
          </p>
        </div>

      </div>
    </section>
  )
}
