"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, Home, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Experiências", href: "/#experiencia" },
  { label: "Protocolos", href: "/#protocolos" },
  { label: "Equipe", href: "/#equipe" },
  { label: "Contato", href: "/#contato" },
]

const headerVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0 },
}

export default function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActiveLink = (href: string) => {
    if (href === "/ri") {
      return pathname === "/ri"
    }
    if (href.startsWith("/#")) {
      return pathname === "/" && typeof window !== "undefined" && window.location.hash === href.replace("/", "")
    }
    return pathname === href
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[#d9cbbb]/60 bg-[#faf7f1]/80 backdrop-blur-lg"
    >
      <div className="mx-auto flex h-[var(--header-height)] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative block h-10 w-28 sm:h-12 sm:w-32">
            <Image
              src="/brand/logotipo-primary.png"
              alt="OLÍBANO"
              fill
              className="object-contain"
              priority
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-[0.22em] text-[#4a463f] transition-colors hover:text-[#ac4e15]",
                isActiveLink(link.href) && "text-[#ac4e15]",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/ri"
            className={cn(
              "hidden md:inline-flex items-center gap-2 rounded-full border border-[#ac4e15]/30 bg-gradient-to-r from-[#ac4e15] via-[#d59d40] to-[#69683b]",
              "px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#ac4e15]/25 transition-transform hover:scale-[1.02]",
              pathname === "/ri" && "ring-2 ring-offset-2 ring-[#d59d40]/40 ring-offset-[#faf7f1]",
            )}
          >
            Investidores
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#ac4e15]/30 text-[#ac4e15] transition-colors hover:bg-[#ac4e15]/10 md:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#111]/60 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-y-0 right-0 flex w-4/5 max-w-sm flex-col bg-[#f8f1e8] px-6 pb-10 pt-6 shadow-2xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="relative block h-10 w-24">
                  <Image src="/brand/monogram.png" alt="OLÍBANO monograma" fill className="object-contain" />
                </span>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ac4e15]/30 text-[#ac4e15] hover:bg-[#ac4e15]/10"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-semibold uppercase tracking-[0.18em] text-[#4a463f]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="/ri"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ac4e15] via-[#d59d40] to-[#69683b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#ac4e15]/25"
              >
                Área do Investidor
                <Home className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
