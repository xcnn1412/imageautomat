import { CreditCard, QrCode, Smartphone, Wallet } from "lucide-react"

const paymentChannels = [
  {
    name: "QR Payment ไทย",
    description: "PromptPay & ธนาคารไทยทุกธนาคาร",
    icon: QrCode,
    color: "bg-blue-500",
  },
  {
    name: "TrueMoney",
    description: "TrueMoney Wallet",
    icon: Wallet,
    color: "bg-orange-500",
  },
  {
    name: "Alipay+",
    description: "เครือข่าย Alipay ทั่วโลก",
    icon: Smartphone,
    color: "bg-sky-500",
  },
  {
    name: "Alipay",
    description: "ชำระเงินจีน",
    icon: Smartphone,
    color: "bg-blue-600",
  },
  {
    name: "WeChat Pay",
    description: "WeChat Payments",
    icon: Smartphone,
    color: "bg-green-500",
  },
  {
    name: "ShopeePay",
    description: "Shopee Wallet",
    icon: Wallet,
    color: "bg-orange-600",
  },
  {
    name: "บัตรเครดิต",
    description: "Visa, Mastercard, JCB",
    icon: CreditCard,
    color: "bg-slate-700",
  },
]

export function PaymentSection() {
  return (
    <section id="payment" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#FB8500] tracking-[0.3em] uppercase mb-3">
            ระบบชำระเงินครบวงจร
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#023047] mb-4 text-balance">
            ระบบชำระเงินสำหรับธุรกิจให้เช่าตู้ถ่ายภาพ
          </h2>
          <p className="text-[#023047]/55 max-w-2xl mx-auto text-balance">
            รองรับการชำระเงินจากลูกค้าในประเทศและต่างประเทศ สำหรับธุรกิจให้เช่าตู้ถ่ายภาพและให้เช่า Photobooth แบบครบวงจร
          </p>
        </div>

        {/* Payment Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {paymentChannels.map((channel) => (
            <div
              key={channel.name}
              className="group relative bg-white border border-[#023047]/10 rounded-2xl p-6 text-center hover:border-[#FB8500]/50 hover:shadow-lg hover:shadow-[#FB8500]/5 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <channel.icon className="size-7 text-white" />
              </div>
              <h3 className="font-semibold text-[#023047] mb-1">
                {channel.name}
              </h3>
              <p className="text-xs text-[#023047]/50">
                {channel.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            ปลอดภัยและเข้ารหัสทุกธุรกรรม พร้อมเชื่อมต่อระบบชำระเงินเมื่อนัดติดตั้ง
          </p>
        </div>
      </div>
    </section>
  )
}
