"use client"

import { ShoppingBag } from "lucide-react"
import { useCart } from "./cart-context"

export function CartButton() {
    const { count, setOpen } = useCart()
    return (
        <button
            onClick={() => setOpen(true)}
            className="relative flex h-8 w-8 items-center justify-center rounded-full text-deep-space-blue transition-colors hover:bg-deep-space-blue/5"
            aria-label="ตะกร้าสินค้า"
        >
            <ShoppingBag className="h-4 w-4" />
            {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-tiger-orange px-1 text-[14.5px] font-bold text-white">
                    {count}
                </span>
            )}
        </button>
    )
}
