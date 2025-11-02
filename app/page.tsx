"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight, Leaf, TrendingUp, Users, Heart } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold bg-gradient-to-r from-[#C88715] to-[#AC4E15] bg-clip-text text-transparent">
            OLÍBANO
          </div>
          <Link
            href="/ri"
            className="px-6 py-2 rounded-lg bg-[#C88715] text-white font-medium hover:bg-[#AC4E15] transition-all duration-300 hover:shadow-lg"
          >
            Investor Relations
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#C88715]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-[#69683B]/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-7xl font-serif font-bold mb-6 text-[#354037] leading-tight">
              Bem-vindo ao Mundo do{" "}
              <span className="bg-gradient-to-r from-[#C88715] via-[#AC4E15] to-[#69683B] bg-clip-text text-transparent">
                Bem-estar Luxuoso
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              OLÍBANO é mais que um spa. É uma experiência transformadora onde a tradição milenar do bem-estar se
              encontra com a inovação moderna em um espaço de luxo incomparável.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-video bg-gradient-to-br from-[#C88715] to-[#69683B] relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M20 80 Q 50 20, 80 80%22 fill=%22none%22 stroke=%22white%22 strokeWidth=%220.5%22/%3E%3C/svg%3E')]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <Leaf className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex gap-6 justify-center flex-wrap"
          >
            <Link
              href="/ri"
              className="px-8 py-4 rounded-xl bg-[#C88715] text-white font-semibold flex items-center gap-2 hover:bg-[#AC4E15] transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Explorar Oportunidade de Investimento
              <ChevronRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 rounded-xl border-2 border-[#C88715] text-[#C88715] font-semibold hover:bg-[#C88715]/5 transition-all duration-300">
              Conheça Nossa História
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#354037] to-[#69683B] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { value: "15+", label: "Anos de Excelência" },
              { value: "50K+", label: "Clientes Satisfeitos" },
              { value: "200+", label: "Profissionais" },
              { value: "99.8%", label: "Satisfação" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center">
                <div className="text-5xl font-serif font-bold mb-2">{stat.value}</div>
                <div className="text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-center mb-16 text-[#354037]"
          >
            Por Que OLÍBANO?
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Heart,
                title: "Experiência Premium",
                description: "Cada detalhe é pensado para sua máxima satisfação e bem-estar.",
              },
              {
                icon: TrendingUp,
                title: "Crescimento Acelerado",
                description: "Dobramos nossos clientes nos últimos 2 anos com modelo escalável.",
              },
              {
                icon: Users,
                title: "Comunidade Exclusiva",
                description: "Acesso a uma rede de profissionais e clientes de alto padrão.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 rounded-2xl border border-gray-100 hover:border-[#C88715] hover:shadow-xl transition-all duration-300 hover:bg-[#C88715]/2"
              >
                <feature.icon className="w-12 h-12 text-[#C88715] mb-4" />
                <h3 className="text-xl font-semibold text-[#354037] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#C88715] to-[#AC4E15] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">Pronto para Investir no Futuro do Bem-Estar?</h2>
            <p className="text-lg mb-8 opacity-90">Descubra como fazer parte da revolução do bem-estar luxuoso.</p>
            <Link
              href="/ri"
              className="inline-block px-8 py-4 rounded-xl bg-white text-[#C88715] font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-xl"
            >
              Ver Deck de Investimento
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#354037] text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-white font-serif font-bold text-xl mb-4">OLÍBANO</div>
              <p className="text-sm">Bem-estar de luxo para mentes e corpos excepcionais.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Imprensa
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Termos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2025 OLÍBANO. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
