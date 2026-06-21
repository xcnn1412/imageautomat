import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { isAdmin } from "@/lib/orders"
import { AdminNav } from "@/components/admin-nav"
import { CustomOrderForm } from "./custom-order-form"
import { CustomOrderList, type PendingCustomOrder } from "./custom-order-list"

export const dynamic = "force-dynamic"

export default async function AdminCustomOrderPage() {
  const session = await auth()
  if (!isAdmin(session)) redirect("/")

  // ออเดอร์พิเศษที่รอชำระ = hidden Product ที่ยังมี CartItem
  // (กดจ่ายแล้วตะกร้าถูกเคลียร์ → ไม่ขึ้นที่นี่อีก แต่ไปโผล่ /admin/orders)
  const rows = await prisma.cartItem.findMany({
    where: { product: { hidden: true } },
    include: { product: true, user: true },
    orderBy: { createdAt: "desc" },
  })

  const pending: PendingCustomOrder[] = rows.map((c) => ({
    productId: c.productId,
    name: c.product.name,
    description: c.product.description,
    longDescription: c.product.longDescription,
    image: c.product.image,
    priceTHB: c.product.priceTHB,
    depositTHB: c.product.depositTHB,
    whtRate: c.product.whtRate,
    priceMode: c.priceMode,
    qty: c.qty,
    createdAt: c.createdAt.toISOString(),
    userName: c.user.name,
    userEmail: c.user.email,
  }))

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <AdminNav active="/admin/custom-order" />

        <h1 className="font-serif text-3xl text-deep-space-blue">สร้างออเดอร์พิเศษ</h1>
        <p className="mb-6 mt-1 text-sm text-deep-space-blue/50">
          สร้างสินค้าเฉพาะกิจ (ซ่อนจากหน้าร้าน) แล้วใส่ลงตะกร้าลูกค้าโดยตรง — ลูกค้าเปิดตะกร้าแล้วชำระเงินได้ทันที
        </p>

        <CustomOrderForm />

        <CustomOrderList orders={pending} />
      </div>
    </main>
  )
}
