// ราคากลาง ใช้ทั้ง cart / checkout / payment — แหล่งเดียว
// ponytail: สินค้าส่วนใหญ่ยังไม่ตั้ง priceTHB → ใช้ค่ามัดจำ จนกว่าจะใส่ราคาจริง
export const DEPOSIT_THB = 1000

export type PriceMode = "full" | "deposit"

type PriceFields = { priceTHB?: number | null; depositTHB?: number | null }

export const fullTHB = (p: PriceFields) => p.priceTHB ?? DEPOSIT_THB
export const depositTHB = (p: PriceFields) => p.depositTHB ?? DEPOSIT_THB

// มีราคาเต็มจำนวนขายจริงไหม — null / 0 / ติดลบ = ยังไม่ตั้ง (ให้สอบถามราคา ไม่ fallback ฿1,000)
export const hasFullPrice = (p: PriceFields) => p.priceTHB != null && p.priceTHB > 0

// ประเภทที่ขายผ่านตะกร้าได้ — ทุกประเภท ยกเว้น "rent" (เช่า = สอบถาม/ติดต่อเท่านั้น)
export const isBuyableCategory = (category: string) => category !== "rent"

export const unitTHBfor = (p: PriceFields, mode: PriceMode) =>
  mode === "deposit" ? depositTHB(p) : fullTHB(p)

export const unitSatangFor = (p: PriceFields, mode: PriceMode) =>
  unitTHBfor(p, mode) * 100

// legacy compat — callers ที่ยังไม่รู้จัก mode ใช้ full เสมอ
export const unitSatang = (priceTHB: number | null | undefined) => (priceTHB ?? DEPOSIT_THB) * 100
export const unitTHB = (priceTHB: number | null | undefined) => priceTHB ?? DEPOSIT_THB
