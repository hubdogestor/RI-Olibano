import { TrendingUp } from "lucide-react"

interface Milestone {
  period: string
  title: string
  desc: string
}

interface Metric {
  name: string
  value: string
  growth: string
}

interface TractionData {
  title: string
  milestones: Milestone[]
  metrics: Metric[]
}

export default function Traction({ traction }: { traction: TractionData }) {
  return (
    <section id="traction" className="px-4 md:px-6 py-20 bg-secondary/5">
      <div className="max-w-5xl mx-auto space-y-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{traction.title}</h2>
          <p className="text-lg text-muted-foreground">Marcos e métricas demonstrando tração de mercado</p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-foreground">Linha do Tempo</h3>
          <div className="space-y-4">
            {traction.milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {idx + 1}
                  </div>
                  {idx < traction.milestones.length - 1 && <div className="w-1 h-16 bg-border mt-2"></div>}
                </div>
                <div className="pb-8">
                  <p className="text-xs font-medium text-primary uppercase tracking-wide">{milestone.period}</p>
                  <h4 className="text-lg font-semibold text-foreground mt-1">{milestone.title}</h4>
                  <p className="text-muted-foreground text-sm mt-2">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-foreground">Métricas Principais</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {traction.metrics.map((metric, idx) => (
              <div key={idx} className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{metric.name}</p>
                    <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                  </div>
                  <TrendingUp size={20} className="text-primary" />
                </div>
                <p className="text-xs text-primary font-medium bg-primary/10 inline-block px-2 py-1 rounded">
                  {metric.growth}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
