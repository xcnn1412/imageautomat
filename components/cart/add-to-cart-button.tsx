"use client"

import { useState } from "react"
import { Check, Loader2, ShoppingBag } from "lucide-react"
import { useCart } from "./cart-context"

type State = "idle" | "loading" | "done"

export function AddToCartButton({
    productId,
    label = "เพิ่มลงตะกร้า",
    className = "",
    onAdded,
}: {
    productId: number
    label?: string
    className?: string
    onAdded?: () => void
}) {
    const { add } = useCart()
    const [state, setState] = useState<State>("idle")

    async function click() {
        if (state === "loading") return
        setState("loading")
        try {
            await add(productId) // ถ้ายังไม่ login จะ redirect ไป signIn เอง
            setState("done")
            onAdded?.()
            setTimeout(() => setState("idle"), 1500)
        } catch {
            setState("idle")
        }
    }

    return (
        <button onClick={click} disabled={state === "loading"} className={className}>
            {state === "loading" ? (
                <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>กำลังเพิ่ม…</span>
                </>
            ) : state === "done" ? (
                <>
                    <Check className="h-4 w-4 animate-[pop_0.3s_ease-out]" />
                    <span>เพิ่มแล้ว!</span>
                </>
            ) : (
                <>
                    <ShoppingBag className="h-4 w-4" />
                    <span>{label}</span>
                </>
            )}
        </button>
    )
}
