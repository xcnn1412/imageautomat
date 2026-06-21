import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { isAdmin } from "@/lib/orders"
import { AdminNav } from "@/components/admin-nav"
import { UserRow } from "./user-row"

export const dynamic = "force-dynamic"

export default async function AdminUsersPage() {
  const session = await auth()
  if (!isAdmin(session)) redirect("/")

  // รออนุมัติขึ้นก่อน แล้วตามด้วยที่อนุมัติแล้ว (ใหม่สุดก่อน)
  const users = await prisma.user.findMany({
    orderBy: [{ approvedAt: { sort: "asc", nulls: "first" } }, { createdAt: "desc" }],
    select: { id: true, name: true, email: true, image: true, createdAt: true, approvedAt: true },
    take: 1000,
  })
  const pending = users.filter((u) => !u.approvedAt).length

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <AdminNav active="/admin/users" />
        <h1 className="font-serif text-3xl text-deep-space-blue">สมาชิก</h1>
        <p className="mb-6 mt-1 text-sm text-deep-space-blue/50">
          {pending > 0 ? `มี ${pending} บัญชีรอการอนุมัติ` : "ไม่มีบัญชีรอการอนุมัติ"} — อนุมัติแล้วผู้ใช้จึงจะเข้าสู่ระบบได้
        </p>

        <div className="space-y-2">
          {users.map((u) => (
            <UserRow
              key={u.id}
              id={u.id}
              name={u.name}
              email={u.email}
              image={u.image}
              createdAt={u.createdAt.toISOString()}
              approved={!!u.approvedAt}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
