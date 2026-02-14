"use client"

import dynamic from "next/dynamic"

const SignatureReel = dynamic(() => import("@/components/SignatureReel").then(mod => ({ default: mod.SignatureReel })), {
    loading: () => <div className="py-12" />,
    ssr: true,
})

export function SoftwareSignatureReel() {
    return <SignatureReel />
}
