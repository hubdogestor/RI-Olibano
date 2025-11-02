"use client"

import { useState } from "react"
import Sidebar from "@/components/ri/sidebar"
import PitchContainer from "@/components/ri/pitch-container"
import WhatsAppButton from "@/components/whatsapp-button"
import riData from "@/data/ri.json"
import {
  Target,
  Star,
  TrendingUp,
  Briefcase,
  Rocket,
  Map,
  Users,
  Leaf,
  Newspaper,
  HelpCircle,
  MessageSquare,
} from "lucide-react"

const sections = [
  { id: "hero", title: "OLÍBANO", icon: Target },
  { id: "highlights", title: "Destaques", icon: Star },
  { id: "market", title: "Mercado", icon: TrendingUp },
  { id: "business", title: "Modelo de Negócio", icon: Briefcase },
  { id: "traction", title: "Tração", icon: Rocket },
  { id: "roadmap", title: "Roadmap", icon: Map },
  { id: "team", title: "Time", icon: Users },
  { id: "esg", title: "ESG & Impacto", icon: Leaf },
  { id: "press", title: "Imprensa", icon: Newspaper },
  { id: "faq", title: "Perguntas", icon: HelpCircle },
  { id: "contact", title: "Contato", icon: MessageSquare },
]

export default function PitchDeckPage() {
  const [activeSection, setActiveSection] = useState("hero")

  return (
    <div className="flex min-h-screen lg:h-screen bg-white overflow-hidden relative">
      <Sidebar sections={sections} activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 w-full pt-16 lg:pt-0 lg:pl-72">
        <PitchContainer activeSection={activeSection} data={riData} sections={sections} />
      </div>
      <WhatsAppButton />
    </div>
  )
}
