"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Zap, Award, MapPin, Layers, TrendingUp, Users } from "lucide-react"

interface HighlightsSectionProps {
  highlights: string[]
}

const icons = [Zap, Award, MapPin, Layers, TrendingUp, Users]

export default function HighlightsSection({ highlights }: HighlightsSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  return (
    <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-white via-gray-50 to-[#C88715]/3">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif font-bold mb-4 text-[#354037]"
        >
          Por que OLÍBANO?
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-12">
          Seis diferenciais que posicionam OLÍBANO como líder em bem-estar premium
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -6 }} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C88715]/10 to-[#AC4E15]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#C88715]/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#C88715] to-[#AC4E15] flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <p className="text-lg text-gray-800 leading-relaxed group-hover:text-[#354037] transition-colors">
                    {highlight}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
