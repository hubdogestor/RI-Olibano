"use client"

import { motion } from "framer-motion"
import { Sparkles, Building2, Stethoscope } from "lucide-react"

interface CompetitionSectionProps {
  competition: {
    title: string
    categories: Array<{
      name: string
      focus: string
      gap: string
      experience: string
    }>
    conclusion: string
  }
}

const categoryIcons = {
  "Spas convencionais": Building2,
  "Clínicas médicas": Stethoscope,
  Olíbano: Sparkles,
}

export default function CompetitionSection({ competition }: CompetitionSectionProps) {
  return (
    <div className="flex h-full flex-col justify-center overflow-y-auto bg-gradient-to-br from-white via-[#f5f1ec] to-[#c88715]/10 p-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-[#354037]"
          >
            {competition.title}
          </motion.h2>
          <p className="max-w-3xl text-lg text-[#4a463f]">
            Comparação estratégica que evidencia nosso posicionamento único e criação de nova categoria no mercado premium.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {competition.categories.map((category, index) => {
            const Icon = categoryIcons[category.name as keyof typeof categoryIcons] || Building2
            const isOlibano = category.name === "Olíbano"

            return (
              <motion.article
                key={category.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`relative flex h-full flex-col gap-4 rounded-3xl border p-6 shadow-lg backdrop-blur ${
                  isOlibano
                    ? "border-[#ac4e15]/40 bg-gradient-to-br from-[#ac4e15]/10 via-white/90 to-[#d59d40]/10 shadow-[#ac4e15]/20"
                    : "border-[#d9cbbb]/60 bg-white/85 shadow-[#354037]/5"
                }`}
              >
                {isOlibano && (
                  <div className="absolute -right-2 -top-2 rounded-full bg-gradient-to-r from-[#ac4e15] to-[#d59d40] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    Nossa posição
                  </div>
                )}
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${
                    isOlibano
                      ? "bg-gradient-to-br from-[#ac4e15] to-[#d59d40] text-white shadow-lg shadow-[#ac4e15]/30"
                      : "bg-[#354037]/10 text-[#354037]"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={`text-xl font-semibold ${isOlibano ? "text-[#ac4e15]" : "text-[#354037]"}`}>{category.name}</h3>

                <div className="flex-1 space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#ac4e15]/70">Foco</p>
                    <p className="mt-1 text-sm text-[#4a463f]/90">{category.focus}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#ac4e15]/70">Gap / Diferencial</p>
                    <p className="mt-1 text-sm text-[#4a463f]/90">{category.gap}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#ac4e15]/70">Experiência</p>
                    <p className="mt-1 text-sm text-[#4a463f]/90">{category.experience}</p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-[#ac4e15]/30 bg-gradient-to-r from-[#ac4e15]/5 to-[#d59d40]/10 p-8 shadow-inner shadow-[#ac4e15]/15"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#ac4e15] to-[#d59d40] p-3">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.32em] text-[#ac4e15]">Conclusão estratégica</p>
              <p className="text-lg font-medium text-[#354037]">{competition.conclusion}</p>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}
