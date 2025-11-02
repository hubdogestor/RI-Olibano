import { TrendingUp } from "lucide-react"

interface MarketData {
  tam: string
  tamDescription: string
  sam: string
  samDescription: string
  som: string
  somDescription: string
  methodology: string
}

export default function Market({ market }: { market: MarketData }) {
  return (
    <section id="market" className="px-4 md:px-6 bg-secondary/5 py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Mercado em Expansão</h2>
          <p className="text-lg text-muted-foreground">Tamanho e oportunidade de mercado (TAM / SAM / SOM)</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "TAM", value: market.tam, desc: market.tamDescription },
            { label: "SAM", value: market.sam, desc: market.samDescription },
            { label: "SOM", value: market.som, desc: market.somDescription },
          ].map((item, idx) => (
            <div key={idx} className="bg-card rounded-2xl p-8 border border-border">
              <div className="text-sm font-medium text-secondary mb-2">{item.label}</div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">{item.value}</div>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-8 border border-border">
          <div className="flex gap-3 mb-4">
            <TrendingUp size={20} className="text-primary flex-shrink-0" />
            <h3 className="font-semibold text-foreground">Metodologia</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{market.methodology}</p>
        </div>
      </div>
    </section>
  )
}
