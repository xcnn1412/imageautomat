"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const faqs = [
  {
    question: "ให้เช่าตู้ถ่ายภาพ ราคาเริ่มต้นเท่าไหร่?",
    answer: "ราคาให้เช่าตู้ถ่ายภาพและให้เช่า Photobooth ขึ้นอยู่กับระยะเวลาเช่า รูปแบบงาน และฟีเจอร์ที่เลือก เช่น ระบบชำระเงินหรือ Branding หน้างาน ติดต่อทีมงานเพื่อรับใบเสนอราคาที่เหมาะกับงานของคุณ",
  },
  {
    question: "ให้เช่า Photobooth รายวัน รายเดือน และรายปี ต่างกันอย่างไร?",
    answer: "แพ็กเกจรายวันเหมาะกับงานอีเวนต์ระยะสั้น แพ็กเกจรายเดือนเหมาะกับการทดลองตลาด และแพ็กเกจรายปีเหมาะกับธุรกิจที่ต้องการต้นทุนต่อเดือนคุ้มค่าที่สุด โดยทุกแผนสามารถเลือกฟีเจอร์เสริมได้ตามต้องการ",
  },
  {
    question: "ระบบชำระเงินของ Photobooth Software รองรับช่องทางอะไรบ้าง?",
    answer: "ระบบชำระเงิน Photobooth ของเรารองรับ PromptPay, TrueMoney Wallet, Alipay, WeChat Pay, ShopeePay และบัตรเครดิต Visa/Mastercard/JCB รายได้ทุกธุรกรรมถูกบันทึกอัตโนมัติใน Dashboard พร้อมรายงานละเอียด",
  },
  {
    question: "สามารถปรับแต่งกรอบรูปและเทมเพลตได้ไหม?",
    answer: "ได้ ซอฟต์แวร์ของเรามีเครื่องมือแก้ไขดีไซน์ที่ใช้งานง่าย รองรับการสร้างกรอบรูป โอเวอร์เลย์ และเทมเพลตแบรนด์เองได้ สามารถเปลี่ยนดีไซน์ตามธีมงาน เทศกาล หรือแคมเปญโปรโมชันได้ทันที",
  },
  {
    question: "มีบริการ Support หลังการขายไหม?",
    answer: "ทุกแผนเช่าซอฟต์แวร์มีบริการ Support ทางเทคนิค แผนระยะสั้นรองรับในเวลาทำการ แผนระยะยาวได้รับ Priority Support 24/7 พร้อมการฝึกอบรมและเอกสารประกอบเพื่อให้เริ่มต้นได้อย่างรวดเร็ว",
  },
  {
    question: "ให้เช่าตู้ถ่ายภาพ ใช้เวลาติดตั้งนานแค่ไหน?",
    answer: "บริการให้เช่าตู้ถ่ายภาพ และให้เช่า Photobooth โดยทั่วไปสามารถนัดติดตั้งล่วงหน้าได้ตามรูปแบบงาน ทีมงานของเราจะประสานงานตั้งแต่ขนส่ง ติดตั้ง ทดสอบระบบ จนพร้อมใช้งานหน้างาน",
  },
  {
    question: "จัดการตู้เช่า Photobooth หลายสาขาจากที่เดียวได้ไหม?",
    answer: "ได้ Cloud Dashboard ของเราช่วยให้ติดตามและจัดการตู้ได้ทุกสาขา พุชอัปเดต เปลี่ยนการตั้งค่า และดูรายงานรายได้รวมของทุกตู้ในหน้าจอเดียว",
  },
  {
    question: "Software รองรับกล้องรุ่นใดบ้าง?",
    answer: "ซอฟต์แวร์รองรับกล้อง DSLR หลายรุ่น เช่น Canon, Nikon, Sony รวมถึง Webcam มืออาชีพ และยังพัฒนาร่วมกับ Hardware KIOSK ที่ผลิตเองเพื่อให้ทำงานได้อย่างราบรื่นที่สุด",
  },
  {
    question: "ลูกค้าจะได้รับรูปถ่ายอย่างไร?",
    answer: "ลูกค้าสามารถรับรูปผ่าน QR Code (ไม่ต้องโหลดแอป), อีเมล, SMS หรือพิมพ์ออกมาทันที รองรับการแชร์ LINE, Facebook และ Instagram ได้ทันทีเพื่อเพิ่ม Engagement",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FB8500]/10 text-[#FB8500] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047]">
            FAQ <span className="text-[#FB8500]">ให้เช่าตู้ถ่ายภาพ</span>
          </h2>
          <p className="mt-4 text-lg text-[#023047]/60">
            คำตอบเรื่องราคา แพ็กเกจเช่า การติดตั้ง และการใช้งานจริง สำหรับธุรกิจให้เช่าตู้ถ่ายภาพและให้เช่า Photobooth
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-[#023047] hover:text-[#FB8500] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#023047]/60 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
