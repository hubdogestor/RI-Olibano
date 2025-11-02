"use client"

import { motion } from "framer-motion"
import { DollarSign, TrendingUp, Zap } from "lucide-react"

interface BusinessSectionProps {
  businessModel: {
    title: string
    revenueStreams: Array<{
      name: string
      description: string
      margin: string
    }>
    unitEconomics: {
      LTV: string
      CAC: string
      ratio: string
    }
  }
}

const marginConfig: Record<string, { bg: string; border: string; badge: string }> = {
  Alto: { bg: "from-[#AC4E15]/10 to-[#C88715]/5", border: "border-[#AC4E15]/30", badge: "bg-[#AC4E15] text-white" },
  "Muito Alto": {
    bg: "from-[#C88715]/10 to-[#AC4E15]/5",
    border: "border-[#C88715]/30",
    badge: "bg-[#C88715] text-white",
  },
  Máximo: {
    bg: "from-[#69683B]/10 to-[#354037]/5",
    border: "border-[#69683B]/30",
    badge: "bg-[#69683B] text-white",
  },
}

export default function BusinessSection({ businessModel }: BusinessSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-white via-gray-50 to-[#AC4E15]/3">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif font-bold mb-12 text-[#354037]"
        >
          {businessModel.title}
        </motion.h2>

        {/* Revenue Streams */}
        <div className="space-y-4 mb-16">
          {businessModel.revenueStreams.map((stream, i) => {
            const config = marginConfig[stream.margin as keyof typeof marginConfig]
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className={`group bg-gradient-to-r ${config.bg} ${config.border} border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-default`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-[#354037] group-hover:text-[#C88715] transition-colors">
                    {stream.name}
                  </h3>
                  <span className={`text-xs font-bold px-4 py-2 rounded-lg ${config.badge}`}>{stream.margin}</span>
                </div>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors">{stream.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Unit Economics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-[#354037] to-[#69683B] rounded-3xl p-12 text-white"
        >
          <h3 className="text-2xl font-bold mb-8">Economia de Unidade</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "LTV (Lifetime Value)", value: businessModel.unitEconomics.LTV, icon: TrendingUp },
              { label: "CAC (Custo Aquisição)", value: businessModel.unitEconomics.CAC, icon: DollarSign },
              { label: "Ratio LTV:CAC", value: businessModel.unitEconomics.ratio, icon: Zap },
            ].map((metric, i) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium opacity-80 mb-2 uppercase">{metric.label}</p>
                  <p className="text-4xl font-bold">{metric.value}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}


