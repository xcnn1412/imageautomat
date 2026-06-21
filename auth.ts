import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import { isAdminEmail } from "@/lib/orders"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    // อีเมล Google ผ่านการยืนยันแล้ว → ลิงก์เข้ากับ user เดิม (ที่สร้างไว้ตอนสมัครรออนุมัติ) ได้อย่างปลอดภัย
    providers: [Google({ allowDangerousEmailAccountLinking: true })],
    callbacks: {
        // gate: สมาชิกต้องถูก admin อนุมัติ (approvedAt) ก่อนจึงเข้าระบบได้
        async signIn({ user }) {
            const email = user.email?.toLowerCase()
            if (!email) return false
            if (isAdminEmail(email)) return true // admin ผ่านตลอด

            const existing = await prisma.user.findUnique({ where: { email }, select: { approvedAt: true } })
            if (!existing) {
                // สมัครครั้งแรก: สร้าง record รออนุมัติ แต่ยังไม่ให้ session (account จะ auto-link ตอน login รอบหน้า)
                await prisma.user.create({ data: { email, name: user.name, image: user.image } })
                return "/pending?new=1"
            }
            return existing.approvedAt ? true : "/pending"
        },
        // database session: เอา user.id ใส่ใน session ให้ route อ่านได้
        session({ session, user }) {
            session.user.id = user.id
            return session
        },
    },
})
