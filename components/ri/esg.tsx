import { Leaf, Users, Award } from "lucide-react"

interface ESGData {
  title: string
  initiatives: Array<{ title: string; desc: string }>
  kpis: Array<{ metric: string; target: string }>
}

export default function ESG({ esg }: { esg: ESGData }) {
  const icons = [Leaf, Users, Award]

  return (
    <section className="px-4 md:px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{esg.title}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Initiatives */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Iniciativas</h3>
            <div className="space-y-4">
              {esg.initiatives.map((init, idx) => {
                const Icon = icons[idx % icons.length]
                return (
                  <div key={idx} className="flex gap-4">
                    <Icon size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">{init.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{init.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* KPIs */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Indicadores de Impacto</h3>
            <div className="space-y-4">
              {esg.kpis.map((kpi, idx) => (
                <div key={idx} className="bg-card rounded-2xl p-4 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">{kpi.metric}</p>
                  <p className="text-xl font-semibold text-primary">{kpi.target}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
