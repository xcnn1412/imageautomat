import { NextResponse, type NextRequest } from "next/server"
import { AwsClient } from "aws4fetch"
import { randomUUID } from "node:crypto"
import { auth } from "@/auth"
import { isAdmin } from "@/lib/orders"

export const runtime = "nodejs"

const MAX_BYTES = 5 * 1024 * 1024 // 5MB

// อัปโหลดรูปสินค้าขึ้น S3 (Tigris) — gate isAdmin, อัปผ่าน server (ไม่ต้องตั้ง CORS), คืน public URL
export async function POST(req: NextRequest) {
  const s = await auth()
  if (!isAdmin(s)) return NextResponse.json({ error: "forbidden" }, { status: 403 })

  const base = process.env.S3_PUBLIC_BASE
  const accessKeyId = process.env.S3_ACCESS_KEY_ID
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY
  if (!base || !accessKeyId || !secretAccessKey)
    return NextResponse.json({ error: "ยังไม่ได้ตั้งค่า S3 (ดู .env.local)" }, { status: 500 })

  const form = await req.formData().catch(() => null)
  const file = form?.get("file")
  if (!(file instanceof File)) return NextResponse.json({ error: "ไม่พบไฟล์" }, { status: 400 })
  if (!file.type.startsWith("image/")) return NextResponse.json({ error: "ต้องเป็นไฟล์รูปภาพ" }, { status: 400 })
  if (file.size > MAX_BYTES) return NextResponse.json({ error: "ไฟล์เกิน 5MB" }, { status: 400 })

  const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg"
  const key = `products/${randomUUID()}.${ext}`

  const client = new AwsClient({ accessKeyId, secretAccessKey, service: "s3", region: process.env.S3_REGION || "auto" })
  // public read เป็นระดับ bucket (Tigris ไม่สน per-object ACL) — เปิด Public ใน dashboard ครั้งเดียว
  const put = await client.fetch(`${base}/${key}`, {
    method: "PUT",
    body: Buffer.from(await file.arrayBuffer()),
    headers: { "Content-Type": file.type },
  })
  if (!put.ok) return NextResponse.json({ error: `อัปโหลดล้มเหลว (${put.status})` }, { status: 502 })

  return NextResponse.json({ url: `${base}/${key}` })
}
