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
- **`.env.local`** → `AUTH_SECRET`, `AUTH_GOOGLE_ID/SECRET`, `KSHER_HOST/TOKEN/NOTIFY_URL`, `ADMIN_EMAILS`
- `ADMIN_EMAILS` = อีเมล Google ของ admin (คั่นด้วย comma) — gate หน้า `/admin/*` ผ่าน `isAdmin()` ใน `lib/orders.ts`
- `ORIGIN_KEY` (Railway เท่านั้น) = ค่าลับที่ Cloudflare Transform Rule ใส่มาใน header `x-origin-key` — `proxy.ts` ปฏิเสธ 403 ถ้าไม่ตรง (ไม่ตั้ง = ปิดการตรวจ, request ที่ไม่มี `host` = ภายในของ next/image ปล่อยผ่าน) ชั้นเสริมของ Tunnel ดูหัวข้อ Infra
- Google OAuth redirect URI: `<origin>/api/auth/callback/google`

## สถาปัตยกรรม e-commerce (ส่วนที่ไม่ชัดในโค้ด)

**Flow:** เพิ่มลงตะกร้า (ต้อง login ก่อน) → `/checkout` (โค้ดส่วนลด + ฟอร์มใบกำกับภาษี บุคคล/นิติบุคคล + เลือกช่องทางจ่าย) → `POST /api/checkout` (คิด VAT/WHT) → Ksher → webhook mark `paid`. ลูกค้าดูออเดอร์ที่ `/account/orders` (คลิกการ์ด → `/account/orders/[id]` มี stepper สถานะ + ใบกำกับ)

**ข้อมูลสินค้า 2 ชั้น:** authoring อยู่ใน `data/catalogs.ts` (ซื้อ) + `data/products.ts` (เช่า, filter `type` มี "rental"); `prisma db seed` ดันเข้า `Product` table (runtime source ของ cart/checkout — หน้า `/shop-credit-card-payment` อ่านจาก Product table นี้โดยตรง). **seed ทับเฉพาะเนื้อหา (ชื่อ/รูป/คำอธิบาย) — `priceTHB`/`whtRate` เป็นของ admin (DB) ไม่ทับตอน re-seed**

**ราคา:** `lib/pricing.ts` — ราคา = **ก่อน VAT (ex-VAT)**. สินค้าที่ยังไม่ตั้ง `priceTHB` → fallback **มัดจำ ฿1,000/ชิ้น**. ตั้งราคา/ดูได้ที่หน้า admin `/admin/products`

**Cart:** เก็บใน DB (`CartItem` ผูก user) ไม่ใช่ localStorage — `components/cart/cart-context.tsx` ดึงจาก `/api/cart`. `CartDrawer` render **ครั้งเดียวที่ root** ใน `app/providers.tsx` (อย่าย้ายกลับเข้า nav — `fixed` จะโดน backdrop-blur/overflow ของ nav clip)

**ส่วนลด:** `DiscountCode` table — **ตั้งค่าผ่าน DB เท่านั้น (Prisma Studio) ไม่มีหน้า admin**. ตรวจ+คำนวณฝั่ง server ใน `/api/checkout` เท่านั้น (ห้าม trust client)

**ภาษี (VAT/WHT):** `lib/tax.ts` — `computeTax(lines, discount, isCompany)`. ราคาเป็น ex-VAT → ยอดจ่าย = `base + VAT 7% − WHT`. **WHT (หัก ณ ที่จ่าย) ต่อสินค้า** เก็บใน `Product.whtRate` (%) ตั้งที่ `/admin/products` (จ้างผลิต 3% / เช่า software 5% / อื่นๆ 0). หัก **เฉพาะผู้ซื้อนิติบุคคล** (`invoiceType==="company"`) + ชิ้นที่ `whtRate>0`. `computeTax` คืน `whtByRate[]` แยกตามอัตรา (ตรงกับใบ 50 ทวิ). Order snapshot `baseAmount/vatAmount/whtAmount` ตอนขาย. self-check: `npx tsx lib/tax.check.ts`

**สถานะออเดอร์:** `lib/orders.ts` `ORDER_STATUS` — `pending→paid→processing→shipped→completed` + `cancelled`/`failed`. `ORDER_FLOW` = ลำดับหลัก (stepper ใน `components/order-status.tsx`). webhook เซ็ต paid/failed; admin เปลี่ยนสถานะที่ `/admin/orders`

**ใบกำกับภาษี:** ฟอร์มที่ `/checkout` (บุคคล/นิติบุคคล) → เก็บใน Order `invoiceType/Name/TaxId/Address/Branch` (validate ทั้ง client + server). ยังไม่ออก PDF จริง แค่เก็บข้อมูล

**Admin (`/admin/*`, gate `isAdmin` ด้วย `ADMIN_EMAILS`):** `/admin/orders` (ดูทุกออเดอร์ + เปลี่ยนสถานะ + ดูใบกำกับ), `/admin/products` (ตั้งราคา/WHT ต่อสินค้า, ค้นหา/กรอง). API `/api/admin/*` ต้อง `isAdmin` เสมอ. **dev only:** ปุ่ม "จำลองจ่ายสำเร็จ" ที่ `/account/orders` ยิง `/api/dev/mock-pay` (ปิดอัตโนมัติบน production ด้วย `NODE_ENV`)

**ชำระเงิน:** `lib/payment-methods.ts` (client-safe, ไม่ import SDK) + `lib/payments.ts` (server, import SDK). dispatch ด้วย switch — `ksher_qr` (จริง, ShopeePay/PromptPay โผล่บน cashier) + `ksher_linkpay` (**ยัง mock**)

**ราคาเฉพาะ login:** หน้า `/shop` ซ่อนราคาถ้ายังไม่ login (`useSession`)

## จุดที่ยัง mock / ต้องทำต่อ (หา `ponytail:` ในโค้ด)
- Ksher **LinkPay ยัง mock** (คืน URL ปลอม) — `lib/payments.ts`
- Webhook `/api/pay/notify`: ลายเซ็นตรวจชัวร์ (SDK `checkSignature`) แต่ **ชื่อ field สถานะ** (`result`/`status`) เดาจากเอกสาร ต้องยืนยันกับ payload จริง (fail-safe: ไม่มีทาง mark paid เกินจริง)
- `priceTHB` ยังไม่ใส่หลายตัว → ใช้มัดจำ (ตั้งที่ `/admin/products`)
- `discountCode.usedCount` นับตอนเริ่มจ่าย (อาจ over-count ถ้า user ทิ้ง)
- ใบกำกับภาษี: เก็บข้อมูลแล้วแต่ยัง **ไม่ออก PDF** จริง; WHT หักจริงจากยอด Ksher → ลูกค้านิติบุคคลต้องส่งหนังสือรับรองหัก ณ ที่จ่าย (process นอกระบบ)

## Infra / กันโจมตี (DDoS 28–29 ต.ค. 2026 — อ่านก่อนแตะ DNS หรือ Railway networking)

**หลักการ: origin ต้องไม่มีทางเข้าจากอินเทอร์เน็ตเลย** ทุกชั้นให้ Cloudflare รับ
- **L3/L4** (IP/ICMP/TCP/UDP flood) — IP ที่โลกเห็นเป็นของ Cloudflare เท่านั้น รับให้ฟรีอัตโนมัติ ไม่มีอะไรต้องตั้ง ห้ามมี DNS record ใดชี้ IP/hostname ของ Railway (ยกเว้น MX ที่ผ่าน Cloudflare ไม่ได้)
- **L7** (HTTP flood) — Cloudflare Under Attack Mode, rate limit `/api/*` 20 req/10s/IP, Cache Rule `/_next/image`, Configuration Rule ยกเว้น `/api/pay/notify` (webhook Ksher ผ่าน challenge ไม่ได้)
- **ทางเข้า origin = Cloudflare Tunnel** ชื่อ `railway` → service `cloudflared` บน Railway โปรเจกต์เดียวกัน → private network `imageautomat.railway.internal:8080`. service `imageautomat` **ต้องไม่มี public domain ใด ๆ** (ไม่มี custom domain, ไม่มี `*.up.railway.app`) ถ้ามี = เปิดช่องให้ยิง IP ของ Railway ตรงด้วย Host header (เหตุการณ์ 29 ต.ค.: 2.9M req ใน 2 นาที ล่ม 2 นาทีทั้งที่ proxy.ts ตอบ 403 เพราะปริมาณถึง container ก่อน)

กฎเวลาเพิ่ม/ย้ายของ:
- subdomain ใหม่ → เพิ่ม route ใน tunnel (`http://<ชื่อ private>.railway.internal:<port>`) ห้ามเพิ่ม custom domain บน Railway ชื่อ private ดูที่ Settings → Networking ของ service นั้น (มักไม่ตรงชื่อ service เช่น dashboard = `divine-cat`)
- private network แยกตามโปรเจกต์ Railway → 1 โปรเจกต์ = 1 tunnel + 1 cloudflared (เช่น `imageLand_coupon-staff` อยู่โปรเจกต์ ai-local-relay ต้องใช้ tunnel แยก)
- subdomain 2 ชั้น (`a.b.imageautomat.com`) ใช้กับ Cloudflare proxy ไม่ได้ (cert ฟรีครอบชั้นเดียว) ตั้งชื่อชั้นเดียวแทน
- cloudflared บน Railway: image `cloudflare/cloudflared:latest`, start command `/usr/local/bin/cloudflared tunnel --no-autoupdate run` (Railway แทน ENTRYPOINT แบบ exec form ต้องใช้ path เต็ม และ redeploy ไม่ดึง config ใหม่ ต้อง trigger deploy ใหม่), env `TUNNEL_TOKEN` + `TUNNEL_TRANSPORT_PROTOCOL=http2`
- `proxy.ts` ล็อก origin ด้วย `ORIGIN_KEY` เป็นชั้นเสริม — ตรวจเฉพาะ request ที่มี `host` เพราะ request ภายในของ `next/image` (ดึงไฟล์ `public/`) ไม่มี header เลย ถ้าตรวจทุกตัวรูปทั้งเว็บจะ 400. เปลี่ยนค่าต้องเปลี่ยน Transform Rule บน Cloudflare และ env Railway พร้อมกัน
- `lib/rate-limit.ts` in-memory ต่อ instance — กัน spam DB/อีเมลเท่านั้น ไม่ใช่กัน DDoS
- log HTTP ของ Railway ไม่เห็น traffic ที่มาทาง tunnel (เห็นแต่ deploy log) และ `srcIp` ในนั้นใช้แยก "ยิงตรง" กับ "ผ่าน Cloudflare" ไม่ได้

ตรวจว่ายังปิดสนิท (รันได้เลย):
```bash
curl -sk -o /dev/null -w '%{http_code}
' -H 'Host: www.imageautomat.com' https://69.46.46.54/        # ต้อง 404 (edge ไม่รู้จัก) ถ้า 200/403 = มี public domain หลุดกลับมา
curl -sI https://www.imageautomat.com/ | grep -iE '^(HTTP|server|cf-mitigated)'                         # server: cloudflare และสถานะ 200 (หรือ 403 + cf-mitigated: challenge = Under Attack ท้า curl ปกติ) ถ้า 502/530 = tunnel/cloudflared ตาย
curl -s -o /dev/null -w '%{http_code}
' -X POST https://www.imageautomat.com/api/pay/notify           # ต้อง 400/401 จากแอป ถ้า 403/503 = Configuration Rule ยกเว้น webhook หลุด Ksher จะยิงไม่ถึง
```

## Convention
- ใช้ markdown link `[file](path)` อ้างไฟล์ (ไม่ใช้ backtick)
- API routes ที่ใช้ Prisma/SDK ต้อง `export const runtime = "nodejs"`
- ตรวจ build ด้วย `npm run build` ก่อนถือว่าเสร็จ
