"use client"

import { motion } from "framer-motion"
import { Lightbulb, Target, Sparkles } from "lucide-react"

interface PurposeSectionProps {
  purpose: {
    mission: string
    vision: string
    values: Array<{
      title: string
      description: string
    }>
  }
}

const cardIcons = [Target, Lightbulb]

export default function PurposeSection({ purpose }: PurposeSectionProps) {
  return (
    <div className="flex h-full flex-col justify-center overflow-y-auto bg-gradient-to-br from-white via-[#f5f1ec] to-[#c88715]/10 p-12 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-[#354037]"
          >
            Missão, Visão e Valores
          </motion.h2>
          <p className="max-w-3xl text-lg text-[#4a463f]">
            Olíbano nasce com uma razão clara: transformar autocuidado premium em uma prática regenerativa, mensurável e
            profundamente humana.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { label: "Missão", copy: purpose.mission, icon: cardIcons[0] },
            { label: "Visão", copy: purpose.vision, icon: cardIcons[1] },
          ].map((item) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
                className="flex h-full flex-col gap-3 rounded-3xl border border-[#d9cbbb]/60 bg-white/85 p-6 shadow-lg shadow-[#ac4e15]/12 backdrop-blur"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#ac4e15]/15 text-[#ac4e15] shadow-inner">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-[0.36em] text-[#ac4e15]/80">{item.label}</p>
                <p className="text-sm text-[#4a463f]/85 leading-relaxed">{item.copy}</p>
              </motion.article>
            )
          })}
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ac4e15]/12 text-[#ac4e15]">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-serif font-semibold text-[#354037]">Valores que guiam nossas decisões</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {purpose.values.map((value) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-[#ac4e15]/20 bg-white/80 p-5 shadow-sm shadow-[#ac4e15]/10"
              >
                <h4 className="text-base font-semibold text-[#354037]">{value.title}</h4>
                <p className="mt-2 text-sm text-[#4a463f]/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}
