import Link from "next/link"
import { Clock } from "lucide-react"

export const metadata = { title: "รอการอนุมัติ · IMAGEAUTOMAT" }

export default function PendingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-20">
      <div className="max-w-md rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-xl">
        <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
          <Clock className="h-8 w-8 text-amber-600" />
        </span>
        <h1 className="font-serif text-2xl text-deep-space-blue">รอการอนุมัติจากผู้ดูแลระบบ</h1>
        <p className="mt-3 text-sm leading-relaxed text-deep-space-blue/60">
          ขอบคุณที่สมัครสมาชิก! บัญชีของคุณอยู่ระหว่างรอผู้ดูแลระบบอนุมัติ
          เมื่อได้รับการอนุมัติแล้ว คุณจะสามารถเข้าสู่ระบบและใช้งานได้ทันที
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-tiger-orange px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-tiger-orange/90"
        >
          กลับหน้าแรก
        </Link>
      </div>
    </main>
  )
}
