// รัน: npx tsx lib/invoice.check.ts
import assert from "node:assert"
import { isThaiId, isEmail, isThaiPhone, isZipcode, validateInvoice, buildAddressLine, emptyInvoice } from "./invoice"

// Thai ID check digit
assert.equal(isThaiId("1101700230708"), true) // check digit ถูก
assert.equal(isThaiId("1101700230707"), false) // check digit ผิด
assert.equal(isThaiId("110170023070"), false) // 12 หลัก
assert.equal(isThaiId("11017002307080"), false) // 14 หลัก
assert.equal(isThaiId("abcd"), false)

assert.equal(isEmail("a@b.co"), true)
assert.equal(isEmail("a@b"), false)
assert.equal(isEmail("nope"), false)

assert.equal(isThaiPhone("0812345678"), true)
assert.equal(isThaiPhone("081234567"), false) // 9 หลัก
assert.equal(isZipcode("10500"), true)
assert.equal(isZipcode("1050"), false)

// validateInvoice — กรอกครบถูกต้อง → null
const ok = {
  ...emptyInvoice(),
  name: "สมชาย ใจดี",
  taxId: "1101700230708",
  email: "somchai@example.com",
  phone: "0812345678",
  address: { houseNo: "99/1", soi: "", road: "สุขุมวิท", subdistrict: "คลองเตย", district: "คลองเตย", province: "กรุงเทพมหานคร", zipcode: "10110" },
}
assert.equal(validateInvoice(ok), null)
assert.equal(validateInvoice({ ...ok, phone: "123" }), "เบอร์โทรต้องเป็นตัวเลข 10 หลัก")
assert.equal(validateInvoice({ ...ok, taxId: "1101700230707" }), "เลขบัตรประชาชนไม่ถูกต้อง (13 หลัก)")
assert.equal(validateInvoice({ ...ok, address: { ...ok.address, zipcode: "" } }), "รหัสไปรษณีย์ไม่ถูกต้อง (5 หลัก)")
// นิติบุคคลต้องมีสาขา
assert.equal(validateInvoice({ ...ok, type: "company", branch: "" }), "กรอกสาขา (เช่น สำนักงานใหญ่)")

assert.equal(buildAddressLine(ok.address), "99/1 ถนนสุขุมวิท ต.คลองเตย อ.คลองเตย จ.กรุงเทพมหานคร 10110")

console.log("invoice.check ✓")
