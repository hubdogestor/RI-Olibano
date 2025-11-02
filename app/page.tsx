"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  CalendarRange,
  Heart,
  Leaf,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react"

const heroStats = [
  { label: "NPS", value: "92" },
  { label: "Retenã§ã£o", value: "78%" },
  { label: "Ticket Médio", value: "R$ 799" },
  { label: "MVP Validado", value: "3 meses" },
]

const pillars = [
  {
    title: "Ritual Sensorial",
    description:
      "Experiãªncia multissensorial que combina aromaterapia autoral, som imersivo e iluminaã§ã£o biofã­lica para despertar equilã­brio imediato.",
    icon: Sparkles,
  },
  {
    title: "Ciãªncia e Cura",
    description:
      "Protocolos conduzidos por especialistas em medicina integrativa com acompanhamento personalizado e foco em resultados mensuráveis.",
    icon: Leaf,
  },
  {
    title: "Exclusividade Premium",
    description:
      "Arquitetura acolhedora, poucas vagas por hora e hospitalidade de luxo para garantir privacidade e presenã§a genuã­na da equipe.",
    icon: Heart,
  },
]

const signatureProtocols = [
  {
    title: "OLãBANO Rebalance",
    description:
      "Sequãªncia de ativaã§ã£o sensorial com ã³leos nobres, som terapãªutico, reflexologia e liberaã§ã£o miofascial. Ideal para altos executivos.",
    investment: "R$ 799",
    duration: "90 minutos",
  },
  {
    title: "Respira Bem Viver",
    description:
      "Respiraã§ã£o consciente, crioterapia suave e harmonizaã§ã£o craniana para liberar tensãµes, ansiedade e melhorar o sono.",
    investment: "R$ 1.120",
    duration: "Pacote 3 sessãµes",
  },
  {
    title: "Reconectar Feminino",
    description:
      "Imersã£o holã­stica com psicoaromaterapia, terapia hormonal natural e nutriã§ã£o funcional voltada ao ciclo da mulher.",
    investment: "R$ 2.480",
    duration: "Programa 30 dias",
  },
]

const advisoryHighlights = [
  {
    badge: "Mercado",
    title: "Wellness premium em expansã£o",
    text: "Mercado brasileiro supera R$ 2 bi com margens elevadas e baixa concorrãªncia qualificada no Sul.",
    icon: TrendingUp,
  },
  {
    badge: "Smart Capital",
    title: "Modelo escalável",
    text: "Blueprint replicável com monograma, pattern proprietário, playbook operacional e experiãªncia patenteada.",
    icon: Users,
  },
  {
    badge: "Agenda",
    title: "Visite a casa OLãBANO",
    text: "Agende uma imersã£o guiada com a equipe fundadora e entenda o potencial de expansã£o nacional.",
    icon: CalendarRange,
  },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function HomePage() {
  return (
    <div className="relative flex flex-col gap-28 bg-transparent pb-28">
      {/* Hero */}
      <section
        id="hero"
        className="relative isolate overflow-hidden bg-gradient-to-br from-white via-[#f8f2e9] to-[#f3e4d1] px-6 pb-20 pt-24 sm:px-8 lg:px-12 lg:pt-28"
      >
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/brand/pattern.png"
            alt="Padrã£o OLãBANO"
            fill
            priority
            className="object-cover mix-blend-multiply"
          />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-16 lg:flex-row lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex-1 space-y-8"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Porto Alegre - Medplex Santana</p>
            <h1 className="text-balance text-[#354037]">
              OLãBANO é o seu refãºgio para reequilibrar corpo, mente e espã­rito em ritmo urbano.
            </h1>
            <p className="max-w-2xl text-pretty text-lg text-[#4a463f] sm:text-xl">
              Casa boutique de terapias integrativas com design autoral, protocolos exclusivos e time médico premiado.
              Um lifestyle club para quem entende autocuidado como investimento.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/ri"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ac4e15] via-[#d59d40] to-[#69683b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-lg shadow-[#ac4e15]/25 transition-transform hover:scale-[1.02]"
              >
                Investidor OLãBANO
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/5551993622621?text=Olá!%20Quero%20agendar%20uma%20experiãªncia%20na%20Casa%20OLãBANO."
                className="inline-flex items-center gap-2 rounded-full border border-[#ac4e15]/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#ac4e15] transition-colors hover:bg-[#ac4e15]/10"
              >
                Agende sua visita
              </a>
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
                alt="Monograma OLãBANO"
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
          variants={fadeIn}
          className="relative mt-16 grid gap-6 rounded-3xl border border-[#d9cbbb]/60 bg-white/70 p-6 shadow-lg shadow-[#354037]/5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.28em] text-[#ac4e15]/80">{stat.label}</span>
              <span className="text-3xl font-semibold text-[#354037]">{stat.value}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Pillars */}
      <section id="experiencia" className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Nossa essãªncia</p>
            <h2 className="text-balance text-[#354037]">Uma jornada de cura que desperta todos os sentidos</h2>
            <p className="max-w-3xl text-lg text-[#4a463f]">
              A Casa OLãBANO foi criada para pessoas que unem performance e bem-estar. Cada visita é um ritual exclusivo
              com assinatura autoral, pensado para resultados clã­nicos e emocionais duradouros.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-[#d9cbbb]/60 bg-white/70 p-8 shadow-lg shadow-[#354037]/5 backdrop-blur"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#d59d40] text-white shadow-lg shadow-[#ac4e15]/30">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl text-[#354037]">{pillar.title}</h3>
                <p className="text-base text-[#4a463f]">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section id="protocolos" className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex-1 space-y-5"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Protocolos autorais</p>
            <h2 className="text-balance text-[#354037]">Tratamentos desenhados por médicos integrativos</h2>
            <p className="text-lg text-[#4a463f]">
              Nossos terapeutas guiam cada experiãªncia com metodologias proprietárias, utilizando ingredientes botã¢nicos
              raros, tecnologia nã£o invasiva e escuta ativa. Resultados sã£o acompanhados por métricas de impacto.
            </p>
          </motion.div>

          <div className="grid flex-1 gap-6">
            {signatureProtocols.map((protocol, index) => (
              <motion.div
                key={protocol.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="group relative overflow-hidden rounded-3xl border border-[#d9cbbb]/60 bg-white/80 p-8 shadow-lg shadow-[#354037]/5 backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#ac4e15]/6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#ac4e15]/70">
                    Programa exclusivo
                  </div>
                  <h3 className="text-2xl text-[#354037]">{protocol.title}</h3>
                  <p className="text-base text-[#4a463f]">{protocol.description}</p>
                  <div className="flex items-center gap-6 text-sm text-[#4a463f]">
                    <span className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-[#ac4e15]" />
                      {protocol.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#d59d40]" />
                      {protocol.investment}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory */}
      <section id="equipe" className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Visã£o estratégica</p>
            <h2 className="text-balance text-[#354037]">OLãBANO é uma plataforma de bem-estar escalável</h2>
            <p className="max-w-3xl text-lg text-[#4a463f]">
              A fundadora Dra. Betusa Kramer (medicina integrativa), Alexandre Freire (growth e tecnologia) e Leonardo
              Menezes (produto e operaã§ãµes) lideram a expansã£o com governanã§a e indicadores de performance.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {advisoryHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex flex-col gap-4 rounded-3xl border border-[#d9cbbb]/60 bg-white/75 p-8 shadow-lg shadow-[#354037]/5 backdrop-blur"
              >
                <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#ac4e15]/80">
                  <item.icon className="h-4 w-4" />
                  {item.badge}
                </div>
                <h3 className="text-xl text-[#354037]">{item.title}</h3>
                <p className="text-base text-[#4a463f]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-[#d9cbbb]/70 bg-gradient-to-r from-[#354037] via-[#3f4a41] to-[#1f251f] p-10 sm:p-14 text-white shadow-[0_20px_60px_rgba(22,25,21,0.45)]"
        >
          <div className="absolute inset-0 opacity-30">
            <Image src="/brand/pattern.png" alt="Pattern" fill className="object-cover mix-blend-overlay" />
          </div>
          <div className="relative space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-[#d59d40]">Conexã£o direta com a fundadora</p>
            <h2 className="text-balance text-4xl sm:text-5xl">
              Pronto para cocriar o futuro do wellness de alto padrã£o no Brasil?
            </h2>
            <p className="max-w-3xl text-lg text-white/80">
              Agende uma conversa estratégica com a equipe de Relaã§ãµes com Investidores ou reserve uma imersã£o privada
              na Casa OLãBANO. Seremos anfitriãµes para apresentar a operaã§ã£o e prã³ximos marcos.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/ri"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#354037] transition-transform hover:scale-[1.02]"
              >
                Sala do Investidor
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:ri@olibanovip.com.br"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
              >
                ri@olibanovip.com.br
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
