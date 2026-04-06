"use client"

import { motion } from "framer-motion"
import { ArrowRight, CalendarCheck, Clock3, BadgePercent } from "lucide-react"

const pills = [
  { icon: <Clock3 size={14} />, text: "รายวัน / รายสัปดาห์" },
  { icon: <CalendarCheck size={14} />, text: "รายเดือน / รายปี" },
  { icon: <BadgePercent size={14} />, text: "ราคาพิเศษสำหรับองค์กร" },
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
          className="group relative block overflow-hidden rounded-3xl cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #FB8500 0%, #E87A00 100%)",
            boxShadow: "0 4px 16px rgba(251,133,0,0.18), 0 16px 48px rgba(251,133,0,0.12)",
          }}
          whileHover={{ scale: 1.008, y: -2 }}
          whileTap={{ scale: 0.995 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          {/* glow sweep on hover */}
          <motion.span
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.14) 50%, transparent 70%)",
            }}
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          {/* ambient light */}
          <span className="pointer-events-none absolute -left-20 -top-20 w-64 h-64 rounded-full bg-white/[0.08] blur-[100px]" />
          <span className="pointer-events-none absolute right-0 -bottom-12 w-48 h-48 rounded-full bg-black/[0.06] blur-[80px]" />

          {/* content */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 px-8 py-8 sm:px-12 sm:py-10">
            {/* Left — text content */}
            <div className="flex flex-col gap-4 max-w-xl">
              {/* eyebrow */}
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                ให้เช่าตู้ถ่ายภาพ &amp; Photobooth
              </span>

              {/* headline */}
              <div>
                <h3 className="text-white font-extrabold text-3xl sm:text-4xl leading-[1.15] tracking-tight">
                  เช่าตู้ถ่ายภาพพร้อมใช้งาน
                </h3>
                <p className="mt-2 text-white/70 font-medium text-base sm:text-lg leading-relaxed">
                  ไม่ต้องลงทุนซื้อ ก็เริ่มธุรกิจได้ทันที
                </p>
              </div>

              {/* pills */}
              <div className="flex flex-wrap gap-2.5">
                {pills.map((p) => (
                  <span
                    key={p.text}
                    className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/10 px-4 py-1.5 text-[13px] text-white/90 font-medium backdrop-blur-sm"
                  >
                    <span className="text-white/80">{p.icon}</span>
                    {p.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — CTA */}
            <div className="flex flex-col items-center sm:items-end gap-3 shrink-0">
              <motion.span
                className="relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-[#D16900] overflow-hidden shadow-lg shadow-black/10"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* shimmer */}
                <motion.span
                  className="pointer-events-none absolute inset-0 -skew-x-12"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(251,133,0,0.12) 50%, transparent 100%)",
                    width: "60%",
                  }}
                  animate={{ x: ["-120%", "280%"] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    repeatDelay: 3.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                />
                เช็คราคาเลย
                <motion.span
                  className="inline-flex"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                  }}
                >
                  <ArrowRight size={18} strokeWidth={2.5} />
                </motion.span>
              </motion.span>
              <span className="text-[11px] text-white/45 font-medium tracking-wide">
                www.imageautomat.com/rental
              </span>
            </div>
          </div>
        </motion.a>
      </motion.div>
    </section>
  )
}
