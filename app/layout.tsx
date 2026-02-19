import React from "react"
import type { Metadata } from 'next'
import { Montserrat, IBM_Plex_Sans_Thai, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@/components/google-analytics'
import { AppLoadingWrapper } from '@/components/loading/app-loading-wrapper'
import './globals.css'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  variable: '--font-ibm-plex-thai',
  weight: ['400', '500', '700'],
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ตู้โฟโต้บูธพรีเมียม ผลิตในไทย จำหน่าย เช่า OEM | IMAGEAUTOMAT',
    template: '%s | IMAGEAUTOMAT',
  },
  description: 'ตู้โฟโต้บูธคุณภาพพรีเมียม ผลิตในไทย 100% จำหน่าย เช่า รับผลิต OEM/ODM พร้อมซอฟต์แวร์ Imageland อัปเดตฟรีตลอดชีพ รับประกัน 1 ปี บริการหลังขายครบวงจร',
  keywords: [
    'ตู้โฟโต้บูธ', 'ซื้อตู้โฟโต้บูธ', 'ตู้ถ่ายรูป', 'photobooth',
    'ผลิตตู้โฟโต้บูธ', 'ตู้โฟโต้บูธผลิตในไทย', 'ราคาตู้โฟโต้บูธ',
    'เช่าโฟโต้บูธ', 'เช่าตู้ถ่ายรูป', 'photobooth rental',
    'OEM photobooth', 'รับผลิตตู้ถ่ายรูป',
    'ซอฟต์แวร์โฟโต้บูธ', 'Imageland', 'photobooth software',
    'IMAGEAUTOMAT', 'imageautomat',
  ],
  authors: [{ name: 'IMAGEAUTOMAT' }],
  creator: 'IMAGEAUTOMAT',
  publisher: 'IMAGEAUTOMAT',
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.imageautomat.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://www.imageautomat.com',
    siteName: 'IMAGEAUTOMAT',
    title: 'ตู้โฟโต้บูธพรีเมียม ผลิตในไทย จำหน่าย เช่า OEM | IMAGEAUTOMAT',
    description: 'ตู้โฟโต้บูธคุณภาพพรีเมียม ผลิตในไทย 100% จำหน่าย เช่า รับผลิต OEM/ODM พร้อมซอฟต์แวร์ครบวงจร',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ตู้โฟโต้บูธคุณภาพพรีเมียม ผลิตในไทย — IMAGEAUTOMAT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ตู้โฟโต้บูธพรีเมียม ผลิตในไทย | IMAGEAUTOMAT',
    description: 'ตู้โฟโต้บูธคุณภาพพรีเมียม ผลิตในไทย 100% จำหน่าย เช่า รับผลิต OEM/ODM',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'IMAGEAUTOMAT',
  description: 'ตู้โฟโต้บูธพรีเมียม ผลิตในไทย 100% จำหน่าย เช่า OEM พร้อมซอฟต์แวร์ครบวงจร — IMAGEAUTOMAT Premium Photobooth Thailand',
  url: 'https://www.imageautomat.com',
  logo: 'https://www.imageautomat.com/logo.png',
  image: 'https://www.imageautomat.com/images/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangkok',
    addressCountry: 'TH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '13.7563',
    longitude: '100.5018',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Thailand',
  },
  priceRange: '$$',
  serviceType: ['จำหน่ายตู้โฟโต้บูธ', 'เช่าตู้โฟโต้บูธ', 'รับผลิต OEM/ODM', 'ซอฟต์แวร์ Photobooth'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'บริการตู้โฟโต้บูธ',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'จำหน่ายตู้โฟโต้บูธ',
          description: 'ตู้โฟโต้บูธคุณภาพพรีเมียม ผลิตในไทย 100% พร้อมซอฟต์แวร์ Imageland อัปเดตฟรีตลอดชีพ',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'เช่าตู้โฟโต้บูธ',
          description: 'บริการเช่าตู้โฟโต้บูธพร้อมทีมงานมืออาชีพ สำหรับงานแต่งงาน งานอีเวนต์ และงานองค์กร',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'รับผลิต OEM/ODM',
          description: 'ออกแบบและผลิตตู้โฟโต้บูธตามสเปคที่ต้องการ MOQ 1 ตู้',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} ${ibmPlexSansThai.variable} ${playfairDisplay.variable} font-sans antialiased`} suppressHydrationWarning>
        <AppLoadingWrapper>
          {children}
        </AppLoadingWrapper>
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  )
}
