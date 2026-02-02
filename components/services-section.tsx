"use client"

import { Camera, Sparkles, Zap, Users, Heart, Building2, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Weddings",
    titleThai: "งานแต่งงาน",
    description: "Elegant photobooth setups and custom templates for your special day.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    titleThai: "งานองค์กร",
    description: "Professional branded photobooths for corporate gatherings.",
  },
  {
    icon: Sparkles,
    title: "Brand Activations",
    titleThai: "กิจกรรมส่งเสริมแบรนด์",
    description: "Interactive experiences that boost engagement and awareness.",
  },
  {
    icon: Users,
    title: "Private Parties",
    titleThai: "งานเลี้ยงส่วนตัว",
    description: "Fun and memorable moments for any celebration.",
  },
  {
    icon: Zap,
    title: "AI Photo Booth",
    titleThai: "บูธถ่ายภาพ AI",
    description: "AI-powered photo transformations and creative filters.",
  },
  {
    icon: Camera,
    title: "Robot Booth",
    titleThai: "บูธหุ่นยนต์",
    description: "Robotic arm technology for dynamic photo captures.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32 lg:py-40 bg-background relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20 lg:mb-28">
          <span className="text-sm font-medium text-tiger-orange uppercase tracking-[0.3em] mb-6 block">
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-space-blue tracking-tight leading-[1.1]">
            Perfect for <span className="italic">every</span> occasion
          </h2>
          <p className="mt-8 text-lg text-deep-space-blue/60 leading-relaxed max-w-xl">
            From intimate gatherings to grand celebrations, we bring the perfect photobooth experience to your event.
          </p>
        </div>

        {/* Services Grid - Elegant List Style */}
        <div className="border-t border-deep-space-blue/10">
          {services.map((service, index) => (
            <a
              key={service.title}
              href="#contact"
              className="group flex items-center justify-between py-8 lg:py-10 border-b border-deep-space-blue/10 hover:border-tiger-orange/30 transition-colors duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-6 lg:gap-10">
                {/* Number */}
                <span className="hidden md:block text-sm font-medium text-deep-space-blue/30 w-8">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-deep-space-blue/5 group-hover:bg-tiger-orange/10 flex items-center justify-center transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-deep-space-blue/60 group-hover:text-tiger-orange transition-colors duration-500" />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-serif text-deep-space-blue group-hover:text-tiger-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-deep-space-blue/40 mt-1 font-thai">
                    {service.titleThai}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                {/* Description - Hidden on mobile */}
                <p className="hidden lg:block text-deep-space-blue/50 text-sm max-w-xs text-right leading-relaxed">
                  {service.description}
                </p>
                
                {/* Arrow */}
                <ArrowUpRight className="w-5 h-5 text-deep-space-blue/20 group-hover:text-tiger-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
