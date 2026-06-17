import { notFound, redirect } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OrderStepper, StatusBadge } from "@/components/order-status"
import { MockPayButton } from "../mock-pay-button"
import { VAT_RATE, computeTax } from "@/lib/tax"

const isDev = process.env.NODE_ENV !== "production"

export const dynamic = "force-dynamic"

const baht = (satang: number) => `฿${(satang / 100).toLocaleString("th-TH")}`
const dt = (d: Date) => new Date(d).toLocaleString("th-TH", { dateStyle: "long", timeStyle: "short" })
const INV_TYPE: Record<string, string> = { personal: "บุคคลธรรมดา", company: "นิติบุคคล" }

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const session = await auth()
    if (!session?.user?.id) redirect(`/api/auth/signin?callbackUrl=/account/orders/${id}`)

    const o = await prisma.order.findFirst({
        where: { id, userId: session.user.id },
        include: { items: true },
    })
    if (!o) notFound()

    // WHT แยกตามอัตรา — recompute จาก snapshot (ได้ผลตรงกับ o.whtAmount)
    const { whtByRate } = computeTax(
        o.items.map((it) => ({ base: it.unitAmount * it.qty, whtRate: it.whtRate })),
        o.discountAmount,
        o.invoiceType === "company",
    )

    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <section className="mx-auto max-w-2xl px-6 pb-24 pt-28 lg:pt-36">
                <Link href="/account/orders" className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-deep-space-blue/60 hover:text-tiger-orange">
                    <ChevronLeft className="h-4 w-4" />
                    ออเดอร์ของฉัน
                </Link>

                <div className="mb-2 flex items-center justify-between gap-3">
                    <h1 className="font-serif text-2xl text-deep-space-blue lg:text-3xl">{o.merchantOrderId}</h1>
                    <StatusBadge status={o.status} size="lg" />
                </div>
                <p className="mb-8 text-sm text-deep-space-blue/40">สั่งซื้อเมื่อ {dt(o.createdAt)}</p>

                {/* สถานะ */}
                <div className="mb-8 rounded-2xl border border-gray-100 p-5 shadow-sm">
                    <OrderStepper status={o.status} />
                </div>

                {isDev && o.status === "pending" && (
                    <div className="mb-8">
                        <MockPayButton merchantOrderId={o.merchantOrderId} />
                    </div>
                )}

                {/* รายการสินค้า */}
                <h2 className="mb-3 text-sm font-bold text-deep-space-blue">รายการสินค้า</h2>
                <ul className="space-y-2 rounded-2xl border border-gray-100 p-5 text-sm text-deep-space-blue/80 shadow-sm">
                    {o.items.map((it) => (
                        <li key={it.id} className="flex justify-between">
                            <span>
                                {it.productName} × {it.qty}
                            </span>
                            <span>{baht(it.unitAmount * it.qty)}</span>
                        </li>
                    ))}
                    {o.discountAmount > 0 && (
                        <li className="flex justify-between border-t border-gray-100 pt-2 text-tiger-orange">
                            <span>ส่วนลด{o.discountCode ? ` (${o.discountCode})` : ""}</span>
                            <span>−{baht(o.discountAmount)}</span>
                        </li>
                    )}
                    {o.vatAmount > 0 ? (
                        <>
                            <li className="flex justify-between border-t border-gray-100 pt-2">
                                <span>ยอดก่อน VAT</span>
                                <span>{baht(o.baseAmount)}</span>
                            </li>
                            <li className="flex justify-between">
                                <span>VAT {VAT_RATE}%</span>
                                <span>+{baht(o.vatAmount)}</span>
                            </li>
                            {whtByRate.map((w) => (
                                <li key={w.rate} className="flex justify-between text-tiger-orange">
                                    <span>หัก ณ ที่จ่าย {w.rate}%</span>
                                    <span>−{baht(w.amount)}</span>
                                </li>
                            ))}
                        </>
                    ) : null}
                    <li className="flex justify-between border-t border-gray-100 pt-2 text-base font-bold text-deep-space-blue">
                        <span>ยอดชำระสุทธิ</span>
                        <span>{baht(o.total)}</span>
                    </li>
                </ul>

                {/* ใบกำกับภาษี */}
                {o.invoiceType && (
                    <>
                        <h2 className="mb-3 mt-8 text-sm font-bold text-deep-space-blue">ใบกำกับภาษี ({INV_TYPE[o.invoiceType] ?? o.invoiceType})</h2>
                        <div className="space-y-1 rounded-2xl border border-gray-100 p-5 text-sm text-deep-space-blue/80 shadow-sm">
                            <p className="font-semibold text-deep-space-blue">{o.invoiceName}</p>
                            <p>เลขผู้เสียภาษี: {o.invoiceTaxId}</p>
                            {o.invoiceBranch && <p>สาขา: {o.invoiceBranch}</p>}
                            <p className="whitespace-pre-line">{o.invoiceAddress}</p>
                        </div>
                    </>
                )}
            </section>
            <Footer />
        </main>
    )
}
