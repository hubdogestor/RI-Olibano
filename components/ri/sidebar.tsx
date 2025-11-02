"use client"

import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Home, Menu, ChevronRight, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface SidebarProps {
  sections: Array<{ id: string; title: string; icon: any }>
  activeSection: string
  onSectionChange: (sectionId: string) => void
}

export default function Sidebar({ sections, activeSection, onSectionChange }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const activeIndex = sections.findIndex((s) => s.id === activeSection)

  return (
    <>
      {/* Fixed Top Navigation Bar - Mobile */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#354037] to-[#2a3430] border-b border-[#C88715]/20 flex items-center justify-between px-4 z-50">
        {/* Hamburger Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-lg bg-[#C88715] text-white hover:bg-[#AC4E15] transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>

        {/* Logo on Mobile */}
        <div className="text-lg font-serif font-bold bg-gradient-to-r from-[#C88715] to-[#AC4E15] bg-clip-text text-transparent">
          OLÍBANO
        </div>

        {/* Home Button on Mobile */}
        <motion.button
          onClick={() => {
            onSectionChange("hero")
            setIsExpanded(false)
          }}
          className="p-2 rounded-lg hover:bg-[#C88715]/20 text-[#C88715] transition-colors"
          whileTap={{ scale: 0.95 }}
          title="Voltar para Home"
        >
          <Home className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Overlay for mobile */}
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

      {/* Mobile Sidebar - Full height below top bar */}
      <AnimatePresence>
        {isExpanded && (
          <motion.aside
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-gradient-to-b from-[#354037] to-[#2a3430] border-r border-[#C88715]/20 flex flex-col z-40 overflow-y-auto"
          >
            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-[#C88715]/20">
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <p className="text-xs text-gray-500 mt-1">Investor Relations</p>
                <div className="h-1 w-10 bg-gradient-to-r from-[#C88715] to-[#AC4E15] rounded-full mt-2" />
              </motion.div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-4 space-y-0.5 px-3">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  onClick={() => {
                    onSectionChange(section.id)
                    setIsExpanded(false)
                  }}
                  className={cn(
                    "w-full text-left px-3.5 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-3",
                    activeSection === section.id
                      ? "bg-gradient-to-r from-[#C88715] to-[#AC4E15] text-white shadow-lg shadow-[#C88715]/30"
                      : "text-gray-400 hover:text-[#C88715] hover:bg-[#C88715]/10",
                  )}
                >
                  {section.icon && <section.icon className="w-4 h-4 flex-shrink-0" />}
                  <span className="text-xs flex-1">{section.title}</span>
                </motion.button>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-3 border-t border-[#C88715]/20 bg-[#2a3430]/50 space-y-3">
              <Link
                href="/"
                onClick={() => setIsExpanded(false)}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#C88715]/10 text-[#C88715] hover:bg-[#C88715]/20 transition-all duration-300 text-xs font-medium"
              >
                <ChevronRight className="w-3.5 h-3.5" />
                Voltar Home
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -320 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
        className="hidden lg:flex w-72 bg-gradient-to-b from-[#354037] to-[#2a3430] border-r border-[#C88715]/20 flex-col overflow-hidden fixed left-0 top-0 h-screen z-40"
      >
        {/* Home Button - Always Visible */}
        <div className="p-4 border-b border-[#C88715]/20 bg-gradient-to-br from-[#C88715]/10 to-transparent">
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => onSectionChange("hero")}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-300",
              activeSection === "hero"
                ? "bg-gradient-to-r from-[#C88715] to-[#AC4E15] text-white shadow-lg shadow-[#C88715]/30"
                : "text-gray-400 hover:text-[#C88715] hover:bg-[#C88715]/10",
            )}
          >
            <Home className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">Home</span>
          </motion.button>
        </div>

        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-[#C88715]/20">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="text-2xl font-serif font-bold bg-gradient-to-r from-[#C88715] to-[#AC4E15] bg-clip-text text-transparent">
              OLÍBANO
            </div>
            <p className="text-xs text-gray-500 mt-1">Investor Relations</p>
            <div className="h-1 w-10 bg-gradient-to-r from-[#C88715] to-[#AC4E15] rounded-full mt-2" />
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 space-y-0.5 px-3">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
              onClick={() => onSectionChange(section.id)}
              className={cn(
                "w-full text-left px-3.5 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-3 relative group",
                activeSection === section.id
                  ? "bg-gradient-to-r from-[#C88715] to-[#AC4E15] text-white shadow-lg shadow-[#C88715]/30"
                  : "text-gray-400 hover:text-[#C88715] hover:bg-[#C88715]/10",
              )}
            >
              {section.icon && <section.icon className="w-4 h-4 flex-shrink-0" />}
              <span className="text-xs flex-1">{section.title}</span>
              {activeSection === section.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-1.5 h-1.5 rounded-full bg-white"
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Progress Bar */}
        <div className="px-4 py-3 border-t border-[#C88715]/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500 font-medium">Progresso</span>
            <span className="text-xs text-[#C88715] font-semibold">
              {activeIndex + 1}/{sections.length}
            </span>
          </div>
          <div className="w-full h-1 bg-[#C88715]/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#C88715] to-[#AC4E15] rounded-full"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-[#C88715]/20 bg-[#2a3430]/50 space-y-3">
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#C88715]/10 text-[#C88715] hover:bg-[#C88715]/20 transition-all duration-300 text-xs font-medium group"
          >
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            Voltar Home
          </Link>
          <p className="text-xs text-gray-600 text-center">© 2025 OLÍBANO</p>
        </div>
      </motion.aside>
    </>
  )
}
