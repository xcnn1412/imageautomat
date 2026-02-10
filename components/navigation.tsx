"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

// LINE Icon Component
const LineIcon = ({ className = "" }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
)

const navLinks = [
  { href: "#services", label: "Services", featured: false },
  { href: "#features", label: "Features", featured: false },
  { href: "/product", label: "สินค้าของเรา", featured: true },
  { href: "#contact", label: "Contact", featured: false },
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
        ? "bg-white shadow-md shadow-black/5 backdrop-blur-2xl"
        : isScrolled
          ? "bg-white/80 backdrop-blur-2xl"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 lg:h-24 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <span className="font-serif text-2xl lg:text-3xl tracking-tight text-deep-space-blue">
              IMAGE<span className="text-tiger-orange">AUTOMAT</span>
            </span>
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) =>
              link.featured ? (
                <a
                  key={link.href}
                  href={resolveHref(link.href)}
                  className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #FB8500 0%, #e07600 100%)',
                    animation: 'orange-glow 2.5s ease-in-out infinite',
                  }}
                >
                  {/* Auto shimmer sweep */}
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                      animation: 'auto-shimmer 4s ease-in-out infinite',
                    }}
                  />

                  {/* Sparkle icon with pulse */}
                  <svg
                    className="relative z-10 w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ animation: 'sparkle-pulse 2s ease-in-out infinite' }}
                  >
                    <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" fill="currentColor" />
                  </svg>

                  {/* Text */}
                  <span className="relative z-10 tracking-wide transition-transform duration-300 group-hover:-translate-y-0.5">{link.label}</span>
                </a>
              ) : (
                <a
                  key={link.href}
                  href={resolveHref(link.href)}
                  className="relative text-sm font-medium text-deep-space-blue/60 hover:text-deep-space-blue transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-tiger-orange group-hover:w-full transition-all duration-300" />
                </a>
              )
            )}
          </div>

          {/* CTA Button - LINE */}
          <div className="hidden lg:block">
            <a
              href="https://line.me/ti/p/~@imageautomat"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#05b04b] text-white font-bold px-6 py-3 text-sm rounded-full transition-all duration-300 shadow-md shadow-[#06C755]/20 hover:shadow-lg hover:shadow-[#06C755]/40 hover:scale-105 active:scale-95 animate-subtle-bounce overflow-hidden"
            >
              {/* Animated glow ring */}
              <span className="absolute inset-0 rounded-full animate-pulse-glow" />

              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />

              {/* LINE Icon with wiggle */}
              <span className="relative z-10 transition-transform duration-300 group-hover:animate-wiggle">
                <LineIcon />
              </span>

              {/* Text */}
              <span className="relative z-10 tracking-wide transition-transform duration-300 group-hover:-translate-y-0.5">
                ขอราคาพิเศษ
              </span>
            </a>
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
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="mt-4 mx-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-deep-space-blue/10 ring-1 ring-deep-space-blue/5">
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) =>
                link.featured ? (
                  <a
                    key={link.href}
                    href={resolveHref(link.href)}
                    className="group relative inline-flex items-center gap-2 text-lg font-bold text-white rounded-xl transition-all duration-200 py-3 px-4 overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #FB8500 0%, #e07600 100%)',
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" fill="currentColor" />
                    </svg>
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.href}
                    href={resolveHref(link.href)}
                    className="text-lg font-medium text-deep-space-blue/70 hover:text-deep-space-blue hover:bg-deep-space-blue/5 rounded-lg transition-all duration-200 py-3 px-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="https://line.me/ti/p/~@imageautomat"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-2 inline-flex items-center justify-center gap-3 bg-[#06C755] hover:bg-[#05b04b] text-white font-bold px-6 py-5 text-base rounded-full w-full transition-all duration-300 shadow-lg shadow-[#06C755]/30 hover:shadow-xl hover:shadow-[#06C755]/50 active:scale-95 overflow-hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />

                {/* LINE Icon */}
                <span className="relative z-10">
                  <LineIcon className="w-6 h-6" />
                </span>

                {/* Text */}
                <span className="relative z-10 tracking-wide">
                  ขอราคาพิเศษ
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
