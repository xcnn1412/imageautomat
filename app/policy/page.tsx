import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "นโยบายการสั่งซื้อและคืนสินค้า — IMAGEAUTOMAT",
  description: "เงื่อนไขการสั่งซื้อ การชำระเงิน การจัดส่ง การยกเลิก/คืนเงิน การรับประกัน และการระงับข้อพิพาท ของ IMAGEAUTOMAT",
  alternates: { canonical: "/policy" },
}

// ponytail: เนื้อหานโยบาย — ปรับ/เพิ่มตามเงื่อนไขจริงของธุรกิจ + ตรวจกับฝ่ายกฎหมายก่อนใช้จริง
// Line = ข้อความธรรมดา หรือ { b: ตัวหนานำหน้า, t: ที่เหลือ }
type Line = string | { b: string; t: string }
type Group =
  | { sub?: string; lines: Line[] }
  | { sub?: string; table: { head: [string, string]; rows: [string, string][] } }
type Section = { id: string; title: string; intro?: string; groups: Group[] }

const SECTIONS: Section[] = [
  {
    id: "order",
    title: "1. การสั่งซื้อ",
    groups: [
      {
        lines: [
          "ราคาสินค้าทุกชิ้นเป็นราคาก่อน VAT 7% ระบบจะคำนวณ VAT เพิ่มในขั้นตอนชำระเงิน",
          "สินค้าบางรายการเปิดให้เลือกชำระแบบ “เต็มจำนวน” หรือ “วางมัดจำ” โดยชำระส่วนที่เหลือเมื่อรับสินค้า",
          { b: "สินค้าประเภทโครงสร้าง Photobooth เป็นงานผลิตตามคำสั่งซื้อเฉพาะราย (Made-to-Order)", t: "ไม่ใช่สินค้าสำเร็จรูปในสต็อก บริษัทจะเริ่มสั่งวัสดุและจองคิวการผลิตทันทีหลังได้รับชำระเงิน" },
          "คำสั่งซื้อถือว่าสมบูรณ์เมื่อชำระเงินสำเร็จ และท่านได้รับอีเมล/หน้ายืนยันออเดอร์ กรุณาตรวจสอบรายละเอียดสินค้า สเปก สี และจำนวนให้ถูกต้องครบถ้วนก่อนยืนยันทุกครั้ง",
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
          "ชำระผ่านช่องทางออนไลน์ (ShopeePay / PromptPay / บัตรเครดิต-เดบิต ผ่าน Payment Gateway) ด้วยระบบที่ปลอดภัยตามมาตรฐาน",
          "ผู้ซื้อนิติบุคคลที่เป็นการจ้างผลิต/บริการ จะถูกหักภาษี ณ ที่จ่ายตามกฎหมาย และต้องส่งหนังสือรับรองการหัก ณ ที่จ่าย (ใบ 50 ทวิ) ให้บริษัท",
          "ออกใบกำกับภาษีตามข้อมูลที่กรอกในขั้นตอนชำระเงิน กรุณาตรวจสอบให้ถูกต้องก่อนยืนยัน",
          "บริษัทเก็บบันทึกการทำรายการ (วันเวลา หมายเลขออเดอร์ รายการสินค้า และการยอมรับเงื่อนไข) ไว้เป็นหลักฐานประกอบการให้บริการและการระงับข้อพิพาท",
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
          "หลังดำเนินการชำระเงิน ใช้ระยะเวลาผลิต 15–45 วันทำการ (ตามกำหนดและคิวการผลิต) บริษัทจะแจ้งความคืบหน้าผ่านช่องทางที่ลูกค้าให้ไว้",
          "จัดส่งฟรีภายในกรุงเทพฯ และปริมณฑล พื้นที่นอกเหนือจากนี้มีค่าใช้จ่ายในการเดินทางเพิ่มเติม",
          "เมื่อส่งมอบ ลูกค้าหรือผู้แทนจะลงนามรับสินค้าและตรวจสภาพร่วมกับทีมงาน บริษัทจะถ่ายภาพ/บันทึกการส่งมอบไว้เป็นหลักฐานการรับสินค้าโดยสมบูรณ์",
        ],
      },
      {
        sub: "ให้เช่า Photobooth",
        lines: [
          "ลูกค้าจำเป็นต้องทักข้อความติดต่อ Admin เพื่อล็อกคิวการจัดงานให้เรียบร้อยก่อนชำระเงิน",
          "ทีมงานจะเดินทางถึงหน้างานก่อนเริ่มงาน 2 ชั่วโมง และบันทึกหลักฐานการเข้าให้บริการ (เวลาเข้า–ออก/ภาพหน้างาน)",
        ],
      },
      {
        sub: "ให้เช่า Software",
        lines: [
          "รายละเอียดการติดตั้งและ Software จะถูกจัดส่งผ่าน Email หรือ Line Chat ซึ่งถือเป็นการส่งมอบบริการโดยสมบูรณ์",
          "ผู้ใช้งานสามารถนำอุปกรณ์ไฟฟ้าเข้ามาติดตั้งได้ ณ ที่ตั้งของบริษัท",
          "กรณีติดตั้งหรือสอนการใช้งานนอกสถานที่ มีค่าใช้จ่ายเพิ่มเติม",
        ],
      },
    ],
  },
  {
    id: "cancel",
    title: "4. การยกเลิก การคืนสินค้า และการคืนเงิน",
    intro: "เนื่องจากสินค้าส่วนใหญ่เป็นงานผลิตและบริการตามคำสั่งซื้อเฉพาะราย เงื่อนไขการคืนเงินจึงพิจารณาตามกรณีดังนี้",
    groups: [
      {
        sub: "4.1 กรณีที่บริษัทจะคืนเงิน/แก้ไขให้",
        lines: [
          { b: "บริษัทไม่สามารถส่งมอบสินค้า/บริการได้:", t: "คืนเงินเต็มจำนวนที่ชำระมา" },
          { b: "สินค้ามีตำหนิ ชำรุด หรือเสียหายตั้งแต่รับมอบ:", t: "บริษัทจะซ่อมแซมหรือเปลี่ยนทดแทนตามเงื่อนไขการรับประกัน (ข้อ 5) โดยลูกค้าต้องแจ้งและแสดงหลักฐานภายใน 7 วันนับจากวันรับสินค้า" },
          { b: "สินค้าไม่ตรงตามสเปกที่ตกลงในคำสั่งซื้อ:", t: "บริษัทจะแก้ไขให้ตรงตามที่ตกลง หรือพิจารณาคืนเงินตามสัดส่วนที่เหมาะสม" },
        ],
      },
      {
        sub: "4.2 การยกเลิกคำสั่งซื้อ (โครงสร้าง Photobooth / งานสั่งผลิต)",
        table: {
          head: ["สถานะคำสั่งซื้อ", "เงื่อนไขการคืนเงิน"],
          rows: [
            ["ก่อนเริ่มกระบวนการผลิต", "ยกเลิกได้ — คืนเงินหลังหักค่าดำเนินการ 25% ของยอดชำระ"],
            ["หลังเริ่มกระบวนการผลิตแล้ว", "ไม่คืนเงินมัดจำ/ยอดที่ชำระ เนื่องจากเป็นต้นทุนจริงเฉพาะคำสั่งซื้อของท่าน"],
          ],
        },
      },
      {
        sub: "4.3 การยกเลิกงานเช่า (Photobooth / Software)",
        table: {
          head: ["ช่วงเวลาที่ยกเลิก", "การคืนเงิน"],
          rows: [
            ["มากกว่า 14 วันก่อนวันงาน", "คืนเงินหลังหักค่าดำเนินการ 25%"],
            ["ภายใน 7–14 วันก่อนวันงาน", "คืนเงิน 50%"],
            ["ภายใน 7 วันก่อนวันงาน หรือไม่มาตามนัด", "ไม่คืนเงิน เนื่องจากบริษัทได้ล็อกคิวและปฏิเสธงานอื่นไปแล้ว"],
          ],
        },
      },
      {
        sub: "4.4 ข้อยกเว้นที่ไม่อยู่ในเงื่อนไขคืนเงิน",
        lines: [
          "เปลี่ยนใจ ไม่ต้องการสินค้า/บริการแล้ว โดยที่สินค้าไม่ได้มีความบกพร่อง",
          "ความเสียหายที่เกิดจากการใช้งานผิดวิธี การดัดแปลง หรือความประมาทของผู้ใช้งานหลังรับมอบ",
          "บริการที่ส่งมอบและใช้งานเสร็จสิ้นไปแล้ว (เช่น งานเช่าที่จัดงานเรียบร้อย หรือ Software ที่ส่งมอบ license แล้ว)",
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
          "การรับประกันไม่ครอบคลุมความเสียหายจากการใช้งานผิดวิธี อุบัติเหตุ หรือการดัดแปลงโดยไม่ได้รับอนุญาต",
          "ติดต่อทีมซัพพอร์ตหลังการขายผ่านช่องทาง LINE / โทรศัพท์ ที่ระบุบนเว็บไซต์",
        ],
      },
    ],
  },
  {
    id: "dispute",
    title: "6. การแจ้งปัญหาและการระงับข้อพิพาท",
    groups: [
      {
        lines: [
          { b: "กรุณาติดต่อบริษัทเป็นลำดับแรก:", t: "หากท่านพบปัญหาเกี่ยวกับสินค้า บริการ หรือการชำระเงิน ติดต่อผ่าน LINE / โทรศัพท์ / อีเมล ที่ระบุบนเว็บไซต์ บริษัทจะตอบกลับภายใน 2 วันทำการ" },
          "บริษัทมุ่งมั่นแก้ไขทุกข้อกังวลอย่างเป็นธรรม การติดต่อบริษัทโดยตรงจะช่วยให้แก้ไขปัญหาได้รวดเร็วกว่าการแจ้งปฏิเสธการชำระเงินผ่านธนาคาร (Chargeback) ซึ่งใช้เวลาดำเนินการนาน",
          "บริษัทเก็บหลักฐานการสั่งซื้อ การยอมรับเงื่อนไข การติดต่อสื่อสาร และการส่งมอบ ไว้ประกอบการพิจารณาข้อพิพาททุกกรณี",
        ],
      },
    ],
  },
  {
    id: "accept",
    title: "7. การยอมรับเงื่อนไข",
    groups: [
      {
        lines: [
          "ก่อนยืนยันการชำระเงิน ท่านต้องติ๊กยอมรับว่า “ได้อ่านและยอมรับนโยบายการสั่งซื้อและคืนสินค้า” ระบบจะบันทึกการยอมรับพร้อมวันเวลาไว้เป็นหลักฐาน",
          "การกดยืนยันชำระเงินถือเป็นการทำสัญญาซื้อขาย/บริการที่มีผลผูกพันตามนโยบายฉบับนี้",
        ],
      },
    ],
  },
]

function LineItem({ line }: { line: Line }) {
  return (
    <li className="flex gap-3 text-[15px] leading-7 text-deep-space-blue/75">
      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tiger-orange/70" />
      <span>
        {typeof line === "string" ? line : (<><strong className="font-bold text-deep-space-blue">{line.b}</strong> {line.t}</>)}
      </span>
    </li>
  )
}

function RefundTable({ head, rows }: { head: [string, string]; rows: [string, string][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-gray-50/80 text-xs font-bold uppercase tracking-wide text-deep-space-blue/50">
            <th className="w-2/5 px-4 py-3">{head[0]}</th>
            <th className="px-4 py-3">{head[1]}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map(([cond, result], i) => {
            // เน้นกรณี "ไม่คืนเงิน" ให้เด่น (สีแดง)
            const noRefund = result.startsWith("ไม่คืนเงิน")
            return (
              <tr key={i} className="align-top">
                <td className="px-4 py-3 font-semibold text-deep-space-blue/80">{cond}</td>
                <td className={`px-4 py-3 leading-relaxed ${noRefund ? "font-semibold text-red-600" : "text-deep-space-blue/70"}`}>{result}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

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
            โปรดอ่านเงื่อนไขต่อไปนี้โดยละเอียดก่อนสั่งซื้อ การกดยืนยันชำระเงินและการติ๊กยอมรับเงื่อนไข ถือว่าท่านได้อ่าน เข้าใจ และยอมรับนโยบายฉบับนี้ทั้งหมดแล้ว
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {SECTIONS.map((s, i) => {
            const title = s.title.replace(/^\d+\.\s*/, "")
            return (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tiger-orange/10 font-serif text-base font-bold text-tiger-orange">
                    {i + 1}
                  </span>
                  <h2 className="font-serif text-2xl text-deep-space-blue">{title}</h2>
                </div>

                <div className="mt-5 space-y-6 pl-12">
                  {s.intro && <p className="text-[15px] leading-7 text-deep-space-blue/75">{s.intro}</p>}
                  {s.groups.map((g, gi) => (
                    <div key={gi}>
                      {g.sub && (
                        <h3 className="mb-3 border-l-2 border-tiger-orange pl-2.5 text-sm font-bold tracking-wide text-deep-space-blue">
                          {g.sub}
                        </h3>
                      )}
                      {"table" in g ? (
                        <RefundTable head={g.table.head} rows={g.table.rows} />
                      ) : (
                        <ul className="space-y-3">
                          {g.lines.map((line, li) => <LineItem key={li} line={line} />)}
                        </ul>
                      )}
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
