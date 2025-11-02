import { Calendar } from "lucide-react"

interface RoadmapData {
  quarter: string
  items: string[]
}

export default function Roadmap({ roadmap }: { roadmap: RoadmapData[] }) {
  return (
    <section className="px-4 md:px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Roadmap Estratégico</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {roadmap.map((phase, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-3 mb-6">
                <Calendar size={20} className="text-primary flex-shrink-0 mt-1" />
                <h3 className="text-lg font-semibold text-foreground">{phase.quarter}</h3>
              </div>
              <ul className="space-y-3">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
