"use client"

import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const socials = [
  {
    label: "LINE",
    href: "https://lin.ee/nMWo9kd",
    icon: MessageCircle,
    color: "hover:bg-[#06C755] hover:text-white hover:border-[#06C755]",
    ring: "hover:ring-[#06C755]/40",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/imageautomat",
    icon: Facebook,
    color: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
    ring: "hover:ring-[#1877F2]/40",
  },
  {
    label: "Instagram",
    href: "https://lin.ee/nMWo9kd",
    icon: Instagram,
    color: "hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C]",
    ring: "hover:ring-[#E1306C]/40",
  },
  {
    label: "โทรหาเรา",
    href: "tel:+66636546249",
    icon: Phone,
    color: "hover:bg-primary hover:text-white hover:border-primary",
    ring: "hover:ring-primary/40",
  },
]

export function StickySocial() {
  return (
    <aside
      aria-label="ช่องทางติดต่อ"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2"
    >
      {socials.map((s, i) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={s.label}
          style={{ animationDelay: `${i * 0.1}s` }}
          className={cn(
            "group relative flex items-center gap-2.5",
            "pl-3 pr-4 h-11 rounded-l-2xl",
            "bg-white border border-r-0 border-[#023047]/10 text-[#023047]/60 shadow-md",
            "transition-all duration-300",
            "hover:shadow-xl hover:-translate-x-1",
            "hover:ring-2",
            "active:scale-95",
            "animate-[fadeInRight_0.4s_ease_both]",
            s.color,
            s.ring
          )}
        >
          {/* Pulse ring on first button to draw attention */}
          {i === 0 && (
            <span className="absolute inset-0 rounded-l-2xl animate-ping bg-[#06C755]/20 pointer-events-none" />
          )}

          <s.icon className="size-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-sm font-medium whitespace-nowrap">{s.label}</span>
        </a>
      ))}

      <style>{`
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </aside>
  )
}
