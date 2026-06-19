import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { ProductDetailContent } from "./product-detail-content"

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const product = await prisma.product.findUnique({ where: { id: Number(id) } })
  if (!product) return { title: "ไม่พบสินค้า" }
  return {
    title: `${product.name} — IMAGEAUTOMAT`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.image ? [{ url: product.image }] : [],
    },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params
  const product = await prisma.product.findUnique({ where: { id: Number(id) } })
  if (!product || product.deletedAt || product.hidden) notFound()

  return <ProductDetailContent product={product} />
}
