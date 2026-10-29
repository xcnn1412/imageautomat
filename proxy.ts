import { NextResponse, type NextRequest } from "next/server"

// ponytail: ล็อก origin ให้รับเฉพาะ request ที่ผ่าน Cloudflare (Transform Rule ใส่ header x-origin-key มาให้)
// กันคนหา IP ของ Railway แล้วยิงตรงข้าม Cloudflare — ไม่ตั้ง ORIGIN_KEY = ปิดการตรวจ (deploy ก่อนตั้ง rule ได้)
const KEY = process.env.ORIGIN_KEY

export async function proxy(req: NextRequest) {
  // ponytail: request ที่ไม่มี host = request ภายในของ next/image (fetchInternalImage สร้าง mock request ไม่ใส่ header)
  // ต้องปล่อยผ่าน ไม่งั้นรูปใน public/ ขึ้น 400 ทั้งเว็บ — request จากข้างนอกผ่าน edge ของ Railway มี host เสมอ
  const external = req.headers.has("host")
  if (KEY && external && req.headers.get("x-origin-key") !== KEY) return new NextResponse(null, { status: 403 })
  return NextResponse.next()
}
