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
  { id: "hero", title: "O Olíbano", icon: Target },
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
    <div className="relative flex min-h-[calc(100vh-var(--header-height))] flex-col bg-transparent lg:flex-row">
      <Sidebar sections={sections} activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 lg:ml-72">
        <PitchContainer
          activeSection={activeSection}
          data={riData}
          sections={sections}
          onSectionChange={setActiveSection}
        />
      </div>
      <WhatsAppButton />
    </div>
  )
}
