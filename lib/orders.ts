import type { Session } from "next-auth"

// flow: pending → paid → processing → shipped → completed
//       pending → failed (webhook) | ยกเลิกได้ก่อน completed → cancelled
export const ORDER_STATUS = {
  pending: { label: "รอชำระ", cls: "bg-amber-100 text-amber-700" },
  paid: { label: "จ่ายแล้ว", cls: "bg-green-100 text-green-700" },
  processing: { label: "กำลังเตรียม", cls: "bg-blue-100 text-blue-700" },
  shipped: { label: "จัดส่งแล้ว", cls: "bg-indigo-100 text-indigo-700" },
  completed: { label: "เสร็จสิ้น", cls: "bg-emerald-100 text-emerald-700" },
  cancelled: { label: "ยกเลิก", cls: "bg-gray-200 text-gray-600" },
  failed: { label: "ไม่สำเร็จ", cls: "bg-red-100 text-red-700" },
} as const

export type OrderStatus = keyof typeof ORDER_STATUS
export const ORDER_STATUSES = Object.keys(ORDER_STATUS) as OrderStatus[]
export const isOrderStatus = (s: string): s is OrderStatus => s in ORDER_STATUS

// ลำดับหลักของ flow (สำหรับ stepper) — cancelled/failed อยู่นอก flow
export const ORDER_FLOW: OrderStatus[] = ["pending", "paid", "processing", "shipped", "completed"]

export const asOrderStatus = (s: string): OrderStatus => (isOrderStatus(s) ? s : "pending")

// ออเดอร์พิเศษ (custom): Product.id >= ค่านี้ (ตั้งใน api/admin/custom-order)
export const CUSTOM_PRODUCT_ID_BASE = 900000
// OrderItem.productRef = "buy-900001" → เป็นสินค้าออเดอร์พิเศษไหม
export const isCustomProductRef = (ref: string): boolean => {
  const id = Number(ref.split("-").pop())
  return Number.isInteger(id) && id >= CUSTOM_PRODUCT_ID_BASE
}

// ponytail: gate admin ด้วย env ADMIN_EMAILS (คั่นด้วย comma) — ไม่ต้องเพิ่ม role column
// เพิ่ม role ใน DB เมื่อ admin เยอะ/ต้องจัดการผ่าน UI
export function isAdmin(session: Session | null): boolean {
  const email = session?.user?.email?.toLowerCase()
  if (!email) return false
  const admins = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
  return admins.includes(email)
}
