"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Award, Heart } from "lucide-react"
import Link from "next/link"

interface HeroSectionProps {
  data: {
    title: string
    subtitle: string
    description: string
    ctas: Array<{ label: string; href: string; variant: string }>
    stats: Array<{ label: string; value: string; unit: string }>
  }
}

export default function HeroSection({ data }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="h-full flex flex-col justify-center p-12 bg-gradient-to-br from-white via-gray-50 to-[#C88715]/3">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl">
        {/* Main Hero */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-6xl font-serif font-bold mb-4 text-[#354037] leading-tight"
          >
            {data.title}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-2xl text-[#C88715] font-medium mb-4">
            {data.subtitle}
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
            {data.description}
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex gap-4 mb-16">
          {data.ctas.map((cta, i) => (
            <Link
              key={i}
              href={cta.href}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                cta.variant === "default"
                  ? "bg-gradient-to-r from-[#C88715] to-[#AC4E15] text-white hover:shadow-xl hover:scale-105"
                  : "border-2 border-[#C88715] text-[#C88715] hover:bg-[#C88715]/5"
              }`}
            >
              {cta.label}
            </Link>
          ))}
        </motion.div>

        {/* Stats Dashboard */}
        <motion.div variants={itemVariants} className="grid grid-cols-4 gap-4">
          {data.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, shadow: "0 20px 40px rgba(200, 135, 21, 0.15)" }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#C88715]/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </div>
                {i === 0 && <Award className="w-5 h-5 text-[#C88715]" />}
                {i === 1 && <TrendingUp className="w-5 h-5 text-[#AC4E15]" />}
                {i === 2 && <Users className="w-5 h-5 text-[#69683B]" />}
                {i === 3 && <Heart className="w-5 h-5 text-[#354037]" />}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold bg-gradient-to-r from-[#C88715] to-[#AC4E15] bg-clip-text text-transparent">
                  {stat.value}
                </span>
                {stat.unit && <span className="text-sm text-gray-600">{stat.unit}</span>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
