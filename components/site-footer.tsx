"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Instagram, Facebook, Linkedin, Music, Phone, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/olibanovip", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/olibano.vip/", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/olibanovip/", label: "LinkedIn" },
  { icon: Music, href: "https://www.tiktok.com/@olibanovip", label: "TikTok" },
  { icon: Phone, href: "http://wa.me/5551993622621", label: "WhatsApp" },
  { icon: Globe, href: "https://olibanovip.com.br/", label: "Site Institucional" },
]

export default function SiteFooter() {
  const pathname = usePathname()
  const isRIPage = pathname?.startsWith("/ri")

  return (
    <footer className={cn(
      "border-t border-[#d9cbbb]/60 bg-[#faf7f1]/80 backdrop-blur-lg transition-[margin] duration-500",
      isRIPage && "lg:ml-72"
    )}>
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-center gap-3 px-4">
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#ac4e15]/20 text-[#ac4e15] transition-colors hover:bg-[#ac4e15]/10 hover:border-[#ac4e15]/40"
              aria-label={social.label}
            >
              <Icon className="h-3.5 w-3.5" />
            </Link>
          )
        })}
        <span className="mx-1 text-[#d9cbbb]">|</span>
        <Link
          href="https://www.loja.olibanovip.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#ac4e15] hover:underline"
        >
          Loja
        </Link>
        <span className="text-[10px] text-[#4a463f]/60">© 2025 Olíbano</span>
      </div>
    </footer>
  )
}
