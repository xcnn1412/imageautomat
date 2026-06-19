export const LINE_OA_URL = "https://lin.ee/Q5DSE1r"
export const LINE_OA_CAREERS_URL = "https://lin.ee/zqXLAWT"

// โดเมนจริง — ใช้สร้าง redirect URL ของ Ksher. req.nextUrl.origin หลังพร็อกซี Railway ได้ localhost
// dev ใช้ origin จริงของ request (localhost:3000), prod ใช้โดเมนคงที่ (override ด้วย env ได้)
export const siteOrigin = (reqOrigin: string) =>
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    (process.env.NODE_ENV === "production" ? "https://www.imageautomat.com" : reqOrigin)
