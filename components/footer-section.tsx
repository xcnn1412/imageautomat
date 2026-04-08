"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle, Send, ArrowRight } from "lucide-react"

const contactItems = [
  { icon: MapPin, label: "ที่อยู่", value: "IMAGEAUTOMAT Co., Ltd.\nPrawet, Bangkok 10250" },
  { icon: Phone, label: "โทรศัพท์", value: "+66 2 XXX XXXX" },
  { icon: Mail, label: "อีเมล์", value: "contact@imageautomat.com" },
]

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: MessageCircle, label: "LINE" },
]

const serviceLinks = [
  { label: "แพ็กเกจให้เช่าตู้ถ่ายภาพ", href: "#rental" },
  { label: "ให้เช่าตู้ถ่ายภาพ", href: "/rental" },
  { label: "เช่า Software Photobooth", href: "#pricing" },
  { label: "ระบบรับชำระเงิน", href: "#payment" },
  { label: "ขอใบเสนอราคา", href: "#contact" },
]

const infoLinks = [
  { label: "เกี่ยวกับเรา", href: "#about" },
  { label: "ติดต่อเรา", href: "#contact" },
  { label: "FAQ", href: "#faq" },
  { label: "นโยบายความเป็นส่วนตัว", href: "#" },
  { label: "เงื่อนไขการใช้งาน", href: "#" },
]

export function FooterSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const contactRef = useRef(null)
  const isContactInView = useInView(contactRef, { once: true, margin: "-80px" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <footer id="contact">
      {/* CONTACT SECTION */}
      <section className="relative bg-[#023047] overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-48 -top-48 w-96 h-96 rounded-full bg-[#FB8500]/8 blur-3xl" />
        <div className="pointer-events-none absolute -right-48 -bottom-48 w-96 h-96 rounded-full bg-[#8ECAE6]/8 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#8ECAE6]/3 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          {/* Section header */}
          <motion.div
            ref={contactRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 lg:mb-20"
          >
            <span className="inline-block text-[#FB8500] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              CONTACT US
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
              ขอราคาเช่าและนัดติดตั้ง
            </h2>
            <p className="text-white/50 text-base lg:text-lg max-w-xl mx-auto">
              ส่งรายละเอียดงานของคุณเพื่อรับใบเสนอราคาแพ็กเกจเช่า พร้อมคำแนะนำและวันติดตั้งที่เหมาะสม
            </p>
          </motion.div>

          {/* 2-column grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isContactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-3 mb-10">
                {contactItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isContactInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.35 + i * 0.1 }}
                    className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#FB8500]/15 flex items-center justify-center group-hover:bg-[#FB8500]/25 transition-colors">
                      <item.icon className="size-5 text-[#FB8500]" />
                    </div>
                    <div>
                      <p className="text-[#8ECAE6] text-xs font-semibold uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <p className="text-white/75 text-sm whitespace-pre-line leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isContactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.65 }}
                className="pt-8 border-t border-white/10"
              >
                <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  ติดตามเรา
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-[#FB8500] hover:text-[#FB8500] hover:bg-[#FB8500]/10 transition-all duration-200"
                    >
                      <s.icon className="size-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isContactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7 sm:p-9"
            >
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">รับใบเสนอราคาเช่า</h3>
              <p className="text-white/45 text-sm mb-7">
                กรอกฟอร์มเพื่อรับราคาประเมินและนัดติดตั้งเบื้องต้น ทีมงานติดต่อกลับภายใน 24 ชั่วโมง
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-16 h-16 rounded-full bg-[#FB8500]/20 flex items-center justify-center mb-5"
                  >
                    <Send className="size-7 text-[#FB8500]" />
                  </motion.div>
                  <p className="text-white font-semibold text-lg mb-1">ส่งฟอร์มเรียบร้อยแล้ว!</p>
                  <p className="text-white/45 text-sm">ทีมงานจะติดต่อกลับโดยเร็วที่สุด</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="ชื่อ-นามสกุล *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/[0.08] border-white/15 text-white placeholder:text-white/35 h-12 rounded-xl focus-visible:ring-[#FB8500]/30 focus-visible:border-[#FB8500]/60"
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="เบอร์โทรศัพท์ *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/[0.08] border-white/15 text-white placeholder:text-white/35 h-12 rounded-xl focus-visible:ring-[#FB8500]/30 focus-visible:border-[#FB8500]/60"
                      required
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="อีเมล์"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/[0.08] border-white/15 text-white placeholder:text-white/35 h-12 rounded-xl focus-visible:ring-[#FB8500]/30 focus-visible:border-[#FB8500]/60"
                  />
                  <textarea
                    placeholder="ระบุประเภทงาน สถานที่ และช่วงวันที่ต้องการติดตั้ง"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/15 text-white placeholder:text-white/35 resize-none focus:outline-none focus:ring-2 focus:ring-[#FB8500]/30 focus:border-[#FB8500]/60 transition-all text-sm"
                  />
                  <button
                    type="submit"
                    className="group w-full h-12 bg-[#FB8500] hover:bg-[#e07700] text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    ส่งคำขอราคาเช่า
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER BOTTOM */}
      <section className="bg-white border-t border-[#023047]/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Main grid */}
          <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand — spans 2 cols */}
            <div className="sm:col-span-2">
              <a href="/" className="inline-block mb-5">
                <span className="font-sans font-bold text-2xl text-[#023047]">
                  IMAGE<span className="text-[#FB8500]">AUTOMAT</span>
                </span>
              </a>
              <p className="text-[#023047]/55 text-sm leading-relaxed max-w-xs mb-7">
                ผู้ให้บริการให้เช่าตู้ถ่ายภาพ ให้เช่า Photobooth และซอฟต์แวร์ครบวงจรสำหรับธุรกิจทั่วประเทศไทย
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-[#023047]/15 flex items-center justify-center text-[#023047]/40 hover:border-[#FB8500] hover:text-[#FB8500] hover:bg-[#FB8500]/[0.06] transition-all duration-200"
                  >
                    <s.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[#023047] font-semibold text-xs uppercase tracking-[0.15em] mb-5">
                บริการ
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-[#023047]/50 text-sm hover:text-[#FB8500] transition-colors duration-150"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#023047]/20 group-hover:bg-[#FB8500] group-hover:scale-150 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-[#023047] font-semibold text-xs uppercase tracking-[0.15em] mb-5">
                ข้อมูล
              </h4>
              <ul className="space-y-3">
                {infoLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-[#023047]/50 text-sm hover:text-[#FB8500] transition-colors duration-150"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#023047]/20 group-hover:bg-[#FB8500] group-hover:scale-150 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#023047]/[0.08] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[#023047]/40 text-xs">
              &copy; {new Date().getFullYear()} IMAGEAUTOMAT Co., Ltd. สงวนลิขสิทธิ์ทุกประการ
            </p>
            <div className="flex items-center gap-5 text-xs text-[#023047]/40">
              <a href="#" className="hover:text-[#FB8500] transition-colors">
                นโยบายความเป็นส่วนตัว
              </a>
              <a href="#" className="hover:text-[#FB8500] transition-colors">
                เงื่อนไขการใช้งาน
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}