"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { SubdistrictAutocomplete, type AddressPick } from "./address-autocomplete"
import { SegmentedDigits } from "./segmented-digits"
import { isThaiId, isEmail, isThaiPhone, type InvoiceInput } from "@/lib/invoice"

const field =
  "w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-tiger-orange"
const labelCls = "mb-1 block text-xs font-semibold text-deep-space-blue/60"

export function InvoiceForm({ value, onChange }: { value: InvoiceInput; onChange: (v: InvoiceInput) => void }) {
  const { data: session } = useSession()

  // prefill อีเมลจากบัญชีที่ล็อกอิน (ครั้งเดียว ถ้ายังว่าง)
  useEffect(() => {
    const email = session?.user?.email
    if (email && !value.email) onChange({ ...value, email })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user?.email])

  const set = (patch: Partial<InvoiceInput>) => onChange({ ...value, ...patch })
  const setAddr = (patch: Partial<InvoiceInput["address"]>) => onChange({ ...value, address: { ...value.address, ...patch } })

  const isCompany = value.type === "company"
  const taxIdBad = value.taxId.length === 13 && !isThaiId(value.taxId)
  const emailBad = value.email.length > 0 && !isEmail(value.email)
  const phoneBad = value.phone.length > 0 && !isThaiPhone(value.phone)

  const onPick = (r: AddressPick) =>
    setAddr({ subdistrict: r.subdistrict, district: r.district, province: r.province, zipcode: r.zipcode })

  return (
    <div className="mt-4 space-y-4 rounded-2xl border border-gray-200 p-4">
      {/* ประเภทผู้ซื้อ */}
      <div className="grid grid-cols-2 gap-2">
        {([["personal", "บุคคลธรรมดา"], ["company", "นิติบุคคล"]] as const).map(([val, label]) => (
          <button
            key={val}
            type="button"
            onClick={() => set({ type: val })}
            className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${
              value.type === val ? "border-tiger-orange bg-tiger-orange/5 text-tiger-orange" : "border-gray-200 text-deep-space-blue/70"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ชื่อ */}
      <div>
        <label className={labelCls}>{isCompany ? "ชื่อบริษัท / นิติบุคคล" : "ชื่อ-นามสกุล"} *</label>
        <input
          value={value.name}
          onChange={(e) => set({ name: e.target.value })}
          placeholder={isCompany ? "บริษัท ตัวอย่าง จำกัด" : "สมชาย ใจดี"}
          className={field}
        />
      </div>

      {/* เลขผู้เสียภาษี / บัตรประชาชน — แยกช่องทีละหลัก 13 ช่อง */}
      <div>
        <label className={labelCls}>{isCompany ? "เลขประจำตัวผู้เสียภาษี" : "เลขบัตรประชาชน"} (13 หลัก) *</label>
        <SegmentedDigits
          length={13}
          groups={[1, 4, 5, 2, 1]}
          value={value.taxId}
          onChange={(v) => set({ taxId: v })}
          invalid={taxIdBad}
          ariaLabel={isCompany ? "เลขประจำตัวผู้เสียภาษี 13 หลัก" : "เลขบัตรประชาชน 13 หลัก"}
        />
        {taxIdBad && <p className="mt-1 text-xs text-red-500">เลข 13 หลักไม่ถูกต้อง (ตรวจหลักสุดท้ายไม่ผ่าน)</p>}
      </div>

      {/* นิติบุคคล: สาขา */}
      {isCompany && (
        <div>
          <label className={labelCls}>สำนักงาน / สาขา *</label>
          <input
            value={value.branch}
            onChange={(e) => set({ branch: e.target.value })}
            placeholder="สำนักงานใหญ่ หรือ สาขา 00001"
            className={field}
          />
        </div>
      )}

      {/* ที่อยู่ — แยกช่อง */}
      <div className="rounded-xl bg-gray-50/70 p-3">
        <p className="mb-2 text-xs font-bold text-deep-space-blue/70">ที่อยู่สำหรับออกใบกำกับภาษี</p>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>บ้านเลขที่ *</label>
              <input value={value.address.houseNo} onChange={(e) => setAddr({ houseNo: e.target.value })} placeholder="99/1" className={field} />
            </div>
            <div>
              <label className={labelCls}>ตรอก / ซอย</label>
              <input value={value.address.soi} onChange={(e) => setAddr({ soi: e.target.value })} placeholder="ไม่บังคับ" className={field} />
            </div>
          </div>

          <div>
            <label className={labelCls}>ถนน</label>
            <input value={value.address.road} onChange={(e) => setAddr({ road: e.target.value })} placeholder="ไม่บังคับ" className={field} />
          </div>

          <div>
            <label className={labelCls}>ตำบล / แขวง *</label>
            <SubdistrictAutocomplete value={value.address.subdistrict} onType={(v) => setAddr({ subdistrict: v })} onPick={onPick} className={field} />
            <p className="mt-1 text-xs text-deep-space-blue/40">พิมพ์ตำบล/แขวง แล้วเลือก ระบบเติมอำเภอ จังหวัด รหัสไปรษณีย์ให้อัตโนมัติ</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>อำเภอ / เขต *</label>
              <input value={value.address.district} onChange={(e) => setAddr({ district: e.target.value })} placeholder="อำเภอ / เขต" className={field} />
            </div>
            <div>
              <label className={labelCls}>จังหวัด *</label>
              <input value={value.address.province} onChange={(e) => setAddr({ province: e.target.value })} placeholder="จังหวัด" className={field} />
            </div>
          </div>

          <div className="w-1/2 pr-1.5">
            <label className={labelCls}>รหัสไปรษณีย์ *</label>
            <input
              value={value.address.zipcode}
              onChange={(e) => setAddr({ zipcode: e.target.value.replace(/\D/g, "").slice(0, 5) })}
              inputMode="numeric"
              placeholder="10110"
              className={field}
            />
          </div>
        </div>
      </div>

      {/* ติดต่อ */}
      <div>
        <label className={labelCls}>อีเมลสำหรับจัดส่งใบกำกับภาษี *</label>
        <input
          type="email"
          value={value.email}
          onChange={(e) => set({ email: e.target.value })}
          placeholder="you@example.com"
          className={`${field} ${emailBad ? "border-red-400" : ""}`}
        />
        {emailBad && <p className="mt-1 text-xs text-red-500">รูปแบบอีเมลไม่ถูกต้อง</p>}
      </div>

      <div>
        <label className={labelCls}>เบอร์โทรศัพท์ (10 หลัก) *</label>
        <SegmentedDigits
          length={10}
          groups={[3, 3, 4]}
          value={value.phone}
          onChange={(v) => set({ phone: v })}
          invalid={phoneBad}
          ariaLabel="เบอร์โทรศัพท์ 10 หลัก"
        />
        {phoneBad && <p className="mt-1 text-xs text-red-500">ต้องเป็นตัวเลข 10 หลัก</p>}
      </div>

      <div>
        <label className={labelCls}>LINE ID</label>
        <input value={value.lineId} onChange={(e) => set({ lineId: e.target.value })} placeholder="ไม่บังคับ" className={field} />
      </div>
    </div>
  )
}
