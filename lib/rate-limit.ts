type Bucket = { count: number; reset: number }

const buckets = new Map<string, Bucket>()
const WINDOW_MS = 60_000
const MAX_REQUESTS = 5

export function rateLimit(key: string): { ok: boolean; retryAfterSec: number } {
    const now = Date.now()
    const bucket = buckets.get(key)

    if (!bucket || now > bucket.reset) {
        buckets.set(key, { count: 1, reset: now + WINDOW_MS })
        return { ok: true, retryAfterSec: 0 }
    }

    if (bucket.count >= MAX_REQUESTS) {
        return { ok: false, retryAfterSec: Math.ceil((bucket.reset - now) / 1000) }
    }

    bucket.count += 1
    return { ok: true, retryAfterSec: 0 }
}
