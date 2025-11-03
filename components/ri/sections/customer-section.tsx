"use client"

import { motion } from "framer-motion"
import { Users, AlertTriangle, Target } from "lucide-react"

interface CustomerSectionProps {
  customer: {
    title: string
    segments: Array<{
      name: string
      profile: string
      context: string
      pains: string[]
      desires: string[]
      channels: string[]
    }>
    painsSummary: string[]
    hiddenFear: string
  }
}

export default function CustomerSection({ customer }: CustomerSectionProps) {
  return (
    <div className="flex h-full flex-col justify-center overflow-y-auto bg-gradient-to-br from-white via-[#f5f1ec] to-[#c88715]/10 p-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-[#354037]"
          >
            {customer.title}
          </motion.h2>
          <p className="max-w-3xl text-lg text-[#4a463f]">
            Conhecemos profundamente nossos clientes e criamos experiências que endereçam suas necessidades mais profundas.
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ac4e15]/12 text-[#ac4e15]">
              <Target className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-serif font-semibold text-[#354037]">Personas estratégicas</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {customer.segments.map((segment, index) => (
              <motion.article
                key={segment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-[#d9cbbb]/60 bg-white/85 p-6 shadow-lg shadow-[#ac4e15]/10 backdrop-blur"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-[#354037]">{segment.name}</h4>
                    <p className="mt-1 text-xs text-[#ac4e15]/70">{segment.profile}</p>
                    <p className="mt-2 text-sm text-[#4a463f]/80">{segment.context}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#ac4e15]/80 mb-2">Dores</p>
                    <ul className="space-y-1">
                      {segment.pains.slice(0, 2).map((pain, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#4a463f]/75">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#ac4e15]" />
                          <span>{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#C88715]/80 mb-2">Desejos</p>
                    <ul className="space-y-1">
                      {segment.desires.slice(0, 2).map((desire, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#4a463f]/75">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#C88715]" />
                          <span>{desire}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ac4e15]/12 text-[#ac4e15]">
              <Users className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-serif font-semibold text-[#354037]">Dores principais</h3>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {customer.painsSummary.map((pain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="flex items-start gap-3 rounded-xl border border-[#ac4e15]/20 bg-white/80 p-4 shadow-sm shadow-[#ac4e15]/10"
              >
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#ac4e15]" />
                <p className="text-sm text-[#4a463f]/85">{pain}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-[#ac4e15]/30 bg-gradient-to-r from-[#ac4e15]/5 to-[#C88715]/10 p-8 shadow-inner shadow-[#ac4e15]/15"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#ac4e15] to-[#C88715] p-3">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.32em] text-[#ac4e15]">Medo oculto</p>
              <p className="text-lg font-medium text-[#354037]">{customer.hiddenFear}</p>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}
