"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { ShoppingCart, Calendar, Laptop, Factory, Phone, Star } from "lucide-react"

// LINE Icon Component
const LineIcon = ({ className = "" }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
)

const navLinks = [
  { href: "/product", label: "ซื้อตู้", icon: ShoppingCart, featured: false },
  { href: "/rental", label: "เช่าตู้", icon: Calendar, featured: false },
  { href: "/software", label: "ซอฟต์แวร์", icon: Laptop, featured: false },
  { href: "/oem", label: "OEM", icon: Factory, featured: false },
  { href: "/contact", label: "ติดต่อเรา", icon: Phone, featured: false },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Resolve anchor links: on non-homepage, prefix with /
  const resolveHref = (href: string) => {
    if (href.startsWith("#") && pathname !== "/") {
      return "/" + href
    }
    return href
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${pathname !== "/"
        ? "bg-white shadow-md shadow-black/5"
        : isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md shadow-black/5"
          : "bg-white/80 backdrop-blur-xl"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 lg:h-24 items-center justify-between gap-8">
          {/* Logo */}
          <a href="/" className="flex items-center group flex-shrink-0">
            <span className="font-serif text-xl lg:text-2xl tracking-tight text-deep-space-blue font-bold">
              IMAGE<span className="text-tiger-orange">AUTOMAT</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
            {navLinks.map((link) => {
              const basePath = link.href.split("#")[0]
              const isActive = link.href.startsWith("#") ? pathname === "/" : pathname === basePath
              
              // Active button style (Orange pill with sparkle)
              if (isActive) {
                return (
                  <a
                    key={link.href}
                    href={resolveHref(link.href)}
                    className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden bg-gradient-to-r from-tiger-orange to-tiger-orange/90 shadow-md shadow-tiger-orange/25"
                  >
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                    
                    {/* Star icon */}
                    <Star className="relative z-10 w-4 h-4 fill-current" />
                    
                    {/* Text */}
                    <span className="relative z-10 tracking-tight">{link.label}</span>
                  </a>
                )
              }
              
              // Inactive button style
              return (
                <a
                  key={link.href}
                  href={resolveHref(link.href)}
                  className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-deep-space-blue/70 hover:text-deep-space-blue hover:bg-deep-space-blue/5 transition-all duration-300"
                >
                  <link.icon className="w-4 h-4 text-deep-space-blue/50 group-hover:text-deep-space-blue transition-colors duration-300" />
                  <span className="tracking-tight">{link.label}</span>
                </a>
              )
            })}
          </div>

          {/* CTA Button - LINE (Desktop) */}
          <div className="hidden lg:block flex-shrink-0">
            <a
              href="https://lin.ee/Q5DSE1r"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#05b04b] text-white font-bold px-6 py-2.5 text-sm rounded-full transition-all duration-300 shadow-lg shadow-[#06C755]/25 hover:shadow-xl hover:shadow-[#06C755]/40 hover:scale-105 active:scale-95 overflow-hidden"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />

              {/* LINE Icon */}
              <span className="relative z-10">
                <LineIcon className="w-4 h-4" />
              </span>

              {/* Text */}
              <span className="relative z-10 tracking-tight">
                ขอราคาพิเศษ
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-deep-space-blue hover:bg-deep-space-blue/5 rounded-lg transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            suppressHydrationWarning
          >
            <span className={`absolute w-5 h-0.5 bg-current rounded-full transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute w-5 h-0.5 bg-current rounded-full transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
          <div className="mt-2 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-deep-space-blue/10 border border-deep-space-blue/5">
            <div className="flex flex-col p-2">
              {navLinks.map((link) => {
                const basePath = link.href.split("#")[0]
                const isActive = link.href.startsWith("#") ? pathname === "/" : pathname === basePath
                
                return (
                  <a
                    key={link.href}
                    href={resolveHref(link.href)}
                    className={`group inline-flex items-center gap-3 text-base font-semibold rounded-xl transition-all duration-200 py-3 px-4 ${
                      isActive
                        ? "text-tiger-orange bg-tiger-orange/10"
                        : "text-deep-space-blue/70 hover:text-deep-space-blue hover:bg-deep-space-blue/5"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <link.icon className={`w-5 h-5 ${isActive ? "text-tiger-orange" : "text-deep-space-blue/50"}`} />
                    <span className="tracking-tight">{link.label}</span>
                    {isActive && <span className="ml-auto w-2 h-2 rounded-full bg-tiger-orange" />}
                  </a>
                )
              })}
              
              {/* LINE CTA in Mobile */}
              <div className="mt-2 pt-2 border-t border-deep-space-blue/5">
                <a
                  href="https://lin.ee/Q5DSE1r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b04b] text-white font-bold px-5 py-3.5 text-base rounded-xl w-full transition-all duration-300 shadow-lg shadow-[#06C755]/30 active:scale-95 overflow-hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
                  <LineIcon className="relative z-10 w-5 h-5" />
                  <span className="relative z-10 tracking-tight">ขอราคาพิเศษ</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
