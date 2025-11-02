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
  { label: "Receita MVP (3 meses)", value: "R$ 18,9 mil" },
]

const stressSignals: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: "Pressão urbana crônica",
    description:
      "Executivos, founders e líderes da zona sul vivem jornadas de alta exigência, com quadros de burnout e exaustão mental recorrentes.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Sono e ansiedade desregulados",
    description:
      "Eventos climáticos extremos e a rotina conectada 24/7 ampliaram queixas de insônia, ansiedade e desequilíbrio hormonal.",
    icon: Brain,
  },
  {
    title: "Falta de espaços confiáveis",
    description:
      "Famílias exigentes buscam ambientes premium com protocolos seguros, acolhimento genuíno e estética impecável para cuidar do corpo e da mente.",
    icon: ShieldCheck,
  },
]

const experienceLayers: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: "Ritual Sensorial Assinado",
    description:
      "Flutuação, cromoterapia, som imersivo e aromaterapia autoral em camadas que resetam o sistema nervoso em minutos.",
    icon: Sparkles,
  },
  {
    title: "Ciência Integrativa",
    description:
      "Protocolos desenvolvidos por médicos e terapeutas especialistas, combinando dados biométricos com práticas ancestrais.",
    icon: FlaskConical,
  },
  {
    title: "Hospitalidade Boutique",
    description:
      "Arquitetura biofílica, agenda exclusiva e anfitriões que acompanham cada detalhe de ponta a ponta.",
    icon: Heart,
  },
]

const signatureJourneys = [
  {
    title: "Jornada Completa · Sessão Individual",
    description:
      "Imersão com flutuação em sal Epsom, cromoterapia, aterramento com cristais e shiatsu em gravidade zero guiado por psicoaromaterapia.",
    price: "R$ 799",
    duration: "90 minutos",
    promise: "Reset imediato para quem precisa performar com clareza e foco.",
  },
  {
    title: "Jornada Contínua · Pacote 3 Sessões",
    description:
      "Ritual progressivo que potencializa os efeitos sensoriais e terapêuticos a cada encontro, consolidando novos hábitos.",
    price: "R$ 2.157",
    duration: "Plano de 3 visitas",
    promise: "Consistência para líderes que desejam manter corpo e mente em alta frequência.",
  },
  {
    title: "Jornada Transformadora · Pacote 5 Sessões",
    description:
      "Programa completo de reprogramação com quinta sessão oferecida pela casa para aprofundar resultados físicos e emocionais.",
    price: "R$ 3.196",
    duration: "Ciclo de 5 encontros",
    promise: "Reconstrução da energia vital e bem-estar prolongado para dividir com quem você ama.",
  },
  {
    title: "Jornada Pocket · Flutuação + Cromoterapia",
    description:
      "Versão concentrada da nossa terapia premium: cápsula de flutuação em sal Epsom combinada com cromoterapia bioenergética.",
    price: "R$ 469",
    duration: "Sessão de 60 minutos",
    promise: "Pausa inteligente para desacelerar a mente e reorganizar as energias do corpo.",
  },
  {
    title: "Jornada Pocket · Cadeira + Insights",
    description:
      "Relaxamento profundo na cadeira de gravidade zero com curadoria de aromas e insights terapêuticos personalizados.",
    price: "R$ 349",
    duration: "Sessão de 45 minutos",
    promise: "Clareza mental e alívio físico em um encontro único e sofisticado.",
  },
]

const resultHighlights: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: "Blueprint escalável",
    description:
      "Playbook arquitetônico, sensorial e operacional pronto para replicação em outras capitais premium.",
    icon: TrendingUp,
  },
  {
    title: "Clientes fundadores",
    description:
      "24 membros no MVP com retenção mensal de 78% e agenda crescente mesmo com capacidade restrita.",
    icon: Users,
  },
  {
    title: "Ritmo de expansão",
    description:
      "Roadmap aprovado: Go-live comercial total em 2025 e segunda unidade prevista para 2026.",
    icon: CalendarRange,
  },
]

const brandValues: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: "Estética viva",
    description:
      "Monograma, paleta e fragrâncias proprietárias, construídas para traduzir luxo sensorial e brasilidade sofisticada.",
    icon: Gem,
  },
  {
    title: "Ciência com afeto",
    description:
      "Cada protocolo nasce de evidências clínicas, mas é entregue com escuta ativa e cuidado humano em cada gesto.",
    icon: Heart,
  },
  {
    title: "Impacto regenerativo",
    description:
      "Parceiros locais, consumo consciente de recursos e integração com a comunidade de saúde do Medplex Santana.",
    icon: Sparkles,
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

          <div className="grid gap-8 lg:grid-cols-3">
            {experienceLayers.map((pillar, index) => (
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

      <section id="journeys" className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeIn}
            className="flex-1 space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Protocolos assinatura</p>
            <h2 className="text-balance text-3xl font-serif text-[#354037] sm:text-4xl">
              Jornadas desenhadas a partir de dados e sensorialidade.
            </h2>
            <p className="text-lg text-[#4a463f]">
              Conheça os rituais disponíveis para visitas individuais ou recorrentes. Valores alinhados ao posicionamento
              premium da marca e ao benchmark de spas internacionais.
            </p>
            <ul className="space-y-3 text-sm text-[#4a463f]/80">
              <li className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#ac4e15]" />
                Protocolos atualizados continuamente com base em métricas de satisfação e retorno clínico.
              </li>
              <li className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-[#d59d40]" />
                Agendamento digital integrado ao WhatsApp e plantão concierge para membros recorrentes.
              </li>
              <li className="flex items-center gap-2">
                <Gem className="h-4 w-4 text-[#ac4e15]" />
                Possibilidade de gift experience e corporate wellness com curadoria personalizada.
              </li>
            </ul>
          </motion.div>

          <div className="flex-1 space-y-6">
            {signatureJourneys.map((journey, index) => (
              <motion.div
                key={journey.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-[#d9cbbb]/60 bg-white/80 p-6 shadow-lg shadow-[#ac4e15]/10 backdrop-blur"
              >
                <div className="absolute -left-24 -top-24 h-40 w-40 rounded-full bg-gradient-to-br from-[#ac4e15]/12 to-transparent blur-3xl transition-opacity group-hover:opacity-80" />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-[#ac4e15]/80">
                    <span>{journey.duration}</span>
                    <span>{journey.price}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#354037]">{journey.title}</h3>
                  <p className="text-sm text-[#4a463f]">{journey.description}</p>
                  <div className="flex items-center gap-2 rounded-full bg-[#ac4e15]/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-[#ac4e15]">
                    <Clock className="h-4 w-4" />
                    {journey.promise}
                  </div>
                </div>
              </motion.div>
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
            {resultHighlights.map((item, index) => (
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
        </div>
      </section>

      <section id="manifesto" className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeIn}
            className="flex-1 space-y-4"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Manifesto OLÍBANO</p>
            <h2 className="text-balance text-3xl font-serif text-[#354037] sm:text-4xl">
              Luxo sensorial com propósito regenerativo.
            </h2>
            <p className="text-lg text-[#4a463f]">
              Nossa identidade visual, fragrâncias e storytelling foram desenvolvidos para deixar memórias afetivas.
              Tudo isso com responsabilidade socioambiental e foco em impacto positivo no ecossistema de saúde gaúcho.
            </p>
          </motion.div>

          <div className="flex-1 space-y-6">
            {brandValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-4 rounded-3xl border border-[#d9cbbb]/60 bg-white/75 p-6 shadow-lg shadow-[#ac4e15]/5 backdrop-blur"
              >
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#d59d40] text-white shadow-lg shadow-[#ac4e15]/30">
                  <value.icon className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#354037]">{value.title}</h3>
                  <p className="text-sm text-[#4a463f]">{value.description}</p>
                </div>
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
              <a
                href="https://wa.me/5551993622621?text=Quero%20uma%20experi%C3%AAncia%20imersiva%20na%20Casa%20OL%C3%8DBANO."
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
              >
                Reservar jornada
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
