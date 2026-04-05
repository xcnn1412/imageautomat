"use client"

import Image from "next/image"

const galleryItems = [
  {
    src: "/images/photobooth-main.jpg",
    alt: "ให้เช่าตู้ถ่ายภาพระดับพรีเมียม โดย IMAGEAUTOMAT",
    label: "ตู้ถ่ายภาพระดับพรีเมียม",
  },
  {
    src: "/images/custom-booth.jpg",
    alt: "ตู้ถ่ายภาพและ Photobooth ปรับแบรนด์ตามลูกค้า",
    label: "ปรับแบรนด์ตามงาน",
  },
  {
    src: "/images/mall-installation.jpg",
    alt: "ให้เช่า Photobooth พร้อมติดตั้งในห้างสรรพสินค้า",
    label: "ติดตั้งในห้าง",
  },
  {
    src: "/images/event-usage.jpg",
    alt: "ให้เช่าตู้ถ่ายภาพสำหรับงานอีเวนต์",
    label: "งาน Event",
  },
]

export function GallerySection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FB8500]/10 text-[#FB8500] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            GALLERY
          </span>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#023047]">
            ผลงานติดตั้งจริงจากลูกค้าเช่า
          </h2>
          <p className="mt-3 text-[#023047]/55">
            ตัวอย่างงานให้เช่าตู้ถ่ายภาพและให้เช่า Photobooth ที่ใช้งานจริงในห้าง งานแต่ง และอีเวนต์ทั่วประเทศไทย
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden aspect-square"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#023047]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium text-white">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
