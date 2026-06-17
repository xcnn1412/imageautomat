import { ImageResponse } from "next/og"
import { jobs } from "@/data/jobs"
import { loadOgFonts, OG_FONT_FAMILY } from "@/lib/og-fonts"

export const alt = "ร่วมงานกับเรา — IMAGE AUTOMAT"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
    const fonts = await loadOgFonts()

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background:
                        "linear-gradient(135deg, #023047 0%, #03466b 60%, #034a72 100%)",
                    padding: "72px 80px",
                    position: "relative",
                    fontFamily: OG_FONT_FAMILY,
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: -240,
                        right: -160,
                        width: 600,
                        height: 600,
                        borderRadius: 600,
                        background:
                            "radial-gradient(circle, rgba(251,133,0,0.5) 0%, rgba(251,133,0,0) 70%)",
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: -260,
                        left: -120,
                        width: 540,
                        height: 540,
                        borderRadius: 540,
                        background:
                            "radial-gradient(circle, rgba(142,202,230,0.28) 0%, rgba(142,202,230,0) 70%)",
                        display: "flex",
                    }}
                />

                {/* Brand */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 18,
                        marginBottom: 48,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 64,
                            height: 64,
                            borderRadius: 16,
                            background:
                                "linear-gradient(135deg, #FB8500 0%, #ffa733 100%)",
                            boxShadow: "0 8px 24px rgba(251,133,0,0.3)",
                        }}
                    >
                        <span
                            style={{
                                color: "white",
                                fontWeight: 700,
                                fontSize: 38,
                                lineHeight: 1,
                            }}
                        >
                            I
                        </span>
                    </div>
                    <span
                        style={{
                            color: "white",
                            fontWeight: 700,
                            fontSize: 28,
                            letterSpacing: 4,
                        }}
                    >
                        IMAGE AUTOMAT
                    </span>
                </div>

                {/* Badge */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 22px",
                        borderRadius: 999,
                        background: "rgba(251,133,0,0.18)",
                        border: "1px solid rgba(251,133,0,0.45)",
                        marginBottom: 30,
                        alignSelf: "flex-start",
                    }}
                >
                    <span
                        style={{
                            color: "#FB8500",
                            fontSize: 22,
                            fontWeight: 700,
                            letterSpacing: 1,
                        }}
                    >
                        เปิดรับสมัคร {jobs.length} ตำแหน่ง
                    </span>
                </div>

                {/* Title */}
                <div
                    style={{
                        display: "flex",
                        fontSize: 92,
                        fontWeight: 700,
                        color: "white",
                        lineHeight: 1.1,
                        marginBottom: 24,
                    }}
                >
                    ร่วมงานกับเรา
                </div>

                {/* Subtitle */}
                <div
                    style={{
                        display: "flex",
                        color: "rgba(255,255,255,0.72)",
                        fontSize: 28,
                        fontWeight: 400,
                        marginBottom: 32,
                        maxWidth: 900,
                        lineHeight: 1.4,
                    }}
                >
                    ร่วมเป็นส่วนหนึ่งของทีมตู้ถ่ายรูป Photobooth ชั้นนำของไทย
                </div>

                {/* Job list */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 12,
                        maxWidth: 1040,
                    }}
                >
                    {jobs.slice(0, 4).map((job) => (
                        <div
                            key={job.slug}
                            style={{
                                display: "flex",
                                padding: "8px 18px",
                                borderRadius: 999,
                                background: "rgba(255,255,255,0.08)",
                                border: "1px solid rgba(255,255,255,0.14)",
                                color: "rgba(255,255,255,0.85)",
                                fontSize: 22,
                                fontWeight: 400,
                            }}
                        >
                            {job.title}
                        </div>
                    ))}
                </div>

                {/* Footer URL */}
                <div
                    style={{
                        marginTop: "auto",
                        display: "flex",
                        alignItems: "center",
                        color: "rgba(255,255,255,0.45)",
                        fontSize: 22,
                        fontWeight: 400,
                    }}
                >
                    <span>imageautomat.com/careers</span>
                </div>
            </div>
        ),
        {
            ...size,
            fonts,
        }
    )
}
