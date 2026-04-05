"use client"

const brands = [
  "Moshi Moshi",
  ".dotlife",
  "Central World",
  "Siam Paragon",
  "EmQuartier",
  "ICONSIAM",
  "The Mall Group",
  "Major Cineplex",
]

export function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#023047] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            แบรนด์ชั้นนำเลือกใช้บริการเช่าของเรา
          </h2>
          <p className="mt-3 text-white/60">
            ขับเคลื่อนบริการให้เช่าตู้ถ่ายภาพ และให้เช่า Photobooth ให้สถานที่ชั้นนำทั่วประเทศไทย
          </p>
        </div>

        {/* Marquee container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#023047] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#023047] to-transparent z-10" />

          {/* Marquee */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee gap-12 pr-12">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-16 px-8 rounded-lg bg-white/8 border border-white/15"
                >
                  <span className="text-lg font-semibold text-white/65 whitespace-nowrap">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
