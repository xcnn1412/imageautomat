"use client"

import { PenTool, Package } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: PenTool,
    title: "Custom-Made Designs",
    description:
      "Tailor-made photobooths designed to match your brand's identity and space requirements. High-quality materials and premium builds.",
  },
  {
    icon: Package,
    title: "Ready-to-Order Catalog",
    description:
      "Save time with our pre-designed, standardized models. Equipped with DSLR cameras and high-speed printers for heavy usage.",
  },
]

export function ProductionSection() {
  return (
    <section id="production" className="py-20 lg:py-32" style={{ background: 'linear-gradient(180deg, rgba(142,202,230,0.08) 0%, #ffffff 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047]">
            Premium Photobooth <span className="text-[#FB8500]">Manufacturing</span>
          </h2>
          <p className="mt-4 text-lg text-[#023047]/60 max-w-2xl mx-auto">
            From concept to reality, we build photobooths that stand out
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group relative p-8 lg:p-10 rounded-2xl bg-white border border-[#023047]/10",
                "hover:border-[#FB8500]/50 transition-all duration-300",
                "hover:shadow-lg hover:shadow-[#FB8500]/5"
              )}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FB8500]/10 flex items-center justify-center group-hover:bg-[#FB8500]/20 transition-colors">
                  <service.icon className="size-7 text-[#FB8500]" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-[#023047] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#023047]/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#FB8500]/30 rounded-tr-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
