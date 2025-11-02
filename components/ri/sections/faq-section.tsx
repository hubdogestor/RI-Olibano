"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

interface FAQSectionProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="h-full overflow-y-auto flex flex-col justify-center p-12 bg-gradient-to-br from-[#f5f3f0] via-white to-[#354037]/5">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold mb-2 bg-gradient-to-r from-[#354037] to-[#C88715] bg-clip-text text-transparent"
          >
            Perguntas Frequentes
          </motion.h2>
          <p className="text-[#354037]/70 mt-2">Dúvidas comuns de investidores sobre OLÍBANO</p>
          <div className="h-1 w-16 bg-gradient-to-r from-[#354037] to-[#C88715] rounded-full mt-4" />
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left bg-white border border-[#C88715]/20 rounded-2xl px-6 py-5 flex justify-between items-center hover:border-[#C88715]/50 hover:bg-gradient-to-r hover:from-[#C88715]/5 hover:to-transparent transition-all duration-300"
              >
                <div className="flex items-start gap-4 flex-1">
                  <HelpCircle className="w-5 h-5 text-[#C88715] flex-shrink-0 mt-0.5" />
                  <span className="font-serif font-bold text-[#354037] group-hover:text-[#C88715] transition-colors text-left">
                    {item.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-[#C88715] ml-4"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-[#C88715]/5 to-transparent border border-[#C88715]/20 border-t-0 rounded-b-2xl"
                  >
                    <p className="px-6 py-5 text-[#354037]/80 leading-relaxed text-sm ml-9">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
