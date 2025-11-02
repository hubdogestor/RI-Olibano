import { Card } from "@/components/ui/card"

interface StreamData {
  name: string
  description: string
  margin: string
}

interface ModelData {
  title: string
  revenueStreams: StreamData[]
  unitEconomics: {
    LTV: string
    CAC: string
    ratio: string
  }
}

export default function BusinessModel({ businessModel }: { businessModel: ModelData }) {
  return (
    <section id="model" className="px-4 md:px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{businessModel.title}</h2>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Fontes de Receita</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {businessModel.revenueStreams.map((stream, idx) => (
              <Card key={idx} className="p-6 border border-border rounded-2xl">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-foreground">{stream.name}</h4>
                  <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {stream.margin}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{stream.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-border">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">LTV</p>
            <p className="text-3xl font-bold text-primary">{businessModel.unitEconomics.LTV}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">CAC</p>
            <p className="text-3xl font-bold text-accent">{businessModel.unitEconomics.CAC}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">LTV:CAC Ratio</p>
            <p className="text-3xl font-bold text-secondary">{businessModel.unitEconomics.ratio}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
