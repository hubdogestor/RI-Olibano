import { Card } from "@/components/ui/card"

interface TeamMember {
  name: string
  role: string
  bio: string
}

export default function Governance({ team }: { team: TeamMember[] }) {
  return (
    <section id="team" className="px-4 md:px-6 py-20 bg-secondary/5">
      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Fundadores e Liderança</h2>
          <p className="text-lg text-muted-foreground">Equipe multidisciplinar com expertise complementar</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <Card
              key={idx}
              className="rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
