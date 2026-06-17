import { Clock, CreditCard, Package, Truck, PartyPopper, XCircle, Ban, Check } from "lucide-react"
import { ORDER_STATUS, ORDER_FLOW, asOrderStatus, type OrderStatus } from "@/lib/orders"

const ICON: Record<OrderStatus, React.ComponentType<{ className?: string }>> = {
  pending: Clock,
  paid: CreditCard,
  processing: Package,
  shipped: Truck,
  completed: PartyPopper,
  cancelled: Ban,
  failed: XCircle,
}

export function StatusBadge({ status, size = "sm" }: { status: string; size?: "sm" | "lg" }) {
  const key = asOrderStatus(status)
  const s = ORDER_STATUS[key]
  const Icon = ICON[key]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-bold ${s.cls} ${
        size === "lg" ? "px-4 py-1.5 text-sm" : "px-3 py-1 text-xs"
      }`}
    >
      <Icon className={size === "lg" ? "h-4 w-4" : "h-3.5 w-3.5"} />
      {s.label}
    </span>
  )
}

// stepper แนวนอน — ไฮไลต์ถึงสถานะปัจจุบัน. cancelled/failed แสดงเป็นแบนเนอร์แทน
export function OrderStepper({ status }: { status: string }) {
  const key = asOrderStatus(status)

  if (key === "cancelled" || key === "failed") {
    const s = ORDER_STATUS[key]
    const Icon = ICON[key]
    return (
      <div className={`flex items-center gap-3 rounded-2xl px-5 py-4 font-bold ${s.cls}`}>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/60">
          <Icon className="h-5 w-5" />
        </span>
        {s.label}
      </div>
    )
  }

  const currentIdx = ORDER_FLOW.indexOf(key)
  const lastIdx = ORDER_FLOW.length - 1
  return (
    <ol className="flex">
      {ORDER_FLOW.map((st, i) => {
        const done = i < currentIdx // ผ่านมาแล้ว
        const isCurrent = i === currentIdx // อยู่ที่นี่
        const reached = i <= currentIdx // ถึงแล้ว (เติมสี)
        const Display = done ? Check : ICON[st] // เสร็จแล้วโชว์ ✓, ปัจจุบัน/ถัดไปโชว์ไอคอนสถานะ
        return (
          <li
            key={st}
            aria-current={isCurrent ? "step" : undefined}
            className="relative flex flex-1 flex-col items-center"
          >
            {/* เส้นเชื่อมไปสถานะถัดไป — absolute ที่กึ่งกลางวงกลม (top 20px) */}
            {i < lastIdx && (
              <span className="absolute left-1/2 top-5 h-1 w-full -translate-y-1/2 overflow-hidden rounded-full bg-gray-100">
                {/* ผ่านแล้ว — เติมสีไล่จากซ้าย→ขวา */}
                {i < currentIdx && (
                  <span
                    style={{ animationDelay: `${i * 130 + 250}ms` }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-tiger-orange to-amber-400 [animation:stepFill_.6s_ease-out_both]"
                  />
                )}
                {/* กำลังไปต่อ — แสงส้มวิ่งวน */}
                {isCurrent && (
                  <span className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-transparent via-tiger-orange to-transparent [animation:stepFlow_1.6s_ease-in-out_infinite]" />
                )}
              </span>
            )}

            <span
              style={{ animationDelay: `${i * 130}ms` }}
              className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                reached
                  ? "border-transparent bg-gradient-to-br from-tiger-orange to-amber-500 text-white shadow-lg shadow-tiger-orange/30 [animation:stepPopIn_.5s_ease-out_both]"
                  : "border-gray-200 bg-gray-50 text-gray-300"
              } ${isCurrent ? "scale-110 ring-4 ring-tiger-orange/20 [animation:stepGlow_2s_ease-in-out_infinite]" : ""}`}
            >
              <Display className="h-[18px] w-[18px]" />
            </span>
            <span
              className={`mt-2 whitespace-nowrap text-[11px] font-semibold transition-colors ${
                isCurrent ? "text-tiger-orange" : reached ? "text-deep-space-blue" : "text-gray-300"
              }`}
            >
              {ORDER_STATUS[st].label}
            </span>
          </li>
        )
      })}
    </ol>
  )
}
