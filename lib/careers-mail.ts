const APPLY_EMAIL = "imageautomat@gmail.com"

export function buildApplyMailto(jobTitle: string): string {
    const subject = encodeURIComponent(`สมัครงานตำแหน่ง ${jobTitle}`)
    const body = encodeURIComponent(
        `เรียน ทีม HR IMAGE AUTOMAT\n\nผม/ดิฉัน สนใจสมัครงานตำแหน่ง "${jobTitle}"\n\nชื่อ-นามสกุล: \nเบอร์ติดต่อ: \nประสบการณ์โดยย่อ: \n\n*แนบเรซูเม่ / CV ในอีเมลนี้\n\nขอบคุณครับ/ค่ะ`
    )
    return `mailto:${APPLY_EMAIL}?subject=${subject}&body=${body}`
}
