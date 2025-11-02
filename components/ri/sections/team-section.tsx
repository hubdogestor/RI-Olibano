"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"

interface TeamSectionProps {
  team: Array<{
    name: string
    role: string
    bio: string
  }>
}

export default function TeamSection({ team }: TeamSectionProps) {
  return (
    <div className="h-full overflow-y-auto flex flex-col justify-center p-12 bg-gradient-to-br from-[#f5f3f0] via-white to-[#69683B]/5">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold mb-2 bg-gradient-to-r from-[#354037] to-[#69683B] bg-clip-text text-transparent"
          >
            Equipe Fundadora
          </motion.h2>
          <p className="text-[#354037]/70 mt-3">
            Especialistas complementares com visão compartilhada para transformar bem-estar premium
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-[#69683B] to-[#C88715] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.15 * i }}
              className="group"
            >
              <motion.div
                whileHover={{ translateY: -12 }}
                className="relative bg-white border border-[#354037]/10 rounded-2xl p-8 overflow-hidden hover:border-[#C88715]/50 hover:shadow-2xl hover:shadow-[#C88715]/10 transition-all duration-300"
              >
                {/* Background accent */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#C88715]/10 to-transparent rounded-full blur-3xl" />

                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#C88715] to-[#AC4E15] mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-[#C88715]/30"
                >
                  {member.name.charAt(0)}
                </motion.div>

                <h3 className="text-xl font-serif font-bold text-[#354037] mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-[#C88715] mb-4 inline-block px-2 py-1 bg-[#C88715]/10 rounded-lg">
                  {member.role}
                </p>
                <p className="text-sm text-[#354037]/70 leading-relaxed group-hover:text-[#354037] transition-colors mb-6">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="flex gap-3 pt-4 border-t border-[#C88715]/20">
                  <button className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg bg-[#C88715]/5 text-[#C88715] hover:bg-[#C88715]/15 transition-colors text-sm">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg bg-[#C88715]/5 text-[#C88715] hover:bg-[#C88715]/15 transition-colors text-sm">
                    <Mail className="w-4 h-4" />
                    Email
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
