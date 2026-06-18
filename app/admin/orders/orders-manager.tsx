"use client"

import { useMemo, useState } from "react"
import { Search, Sparkles, ShoppingBag, Clock, User, CreditCard, ChevronRight } from "lucide-react"
import { StatusBadge } from "@/components/order-status"
import { ORDER_STATUS, ORDER_STATUSES, type OrderStatus } from "@/lib/orders"
import { PAYMENT_METHODS } from "@/lib/payment-methods"
import { StatusSelect } from "./status-select"

export type AdminOrder = {
  id: string
  merchantOrderId: string
  createdAt: string // ISO — format ฝั่ง client
  status: string
  paymentMethod: string
  isCustom: boolean
  userName: string | null
  userEmail: string | null
  userPhone: string | null
  invoiceType: string | null
  invoiceName: string | null
  invoiceTaxId: string | null
  invoiceBranch: string | null
  invoiceAddress: string | null
  invoiceEmail: string | null
  invoicePhone: string | null
  invoiceLineId: string | null
  discountCode: string | null
  discountAmount: number
  baseAmount: number
  vatAmount: number
  whtAmount: number
  total: number
  items: { id: string; productName: string; qty: number; unitAmount: number }[]
}

const INV_TYPE: Record<string, string> = { personal: "บุคคลธรรมดา", company: "นิติบุคคล" }
const PAY_LABEL: Record<string, string> = Object.fromEntries(PAYMENT_METHODS.map((m) => [m.id, m.label]))
const baht = (satang: number) => `฿${(satang / 100).toLocaleString("th-TH")}`
const dt = (s: string) => new Date(s).toLocaleString("th-TH", { dateStyle: "medium", timeStyle: "short" })

type StatusFilter = "all" | OrderStatus
type TypeFilter = "all" | "normal" | "custom"

export function OrdersManager({ orders }: { orders: AdminOrder[] }) {
  const [q, setQ] = useState("")
  const [status, setStatus] = useState<StatusFilter>("all")
  const [type, setType] = useState<TypeFilter>("all")

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    return orders.filter((o) => {
      if (status !== "all" && o.status !== status) return false
      if (type === "normal" && o.isCustom) return false
      if (type === "custom" && !o.isCustom) return false
      if (!term) return true
      // ค้นได้: ชื่อ/อีเมล/เบอร์ลูกค้า, เลขออเดอร์, ชื่อในใบกำกับ+เลขภาษี, ชื่อสินค้าในออเดอร์
      const hay = [o.merchantOrderId, o.userName, o.userEmail, o.userPhone, o.invoiceName, o.invoiceTaxId, ...o.items.map((it) => it.productName)]
      return hay.some((v) => v?.toLowerCase().includes(term))
    })
  }, [orders, q, status, type])

  const counts = useMemo(() => {
    const c: Record<string, number> = {}
    for (const o of orders) c[o.status] = (c[o.status] ?? 0) + 1
    return c
  }, [orders])

  const customCount = useMemo(() => orders.filter((o) => o.isCustom).length, [orders])

  const chips: { key: StatusFilter; label: string; n: number }[] = [
    { key: "all", label: "ทั้งหมด", n: orders.length },
    ...ORDER_STATUSES.map((s) => ({ key: s, label: ORDER_STATUS[s].label, n: counts[s] ?? 0 })),
  ]
  const typeTabs: { key: TypeFilter; label: string; n: number }[] = [
    { key: "all", label: "ทั้งหมด", n: orders.length },
    { key: "normal", label: "ปกติ", n: orders.length - customCount },
    { key: "custom", label: "พิเศษ", n: customCount },
  ]

  return (
    <div>
      {/* Controls */}
      <div className="mb-4 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-deep-space-blue/30" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ค้นหา ชื่อ · อีเมล · เบอร์ · เลขออเดอร์ · ชื่อสินค้า"
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm outline-none focus:border-tiger-orange"
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {chips.map((c) => {
            const active = status === c.key
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setStatus(c.key)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  active ? "bg-tiger-orange text-white" : "bg-white text-deep-space-blue/60 ring-1 ring-gray-200 hover:ring-tiger-orange/40"
                }`}
              >
                {c.label} <span className={active ? "opacity-80" : "opacity-50"}>{c.n}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm text-deep-space-blue/50">พบ {filtered.length} ออเดอร์</p>
        <div className="flex gap-1 rounded-xl bg-gray-100 p-1">
          {typeTabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setType(t.key)}
              className={`rounded-lg px-3 py-1 text-xs font-semibold transition-colors ${
                type === t.key ? "bg-white text-deep-space-blue shadow-sm" : "text-deep-space-blue/50 hover:text-deep-space-blue"
              }`}
            >
              {t.label} <span className="opacity-50">{t.n}</span>
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-200 bg-white py-16 text-center text-deep-space-blue/40">
          ไม่พบออเดอร์ที่ตรงกับเงื่อนไข
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((o) => (
            <OrderCard key={o.id} o={o} />
          ))}
        </div>
      )}
    </div>
  )
}

function OrderCard({ o }: { o: AdminOrder }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      {/* Header — first look: ประเภท · เลขออเดอร์ · เวลา · สถานะ */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-50 px-5 py-3">
        <div className="flex flex-wrap items-center gap-2.5">
          {o.isCustom ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-violet-100 px-2.5 py-1 text-[11px] font-bold text-violet-700">
              <Sparkles className="h-3 w-3" /> ออเดอร์พิเศษ
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-bold text-deep-space-blue/50">
              <ShoppingBag className="h-3 w-3" /> ออเดอร์ปกติ
            </span>
          )}
          <span className="font-mono text-sm font-bold text-deep-space-blue">{o.merchantOrderId}</span>
          <span className="flex items-center gap-1 text-xs text-deep-space-blue/40">
            <Clock className="h-3 w-3" /> {dt(o.createdAt)}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <StatusBadge status={o.status} />
          <StatusSelect id={o.id} status={o.status} />
        </div>
      </div>

      {/* Summary — first look: ใครซื้อ · จ่ายด้วยอะไร · ยอด */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="flex items-center gap-1.5 font-semibold text-deep-space-blue">
            <User className="h-4 w-4 text-deep-space-blue/40" />
            {o.userName ?? "—"}
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
            <CreditCard className="h-3 w-3" /> {PAY_LABEL[o.paymentMethod] ?? o.paymentMethod}
          </span>
          {o.invoiceType && (
            <span className={`rounded-md px-2 py-0.5 text-xs font-medium ${o.invoiceType === "company" ? "bg-indigo-50 text-indigo-700" : "bg-emerald-50 text-emerald-700"}`}>
              {INV_TYPE[o.invoiceType] ?? o.invoiceType}
            </span>
          )}
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-deep-space-blue">{baht(o.total)}</p>
          <p className="text-[11px] text-deep-space-blue/40">ยอดรับเข้าจริง</p>
        </div>
      </div>

      {/* Details — คลิกเพื่อดูข้อมูลผู้ซื้อ + ใบกำกับ + รายการ */}
      <details className="group border-t border-gray-50">
        <summary className="flex cursor-pointer list-none items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-tiger-orange hover:bg-tiger-orange/5 [&::-webkit-details-marker]:hidden">
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-open:rotate-90" />
          ดูข้อมูลผู้ซื้อ · ใบกำกับภาษี · รายการสินค้า
        </summary>

        <div className="space-y-4 px-5 pb-5 pt-1">
          {/* ผู้ซื้อ (บัญชี) */}
          <div className="rounded-xl bg-gray-50/70 p-3 text-sm">
            <p className="mb-1 text-xs font-bold text-deep-space-blue/50">ข้อมูลผู้ซื้อ (บัญชีที่สั่ง)</p>
            <p className="font-medium text-deep-space-blue/80">{o.userName ?? "—"}</p>
            <p className="text-deep-space-blue/55">
              {o.userEmail ?? "—"} · {o.userPhone ?? "ไม่มีเบอร์"}
            </p>
          </div>

          {/* ใบกำกับภาษี */}
          {o.invoiceType ? (
            <div className="rounded-xl border border-gray-100 p-3 text-sm">
              <div className="mb-1.5 flex items-center gap-2">
                <span className="text-xs font-bold text-deep-space-blue/50">ใบกำกับภาษี</span>
                <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${o.invoiceType === "company" ? "bg-indigo-100 text-indigo-700" : "bg-emerald-100 text-emerald-700"}`}>
                  {INV_TYPE[o.invoiceType] ?? o.invoiceType}
                </span>
              </div>
              <p className="font-semibold text-deep-space-blue">
                {o.invoiceName}
                {o.invoiceType === "company" && o.invoiceBranch ? ` · ${o.invoiceBranch}` : ""}
              </p>
              <p className="text-deep-space-blue/55">เลขผู้เสียภาษี {o.invoiceTaxId}</p>
              <p className="text-deep-space-blue/55">{o.invoiceAddress}</p>
              {(o.invoiceEmail || o.invoicePhone || o.invoiceLineId) && (
                <p className="mt-1 text-deep-space-blue/45">
                  ส่งใบกำกับ: {o.invoiceEmail ?? "—"}
                  {o.invoicePhone ? ` · โทร ${o.invoicePhone}` : ""}
                  {o.invoiceLineId ? ` · LINE ${o.invoiceLineId}` : ""}
                </p>
              )}
            </div>
          ) : (
            <p className="text-xs text-deep-space-blue/40">— ไม่มีข้อมูลใบกำกับภาษี —</p>
          )}

          {/* รายการสินค้า + สรุปยอด */}
          <div>
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
                  <span>
                    ก่อน VAT {baht(o.baseAmount)} · VAT {baht(o.vatAmount)}
                    {o.whtAmount > 0 ? ` · หัก ณ ที่จ่าย −${baht(o.whtAmount)}` : ""}
                  </span>
                </div>
              )}
              <div className="mt-1 flex justify-between font-bold text-deep-space-blue">
                <span>ยอดรับเข้าจริง (Ksher)</span>
                <span>{baht(o.total)}</span>
              </div>
              {o.whtAmount > 0 && (
                <p className="mt-0.5 text-right text-xs text-deep-space-blue/40">
                  ลูกค้าหัก ณ ที่จ่าย {baht(o.whtAmount)} — ได้รับเป็นใบ 50 ทวิ (ไม่ใช่เงินสด)
                </p>
              )}
            </div>
          </div>
        </div>
      </details>
    </article>
  )
}
