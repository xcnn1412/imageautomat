// ============================================================
// 🛍️ Shop — รวมสินค้า 3 หมวดไว้ที่เดียว (ซื้อ / เช่า / software)
// ดึงจากข้อมูลเดิม: catalogProducts (/product), products (/rental)
// ============================================================
import { catalogProducts } from "./catalogs"
import { products } from "./products"

export type ShopCategory = "buy" | "rent" | "software"

export interface ShopItem {
    key: string
    category: ShopCategory
    productId?: number // มีเฉพาะสินค้าที่ซื้อผ่านตะกร้าได้ (buy)
    image: string
    name: string
    desc: string
    priceLabel: string
    cta: { label: string; href: string; external?: boolean }
}

const LINE = "https://lin.ee/Q5DSE1r"
const baht = (n: number) => `฿${n.toLocaleString("th-TH")}`

// ซื้อ — สินค้าจาก /product
const buyItems: ShopItem[] = catalogProducts.map((p) => ({
    key: `buy-${p.id}`,
    category: "buy",
    productId: p.id,
    image: p.src,
    name: p.nameTh || p.name,
    desc: p.description,
    priceLabel: p.priceTHB ? baht(p.priceTHB) : `มัดจำ ${baht(1000)}`,
    cta: { label: "เพิ่มลงตะกร้า", href: "#" },
}))

// เช่า — สินค้าจาก /rental (type มี "rental")
const rentItems: ShopItem[] = products
    .filter((p) => p.type.includes("rental"))
    .map((p) => ({
        key: `rent-${p.id}`,
        category: "rent",
        image: p.src,
        name: p.nameTh || p.name,
        desc: p.description,
        priceLabel: "เช่ารายวัน / อีเวนต์",
        cta: { label: "สอบถามเช่า", href: LINE, external: true },
    }))

// software — License (ponytail: ราคาเป็น placeholder จนกว่าจะตั้งราคาจริง)
const softwareItems: ShopItem[] = [
    {
        key: "sw-short",
        category: "software",
        image: "/images/software-dashboard.jpg",
        name: "License ระยะสั้น — 3 เดือน",
        desc: "Cloud Dashboard, ระบบชำระเงิน QR, วิเคราะห์รายได้ Real-time, แชร์โซเชียล",
        priceLabel: "สอบถามราคา",
        cta: { label: "สอบถาม License", href: LINE, external: true },
    },
    {
        key: "sw-long",
        category: "software",
        image: "/images/software-dashboard.jpg",
        name: "License ระยะยาว — 1 ปี",
        desc: "ครบทุกฟีเจอร์ + จัดการระยะไกล + ซัพพอร์ต 24/7 Priority",
        priceLabel: "สอบถามราคา",
        cta: { label: "สอบถาม License", href: LINE, external: true },
    },
]

export const shopItems: ShopItem[] = [...buyItems, ...rentItems, ...softwareItems]
