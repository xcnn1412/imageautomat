// รัน: npx tsx lib/tax.check.ts
import assert from "node:assert"
import { computeTax, payablePreview } from "./tax"

// ตู้ ฿1,000 (ไม่หัก) + จ้างผลิต ฿500 (3%) + เช่า software ฿1,000 (5%), นิติบุคคล, ไม่ลด — สตางค์
const r = computeTax([{ base: 100000, whtRate: 0 }, { base: 50000, whtRate: 3 }, { base: 100000, whtRate: 5 }], 0, true)
assert.equal(r.baseAmount, 250000)
assert.equal(r.vatAmount, 17500) // 7% ของ 2,500
assert.equal(r.whtAmount, 6500) // 3%×500=15 + 5%×1,000=50 = 65
assert.deepEqual(r.whtByRate, [{ rate: 3, amount: 1500 }, { rate: 5, amount: 5000 }])
assert.equal(r.total, 250000 + 17500 - 6500)

// บุคคลธรรมดา — ไม่หัก WHT
const p = computeTax([{ base: 50000, whtRate: 3 }], 0, false)
assert.equal(p.whtAmount, 0)
assert.equal(p.total, 53500) // 500 + 35

// ส่วนลด ฿150 (15,000 สตางค์) เฉลี่ยลงฐาน
const d = computeTax([{ base: 100000, whtRate: 0 }, { base: 50000, whtRate: 3 }], 15000, true)
assert.equal(d.baseAmount, 135000)
assert.equal(d.vatAmount, 9450) // 7% ของ 1,350
assert.equal(d.whtAmount, 1350) // 500 × 0.9 × 3%
assert.equal(d.total, 135000 + 9450 - 1350)

// invariant: WHT คิดจาก "ฐานก่อน VAT" เสมอ — ห้ามคิดจาก base+VAT
// ฐาน ฿1,000 (ก่อน VAT) WHT 3% → ต้องได้ ฿30 (3% ของ 1,000) ไม่ใช่ ฿32.10 (3% ของ 1,070)
const w = computeTax([{ base: 100000, whtRate: 3 }], 0, true)
assert.equal(w.whtAmount, 3000) // 3% × ฐานก่อน VAT 1,000 = 30 บาท
assert.equal(w.vatAmount, 7000) // VAT 7% แยกต่างหาก
assert.equal(w.total, 100000 + 7000 - 3000) // base + VAT − WHT

// payablePreview: จ้างผลิต ฿1,500 (3%) — บุคคล +VAT, นิติฯ −WHT
const pv = payablePreview(1500, 3)
assert.equal(pv.personalSatang, 160500) // 1500 + 105 VAT
assert.equal(pv.companySatang, 156000) // − 45 WHT (3% ของ 1,500)

console.log("tax.check ✓")
