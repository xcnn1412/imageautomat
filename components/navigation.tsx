"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#features", label: "Features" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
          ? "bg-white/80 backdrop-blur-2xl"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 lg:h-24 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <span className="font-serif text-2xl lg:text-3xl tracking-tight text-deep-space-blue">
              IMAGE<span className="text-tiger-orange">AUTOMAT</span>
            </span>
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-deep-space-blue/60 hover:text-deep-space-blue transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-tiger-orange group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-deep-space-blue hover:bg-deep-space-blue/90 text-white font-medium px-8 py-6 rounded-full transition-all duration-300 group"
            >
              Get Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-deep-space-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            suppressHydrationWarning
          >
            <span className={`absolute w-6 h-px bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`} />
            <span className={`absolute w-6 h-px bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute w-6 h-px bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-[400px] pb-8' : 'max-h-0'}`}>
          <div className="flex flex-col gap-1 pt-4 border-t border-deep-space-blue/5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-deep-space-blue/70 hover:text-deep-space-blue transition-colors py-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-4 bg-deep-space-blue hover:bg-deep-space-blue/90 text-white font-medium px-6 py-6 rounded-full w-full group"
            >
              Get Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
