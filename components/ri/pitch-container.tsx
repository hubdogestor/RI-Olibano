"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronRight, Maximize2, Menu, Minimize2, X } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type riJson from "@/data/ri.json"
import { cn } from "@/lib/utils"
import HeroSection from "./sections/hero-section"
import HighlightsSection from "./sections/highlights-section"
import MarketSection from "./sections/market-section"
import BusinessSection from "./sections/business-section"
import TractionSection from "./sections/traction-section"
import RoadmapSection from "./sections/roadmap-section"
import GoToMarketSection from "./sections/go-to-market-section"
import TeamSection from "./sections/team-section"
import InvestmentSection from "./sections/investment-section"
import ESGSection from "./sections/esg-section"
import FAQSection from "./sections/faq-section"
import ContactSection from "./sections/contact-section"

type SectionMeta = {
  id: string
  title: string
  icon: LucideIcon
}

type RiData = typeof riJson

interface PitchContainerProps {
  activeSection: string
  data: RiData
  sections: SectionMeta[]
  onSectionChange: (id: string) => void
  isImmersive: boolean
  onToggleImmersive: () => void
}

export default function PitchContainer({
  activeSection,
  data,
  sections,
  onSectionChange,
  isImmersive,
  onToggleImmersive,
}: PitchContainerProps) {
  const [overlayMenuOpen, setOverlayMenuOpen] = useState(false)

  const currentSectionData = sections.find((section) => section.id === activeSection)
  const currentIndex = sections.findIndex((section) => section.id === activeSection)
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null
  const formattedIndex = String(currentIndex + 1).padStart(2, "0")

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return <HeroSection data={data.hero} />
      case "highlights":
        return <HighlightsSection highlights={data.highlights} />
      case "market":
        return <MarketSection market={data.market} />
      case "business":
        return <BusinessSection businessModel={data.businessModel} />
      case "traction":
        return <TractionSection traction={data.traction} />
      case "roadmap":
        return <RoadmapSection roadmap={data.roadmap} />
      case "goToMarket":
        return <GoToMarketSection goToMarket={data.goToMarket} />
      case "team":
        return <TeamSection team={data.governance.team} />
      case "investment":
        return <InvestmentSection investment={data.investment} />
      case "esg":
        return <ESGSection esg={data.impact} />
      case "faq":
        return <FAQSection faqs={data.faq} />
      case "contact":
        return <ContactSection contact={data.contact} />
      default:
        return null
    }
  }

  const handleNextSection = () => {
    if (nextSection) {
      onSectionChange(nextSection.id)
    }
  }

  const handleToggleImmersive = () => {
    if (isImmersive) {
      setOverlayMenuOpen(false)
    }
    onToggleImmersive()
  }

  return (
    <>
      <main className="relative flex h-full flex-col gap-4 rounded-3xl border border-[#d9cbbb]/60 bg-white/65 p-5 shadow-[0_12px_60px_rgba(36,34,30,0.08)] backdrop-blur">
        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[#ecdcca] bg-white/80 px-5 py-4 shadow-sm shadow-[#ac4e15]/10 lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ac4e15]/25 bg-[#f8f1e8]/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-[#ac4e15]/80">
              <span>Sala do Investidor</span>
              <span className="font-serif text-sm tracking-[0.1em] text-[#354037]">Olíbano</span>
            </div>
            <motion.div
              key={`${activeSection}-index-badge`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#d59d40] text-sm font-bold text-white shadow-sm shadow-[#ac4e15]/30">
                {formattedIndex}
              </span>
              <div className="min-w-0">
                <p className="text-[0.58rem] uppercase tracking-[0.32em] text-[#ac4e15]/70">Capítulo atual</p>
                <h2 className="truncate text-lg font-serif font-semibold text-[#354037] leading-tight">
                  {currentSectionData?.title}
                </h2>
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[#4a463f]/60">
                  {currentIndex + 1} de {sections.length} seções
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-none items-center gap-2">
            <motion.button
              key={`immersive-${isImmersive}`}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleToggleImmersive}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ac4e15]/30 bg-white/70 text-[#ac4e15] shadow-sm shadow-[#ac4e15]/20 transition-colors hover:bg-[#ac4e15]/15"
              aria-label={isImmersive ? "Sair do modo imersivo" : "Entrar no modo imersivo"}
            >
              {isImmersive ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </motion.button>

            {nextSection ? (
              <motion.button
                key={`${activeSection}-next`}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                onClick={handleNextSection}
                className="inline-flex items-center gap-2 rounded-full border border-[#ac4e15]/25 bg-white px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#ac4e15] shadow-sm shadow-[#ac4e15]/15 transition-all hover:translate-x-0.5 hover:bg-[#ac4e15]/10"
              >
                Próxima seção
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            ) : null}
          </div>
        </div>

        <div className="flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-white via-[#f6eee2] to-[#d59d40]/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`inline-${activeSection}`}
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -48 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="min-h-full"
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <AnimatePresence>
        {isImmersive ? (
          <motion.div
            key="immersive-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[120] flex bg-gradient-to-br from-[#1f251f] via-[#2e362d] to-[#131814] text-white"
          >
            <motion.aside
              initial={false}
              animate={{ width: overlayMenuOpen ? 280 : 0, opacity: overlayMenuOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative hidden h-full overflow-hidden border-r border-white/10 bg-white/5 backdrop-blur-xl lg:block"
            >
              <div className={cn("flex h-full flex-col", overlayMenuOpen ? "opacity-100" : "pointer-events-none opacity-0")}
              >
                <div className="px-6 pb-4 pt-6">
                  <p className="text-[0.58rem] uppercase tracking-[0.32em] text-white/70">Navegar capítulos</p>
                </div>
                <div className="flex-1 space-y-2 overflow-y-auto px-4 pb-6">
                  {sections.map((section) => {
                    const isActive = section.id === activeSection
                    return (
                      <button
                        key={section.id}
                        onClick={() => {
                          onSectionChange(section.id)
                          setOverlayMenuOpen(false)
                        }}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-[0.68rem] font-semibold uppercase tracking-[0.26em] transition-all",
                          isActive
                            ? "bg-white/15 text-white shadow shadow-black/20"
                            : "text-white/70 hover:bg-white/10 hover:text-white",
                        )}
                      >
                        <section.icon className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{section.title}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </motion.aside>

            <div className="relative flex-1 overflow-hidden">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-8 py-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">
                    {formattedIndex}
                  </span>
                  <div className="space-y-1">
                    <p className="text-[0.6rem] uppercase tracking-[0.36em] text-white/60">Capítulo</p>
                    <h2 className="text-2xl font-serif font-semibold text-white">{currentSectionData?.title}</h2>
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/50">
                      {currentIndex + 1} de {sections.length}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {nextSection ? (
                    <button
                      onClick={handleNextSection}
                      className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white transition-all hover:bg-white/20 lg:inline-flex"
                    >
                      Próxima seção
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ) : null}
                  <button
                    onClick={handleToggleImmersive}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-white/20"
                  >
                    <Minimize2 className="h-4 w-4" />
                    Sair
                  </button>
                </div>
              </div>

              <div className="h-full overflow-y-auto px-6 py-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`immersive-${activeSection}`}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -32 }}
                    transition={{ duration: 0.35 }}
                    className="mx-auto max-w-[1200px]"
                  >
                    {renderSection()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
              <div className="group ml-4 flex items-center">
                <button
                  type="button"
                  onClick={() => setOverlayMenuOpen((prev) => !prev)}
                  className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/70 opacity-20 transition-all hover:opacity-100"
                >
                  {overlayMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {nextSection ? (
              <button
                onClick={handleNextSection}
                className="pointer-events-auto absolute right-6 top-1/2 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white transition-all hover:bg-white/20 lg:flex"
              >
                Próxima
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
