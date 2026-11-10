"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// ข้อมูลฟีเจอร์ อ้างอิงเอกสาร "ฟีเจอร์ใหม่ของ ImageLand Photobooth"
const CATEGORIES: { title: string; items: [string, string][] }[] = [
    {
        title: "AI และลูกเล่นภาพ/วิดีโอ",
        items: [
            ["AI Face Swap (ภาพ)", "ใส่ใบหน้าของแขกลงในภาพที่เจ้าของตู้เตรียมไว้โดยอัตโนมัติ ประมวลผลบนเครื่องของตู้เอง เลือกใช้ CPU หรือการ์ดจอได้ตามสเปก ปรับระดับรายละเอียดใบหน้าและความคมชัดได้ พร้อมตัวช่วยแยกส่วนใบหน้าให้กลมกลืนกับภาพต้นฉบับ"],
            ["Face Swap Video", "แขกเลือกคลิปต้นแบบ ถ่ายรูปหนึ่งใบ แล้วรับคลิปที่มีใบหน้าตัวเองในทุกฉากที่พบใบหน้า พร้อมเสียงจากคลิปเดิม รับชมได้จากหน้า QR Code และโหมดนี้ไม่ต้องใช้เฟรม"],
            ["วาดภาพด้วยแปรง 6 แบบ", "แขกตกแต่งภาพได้ด้วยแปรง 6 แบบ ได้แก่ ปากกา ดินสอ มาร์กเกอร์ นีออน สีเทียน และไฮไลต์ พร้อมยางลบและปุ่มย้อนกลับ"],
            ["ปรับผิวเนียน", "ตกแต่งผิวในภาพให้ดูเรียบเนียนขึ้น เจ้าของตู้เลือกเปิดหรือปิดได้"],
            ["ลบพื้นหลังและฉากเขียว", "ตัดพื้นหลังออกจากภาพ หรือปรับค่าฉากเขียวจากหน้าตั้งค่าของตู้"],
            ["เฟรมเคลื่อนไหว MP4", "ใช้วิดีโอพื้นเขียวเป็นเฟรมเคลื่อนไหวได้ โดยระบบตัดสีเขียวให้"],
            ["เอฟเฟกต์และ Keyframe", "เพิ่มเอฟเฟกต์ซ้อนทับ และกำหนดการเคลื่อนไหวตามเวลาด้วยคีย์เฟรม"],
            ["ฟิลเตอร์สีวิดีโอ", "ปรับโทนสีของวิดีโอให้เข้ากับภาพถ่าย"],
            ["ช่องภาพหลายรูปทรง", "ออกแบบเฟรมให้มีช่องภาพรูปทรงหลากหลาย รวมถึงรูปหัวใจ"],
            ["สุ่มภาพแบบ Gacha", "อัปโหลดภาพ กำหนดเปอร์เซ็นต์โอกาสออกของแต่ละภาพ และตั้งระบบการันตี (Pity) ได้"],
            ["ซ้อน Artwork บนรูปถ่าย", "ใส่อาร์ตเวิร์กลงบนภาพที่แขกถ่ายโดยตรง"],
        ],
    },
    {
        title: "โหมดใช้งานและประสบการณ์แขก",
        items: [
            ["Guestbook — บันทึกคำอวยพร", "เหมาะกับงานแต่งงานและงานอีเวนต์ แขกกดอัด นับถอยหลัง 3-2-1 พูดข้อความอวยพรตามเวลาที่กำหนด หยุดก่อนเวลาได้ แล้วถ่ายรูปต่อทันที ผู้ดูแลเลือกไมโครโฟนและดูระดับเสียงได้จากหน้าตั้งค่า"],
            ["User Upload", "แขกใช้รูปของตัวเองแทนการถ่ายสดที่ตู้ จึงเปิดบริการได้โดยไม่ต้องใช้กล้อง"],
            ["Event Mode", "เปิดตู้แบบไม่เก็บเงินจากแขกได้ เหมาะกับงานที่ผู้จัดเป็นผู้สนับสนุนค่าใช้จ่าย"],
            ["หลายกล้องพร้อมกัน", "เชื่อมต่อและควบคุมหลายกล้องจากตู้เดียว พร้อมระบบทดสอบถ่ายและจัดการแหล่งภาพ"],
            ["รองรับจอแนวตั้ง/แนวนอน", "ตั้งค่าการแสดงผลเป็นแนวตั้ง แนวนอน หรือให้ระบบเลือกอัตโนมัติ"],
        ],
    },
    {
        title: "กล้องและเครื่องพิมพ์",
        items: [
            ["Canon และ Sony", "รองรับกล้อง Canon และ Sony พร้อมบันทึกค่าตั้งกล้องเป็นพรีเซ็ตไว้ใช้ซ้ำ"],
            ["DNP DS-RX1 และ Epson L-Series", "รองรับเครื่องพิมพ์ภาพ DNP DS-RX1 และ Epson L-Series"],
            ["เครื่องพิมพ์ใบเสร็จ", "พิมพ์ใบเสร็จจากตู้ได้โดยตรง"],
            ["แจ้งกระดาษใกล้หมด", "ดูจำนวนภาพคงเหลือของเครื่อง DNP จากแดชบอร์ด และรับอีเมลแจ้งเตือนเมื่อเหลือ 50, 20, 10, 5, 3, 2 และ 1 ใบ"],
            ["ตรวจกระดาษก่อนรับเงิน", "ตู้ตรวจกระดาษก่อนแขกชำระเงิน แขกจึงไม่ต้องจ่ายเงินในกรณีที่ตู้พิมพ์งานไม่ได้"],
        ],
    },
    {
        title: "ชำระเงิน โปรโมชัน และคูปอง",
        items: [
            ["QR และ Mobile Banking", "ชำระผ่าน Ksher ตามบัญชีของเจ้าของตู้ — PromptPay, K PLUS, SCB Easy, KMA และ Bangkok Bank"],
            ["e-Wallet", "TrueMoney, LINE Pay, AirPay, Alipay, Alipay+ และ WeChat Pay ผ่าน Ksher"],
            ["ระบบโปรโมชัน", "ตั้งส่วนลดเป็นเปอร์เซ็นต์หรือจำนวนเงินบาท กำหนดวันเริ่มต้นและสิ้นสุด เลือกตู้ที่ร่วมรายการ สร้างเงื่อนไข เช่น จำนวนภาพหรือช่วงเวลา และกำหนดวิธีใช้ร่วมกับคูปองได้"],
            ["สร้างคูปองจาก Dashboard", "สร้างคูปองจากแดชบอร์ด และใช้ร่วมกับช่องทางชำระเงินต่าง ๆ ได้"],
            ["ขอคูปองสำหรับพนักงานหน้างาน", "พนักงานหน้างานขอรับรหัสคูปองผ่านหน้าเว็บเฉพาะ โดยกรอกชื่อ เหตุผล และแนบรูปเป็นหลักฐาน"],
        ],
    },
    {
        title: "ระบบหลังบ้านเจ้าของตู้",
        items: [
            ["รายงานธุรกรรม", "ดูข้อมูลการขายและส่งออกเป็น PDF"],
            ["ซิงก์ Google Drive", "บันทึกแกลเลอรีลง Drive แยกโฟลเดอร์ตามสินค้าหรือเซสชัน ซิงก์รูปใหม่อัตโนมัติทุก 5 นาที และแชร์ด้วยลิงก์ได้"],
            ["ดาวน์โหลดทั้งหมด", "ดาวน์โหลดรูปทั้งหมดได้ในครั้งเดียว"],
            ["ลากจัดลำดับเฟรม", "ลากเรียงเฟรมที่แสดงบนแต่ละตู้ได้เอง"],
            ["สถานะตู้และอีเวนต์", "ติดตามการทำงานของตู้และงานอีเวนต์ได้จากที่เดียว"],
            ["คู่มือและข่าวฟีเจอร์", "มีคู่มือการใช้งานในระบบ ส่งออกเป็น PDF ได้ และมีหน้าแจ้งฟีเจอร์ใหม่"],
        ],
    },
    {
        title: "แกลเลอรีและ Live Slideshow",
        items: [
            ["ธีมแกลเลอรี", "ตั้งโหมดสว่างหรือมืด สี ฟอนต์ ข้อความ และส่วนท้ายของหน้าให้เข้ากับงาน"],
            ["เลย์เอาต์ 4 แบบ", "เลือกได้ทั้ง Grid, Masonry, Polaroid และ Carousel"],
            ["Live Slideshow", "รูปใหม่ขึ้นจอแบบเรียลไทม์ เลือกแบบเต็มจอหรือ Coverflow เลือกเอฟเฟกต์เปลี่ยนภาพ ตั้งเวลาต่อภาพ และใส่โลโก้ได้"],
        ],
    },
    {
        title: "ความเสถียรและสำรองข้อมูล",
        items: [
            ["สำรองรูปในเครื่อง", "เก็บงานไว้ในตู้ อัปโหลดซ้ำและพิมพ์ซ้ำได้จากหน้าสำรองข้อมูล"],
            ["อัปโหลดอัตโนมัติ", "ส่งงานขึ้นระบบโดยไม่ต้องสั่งเอง"],
            ["ซิงก์ในเบื้องหลัง", "อัปเดตข้อมูลตู้จากแดชบอร์ดในเบื้องหลัง พร้อมแจ้งเตือนเมื่อมีการซิงก์"],
            ["แถบความคืบหน้าจริง", "แสดงความคืบหน้าระหว่างโหลดและประมวลผลงาน"],
        ],
    },
]

const TECH = [
    ["✦", "AI Experience", "PHOTO & VIDEO"],
    ["▧", "Event Tech", "GUEST INTERACTION"],
    ["▤", "Payments", "COUPON & QR"],
    ["▣", "Cloud Dashboard", "MANAGEMENT"],
]

const ECOSYSTEM = [
    ["✦", "AI & Creative", "Face Swap ภาพและวิดีโอ ฟิลเตอร์ และเฟรมเคลื่อนไหว"],
    ["◉", "Interactive Booth", "Guestbook, User Upload, Event Mode และการใช้งานหลายกล้อง"],
    ["▤", "Payment & Coupon", "QR, e-Wallet, โปรโมชัน และคูปอง"],
    ["▣", "Dashboard", "รายงานยอดขาย จัดการอุปกรณ์และงานอีเวนต์"],
    ["◈", "Gallery & Live View", "แกลเลอรีปรับธีมและสไลด์โชว์ภาพสด"],
    ["⌘", "Hardware & Reliability", "เชื่อมต่อกล้อง เครื่องพิมพ์ สำรองและซิงก์ข้อมูล"],
]

const STEPS = [
    ["รับโจทย์", "วิเคราะห์ปัญหาและเป้าหมาย"],
    ["ออกแบบระบบ", "วางขอบเขตและประสบการณ์ผู้ใช้"],
    ["พัฒนาและทดสอบ", "ตรวจฟังก์ชันตามขอบเขตที่ตกลง"],
    ["ส่งมอบ", "เตรียมการใช้งานและการดูแล"],
]

const NAVY = "text-deep-space-blue"
const ACCENT = "text-tiger-orange"
const EYEBROW = `text-[20px] font-bold uppercase tracking-[0.2em] ${ACCENT}`
const CARD_SHADOW = "shadow-[4px_4px_0_#e8dfd0]"

export function SoftwarePageContent() {
    const [cat, setCat] = useState<number | null>(null)
    const [q, setQ] = useState("")
    const query = q.trim().toLowerCase()

    const shown = CATEGORIES.map((c, i) => ({
        ...c,
        i,
        items: c.items.filter(([n, d]) => !query || `${n} ${d}`.toLowerCase().includes(query)),
    })).filter((c) => (cat === null || c.i === cat) && c.items.length > 0)

    return (
        <main className={`min-h-screen bg-[#fefcf6] ${NAVY}`}>
            <Navigation />

            {/* Hero */}
            <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-32 md:px-8 lg:grid-cols-[1.2fr_1fr]">
                <div>
                    <p className={EYEBROW}>Software Development &amp; Automation</p>
                    <h1 className="mt-5 text-[2.25rem] font-bold leading-[1.45] sm:text-[3rem] lg:text-[3.5rem]">
                        <span className="block sm:whitespace-nowrap">ซอฟต์แวร์ที่ทำให้</span>
                        <span className="block sm:whitespace-nowrap">ทุกประสบการณ์</span>
                        <span className={`block sm:whitespace-nowrap ${ACCENT}`}>เป็นไปได้มากกว่าเดิม</span>
                    </h1>
                    <p className="mt-5 max-w-2xl text-[19.5px] leading-relaxed text-deep-space-blue/60">
                        IMAGEAUTOMAT พัฒนาระบบถ่ายภาพอัตโนมัติ เทคโนโลยี AI งานอีเวนต์ ระบบชำระเงิน คูปอง
                        และแดชบอร์ดบริหารจัดการ พร้อมต่อยอดโซลูชันดิจิทัลตามโจทย์ธุรกิจ
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <a href="#features" className="rounded-full bg-tiger-orange px-5 py-2.5 text-xs font-bold text-white hover:bg-tiger-orange/90">
                            สำรวจฟีเจอร์ทั้งหมด ↗
                        </a>
                        <a href="#ecosystem" className="rounded-full border border-[#e2d9cb] bg-white px-5 py-2.5 text-xs font-bold hover:bg-[#f7f1e8]">
                            รู้จักระบบของเรา →
                        </a>
                    </div>
                </div>

                <div className="rounded-2xl border border-[#e2e2dc] bg-gradient-to-br from-[#fbfaf5] to-[#eaf2f5] p-5 shadow-sm">
                    <p className="text-sm font-bold">
                        IMAGE<span className={ACCENT}>AUTOMAT</span> / TECHNOLOGY
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2.5">
                        {TECH.map(([icon, title, sub]) => (
                            <div key={title} className="rounded-xl border border-[#e2e2dc] bg-white p-3.5">
                                <div className="text-lg">{icon}</div>
                                <p className="mt-6 text-sm font-bold">{title}</p>
                                <p className="text-[20px] tracking-wider text-deep-space-blue/60">{sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ecosystem */}
            <section id="ecosystem" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-20 md:px-8">
                <p className={EYEBROW}>Software Ecosystem</p>
                <h2 className="mt-2 text-3xl font-bold">ระบบหลากหลายที่ทำงานร่วมกัน</h2>
                <p className="mt-3 text-sm text-deep-space-blue/60">
                    จากประสบการณ์แขกหน้าตู้ ไปจนถึงการจัดการขาย อุปกรณ์ และข้อมูลหลังบ้าน
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {ECOSYSTEM.map(([icon, title, desc]) => (
                        <div key={title} className={`border border-[#e8dfd0] bg-white p-5 ${CARD_SHADOW}`}>
                            <div className="text-xl">{icon}</div>
                            <h3 className="mt-5 text-base font-bold">{title}</h3>
                            <p className="mt-2 text-xs leading-relaxed text-deep-space-blue/60">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Feature library */}
            <section id="features" className="scroll-mt-20 bg-[#f2e9df] py-16">
                <div className="mx-auto max-w-6xl px-4 md:px-8">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <p className={EYEBROW}>Complete Feature Library</p>
                            <h2 className="mt-2 text-3xl font-bold">ฟีเจอร์ IMAGEAUTOMAT ทั้งหมด</h2>
                            <p className="mt-3 text-sm text-deep-space-blue/60">ค้นหา เลือกหมวด แล้วกดชื่อฟีเจอร์เพื่อดูรายละเอียด</p>
                        </div>
                        <input
                            type="search"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="⌕ ค้นหา เช่น Face Swap, คูปอง"
                            aria-label="ค้นหาฟีเจอร์"
                            className="w-full rounded-xl border border-[#e2d9cb] bg-white px-4 py-2.5 text-sm outline-none focus:border-tiger-orange sm:w-52"
                        />
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {[null, ...CATEGORIES.map((_, i) => i)].map((i) => (
                            <button
                                key={i ?? "all"}
                                onClick={() => setCat(i)}
                                aria-pressed={cat === i}
                                className={`rounded-full border px-3.5 py-1.5 text-[20px] font-bold transition-colors ${
 cat === i
 ? "border-deep-space-blue bg-deep-space-blue text-white"
 : "border-[#e2d9cb] bg-white hover:bg-[#f7f1e8]"
 }`}
                            >
                                {i === null ? "ทั้งหมด" : CATEGORIES[i].title}
                            </button>
                        ))}
                    </div>

                    <div className="mt-6 space-y-3">
                        {shown.map((c) => (
                            <div key={c.title} className={`border border-[#e8dfd0] bg-white ${CARD_SHADOW}`}>
                                <h3 className="border-b border-[#ece4d6] px-5 py-4 text-base font-bold">
                                    {String(c.i + 1).padStart(2, "0")} · {c.title}
                                </h3>
                                <div className="grid gap-x-5 px-5 pb-3 md:grid-cols-2">
                                    {c.items.map(([name, detail]) => (
                                        <details key={name} className="group border-b border-[#ece4d6]">
                                            <summary className="flex cursor-pointer list-none items-start justify-between gap-3 py-3.5 text-xs font-bold [&::-webkit-details-marker]:hidden">
                                                {name}
                                                <span className={`mt-1 text-base leading-none ${ACCENT} transition-transform group-open:rotate-45`}>+</span>
                                            </summary>
                                            <p className="pb-4 text-xs leading-relaxed text-deep-space-blue/60">{detail}</p>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {shown.length === 0 && (
                            <p className="py-10 text-center text-sm text-deep-space-blue/60">ไม่พบฟีเจอร์ที่ค้นหา</p>
                        )}
                    </div>

                    <p className="mt-4 rounded-lg border border-[#f3d9a8] bg-[#fff6e6] px-4 py-3 text-[20px] text-deep-space-blue/70">
                        ข้อมูลฟีเจอร์อ้างอิงจากเอกสารที่แนบมา การรองรับอุปกรณ์และช่องทางชำระเงินอาจขึ้นกับรุ่น การตั้งค่า
                        และการเปิดใช้บริการ โปรดยืนยันก่อนเผยแพร่เชิงพาณิชย์
                    </p>
                </div>
            </section>

            {/* Approach */}
            <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
                <p className={EYEBROW}>Development Approach</p>
                <h2 className="mt-2 text-3xl font-bold">จากโจทย์ธุรกิจสู่ระบบที่ใช้งานจริง</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {STEPS.map(([title, desc], i) => (
                        <div key={title} className="border-t border-[#e2d9cb] pt-4">
                            <p className={`text-sm font-bold ${ACCENT}`}>{String(i + 1).padStart(2, "0")}</p>
                            <h3 className="mt-4 text-base font-bold">{title}</h3>
                            <p className="mt-3 text-xs text-deep-space-blue/60">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-6xl px-4 pb-20 pt-8 md:px-8">
                <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-deep-space-blue px-8 py-12 text-white md:flex-row md:items-center">
                    <div>
                        <p className={EYEBROW}>Let&apos;s Talk Software</p>
                        <h2 className="mt-3 text-xl font-bold">มีไอเดียระบบที่อยากพัฒนา?</h2>
                        <p className="mt-5 text-sm text-white/75">ติดต่อเพื่อพูดคุยเกี่ยวกับซอฟต์แวร์และผลิตภัณฑ์ของเรา</p>
                    </div>
                    <Link href="/" className="shrink-0 rounded-full bg-tiger-orange px-5 py-2.5 text-xs font-bold text-white hover:bg-tiger-orange/90">
                        ไปยังเว็บไซต์หลัก ↗
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}
