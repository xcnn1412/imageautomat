import { Printer, Share2, Palette, Sun, PartyPopper, Headset } from "lucide-react"

const features = [
  {
    icon: Printer,
    title: "Instant Prints",
    description: "High-quality prints ready in seconds",
  },
  {
    icon: Share2,
    title: "Social Sharing",
    description: "Direct to social media, email & SMS",
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Match your event theme perfectly",
  },
  {
    icon: Sun,
    title: "Pro Lighting",
    description: "Studio-grade for flawless photos",
  },
  {
    icon: PartyPopper,
    title: "Props Collection",
    description: "Fun and elegant props included",
  },
  {
    icon: Headset,
    title: "On-Site Support",
    description: "Dedicated attendant all event",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 lg:py-40 bg-deep-space-blue relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <span className="text-sm font-medium text-tiger-orange uppercase tracking-[0.3em] mb-6 block">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
            Everything you need for <span className="italic text-tiger-orange">unforgettable</span> moments
          </h2>
          <p className="mt-8 text-lg text-white/50 leading-relaxed">
            Premium features designed to make every event extraordinary.
          </p>
        </div>

        {/* Features Grid - Minimal Elegant Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 group-hover:bg-tiger-orange/20 flex items-center justify-center transition-colors duration-500">
                <feature.icon className="w-7 h-7 text-tiger-orange" />
              </div>
              <h3 className="mt-6 text-xl font-serif text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-white/40 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <p className="text-white/40 text-sm uppercase tracking-[0.3em]">
            Ready to elevate your event?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 mt-6 text-white text-lg font-medium hover:text-tiger-orange transition-colors group"
          >
            <span className="relative">
              Get in touch
              <span className="absolute -bottom-1 left-0 w-full h-px bg-white/30 group-hover:bg-tiger-orange transition-colors" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
