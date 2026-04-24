"use client"

import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Phone, Mail, Facebook } from "lucide-react"

const LineIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

/* ── Desktop side-panel items ── */
const socialItems = [
  {
    id: "line",
    label: "LINE@",
    href: "https://lin.ee/Q5DSE1r",
    icon: <LineIcon />,
    bg: "#06C755",
    glowColor: "rgba(6,199,85,0.6)",
    pulse: true,
    external: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/66635944429",
    icon: <WhatsAppIcon />,
    bg: "#25D366",
    glowColor: "rgba(37,211,102,0.5)",
    pulse: false,
    external: true,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/imageautomat",
    icon: <Facebook size={20} />,
    bg: "#1877F2",
    glowColor: "rgba(24,119,242,0.5)",
    pulse: false,
    external: true,
  },
  {
    id: "phone",
    label: "โทรหาเรา",
    href: "tel:0636546249",
    icon: <Phone size={20} />,
    bg: "#FB8500",
    glowColor: "rgba(251,133,0,0.5)",
    pulse: false,
    external: false,
  },
  {
    id: "email",
    label: "อีเมล",
    href: "mailto:imageautomat@gmail.com",
    icon: <Mail size={20} />,
    bg: "#023047",
    glowColor: "rgba(2,48,71,0.45)",
    pulse: false,
    external: false,
  },
]

/* ── Mobile bottom-bar items ── */
const mobileItems = [
  {
    id: "line",
    label: "LINE",
    href: "https://lin.ee/Q5DSE1r",
    icon: <LineIcon />,
    bg: "#06C755",
    external: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/66635944429",
    icon: <WhatsAppIcon />,
    bg: "#25D366",
    external: true,
  },
  {
    id: "phone",
    label: "โทรหาเรา",
    href: "tel:0635944429",
    icon: <Phone size={20} />,
    bg: "#FB8500",
    external: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 1.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
  },
}

function SocialButton({ item }: { item: typeof socialItems[number] }) {
  const [hovered, setHovered] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    if (!item.pulse) return
    const run = async () => {
      await controls.start({
        x: [-2, 4, -4, 3, -2, 0],
        transition: { duration: 0.5, ease: "easeInOut" },
      })
    }
    run()
    const id = setInterval(run, 6000)
    return () => clearInterval(id)
  }, [controls, item.pulse])

  return (
    <motion.a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      aria-label={item.label}
      variants={itemVariants}
      animate={item.pulse ? controls : undefined}
      whileHover={{ scale: 1.08, x: -4 }}
      whileTap={{ scale: 0.93 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex items-center h-12 pl-3 rounded-l-full text-white cursor-pointer overflow-visible"
      style={{
        backgroundColor: item.bg,
        boxShadow: hovered
          ? `0 6px 28px ${item.glowColor}, 0 2px 8px rgba(0,0,0,0.15)`
          : `0 3px 12px ${item.glowColor}`,
        transition: "box-shadow 0.25s ease",
        minWidth: 48,
      }}
    >
      {item.pulse && (
        <motion.span
          className="absolute inset-0 rounded-l-full pointer-events-none"
          animate={{ opacity: [0.6, 0], scale: [1, 1.25] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          style={{ backgroundColor: item.bg }}
        />
      )}

      <AnimatePresence>
        {hovered && (
          <motion.span
            key="shimmer"
            className="absolute inset-0 rounded-l-full pointer-events-none"
            initial={{ x: "-100%", opacity: 0.6 }}
            animate={{ x: "160%", opacity: 0 }}
            exit={{}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
              skewX: "-12deg",
            }}
          />
        )}
      </AnimatePresence>

      <motion.span
        className="relative z-10 flex-shrink-0 w-6 h-6 flex items-center justify-center"
        animate={hovered ? { rotate: [0, -15, 12, -8, 0] } : { rotate: 0 }}
        transition={{ duration: 0.4 }}
      >
        {item.icon}
      </motion.span>

      <motion.span
        className="relative z-10 overflow-hidden whitespace-nowrap text-sm font-semibold"
        animate={{
          width: hovered ? "auto" : 0,
          opacity: hovered ? 1 : 0,
          marginLeft: hovered ? 10 : 0,
          marginRight: hovered ? 14 : 10,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      >
        {item.label}
      </motion.span>
    </motion.a>
  )
}

/* ── Mobile sticky bottom bar ── */
function MobileContactBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.18)]">
      {mobileItems.map((item, i) => (
        <a
          key={item.id}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          aria-label={item.label}
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-white active:opacity-80 transition-opacity"
          style={{ backgroundColor: item.bg }}
        >
          <span className="flex items-center justify-center w-6 h-6">{item.icon}</span>
          <span className="text-[11px] font-semibold leading-none">{item.label}</span>
          {/* Divider between items */}
          {i < mobileItems.length - 1 && (
            <span className="absolute right-0 top-1/4 h-1/2 w-px bg-white/20" />
          )}
        </a>
      ))}
    </div>
  )
}

export function StickySocialMenu() {
  return (
    <>
      {/* Desktop: right-side panel */}
      <motion.div
        className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-2.5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {socialItems.map((item) => (
          <SocialButton key={item.id} item={item} />
        ))}
      </motion.div>

      {/* Mobile: bottom bar */}
      <MobileContactBar />
    </>
  )
}
