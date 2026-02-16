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
    { name: "Bank Partner 01", src: "/assets/payment/bnk-01.png" },
    { name: "Bank Partner 02", src: "/assets/payment/bnk-02.png" },
    { name: "Bank Partner 03", src: "/assets/payment/bnk-03.png" },
    { name: "Bank Partner 04", src: "/assets/payment/bnk-04.png" },
    { name: "Bank Partner 05", src: "/assets/payment/bnk-05.png" },
    { name: "Bank Partner 06", src: "/assets/payment/bnk-06.png" },
    { name: "Bank Partner 07", src: "/assets/payment/bnk-07.png" },
    { name: "Bank Partner 08", src: "/assets/payment/bnk-08.png" },
    { name: "Bank Partner 09", src: "/assets/payment/bnk-09.png" },
    { name: "Bank Partner 10", src: "/assets/payment/bnk-10.png" },
    { name: "Bank Partner 11", src: "/assets/payment/bnk-11.png" },
    { name: "Bank Partner 12", src: "/assets/payment/bnk-12.png" },
    { name: "Bank Partner 13", src: "/assets/payment/bnk-13.png" },
    { name: "Bank Partner 14", src: "/assets/payment/bnk-14.png" },
    { name: "Bank Partner 15", src: "/assets/payment/bnk-15.png" },
]
