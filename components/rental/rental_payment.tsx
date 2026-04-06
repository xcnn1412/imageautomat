import Image from "next/image"

const paymentChannels = [
  {
    name: "QR Payment ไทย",
    description: "PromptPay & ธนาคารไทยทุกธนาคาร",
    image: "/assets/payment/bnk-10.png",
  },
  {
    name: "TrueMoney",
    description: "TrueMoney Wallet",
    image: "/assets/payment/bnk-13.png",
  },
  {
    name: "Alipay+",
    description: "เครือข่าย Alipay ทั่วโลก",
    image: "/assets/payment/bnk-14.png",
  },
  {
    name: "Alipay",
    description: "ชำระเงินจีน",
    image: "/assets/payment/bnk-14.png",
  },
  {
    name: "WeChat Pay",
    description: "WeChat Payments",
    image: "/assets/payment/bnk-15.png",
  },
  {
    name: "ShopeePay",
    description: "Shopee Wallet",
    image: "/assets/payment/bnk-11.png",
  },
  {
    name: "LINE Pay",
    description: "LINE Pay Wallet",
    image: "/assets/payment/bnk-12.png",
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
              <div className="w-[70px] h-[70px] rounded-xl overflow-hidden flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={channel.image}
                  alt={channel.name}
                  width={70}
                  height={70}
                  className="object-contain w-full h-full"
                />
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
