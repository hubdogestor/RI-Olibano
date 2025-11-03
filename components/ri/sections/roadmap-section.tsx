"use client"



import { motion } from "framer-motion"

import { CheckCircle2, Clock, Calendar } from "lucide-react"



interface RoadmapItem {
  text: string
  status?: string
  bold?: boolean
  icon?: string
}

interface RoadmapSectionProps {

  roadmap: Array<{

    quarter: string

    items: (string | RoadmapItem)[]

  }>

}



export default function RoadmapSection({ roadmap }: RoadmapSectionProps) {

  return (

    <section aria-label="Roadmap de desenvolvimento do Olíbano" className="h-full overflow-y-auto flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-br from-[#f5f3f0] via-white to-[#C88715]/5">

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">

        <div className="mb-4">

          <motion.h2

            initial={{ opacity: 0, y: -20 }}

            animate={{ opacity: 1, y: 0 }}

            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-2 bg-gradient-to-r from-[#354037] to-[#C88715] bg-clip-text text-transparent"

          >

            Roadmap

          </motion.h2>

          <div className="h-1 w-16 bg-gradient-to-r from-[#C88715] to-[#AC4E15] rounded-full" aria-hidden="true" />

        </div>



        <div className="relative mt-6 sm:mt-8 md:mt-10 lg:mt-12">

          <div className="absolute left-0 right-0 top-12 sm:top-14 md:top-16 hidden h-0.5 bg-gradient-to-r from-[#C88715] via-[#AC4E15] to-transparent lg:block" aria-hidden="true" />



          <div
            role="region"
            aria-label="Timeline scrollável de marcos estratégicos (use as setas do teclado para navegar)"
            className="flex snap-x snap-mandatory gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 sm:pb-6 md:pb-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#C88715]/40"
          >

            {roadmap.map((phase, i) => {
              const [year, quarter] = phase.quarter.split(" ")
              return (
                <motion.div
                  key={phase.quarter}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="group relative flex w-72 sm:w-80 min-w-[16rem] sm:min-w-[20rem] snap-center flex-col rounded-3xl border border-[#d9cbbb]/60 bg-white/80 p-5 sm:p-6 md:p-7 shadow-lg shadow-[#ac4e15]/10 backdrop-blur"
                >
                  <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.32em] text-[#ac4e15]">
                    <span className="inline-flex h-12 w-12 sm:h-14 sm:w-14 flex-col items-center justify-center gap-0.5 rounded-full bg-gradient-to-br from-[#ac4e15] to-[#C88715] text-white font-semibold shadow-lg shadow-[#ac4e15]/30">
                      <span className="text-xs leading-tight tracking-[0.12em]">
                        {quarter ?? phase.quarter}
                      </span>
                      <span className="text-[0.55rem] leading-tight tracking-[0.2em]">{quarter ? year : ""}</span>
                    </span>
                    Marco estratégico
                  </div>

                  <ul className="space-y-2 sm:space-y-3">
                    {phase.items.map((item, j) => {
                      const isObject = typeof item === "object" && item !== null && "text" in item
                      const text = isObject ? (item as RoadmapItem).text : (item as string)
                      const status = isObject ? (item as RoadmapItem).status : undefined
                      const isBold = isObject ? (item as RoadmapItem).bold : false
                      const iconType = isObject ? (item as RoadmapItem).icon : undefined

                      let ItemIcon: any = CheckCircle2
                      if (status === "planned") {
                        ItemIcon = Clock
                      } else if (iconType === "calendar") {
                        ItemIcon = Calendar
                      }

                      return (
                        <motion.li
                          key={text}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.3, delay: j * 0.08 }}
                          className={`flex gap-2 sm:gap-3 text-xs sm:text-sm ${isBold ? "font-bold text-[#354037]" : "text-[#354037]"}`}
                        >
                          <ItemIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#ac4e15]" aria-hidden="true" />
                          <span>{text}</span>
                        </motion.li>
                      )
                    })}
                  </ul>
                </motion.div>
              )
            })}
          </div>

        </div>

      </motion.div>

    </section>

  )

}

