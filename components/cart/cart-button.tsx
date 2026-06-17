"use client"

import { ShoppingBag } from "lucide-react"
import { useCart } from "./cart-context"

export function CartButton() {
    const { count, setOpen } = useCart()
    return (
        <button
            onClick={() => setOpen(true)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-deep-space-blue transition-colors hover:bg-deep-space-blue/5"
            aria-label="ตะกร้าสินค้า"
        >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-tiger-orange px-1 text-[11px] font-bold text-white">
                    {count}
                </span>
            )}
        </button>
    )
}
