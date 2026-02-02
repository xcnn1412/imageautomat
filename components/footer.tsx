import { Instagram, Facebook } from "lucide-react";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Weddings", href: "#services" },
      { label: "Corporate Events", href: "#services" },
      { label: "Brand Activations", href: "#services" },
      { label: "Private Parties", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Portfolio", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#023047]/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer */}
        <div className="py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6" aria-label="IMAGEAUTOMAT Home">
              <span className="font-serif text-2xl text-[#023047]">
                IMAGE<span className="text-[#FB8500]">AUTOMAT</span>
              </span>
            </a>
            <p className="text-[#023047]/60 leading-relaxed max-w-sm mb-8">
              Premium photobooth experiences for weddings, corporate events, and
              brand activations across Thailand.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
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
                    <a
                      href={link.href}
                      className="text-[#023047]/60 hover:text-[#FB8500] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
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
