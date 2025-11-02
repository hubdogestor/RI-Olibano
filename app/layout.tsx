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
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <SiteHeader />
        <main className="min-h-screen pt-[var(--header-height)]">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
