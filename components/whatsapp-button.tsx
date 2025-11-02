"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

const PHONE_NUMBER = "5551993622621"
const MESSAGE =
  "Olá! Gostaria de saber mais sobre as oportunidades de investimento da OLÍBANO."

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#1EA854] text-white rounded-full shadow-lg shadow-green-500/40 hover:shadow-green-500/60 transition-shadow duration-300 group"
    >
      <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
        <MessageCircle className="w-6 h-6" />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute right-full mr-3 px-3 py-2 bg-[#354037] text-white text-xs rounded-lg whitespace-nowrap pointer-events-none"
      >
        Fale conosco no WhatsApp
        <div className="absolute left-full ml-1 border-4 border-transparent border-l-[#354037]" />
      </motion.div>
    </motion.a>
  )
}
