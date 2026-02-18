"use client"

interface ShutterBladesProps {
    closing: boolean
}

export function ShutterBlades({ closing }: ShutterBladesProps) {
    // 6 shutter blades positioned around the lens center (160, 140)
    const bladeCount = 6
    const cx = 160
    const cy = 140

    return (
        <svg
            viewBox="0 0 320 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: "none" }}
        >
            {/* Clip to lens area */}
            <defs>
                <clipPath id="lens-clip">
                    <circle cx={cx} cy={cy} r="32" />
                </clipPath>
            </defs>

            <g clipPath="url(#lens-clip)">
                {Array.from({ length: bladeCount }).map((_, i) => {
                    const angle = (360 / bladeCount) * i
                    const closedOffset = 0
                    const openOffset = 50

                    return (
                        <g
                            key={i}
                            style={{
                                transform: `rotate(${angle}deg)`,
                                transformOrigin: `${cx}px ${cy}px`,
                            }}
                        >
                            <rect
                                x={cx - 20}
                                y={cy - 50}
                                width="40"
                                height="50"
                                rx="2"
                                fill="rgba(30, 30, 30, 0.95)"
                                stroke="rgba(60, 60, 60, 0.5)"
                                strokeWidth="0.5"
                                style={{
                                    transform: closing
                                        ? `translateY(${closedOffset}px)`
                                        : `translateY(-${openOffset}px)`,
                                    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    transformOrigin: `${cx}px ${cy}px`,
                                }}
                            />
                        </g>
                    )
                })}
            </g>
        </svg>
    )
}
