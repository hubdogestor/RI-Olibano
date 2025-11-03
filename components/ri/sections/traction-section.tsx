"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react"
import { containerVariants } from "@/lib/animations/variants"

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

function TractionSection({ traction }: TractionSectionProps) {

  return (
    <section aria-label="Tração e validação de mercado" className="h-full flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-br from-white via-gray-50 to-[#69683B]/3">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-2 sm:mb-3 md:mb-4 text-[#354037]"
        >
          {traction.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 md:mb-12"
        >
          Validação de mercado com MVP e tração real de clientes
        </motion.p>

        {/* Timeline */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 md:mb-8 text-[#354037]">Linha do Tempo</h3>
          <div className="relative">
            <div className="absolute left-8 right-8 top-12 sm:top-14 md:top-16 hidden h-0.5 bg-gradient-to-r from-[#C88715] to-transparent lg:block" aria-hidden="true" />
            <div
              role="region"
              aria-label="Timeline scrollável de tração e marcos (use as setas do teclado para navegar)"
              className="flex snap-x snap-mandatory gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-3 sm:pb-4 md:pb-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#C88715]/40"
            >
              {traction.milestones.map((milestone, i) => {
                const [year = "", quarter = ""] = milestone.period.split(" ")
                return (
                  <motion.div
                    key={milestone.period}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative flex w-64 sm:w-72 min-w-[15rem] sm:min-w-[18rem] snap-center flex-col rounded-3xl border border-[#d9cbbb]/60 bg-white/80 p-4 sm:p-5 md:p-6 shadow-lg shadow-[#ac4e15]/10 backdrop-blur"
                  >
                    <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.32em] text-[#ac4e15]">
                      <span className="inline-flex h-12 w-12 sm:h-14 sm:w-14 flex-col items-center justify-center gap-0.5 rounded-full bg-gradient-to-br from-[#ac4e15] to-[#C88715] text-white shadow-lg shadow-[#ac4e15]/40">
                        <span className="text-xs font-semibold leading-tight tracking-[0.12em]">{quarter || year}</span>
                        <span className="text-[0.55rem] leading-tight tracking-[0.2em]">{quarter ? year : ""}</span>
                      </span>
                      Trajetória
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#354037]">{milestone.title}</h4>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#4a463f]/75">{milestone.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 md:mb-8 text-[#354037]">Métricas Atuais</h3>
        <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {traction.metrics.map((metric, i) => {
            const Icon = metricIcons[i % metricIcons.length]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-[#C88715]/10 to-[#AC4E15]/5 border border-[#C88715]/20 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-[#C88715]/40 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">{metric.name}</p>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#C88715] to-[#AC4E15] flex items-center justify-center">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#354037] mb-1 sm:mb-2">{metric.value}</p>
                <p className="text-xs sm:text-sm text-[#4a463f]/75 whitespace-pre-line">{metric.growth}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default memo(TractionSection)
