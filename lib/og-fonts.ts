/**
 * Loads bundled IBM Plex Sans Thai font subsets for <ImageResponse>.
 *
 * Why bundled instead of fetched: in CI/PaaS build environments (Railway, etc.)
 * Google Fonts may serve woff2 instead of ttf depending on negotiated headers,
 * which Satori cannot decode. Bundling guarantees a deterministic build.
 *
 * Two subsets are loaded with separate family names so Satori falls back per
 * character: Latin glyphs from one file, Thai glyphs from the other.
 */
import { readFile } from "node:fs/promises"
import type { ImageResponse } from "next/og"

type FontEntry = NonNullable<
    ConstructorParameters<typeof ImageResponse>[1]
>["fonts"] extends (infer T)[] | undefined
    ? T
    : never

async function loadFile(name: string): Promise<Buffer> {
    return readFile(new URL(`./fonts/${name}`, import.meta.url))
}

export async function loadOgFonts(): Promise<FontEntry[]> {
    const [latin400, latin700, thai400, thai700] = await Promise.all([
        loadFile("IBMPlexSansThai-Latin-400.woff"),
        loadFile("IBMPlexSansThai-Latin-700.woff"),
        loadFile("IBMPlexSansThai-Thai-400.woff"),
        loadFile("IBMPlexSansThai-Thai-700.woff"),
    ])
    return [
        { name: "Plex Latin", data: latin400, weight: 400, style: "normal" },
        { name: "Plex Latin", data: latin700, weight: 700, style: "normal" },
        { name: "Plex Thai", data: thai400, weight: 400, style: "normal" },
        { name: "Plex Thai", data: thai700, weight: 700, style: "normal" },
    ]
}

export const OG_FONT_FAMILY = "Plex Latin, Plex Thai"
