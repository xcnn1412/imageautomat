const items = [
  { value: "200+", label: "เครื่องส่งมอบแล้ว", icon: "📦" },
  { value: "ROI 200–300%", label: "ต่อปี", icon: "⚡" },
  { value: "รับประกัน 1 ปี", label: "โครงสร้างและซอฟต์แวร์", icon: "🛡️" },
  { value: "ซัพพอร์ต 24/7", label: "ทีมงานพร้อมช่วยเสมอ", icon: "🕐" },
]

export function TrustBar() {
  return (
    <div className="bg-deep-space-blue border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 sm:gap-x-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="text-lg leading-none">{item.icon}</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-bold text-tiger-orange whitespace-nowrap">{item.value}</span>
                <span className="text-xs text-white/50 whitespace-nowrap">{item.label}</span>
              </div>
              {i < items.length - 1 && (
                <span className="hidden sm:block ml-8 w-px h-5 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
