import { Check } from "lucide-react"

interface HighlightsProps {
  highlights: string[]
}

export default function Highlights({ highlights }: HighlightsProps) {
  return (
    <section id="solution" className="px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          A Proposta de Valor do OLÍBANO
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check size={16} className="text-primary" />
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
