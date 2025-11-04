"use client"

import { motion } from "framer-motion"
import { TrendingUp, AlertTriangle, Target, Shield } from "lucide-react"

type SwotItem = string | { text: string; bold?: boolean }

interface SwotSectionProps {
  swot: {
    strengths: SwotItem[]
    weaknesses: SwotItem[]
    opportunities: SwotItem[]
    threats: SwotItem[]
  }
}

const quadrants = [
  {
    key: "strengths" as const,
    title: "Forças",
    icon: Shield,
    gradient: "from-green-50 to-green-100/50",
    borderColor: "border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    key: "weaknesses" as const,
    title: "Fraquezas",
    icon: AlertTriangle,
    gradient: "from-red-50 to-red-100/50",
    borderColor: "border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    key: "opportunities" as const,
    title: "Oportunidades",
    icon: Target,
    gradient: "from-blue-50 to-blue-100/50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    key: "threats" as const,
    title: "Ameaças",
    icon: TrendingUp,
    gradient: "from-amber-50 to-amber-100/50",
    borderColor: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
]

export default function SwotSection({ swot }: SwotSectionProps) {
  return (
    <div className="flex h-full flex-col justify-center overflow-y-auto bg-gradient-to-br from-white via-[#f5f1ec] to-[#c88715]/10 p-12 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-[#354037]"
          >
            Análise SWOT
          </motion.h2>
          <p className="max-w-3xl text-lg text-[#4a463f]">
            Mapeamento estratégico que demonstra maturidade de gestão e transparência com stakeholders.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {quadrants.map((quadrant, index) => {
            const Icon = quadrant.icon
            const items = swot[quadrant.key]

            return (
              <motion.article
                key={quadrant.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`rounded-3xl border ${quadrant.borderColor} bg-gradient-to-br ${quadrant.gradient} p-6 shadow-lg backdrop-blur`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${quadrant.iconBg}`}>
                    <Icon className={`h-5 w-5 ${quadrant.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#354037]">{quadrant.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {items.map((item, idx) => {
                    const text = typeof item === "string" ? item : item.text
                    const isBold = typeof item === "object" && item.bold
                    return (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className={`flex items-start gap-2.5 text-sm ${isBold ? "font-bold text-[#354037]" : "text-[#4a463f]/90"}`}
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#354037]/60" />
                        <span>{text}</span>
                      </motion.li>
                    )
                  })}
                </ul>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-[#ac4e15]/20 bg-white/80 p-6 shadow-sm shadow-[#ac4e15]/10"
        >
          <p className="text-sm text-[#4a463f]/85 italic">
            <strong className="font-semibold text-[#354037]">Transparência estratégica:</strong> Identificamos claramente nossos
            desafios e oportunidades. Isso demonstra maturidade de gestão e prepara a organização para crescimento sustentável.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
