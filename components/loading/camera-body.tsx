"use client"

interface CameraBodyProps {
    className?: string
}

export function CameraBody({ className }: CameraBodyProps) {
    return (
        <svg
            viewBox="0 0 320 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Camera body — main rectangle */}
            <rect
                x="20"
                y="50"
                width="280"
                height="170"
                rx="20"
                fill="rgba(255, 255, 255, 0.15)"
                stroke="rgba(255, 255, 255, 0.4)"
                strokeWidth="2"
            />

            {/* Top hump (viewfinder bump) */}
            <rect
                x="100"
                y="26"
                width="80"
                height="30"
                rx="8"
                fill="rgba(255, 255, 255, 0.12)"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1.5"
            />

            {/* Lens outer ring */}
            <circle
                cx="160"
                cy="140"
                r="56"
                fill="rgba(255, 255, 255, 0.06)"
                stroke="rgba(255, 255, 255, 0.35)"
                strokeWidth="2.5"
            />

            {/* Lens middle ring */}
            <circle
                cx="160"
                cy="140"
                r="44"
                fill="rgba(255, 255, 255, 0.04)"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1.5"
            />

            {/* Lens inner (dark glass) */}
            <circle
                cx="160"
                cy="140"
                r="32"
                fill="rgba(0, 0, 0, 0.3)"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="1"
            />

            {/* Lens reflection */}
            <ellipse
                cx="150"
                cy="130"
                rx="12"
                ry="8"
                fill="rgba(255, 255, 255, 0.15)"
                transform="rotate(-20 150 130)"
            />

            {/* Shutter button */}
            <circle
                cx="252"
                cy="50"
                r="12"
                fill="rgba(255, 255, 255, 0.2)"
                stroke="rgba(255, 255, 255, 0.4)"
                strokeWidth="1.5"
            />
            <circle
                cx="252"
                cy="50"
                r="7"
                fill="rgba(255, 255, 255, 0.35)"
            />

            {/* Flash */}
            <rect
                x="60"
                y="58"
                width="28"
                height="14"
                rx="4"
                fill="rgba(255, 255, 255, 0.15)"
                stroke="rgba(255, 255, 255, 0.25)"
                strokeWidth="1"
            />

            {/* Small indicator light */}
            <circle
                cx="250"
                cy="75"
                r="4"
                fill="#FB8500"
                opacity="0.8"
            >
                <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </circle>

            {/* Brand text on camera */}
            <text
                x="160"
                y="205"
                textAnchor="middle"
                fill="rgba(255, 255, 255, 0.25)"
                fontSize="9"
                fontWeight="600"
                letterSpacing="3"
                fontFamily="sans-serif"
            >
                IMAGEAUTOMAT
            </text>
        </svg>
    )
}
