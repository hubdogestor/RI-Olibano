"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Globe, Instagram, Linkedin, Mail } from "lucide-react"

type ContactKind = "email" | "linkedin" | "instagram" | "website"

type ContactLink = {
  label: string
  href: string
  type: ContactKind
}

interface TeamSectionProps {
  team: Array<{
    name: string
    role: string
    bio: string
    image?: string
    email?: string
    links?: Array<{ label: string; href: string; type: string }>
  }>
}

const iconMap: Record<ContactKind, ReactNode> = {
  email: <Mail className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
  instagram: <Instagram className="h-4 w-4" />,
  website: <Globe className="h-4 w-4" />,
}

export default function TeamSection({ team }: TeamSectionProps) {
  return (
    <div className="flex h-full flex-col justify-center overflow-y-auto bg-gradient-to-br from-[#f5f3f0] via-white to-[#69683B]/5 p-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-6xl">
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-[#354037] to-[#69683B] bg-clip-text text-5xl font-serif font-bold text-transparent"
          >
            Equipe Fundadora
          </motion.h2>
          <p className="mt-3 max-w-3xl text-[#354037]/70">
            Especialistas complementares com visão compartilhada para transformar o bem-estar premium em uma operação
            escalável, humana e desejada.
          </p>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#69683B] to-[#C88715]" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {team.map((member, index) => {
            const socialLinks = (member.links ?? []).map((link) => {
              const allowed: ContactKind[] = ["email", "linkedin", "instagram", "website"]
              const type = allowed.includes(link.type as ContactKind) ? (link.type as ContactKind) : "website"
              return { ...link, type }
            })

            return (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 * index }}
                className="group relative overflow-hidden rounded-3xl border border-[#d9cbbb]/60 bg-white/85 text-center shadow-lg shadow-[#ac4e15]/10 backdrop-blur"
              >
                <div className="absolute -left-24 -top-24 h-40 w-40 rounded-full bg-gradient-to-br from-[#ac4e15]/12 to-transparent blur-3xl" />
                <div className="relative flex flex-col items-center gap-6 p-8">
                  <div className="relative h-28 w-28 overflow-hidden rounded-3xl border border-white/50 shadow-lg shadow-[#ac4e15]/30">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#ac4e15] to-[#C88715] text-3xl font-serif text-white">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-xl font-serif font-semibold text-[#354037]">{member.name}</h3>
                    <p className="inline-flex rounded-full bg-[#ac4e15]/10 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#ac4e15]">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-[#4a463f]/80">{member.bio}</p>

                  <div className="grid gap-3 border-t border-[#d9cbbb]/60 pt-4">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="mx-auto flex w-full max-w-[15rem] items-center justify-center gap-2 rounded-full border border-[#ac4e15]/30 px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#ac4e15] transition-colors hover:bg-[#ac4e15]/10"
                      >
                        <Mail className="h-4 w-4" />
                        <span className="max-w-[9.5rem] truncate">{member.email}</span>
                      </a>
                    )}
                    <div className="flex flex-wrap justify-center gap-2">
                      {socialLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-w-[6.5rem] items-center justify-center gap-2 rounded-full bg-[#ac4e15]/8 px-3 py-2 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-[#ac4e15] transition-colors hover:bg-[#ac4e15]/15"
                        >
                          {iconMap[link.type]}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
