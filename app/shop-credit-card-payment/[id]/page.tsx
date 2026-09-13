import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { ProductDetailContent } from "./product-detail-content"

type Props = { params: Promise<{ id: string }> }

export const revalidate = 60 // ISR — cache หน้า 60 วิ ลดโหลด DB (สินค้าเปลี่ยนไม่บ่อย)

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const pid = Number(id)
  const product = Number.isInteger(pid) ? await prisma.product.findUnique({ where: { id: pid } }) : null
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

const SITE = "https://www.imageautomat.com"

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params
  const pid = Number(id)
  const product = Number.isInteger(pid) ? await prisma.product.findUnique({ where: { id: pid } }) : null
  if (!product || product.deletedAt || product.hidden) notFound()

  // schema.org Product → Google rich result (ราคา ex-VAT, ใส่ offer เฉพาะที่ตั้งราคาเต็มจำนวนแล้ว)
  const ld = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image?.startsWith("http") ? product.image : `${SITE}${product.image}`,
    brand: { "@type": "Brand", name: "IMAGEAUTOMAT" },
    ...(product.priceTHB && product.priceTHB > 0
      ? {
          offers: {
            "@type": "Offer",
            price: product.priceTHB,
            priceCurrency: "THB",
            availability: "https://schema.org/InStock",
            url: `${SITE}/shop/${product.id}`,
          },
        }
      : {}),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ProductDetailContent product={product} />
    </>
  )
}
