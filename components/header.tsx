"use client"

import { useState, useEffect } from "react"
import { Menu, X, CalendarDays, Monitor, Wallet, Phone, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#rental", label: "แพ็กเกจเช่า", icon: CalendarDays },
  { href: "#pricing", label: "เช่า Software", icon: Monitor },
  { href: "#payment", label: "ระบบชำระเงิน", icon: Wallet },
  { href: "#contact", label: "ติดต่อเรา", icon: Phone },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-[#023047]/5"
          : "bg-white/80 backdrop-blur-xl border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="https://www.imageautomat.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <span className="text-xl lg:text-2xl font-serif font-bold tracking-tight text-[#023047]">
              IMAGE<span className="text-[#FB8500]">AUTOMAT</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={cn(
                    "relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-200 overflow-hidden",
                    isActive
                      ? "rounded-full bg-gradient-to-r from-[#FB8500] to-[#fb9a20] text-white shadow-md shadow-[#FB8500]/25"
                      : "rounded-lg text-[#023047]/60 hover:text-[#023047] hover:bg-[#023047]/5"
                  )}
                >
                  {/* Shimmer effect on active */}
                  {isActive && (
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                      <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    </span>
                  )}
                  {isActive && <Star className="size-3 fill-current" />}
                  <link.icon className="size-4" />
                  {link.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://lin.ee/Q5DSE1r"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#06C755] text-white text-sm font-semibold hover:bg-[#05b34c] transition-all hover:scale-105 active:scale-95 animate-pulse-glow"
            >
              ขอราคาเช่าตู้ถ่ายภาพ
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-[#023047]/70 hover:text-[#FB8500] hover:bg-[#023047]/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#023047]/10 bg-white/95 backdrop-blur-xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium text-[#023047]/70 hover:text-[#023047] hover:bg-[#FB8500]/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon className="size-4 text-[#FB8500]" />
                  {link.label}
                </a>
              ))}
              <a
                href="https://lin.ee/Q5DSE1r"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#06C755] text-white text-sm font-semibold hover:bg-[#05b34c] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ขอราคาเช่าตู้ถ่ายภาพ
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
