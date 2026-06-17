import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const dynamic = "force-dynamic"

const baht = (satang: number) => `฿${(satang / 100).toLocaleString("th-TH")}`
const STATUS: Record<string, { label: string; cls: string }> = {
    paid: { label: "จ่ายแล้ว", cls: "bg-green-100 text-green-700" },
    pending: { label: "รอชำระ", cls: "bg-amber-100 text-amber-700" },
    failed: { label: "ไม่สำเร็จ", cls: "bg-red-100 text-red-700" },
}

export default async function OrdersPage() {
    const session = await auth()
    if (!session?.user?.id) redirect("/api/auth/signin?callbackUrl=/account/orders")

    const orders = await prisma.order.findMany({
        where: { userId: session.user.id },
        include: { items: true },
        orderBy: { createdAt: "desc" },
    })

    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <section className="mx-auto max-w-3xl px-6 pb-24 pt-28 lg:pt-36">
                <h1 className="mb-8 font-serif text-3xl text-deep-space-blue lg:text-4xl">ออเดอร์ของฉัน</h1>

                {orders.length === 0 ? (
                    <p className="text-deep-space-blue/50">ยังไม่มีออเดอร์</p>
                ) : (
                    <div className="space-y-4">
                        {orders.map((o) => {
                            const s = STATUS[o.status] ?? STATUS.pending
                            return (
                                <article key={o.id} className="rounded-2xl border border-gray-100 p-5 shadow-sm">
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="text-xs text-deep-space-blue/40">{o.merchantOrderId}</span>
                                        <span className={`rounded-full px-3 py-1 text-xs font-bold ${s.cls}`}>{s.label}</span>
                                    </div>
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
                                    <div className="mt-3 flex justify-between border-t border-gray-100 pt-3 font-bold text-deep-space-blue">
                                        <span>ยอดรวม{o.discountAmount > 0 ? ` (ลด ${baht(o.discountAmount)})` : ""}</span>
                                        <span>{baht(o.total)}</span>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                )}
            </section>
            <Footer />
        </main>
    )
}
