"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Gem, Menu, X, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  sections: Array<{ id: string; title: string; icon: LucideIcon }>
  activeSection: string
  onSectionChange: (sectionId: string) => void
}

export default function Sidebar({ sections, activeSection, onSectionChange }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const activeIndex = sections.findIndex((section) => section.id === activeSection)

  const handleChange = (sectionId: string) => {
    onSectionChange(sectionId)
  }

  const renderSectionButtons = (closeAfterSelect = false) =>
    sections.map((section, index) => (
      <motion.button
        key={section.id}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.05 * index }}
        onClick={() => {
          handleChange(section.id)
          if (closeAfterSelect) {
            setIsExpanded(false)
          }
        }}
        className={cn(
          "w-full text-left px-3.5 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-3",
          activeSection === section.id
            ? "bg-gradient-to-r from-[#C88715] to-[#AC4E15] text-white shadow-lg shadow-[#C88715]/30"
            : "text-gray-400 hover:text-[#C88715] hover:bg-[#C88715]/10",
        )}
      >
        <section.icon className="w-4 h-4 flex-shrink-0" />
        <span className="text-xs flex-1">{section.title}</span>
        {activeSection === section.id && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-1.5 h-1.5 rounded-full bg-white" />
        )}
      </motion.button>
    ))

  return (
    <>
      {/* Barra superior móvel minimalista */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#354037] to-[#2a3430] border-b border-[#C88715]/20 flex items-center justify-between px-4 z-50">
        <motion.button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#C88715] text-white shadow-lg shadow-[#C88715]/40 transition-colors"
          whileTap={{ scale: 0.94 }}
          aria-label="Abrir menu de seções"
        >
          {isExpanded ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>

        <div className="text-lg font-serif font-bold bg-gradient-to-r from-[#C88715] to-[#AC4E15] bg-clip-text text-transparent">
          OLÍBANO
        </div>

        <motion.button
          onClick={() => {
            handleChange("hero")
            setIsExpanded(false)
          }}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#C88715]/40 text-[#C88715] transition-all hover:bg-[#C88715]/10"
          whileTap={{ scale: 0.94 }}
          aria-label="Ir para início"
        >
          <Gem className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Overlay móvel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Gaveta lateral móvel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.aside
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-gradient-to-b from-[#354037] to-[#2a3430] border-r border-[#C88715]/20 flex flex-col z-40 overflow-y-auto"
          >
            <div className="px-6 pt-6 pb-4 border-b border-[#C88715]/20">
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">Investor Relations</p>
                <div className="h-1 w-12 bg-gradient-to-r from-[#C88715] to-[#AC4E15] rounded-full mt-3" />
              </motion.div>
            </div>

            <nav className="flex-1 py-4 space-y-0.5 px-3">{renderSectionButtons(true)}</nav>

            <div className="p-3 border-t border-[#C88715]/20 bg-[#2a3430]/50 space-y-3">
              <Link
                href="/"
                onClick={() => setIsExpanded(false)}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#C88715]/10 text-[#C88715] hover:bg-[#C88715]/20 transition-all duration-300 text-xs font-medium"
              >
                <ChevronRight className="w-3.5 h-3.5" />
                Voltar para o site
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Sidebar desktop fixa */}
      <aside className="hidden lg:flex w-72 bg-gradient-to-b from-[#354037] to-[#2a3430] border-r border-[#C88715]/20 flex-col overflow-hidden fixed left-0 top-0 h-screen z-40">
        <div className="p-6 pb-4 border-b border-[#C88715]/20 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">Investor Relations</p>
            <div className="text-2xl font-serif font-bold bg-gradient-to-r from-[#C88715] to-[#AC4E15] bg-clip-text text-transparent">
              OLÍBANO
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={() => handleChange("hero")}
            className={cn(
              "inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#C88715]/40 transition-all",
              activeSection === "hero"
                ? "bg-gradient-to-br from-[#C88715] to-[#AC4E15] text-white shadow-lg shadow-[#C88715]/40"
                : "text-[#C88715] hover:bg-[#C88715]/10",
            )}
            aria-label="Ir para início"
          >
            <Gem className="w-5 h-5" />
          </motion.button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 space-y-0.5 px-3">{renderSectionButtons()}</nav>

        <div className="px-4 py-4 border-t border-[#C88715]/20 space-y-4 bg-[#2a3430]/40">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400 uppercase tracking-[0.2em]">Progresso</span>
              <span className="text-xs text-[#C88715] font-semibold">
                {activeIndex + 1}/{sections.length}
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#C88715]/15 rounded-full overflow-hidden mt-2">
              <motion.div
                key={activeSection}
                initial={{ width: 0 }}
                animate={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#C88715] to-[#AC4E15]"
              />
            </div>
          </div>

          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#C88715]/10 text-[#C88715] hover:bg-[#C88715]/20 transition-all duration-300 text-xs font-medium"
          >
            <ChevronRight className="w-3.5 h-3.5" />
            Voltar para o site
          </Link>
          <p className="text-xs text-gray-500 text-center">© 2025 OLÍBANO</p>
        </div>
      </aside>
    </>
  )
}
