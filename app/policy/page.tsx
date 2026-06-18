import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "นโยบายการสั่งซื้อและคืนสินค้า — IMAGEAUTOMAT",
  description: "เงื่อนไขการสั่งซื้อ การชำระเงิน การจัดส่ง การคืนสินค้า/คืนเงิน และการรับประกัน ของ IMAGEAUTOMAT",
  alternates: { canonical: "/policy" },
}

// ponytail: เนื้อหานโยบาย — ปรับ/เพิ่มตามเงื่อนไขจริงของธุรกิจ + ตรวจกับฝ่ายกฎหมายก่อนใช้จริง
const SECTIONS: { id: string; title: string; groups: { sub?: string; lines: string[] }[] }[] = [
  {
    id: "order",
    title: "1. การสั่งซื้อ",
    groups: [
      {
        lines: [
          "ราคาสินค้าทุกชิ้นเป็นราคาก่อน VAT 7% ระบบจะคำนวณ VAT เพิ่มในขั้นตอนชำระเงิน",
          "สินค้าบางรายการเปิดให้เลือกชำระแบบ “เต็มจำนวน” หรือ “วางมัดจำ” โดยชำระส่วนที่เหลือเมื่อรับสินค้า",
          "คำสั่งซื้อถือว่าสมบูรณ์เมื่อชำระเงินสำเร็จและได้รับอีเมล/หน้ายืนยันออเดอร์",
        ],
      },
    ],
  },
  {
    id: "payment",
    title: "2. การชำระเงิน",
    groups: [
      {
        lines: [
          "ชำระผ่านช่องทางออนไลน์ (ShopeePay / PromptPay ผ่าน Payment Gateway) อย่างปลอดภัย",
          "ผู้ซื้อนิติบุคคลที่เป็นการจ้างผลิต/บริการ จะถูกหักภาษี ณ ที่จ่ายตามกฎหมาย และต้องส่งหนังสือรับรองการหัก ณ ที่จ่าย (ใบ 50 ทวิ) ให้บริษัท",
          "ออกใบกำกับภาษีตามข้อมูลที่กรอกในขั้นตอนชำระเงิน กรุณาตรวจสอบให้ถูกต้องก่อนยืนยัน",
        ],
      },
    ],
  },
  {
    id: "shipping",
    title: "3. การจัดส่ง / การรับสินค้า",
    groups: [
      {
        sub: "โครงสร้าง Photobooth",
        lines: [
          "หลังดำเนินการชำระเงิน ใช้ระยะเวลาผลิต 15–45 วันทำการ (ตามกำหนดและคิวการผลิต)",
          "การรับสินค้า: จัดส่งฟรีภายในกรุงเทพฯ และปริมณฑล พื้นที่นอกเหนือจากนี้มีค่าใช้จ่ายในการเดินทางเพิ่มเติม",
        ],
      },
      {
        sub: "ให้เช่า Photobooth",
        lines: [
          "ลูกค้าจำเป็นต้องทักข้อความติดต่อ Admin เพื่อล็อกคิวการจัดงานให้เรียบร้อยก่อนชำระเงิน",
          "ทีมงานจะเดินทางถึงหน้างานก่อนเริ่มงาน 2 ชั่วโมง",
        ],
      },
      {
        sub: "ให้เช่า Software",
        lines: [
          "รายละเอียดการติดตั้งและ Software จะถูกจัดส่งผ่าน Email หรือ Line Chat",
          "ผู้ใช้งานสามารถนำอุปกรณ์ไฟฟ้าเข้ามาติดตั้งได้ ณ ที่ตั้งของบริษัท",
          "กรณีติดตั้งหรือสอนการใช้งานนอกสถานที่ มีค่าใช้จ่ายเพิ่มเติม",
        ],
      },
    ],
  },
  {
    id: "return",
    title: "4. การคืนสินค้า / คืนเงิน",
    groups: [
      {
        lines: [
          "บริษัทไม่มีนโยบายรับคืนหรือเปลี่ยนสินค้าในทุกกรณี กรุณาตรวจสอบรายละเอียดสินค้าให้แน่ใจก่อนตัดสินใจสั่งซื้อ",
          "บริษัทไม่มีนโยบายคืนเงินในทุกกรณี กรุณาสอบถามรายละเอียดให้แน่ใจก่อนชำระค่าสินค้า/บริการทุกครั้ง",
        ],
      },
    ],
  },
  {
    id: "warranty",
    title: "5. การรับประกัน",
    groups: [
      {
        lines: [
          "อุปกรณ์ไฟฟ้าจะได้รับการรับประกันตามเงื่อนไข Modern Trade ทั่วไป หรือการรับประกันตามอุปกรณ์ไฟฟ้าแต่ละชิ้น โดยบริษัทจะทำหน้าที่เป็นตัวกลางในการประสานงานกับตัวแทนจำหน่ายของอุปกรณ์นั้น ๆ",
          "สำหรับการซื้อโครงสร้างและอุปกรณ์ไฟฟ้า เมื่อส่งมอบแล้ว สินค้าทุกชิ้นถือเป็นกรรมสิทธิ์ของลูกค้า 100% ยกเว้นกรณีการเช่า, Software Photobooth หรือกรณีอื่นใดตามที่ตกลงกันไว้",
          "ติดต่อทีมซัพพอร์ตหลังการขายผ่านช่องทาง LINE / โทรศัพท์ ที่ระบุบนเว็บไซต์",
        ],
      },
    ],
  },
]

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="mx-auto max-w-3xl px-6 pb-28 pt-28 lg:pt-36">
        {/* Header */}
        <div className="border-b border-gray-100 pb-8">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-tiger-orange">IMAGEAUTOMAT</span>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-deep-space-blue lg:text-5xl">นโยบายการสั่งซื้อและคืนสินค้า</h1>
          <p className="mt-5 rounded-xl bg-gray-50 px-4 py-3.5 text-sm leading-relaxed text-deep-space-blue/60">
            โปรดอ่านเงื่อนไขต่อไปนี้ก่อนสั่งซื้อ — การกดยืนยันชำระเงินถือว่าท่านได้อ่านและยอมรับนโยบายนี้แล้ว
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {SECTIONS.map((s, i) => {
            const title = s.title.replace(/^\d+\.\s*/, "")
            const highlight = s.id === "return" // ข้อสำคัญ "ไม่คืนเงิน" — เน้นให้เด่น
            return (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tiger-orange/10 font-serif text-base font-bold text-tiger-orange">
                    {i + 1}
                  </span>
                  <h2 className="font-serif text-2xl text-deep-space-blue">{title}</h2>
                </div>

                <div className={`mt-5 space-y-6 ${highlight ? "rounded-2xl border border-amber-200 bg-amber-50/60 p-5" : "pl-12"}`}>
                  {s.groups.map((g, gi) => (
                    <div key={gi}>
                      {g.sub && (
                        <h3 className="mb-3 border-l-2 border-tiger-orange pl-2.5 text-sm font-bold tracking-wide text-deep-space-blue">
                          {g.sub}
                        </h3>
                      )}
                      <ul className="space-y-3">
                        {g.lines.map((line, li) => (
                          <li key={li} className="flex gap-3 text-[15px] leading-7 text-deep-space-blue/75">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tiger-orange/70" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        <p className="mt-16 border-t border-gray-100 pt-6 text-xs leading-relaxed text-deep-space-blue/40">
          IMAGEAUTOMAT ขอสงวนสิทธิ์ในการปรับปรุงนโยบายโดยจะประกาศบนหน้านี้ · มีคำถามติดต่อทีมงานได้ทุกช่องทาง
        </p>
      </section>
      <Footer />
    </main>
  )
}
