"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { ChevronRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  sections: Array<{ id: string; title: string; icon: LucideIcon }>
  activeSection: string
  onSectionChange: (sectionId: string) => void
  isImmersive?: boolean
}

export default function Sidebar({ sections, activeSection, onSectionChange, isImmersive = false }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const activeIndex = sections.findIndex((section) => section.id === activeSection)

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId)
  }

  const renderButtons = (collapseAfterClick = false) =>
    sections.map((section, index) => {
      const isActive = activeSection === section.id
      return (
        <motion.button
          key={section.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.04 }}
          onClick={() => {
            handleSectionClick(section.id)
            if (collapseAfterClick) {
              setIsMobileOpen(false)
            }
          }}
          className={cn(
            "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.24em] transition-all",
            isActive
              ? "bg-gradient-to-r from-[#ac4e15] via-[#d59d40] to-[#69683b] text-white shadow-lg shadow-[#ac4e15]/30"
              : "text-[#4a463f] hover:bg-[#ac4e15]/10 hover:text-[#ac4e15]",
          )}
        >
          <section.icon className="h-4 w-4 flex-shrink-0" />
          <span className="flex-1 text-left text-[11px]">{section.title}</span>
          {isActive && <motion.span layoutId="sidebar-active-dot" className="h-1.5 w-1.5 rounded-full bg-white" />}
        </motion.button>
      )
    })

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        onClick={() => setIsMobileOpen(true)}
        className={cn(
          "lg:hidden fixed left-4 top-[calc(var(--header-height)+1rem)] z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#ac4e15]/30 bg-[#f8f1e8]/95 text-[#ac4e15] shadow-lg shadow-[#ac4e15]/20 backdrop-blur",
          isImmersive && "opacity-90",
        )}
        aria-label="Abrir menu de seções"
      >
        <Menu className="h-5 w-5" />
      </motion.button>


      {isImmersive && (
        <div className="pointer-events-none fixed left-0 top-[var(--header-height)] hidden h-[calc(100vh-var(--header-height))] w-4 bg-gradient-to-r from-[#ac4e15]/20 via-[#ac4e15]/10 to-transparent opacity-0 transition-opacity duration-500 lg:block group-hover/immersive:opacity-70" />
      )}

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>


      {isImmersive && (
        <div className="pointer-events-none fixed left-0 top-[var(--header-height)] hidden h-[calc(100vh-var(--header-height))] w-4 bg-gradient-to-r from-[#ac4e15]/20 via-[#ac4e15]/10 to-transparent opacity-0 transition-opacity duration-500 lg:block group-hover/immersive:opacity-70" />
      )}

      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden fixed left-0 top-[var(--header-height)] z-50 flex h-[calc(100vh-var(--header-height))] w-72 flex-col border-r border-[var(--sidebar-border)] bg-[var(--sidebar-surface)] backdrop-blur"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.32em] text-[#ac4e15]/80">Sala do investidor</span>
                <span className="text-lg font-serif font-semibold text-[#354037]">OLÍBANO</span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ac4e15]/30 text-[#ac4e15]"
                aria-label="Fechar menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-2">{renderButtons(true)}</nav>

            <div className="grid gap-3 border-t border-[var(--sidebar-border)] p-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ac4e15]/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#4a463f]"
              >
                <ChevronRight className="h-4 w-4" />
                Voltar ao site
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <aside
        className={cn(
          "hidden lg:flex fixed left-0 top-[var(--header-height)] z-40 h-[calc(100vh-var(--header-height))] w-72 flex-col border-r border-[var(--sidebar-border)] bg-[var(--sidebar-surface)] backdrop-blur-xl transition-all duration-500",
          isImmersive
            ? "lg:-translate-x-16 lg:opacity-0 lg:pointer-events-none group-hover/immersive:translate-x-0 group-hover/immersive:opacity-100 group-hover/immersive:pointer-events-auto"
            : "",
        )}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-[#ac4e15]/80">Sala do investidor</p>
            <p className="text-xl font-serif font-semibold text-[#354037]">OLÍBANO</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-2">{renderButtons()}</nav>

        <div className="space-y-4 border-t border-[var(--sidebar-border)] px-6 py-6">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.32em] text-[#ac4e15]/80">Progresso</span>
              <span className="text-xs font-semibold text-[#ac4e15]">
                {activeIndex + 1}/{sections.length}
              </span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#ac4e15]/10">
              <motion.div
                key={activeSection}
                initial={{ width: 0 }}
                animate={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-[#ac4e15] via-[#d59d40] to-[#69683b]"
              />
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#ac4e15]/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#4a463f] transition-colors hover:bg-[#ac4e15]/10"
          >
            <ChevronRight className="h-4 w-4" />
            Voltar ao site
          </Link>
          <p className="text-center text-[11px] uppercase tracking-[0.32em] text-[#ac4e15]/60">© 2025 OLÍBANO</p>
        </div>
      </aside>
    </>
  )
}
