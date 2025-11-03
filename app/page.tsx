"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  CalendarRange,
  FlaskConical,
  Heart,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const impactMetrics = [
  { label: "NPS", value: "92" },
  { label: "Retenção", value: "78%" },
  { label: "Ticket médio", value: "R$ 799" },
]

const stressSignals: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: "Pressão urbana crônica",
    description:
      "Executivos e líderes vivem jornadas de alta exigência com sinais claros de burnout, fadiga decisória e queda de produtividade.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Sono e ansiedade desregulados",
    description:
      "Rotina conectada 24/7 e eventos climáticos recentes ampliaram distúrbios de sono, ansiedade e desequilíbrios hormonais.",
    icon: Brain,
  },
  {
    title: "Falta de espaços confiáveis",
    description:
      "Mercado premium carece de ambientes com protocolos seguros, estética impecável e acompanhamento humano de ponta a ponta.",
    icon: ShieldCheck,
  },
]

const solutionHighlight = {
  title: "Nossa resposta: experiência multissensorial validada",
  description:
    "Ritual proprietário de 2 horas que combina flutuação, cromoterapia, aromaterapia autoral e protocolos integrativos desenvolvidos por médicos. O visitante entra em modo alfa nos primeiros 7 minutos.",
}

const differentiators: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: "Ritual Sensorial Assinado",
    description:
      "Camadas de flutuação, cromoterapia, som imersivo e blends autorais que ressincronizam o sistema nervoso.",
    icon: Sparkles,
  },
  {
    title: "Ciência Integrativa",
    description:
      "Protocolos desenhados por médicos e terapeutas certificados, unindo biomarcadores a práticas ancestrais.",
    icon: FlaskConical,
  },
  {
    title: "Hospitalidade Boutique",
    description:
      "Arquitetura biofílica, agenda controlada e concierge dedicado que garante presença genuína da equipe.",
    icon: Heart,
  },
  {
    title: "Localização Estratégica",
    description:
      "Hub no Medplex Santana, maior ecossistema de saúde premium do Sul, com fluxo qualificado diário.",
    icon: MapPin,
  },
]

const tractionHighlights: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: "Blueprint escalável",
    description: "Playbook arquitetônico e sensorial pronto para replicação em capitais premium.",
    icon: TrendingUp,
  },
  {
    title: "Clientes fundadores",
    description: "24 membros pagantes no MVP com retenção mensal de 78% e capacidade ainda reduzida.",
    icon: Users,
  },
  {
    title: "Receita validada",
    description: "R$ 18,9 mil nos primeiros 90 dias, ticket médio de R$ 799 e upsell recorrente.",
    icon: CalendarRange,
  },
]

const tractionTimeline = [
  { period: "Q1 2023", label: "Modelagem do negócio" },
  { period: "Q4 2023", label: "Arquitetura assinada" },
  { period: "Q1 2024", label: "Pausa e resiliência (enchentes RS)" },
  { period: "Q1 2025", label: "MVP lançado com 24 clientes" },
]

const marketSnapshot = [
  { label: "TAM Brasil", value: "R$ 2 bi", detail: "Mercado nacional de wellness premium crescendo 8,5% ao ano." },
  { label: "SAM Porto Alegre", value: "500 mil", detail: "Adultos A/B com alto poder aquisitivo na região metropolitana." },
  { label: "SOM 3 anos", value: "6 mil", detail: "Clientes qualificados para duas unidades Olíbano até 2026." },
]



const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerFade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export default function HomePage() {
  return (
    <div className="relative flex flex-col gap-28 bg-transparent pb-28">
      <section
        id="hero"
        className="relative isolate overflow-hidden bg-gradient-to-br from-white via-[#f8f2e9] to-[#f3e4d1] px-6 pb-20 pt-24 sm:px-8 lg:px-12 lg:pt-28"
      >
        <div className="absolute inset-0 opacity-20">
          <Image src="/brand/pattern.png" alt="Padrão OLÍBANO" fill priority className="object-cover mix-blend-multiply" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-16 lg:flex-row lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex-1 space-y-8">
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">OLÍBANO</p>
            <h1 className="text-balance text-4xl font-serif text-[#354037] sm:text-5xl">
              Bem-estar integrativo de alto padrão com protocolos proprietários e métricas comprovadas.
            </h1>
            <p className="max-w-2xl text-pretty text-lg text-[#4a463f] sm:text-xl">
              Jornada sensorial de 2 horas que combina medicina integrativa, tecnologia e hospitalidade boutique. Modelo replicável validado em 90 dias com NPS 92, retenção de 78% e ticket médio de R$799. Posicionamento único no mercado premium do Sul do Brasil.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="mailto:ri@olibanovip.com.br"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ac4e15] via-[#C88715] to-[#69683b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-lg shadow-[#ac4e15]/25 transition-transform hover:scale-[1.02]"
              >
                Contato RI
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex-1"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-[#d9cbbb]/60 bg-white/40 shadow-2xl shadow-[#ac4e15]/15 backdrop-blur">
              <Image
                src="/brand/logotipo-primary.png"
                alt="Logotipo OLÍBANO"
                width={640}
                height={360}
                className="w-full object-contain px-12 py-16 sm:px-16 sm:py-20"
              />
              <div className="absolute inset-0 rounded-[32px] border border-white/40" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerFade}
          className="relative mt-16 grid gap-6 rounded-3xl border border-[#d9cbbb]/60 bg-white/70 p-6 shadow-lg shadow-[#354037]/5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impactMetrics.map((stat) => (
            <motion.div key={stat.label} variants={fadeIn} className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.28em] text-[#ac4e15]/80">{stat.label}</span>
              <span className="text-3xl font-semibold text-[#354037]">{stat.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="oportunidade" className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Oportunidade de mercado</p>
            <h2 className="text-balance text-3xl font-serif text-[#354037] sm:text-4xl">
              Gap estrutural no mercado premium de saúde integrativa no Sul do Brasil.
            </h2>
            <p className="max-w-3xl text-lg text-[#4a463f]">
              Identificamos demanda reprimida em segmento de alto valor com disposição a pagar por experiências personalizadas, cientificamente validadas e esteticamente impecáveis.
            </p>
          </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {stressSignals.map((signal, index) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-[#d9cbbb]/60 bg-white/75 p-8 shadow-lg shadow-[#354037]/5 backdrop-blur"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#C88715] text-white shadow-lg shadow-[#ac4e15]/30">
                  <signal.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#354037]">{signal.title}</h3>
                <p className="text-base text-[#4a463f]">{signal.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[#d9cbbb]/60 bg-gradient-to-r from-[#f8f2e6] via-white to-[#f4ead8] p-8 shadow-inner shadow-[#ac4e15]/10"
          >
            <p className="text-xs uppercase tracking-[0.36em] text-[#ac4e15]">{solutionHighlight.title}</p>
            <p className="mt-3 max-w-3xl text-base text-[#4a463f]">{solutionHighlight.description}</p>
          </motion.div>
        </div>
      </section>

      <section id="diferenciais" className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Diferenciais competitivos</p>
            <h2 className="text-balance text-3xl font-serif text-[#354037] sm:text-4xl">
              Protocolo proprietário que combina ciência, design e curadoria terapêutica.
            </h2>
            <p className="max-w-3xl text-lg text-[#4a463f]">
              Criamos uma nova categoria de experiência ao integrar medicina integrativa, tecnologia sensorial e hospitalidade boutique em um modelo escalável e defensável.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {differentiators.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-[#d9cbbb]/60 bg-white/75 p-8 shadow-lg shadow-[#354037]/5 backdrop-blur"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#C88715] text-white shadow-lg shadow-[#ac4e15]/30">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl text-[#354037]">{pillar.title}</h3>
                <p className="text-base text-[#4a463f]">{pillar.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="tracao" className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Tração e validação</p>
            <h2 className="text-balance text-3xl font-serif text-[#354037] sm:text-4xl">
              MVP operacional com métricas que confirmam product-market fit.
            </h2>
            <p className="max-w-3xl text-lg text-[#4a463f]">
              Modelo validado em 90 dias com alta retenção, ticket premium e capacidade de replicação. Blueprint arquitetônico e operacional pronto para escalar em mercados estratégicos.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {tractionHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-[#d9cbbb]/60 bg-white/80 p-8 shadow-lg shadow-[#354037]/5 backdrop-blur"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#C88715] text-white shadow-lg shadow-[#ac4e15]/30">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#354037]">{item.title}</h3>
                <p className="text-sm text-[#4a463f]">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl border border-[#d9cbbb]/60 bg-white/80 p-6 shadow-inner shadow-[#ac4e15]/10"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-[#ac4e15]/80">Linha do tempo</p>
            <div className="mt-4 grid gap-4 md:grid-cols-4">
              {tractionTimeline.map((milestone) => (
                <div key={milestone.period} className="rounded-2xl border border-[#d9cbbb]/60 bg-white/70 p-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#ac4e15]/70">{milestone.period}</p>
                  <p className="mt-2 text-sm font-semibold text-[#354037]">{milestone.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="mercado" className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Oportunidade de mercado</p>
            <h2 className="text-balance text-3xl font-serif text-[#354037] sm:text-4xl">Bem-estar premium com demanda reprimida no Sul.</h2>
            <p className="max-w-3xl text-lg text-[#4a463f]">Mercado nacional supera R$ 2 bilhões e Porto Alegre concentra um público A/B com alto poder aquisitivo em busca de novas experiências.</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {marketSnapshot.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-[#d9cbbb]/60 bg-white/80 p-6 shadow-lg shadow-[#ac4e15]/10 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.32em] text-[#ac4e15]/80">{item.label}</p>
                <p className="mt-3 text-2xl font-serif font-semibold text-[#354037]">{item.value}</p>
                <p className="mt-3 text-sm text-[#4a463f]">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-[#d9cbbb]/70 bg-gradient-to-r from-[#354037] via-[#3f4a41] to-[#1f251f] p-10 sm:p-14 text-white shadow-[0_20px_60px_rgba(22,25,21,0.45)]"
        >
          <div className="absolute inset-0 opacity-30">
            <Image src="/brand/pattern.png" alt="Pattern Olíbano" fill className="object-cover mix-blend-overlay" />
          </div>
          <div className="relative space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-[#C88715]">Relações com investidores</p>
            <h2 className="text-balance text-4xl sm:text-5xl">
              Construir a categoria de wellness integrativo premium no Brasil.
            </h2>
            <p className="max-w-3xl text-lg text-white/80">
              Buscamos parceiros estratégicos que agreguem capital inteligente, network qualificado e experiência em escalar operações de alto padrão. Converse diretamente com a equipe fundadora.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="mailto:ri@olibanovip.com.br"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#354037] transition-colors hover:bg-white/90"
              >
                Contato RI
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ri"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
              >
                Ver pitch completo
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
