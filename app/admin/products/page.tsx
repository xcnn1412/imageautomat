import { redirect } from "next/navigation"
import Link from "next/link"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { isAdmin } from "@/lib/orders"
import { ProductManager } from "./product-manager"

export const dynamic = "force-dynamic"

export default async function AdminProductsPage() {
  const session = await auth()
  if (!isAdmin(session)) redirect("/")

  const rows = await prisma.product.findMany({
    where: { hidden: false },
    orderBy: [{ category: "asc" }, { id: "asc" }],
    select: { id: true, name: true, description: true, longDescription: true, features: true, specs: true, category: true, priceTHB: true, depositTHB: true, image: true, whtRate: true },
  })

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-6 flex gap-4 text-sm font-semibold">
          <Link href="/admin/orders" className="text-deep-space-blue/50 hover:text-tiger-orange">ออเดอร์</Link>
          <Link href="/admin/products" className="text-tiger-orange">สินค้า</Link>
          <Link href="/admin/custom-order" className="text-deep-space-blue/50 hover:text-tiger-orange">ออเดอร์พิเศษ</Link>
        </nav>

        <h1 className="font-serif text-3xl text-deep-space-blue">สินค้า · หัก ณ ที่จ่าย</h1>
        <p className="mb-6 mt-1 text-sm text-deep-space-blue/50">
          ตั้งอัตราหัก ณ ที่จ่ายต่อสินค้า — จ้างผลิต 3% · ค่าเช่า software 5% · อื่นๆ ไม่หัก · VAT 7% คิดทุกชิ้นอัตโนมัติ
        </p>

        <ProductManager products={rows} />
      </div>
    </main>
  )
}
