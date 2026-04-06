"use client"

import { motion } from "framer-motion"
import { ArrowRight, CalendarCheck, Clock3, BadgePercent } from "lucide-react"

const pills = [
  { icon: <Clock3 size={12} />, text: "รายวัน / รายสัปดาห์" },
  { icon: <CalendarCheck size={12} />, text: "รายเดือน / รายปี" },
  { icon: <BadgePercent size={12} />, text: "ราคาพิเศษสำหรับองค์กร" },
]

export function SaleAndRental() {
  return (
    <section className="pt-6 sm:pt-8 lg:pt-10 pb-16 sm:pb-20 lg:pb-24 px-6 lg:px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <motion.a
          href="https://www.imageautomat.com/rental"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden rounded-2xl px-7 py-6 sm:px-10 sm:py-7 cursor-pointer"
          style={{
            background: "linear-gradient(120deg, #023047 0%, #034a6e 55%, #c26a00 100%)",
            boxShadow: "0 8px 40px rgba(2,48,71,0.22), 0 2px 10px rgba(251,133,0,0.12)",
          }}
          whileHover={{ scale: 1.012 }}
          whileTap={{ scale: 0.985 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
        >
          {/* animated glow sweep on hover */}
          <motion.span
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)",
            }}
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          {/* decorative blobs */}
          <span className="pointer-events-none absolute -left-12 -top-12 w-48 h-48 rounded-full bg-[#FB8500]/15 blur-3xl" />
          <span className="pointer-events-none absolute right-10 -bottom-8 w-36 h-36 rounded-full bg-[#8ECAE6]/10 blur-2xl" />

          {/* Left — headline + pills */}
          <div className="relative z-10 flex flex-col gap-3">
            {/* eyebrow */}
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#FB8500]/40 bg-[#FB8500]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FB8500]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FB8500] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FB8500]" />
              </span>
              ให้เช่าตู้ถ่ายภาพ &amp; Photobooth
            </span>

            {/* headline */}
            <p className="text-white font-extrabold text-2xl sm:text-3xl leading-tight tracking-tight">
              เช่าตู้ถ่ายภาพพร้อมใช้งาน
              <br />
              <span className="text-white/70 font-medium text-base sm:text-lg tracking-normal">
                — ไม่ต้องลงทุนซื้อ ก็เริ่มธุรกิจได้ทันที
              </span>
            </p>

            {/* pills */}
            <div className="flex flex-wrap gap-2 mt-0.5">
              {pills.map((p) => (
                <span
                  key={p.text}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs text-white/80 font-medium backdrop-blur-sm"
                >
                  <span className="text-[#8ECAE6]">{p.icon}</span>
                  {p.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right — CTA */}
          <div className="relative z-10 flex-shrink-0 flex flex-col items-center sm:items-end gap-2">
            <motion.span
              className="inline-flex items-center gap-2.5 rounded-full bg-[#FB8500] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FB8500]/40"
              whileHover={{ backgroundColor: "#e07800" }}
              transition={{ duration: 0.2 }}
            >
              เช็คราคาเลย
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </motion.span>
            <span className="text-[11px] text-white/40 font-medium tracking-wide">
              www.imageautomat.com/rental
            </span>
          </div>
        </motion.a>
      </motion.div>
    </section>
  )
}
