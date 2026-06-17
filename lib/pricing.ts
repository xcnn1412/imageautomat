// ราคากลาง ใช้ทั้ง cart / checkout / payment — แหล่งเดียว
// ponytail: สินค้าส่วนใหญ่ยังไม่ตั้ง priceTHB → ใช้ค่ามัดจำ จนกว่าจะใส่ราคาจริง
export const DEPOSIT_THB = 1000

export const unitSatang = (priceTHB: number | null | undefined) => (priceTHB ?? DEPOSIT_THB) * 100
export const unitTHB = (priceTHB: number | null | undefined) => priceTHB ?? DEPOSIT_THB
