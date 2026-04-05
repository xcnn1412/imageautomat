"use client"

import { QrCode, PartyPopper } from "lucide-react"
import { cn } from "@/lib/utils"

const solutions = [
  {
    icon: QrCode,
    title: "Commercial System",
    description:
      "Pay-per-use system for permanent setups in cafes and malls. Fully integrated with QR Code and PromptPay automated payments.",
    badge: "Revenue Generating",
  },
  {
    icon: PartyPopper,
    title: "Event System",
    description:
      "Unlimited capture system ideal for weddings, product launches, and corporate events. Focus on fast processing and user experience.",
    badge: "Unlimited Shots",
  },
]

export function SoftwareSection() {
  return (
    <section id="software" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047]">
            Smart Software <span className="text-[#FB8500]">Licensing</span>
          </h2>
          <p className="mt-4 text-lg text-[#023047]/60 max-w-2xl mx-auto">
            Intelligent solutions tailored for your business model
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className={cn(
                "group relative p-8 lg:p-10 rounded-2xl",
                "bg-gradient-to-br from-white via-white to-[#FB8500]/5",
                "border border-[#023047]/10 hover:border-[#FB8500]/50",
                "transition-all duration-300",
                "hover:shadow-xl hover:shadow-primary/10"
              )}
            >
              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#FB8500]/15 text-[#FB8500]">
                  {solution.badge}
                </span>
              </div>

              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FB8500]/20 to-[#FB8500]/5 flex items-center justify-center group-hover:from-[#FB8500]/30 group-hover:to-[#FB8500]/10 transition-all">
                  <solution.icon className="size-8 text-[#FB8500]" />
                </div>

                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-[#023047] mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-[#023047]/60 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Feature dots */}
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <div className="flex -space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full bg-primary/60 border-2 border-card"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Multi-device compatible
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
