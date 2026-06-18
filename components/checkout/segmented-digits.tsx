"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"

// ช่องกรอกตัวเลขแยกทีละหลัก (OTP-style) — 1 ตัวเลข/กล่อง, auto-advance, backspace ถอยหลัง, paste กระจาย
export function SegmentedDigits({
  length,
  value,
  onChange,
  invalid,
  groups,
  ariaLabel,
}: {
  length: number
  value: string
  onChange: (v: string) => void
  invalid?: boolean
  groups?: number[] // เว้นช่องไฟตามกลุ่ม เช่น [1,4,5,2,1] = 1-2345-67890-12-3
  ariaLabel?: string
}) {
  const refs = useRef<(HTMLInputElement | null)[]>([])
  const clean = value.replace(/\D/g, "").slice(0, length)
  const focus = (i: number) => refs.current[Math.max(0, Math.min(i, length - 1))]?.focus()

  // index ที่ขึ้นกลุ่มใหม่ (เว้นช่องไฟด้านซ้าย)
  const gaps = new Set<number>()
  if (groups) {
    let acc = 0
    for (const g of groups.slice(0, -1)) {
      acc += g
      gaps.add(acc)
    }
  }

  function handleChange(i: number, raw: string) {
    const d = raw.replace(/\D/g, "")
    if (!d) return
    if (d.length > 1) {
      // paste / autofill — กระจายจากช่องนี้ไป
      const next = (clean.slice(0, i) + d).replace(/\D/g, "").slice(0, length)
      onChange(next)
      focus(next.length)
      return
    }
    const arr = clean.split("")
    if (i < arr.length) arr[i] = d
    else arr[clean.length] = d // ช่องว่าง → ต่อท้าย (left-packed กันช่องโหว่)
    onChange(arr.join("").slice(0, length))
    focus(i + 1)
  }

  function handleKeyDown(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace") {
      e.preventDefault()
      if (clean[i]) {
        onChange(clean.slice(0, i) + clean.slice(i + 1))
      } else if (i > 0) {
        onChange(clean.slice(0, i - 1) + clean.slice(i))
        focus(i - 1)
      }
    } else if (e.key === "ArrowLeft") {
      focus(i - 1)
    } else if (e.key === "ArrowRight") {
      focus(i + 1)
    }
  }

  return (
    <div className="flex w-full items-center gap-1" role="group" aria-label={ariaLabel}>
      {Array.from({ length }, (_, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el
          }}
          value={clean[i] ?? ""}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onFocus={(e) => e.currentTarget.select()}
          inputMode="numeric"
          maxLength={1}
          aria-label={`หลักที่ ${i + 1}`}
          className={cn(
            "h-11 min-w-0 flex-1 rounded-lg border bg-white text-center text-base font-semibold tabular-nums text-deep-space-blue outline-none transition-colors focus:border-tiger-orange focus:ring-2 focus:ring-tiger-orange/20",
            invalid ? "border-red-400" : "border-gray-200",
            gaps.has(i) && "ml-2",
          )}
        />
      ))}
    </div>
  )
}
