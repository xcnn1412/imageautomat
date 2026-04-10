"use client"

import { motion } from "framer-motion"
import { Cpu, Code2, Headphones, Shield, Wrench, Zap } from "lucide-react"

const coreStrengths = [
  {
    id: "hardware",
    title: "Hardware คุณภาพ",
    subtitle: "Built to Last",
    description: "ผลิตโครงสร้างเองในไทย ทนทาน ดีไซน์ปรับได้",
    features: [
      "ผลิตเองในไทย 100%",
      "วัสดุเกรดอุตสาหกรรม",
      "ดีไซน์ปรับแต่งได้",
      "ทนทานใช้งานหนัก"
    ],
    icon: <Cpu className="w-8 h-8" />,
    gradient: "from-blue-600 via-blue-500 to-cyan-400",
    bgAccent: "bg-blue-50",
    textAccent: "text-blue-600",
    borderAccent: "border-blue-200"
  },
  {
    id: "software", 
    title: "Software ระดับ Enterprise",
    subtitle: "Made for Scale",
    description: "พัฒนาเอง 100% แก้บั๊กไว เสถียรสูง รองรับ API",
    features: [
      "พัฒนาเองใน Thailand",
      "แก้บั๊กและอัปเดตไว",
      "เสถียรภาพสูง 99.9%",
      "รองรับ API ชำระเงิน"
    ],
    icon: <Code2 className="w-8 h-8" />,
    gradient: "from-tiger-orange via-orange-500 to-yellow-400",
    bgAccent: "bg-orange-50",
    textAccent: "text-tiger-orange",
    borderAccent: "border-orange-200",
    popular: true
  },
  {
    id: "support",
    title: "Full Service Support", 
    subtitle: "Always Here",
    description: "ทีมดูแล On-site และซ่อมบำรุง 24/5",
    features: [
      "ซัพพอร์ต 24/5 ภาษาไทย",
      "บริการ On-site",
      "ซ่อมบำรุงรวดเร็ว",
      "ปรึกษาฟรีตลอดชีพ"
    ],
    icon: <Headphones className="w-8 h-8" />,
    gradient: "from-green-600 via-green-500 to-emerald-400", 
    bgAccent: "bg-green-50",
    textAccent: "text-green-600",
    borderAccent: "border-green-200"
  }
]

const competitiveAdvantages = [
  { icon: <Shield className="w-5 h-5" />, text: "รับประกัน 1 ปีเต็ม" },
  { icon: <Zap className="w-5 h-5" />, text: "อัปเดตฟรีตลอดชีพ" },
  { icon: <Wrench className="w-5 h-5" />, text: "ไม่มีค่าบำรุงรักษา" }
]

export function CompetitiveAdvantagesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 bg-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23023047\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }} />
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-deep-space-blue mb-6">
            ทำไม IMAGEAUTOMAT ถึงเหนือกว่าคู่แข่ง
          </h2>
          <p className="text-lg sm:text-xl text-deep-space-blue/70 max-w-3xl mx-auto leading-relaxed mb-8">
            ฮาร์ดแวร์คุณภาพอุตสาหกรรม ซอฟต์แวร์ระดับ Enterprise และซัพพอร์ต 24 ชม. — ครบในที่เดียว
          </p>
          
          {/* Competitive Advantages Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  ease: "easeOut",
                  delay: index * 0.1
                }}
                className="flex items-center gap-2 px-4 py-2 bg-deep-space-blue text-white rounded-full text-sm font-medium"
              >
                {advantage.icon}
                {advantage.text}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Strengths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {coreStrengths.map((strength, index) => (
            <motion.div
              key={strength.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: index * 0.15
              }}
              className="relative group h-full"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={`relative overflow-hidden rounded-3xl bg-white border-2 ${strength.borderAccent} p-8 cursor-pointer h-full shadow-lg hover:shadow-2xl transition-all duration-300 ${strength.bgAccent}`}
              >
                
                {/* Popular Badge */}
                {strength.popular && (
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center gap-1 bg-tiger-orange text-white px-3 py-1 rounded-full text-xs font-medium">
                      ⭐ จุดเด่น
                    </div>
                  </div>
                )}

                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${strength.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {strength.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-sans font-bold text-xl text-deep-space-blue mb-1">
                      {strength.title}
                    </h3>
                    <p className={`text-sm font-medium uppercase tracking-wide ${strength.textAccent}`}>
                      {strength.subtitle}
                    </p>
                  </div>

                  <p className="text-deep-space-blue/70 leading-relaxed">
                    {strength.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {strength.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-deep-space-blue/80">
                        <div className={`w-1.5 h-1.5 rounded-full ${strength.textAccent.replace('text-', 'bg-')} mt-2 mr-3 shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${strength.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-3xl`}
                />
                
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${strength.gradient} opacity-5 rounded-bl-full`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl font-medium text-deep-space-blue mb-4">
              ทำไมถึงต้องเลือกเราเหนือคู่แข่ง?
            </p>
            <p className="text-deep-space-blue/60 leading-relaxed">
              เพราะเรามุ่งมั่นสร้างผลิตภัณฑ์และบริการที่ครอบคลุมทุกความต้องการ 
              จากฮาร์ดแวร์คุณภาพสูง ซอฟต์แวร์ที่เสถียร ไปจนถึงการดูแลหลังการขายที่ไม่มีใครเทียบได้
            </p>
          </div>
        </motion.div>

      </div>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "IMAGEAUTOMAT",
            "description": "ผู้นำด้านตู้โฟโต้บูธคุณภาพพรีเมียม ผลิตในไทย",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Core Strengths",
              "itemListElement": [
                {
                  "@type": "Product",
                  "name": "Hardware คุณภาพ",
                  "description": "ผลิตโครงสร้างเองในไทย ทนทาน ดีไซน์ปรับได้",
                  "manufacturer": {
                    "@type": "Organization",
                    "name": "IMAGEAUTOMAT",
                    "address": {
                      "@type": "PostalAddress", 
                      "addressCountry": "TH"
                    }
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Software ระดับ Enterprise", 
                  "description": "พัฒนาเอง 100% แก้บั๊กไว เสถียรสูง รองรับ API",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Windows, Android"
                },
                {
                  "@type": "Service",
                  "name": "Full Service Support",
                  "description": "ทีมดูแล On-site และซ่อมบำรุง 24/5",
                  "serviceType": "Technical Support",
                  "areaServed": "Thailand"
                }
              ]
            },
            "slogan": "สิ่งที่เราทำได้ดีกว่าตลาด (Hardware + Software + Support)"
          })
        }}
      />
    </section>
  )
}