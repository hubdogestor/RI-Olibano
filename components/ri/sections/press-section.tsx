"use client"

import { motion } from "framer-motion"
import { ExternalLink, Calendar } from "lucide-react"

interface PressSectionProps {
  press: Array<{
    title: string
    date: string
    source: string
  }>
}

export default function PressSection({ press }: PressSectionProps) {
  return (
    <div className="h-full overflow-y-auto flex flex-col justify-center p-12 bg-gradient-to-br from-[#f5f3f0] via-white to-[#C88715]/5">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold mb-2 bg-gradient-to-r from-[#AC4E15] to-[#354037] bg-clip-text text-transparent"
          >
            Presença na Imprensa
          </motion.h2>
          <p className="text-[#354037]/70 mt-2">Cobertura de mídia e menções de OLÍBANO</p>
          <div className="h-1 w-16 bg-gradient-to-r from-[#AC4E15] to-[#C88715] rounded-full mt-4" />
        </div>

        <div className="space-y-4">
          {press.map((article, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ x: 8 }}
              className="group block"
            >
              <div className="bg-white border border-[#C88715]/20 rounded-2xl p-6 hover:border-[#C88715]/50 hover:shadow-lg hover:shadow-[#C88715]/10 transition-all duration-300">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-lg font-serif font-bold text-[#354037] group-hover:text-[#C88715] transition-colors flex-1">
                    {article.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-[#C88715]/60 group-hover:text-[#C88715] flex-shrink-0 mt-1" />
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-[#354037]/60">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <div className="flex-1 text-[#C88715] font-semibold px-3 py-1 bg-[#C88715]/10 rounded-lg inline-block">
                    {article.source}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
