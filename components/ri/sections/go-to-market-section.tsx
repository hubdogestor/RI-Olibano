"use client"

import { motion } from "framer-motion"
import { BarChart3, Megaphone, MessageSquare, Repeat2, ShoppingBag, Users } from "lucide-react"

interface GoToMarketSectionProps {
  goToMarket: {
    headline: string
    narrative: string
    channels: Array<{
      title: string
      description: string
      focus: string
    }>
    automations: Array<{
      title: string
      description: string
    }>
    kpis: Array<{
      label: string
      value: string
      detail: string
    }>
  }
}

const channelIcons = [Megaphone, ShoppingBag, Users]
const automationIcons = [Repeat2, MessageSquare, BarChart3]

export default function GoToMarketSection({ goToMarket }: GoToMarketSectionProps) {
  return (
    <div className="flex h-full flex-col justify-center overflow-y-auto bg-gradient-to-br from-[#f5f3f0] via-white to-[#C88715]/10 p-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-[#354037]"
          >
            {goToMarket.headline}
          </motion.h2>
          <p className="max-w-3xl text-lg text-[#4a463f]">{goToMarket.narrative}</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Canais prioritários</p>
            <div className="grid gap-6 lg:grid-cols-3">
              {goToMarket.channels.map((channel, index) => {
                const Icon = channelIcons[index % channelIcons.length]
                return (
                  <motion.article
                    key={channel.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className="group flex h-full flex-col gap-4 rounded-3xl border border-[#d9cbbb]/60 bg-white/85 p-6 shadow-lg shadow-[#ac4e15]/10 backdrop-blur"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#C88715] text-white shadow-lg shadow-[#ac4e15]/30">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#354037]">{channel.title}</h3>
                    <p className="text-sm text-[#4a463f]/80">{channel.description}</p>
                    <div className="mt-auto rounded-2xl bg-[#ac4e15]/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#ac4e15]">
                      {channel.focus}
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">Automação & relacionamento</p>
              <div className="space-y-4">
                {goToMarket.automations.map((automation, index) => {
                  const Icon = automationIcons[index % automationIcons.length]
                  return (
                    <motion.div
                      key={automation.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="flex items-start gap-4 rounded-2xl border border-[#d9cbbb]/60 bg-white/80 p-5 shadow-sm shadow-[#ac4e15]/10"
                    >
                      <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ac4e15]/12 text-[#ac4e15]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-semibold text-[#354037]">{automation.title}</h4>
                        <p className="text-sm text-[#4a463f]/80">{automation.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </section>

            <section className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-[#ac4e15]">KPIs monitorados</p>
              <div className="grid gap-4">
                {goToMarket.kpis.map((kpi) => (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl border border-[#ac4e15]/25 bg-gradient-to-br from-[#ac4e15]/10 to-[#C88715]/5 p-6 text-[#354037] shadow-sm shadow-[#ac4e15]/10"
                  >
                    <p className="text-xs uppercase tracking-[0.32em] text-[#ac4e15]/80">{kpi.label}</p>
                    <p className="text-3xl font-serif font-semibold text-[#354037]">{kpi.value}</p>
                    <p className="mt-2 text-sm text-[#4a463f]/75">{kpi.detail}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
