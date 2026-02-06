"use client"

import { motion } from "framer-motion"
import { ShoppingBag, ShoppingCart, Monitor, ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "เช่าโฟโต้บูธ",
    subtitle: "RENT",
    icon: ShoppingBag,
    description: "บริการเช่าโฟโต้บูธครบวงจรพร้อมทีมงาน"
  },
  {
    id: 2,
    title: "ซื้อโฟโต้บูธ",
    subtitle: "BUY",
    icon: ShoppingCart,
    description: "จำหน่ายโฟโต้บูธพร้อมใช้งาน คุณภาพสูง"
  },
  {
    id: 3,
    title: "โปรแกรมถ่ายภาพ",
    subtitle: "SOFTWARE",
    icon: Monitor,
    description: "ซอฟต์แวร์โฟโต้บูธที่ยืดหยุ่นตามความต้องการ"
  }
]

export function TextSlideshowProgram() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Top Titles */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-deep-space-blue mb-2 sm:mb-3" style={{ lineHeight: '1.6' }}>
            เช่าโฟโต้บูธ ซื้อโฟโต้บูธ
          </h2>

          {/* Main Title */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-tiger-orange mb-4 sm:mb-6 md:mb-8" style={{ lineHeight: '1.4' }}>
            จำหน่ายโปรแกรมถ่ายภาพ
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-deep-space-blue/70 max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
            บริการครบวงจรด้านโฟโต้บูธ ทั้งเช่า ซื้อ และโปรแกรมถ่ายภาพ
          </p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-tiger-orange mx-auto mt-6 sm:mt-8 rounded-full"
          />
        </motion.div>

        {/* Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg shadow-deep-space-blue/10 hover:shadow-2xl hover:shadow-tiger-orange/20 transition-all duration-300 border border-deep-space-blue/5"
            >
              {/* Icon Container */}
              <div className="mb-4 sm:mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-tiger-orange/10 group-hover:bg-tiger-orange/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-tiger-orange" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-deep-space-blue mb-1 sm:mb-2" style={{ lineHeight: '1.6' }}>
                {service.title}
              </h4>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm md:text-base font-medium text-deep-space-blue/40 mb-3 sm:mb-4 tracking-wider">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-deep-space-blue/60 hidden sm:block" style={{ lineHeight: '1.6' }}>
                {service.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-tiger-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-tiger-orange text-white text-sm sm:text-base md:text-lg font-bold rounded-full shadow-xl shadow-tiger-orange/30 hover:shadow-2xl hover:shadow-tiger-orange/40 transition-all duration-300"
          >
            รายละเอียดเพิ่มเติม
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
