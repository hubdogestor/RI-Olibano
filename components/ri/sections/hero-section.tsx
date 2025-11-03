"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Award, DollarSign, ArrowUpRight } from "lucide-react"
import Link from "next/link"

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

  const iconMap: Record<number, typeof Award> = {
    0: Award,
    1: TrendingUp,
    2: DollarSign,
    3: Users,
  }

  return (
    <div className="flex h-full flex-col justify-center overflow-y-auto bg-gradient-to-br from-white via-[#f5f1ec] to-[#c88715]/10 p-12">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mx-auto max-w-5xl space-y-12">
        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">{data.title}</p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl font-serif font-bold text-[#354037] leading-tight"
          >
            {data.headline}
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-3xl text-lg text-[#4a463f] leading-relaxed">
            {data.description}
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {data.stats.map((stat, i) => {
            const Icon = iconMap[i] || Award
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-[#d9cbbb]/60 bg-white/85 p-5 shadow-lg shadow-[#ac4e15]/10 backdrop-blur transition-all duration-300 hover:border-[#ac4e15]/30"
              >
                <div className="mb-3 flex items-start justify-between">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#ac4e15]/70">{stat.label}</p>
                  <Icon className="h-4 w-4 text-[#ac4e15]" />
                </div>
                <span className="text-3xl font-bold text-[#354037]">{stat.value}</span>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.section
          variants={itemVariants}
          className="rounded-3xl border border-[#ac4e15]/30 bg-gradient-to-r from-[#ac4e15]/5 to-[#C88715]/10 p-8 shadow-inner shadow-[#ac4e15]/15"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#ac4e15] to-[#C88715] p-3">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.32em] text-[#ac4e15]">Proposta de investimento</p>
              <p className="text-lg font-medium text-[#354037]">{data.investment.highlight}</p>
            </div>
          </div>
        </motion.section>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
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
