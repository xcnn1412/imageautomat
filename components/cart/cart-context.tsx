"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { useSession, signIn } from "next-auth/react"

export type CartLine = {
    productId: number
    qty: number
    name: string
    image: string
    category: string
    unitTHB: number
    whtRate: number
}

type CartCtx = {
    items: CartLine[]
    count: number
    subtotalTHB: number
    open: boolean
    setOpen: (o: boolean) => void
    add: (productId: number) => Promise<void>
    setQty: (productId: number, qty: number) => Promise<void>
    remove: (productId: number) => Promise<void>
}

const Ctx = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
    const { status } = useSession()
    const [items, setItems] = useState<CartLine[]>([])
    const [open, setOpen] = useState(false)

    const load = useCallback(async () => {
        const res = await fetch("/api/cart")
        if (res.ok) setItems((await res.json()).items)
    }, [])

    useEffect(() => {
        if (status === "authenticated") load()
        else if (status === "unauthenticated") setItems([])
    }, [status, load])

    const mutate = useCallback(
        async (method: string, body: object) => {
            const res = await fetch("/api/cart", { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
            if (res.ok) setItems((await res.json()).items)
        },
        []
    )

    const add = useCallback(
        async (productId: number) => {
            if (status !== "authenticated") return signIn("google") // ต้อง login ก่อนซื้อ
            await mutate("POST", { productId })
            setOpen(true)
        },
        [status, mutate]
    )

    const setQty = useCallback((productId: number, qty: number) => mutate("PATCH", { productId, qty }), [mutate])
    const remove = useCallback((productId: number) => mutate("DELETE", { productId }), [mutate])

    const count = items.reduce((n, i) => n + i.qty, 0)
    const subtotalTHB = items.reduce((s, i) => s + i.unitTHB * i.qty, 0)

    return (
        <Ctx.Provider value={{ items, count, subtotalTHB, open, setOpen, add, setQty, remove }}>
            {children}
        </Ctx.Provider>
    )
}

export function useCart() {
    const c = useContext(Ctx)
    if (!c) throw new Error("useCart must be used within CartProvider")
    return c
}
