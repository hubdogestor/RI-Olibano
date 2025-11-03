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
    <section
      aria-label="Experiência assinada Olíbano: protocolos proprietários"
      className="h-full flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-br from-white via-gray-50 to-[#C88715]/3"
    >
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-2 sm:mb-3 md:mb-4 text-[#354037]"
        >
          Experiência Assinada Olíbano
        </motion.h2>
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 md:mb-12">
          Protocolos proprietários que combinam ciência integrativa, luxo sensorial e métricas claras de resultado.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {highlights.map((highlight, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.article
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative"
                aria-label={`Destaque: ${highlight.substring(0, 40)}${highlight.length > 40 ? '...' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#C88715]/10 to-[#AC4E15]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                <div className="relative bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 hover:border-[#C88715]/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-[#C88715] to-[#AC4E15] flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-lg transition-shadow"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
                  </motion.div>
                  <p className="text-base sm:text-lg text-gray-800 leading-relaxed group-hover:text-[#354037] transition-colors">
                    {highlight}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
