"use client"

import { motion } from "framer-motion"
import { Sparkles, CheckCircle } from "lucide-react"

interface SolutionSectionProps {
  solution: {
    title: string
    description?: string
    elements: string[]
    differentials: string[]
  }
}

export default function SolutionSection({ solution }: SolutionSectionProps) {
  return (
    <div className="flex h-full flex-col justify-center overflow-y-auto bg-gradient-to-br from-white via-[#f5f1ec] to-[#c88715]/10 p-4 sm:p-6 md:p-8 lg:p-12 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-5xl space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#354037]"
          >
            {solution.title}
          </motion.h2>
          <p className="max-w-3xl text-base sm:text-lg text-[#4a463f]">
            {solution.description || "Uma experiência completa de duas horas que combina protocolos terapêuticos, tecnologia sensorial e design imersivo."}
          </p>
        </div>

        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#ac4e15]/12 text-[#ac4e15]">
              <Sparkles className="h-4 h-4 sm:h-5 sm:w-5" />
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#354037]">Componentes da jornada</h3>
          </div>
          <div className="grid gap-2 sm:gap-3 md:grid-cols-2 md:gap-4">
            {solution.elements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="flex items-start gap-2 sm:gap-3 rounded-2xl border border-[#ac4e15]/20 bg-white/80 p-3 sm:p-4 shadow-sm shadow-[#ac4e15]/10"
              >
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-[#ac4e15] to-[#C88715]" />
                <p className="text-xs sm:text-sm text-[#4a463f]/85">{element}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#ac4e15]/12 text-[#ac4e15]">
              <CheckCircle className="h-4 h-4 sm:h-5 sm:w-5" />
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#354037]">Diferenciais exclusivos</h3>
          </div>
          <div className="space-y-2 sm:space-y-3">
            {solution.differentials.map((differential, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-[#d9cbbb]/60 bg-white/85 p-3 sm:p-4 md:p-5 shadow-lg shadow-[#ac4e15]/10 backdrop-blur"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#ac4e15] to-[#C88715] p-1">
                    <CheckCircle className="h-4 h-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-[#354037] font-medium">{differential}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}
