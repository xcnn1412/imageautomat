// VAT / ภาษีหัก ณ ที่จ่าย — ราคาในระบบเป็น "ก่อน VAT" (ex-VAT base)
// ยอดชำระสุทธิ = ฐาน + VAT − WHT. WHT หักเฉพาะผู้ซื้อนิติบุคคล (ตามกฎหมาย)
// VAT คงที่ในโค้ด; WHT rate ต่างกันต่อสินค้า (จ้างผลิต 3%, เช่า software 5%, อื่นๆ 0%) → เก็บใน Product.whtRate
export const VAT_RATE = 7

export type TaxLine = { base: number; whtRate: number } // base = ฐานก่อน VAT (สตางค์) ทั้งบรรทัด (unit × qty)
export type TaxResult = {
  subtotal: number // ฐานก่อน VAT ก่อนหักส่วนลด
  baseAmount: number // ฐานก่อน VAT หลังหักส่วนลด
  vatAmount: number // VAT 7%
  whtAmount: number // หัก ณ ที่จ่าย รวม
  whtByRate: { rate: number; amount: number }[] // แยกตามอัตรา (ใบ 50 ทวิ แยกตามอัตรา)
  total: number // base + vat − wht
}

// ปัดเศษ: VAT ปัดบนฐานรวม, WHT ปัดต่อบรรทัด (rate ต่างกันได้) แล้วรวมตามอัตรา
// ส่วนลดเฉลี่ยลงทุกบรรทัดตามสัดส่วน (ratio) เพื่อให้ฐาน WHT ถูกต้อง
export function computeTax(lines: TaxLine[], discount: number, isCompany: boolean): TaxResult {
  const subtotal = lines.reduce((s, l) => s + l.base, 0)
  const baseAmount = Math.max(0, subtotal - discount)
  const ratio = subtotal > 0 ? baseAmount / subtotal : 1
  const vatAmount = Math.round((baseAmount * VAT_RATE) / 100)

  const byRate = new Map<number, number>()
  if (isCompany) {
    for (const l of lines) {
      if (l.whtRate <= 0) continue
      const amt = Math.round((l.base * ratio * l.whtRate) / 100)
      byRate.set(l.whtRate, (byRate.get(l.whtRate) ?? 0) + amt)
    }
  }
  const whtByRate = [...byRate.entries()].sort((a, b) => a[0] - b[0]).map(([rate, amount]) => ({ rate, amount }))
  const whtAmount = whtByRate.reduce((s, w) => s + w.amount, 0)

  return { subtotal, baseAmount, vatAmount, whtAmount, whtByRate, total: baseAmount + vatAmount - whtAmount }
}

// ยอดที่ลูกค้าจ่ายจริงของสินค้าชิ้นเดียว (ราคา ex-VAT เป็น "บาท") — ใช้แสดงผลหน้า admin
// ใช้ computeTax ตัวเดียวกับ checkout → ตรงกับยอดจริงเป๊ะ. คืนค่าเป็น "สตางค์"
// personalSatang = ฐาน + VAT 7%; companySatang = personal − WHT (หักเฉพาะนิติบุคคล)
export function payablePreview(baseTHB: number, whtRate: number) {
  const line = [{ base: Math.round(baseTHB * 100), whtRate }]
  return {
    personalSatang: computeTax(line, 0, false).total,
    companySatang: computeTax(line, 0, true).total,
  }
}
