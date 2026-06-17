import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getJobBySlug, jobs } from "@/data/jobs"
import { JobDetailContent } from "./job-detail-content"

type Params = { slug: string }

export function generateStaticParams(): Params[] {
    return jobs.map((job) => ({ slug: job.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>
}): Promise<Metadata> {
    const { slug } = await params
    const job = getJobBySlug(slug)
    if (!job) {
        return { title: "ไม่พบตำแหน่งงาน — IMAGE AUTOMAT" }
    }

    const url = `https://www.imageautomat.com/careers/${job.slug}`
    const title = `สมัครงาน ${job.title} — IMAGE AUTOMAT`
    const description = `IMAGE AUTOMAT เปิดรับสมัครตำแหน่ง ${job.title} ${job.summary}`

    return {
        title,
        description,
        keywords: [
            `สมัครงาน ${job.title}`,
            "งาน IMAGE AUTOMAT",
            "งาน Photobooth",
            "หางาน",
            job.title,
        ],
        openGraph: {
            title,
            description,
            url,
            type: "website",
            siteName: "IMAGEAUTOMAT",
            locale: "th_TH",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
        alternates: {
            canonical: url,
        },
    }
}

export default async function CareerDetailPage({
    params,
}: {
    params: Promise<Params>
}) {
    const { slug } = await params
    const job = getJobBySlug(slug)
    if (!job) notFound()

    const datePosted = new Date().toISOString().split("T")[0]
    const validThrough = new Date(
        Date.now() + 90 * 24 * 60 * 60 * 1000
    )
        .toISOString()
        .split("T")[0]

    const jobJsonLd = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: job.title,
        description: [
            job.summary,
            "หน้าที่ความรับผิดชอบ: " + job.responsibilities.join("; "),
            "คุณสมบัติผู้สมัคร: " + job.qualifications.join("; "),
        ].join(" \n "),
        datePosted,
        validThrough,
        employmentType: job.employmentType,
        directApply: true,
        url: `https://www.imageautomat.com/careers/${job.slug}`,
        identifier: {
            "@type": "PropertyValue",
            name: "IMAGE AUTOMAT",
            value: job.slug,
        },
        hiringOrganization: {
            "@type": "Organization",
            name: "IMAGE AUTOMAT",
            sameAs: "https://www.imageautomat.com",
            logo: "https://www.imageautomat.com/images/og-image.jpg",
        },
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Bangkok",
                addressCountry: "TH",
            },
        },
        applicantLocationRequirements: {
            "@type": "Country",
            name: "Thailand",
        },
    }

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "หน้าแรก",
                item: "https://www.imageautomat.com",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "ร่วมงานกับเรา",
                item: "https://www.imageautomat.com/careers",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: job.title,
                item: `https://www.imageautomat.com/careers/${job.slug}`,
            },
        ],
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jobJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbJsonLd),
                }}
            />
            <JobDetailContent slug={job.slug} />
        </>
    )
}
