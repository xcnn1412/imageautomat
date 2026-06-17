import { NextResponse, type NextRequest } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { unitTHB } from "@/lib/pricing"

export const runtime = "nodejs"

async function lines(userId: string) {
  const items = await prisma.cartItem.findMany({
    where: { userId },
    include: { product: true },
    orderBy: { createdAt: "asc" },
  })
  return items.map((i) => ({
    productId: i.productId,
    qty: i.qty,
    name: i.product.name,
    image: i.product.image,
    category: i.product.category,
    unitTHB: unitTHB(i.product.priceTHB),
    whtRate: i.product.whtRate,
  }))
}

export async function GET() {
  const s = await auth()
  if (!s?.user?.id) return NextResponse.json({ items: [] })
  return NextResponse.json({ items: await lines(s.user.id) })
}

export async function POST(req: NextRequest) {
  const s = await auth()
  if (!s?.user?.id) return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  const { productId } = await req.json()
  const product = await prisma.product.findUnique({ where: { id: Number(productId) } })
  if (!product) return NextResponse.json({ error: "product not found" }, { status: 404 })
  await prisma.cartItem.upsert({
    where: { userId_productId: { userId: s.user.id, productId: product.id } },
    update: { qty: { increment: 1 } },
    create: { userId: s.user.id, productId: product.id, qty: 1 },
  })
  return NextResponse.json({ items: await lines(s.user.id) })
}

export async function PATCH(req: NextRequest) {
  const s = await auth()
  if (!s?.user?.id) return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  const { productId, qty } = await req.json()
  const pid = Number(productId)
  if (qty <= 0) {
    await prisma.cartItem.deleteMany({ where: { userId: s.user.id, productId: pid } })
  } else {
    await prisma.cartItem.update({
      where: { userId_productId: { userId: s.user.id, productId: pid } },
      data: { qty: Number(qty) },
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
