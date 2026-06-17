// server-only — import SDK (node). อย่า import จาก client component
// @ts-expect-error ksher-pay ships no type declarations
import PaySDK from "ksher-pay"
import type { PaymentMethod } from "./payment-methods"

type PayInput = { merchantOrderId: string; amountSatang: number; note: string; origin: string }

export async function createPayment(method: PaymentMethod, input: PayInput): Promise<{ url: string; reference: string }> {
    if (method === "ksher_linkpay") return ksherLinkpay(input)
    return ksherQr(input)
}

async function ksherQr({ merchantOrderId, amountSatang, note, origin }: PayInput) {
    const { KSHER_HOST: host, KSHER_TOKEN: token } = process.env
    if (!host || !token) throw new Error("ksher not configured")
    const sdk = new PaySDK({ host, token })
    const { data } = await sdk.orderCreate({
        amount: amountSatang,
        merchant_order_id: merchantOrderId,
        note,
        redirect_url: `${origin}/account/orders?paid=${merchantOrderId}`,
        redirect_url_fail: `${origin}/checkout?failed=${merchantOrderId}`,
        timestamp: String(Date.now()),
    })
    if (!data?.reference) throw new Error("no payment url from ksher")
    return { url: data.reference as string, reference: data.reference as string }
}

// ponytail: LinkPay ยัง mock — คืน URL ปลอมจนกว่าจะต่อ Ksher LinkPay API จริง
async function ksherLinkpay({ merchantOrderId, origin }: PayInput) {
    return { url: `${origin}/account/orders?mock_linkpay=${merchantOrderId}`, reference: `MOCK-LINKPAY-${merchantOrderId}` }
}
