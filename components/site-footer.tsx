"use client"

import Link from "next/link"
import { Instagram, Facebook, Linkedin, Music, Phone, Globe } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/olibanovip", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/olibano.vip/", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/olibanovip/", label: "LinkedIn" },
  { icon: Music, href: "https://www.tiktok.com/@olibanovip", label: "TikTok" },
  { icon: Phone, href: "http://wa.me/5551993622621", label: "WhatsApp" },
  { icon: Globe, href: "https://olibanovip.com.br/", label: "Site Institucional" },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#d9cbbb]/60 bg-[#faf7f1]/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[#4a463f]">© 2025 Olíbano. Todos os direitos reservados.</p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#ac4e15]/20 text-[#ac4e15] transition-colors hover:bg-[#ac4e15]/10 hover:border-[#ac4e15]/40"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              )
            })}
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <Link
            href="https://www.loja.olibanovip.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#ac4e15] hover:underline"
          >
            Visite nossa loja online
          </Link>
        </div>
      </div>
    </footer>
  )
}
