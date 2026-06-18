import { redirect } from "next/navigation"
import Link from "next/link"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { isAdmin, isCustomProductRef } from "@/lib/orders"
import { OrdersManager, type AdminOrder } from "./orders-manager"

export const dynamic = "force-dynamic"

export default async function AdminOrdersPage() {
  const session = await auth()
  if (!isAdmin(session)) redirect("/")

  // ponytail: ดึงทั้งหมด (cap 1000) แล้วค้น/กรองฝั่ง client — instant search, พอสำหรับสเกลนี้
  // เกินพันออเดอร์ค่อยเปลี่ยนเป็น server-side search + pagination (where/skip/take + debounce)
  const rows = await prisma.order.findMany({
    include: { items: true, user: true },
    orderBy: { createdAt: "desc" },
    take: 1000,
  })

  const orders: AdminOrder[] = rows.map((o) => ({
    id: o.id,
    merchantOrderId: o.merchantOrderId,
    createdAt: o.createdAt.toISOString(),
    status: o.status,
    paymentMethod: o.paymentMethod,
    userName: o.user.name,
    userEmail: o.user.email,
    userPhone: o.user.phone,
    invoiceType: o.invoiceType,
    invoiceName: o.invoiceName,
    invoiceTaxId: o.invoiceTaxId,
    invoiceBranch: o.invoiceBranch,
    invoiceAddress: o.invoiceAddress,
    invoiceEmail: o.invoiceEmail,
    invoicePhone: o.invoicePhone,
    invoiceLineId: o.invoiceLineId,
    discountCode: o.discountCode,
    discountAmount: o.discountAmount,
    baseAmount: o.baseAmount,
    vatAmount: o.vatAmount,
    whtAmount: o.whtAmount,
    total: o.total,
    isCustom: o.items.some((it) => isCustomProductRef(it.productRef)),
    items: o.items.map((it) => ({ id: it.id, productName: it.productName, qty: it.qty, unitAmount: it.unitAmount })),
  }))

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-6 flex gap-4 text-sm font-semibold">
          <Link href="/admin/orders" className="text-tiger-orange">ออเดอร์</Link>
          <Link href="/admin/products" className="text-deep-space-blue/50 hover:text-tiger-orange">สินค้า</Link>
          <Link href="/admin/custom-order" className="text-deep-space-blue/50 hover:text-tiger-orange">ออเดอร์พิเศษ</Link>
        </nav>
        <h1 className="mb-6 font-serif text-3xl text-deep-space-blue">จัดการออเดอร์</h1>

        <OrdersManager orders={orders} />
      </div>
    </main>
  )
}
