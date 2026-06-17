// Seed สินค้าเข้า DB จากไฟล์ TS เดิม (catalogs.ts = ซื้อ, products.ts type rental = เช่า)
// รัน: npx prisma db seed   (หลัง migrate)
import { PrismaClient } from "@prisma/client"
import { catalogProducts } from "../data/catalogs"
import { products } from "../data/products"

const prisma = new PrismaClient()

async function main() {
    const buy = catalogProducts.map((p) => ({ p, category: "buy" as const }))
    const rent = products.filter((p) => p.type.includes("rental")).map((p) => ({ p, category: "rent" as const }))

    for (const { p, category } of [...buy, ...rent]) {
        await prisma.product.upsert({
            where: { id: p.id },
            // priceTHB/whtRate เป็นของ admin (DB) — re-seed ไม่ทับ. seed คุมแค่เนื้อหา
            update: { category, name: p.nameTh || p.name, description: p.description, image: p.src },
            create: { id: p.id, category, name: p.nameTh || p.name, description: p.description, image: p.src, priceTHB: p.priceTHB ?? null },
        })
    }
    console.log(`seeded ${buy.length + rent.length} products`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(() => prisma.$disconnect())
