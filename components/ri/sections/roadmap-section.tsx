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
          {/* Timeline connector */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C88715] via-[#AC4E15] to-transparent" />

          <div className="space-y-8">
            {roadmap.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="relative pl-24"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-[#C88715] to-[#AC4E15] rounded-full flex items-center justify-center shadow-lg shadow-[#C88715]/40"
                >
                  <span className="text-white font-bold text-sm">{phase.quarter}</span>
                </motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ translateX: 8, boxShadow: "0 20px 40px rgba(200, 135, 21, 0.15)" }}
                  className="bg-white border border-[#C88715]/20 rounded-2xl p-6 hover:border-[#C88715]/50 transition-all duration-300"
                >
                  <ul className="space-y-3">
                    {phase.items.map((item, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 * i + 0.05 * j }}
                        className="flex gap-3 text-sm text-[#354037]"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#C88715] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
