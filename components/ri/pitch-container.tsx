"use client"

import { lazy, Suspense, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Maximize2, Menu, Minimize2, X } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type riJson from "@/data/ri.json"
import { cn } from "@/lib/utils"
import ProgressBar from "./progress-bar"
import ProgressIndicator from "./progress-indicator"
import Breadcrumb from "./breadcrumb"

// Dynamic imports com fallback loading
const HeroSection = lazy(() => import("./sections/hero-section"))
const ProblemSection = lazy(() => import("./sections/problem-section"))
const SolutionSection = lazy(() => import("./sections/solution-section"))
const PurposeSection = lazy(() => import("./sections/purpose-section"))
const CustomerSection = lazy(() => import("./sections/customer-section"))
const MarketSection = lazy(() => import("./sections/market-section"))
const BusinessSection = lazy(() => import("./sections/business-section"))
const TractionSection = lazy(() => import("./sections/traction-section"))
const SwotSection = lazy(() => import("./sections/swot-section"))
const CompetitionSection = lazy(() => import("./sections/competition-section"))
const GoToMarketSection = lazy(() => import("./sections/go-to-market-section"))
const RoadmapSection = lazy(() => import("./sections/roadmap-section"))
const TeamSection = lazy(() => import("./sections/team-section"))
const InvestmentSection = lazy(() => import("./sections/investment-section"))
const ESGSection = lazy(() => import("./sections/esg-section"))
const FAQSection = lazy(() => import("./sections/faq-section"))
const ContactSection = lazy(() => import("./sections/contact-section"))

// Loading fallback component
const SectionFallback = () => (
  <div className="h-full flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#ac4e15]" />
      <p className="mt-4 text-gray-600">Carregando seção...</p>
    </div>
  </div>
)

type SectionMeta = {
  id: string
  title: string
  icon: LucideIcon
}

type RiData = typeof riJson

interface PitchContainerProps {
  activeSection: string
  data: RiData
  sections: ReadonlyArray<SectionMeta>
  onSectionChange: (id: SectionMeta["id"]) => void
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
  const previousSection = currentIndex > 0 ? sections[currentIndex - 1] : null
  const formattedIndex = String(currentIndex + 1).padStart(2, "0")

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return <HeroSection data={data.executiveSummary} />
      case "problem":
        return <ProblemSection problem={data.problem} />
      case "solution":
        return <SolutionSection solution={data.solution} />
      case "purpose":
        return <PurposeSection purpose={data.purpose} />
      case "customer":
        return <CustomerSection customer={data.customer} />
      case "market":
        return <MarketSection market={data.market} />
      case "business":
        return <BusinessSection businessModel={data.businessModel} />
      case "traction":
        return <TractionSection traction={data.traction} />
      case "swot":
        return <SwotSection swot={data.swot} />
      case "competition":
        return <CompetitionSection competition={data.competition} />
      case "goToMarket":
        return <GoToMarketSection goToMarket={data.goToMarket} />
      case "roadmap":
        return <RoadmapSection roadmap={data.roadmap} />
      case "team":
        return <TeamSection team={data.team} />
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

  const handlePreviousSection = () => {
    if (previousSection) {
      onSectionChange(previousSection.id)
    }
  }

  const handleToggleImmersive = () => {
    if (isImmersive) {
      setOverlayMenuOpen(false)
    }
    onToggleImmersive()
  }

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      const tagName = target?.tagName.toLowerCase()

      // Não interceptar navegação em inputs ou textareas
      if (tagName === "input" || tagName === "textarea" || target?.contentEditable === "true") {
        return
      }

      // Navegação por teclado ativada em modo imersivo OU quando usando setas explicitamente
      const isArrowKey = event.key === "ArrowRight" || event.key === "ArrowLeft"
      const isPageKey = event.key === "PageDown" || event.key === "PageUp"
      const isSpaceKey = event.code === "Space"

      if ((isArrowKey || isPageKey || (isSpaceKey && isImmersive)) && (nextSection || previousSection)) {
        if (event.key === "ArrowRight" || event.key === "PageDown" || event.code === "Space") {
          event.preventDefault()
          if (nextSection) {
            onSectionChange(nextSection.id)
          }
        }
        if (event.key === "ArrowLeft" || event.key === "PageUp") {
          event.preventDefault()
          if (previousSection) {
            onSectionChange(previousSection.id)
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeydown)
    return () => window.removeEventListener("keydown", handleKeydown)
  }, [isImmersive, nextSection, onSectionChange, previousSection])

  const progressPercentage = ((currentIndex + 1) / sections.length) * 100

  return (
    <>
      <ProgressBar progress={progressPercentage} />
      <main className="relative flex h-full flex-col gap-4 rounded-3xl border border-[#d9cbbb]/60 bg-white/65 p-5 shadow-[0_12px_60px_rgba(36,34,30,0.08)] backdrop-blur">
        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[#ecdcca] bg-white/80 px-5 py-4 shadow-sm shadow-[#ac4e15]/10 lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-wrap items-center gap-3">
            {isImmersive ? (
              <button
                type="button"
                onClick={() => setOverlayMenuOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ac4e15]/30 bg-white text-[#ac4e15] shadow-sm shadow-[#ac4e15]/20 transition-all hover:bg-[#ac4e15]/10"
                aria-label={overlayMenuOpen ? "Recolher menu de capítulos" : "Expandir menu de capítulos"}
              >
                {overlayMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            ) : null}
            <motion.span
              key={`${activeSection}-badge`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#C88715] text-sm font-bold text-white shadow-sm shadow-[#ac4e15]/30"
            >
              {formattedIndex}
            </motion.span>
            <motion.div
              key={`${activeSection}-header`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="min-w-0"
            >
              <p className="text-[0.58rem] uppercase tracking-[0.32em] text-[#ac4e15]/70">Capítulo atual</p>
              <h2 className="truncate text-lg font-serif font-semibold text-[#354037] leading-tight">
                {currentSectionData?.title}
              </h2>
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[#4a463f]/60">
                {currentIndex + 1} de {sections.length} seções
              </p>
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

        <div className="flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-white via-[#f6eee2] to-[#C88715]/10 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`inline-${activeSection}`}
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -48 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="min-h-full flex flex-col"
            >
              <div className="flex-1 overflow-y-auto px-8 py-6 pb-20">
                <Breadcrumb items={currentSectionData ? [currentSectionData.title] : []} />
                <Suspense fallback={<SectionFallback />}>
                  {renderSection()}
                </Suspense>
              </div>
            </motion.div>
          </AnimatePresence>
          <ProgressIndicator current={currentIndex + 1} total={sections.length} />
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
            className="fixed inset-0 z-[120] flex bg-gradient-to-br from-[#faf6ef] via-[#f4ead8] to-[#ecdbc0] text-[#354037]"
          >
            <motion.aside
              initial={false}
              animate={{ width: overlayMenuOpen ? 280 : 0, opacity: overlayMenuOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative hidden h-full overflow-hidden border-r border-[#e4d8c7] bg-white/85 backdrop-blur-xl lg:block"
            >
              <div className={cn("flex h-full flex-col", overlayMenuOpen ? "opacity-100" : "pointer-events-none opacity-0")}>
                <div className="px-6 pb-4 pt-6">
                  <p className="text-[0.58rem] uppercase tracking-[0.32em] text-[#ac4e15]/80">Navegar capítulos</p>
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
                            ? "bg-gradient-to-r from-[#ac4e15]/15 to-[#C88715]/20 text-[#ac4e15]"
                            : "text-[#4a463f]/70 hover:bg-white/90 hover:text-[#ac4e15]",
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

            <div className="relative flex-1 overflow-hidden bg-white/70">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e4d8c7] px-6 py-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setOverlayMenuOpen((prev) => !prev)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#ac4e15]/25 bg-white text-[#ac4e15] shadow-sm shadow-[#ac4e15]/20 transition-all hover:bg-[#ac4e15]/10"
                    aria-label={overlayMenuOpen ? "Ocultar menu de capítulos" : "Mostrar menu de capítulos"}
                  >
                    {overlayMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </button>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#ac4e15] to-[#C88715] text-sm font-bold text-white shadow-sm shadow-[#ac4e15]/30">
                      {formattedIndex}
                    </span>
                    <div className="space-y-1">
                      <p className="text-[0.6rem] uppercase tracking-[0.36em] text-[#ac4e15]/80">Capítulo atual</p>
                      <h2 className="text-xl font-serif font-semibold text-[#354037]">{currentSectionData?.title}</h2>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-wrap items-center justify-center gap-3 text-[0.68rem] uppercase tracking-[0.24em] text-[#ac4e15]">
                  {previousSection ? (
                    <button
                      onClick={handlePreviousSection}
                      className="inline-flex items-center gap-2 rounded-full border border-[#ac4e15]/25 bg-white px-4 py-2 text-[#ac4e15] transition-all hover:bg-[#ac4e15]/10"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Anterior
                    </button>
                  ) : null}
                  <span className="text-[#4a463f]">
                    {currentIndex + 1} de {sections.length}
                  </span>
                  {nextSection ? (
                    <button
                      onClick={handleNextSection}
                      className="inline-flex items-center gap-2 rounded-full border border-[#ac4e15]/25 bg-white px-4 py-2 text-[#ac4e15] transition-all hover:bg-[#ac4e15]/10"
                    >
                      Próxima
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ) : null}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleToggleImmersive}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ac4e15] via-[#C88715] to-[#69683b] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-[#ac4e15]/20 transition-transform hover:scale-[1.02]"
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
                    <Suspense fallback={<SectionFallback />}>
                      {renderSection()}
                    </Suspense>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
