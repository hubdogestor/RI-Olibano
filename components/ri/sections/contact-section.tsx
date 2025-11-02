"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"

interface ContactSectionProps {
  contact: {
    email: string
    phone: string
    address: string
    cta: string
  }
}

export default function ContactSection({ contact }: ContactSectionProps) {
  return (
    <div className="h-full overflow-y-auto flex flex-col justify-center p-12 bg-gradient-to-br from-[#f5f3f0] via-white to-[#C88715]/5">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl mx-auto w-full"
      >
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="text-5xl font-serif font-bold mb-3 bg-gradient-to-r from-[#354037] to-[#C88715] bg-clip-text text-transparent">
            Vamos Conversar
          </h2>
          <p className="text-[#354037]/70 mt-2 max-w-2xl mx-auto">
            Entendo seu interesse em OLÍBANO. Estamos abertos para uma conversa estratégica sobre como juntos podemos
            revolucionar o mercado de bem-estar premium.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-[#354037] to-[#C88715] rounded-full mt-4 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
            { icon: Phone, label: "Telefone", value: contact.phone, href: `tel:${contact.phone}` },
            { icon: MapPin, label: "Endereço", value: contact.address, href: "#" },
          ].map((detail, i) => (
            <motion.a
              key={i}
              href={detail.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ translateY: -4 }}
              className="group"
            >
              <div className="bg-white border border-[#C88715]/20 rounded-2xl p-6 hover:border-[#C88715]/50 hover:shadow-lg hover:shadow-[#C88715]/10 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#C88715]/20 to-[#AC4E15]/10 mb-3 group-hover:scale-110 transition-transform">
                    <detail.icon className="w-6 h-6 text-[#C88715]" />
                  </div>
                  <p className="text-xs text-[#354037]/60 font-medium">{detail.label}</p>
                  <p className="text-sm font-serif font-bold text-[#354037] mt-2 group-hover:text-[#C88715] transition-colors break-words">
                    {detail.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-3"
        >
          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 bg-gradient-to-r from-[#C88715] to-[#AC4E15] text-white font-serif font-bold rounded-2xl hover:shadow-lg hover:shadow-[#C88715]/40 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            {contact.cta}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="w-full py-4 px-6 bg-white border-2 border-[#C88715] text-[#C88715] font-serif font-bold rounded-2xl hover:bg-[#C88715]/5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Enviar Email
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}
