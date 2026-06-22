import { NextResponse, type NextRequest } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { unitTHBfor, fullTHB, depositTHB, hasFullPrice, type PriceMode } from "@/lib/pricing"

export const runtime = "nodejs"

function toMode(raw: unknown): PriceMode {
  return raw === "deposit" ? "deposit" : "full"
}

async function lines(userId: string) {
  const items = await prisma.cartItem.findMany({
    where: { userId, product: { deletedAt: null } }, // ซ่อนสินค้าที่ถูกลบไปแล้ว
    include: { product: true },
    orderBy: { createdAt: "asc" },
  })
  return items.map((i) => {
    const mode = toMode(i.priceMode)
    return {
      productId: i.productId,
      qty: i.qty,
      priceMode: mode,
      name: i.product.name,
      image: i.product.image,
      category: i.product.category,
      unitTHB: unitTHBfor(i.product, mode),
      fullTHB: fullTHB(i.product),
      depositTHB: depositTHB(i.product),
      whtRate: i.product.whtRate,
    }
  })
}

export async function GET() {
  const s = await auth()
  if (!s?.user?.id) return NextResponse.json({ items: [] })
  return NextResponse.json({ items: await lines(s.user.id) })
}

export async function POST(req: NextRequest) {
  const s = await auth()
  if (!s?.user?.id) return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  const { productId, priceMode } = await req.json()
  const product = await prisma.product.findUnique({ where: { id: Number(productId) } })
  if (!product || product.deletedAt) return NextResponse.json({ error: "product not found" }, { status: 404 })
  const mode = toMode(priceMode)
  // ยังไม่ตั้งราคาเต็มจำนวน (null/0) → ห้ามเพิ่มแบบ full (กัน fallback ฿1,000) ให้ไปสอบถามราคาแทน
  if (mode === "full" && !hasFullPrice(product))
    return NextResponse.json({ error: "สินค้านี้ยังไม่มีราคาเต็มจำนวน กรุณาติดต่อสอบถาม" }, { status: 400 })
  await prisma.cartItem.upsert({
    where: { userId_productId: { userId: s.user.id, productId: product.id } },
    update: { qty: { increment: 1 }, priceMode: mode },
    create: { userId: s.user.id, productId: product.id, qty: 1, priceMode: mode },
  })
  return NextResponse.json({ items: await lines(s.user.id) })
}

export async function PATCH(req: NextRequest) {
  const s = await auth()
  if (!s?.user?.id) return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  const { productId, qty, priceMode } = await req.json()
  const pid = Number(productId)
  if (qty <= 0) {
    await prisma.cartItem.deleteMany({ where: { userId: s.user.id, productId: pid } })
  } else {
    const data: { qty: number; priceMode?: string } = { qty: Math.max(1, Math.min(Number(qty) || 1, 99)) } // cap 1–99
    if (priceMode !== undefined) data.priceMode = toMode(priceMode)
    await prisma.cartItem.update({
      where: { userId_productId: { userId: s.user.id, productId: pid } },
      data,
    })
  }
  return NextResponse.json({ items: await lines(s.user.id) })
}

export async function DELETE(req: NextRequest) {
  const s = await auth()
  if (!s?.user?.id) return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  const { productId } = await req.json()
  await prisma.cartItem.deleteMany({ where: { userId: s.user.id, productId: Number(productId) } })
  return NextResponse.json({ items: await lines(s.user.id) })
}
