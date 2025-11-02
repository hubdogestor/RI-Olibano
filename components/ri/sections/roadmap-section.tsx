"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface RoadmapSectionProps {
  roadmap: Array<{
    quarter: string
    items: string[]
  }>
}

export default function RoadmapSection({ roadmap }: RoadmapSectionProps) {
  return (
    <div className="h-full overflow-y-auto flex flex-col justify-center p-12 bg-gradient-to-br from-[#f5f3f0] via-white to-[#C88715]/5">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
        <div className="mb-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold mb-2 bg-gradient-to-r from-[#354037] to-[#C88715] bg-clip-text text-transparent"
          >
            Roadmap
          </motion.h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#C88715] to-[#AC4E15] rounded-full" />
        </div>

        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-[#C88715] via-[#AC4E15] to-transparent lg:block" />

          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#d59d40]/40">
            {roadmap.map((phase, i) => {
              const [year, quarter] = phase.quarter.split(" ")
              return (
                <motion.div
                  key={phase.quarter}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="group relative flex w-80 min-w-[20rem] snap-center flex-col rounded-3xl border border-[#d9cbbb]/60 bg-white/80 p-7 shadow-lg shadow-[#ac4e15]/10 backdrop-blur"
                >
                  <div className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[#ac4e15]">
                    <span className="inline-flex h-12 w-12 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#d59d40] text-white font-semibold shadow-lg shadow-[#ac4e15]/30">
                      <span className="text-[0.65rem] leading-none">{quarter ?? phase.quarter}</span>
                      <span className="text-[0.58rem] leading-none tracking-[0.3em]">{quarter ? year : ""}</span>
                    </span>
                    Marco estratÃ©gico
                  </div>

                  <ul className="space-y-3">
                    {phase.items.map((item, j) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.3, delay: j * 0.08 }}
                        className="flex gap-3 text-sm text-[#354037]"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ac4e15]" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
