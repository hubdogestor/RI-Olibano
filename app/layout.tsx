import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import SiteHeader from "@/components/site-header"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "OLÍBANO - Relações com Investidores",
  description:
    "Centro premium de terapias integrativas com modelo escalável. Oportunidade de investimento em bem-estar de alto padrão.",
  keywords: ["investimento", "bem-estar", "terapias integrativas", "wellness", "saúde premium", "Porto Alegre", "RI"],
  authors: [{ name: "OLÍBANO" }],
  creator: "OLÍBANO",
  publisher: "OLÍBANO",
  metadataBase: new URL("https://ri.olibanovip.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OLÍBANO - Relações com Investidores",
    description:
      "Centro premium de terapias integrativas com modelo escalável. Oportunidade de investimento em bem-estar de alto padrão.",
    url: "https://ri.olibanovip.com.br",
    siteName: "OLÍBANO RI",
    images: [
      {
        url: "/brand/logotipo-primary.png",
        width: 1200,
        height: 630,
        alt: "OLÍBANO - Centro de Terapias Integrativas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OLÍBANO - Relações com Investidores",
    description:
      "Centro premium de terapias integrativas com modelo escalável. Oportunidade de investimento em bem-estar de alto padrão.",
    images: ["/brand/logotipo-primary.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Adicionar código real quando disponível
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-[#ac4e15] focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Pular para o conteúdo principal
        </a>
        <SiteHeader />
        <main id="main-content" className="min-h-screen pt-[var(--header-height)]">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
