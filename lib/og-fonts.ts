/**
 * Loads a TTF font from Google Fonts at request/build time.
 * Used by Next.js opengraph-image generators.
 *
 * Why: Next.js's <ImageResponse> needs raw font data for non-Latin glyphs.
 * Default fonts won't render Thai characters at all — Satori falls back to "?" or empty boxes.
 */
export async function loadGoogleFont(
    family: string,
    weight: 400 | 500 | 600 | 700 | 800
): Promise<ArrayBuffer> {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${family.replace(
        / /g,
        "+"
    )}:wght@${weight}&display=swap`

    const css = await fetch(cssUrl, {
        headers: {
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
    }).then((r) => r.text())

    const match = css.match(/src:\s*url\((.+?)\)\s*format\(['"]truetype['"]\)/)
    if (!match) {
        throw new Error(
            `Could not find TTF URL in Google Fonts CSS for ${family} ${weight}`
        )
    }

    const fontRes = await fetch(match[1])
    if (!fontRes.ok) {
        throw new Error(`Failed to fetch font: ${fontRes.status}`)
    }
    return fontRes.arrayBuffer()
}
