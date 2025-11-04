"use client"

import { memo, useMemo } from "react"
import { motion } from "framer-motion"
import { TrendingUp, Users, Award, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { containerVariants, fadeInY, hoverLiftSmall } from "@/lib/animations/variants"

interface HeroSectionProps {
  data: {
    title: string
    headline: string
    description: string
    stats: Array<{ label: string; value: string }>
    investment: {
      highlight: string
    }
    ctas: Array<{ label: string; href: string; variant: string }>
  }
}

function HeroSection({ data }: HeroSectionProps) {

  const iconMap = useMemo(
    () => [Award, TrendingUp, Users, Award],
    []
  )

  return (
    <div className="flex h-full flex-col justify-center overflow-y-auto bg-gradient-to-br from-white via-[#f5f1ec] to-[#c88715]/10 p-6 sm:p-8 md:p-12">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mx-auto max-w-5xl space-y-8 sm:space-y-12">
        <motion.div variants={fadeInY} className="space-y-4 sm:space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">{data.title}</p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#354037] leading-tight"
          >
            {data.headline}
          </motion.h1>

          <motion.p variants={fadeInY} className="max-w-3xl text-sm sm:text-base text-[#3a3631] leading-relaxed">
            {data.description}
          </motion.p>
        </motion.div>

        <motion.div variants={fadeInY} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {data.stats.map((stat, i) => {
            const Icon = iconMap[i % iconMap.length] || Award
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                {...hoverLiftSmall}
                className="rounded-2xl border border-[#d9cbbb]/60 bg-white/85 p-4 sm:p-5 shadow-lg shadow-[#ac4e15]/10 backdrop-blur transition-all duration-300 hover:border-[#ac4e15]/30"
              >
                <div className="mb-3 flex items-start justify-between">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#ac4e15]/70">{stat.label}</p>
                  <Icon className="h-4 w-4 text-[#ac4e15]" />
                </div>
                <span className="text-2xl sm:text-3xl font-bold text-[#354037]">{stat.value}</span>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div variants={fadeInY} className="flex flex-wrap gap-4">
          {data.ctas.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition-all ${
                cta.variant === "default"
                  ? "bg-gradient-to-r from-[#ac4e15] via-[#C88715] to-[#69683b] text-white shadow-lg shadow-[#ac4e15]/25 hover:scale-[1.02]"
                  : "border border-[#ac4e15]/30 text-[#ac4e15] hover:bg-[#ac4e15]/10"
              }`}
            >
              {cta.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default memo(HeroSection)
