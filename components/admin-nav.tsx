import Link from "next/link"
import { prisma } from "@/lib/prisma"

const TABS = [
  { href: "/admin/orders", label: "ออเดอร์" },
  { href: "/admin/products", label: "สินค้า" },
  { href: "/admin/custom-order", label: "ออเดอร์พิเศษ" },
  { href: "/admin/users", label: "สมาชิก" },
] as const

// nav ร่วมของหน้า admin + badge จำนวนสมาชิกรออนุมัติ (notification)
export async function AdminNav({ active }: { active: (typeof TABS)[number]["href"] }) {
  const pending = await prisma.user.count({ where: { approvedAt: null } })
  return (
    <nav className="mb-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
      {TABS.map((t) => (
        <Link
          key={t.href}
          href={t.href}
          className={t.href === active ? "text-tiger-orange" : "text-deep-space-blue/50 hover:text-tiger-orange"}
        >
          {t.label}
          {t.href === "/admin/users" && pending > 0 && (
            <span className="ml-1.5 rounded-full bg-red-500 px-1.5 py-0.5 text-xs font-bold text-white">{pending}</span>
          )}
        </Link>
      ))}
    </nav>
  )
}
