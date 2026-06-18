// Seed สินค้าเข้า DB จากไฟล์ TS เดิม (catalogs.ts = ซื้อ, products.ts type rental = เช่า)
// รัน: npx prisma db seed   (หลัง migrate)
import { PrismaClient } from "@prisma/client"
import { catalogProducts } from "../data/catalogs"
import { products } from "../data/products"

const prisma = new PrismaClient()

// Software products — bootstrap ครั้งแรก admin แก้ราคา/WHT ที่ /admin/products
const softwareProducts = [
  {
    id: 9001,
    category: "software" as const,
    name: "License ระยะสั้น — 3 เดือน",
    description: "Cloud Dashboard, ระบบชำระเงิน QR, วิเคราะห์รายได้ Real-time, แชร์โซเชียล",
    longDescription: "License ซอฟต์แวร์ IMAGEAUTOMAT ระยะสั้น 3 เดือน เหมาะสำหรับงานอีเวนต์ ทดลองธุรกิจ หรือช่วง High Season รองรับ Cloud Dashboard, ชำระเงิน QR, วิเคราะห์รายได้ Real-time และแชร์ภาพโซเชียลอัตโนมัติ",
    features: ["Cloud Dashboard จัดการทุกอย่างจากระยะไกล", "ระบบชำระเงิน QR พร้อมใช้งานทันที", "วิเคราะห์รายได้ Real-time", "แชร์ภาพโซเชียลอัตโนมัติ"],
    specs: [{ label: "ระยะเวลา", value: "3 เดือน" }, { label: "จำนวนตู้", value: "1 ตู้" }, { label: "Support", value: "Business hours" }, { label: "อัปเดต", value: "ฟรีตลอดอายุ License" }],
    image: "/images/software-dashboard.jpg",
  },
  {
    id: 9002,
    category: "software" as const,
    name: "License ระยะยาว — 1 ปี",
    description: "ครบทุกฟีเจอร์ + จัดการระยะไกล + ซัพพอร์ต 24/7 Priority",
    longDescription: "License ซอฟต์แวร์ IMAGEAUTOMAT ระยะยาว 1 ปี ครบทุกฟีเจอร์ จัดการตู้จากระยะไกลได้ไม่จำกัด ซัพพอร์ต 24/7 Priority เหมาะสำหรับผู้ประกอบการที่ต้องการความเสถียรและการสนับสนุนระดับมืออาชีพ",
    features: ["ครบทุกฟีเจอร์ License ระยะสั้น", "จัดการตู้จากระยะไกลไม่จำกัด", "ซัพพอร์ต 24/7 Priority", "อัปเกรดฟีเจอร์ใหม่ก่อนใคร"],
    specs: [{ label: "ระยะเวลา", value: "1 ปี" }, { label: "จำนวนตู้", value: "ไม่จำกัด" }, { label: "Support", value: "24/7 Priority" }, { label: "อัปเดต", value: "ฟรีตลอดอายุ License" }],
    image: "/images/software-dashboard.jpg",
  },
]

async function main() {
  const buy = catalogProducts.map((p) => ({ p, category: "buy" as const }))
  const rent = products.filter((p) => p.type.includes("rental")).map((p) => ({ p, category: "rent" as const }))

  for (const { p, category } of [...buy, ...rent]) {
    await prisma.product.upsert({
      where: { id: p.id },
      // priceTHB/depositTHB/whtRate เป็นของ admin (DB) — re-seed ไม่ทับ
      update: {
        category,
        name: p.nameTh || p.name,
        description: p.description,
        longDescription: p.longDescription || null,
        features: p.features ?? [],
        specs: p.specs ?? [],
        image: p.src,
      },
      create: {
        id: p.id,
        category,
        name: p.nameTh || p.name,
        description: p.description,
        longDescription: p.longDescription || null,
        features: p.features ?? [],
        specs: p.specs ?? [],
        image: p.src,
        priceTHB: p.priceTHB ?? null,
      },
    })
  }

  for (const sw of softwareProducts) {
    await prisma.product.upsert({
      where: { id: sw.id },
      update: {
        category: sw.category,
        name: sw.name,
        description: sw.description,
        longDescription: sw.longDescription,
        features: sw.features,
        specs: sw.specs,
        image: sw.image,
      },
      create: {
        id: sw.id,
        category: sw.category,
        name: sw.name,
        description: sw.description,
        longDescription: sw.longDescription,
        features: sw.features,
        specs: sw.specs,
        image: sw.image,
        whtRate: 5, // ซอฟต์แวร์ WHT 5% — admin เปลี่ยนได้ที่ /admin/products
      },
    })
  }

  console.log(`seeded ${buy.length + rent.length} products + ${softwareProducts.length} software`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
