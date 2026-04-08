"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, ShoppingBag, Settings, Star } from "lucide-react"
import Link from "next/link"

const pathOptions = [
  {
    id: "rental",
    title: "บริการเช่าตู้",
    subtitle: "Rental Event",
    description: "เช่าตู้โฟโต้บูธพร้อมทีมงาน สำหรับงานแต่งงาน ปาร์ตี้ และงานอีเวนต์ทุกประเภท",
    features: [
      "ทีมงานมืออาชีพ",
      "ครบครันทุกอุปกรณ์",
      "ราคาเริ่มต้น 3,000 บาท",
      "บริการทั่วกรุงเทพฯ"
    ],
    icon: <Calendar className="w-8 h-8" />,
    href: "/rental",
    gradient: "from-blue-600 via-blue-500 to-cyan-400",
    bgPattern: "bg-blue-50",
    accent: "text-blue-600"
  },
  {
    id: "product",
    title: "ซื้อตู้เพื่อธุรกิจ",
    subtitle: "Product / Ownership",
    description: "ลงทุนครั้งเดียว สร้างรายได้ระยะยาว ด้วยตู้โฟโต้บูธคุณภาพพรีเมียม ผลิตในไทย",
    features: [
      "ROI คืนทุน 6-12 เดือน",
      "รับประกัน 1 ปีเต็ม",
      "อัปเดตซอฟต์แวร์ฟรี",
      "ซัพพอร์ต 24/7"
    ],
    icon: <ShoppingBag className="w-8 h-8" />,
    href: "/product",
    gradient: "from-tiger-orange via-orange-500 to-yellow-400",
    bgPattern: "bg-orange-50",
    accent: "text-tiger-orange",
    popular: true
  },
  {
    id: "software",
    title: "ซอฟต์แวร์และ OEM",
    subtitle: "Custom Solution",
    description: "ซอฟต์แวร์โฟโต้บูธและบริการ OEM ODM สำหรับผู้ประกอบการและองค์กร",
    features: [
      "ซอฟต์แวร์ Imageland",
      "Custom Branding",
      "รับผลิต OEM ODM",
      "Enterprise Support"
    ],
    icon: <Settings className="w-8 h-8" />,
    href: "/software",
    gradient: "from-purple-600 via-purple-500 to-pink-400",
    bgPattern: "bg-purple-50",
    accent: "text-purple-600"
  }
]

export function ChooseYourPathSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-deep-space-blue mb-6">
            Choose Your Path
          </h2>
          <p className="text-lg sm:text-xl text-deep-space-blue/70 max-w-3xl mx-auto leading-relaxed">
            ไม่ว่าความต้องการของคุณคืออะไร เรามีโซลูชันที่พร้อมเสิร์ฟ
          </p>
        </motion.div>

        {/* Path Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pathOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: index * 0.1
              }}
              className="relative group"
            >
              <Link href={option.href}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className={`relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 cursor-pointer h-full shadow-lg hover:shadow-2xl transition-all duration-300 ${option.bgPattern}`}
                >
                  
                  {/* Popular Badge */}
                  {option.popular && (
                    <div className="absolute top-6 right-6">
                      <div className="flex items-center gap-1 bg-tiger-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                        <Star className="w-3 h-3 fill-current" />
                        ยอดนิยม
                      </div>
                    </div>
                  )}

                  {/* Icon with gradient background */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${option.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {option.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-sans font-bold text-xl text-deep-space-blue mb-1">
                        {option.title}
                      </h3>
                      <p className={`text-sm font-medium uppercase tracking-wide ${option.accent}`}>
                        {option.subtitle}
                      </p>
                    </div>

                    <p className="text-deep-space-blue/70 leading-relaxed text-sm">
                      {option.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-deep-space-blue/80">
                          <div className={`w-1.5 h-1.5 rounded-full ${option.accent.replace('text-', 'bg-')} mr-3 shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Action */}
                    <div className={`flex items-center font-medium ${option.accent} group-hover:gap-3 transition-all duration-300 gap-2 pt-2`}>
                      <span>เรียนรู้เพิ่มเติม</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Hover gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-3xl`}
                  />
                  
                  {/* Subtle pattern background */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                    backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1.5\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
                  }} />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-deep-space-blue/60 mb-4">
            ยังไม่แน่ใจ? ปรึกษาทีมผู้เชี่ยวชาญได้ฟรี
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-deep-space-blue text-white px-6 py-3 rounded-xl font-medium hover:bg-deep-space-blue/90 transition-colors duration-300"
          >
            ปรึกษาฟรี
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IMAGEAUTOMAT Choose Your Path",
            "provider": {
              "@type": "Organization",
              "name": "IMAGEAUTOMAT"
            },
            "serviceType": "Photobooth Solutions",
            "areaServed": "Thailand",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Photobooth Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "บริการเช่าตู้โฟโต้บูธ",
                  "description": "เช่าตู้โฟโต้บูธพร้อมทีมงาน สำหรับงานแต่งงาน ปาร์ตี้ และงานอีเวนต์",
                  "category": "Rental Event Services",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "priceCurrency": "THB",
                    "price": "3000"
                  }
                },
                {
                  "@type": "Offer", 
                  "name": "ซื้อตู้โฟโต้บูธเพื่อธุรกิจ",
                  "description": "ลงทุนครั้งเดียว สร้างรายได้ระยะยาว ด้วยตู้โฟโต้บูธคุณภาพพรีเมียม",
                  "category": "Product Ownership"
                },
                {
                  "@type": "Offer",
                  "name": "ซอฟต์แวร์และบริการ OEM",
                  "description": "ซอฟต์แวร์โฟโต้บูธและบริการ OEM ODM สำหรับผู้ประกอบการและองค์กร", 
                  "category": "Custom Solutions"
                }
              ]
            }
          })
        }}
      />
    </section>
  )
}