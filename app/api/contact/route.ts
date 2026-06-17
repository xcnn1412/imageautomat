import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"
import { rateLimit } from "@/lib/rate-limit"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const RECIPIENTS = ["imageautomat@gmail.com", "graphic.mimage@gmail.com"]

const ContactSchema = z.object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(150),
    phone: z.string().trim().max(30).optional().default(""),
    eventType: z.string().trim().max(50).optional().default(""),
    eventDate: z.string().trim().max(20).optional().default(""),
    message: z.string().trim().max(2000).optional().default(""),
    website: z.string().max(0).optional().default(""),
})

function escapeHtml(s: string): string {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
}

function sanitizeHeader(s: string): string {
    return s.replace(/[\r\n]/g, " ").slice(0, 200)
}

export async function POST(req: NextRequest) {
    const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        req.headers.get("x-real-ip") ||
        "unknown"

    const rl = rateLimit(`contact:${ip}`)
    if (!rl.ok) {
        return NextResponse.json(
            { error: "Too many requests. Please try again later." },
            { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
        )
    }

    let raw: unknown
    try {
        raw = await req.json()
    } catch {
        return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    const parsed = ContactSchema.safeParse(raw)
    if (!parsed.success) {
        return NextResponse.json(
            { error: "Invalid form data" },
            { status: 400 }
        )
    }

    const data = parsed.data

    if (data.website && data.website.length > 0) {
        return NextResponse.json({ ok: true })
    }

    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    if (!user || !pass) {
        console.error("[contact] SMTP credentials not configured")
        return NextResponse.json(
            { error: "Email service is not configured" },
            { status: 503 }
        )
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user, pass },
    })

    const subject = sanitizeHeader(`[IMAGEAUTOMAT] ฟอร์มติดต่อใหม่จาก ${data.name}`)
    const replyTo = sanitizeHeader(data.email)

    const text = [
        "มีผู้ติดต่อใหม่ผ่านฟอร์มเว็บไซต์",
        "",
        `ชื่อ: ${data.name}`,
        `อีเมล: ${data.email}`,
        `เบอร์โทร: ${data.phone || "-"}`,
        `ประเภทงาน: ${data.eventType || "-"}`,
        `วันงาน: ${data.eventDate || "-"}`,
        "",
        "ข้อความ:",
        data.message || "-",
        "",
        `IP: ${ip}`,
    ].join("\n")

    const html = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px;">
  <h2 style="color: #023047;">มีผู้ติดต่อใหม่ผ่านฟอร์มเว็บไซต์</h2>
  <table style="border-collapse: collapse; width: 100%;">
    <tr><td style="padding: 6px 12px 6px 0; color: #666;">ชื่อ:</td><td style="padding: 6px 0;"><strong>${escapeHtml(data.name)}</strong></td></tr>
    <tr><td style="padding: 6px 12px 6px 0; color: #666;">อีเมล:</td><td style="padding: 6px 0;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
    <tr><td style="padding: 6px 12px 6px 0; color: #666;">เบอร์โทร:</td><td style="padding: 6px 0;">${escapeHtml(data.phone || "-")}</td></tr>
    <tr><td style="padding: 6px 12px 6px 0; color: #666;">ประเภทงาน:</td><td style="padding: 6px 0;">${escapeHtml(data.eventType || "-")}</td></tr>
    <tr><td style="padding: 6px 12px 6px 0; color: #666;">วันงาน:</td><td style="padding: 6px 0;">${escapeHtml(data.eventDate || "-")}</td></tr>
  </table>
  <h3 style="color: #023047; margin-top: 24px;">ข้อความ:</h3>
  <p style="white-space: pre-wrap; padding: 12px; background: #f5f5f5; border-left: 3px solid #FB8500;">${escapeHtml(data.message || "-")}</p>
  <p style="color: #999; font-size: 12px; margin-top: 24px;">IP: ${escapeHtml(ip)}</p>
</div>`.trim()

    try {
        await transporter.sendMail({
            from: `"IMAGEAUTOMAT Web" <${user}>`,
            to: RECIPIENTS.join(", "),
            replyTo,
            subject,
            text,
            html,
        })
        return NextResponse.json({ ok: true })
    } catch (err) {
        console.error("[contact] sendMail failed:", err)
        return NextResponse.json(
            { error: "Failed to send message. Please try again." },
            { status: 500 }
        )
    }
}
