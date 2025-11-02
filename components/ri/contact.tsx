import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactData {
  email: string
  phone: string
  address: string
  cta: string
}

export default function Contact({ contact }: { contact: ContactData }) {
  return (
    <section
      id="contact"
      className="px-4 md:px-6 py-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl mx-4 md:mx-6"
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Vamos Conversar?</h2>
          <p className="text-lg text-muted-foreground">
            Entre em contato com nossa equipe de Relações com Investidores
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 py-8">
          <a
            href={`mailto:${contact.email}`}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
          >
            <Mail size={24} className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm text-muted-foreground">{contact.email}</span>
          </a>

          <a
            href={`tel:${contact.phone.replace(/\D/g, "")}`}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
          >
            <Phone size={24} className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm text-muted-foreground">{contact.phone}</span>
          </a>

          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 border border-border">
            <MapPin size={24} className="text-primary" />
            <span className="text-sm text-muted-foreground">Porto Alegre-RS</span>
          </div>
        </div>

        <a href={`mailto:${contact.email}?subject=Quero%20conversar%20sobre%20investimento%20no%20OLÍBANO`}>
          <Button size="lg" className="gap-2 group">
            {contact.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </section>
  )
}
