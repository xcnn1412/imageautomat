import { Package, Zap, ShieldCheck, Clock } from "lucide-react"

const items = [
  { icon: Package, value: "200+", label: "เครื่องส่งมอบแล้ว" },
  { icon: Zap, value: "ROI 200–300%", label: "ต่อปี" },
  { icon: ShieldCheck, value: "รับประกัน 1 ปี", label: "โครงสร้างและซอฟต์แวร์" },
  { icon: Clock, value: "ซัพพอร์ต 24/7", label: "ทีมงานพร้อมช่วยเสมอ" },
]

/* ponytail: keyframe marquee-left เลื่อน -25% → track ต้องมี 4 ชุดพอดีถึงจะวนไม่มีรอยต่อ */
const track = [...items, ...items, ...items, ...items]

export function TrustBar() {
  return (
    <div className="bg-tiger-orange overflow-hidden py-4">
      <div
        className="flex w-max items-center gap-10 sm:gap-14"
        style={{ animation: "marquee-left 40s linear infinite" }}
      >
        {track.map(({ icon: Icon, value, label }, i) => (
          <div key={i} className="flex shrink-0 items-center gap-3 whitespace-nowrap">
            <Icon className="w-[22px] h-[22px] shrink-0 text-white" strokeWidth={1.75} />
            <span className="text-[13px] font-bold text-white">{value}</span>
            <span className="text-[11px] text-white/85">{label}</span>
            <span className="ml-10 sm:ml-14 w-px h-6 bg-white/30" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  )
}
