import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { isAdmin, CUSTOM_PRODUCT_ID_BASE } from "@/lib/orders"
import { AdminNav } from "@/components/admin-nav"
import { ProductManager } from "./product-manager"

export const dynamic = "force-dynamic"

export default async function AdminProductsPage() {
  const session = await auth()
  if (!isAdmin(session)) redirect("/")

  // โชว์สินค้า catalog + ที่ admin สร้างเอง (รวมที่ซ่อน/อยู่ถังขยะ) แต่กันออเดอร์พิเศษ (id >= CUSTOM_BASE) ไม่ให้ปน
  const rows = await prisma.product.findMany({
    where: { id: { lt: CUSTOM_PRODUCT_ID_BASE } },
    orderBy: [{ category: "asc" }, { id: "asc" }],
    select: { id: true, name: true, description: true, longDescription: true, features: true, specs: true, category: true, priceTHB: true, depositTHB: true, image: true, whtRate: true, hidden: true, deletedAt: true },
  })

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <AdminNav active="/admin/products" />

        <h1 className="font-serif text-3xl text-deep-space-blue">สินค้า · หัก ณ ที่จ่าย</h1>
        <p className="mb-6 mt-1 text-sm text-deep-space-blue/50">
          ตั้งอัตราหัก ณ ที่จ่ายต่อสินค้า — จ้างผลิต 3% · ค่าเช่า software 5% · อื่นๆ ไม่หัก · VAT 7% คิดทุกชิ้นอัตโนมัติ
        </p>

        <ProductManager products={rows} />
      </div>
    </main>
  )
}
