import { ImageResponse } from "next/og"
import { loadOgFonts, OG_FONT_FAMILY } from "@/lib/og-fonts"

export const alt = "ตู้โฟโต้บูธพรีเมียม ผลิตในไทย — IMAGEAUTOMAT"
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
                    padding: "80px",
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
                            "radial-gradient(circle, rgba(251,133,0,0.55) 0%, rgba(251,133,0,0) 70%)",
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: -260,
                        left: -120,
                        width: 560,
                        height: 560,
                        borderRadius: 560,
                        background:
                            "radial-gradient(circle, rgba(142,202,230,0.32) 0%, rgba(142,202,230,0) 70%)",
                        display: "flex",
                    }}
                />

                {/* Brand mark */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 20,
                        marginBottom: 56,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 72,
                            height: 72,
                            borderRadius: 18,
                            background:
                                "linear-gradient(135deg, #FB8500 0%, #ffa733 100%)",
                            boxShadow: "0 12px 32px rgba(251,133,0,0.35)",
                        }}
                    >
                        <span
                            style={{
                                color: "white",
                                fontWeight: 700,
                                fontSize: 42,
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
                            fontSize: 32,
                            letterSpacing: 5,
                        }}
                    >
                        IMAGE AUTOMAT
                    </span>
                </div>

                {/* Tag */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 22px",
                        borderRadius: 999,
                        background: "rgba(251,133,0,0.18)",
                        border: "1px solid rgba(251,133,0,0.45)",
                        marginBottom: 32,
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
                        ผลิตในไทย 100%
                    </span>
                </div>

                {/* Headline */}
                <div
                    style={{
                        display: "flex",
                        fontSize: 88,
                        fontWeight: 700,
                        color: "white",
                        lineHeight: 1.1,
                        marginBottom: 28,
                        maxWidth: 1040,
                    }}
                >
                    ตู้โฟโต้บูธพรีเมียม
                </div>

                {/* Sub-headline */}
                <div
                    style={{
                        display: "flex",
                        color: "rgba(255,255,255,0.72)",
                        fontSize: 32,
                        fontWeight: 400,
                        marginBottom: 24,
                        lineHeight: 1.4,
                        maxWidth: 1000,
                    }}
                >
                    จำหน่าย · เช่า · OEM/ODM พร้อมซอฟต์แวร์ครบวงจร
                </div>

                {/* Footer URL */}
                <div
                    style={{
                        marginTop: "auto",
                        display: "flex",
                        alignItems: "center",
                        color: "rgba(255,255,255,0.5)",
                        fontSize: 24,
                        fontWeight: 400,
                    }}
                >
                    <span>www.imageautomat.com</span>
                </div>
            </div>
        ),
        {
            ...size,
            fonts,
        }
    )
}
