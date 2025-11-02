"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type riJson from "@/data/ri.json"
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
}

export default function PitchContainer({ activeSection, data, sections, onSectionChange }: PitchContainerProps) {
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
    <main className="flex max-h-full flex-1 flex-col">
      <div className="sticky top-[var(--header-height)] z-30 flex h-16 items-center justify-between border-b border-[#d9cbbb]/60 bg-[#f8f1e8]/85 px-4 backdrop-blur sm:h-20 sm:px-8 lg:px-12">
        <div>
          <motion.p
            key={`${activeSection}-label`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-xs uppercase tracking-[0.28em] text-[#ac4e15]/80"
          >
            Seção
          </motion.p>
          <motion.h2
            key={`${activeSection}-title`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-serif font-bold text-[#354037] leading-tight"
          >
            {currentSectionData?.title}
          </motion.h2>
          <motion.p
            key={`${activeSection}-index`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-xs text-[#4a463f]/70"
          >
            {currentIndex + 1} de {sections.length} seções
          </motion.p>
        </div>

        {nextSection ? (
          <motion.button
            key={`${activeSection}-next`}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => onSectionChange(nextSection.id)}
            className="inline-flex items-center gap-2 rounded-full border border-[#ac4e15]/30 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#ac4e15] shadow-sm shadow-[#ac4e15]/20 transition-all hover:translate-x-0.5 hover:bg-[#ac4e15]/10"
          >
            Próxima seção
            <ChevronRight className="h-4 w-4" />
          </motion.button>
        ) : null}
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
