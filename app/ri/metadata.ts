import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Olíbano - Investor Relations",
  description:
    "Centro premium de bem-estar integrativo com protocolos proprietários. NPS 92, retenção 78%, ticket médio R$799. Rodada seed R$1M por 25% equity.",
  keywords: [
    "investor relations",
    "wellness premium",
    "healthtech",
    "bem-estar integrativo",
    "medicina integrativa",
    "seed round",
    "venture capital",
    "Porto Alegre",
  ],
  authors: [{ name: "Olíbano Team" }],
  creator: "Olíbano",
  publisher: "Olíbano",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://olibanovip.com.br/ri",
    title: "Olíbano - Investor Relations",
    description:
      "Oportunidade de investimento em wellness premium. Modelo validado, métricas sólidas, mercado R$12B no Brasil.",
    siteName: "Olíbano",
    images: [
      {
        url: "/brand/og-image-ri.png", // TODO: Create this image
        width: 1200,
        height: 630,
        alt: "Olíbano Investor Relations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olíbano - Investor Relations",
    description: "Oportunidade de investimento em wellness premium. NPS 92, retenção 78%, R$1M seed round.",
    images: ["/brand/twitter-card-ri.png"], // TODO: Create this image
    creator: "@olibanovip",
  },
  robots: {
    index: false, // Don't index RI page publicly
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "https://olibanovip.com.br/ri",
  },
}
