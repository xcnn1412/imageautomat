// ตรวจสอบ + ประกอบข้อมูลใบกำกับภาษี — ใช้ร่วมทั้ง client (checkout) และ server (api/checkout)
// ไม่ import ฐานข้อมูลที่อยู่ (หนัก) — เป็น pure validators เท่านั้น

export type InvoiceAddress = {
  houseNo: string // บ้านเลขที่
  soi: string // ตรอก/ซอย (optional)
  road: string // ถนน (optional)
  subdistrict: string // ตำบล/แขวง
  district: string // อำเภอ/เขต
  province: string // จังหวัด
  zipcode: string // รหัสไปรษณีย์
}

export type InvoiceInput = {
  type: "personal" | "company"
  name: string
  taxId: string
  branch: string // นิติบุคคลเท่านั้น (personal ใช้ "")
  address: InvoiceAddress
  email: string
  phone: string
  lineId: string // optional
}

export const emptyInvoice = (): InvoiceInput => ({
  type: "personal",
  name: "",
  taxId: "",
  branch: "สำนักงานใหญ่",
  address: { houseNo: "", soi: "", road: "", subdistrict: "", district: "", province: "", zipcode: "" },
  email: "",
  phone: "",
  lineId: "",
})

// เลขบัตรประชาชน/เลขผู้เสียภาษีไทย 13 หลัก — ตรวจ check digit (หลักที่ 13)
// ใช้อัลกอริทึมเดียวกันทั้งบุคคลธรรมดาและนิติบุคคล
export function isThaiId(id: string): boolean {
  const d = id.replace(/\D/g, "")
  if (d.length !== 13) return false
  let sum = 0
  for (let i = 0; i < 12; i++) sum += Number(d[i]) * (13 - i)
  const check = (11 - (sum % 11)) % 10
  return check === Number(d[12])
}

export const isEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())
export const isThaiPhone = (p: string) => /^\d{10}$/.test(p.replace(/\D/g, ""))
export const isZipcode = (z: string) => /^\d{5}$/.test(z.trim())

// คืน error ภาษาไทย (ช่องแรกที่ผิด) หรือ null = ผ่าน
export function validateInvoice(inv: InvoiceInput): string | null {
  if (!inv.name.trim()) return inv.type === "company" ? "กรอกชื่อบริษัท / นิติบุคคล" : "กรอกชื่อ-นามสกุล"
  if (!isThaiId(inv.taxId))
    return inv.type === "company" ? "เลขประจำตัวผู้เสียภาษีไม่ถูกต้อง (13 หลัก)" : "เลขบัตรประชาชนไม่ถูกต้อง (13 หลัก)"
  const a = inv.address
  if (!a.houseNo.trim()) return "กรอกบ้านเลขที่"
  if (!a.subdistrict.trim() || !a.district.trim() || !a.province.trim()) return "เลือกตำบล / อำเภอ / จังหวัด ให้ครบ"
  if (!isZipcode(a.zipcode)) return "รหัสไปรษณีย์ไม่ถูกต้อง (5 หลัก)"
  if (!isEmail(inv.email)) return "อีเมลไม่ถูกต้อง"
  if (!isThaiPhone(inv.phone)) return "เบอร์โทรต้องเป็นตัวเลข 10 หลัก"
  if (inv.type === "company" && !inv.branch.trim()) return "กรอกสาขา (เช่น สำนักงานใหญ่)"
  return null
}

// ประกอบที่อยู่เป็นบรรทัดเดียวสำหรับเก็บ/ออกใบกำกับ
export function buildAddressLine(a: InvoiceAddress): string {
  return [
    a.houseNo.trim(),
    a.soi.trim() ? `ซอย${a.soi.trim()}` : "",
    a.road.trim() ? `ถนน${a.road.trim()}` : "",
    `ต.${a.subdistrict.trim()}`,
    `อ.${a.district.trim()}`,
    `จ.${a.province.trim()}`,
    a.zipcode.trim(),
  ]
    .filter(Boolean)
    .join(" ")
}
