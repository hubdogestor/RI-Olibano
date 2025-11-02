"use client"

import { motion } from "framer-motion"
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react"

interface TractionSectionProps {
  traction: {
    title: string
    milestones: Array<{
      period: string
      title: string
      desc: string
    }>
    metrics: Array<{
      name: string
      value: string
      growth: string
    }>
  }
}

const metricIcons = [Users, TrendingUp, Award, CheckCircle2]

export default function TractionSection({ traction }: TractionSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  return (
    <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-white via-gray-50 to-[#69683B]/3">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif font-bold mb-4 text-[#354037]"
        >
          {traction.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 mb-12"
        >
          Validação de mercado com MVP e tração real de clientes
        </motion.p>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-[#354037]">Linha do Tempo</h3>
          <div className="relative">
            <div className="absolute left-10 right-10 top-16 hidden h-0.5 bg-gradient-to-r from-[#C88715] via-[#D59D40] to-transparent lg:block" />
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#d59d40]/40">
              {traction.milestones.map((milestone, i) => {
                const [year = "", quarter = ""] = milestone.period.split(" ")
                return (
                  <motion.div
                    key={milestone.period}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative flex w-72 min-w-[18rem] snap-center flex-col rounded-3xl border border-[#d9cbbb]/60 bg-white/80 p-6 shadow-lg shadow-[#ac4e15]/10 backdrop-blur"
                  >
                    <div className="mb-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[#ac4e15]">
                      <span className="inline-flex h-12 w-12 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#d59d40] text-white shadow-lg shadow-[#ac4e15]/40">
                        <span className="text-[0.65rem] font-semibold leading-none">{quarter || year}</span>
                        <span className="text-[0.58rem] leading-none tracking-[0.3em]">{quarter ? year : ""}</span>
                      </span>
                      Trajetória
                    </div>
                    <h4 className="text-lg font-semibold text-[#354037]">{milestone.title}</h4>
                    <p className="mt-3 text-sm text-[#4a463f]/75">{milestone.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <h3 className="text-xl font-semibold mb-8 text-[#354037]">Métricas Atuais</h3>
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {traction.metrics.map((metric, i) => {
            const Icon = metricIcons[i % metricIcons.length]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-[#C88715]/10 to-[#AC4E15]/5 border border-[#C88715]/20 rounded-2xl p-8 hover:border-[#C88715]/40 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">{metric.name}</p>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C88715] to-[#AC4E15] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-4xl font-bold text-[#354037] mb-2">{metric.value}</p>
                <p className="text-sm font-semibold text-[#C88715]">{metric.growth}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}
