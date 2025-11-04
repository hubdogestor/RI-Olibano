"use client"

import { useState } from "react"
import Sidebar from "@/components/ri/sidebar"
import PitchContainer from "@/components/ri/pitch-container"
import WhatsAppButton from "@/components/whatsapp-button"
import riData from "@/data/ri.json"
import { cn } from "@/lib/utils"
import { StructuredData } from "./structured-data"
import {
  FileText,
  AlertCircle,
  Lightbulb,
  Target,
  Users,
  TrendingUp,
  Briefcase,
  Rocket,
  Shield,
  Swords,
  Megaphone,
  Map,
  UsersRound,
  PiggyBank,
  Leaf,
  HelpCircle,
  MessageSquare,
} from "lucide-react"

const sections = [
  { id: "hero", title: "Sumário Executivo", icon: FileText },
  { id: "problem", title: "O Problema", icon: AlertCircle },
  { id: "solution", title: "A Solução", icon: Lightbulb },
  { id: "purpose", title: "Missão & Valores", icon: Target },
  { id: "customer", title: "Para quem serve o Olíbano", icon: Users },
  { id: "market", title: "Tamanho de Mercado", icon: TrendingUp },
  { id: "business", title: "Modelo de Negócio", icon: Briefcase },
  { id: "traction", title: "Tração e Validação", icon: Rocket },
  { id: "swot", title: "Análise SWOT", icon: Shield },
  { id: "competition", title: "Concorrência", icon: Swords },
  { id: "goToMarket", title: "Go-to-market", icon: Megaphone },
  { id: "roadmap", title: "Roadmap", icon: Map },
  { id: "team", title: "Time Fundador", icon: UsersRound },
  { id: "investment", title: "Investimento & Exit", icon: PiggyBank },
  { id: "esg", title: "ESG & Impacto", icon: Leaf },
  { id: "faq", title: "FAQ", icon: HelpCircle },
  { id: "contact", title: "Contato", icon: MessageSquare },
] as const

type SectionId = (typeof sections)[number]["id"]

export default function PitchDeckPage() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero")
  const [isImmersive, setIsImmersive] = useState(false)

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId as SectionId)
  }

  return (
    <>
      <StructuredData />
      <div
        className={cn(
          "relative flex min-h-[calc(100vh-var(--header-height))] flex-col bg-transparent transition-colors lg:flex-row",
          isImmersive && "group/immersive",
        )}
      >
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          isImmersive={isImmersive}
        />

        <div className={cn("flex-1 transition-[margin] duration-500", isImmersive ? "lg:ml-0" : "lg:ml-72")}>
          <PitchContainer
            activeSection={activeSection}
            data={riData}
            sections={sections}
            onSectionChange={(id) => setActiveSection(id as SectionId)}
            isImmersive={isImmersive}
            onToggleImmersive={() => setIsImmersive((prev) => !prev)}
          />
        </div>

        <WhatsAppButton />
      </div>
    </>
  )
}
