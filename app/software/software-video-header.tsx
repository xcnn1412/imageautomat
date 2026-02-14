"use client"

export function SoftwareVideoHeader() {
    return (
        <section id="liveview-photobooth" className="pt-12 lg:pt-16 pb-0 bg-deep-space-blue/5 relative overflow-hidden" aria-label="ตัวอย่างผลงานวิดีโอจากซอฟต์แวร์ LIVEVIEW PHOTOBOOTH">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative text-center">
                {/* Background decoration */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-tiger-orange/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

                <div className="relative">
                    {/* Main heading */}
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-space-blue tracking-tight leading-[1.1] mb-4">
                        ตัวอย่างผลงาน — ภาพความทรงจำที่ขยับได้
                        <br />
                        <span className="text-tiger-orange">LIVEVIEW PHOTOBOOTH</span>
                    </h2>

                    {/* Subheading */}
                    <p className="mt-6 text-lg md:text-xl text-deep-space-blue/60 leading-relaxed max-w-2xl mx-auto">
                        ตัวอย่างผลลัพธ์ภาพที่ได้จากโปรแกรม
                    </p>
                </div>
            </div>
        </section>
    )
}
