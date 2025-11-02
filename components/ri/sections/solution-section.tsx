"use client"

import { motion } from "framer-motion"
import { Sparkles, CheckCircle } from "lucide-react"

interface SolutionSectionProps {
  solution: {
    title: string
    elements: string[]
    differentials: string[]
  }
}

export default function SolutionSection({ solution }: SolutionSectionProps) {
  return (
    <div className="flex h-full flex-col justify-center overflow-y-auto bg-gradient-to-br from-white via-[#f5f1ec] to-[#c88715]/10 p-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-[#354037]"
          >
            {solution.title}
          </motion.h2>
          <p className="max-w-3xl text-lg text-[#4a463f]">
            Uma experiência completa de duas horas que combina protocolos terapêuticos, tecnologia sensorial e design imersivo.
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ac4e15]/12 text-[#ac4e15]">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-serif font-semibold text-[#354037]">Componentes da jornada</h3>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {solution.elements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="flex items-start gap-3 rounded-2xl border border-[#ac4e15]/20 bg-white/80 p-4 shadow-sm shadow-[#ac4e15]/10"
              >
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-[#ac4e15] to-[#d59d40]" />
                <p className="text-sm text-[#4a463f]/85">{element}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ac4e15]/12 text-[#ac4e15]">
              <CheckCircle className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-serif font-semibold text-[#354037]">Diferenciais exclusivos</h3>
          </div>
          <div className="space-y-3">
            {solution.differentials.map((differential, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-[#d9cbbb]/60 bg-white/85 p-5 shadow-lg shadow-[#ac4e15]/10 backdrop-blur"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#ac4e15] to-[#d59d40] p-1.5">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-base text-[#354037] font-medium">{differential}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}
