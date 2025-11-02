"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

interface HeroData {
  title: string
  subtitle: string
  description: string
  ctas: Array<{ label: string; href: string; variant: string }>
  stats: Array<{ label: string; value: string; unit: string }>
}

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section className="relative pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Main Content */}
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <span className="text-sm text-secondary font-medium">Oportunidade de Investimento</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">{data.title}</h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">{data.subtitle}</p>

          <p className="text-lg text-muted-foreground/80 max-w-2xl leading-relaxed">{data.description}</p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <a href={data.ctas[0].href}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 group w-full sm:w-auto">
              <Download size={18} />
              {data.ctas[0].label}
            </Button>
          </a>
          <a href={data.ctas[1].href}>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 group w-full sm:w-auto border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              {data.ctas[1].label}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border">
          {data.stats.map((stat, idx) => (
            <div key={idx} className="text-center" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
                {stat.unit}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -z-10 blur-3xl"></div>
    </section>
  )
}
