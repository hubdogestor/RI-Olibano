"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail, Phone, Smartphone } from "lucide-react"

interface ContactSectionProps {
  contact: {
    headline: string
    description: string
    channels: Array<{
      label: string
      value: string
    }>
  }
}

const iconMap: Record<string, ReactNode> = {
  "E-mail RI": <Mail className="h-5 w-5" />,
  "E-mail": <Mail className="h-5 w-5" />,
  "WhatsApp Concierge": <Smartphone className="h-5 w-5" />,
  "WhatsApp": <Smartphone className="h-5 w-5" />,
  Instagram: <Phone className="h-5 w-5" />,
}

function getChannelLink(label: string, value: string): string {
  if (label.toLowerCase().includes("email") || label.toLowerCase().includes("e-mail")) {
    return `mailto:${value}`
  }
  if (label.toLowerCase().includes("whatsapp")) {
    // Remove formatting and create WhatsApp link
    const cleanNumber = value.replace(/\D/g, "")
    return `https://wa.me/${cleanNumber}`
  }
  if (label.toLowerCase().includes("instagram")) {
    const username = value.replace("@", "")
    return `https://instagram.com/${username}`
  }
  return "#"
}

export default function ContactSection({ contact }: ContactSectionProps) {
  return (
    <div className="flex h-full flex-col justify-center overflow-y-auto bg-gradient-to-br from-[#f5f3f0] via-white to-[#c88715]/10 p-12">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-[#354037]">{contact.headline}</h2>
          <p className="mx-auto max-w-2xl text-lg text-[#4a463f]">{contact.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {contact.channels.map((channel) => {
            const link = getChannelLink(channel.label, channel.value)
            const isExternal = link.startsWith("http")
            
            return (
              <a
                key={channel.label}
                href={link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="flex h-full flex-col items-center gap-3 rounded-3xl border border-[#d9cbbb]/60 bg-white/85 p-6 text-center shadow-lg shadow-[#ac4e15]/10 transition-all hover:scale-105 hover:shadow-xl hover:border-[#ac4e15]/30 cursor-pointer group"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#ac4e15]/12 text-[#ac4e15] group-hover:bg-[#ac4e15] group-hover:text-white transition-all">
                  {iconMap[channel.label] ?? <ArrowUpRight className="h-5 w-5" />}
                </div>
                <span className="text-xs uppercase tracking-[0.32em] text-[#ac4e15]/80 group-hover:text-[#ac4e15]">{channel.label}</span>
                <p className="break-words text-sm font-semibold text-[#354037] group-hover:text-[#ac4e15]">{channel.value}</p>
              </a>
            )
          })}
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
          <a
            href="mailto:ri@olibanovip.com.br"
            className="inline-flex items-center gap-2 rounded-full border border-[#ac4e15]/30 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#ac4e15] transition-colors hover:bg-[#ac4e15]/10"
          >
            <Mail className="h-4 w-4" />
            Falar com RI
          </a>
          <a
            href="https://olibano.agende.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ac4e15] to-[#C88715] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-[#ac4e15]/30 transition-transform hover:scale-[1.02]"
          >
            <ArrowUpRight className="h-4 w-4" />
            Agendar imersão
          </a>
        </div>
      </motion.div>
    </div>
  )
}
