"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

const KEY = "policy-notice-v2" // bump เพื่อเด้งใหม่เมื่อนโยบายเปลี่ยน

// เด้งครั้งแรกที่เข้า /shop — สรุปนโยบายก่อนสั่งซื้อ (ฉบับเต็มที่ /policy)
export function PolicyNotice() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setOpen(true)
  }, [])

  function ack() {
    localStorage.setItem(KEY, "1")
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center p-4" role="dialog" aria-modal>
      <div className="absolute inset-0 bg-deep-space-blue/50 backdrop-blur-sm" onClick={ack} />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <button onClick={ack} aria-label="ปิด" className="absolute right-4 top-4 text-deep-space-blue/40 hover:text-deep-space-blue">
          <X className="h-5 w-5" />
        </button>
        <h2 className="font-serif text-xl text-deep-space-blue">ก่อนสั่งซื้อ โปรดทราบ</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-deep-space-blue/70">
          <li>• ราคาทุกชิ้นเป็นราคาก่อน VAT 7% (คิดเพิ่มตอนชำระเงิน)</li>
          <li>• โครงสร้าง Photobooth ใช้เวลาผลิต 15–45 วันทำการหลังชำระเงิน</li>
          <li>• เช่า Photobooth: ต้องติดต่อแอดมินล็อกคิวก่อนชำระเงิน</li>
          <li className="font-semibold text-deep-space-blue">• บริษัทไม่มีนโยบายคืนเงินทุกกรณี — โปรดสอบถามให้แน่ใจก่อนชำระ</li>
        </ul>
        <Link href="/policy" target="_blank" className="mt-4 inline-block text-sm font-semibold text-tiger-orange underline">
          อ่านนโยบายฉบับเต็ม →
        </Link>
        <button onClick={ack} className="mt-5 w-full rounded-full bg-deep-space-blue py-3 text-sm font-bold text-white transition-colors hover:bg-tiger-orange">
          รับทราบ
        </button>
      </div>
    </div>
  )
}
