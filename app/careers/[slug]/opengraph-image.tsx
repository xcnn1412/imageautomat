import { ImageResponse } from "next/og"
import { getJobBySlug, jobs } from "@/data/jobs"
import { loadGoogleFont } from "@/lib/og-fonts"

export const alt = "สมัครงาน — IMAGE AUTOMAT"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateImageMetadata() {
    return jobs.map((job) => ({
        id: job.slug,
        alt: `สมัครงาน ${job.title} — IMAGE AUTOMAT`,
        size,
        contentType,
    }))
}

export default async function Image({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const job = getJobBySlug(slug)

    const [boldFont, regularFont] = await Promise.all([
        loadGoogleFont("IBM Plex Sans Thai", 700),
        loadGoogleFont("IBM Plex Sans Thai", 400),
    ])

    const title = job?.title ?? "สมัครงาน"
    const subtitle = job?.subtitle ?? "ร่วมงานกับ IMAGE AUTOMAT"
    const type = job?.type ?? ""
    const slugPath = job?.slug ?? ""

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
                    fontFamily: "IBM Plex Sans Thai",
                }}
            >
                {/* Decorative orange glow top-right */}
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
                {/* Decorative blue glow bottom-left */}
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
                        ✦  เปิดรับสมัคร
                    </span>
                </div>

                {/* Job title */}
                <div
                    style={{
                        display: "flex",
                        fontSize: title.length > 30 ? 72 : 92,
                        fontWeight: 700,
                        color: "white",
                        lineHeight: 1.1,
                        marginBottom: 28,
                        maxWidth: 1040,
                    }}
                >
                    {title}
                </div>

                {/* Subtitle row */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "rgba(255,255,255,0.72)",
                        fontSize: 28,
                        fontWeight: 400,
                    }}
                >
                    <span>{subtitle}</span>
                    {type && (
                        <>
                            <span
                                style={{
                                    margin: "0 14px",
                                    opacity: 0.4,
                                }}
                            >
                                ·
                            </span>
                            <span>{type}</span>
                        </>
                    )}
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
                    <span>
                        imageautomat.com/careers
                        {slugPath ? `/${slugPath}` : ""}
                    </span>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: "IBM Plex Sans Thai",
                    data: boldFont,
                    weight: 700,
                    style: "normal",
                },
                {
                    name: "IBM Plex Sans Thai",
                    data: regularFont,
                    weight: 400,
                    style: "normal",
                },
            ],
        }
    )
}
