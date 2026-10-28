import { NextResponse, type NextRequest } from "next/server"

// ponytail: ล็อก origin ให้รับเฉพาะ request ที่ผ่าน Cloudflare (Transform Rule ใส่ header x-origin-key มาให้)
// กันคนหา IP ของ Railway แล้วยิงตรงข้าม Cloudflare — ไม่ตั้ง ORIGIN_KEY = ปิดการตรวจ (deploy ก่อนตั้ง rule ได้)
const KEY = process.env.ORIGIN_KEY

export async function proxy(req: NextRequest) {
  if (KEY && req.headers.get("x-origin-key") !== KEY) return new NextResponse(null, { status: 403 })
  return NextResponse.next()
}
