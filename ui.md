# UI Description — IMAGEAUTOMAT

## Color Palette

| ชื่อ | Hex | การใช้งาน |
|---|---|---|
| `deep-space-blue` | `#023047` | สีหลัก, text, navbar, background section |
| `tiger-orange` | `#FB8500` | Accent, CTA, highlight, active state |
| `sky-blue-light` | `#8ECAE6` | สีรอง, gradient, icon accent |
| White | `#FFFFFF` | Background หลัก, card |

---

## Typography

- **Sans-serif**: `Montserrat` (EN) + `IBM Plex Sans Thai` (TH) — ใช้กับ heading หลักและ body text
- **Serif**: `Playfair Display` — ใช้กับ heading แบบ elegant (เช่น contact section, footer logo)
- Font weights ที่ใช้: `400`, `500`, `600`, `700`
- Heading ขนาดใหญ่ใช้ `tracking-tight`, label เล็กใช้ `tracking-[0.3em] uppercase`

---

## Layout

- **Max width**: `max-w-7xl` (1280px) + padding `px-6 lg:px-8`
- **Section padding**: `py-20 lg:py-32`
- แต่ละ section เป็น full-width วางซ้อนกันแนวตั้ง
- Responsive: mobile-first, breakpoints `sm / md / lg`

---

## Navigation (Navbar)

- Fixed top, `z-50`, height `h-20 lg:h-24`
- Background: `bg-white/80 backdrop-blur-xl` → เปลี่ยนเป็น `bg-white/95` เมื่อ scroll
- Logo: `Playfair Display`, "IMAGE" สี `deep-space-blue` + "AUTOMAT" สี `tiger-orange`
- **Active nav link**: orange gradient pill (`rounded-full`) + shimmer effect + Star icon
- **Inactive nav link**: `rounded-lg`, สีจาง, hover bg subtle
- Mobile: hamburger menu + slidedown panel

---

## Hero Section

- Background: `bg-white`
- Headline: `font-extrabold` ขนาด `text-5xl → text-8xl` responsive, สี `deep-space-blue`
- **Orange highlight block**: `<span>` คำสำคัญบน `bg-tiger-orange text-white px-4 py-2 rounded-xl`
- **Feature pills**: `rounded-full` สีพาสเทล (green / blue / purple / orange) ตาม category
- **Primary CTA**: `bg-deep-space-blue rounded-full` + arrow icon animate `translate-x` on hover
- **Secondary CTA**: `bg-white border-2 border-deep-space-blue/20 rounded-full`
- All elements: fade-in + `translateY` animation เมื่อ load (staggered delay)
- Mini stats row ด้านล่าง: icon + highlighted number + label

---

## Services Section (Cards Grid)

- Background: gradient จาก `sky-blue-light/10` → white
- Blurred decorative circles (absolute positioned, `blur-3xl`, opacity ต่ำ)
- **Card**: gradient background ตาม service เช่น `from-tiger-orange/20`, `rounded-2xl`, hover shadow + scale
- แต่ละ card: icon → title → description → stat badge → CTA link
- Grid: 4 column desktop, 2 tablet, 1 mobile
- Animation: Framer Motion `useInView` + stagger

---

## Stats Section

- Background: `bg-gradient-to-b from-deep-space-blue/5 via-deep-space-blue/10`
- Decorative dot grid pattern (SVG inline, `opacity-[0.02]`)
- **Count-up animation**: ตัวเลขนับขึ้นเมื่อ scroll เข้า viewport (ease-out cubic via `requestAnimationFrame`)
- 4 stat cards: icon (color accent) + large number + label

---

## Software Features Section

- Program cards มี **number badge** (`01`, `02`, `03`) ด้านบน
- แต่ละ card: gradient header bar + icon + tagline + feature bullet list + CTA link
- Payment partner slideshow row (1 แถว, auto-scroll)

---

## CTA Component (LINE / Phone)

- **LINE button**: `bg-[#06C755] rounded-full` + pulse glow animation + shimmer hover + wiggle icon
- **Phone cards**: `bg-white/60 backdrop-blur-sm border rounded-full`, hover border `tiger-orange`
- Phone icon: mini circle `bg-gradient-to-br from-tiger-orange`
- Divider: `<hr>`-style line + uppercase label ระหว่าง LINE button กับ phone cards

---

## Contact Section

- Background: `bg-[#023047]` (solid dark)
- 2-column layout: ซ้าย = copy + contact info icons, ขวา = form
- Section label uppercase: `text-tiger-orange tracking-[0.3em]`
- Heading: `Playfair Display` สีขาว, bilingual (TH + EN)
- Contact info items: square icon border `border-white/10` + `tiger-orange` icon
- Form fields: white/translucent border
- Submit button: filled `tiger-orange`

---

## Footer

- Background: white + `border-t border-[#023047]/5`
- 4-column grid: brand (col-span-2) + 2 link columns
- Logo: `font-serif` เหมือน navbar
- Social icons: `w-10 h-10 border`, hover เปลี่ยนสี `tiger-orange`
- Bottom bar: copyright + policy links

---

## Animation & Interaction Patterns

| Pattern | Implementation |
|---|---|
| Button press | `hover:scale-105 active:scale-95` |
| Shimmer | `translateX(-100% → 100%)` via/white overlay on hover |
| Scroll reveal | Framer Motion `useInView`, `once: true`, `initial opacity-0 y-20` |
| Count-up | `requestAnimationFrame` + ease-out cubic |
| Loading screen | Camera body + shutter blades SVG animation |
| Glow pulse | `animate-pulse-glow` CSS keyframe บน CTA button |

---

## Pages Structure

| Path | เนื้อหา |
|---|---|
| `/` | Home — Hero, Services, Ads, Software teaser, Stats, Video Gallery, Contact |
| `/product` | จำหน่ายตู้ — hero, product grid, modal, CTA |
| `/rental` | เช่าตู้ — packages, features, grid |
| `/software` | ซอฟต์แวร์ Imageland — features, video demo, compatibility |
| `/oem` | ผลิต OEM/ODM — hero, process, services |
| `/payment` | ระบบรับชำระเงิน |
| `/contact` | ติดต่อเรา |

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics + Google Analytics
