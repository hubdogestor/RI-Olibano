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
    <section
      aria-label="Perguntas frequentes sobre investimento"
      className="h-full overflow-y-auto flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-br from-[#f5f3f0] via-white to-[#354037]/5"
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
        <div className="mb-6 sm:mb-7 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-2 bg-gradient-to-r from-[#354037] to-[#C88715] bg-clip-text text-transparent"
          >
            Perguntas Frequentes
          </motion.h2>
          <p className="text-[#354037]/70 text-sm sm:text-base mt-2">Dúvidas comuns de investidores sobre OLÍBANO</p>
          <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-[#354037] to-[#C88715] rounded-full mt-3 sm:mt-4" aria-hidden="true" />
        </div>

        <div className="space-y-2 sm:space-y-3">
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
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full text-left bg-white border border-[#C88715]/20 rounded-2xl px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 flex justify-between items-center hover:border-[#C88715]/50 hover:bg-gradient-to-r hover:from-[#C88715]/5 hover:to-transparent transition-all duration-300"
              >
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 flex-1">
                  <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#C88715] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-serif font-bold text-[#354037] group-hover:text-[#C88715] transition-colors text-left text-sm sm:text-base">
                    {item.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-[#C88715] ml-3 sm:ml-4"
                  aria-hidden="true"
                >
                  <ChevronDown size={16} className="sm:w-5 sm:h-5 w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-label={`Resposta: ${item.question}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-[#C88715]/5 to-transparent border border-[#C88715]/20 border-t-0 rounded-b-2xl"
                  >
                    <p className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-[#354037]/80 leading-relaxed text-xs sm:text-sm ml-6 sm:ml-7 md:ml-9">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
