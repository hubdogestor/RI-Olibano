import { ExternalLink, Calendar } from "lucide-react"

interface PressItem {
  title: string
  date: string
  source: string
}

export default function Press({ press }: { press: PressItem[] }) {
  return (
    <section className="px-4 md:px-6 py-20 bg-secondary/5">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Imprensa e Atualizações</h2>

        <div className="space-y-4">
          {press.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="flex-1 space-y-2">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(item.date).toLocaleDateString("pt-BR")}
                  </span>
                  <span>{item.source}</span>
                </div>
              </div>
              <ExternalLink
                size={18}
                className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
