"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Globe, Check } from "lucide-react"

/* ponytail: ใช้ Google Translate proxy (.translate.goog) — ได้ 6 ภาษาทันทีโดยไม่ต้องทำไฟล์แปล
   ทั้งเว็บ. อัปเกรดเป็น i18n จริง (next-intl + แปลเนื้อหาเอง) เมื่อภาษาใดภาษาหนึ่งมีทราฟฟิกจริง */
const SITE_HOST = "www.imageautomat.com"
const PROXY_HOST = SITE_HOST.replace(/\./g, "-") + ".translate.goog"

const languages = [
    { code: "th", label: "ไทย" },
    { code: "en", label: "English" },
    { code: "lo", label: "ລາວ" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "id", label: "Bahasa Indonesia" },
    { code: "tl", label: "Filipino" },
]

export function LanguageSwitcher() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname() || "/"

    const hrefFor = (code: string) =>
        code === "th"
            ? pathname
            : `https://${PROXY_HOST}${pathname}?_x_tr_sl=th&_x_tr_tl=${code}&_x_tr_hl=${code}`

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-semibold text-deep-space-blue/70 transition-colors hover:bg-deep-space-blue/5 hover:text-deep-space-blue"
            >
                <Globe className="h-[14px] w-[14px] text-deep-space-blue/50" />
                ไทย
            </button>

            {open && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
                    <ul
                        role="listbox"
                        className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl border border-deep-space-blue/10 bg-white py-1 shadow-lg"
                    >
                        {languages.map((lang) => (
                            <li key={lang.code}>
                                <a
                                    href={hrefFor(lang.code)}
                                    className="flex items-center justify-between px-4 py-2.5 text-sm text-deep-space-blue transition-colors hover:bg-deep-space-blue/5"
                                >
                                    {lang.label}
                                    {lang.code === "th" && <Check className="h-4 w-4 text-tiger-orange" />}
                                </a>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}
