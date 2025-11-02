"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Globe, Heart, Leaf } from "lucide-react"

interface ESGSectionProps {
  esg: {
    headline: string
    pillars: Array<{
      title: string
      description: string
    }>
    certifications: string[]
  }
}

const iconMap: Record<string, LucideIcon> = {
  Ambiental: Leaf,
  Social: Heart,
  Governança: Globe,
}

export default function ESGSection({ esg }: ESGSectionProps) {
  return (
    <div className="flex h-full flex-col justify-center overflow-y-auto bg-gradient-to-br from-[#f5f3f0] via-white to-[#69683b]/5 p-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-[#354037]"
          >
            {esg.headline}
          </motion.h2>
          <p className="text-[#4a463f] text-lg">Governança com propósito regenerativo e métricas transparentes.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {esg.pillars.map((pillar) => {
            const Icon = iconMap[pillar.title.split(" ")[0]] ?? Leaf
            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45 }}
                className="flex h-full flex-col gap-3 rounded-3xl border border-[#d9cbbb]/60 bg-white/85 p-6 shadow-lg shadow-[#ac4e15]/10"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#ac4e15]/12 text-[#ac4e15]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#354037]">{pillar.title}</h3>
                <p className="text-sm text-[#4a463f]/80">{pillar.description}</p>
              </motion.article>
            )
          })}
        </div>

        <div className="rounded-3xl border border-[#ac4e15]/20 bg-white/80 p-6 shadow-lg shadow-[#ac4e15]/10">
          <p className="text-sm uppercase tracking-[0.36em] text-[#ac4e15]">Compromissos em andamento</p>
          <ul className="mt-4 space-y-2 text-sm text-[#4a463f]/80">
            {esg.certifications.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ac4e15]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
