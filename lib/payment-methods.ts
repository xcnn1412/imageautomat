// client-safe: ไม่ import SDK — ใช้ได้ทั้งหน้า checkout (client) และ API (server)
export const PAYMENT_METHODS = [
    { id: "ksher_qr", label: "Ksher — QR / e-Wallet (ShopeePay, PromptPay, TrueMoney)" },
    { id: "ksher_linkpay", label: "Ksher LinkPay (เร็ว ๆ นี้)" },
] as const

export type PaymentMethod = (typeof PAYMENT_METHODS)[number]["id"]

export const isPaymentMethod = (m: unknown): m is PaymentMethod =>
    PAYMENT_METHODS.some((x) => x.id === m)
