import { redirect } from "next/navigation"
import Link from "next/link"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { isAdmin } from "@/lib/orders"
import { StatusBadge } from "@/components/order-status"
import { StatusSelect } from "./status-select"

const INV_TYPE: Record<string, string> = { personal: "บุคคลธรรมดา", company: "นิติบุคคล" }

export const dynamic = "force-dynamic"

const baht = (satang: number) => `฿${(satang / 100).toLocaleString("th-TH")}`
const dt = (d: Date) => new Date(d).toLocaleString("th-TH", { dateStyle: "medium", timeStyle: "short" })

export default async function AdminOrdersPage() {
  const session = await auth()
  if (!isAdmin(session)) redirect("/")

  const orders = await prisma.order.findMany({
    include: { items: true, user: true },
    orderBy: { createdAt: "desc" },
  })

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-6 flex gap-4 text-sm font-semibold">
          <Link href="/admin/orders" className="text-tiger-orange">ออเดอร์</Link>
          <Link href="/admin/products" className="text-deep-space-blue/50 hover:text-tiger-orange">สินค้า</Link>
        </nav>
        <div className="mb-8 flex items-end justify-between">
          <h1 className="font-serif text-3xl text-deep-space-blue">จัดการออเดอร์</h1>
          <span className="text-sm text-deep-space-blue/50">{orders.length} ออเดอร์</span>
        </div>

        {orders.length === 0 ? (
          <p className="text-deep-space-blue/50">ยังไม่มีออเดอร์</p>
        ) : (
          <div className="space-y-4">
            {orders.map((o) => (
                <article key={o.id} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <span className="font-mono text-sm font-bold text-deep-space-blue">{o.merchantOrderId}</span>
                      <span className="ml-3 text-xs text-deep-space-blue/40">{dt(o.createdAt)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <StatusBadge status={o.status} />
                      <StatusSelect id={o.id} status={o.status} />
                    </div>
                  </div>

                  <div className="mb-3 text-sm text-deep-space-blue/60">
                    {o.user.name ?? "—"} · {o.user.email ?? "—"} · {o.user.phone ?? "ไม่มีเบอร์"} · {o.paymentMethod}
                  </div>

                  {o.invoiceType && (
                    <div className="mb-3 rounded-xl bg-gray-50 p-3 text-xs text-deep-space-blue/70">
                      <span className="font-bold">ใบกำกับภาษี ({INV_TYPE[o.invoiceType] ?? o.invoiceType}):</span>{" "}
                      {o.invoiceName} · {o.invoiceTaxId}
                      {o.invoiceBranch ? ` · ${o.invoiceBranch}` : ""} · {o.invoiceAddress}
                    </div>
                  )}

                  <ul className="space-y-1 text-sm text-deep-space-blue/80">
                    {o.items.map((it) => (
                      <li key={it.id} className="flex justify-between">
                        <span>
                          {it.productName} × {it.qty}
                        </span>
                        <span>{baht(it.unitAmount * it.qty)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 border-t border-gray-100 pt-3 text-sm">
                    {o.discountAmount > 0 && (
                      <div className="flex justify-between text-tiger-orange">
                        <span>ส่วนลด{o.discountCode ? ` (${o.discountCode})` : ""}</span>
                        <span>−{baht(o.discountAmount)}</span>
                      </div>
                    )}
                    {o.vatAmount > 0 && (
                      <div className="flex justify-between text-deep-space-blue/60">
                        <span>ก่อน VAT {baht(o.baseAmount)} · VAT {baht(o.vatAmount)}{o.whtAmount > 0 ? ` · หัก ณ ที่จ่าย −${baht(o.whtAmount)}` : ""}</span>
                      </div>
                    )}
                    <div className="mt-1 flex justify-between font-bold text-deep-space-blue">
                      <span>ยอดชำระสุทธิ</span>
                      <span>{baht(o.total)}</span>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        )}
      </div>
    </main>
  )
}
