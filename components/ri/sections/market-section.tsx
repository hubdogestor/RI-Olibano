"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Target } from "lucide-react"

interface MarketSectionProps {
  market: {
    tam: string
    tamDescription: string
    sam: string
    samDescription: string
    som: string
    somDescription: string
    methodology: string
  }
}

export default function MarketSection({ market }: MarketSectionProps) {
  const metrics = [
    {
      label: "TAM",
      value: market.tam,
      desc: market.tamDescription,
      icon: TrendingUp,
      color: "from-[#C88715] to-[#AC4E15]",
    },
    {
      label: "SAM",
      value: market.sam,
      desc: market.samDescription,
      icon: Users,
      color: "from-[#69683B] to-[#354037]",
    },
    {
      label: "SOM",
      value: market.som,
      desc: market.somDescription,
      icon: Target,
      color: "from-[#AC4E15] to-[#C88715]",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6 },
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
          Oportunidade de Mercado
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-12">
          Mercado de bem-estar premium em crescimento acelerado no Brasil
        </motion.p>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -8 }}>
                <div
                  className={`bg-gradient-to-br ${metric.color} rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-default`}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-6 group-hover:bg-white/30 transition-all"
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>
                  <p className="text-sm font-semibold opacity-90 mb-2 uppercase tracking-wider">{metric.label}</p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className="text-5xl font-bold mb-3"
                  >
                    {metric.value}
                  </motion.p>
                  <p className="text-sm leading-relaxed opacity-90">{metric.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-[#354037] to-[#69683B] border border-[#C88715]/20 rounded-2xl p-8 text-white"
        >
          <p className="text-sm leading-relaxed">
            <span className="font-bold text-[#C88715]">Metodologia:</span> {market.methodology}
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
