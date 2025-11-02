"use client"

import { useState } from "react"
import Sidebar from "@/components/ri/sidebar"
import PitchContainer from "@/components/ri/pitch-container"
import WhatsAppButton from "@/components/whatsapp-button"
import riData from "@/data/ri.json"
import { cn } from "@/lib/utils"
import {
  Target,
  Sparkles,
  TrendingUp,
  Briefcase,
  Rocket,
  Map,
  Megaphone,
  Users,
  PiggyBank,
  Leaf,
  HelpCircle,
  MessageSquare,
} from "lucide-react"

const sections = [
  { id: "hero", title: "O Olíbano", icon: Target },
  { id: "highlights", title: "Experiência Assinada", icon: Sparkles },
  { id: "market", title: "Mercado & Clientes", icon: TrendingUp },
  { id: "business", title: "Modelo de Negócio", icon: Briefcase },
  { id: "traction", title: "Tração", icon: Rocket },
  { id: "roadmap", title: "Roadmap", icon: Map },
  { id: "goToMarket", title: "Go-to-market", icon: Megaphone },
  { id: "team", title: "Time", icon: Users },
  { id: "investment", title: "Investimento & Exit", icon: PiggyBank },
  { id: "esg", title: "ESG & Impacto", icon: Leaf },
  { id: "faq", title: "FAQ", icon: HelpCircle },
  { id: "contact", title: "Contato", icon: MessageSquare },
] as const

export default function PitchDeckPage() {
  const [activeSection, setActiveSection] = useState<typeof sections[number]["id"]>("hero")
  const [isImmersive, setIsImmersive] = useState(false)

  return (
    <div
      className={cn(
        "relative flex min-h-[calc(100vh-var(--header-height))] flex-col bg-transparent transition-colors lg:flex-row",
        isImmersive && "group/immersive",
      )}
    >
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isImmersive={isImmersive}
      />

      <div className={cn("flex-1 transition-[margin] duration-500", isImmersive ? "lg:ml-0" : "lg:ml-72")}>
        <PitchContainer
          activeSection={activeSection}
          data={riData}
          sections={sections}
          onSectionChange={setActiveSection}
          isImmersive={isImmersive}
          onToggleImmersive={() => setIsImmersive((prev) => !prev)}
        />
      </div>

      <WhatsAppButton />
    </div>
  )
}
