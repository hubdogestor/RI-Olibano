"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  CalendarRange,
  Clock,
  FlaskConical,
  Gem,
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

const teamMembers = [
  {
    name: "Betusa Kramer",
    role: "COO & Co-founder",
    bio: "Médica integrativa, idealizadora da jornada Olíbano e responsável pelos protocolos terapêuticos e curadoria clínica.",
  },
  {
    name: "Alexandre Freire",
    role: "CEO & Co-founder",
    bio: "Executivo de tecnologia e growth há 15 anos, lidera estratégia, finanças e expansão comercial do Olíbano.",
  },
  {
    name: "Leonardo Menezes",
    role: "CPO & Co-founder",
    bio: "Especialista em produto e operações omnichannel. Integra experiência física, digital e dados do negócio.",
  },
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
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Casa Olíbano · Medplex Santana</p>
            <h1 className="text-balance text-4xl font-serif text-[#354037] sm:text-5xl">
              Bem-estar científico com alma brasileira para uma vida que não desacelera.
            </h1>
            <p className="max-w-2xl text-pretty text-lg text-[#4a463f] sm:text-xl">
              Transformamos pressão urbana em equilíbrio tangível com protocolos multisensoriais, hospitalidade boutique
              e indicadores de performance validados. Um refúgio premium para quem entende autocuidado como investimento.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/ri"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ac4e15] via-[#d59d40] to-[#69683b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-lg shadow-[#ac4e15]/25 transition-transform hover:scale-[1.02]"
              >
                Sala do Investidor
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/5551993622621?text=Ol%C3%A1!%20Quero%20agendar%20uma%20experi%C3%AAncia%20na%20Casa%20OL%C3%8DBANO."
                className="inline-flex items-center gap-2 rounded-full border border-[#ac4e15]/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#ac4e15] transition-colors hover:bg-[#ac4e15]/10"
              >
                Agende sua visita
              </a>
              <Link
                href="#journeys"
                className="inline-flex items-center gap-2 rounded-full border border-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#354037] transition-colors hover:text-[#ac4e15]"
              >
                Conheça as jornadas
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

      <section id="problema" className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Por que existimos</p>
            <h2 className="text-balance text-3xl font-serif text-[#354037] sm:text-4xl">
              A pressão da vida em alta performance exige um refúgio à altura.
            </h2>
            <p className="max-w-3xl text-lg text-[#4a463f]">
              Mapeamos as principais dores da nossa comunidade no Sul do Brasil. O Olíbano nasce para responder com uma
              experiência científica, humana e financeiramente sustentável.
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
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#d59d40] text-white shadow-lg shadow-[#ac4e15]/30">
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

      <section id="experiencia" className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Jornada sensorial</p>
            <h2 className="text-balance text-3xl font-serif text-[#354037] sm:text-4xl">
              Multissensorialidade guiada por ciência integrativa.
            </h2>
            <p className="max-w-3xl text-lg text-[#4a463f]">
              Cada roteiro combina protocolos terapêuticos, tecnologia e design para acelerar resultados clínicos e
              emocionais. O visitante entra em modo alfa nos primeiros 7 minutos.
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
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#d59d40] text-white shadow-lg shadow-[#ac4e15]/30">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl text-[#354037]">{pillar.title}</h3>
                <p className="text-base text-[#4a463f]">{pillar.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="resultados" className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Resultados concretos</p>
            <h2 className="text-balance text-3xl font-serif text-[#354037] sm:text-4xl">
              Métricas e governança que sustentam a expansão.
            </h2>
            <p className="max-w-3xl text-lg text-[#4a463f]">
              Crescemos com disciplina financeira, experiências memoráveis e time fundador dedicado a replicar o modelo
              em novas praças estratégicas.
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
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#d59d40] text-white shadow-lg shadow-[#ac4e15]/30">
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

      <section id="time" className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Equipe fundadora</p>
            <h2 className="text-balance text-3xl font-serif text-[#354037] sm:text-4xl">Três especialistas complementares liderando a expansão.</h2>
            <p className="max-w-3xl text-lg text-[#4a463f]">Investidores escolhem times. Reunimos visão clínica, tecnologia e operações para escalar o Olíbano com governança.</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex h-full flex-col gap-3 rounded-3xl border border-[#d9cbbb]/60 bg-white/80 p-6 text-[#354037] shadow-lg shadow-[#ac4e15]/10 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.32em] text-[#ac4e15]/80">{member.role}</p>
                <h3 className="text-xl font-serif font-semibold">{member.name}</h3>
                <p className="text-sm text-[#4a463f]">{member.bio}</p>
              </motion.article>
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
            <p className="text-sm uppercase tracking-[0.4em] text-[#d59d40]">Conexão com a equipe fundadora</p>
            <h2 className="text-balance text-4xl sm:text-5xl">
              Vamos cocriar o futuro do wellness premium no Brasil?
            </h2>
            <p className="max-w-3xl text-lg text-white/80">
              Agende uma imersão privada ou converse diretamente com Relações com Investidores. Apresentamos a operação,
              os aprendizados do MVP e o roadmap de expansão.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="mailto:ri@olibanovip.com.br"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/20"
              >
                Falar com RI
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ri"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
              >
                Acessar sala do investidor
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
