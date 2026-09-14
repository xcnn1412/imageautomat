import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LoginForm } from "./login-form"

export const metadata: Metadata = {
    title: "เข้าสู่ระบบสมาชิก IMAGE AUTOMAT",
    description: "เข้าสู่ระบบสมาชิก IMAGE AUTOMAT ด้วยบัญชี Google เพื่อดูราคา สั่งซื้อ และติดตามสถานะออเดอร์",
    alternates: { canonical: "/login" },
}

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            <section className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-24">
                <h1 className="font-serif text-3xl tracking-tight text-deep-space-blue lg:text-4xl">
                    เข้าสู่ระบบสมาชิก IMAGE AUTOMAT
                </h1>
                <p className="mt-3 text-deep-space-blue/60">
                    เข้าสู่ระบบด้วยบัญชี Google เพื่อดูราคา สั่งซื้อ และติดตามสถานะออเดอร์
                </p>
                <LoginForm />
            </section>
            <Footer />
        </main>
    )
}
