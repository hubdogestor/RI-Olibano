"use client"

import { motion } from "framer-motion"
import { AlertCircle, TrendingUp } from "lucide-react"

interface ProblemSectionProps {
  problem: {
    title: string
    summary: string
    gaps: Array<{
      title: string
      description: string
    }>
    context: string[]
  }
}

export default function ProblemSection({ problem }: ProblemSectionProps) {
  return (
    <div className="flex h-full flex-col justify-center overflow-y-auto bg-gradient-to-br from-white via-[#f5f1ec] to-[#c88715]/10 p-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-[#354037]"
          >
            {problem.title}
          </motion.h2>
          <p className="max-w-3xl text-lg text-[#4a463f]">
            {problem.summary}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {problem.gaps.map((gap, index) => (
            <motion.article
              key={gap.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex h-full flex-col gap-3 rounded-3xl border border-[#d9cbbb]/60 bg-white/85 p-6 shadow-lg shadow-[#ac4e15]/12 backdrop-blur"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#d59d40] text-white shadow-lg shadow-[#ac4e15]/30">
                <AlertCircle className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-[#354037]">{gap.title}</h3>
              <p className="text-sm text-[#4a463f]/85 leading-relaxed">{gap.description}</p>
            </motion.article>
          ))}
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ac4e15]/12 text-[#ac4e15]">
              <TrendingUp className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-serif font-semibold text-[#354037]">Contexto de mercado</h3>
          </div>
          <div className="space-y-3 rounded-2xl border border-[#ac4e15]/20 bg-white/80 p-6 shadow-sm shadow-[#ac4e15]/10">
            {problem.context.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ac4e15]" />
                <p className="text-sm text-[#4a463f]/85">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}
