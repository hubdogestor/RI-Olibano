"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { DollarSign, TrendingUp, Zap } from "lucide-react"
import { containerVariants, slideInFromLeft } from "@/lib/animations/variants"

interface BusinessSectionProps {
  businessModel: {
    title: string
    revenueStreams: Array<{
      name: string
      description: string
    }>
    unitEconomics: {
      LTV: string
      CAC: string
      ratio: string
    }
  }
}

function BusinessSection({ businessModel }: BusinessSectionProps) {

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
            return (
              <motion.div
                key={i}
                variants={slideInFromLeft}
                whileHover={{ x: 8 }}
                className="group bg-gradient-to-r from-[#AC4E15]/10 to-[#C88715]/5 border-[#AC4E15]/30 border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <h3 className="text-lg font-semibold text-[#354037] group-hover:text-[#C88715] transition-colors mb-3">
                  {stream.name}
                </h3>
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

export default memo(BusinessSection)
