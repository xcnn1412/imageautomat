import { Boxes, HeartHandshake, PartyPopper, CalendarDays, Package, type LucideIcon } from "lucide-react"

// ============================================================
// 📦 Product Types
// ============================================================

/** ประเภทการขาย: "rental" = เช่า, "buy" = ซื้อ */
export type ProductType = "rental" | "buy"

/** โครงสร้างข้อมูลสินค้า */
export interface Product {
    /** ID ไม่ซ้ำ (เพิ่มทีละ 1) */
    id: number
    /** path ของรูปสินค้า (ใส่ไว้ใน /public/models/images/) */
    src: string
    /** ชื่อสินค้าภาษาอังกฤษ */
    name: string
    /** ชื่อสินค้าภาษาไทย */
    nameTh: string
    /** ป้ายกำกับหมวดหมู่ เช่น "PHOTOBOX", "PHOTOBOOTH" */
    label: string
    /** คำอธิบายสั้น (แสดงบนการ์ด) */
    description: string
    /** คำอธิบายยาว (แสดงใน Modal) */
    longDescription: string
    /** ฟีเจอร์เด่น (แนะนำ 4 ข้อ) */
    features: string[]
    /** สเปค — กำหนด label และ value ได้อิสระ (แนะนำ 4 รายการ) */
    specs: { label: string; value: string }[]
    /** Badge ที่โชว์มุมบนซ้ายการ์ด (ใส่ null ถ้าไม่ต้องการ) */
    badge: string | null
    /** สี Tailwind ของ Badge เช่น "bg-tiger-orange", "bg-purple-600" */
    badgeColor: string
    /** หมวดหมู่ภายใน เช่น "classic", "premium", "360", "compact" */
    category: string
    /** ประเภทที่แสดง — ใส่ได้หลายค่า เช่น ["rental", "buy"] = แสดงทั้ง 2 แท็บ */
    type: ProductType[]
}

// ============================================================
// 🛒 ข้อมูลสินค้า — เพิ่ม/แก้ไขตรงนี้!
// ============================================================
// วิธีเพิ่มสินค้าใหม่:
// 1. Copy object สินค้าด้านล่าง
// 2. เปลี่ยน id เป็นตัวเลขถัดไป
// 3. ใส่รูปสินค้าใน /public/models/images/
// 4. อัปเดต src ให้ตรงกับชื่อไฟล์รูป
// 5. เลือก type: ["rental"], ["buy"], หรือ ["rental", "buy"]
// ============================================================

export const products: Product[] = [
    {
        id: 1,
        src: "/models/images/product-08-768x768.webp",
        name: "MODEL 1",
        nameTh: "คลาสสิค บูธ",
        label: "PHOTOBOX",
        description: "ตู้ถ่ายรูปแบบคลาสสิค ดีไซน์เรียบหรู เหมาะสำหรับงานแต่งงานและงานทางการ",
        longDescription: "ตู้ถ่ายรูปแบบคลาสสิคที่ออกแบบมาเพื่อความเรียบหรูและทันสมัย เหมาะสำหรับงานแต่งงาน งานเลี้ยงสังสรรค์ และงานทางการทุกรูปแบบ มาพร้อมฟังก์ชันครบครัน ใช้งานง่าย พิมพ์รูปได้ไม่จำกัด",
        features: ["ใช้พื้นที่น้อย", "พิมพ์ได้ไม่จำกัด", "warp ตกแต่งตู้ได้", "เหมาะสำหรับงานอีเวนต์"],
        specs: [{ label: "ขนาด", value: "60 x 60 x 180 cm" }, { label: "น้ำหนัก", value: "45 kg" }, { label: "เวลาพิมพ์", value: "< 10 วินาที" }, { label: "ความละเอียด", value: "Full HD" }],
        badge: "ขายดี",
        badgeColor: "bg-tiger-orange",
        category: "classic",
        type: ["rental"],
    },
    {
        id: 2,
        src: "/models/images/product-09-768x768.webp",
        name: "PHOTOBOX MODEL 2",
        nameTh: "โฟโต้บูธ โมเดลที่2",
        label: "PHOTOBOOTH",
        description: "โฟโต้บูธสไตล์วินเทจร่วมสมัย",
        longDescription: "โฟโต้บูธที่ผสมผสานสไตล์วินเทจเข้ากับเทคโนโลยีสมัยใหม่ หน้าจอสัมผัส Full HD ผ้าม่านเลือกสีได้ตามธีมงาน พร้อมไฟสตูดิโอระดับมืออาชีพ",
        features: ["หน้าจอสัมผัส Full HD", "ผ้าม่านเลือกสีได้", "ไฟสตูดิโอ", "ดีไซน์วินเทจร่วมสมัย"],
        specs: [{ label: "ขนาด", value: "70 x 70 x 200 cm" }, { label: "น้ำหนัก", value: "55 kg" }, { label: "เวลาพิมพ์", value: "< 10 วินาที" }, { label: "ความละเอียด", value: "Full HD" }],
        badge: "Premium",
        badgeColor: "bg-purple-600",
        category: "premium",
        type: ["rental"],
    },
    {
        id: 3,
        src: "/models/images/product-10-768x768.webp",
        name: "PHOTOBOX MODEL 3",
        nameTh: "โฟโต้บูธ โมเดลที่3",
        label: "PHOTOBOOTH",
        description: "แพลตฟอร์มหมุน 360 องศา สร้างวิดีโอสุดเท่ที่ไวรัลได้ง่าย",
        longDescription: "แพลตฟอร์มถ่ายวิดีโอ 360 องศาที่สร้างคอนเทนต์สุดเท่ วิดีโอ Slow-motion คุณภาพสูง แชร์ลงโซเชียลได้ทันที เหมาะสำหรับงานเปิดตัวสินค้าและอีเวนต์สุดพิเศษ",
        features: ["วิดีโอ Slow-motion", "แชร์โซเชียลทันที", "พื้นที่กว้าง 1.2 ม.", "เอฟเฟกต์พิเศษหลากหลาย"],
        specs: [{ label: "ขนาด", value: "120 cm (เส้นผ่านศูนย์กลาง)" }, { label: "น้ำหนัก", value: "35 kg" }, { label: "เวลาพิมพ์", value: "ประมวลผล 30 วินาที" }, { label: "ความละเอียด", value: "4K Video" }],
        badge: "ยอดนิยม",
        badgeColor: "bg-green-600",
        category: "360",
        type: ["rental"],
    },
    {
        id: 4,
        src: "/models/images/product-11-768x768.webp",
        name: "PHOTOBOX MODEL 4",
        nameTh: "โฟโต้บูธ โมเดลที่4",
        label: "PHOTOBOOTH",
        description: "ตู้ถ่ายรูปขนาดกะทัดรัด เคลื่อนย้ายง่าย เหมาะกับทุกขนาดงาน",
        longDescription: "ตู้ถ่ายรูปขนาดกะทัดรัดที่ออกแบบมาเพื่อความสะดวกในการเคลื่อนย้าย น้ำหนักเบา ติดตั้งง่าย ใน 15 นาที เหมาะกับทุกขนาดงาน ทั้งงานเล็กและงานใหญ่",
        features: ["น้ำหนักเบา", "ติดตั้งใน 15 นาที", "ประหยัดพื้นที่", "เคลื่อนย้ายง่าย"],
        specs: [{ label: "ขนาด", value: "50 x 50 x 170 cm" }, { label: "น้ำหนัก", value: "30 kg" }, { label: "เวลาพิมพ์", value: "< 10 วินาที" }, { label: "ความละเอียด", value: "Full HD" }],
        badge: null,
        badgeColor: "",
        category: "compact",
        type: ["rental"],
    },
    {
        id: 5,
        src: "/models/images/product-12-768x768.webp",
        name: "PHOTOBOX MODEL 5",
        nameTh: "โฟโต้บูธ โมเดลที่5",
        label: "PHOTOBOOTH",
        description: "ดีไซน์ย้อนยุค สไตล์วินเทจ สร้างบรรยากาศพิเศษให้งานของคุณ",
        longDescription: "ตู้ถ่ายรูปสไตล์วินเทจที่จะสร้างบรรยากาศย้อนยุคสุดพิเศษให้กับงานของคุณ มาพร้อมฟิลเตอร์วินเทจ กรอบรูปคลาสสิค และม่านแดงหรูหรา",
        features: ["ฟิลเตอร์วินเทจ", "กรอบรูปคลาสสิค", "ม่านแดงหรูหรา", "บรรยากาศย้อนยุค"],
        specs: [{ label: "ขนาด", value: "65 x 65 x 190 cm" }, { label: "น้ำหนัก", value: "50 kg" }, { label: "เวลาพิมพ์", value: "< 10 วินาที" }, { label: "ความละเอียด", value: "Full HD" }],
        badge: null,
        badgeColor: "",
        category: "vintage",
        type: ["rental"],
    },
    {
        id: 6,
        src: "/models/images/product-13-768x768.webp",
        name: "Camera 360",
        nameTh: "Camera 360",
        label: "PHOTOBOOTH",
        description: "กรอบไฟ LED เปลี่ยนสีได้ ปรับแต่งตามธีมงานได้อย่างอิสระ",
        longDescription: "ตู้ถ่ายรูปพร้อมกรอบไฟ LED เปลี่ยนสีได้ 16 ล้านสี ปรับแต่งตามธีมงานของคุณได้อย่างอิสระ ควบคุมง่ายผ่านรีโมท มาพร้อมเอฟเฟกต์เคลื่อนไหวสุดเท่",
        features: ["RGB LED 16 ล้านสี", "รีโมทควบคุม", "เอฟเฟกต์เคลื่อนไหว", "ปรับแต่งตามธีม"],
        specs: [{ label: "ขนาด", value: "120 cm (เส้นผ่านศูนย์กลาง)" }, { label: "น้ำหนัก", value: "40 kg" }, { label: "เวลาพิมพ์", value: "ประมวลผล 30 วินาที" }, { label: "ความละเอียด", value: "4K Video" }],
        badge: "ใหม่",
        badgeColor: "bg-sky-500",
        category: "led",
        type: ["rental"],
    },
    {
        id: 7,
        src: "/models/images/product-14-768x768.webp",
        name: "HIGH ANGLE PHOTOBOOTH",
        nameTh: "ตู้มุมสูง",
        label: "PHOTOBOOTH",
        description: "ชุดพรีเมียมครบเซ็ต รวมตู้ถ่ายรูป ไฟสตูดิโอ และอุปกรณ์ครบครัน",
        longDescription: "ชุดพรีเมียมครบเซ็ตที่รวมทุกอย่างไว้ในที่เดียว ตู้ถ่ายรูปมุมสูงที่ให้มุมมองใหม่ ไฟสตูดิโอระดับ Pro และอุปกรณ์ Props ครบครัน พร้อมให้บริการทันที",
        features: ["ชุดพร้อมใช้งาน", "ไฟสตูดิโอ Pro", "อุปกรณ์ Props ครบ", "มุมถ่ายสูงพิเศษ"],
        specs: [{ label: "ขนาด", value: "80 x 80 x 250 cm" }, { label: "น้ำหนัก", value: "60 kg" }, { label: "เวลาพิมพ์", value: "< 10 วินาที" }, { label: "ความละเอียด", value: "Full HD" }],
        badge: "Best Value",
        badgeColor: "bg-rose-500",
        category: "premium",
        type: ["rental"],
    },

    // ============================================================
    // ➕ เพิ่มสินค้าใหม่ด้านล่างนี้
    // ============================================================
    // {
    //     id: 8,
    //     src: "/models/images/your-image.webp",
    //     name: "YOUR PRODUCT NAME",
    //     nameTh: "ชื่อสินค้าภาษาไทย",
    //     label: "PHOTOBOOTH",
    //     description: "คำอธิบายสั้น",
    //     longDescription: "คำอธิบายยาวสำหรับ Modal",
    //     features: ["ฟีเจอร์ 1", "ฟีเจอร์ 2", "ฟีเจอร์ 3", "ฟีเจอร์ 4"],
    //     specs: [{ label: "ขนาด", value: "00 x 00 x 00 cm" }, { label: "น้ำหนัก", value: "00 kg" }, { label: "เวลาพิมพ์", value: "< 10 วินาที" }, { label: "ความละเอียด", value: "Full HD" }],
    //     badge: null,           // ใส่ null ถ้าไม่ต้องการ หรือใส่ "ใหม่", "ขายดี" ฯลฯ
    //     badgeColor: "",        // เช่น "bg-tiger-orange", "bg-purple-600", "bg-sky-500"
    //     category: "classic",
    //     type: ["rental", "buy"],  // เลือก: ["rental"], ["buy"], หรือ ["rental", "buy"]
    // },
]

// ============================================================
// 🏷️ Tab Configuration
// ============================================================

export interface Tab {
    id: ProductType
    label: string
    labelEn: string
    icon: LucideIcon
    description: string
}

export const tabs: Tab[] = [
    { id: "rental", label: "เช่า", labelEn: "Rental", icon: CalendarDays, description: "บริการเช่าตู้ถ่ายรูปพร้อมทีมงาน" },
    { id: "buy", label: "ซื้อ", labelEn: "Buy", icon: Package, description: "ซื้อตู้ถ่ายรูปเป็นเจ้าของ" },
]

// ============================================================
// 📊 Stats Configuration (Hero Section)
// ============================================================

export interface Stat {
    icon: LucideIcon
    value: string
    label: string
}

export const stats: Stat[] = [
    { icon: Boxes, value: "15+", label: "รุ่นให้เลือก" },
    { icon: HeartHandshake, value: "1,000", label: "ลูกค้าที่ใช้บริการ" },
    { icon: PartyPopper, value: "5,000", label: "งานที่ให้บริการ" },
]
