"use client"

import { motion } from "framer-motion"
import { Leaf, Heart, Sprout, UsersIcon } from "lucide-react"

interface ESGSectionProps {
  esg: {
    title: string
    initiatives: Array<{
      title: string
      desc: string
    }>
    kpis: Array<{
      metric: string
      target: string
    }>
  }
}

export default function ESGSection({ esg }: ESGSectionProps) {
  const iconMap: { [key: string]: any } = {
    "Saúde Preventiva": Heart,
    "Educação Continuada": Sprout,
    "Práticas Sustentáveis": Leaf,
    "Inclusão Social": UsersIcon,
  }

  return (
    <div className="h-full overflow-y-auto flex flex-col justify-center p-12 bg-gradient-to-br from-[#f5f3f0] via-white to-[#69683B]/5">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold mb-2 bg-gradient-to-r from-[#69683B] to-[#354037] bg-clip-text text-transparent"
          >
            {esg.title}
          </motion.h2>
          <p className="text-[#354037]/70 mt-2">Impacto positivo em saúde, meio ambiente e comunidade</p>
          <div className="h-1 w-16 bg-gradient-to-r from-[#69683B] to-[#C88715] rounded-full mt-4" />
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-serif font-bold text-[#354037] mb-6">Nossas Iniciativas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {esg.initiatives.map((initiative, i) => {
              const IconComponent = iconMap[initiative.title] || Leaf
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ translateY: -4 }}
                  className="bg-white border border-[#C88715]/20 rounded-2xl p-6 hover:border-[#C88715]/50 hover:shadow-lg hover:shadow-[#C88715]/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-[#C88715]/20 to-[#AC4E15]/10">
                      <IconComponent className="w-6 h-6 text-[#C88715]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif font-bold text-[#354037] mb-2">{initiative.title}</h4>
                      <p className="text-sm text-[#354037]/70">{initiative.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* KPIs */}
        <div>
          <h3 className="text-xl font-serif font-bold text-[#354037] mb-6">Metas ESG</h3>
          <div className="space-y-3">
            {esg.kpis.map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + 0.1 * i }}
                className="flex justify-between items-center bg-white border border-[#C88715]/20 rounded-xl p-4 hover:border-[#C88715]/50 hover:bg-gradient-to-r hover:from-[#C88715]/5 hover:to-transparent transition-all duration-300"
              >
                <span className="text-[#354037] font-medium">{kpi.metric}</span>
                <span className="font-serif font-bold text-[#C88715] bg-[#C88715]/10 px-3 py-1 rounded-lg">
                  {kpi.target}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
