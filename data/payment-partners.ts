/* ────────────────────────────────────────────────────────────
   Payment Gateway Partners — ข้อมูลช่องทางชำระเงิน
   แก้ไขไฟล์นี้เพื่ออัปเดตโลโก้ / เพิ่ม-ลบช่องทาง
   ──────────────────────────────────────────────────────────── */

export interface PaymentPartner {
    /** ชื่อช่องทาง */
    name: string
    /** path ไปยังรูปโลโก้ (เก็บใน /public/assets/payment/) */
    src: string
}

export const paymentPartners: PaymentPartner[] = [
    { name: "PromptPay", src: "/assets/payment/promptpay.svg" },
    { name: "Visa", src: "/assets/payment/visa.svg" },
    { name: "Mastercard", src: "/assets/payment/mastercard.svg" },
    { name: "QR Code Payment", src: "/assets/payment/qr-payment.svg" },
    { name: "Thai QR Payment", src: "/assets/payment/thai-qr.svg" },
    { name: "TrueMoney Wallet", src: "/assets/payment/truemoney.svg" },
    { name: "Mobile Banking", src: "/assets/payment/mobile-banking.svg" },
    { name: "KBank", src: "/assets/payment/kbank.svg" },
    { name: "SCB", src: "/assets/payment/scb.svg" },
    { name: "Bangkok Bank", src: "/assets/payment/bbl.svg" },
    { name: "WeChat Pay", src: "/assets/payment/wechat-pay.svg" },
    { name: "Alipay", src: "/assets/payment/alipay.svg" },
    { name: "ShopeePay", src: "/assets/payment/shopeepay.svg" },
]
