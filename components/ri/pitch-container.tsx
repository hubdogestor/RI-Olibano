"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Maximize2, Minimize2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type riJson from "@/data/ri.json"
import { cn } from "@/lib/utils"
import HeroSection from "./sections/hero-section"
import HighlightsSection from "./sections/highlights-section"
import MarketSection from "./sections/market-section"
import BusinessSection from "./sections/business-section"
import TractionSection from "./sections/traction-section"
import RoadmapSection from "./sections/roadmap-section"
import TeamSection from "./sections/team-section"
import ESGSection from "./sections/esg-section"
import PressSection from "./sections/press-section"
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
  const currentSectionData = sections.find((s) => s.id === activeSection)
  const currentIndex = sections.findIndex((s) => s.id === activeSection)
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null

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
      case "team":
        return <TeamSection team={data.governance.team} />
      case "esg":
        return <ESGSection esg={data.esg} />
      case "press":
        return <PressSection press={data.press} />
      case "faq":
        return <FAQSection faq={data.faq} />
      case "contact":
        return <ContactSection contact={data.contact} />
      default:
        return null
    }
  }

  return (
    <main
      className={cn(
        "flex max-h-full flex-1 flex-col transition-[padding] duration-300",
        isImmersive ? "lg:pt-4" : "",
      )}
    >
      <div className="sticky top-[var(--header-height)] z-30 flex h-14 items-center justify-between gap-4 border-b border-[#d9cbbb]/60 bg-[#f8f1e8]/75 px-4 backdrop-blur-lg sm:h-16 sm:px-8 lg:px-10">
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <div className="hidden min-w-[140px] flex-col sm:flex">
            <motion.p
              key="investor-label"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="text-[0.62rem] uppercase tracking-[0.32em] text-[#ac4e15]/80"
            >
              Sala do Investidor
            </motion.p>
            <motion.p
              key="investor-title"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg font-serif font-semibold text-[#354037]"
            >
              OLÍBANO
            </motion.p>
          </div>

          <div className="min-w-0 flex-1">
            <motion.p
              key={`${activeSection}-label`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="text-[0.62rem] uppercase tracking-[0.32em] text-[#ac4e15]/80"
            >
              Seção
            </motion.p>
            <motion.h2
              key={`${activeSection}-title`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="truncate text-xl font-serif font-semibold text-[#354037] leading-tight"
            >
              {currentSectionData?.title}
            </motion.h2>
            <motion.p
              key={`${activeSection}-index`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-[0.7rem] uppercase tracking-[0.28em] text-[#4a463f]/70"
            >
              {currentIndex + 1} de {sections.length} seções
            </motion.p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            key={`immersive-${isImmersive}`}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onToggleImmersive}
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
              onClick={() => onSectionChange(nextSection.id)}
              className="inline-flex items-center gap-2 rounded-full border border-[#ac4e15]/30 bg-white/80 px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#ac4e15] shadow-sm shadow-[#ac4e15]/20 transition-all hover:translate-x-0.5 hover:bg-[#ac4e15]/15"
            >
              Próxima seção
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          ) : null}
        </div>
      </div>

      <div className="flex-1 bg-gradient-to-br from-white via-[#f6eee2] to-[#d59d40]/15 lg:overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 64 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -64 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="min-h-full"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}
