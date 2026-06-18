"use client"

import { useEffect, useRef, useState } from "react"

type AddrResult = { district: string; amphoe: string; province: string; zipcode: string }
// thai-address-database naming: district = ตำบล/แขวง, amphoe = อำเภอ/เขต, province = จังหวัด

export type AddressPick = { subdistrict: string; district: string; province: string; zipcode: string }

export function SubdistrictAutocomplete({
  value,
  onType,
  onPick,
  className,
}: {
  value: string
  onType: (v: string) => void
  onPick: (r: AddressPick) => void
  className?: string
}) {
  const [results, setResults] = useState<AddrResult[]>([])
  const [open, setOpen] = useState(false)
  // โหลดฐานข้อมูล (~1MB) เฉพาะตอนพิมพ์ครั้งแรก — code-split
  const dbRef = useRef<{ searchAddressByDistrict: (q: string) => AddrResult[] } | null>(null)
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", close)
    return () => document.removeEventListener("mousedown", close)
  }, [])

  async function handleType(v: string) {
    onType(v)
    if (v.trim().length < 2) {
      setResults([])
      setOpen(false)
      return
    }
    if (!dbRef.current) {
      const mod = await import("thai-address-database")
      // CJS interop: บางบันเดิลห่อ named export ไว้ใต้ .default
      const search = mod.searchAddressByDistrict ?? (mod as unknown as { default: typeof mod }).default.searchAddressByDistrict
      dbRef.current = { searchAddressByDistrict: search }
    }
    const r = dbRef.current.searchAddressByDistrict(v.trim()).slice(0, 12)
    setResults(r)
    setOpen(r.length > 0)
  }

  function pick(r: AddrResult) {
    onPick({ subdistrict: r.district, district: r.amphoe, province: r.province, zipcode: r.zipcode })
    setOpen(false)
  }

  return (
    <div ref={boxRef} className="relative">
      <input
        value={value}
        onChange={(e) => handleType(e.target.value)}
        onFocus={() => results.length > 0 && setOpen(true)}
        placeholder="ตำบล / แขวง (พิมพ์เพื่อค้นหา)"
        className={className}
        autoComplete="off"
      />
      {open && (
        <ul className="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-gray-200 bg-white shadow-lg">
          {results.map((r, i) => (
            <li key={`${r.district}-${r.amphoe}-${r.zipcode}-${i}`}>
              <button
                type="button"
                onClick={() => pick(r)}
                className="block w-full px-4 py-2 text-left text-sm hover:bg-tiger-orange/5"
              >
                <span className="font-medium text-deep-space-blue">{r.district}</span>
                <span className="text-deep-space-blue/50">
                  {" "}
                  » {r.amphoe} » {r.province} · {r.zipcode}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
