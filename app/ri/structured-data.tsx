"use client"

/**
 * JSON-LD Structured Data for SEO
 * Helps search engines understand the organization and investment opportunity
 */

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Olíbano",
    description: "Centro premium de bem-estar integrativo com protocolos proprietários validados",
    url: "https://olibanovip.com.br",
    logo: "https://olibanovip.com.br/brand/logotipo-primary.png",
    foundingDate: "2023",
    founders: [
      {
        "@type": "Person",
        name: "Betusa Ribeiro",
        jobTitle: "CEO & Co-founder",
      },
      {
        "@type": "Person",
        name: "Alexandre Oliveira",
        jobTitle: "COO & Co-founder",
      },
      {
        "@type": "Person",
        name: "Leonardo Silva",
        jobTitle: "CPO & Co-founder",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Porto Alegre",
      addressRegion: "RS",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Investor Relations",
      email: "ri@olibanovip.com.br",
      telephone: "+55-51-99362-2621",
    },
    sameAs: ["https://instagram.com/olibanovip"],
  }

  const investmentOpportunitySchema = {
    "@context": "https://schema.org",
    "@type": "InvestmentOrSavingsProduct",
    name: "Olíbano Seed Round",
    description: "Rodada seed de R$1.000.000 por 25% do equity (valuation pré-money R$3.000.000)",
    provider: {
      "@type": "Organization",
      name: "Olíbano",
    },
    amount: {
      "@type": "MonetaryAmount",
      currency: "BRL",
      value: "1000000",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(investmentOpportunitySchema) }}
      />
    </>
  )
}
