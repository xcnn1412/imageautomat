"use client"

import { SessionProvider } from "next-auth/react"
import { CartProvider } from "@/components/cart/cart-context"
import { CartDrawer } from "@/components/cart/cart-drawer"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <CartProvider>
                {children}
                {/* render ครั้งเดียวที่ root — fixed overlay หลุดจาก nav (backdrop-blur/overflow) */}
                <CartDrawer />
            </CartProvider>
        </SessionProvider>
    )
}
