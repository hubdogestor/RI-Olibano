"use client"

import { motion, AnimatePresence } from "framer-motion"
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
}

export default function PitchContainer({ activeSection, data, sections }: PitchContainerProps) {
  const currentSectionData = sections.find((s) => s.id === activeSection)

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
    <main className="flex-1 flex flex-col overflow-hidden ml-72">
      {/* Header */}
      <div className="h-20 border-b border-gray-200 bg-white px-12 flex items-center justify-between">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-serif font-bold text-[#354037] mb-1">{currentSectionData?.title}</h2>
          <p className="text-xs text-gray-400">
            {sections.findIndex((s) => s.id === activeSection) + 1} de {sections.length} seções
          </p>
        </motion.div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-br from-white via-gray-50 to-[#C88715]/2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}
