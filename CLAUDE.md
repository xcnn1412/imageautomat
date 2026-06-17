# IMAGEAUTOMAT — เว็บไซต์ตู้โฟโต้บูธ (Next.js)

เว็บการตลาด + e-commerce ของ IMAGEAUTOMAT (ตู้โฟโต้บูธไทย) ภาษาไทยเป็นหลัก

## Stack
- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind v4** (`@import "tailwindcss"` ใน `app/globals.css`, ไม่มี tailwind.config) — ใช้ `tw-animate-css`
- **Prisma 6** + PostgreSQL (Railway) — *ใช้ v6 ไม่ใช่ v7* (v7 บังคับ `prisma.config.ts` + driver adapter ซึ่งไม่จำเป็น)
- **Auth.js (NextAuth v5 beta)** — Google OAuth + Prisma adapter, database sessions
- **ชำระเงิน:** Ksher ผ่าน SDK `ksher-pay` (ไม่มี type — import มี `// @ts-expect-error`)
- UI: shadcn เดิมถูกลบเหลือ `components/ui/{button,input,textarea,accordion}` เท่านั้น

## คำสั่ง
```bash
npm run dev          # dev
npm run build        # build (รัน next-sitemap postbuild ด้วย)
npx prisma migrate dev --name X   # migrate (อ่าน DATABASE_URL จาก .env)
npx prisma db seed                # seed Product จาก TS (tsx prisma/seed.ts)
npx prisma studio                 # แก้ DB เช่น เพิ่ม DiscountCode
```

## ENV (gitignored)
- **`.env`** → `DATABASE_URL` เท่านั้น (Prisma CLI อ่านจากไฟล์นี้ ไม่อ่าน .env.local) — local ใช้ค่า `DATABASE_PUBLIC_URL` ของ Railway (proxy.rlwy.net), deploy ใช้ internal
- **`.env.local`** → `AUTH_SECRET`, `AUTH_GOOGLE_ID/SECRET`, `KSHER_HOST/TOKEN/NOTIFY_URL`
- Google OAuth redirect URI: `<origin>/api/auth/callback/google`

## สถาปัตยกรรม e-commerce (ส่วนที่ไม่ชัดในโค้ด)

**Flow:** เพิ่มลงตะกร้า (ต้อง login ก่อน) → `/checkout` (โค้ดส่วนลด + เลือกช่องทางจ่าย) → `POST /api/checkout` → Ksher → webhook mark `paid`

**ข้อมูลสินค้า 2 ชั้น:** authoring อยู่ใน `data/catalogs.ts` (ซื้อ) + `data/products.ts` (เช่า, filter `type` มี "rental"); `data/shop.ts` รวมเป็น `shopItems` ให้หน้า `/shop`; `prisma db seed` ดันเข้า `Product` table (runtime source ของ cart/checkout)

**ราคา:** `lib/pricing.ts` — สินค้าส่วนใหญ่ยังไม่มี `priceTHB` → fallback เป็น **มัดจำ ฿1,000/ชิ้น** จนกว่าจะตั้งราคาจริงใน `data/*.ts`

**Cart:** เก็บใน DB (`CartItem` ผูก user) ไม่ใช่ localStorage — `components/cart/cart-context.tsx` ดึงจาก `/api/cart`. `CartDrawer` render **ครั้งเดียวที่ root** ใน `app/providers.tsx` (อย่าย้ายกลับเข้า nav — `fixed` จะโดน backdrop-blur/overflow ของ nav clip)

**ส่วนลด:** `DiscountCode` table — **ตั้งค่าผ่าน DB เท่านั้น ไม่มีหน้า admin**. ตรวจ+คำนวณฝั่ง server ใน `/api/checkout` เท่านั้น (ห้าม trust client)

**ชำระเงิน:** `lib/payment-methods.ts` (client-safe, ไม่ import SDK) + `lib/payments.ts` (server, import SDK). dispatch ด้วย switch — `ksher_qr` (จริง, ShopeePay/PromptPay โผล่บน cashier) + `ksher_linkpay` (**ยัง mock**)

**ราคาเฉพาะ login:** หน้า `/shop` ซ่อนราคาถ้ายังไม่ login (`useSession`)

## จุดที่ยัง mock / ต้องทำต่อ (หา `ponytail:` ในโค้ด)
- Ksher **LinkPay ยัง mock** (คืน URL ปลอม) — `lib/payments.ts`
- Webhook `/api/pay/notify`: ลายเซ็นตรวจชัวร์ (SDK `checkSignature`) แต่ **ชื่อ field สถานะ** (`result`/`status`) เดาจากเอกสาร ต้องยืนยันกับ payload จริง (fail-safe: ไม่มีทาง mark paid เกินจริง)
- `priceTHB` ยังไม่ใส่ → ใช้มัดจำ
- `discountCode.usedCount` นับตอนเริ่มจ่าย (อาจ over-count ถ้า user ทิ้ง)

## Convention
- ใช้ markdown link `[file](path)` อ้างไฟล์ (ไม่ใช้ backtick)
- API routes ที่ใช้ Prisma/SDK ต้อง `export const runtime = "nodejs"`
- ตรวจ build ด้วย `npm run build` ก่อนถือว่าเสร็จ
