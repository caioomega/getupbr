import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GETUP Marketing Digital - Especialistas em Tráfego, Design e Marketing",
  description:
    "Transforme sua presença digital com a GETUP. Especialistas em Gestão de Tráfego, Design Criativo e Marketing Digital. Resultados comprovados para seu negócio.",
  keywords:
    "marketing digital, gestão de tráfego, design criativo, tráfego pago, google ads, meta ads, branding, identidade visual",
  authors: [{ name: "GETUP Marketing Digital" }],
  creator: "Caio Mega (GETUP)",
  publisher: "GETUP Marketing Digital",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#7c4dff",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://getup.com.br",
    title: "GETUP Marketing Digital - Transforme sua presença digital",
    description:
      "Especialistas em Gestão de Tráfego, Design e Marketing Digital para impulsionar seu negócio no mundo online.",
    siteName: "GETUP Marketing Digital",
    images: [
      {
        url: "/images/getup-logo-color.png",
        width: 1200,
        height: 630,
        alt: "GETUP Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GETUP Marketing Digital",
    description: "Especialistas em Gestão de Tráfego, Design e Marketing Digital",
    images: ["/images/getup-logo-color.png"],
  },
  icons: {
    icon: [
      {
        url: "/images/getup-logo-color.png",
        href: "/images/getup-logo-color.png",
      },
    ],
    apple: {
      url: "/images/getup-logo-color.png",
      href: "/images/getup-logo-color.png",
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GETUP" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
