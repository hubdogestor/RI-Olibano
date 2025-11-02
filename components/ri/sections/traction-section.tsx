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
          <h3 className="text-xl font-semibold mb-8 text-[#354037]">Timeline</h3>
          <div className="space-y-4">
            {traction.milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="group flex gap-6 hover:pl-2 transition-all"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="w-5 h-5 rounded-full bg-gradient-to-br from-[#C88715] to-[#AC4E15] ring-4 ring-[#C88715]/30 group-hover:ring-[#C88715]/60 transition-all"
                  />
                  {i < traction.milestones.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-[#C88715]/50 to-transparent mt-1" />
                  )}
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#C88715]/30 hover:shadow-lg transition-all">
                  <p className="text-xs font-bold text-[#C88715] mb-2 uppercase tracking-wider">{milestone.period}</p>
                  <p className="text-lg font-semibold text-[#354037] mb-2">{milestone.title}</p>
                  <p className="text-sm text-gray-600">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
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
