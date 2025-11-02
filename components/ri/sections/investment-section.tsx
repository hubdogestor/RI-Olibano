"use client"

import { motion } from "framer-motion"
import { BadgeDollarSign, BriefcaseBusiness, Goal, PieChart, TrendingUp } from "lucide-react"

interface InvestmentSectionProps {
  investment: {
    headline: string
    summary: string
    round: {
      ask: string
      equity: string
      valuation: string
      description: string
    }
    allocation: Array<{
      label: string
      value: string
      detail: string
    }>
    milestones: Array<{
      title: string
      description: string
    }>
    exits: Array<{
      title: string
      description: string
    }>
  }
}

const metricIcons = [BadgeDollarSign, PieChart, BriefcaseBusiness]

export default function InvestmentSection({ investment }: InvestmentSectionProps) {
  const metrics = [
    { label: "Aporte buscado", value: investment.round.ask, icon: metricIcons[0] },
    { label: "Participação ofertada", value: investment.round.equity, icon: metricIcons[1] },
    { label: "Valuation pré-money", value: investment.round.valuation, icon: metricIcons[2] },
  ]

  return (
    <div className="flex h-full flex-col justify-center overflow-y-auto bg-gradient-to-br from-white via-[#f5f1ec] to-[#ac4e15]/10 p-12">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-[#354037]"
          >
            {investment.headline}
          </motion.h2>
          <p className="max-w-3xl text-lg text-[#4a463f]">{investment.summary}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-[#d9cbbb]/60 bg-white/85 p-6 text-[#354037] shadow-lg shadow-[#ac4e15]/10"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#d59d40] text-white shadow-lg shadow-[#ac4e15]/30">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.32em] text-[#ac4e15]/80">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold text-[#354037]">{metric.value}</p>
              </motion.div>
            )
          })}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-[#ac4e15]/20 bg-gradient-to-br from-[#ac4e15]/10 to-[#d59d40]/5 p-6 text-[#354037] shadow-lg shadow-[#ac4e15]/15"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-[#ac4e15]/80">Tese do round</p>
            <p className="mt-2 text-sm text-[#4a463f]/80">{investment.round.description}</p>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <Goal className="h-5 w-5 text-[#ac4e15]" />
              <p className="text-sm uppercase tracking-[0.36em] text-[#ac4e15]">Alocação do capital</p>
            </div>
            <div className="space-y-4">
              {investment.allocation.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-[#d9cbbb]/60 bg-white/85 p-5 shadow-sm shadow-[#ac4e15]/10"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-[#354037]">{item.label}</h3>
                    <span className="rounded-full bg-[#ac4e15]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-[#ac4e15]">
                      {item.value}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#4a463f]/80">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-[#ac4e15]" />
              <p className="text-sm uppercase tracking-[0.36em] text-[#ac4e15]">Metas pós-investimento</p>
            </div>
            <div className="space-y-4">
              {investment.milestones.map((milestone) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-[#d9cbbb]/60 bg-white/80 p-5 shadow-sm shadow-[#ac4e15]/10"
                >
                  <h3 className="text-base font-semibold text-[#354037]">{milestone.title}</h3>
                  <p className="mt-2 text-sm text-[#4a463f]/80">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <BriefcaseBusiness className="h-5 w-5 text-[#ac4e15]" />
            <p className="text-sm uppercase tracking-[0.36em] text-[#ac4e15]">Rotas de exit mapeadas</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {investment.exits.map((exit) => (
              <motion.div
                key={exit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-[#ac4e15]/20 bg-white/80 p-6 shadow-lg shadow-[#ac4e15]/10"
              >
                <h3 className="text-lg font-semibold text-[#354037]">{exit.title}</h3>
                <p className="mt-2 text-sm text-[#4a463f]/75">{exit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}
