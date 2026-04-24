import Link from "next/link";
import { Facebook, Phone } from "lucide-react";

const LineIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
)

const footerLinks = [
  {
    title: "สินค้า",
    links: [
      { label: "สินค้าของเรา", href: "/product" },
      { label: "ซอฟต์แวร์ของเรา", href: "/software" },
      { label: "ระบบชำระเงิน", href: "/payment" },
    ],
  },
  {
    title: "บริษัท",
    links: [
      { label: "ติดต่อเรา", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { icon: LineIcon, href: "https://lin.ee/Q5DSE1r", label: "LINE", external: true },
  { icon: Facebook, href: "https://www.facebook.com/imageautomat", label: "Facebook", external: true },
  { icon: Phone, href: "tel:0636546249", label: "โทรหาเรา", external: false },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#023047]/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer */}
        <div className="py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6" aria-label="IMAGEAUTOMAT Home">
              <span className="font-sans font-bold text-2xl text-[#023047]">
                IMAGE<span className="text-[#FB8500]">AUTOMAT</span>
              </span>
            </Link>
            <p className="text-[#023047]/60 leading-relaxed max-w-sm mb-8">
              บริการเช่าและจำหน่ายตู้ถ่ายรูป Photobooth คุณภาพสูง
              สำหรับงานแต่งงาน งานอีเวนต์ และงานเปิดตัวสินค้า ทั่วประเทศไทย
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 flex items-center justify-center border border-[#023047]/10 hover:border-[#FB8500] hover:text-[#FB8500] text-[#023047]/60 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <nav key={section.title} aria-label={section.title}>
              <h4 className="text-xs tracking-[0.2em] uppercase text-[#023047] mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#023047]/60 hover:text-[#FB8500] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-[#023047]/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#023047]/40">
              {new Date().getFullYear()} IMAGEAUTOMAT. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-sm text-[#023047]/40 hover:text-[#FB8500] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-[#023047]/40 hover:text-[#FB8500] transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
