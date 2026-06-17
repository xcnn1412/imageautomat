import { redirect } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MockPayButton } from "./mock-pay-button"
import { StatusBadge } from "@/components/order-status"

const isDev = process.env.NODE_ENV !== "production"

export const dynamic = "force-dynamic"

const baht = (satang: number) => `฿${(satang / 100).toLocaleString("th-TH")}`

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
                        {orders.map((o) => (
                            <article key={o.id} className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                                <Link href={`/account/orders/${o.id}`} className="block p-5">
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="text-xs text-deep-space-blue/40">{o.merchantOrderId}</span>
                                        <StatusBadge status={o.status} />
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
                                    <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 font-bold text-deep-space-blue">
                                        <span>ยอดรวม{o.discountAmount > 0 ? ` (ลด ${baht(o.discountAmount)})` : ""}</span>
                                        <span className="flex items-center gap-1">
                                            {baht(o.total)}
                                            <ChevronLeft className="h-4 w-4 rotate-180 text-deep-space-blue/30" />
                                        </span>
                                    </div>
                                </Link>
                                {isDev && o.status === "pending" && (
                                    <div className="px-5 pb-5">
                                        <MockPayButton merchantOrderId={o.merchantOrderId} />
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                )}
            </section>
            <Footer />
        </main>
    )
}
