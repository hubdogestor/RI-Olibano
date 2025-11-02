import { Mail, MapPin, Phone, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20 pt-16 pb-8 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="font-semibold text-lg">OLÍBANO</span>
            </div>
            <p className="text-sm text-muted-foreground">Práticas integrativas complementares em saúde</p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#solution" className="text-muted-foreground hover:text-foreground transition-colors">
                  Solução
                </a>
              </li>
              <li>
                <a href="#market" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mercado
                </a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
                  Time
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/docs/pitch.pdf" className="text-muted-foreground hover:text-foreground transition-colors">
                  Baixar Pitch
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  One-Pager
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Brand Book
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">Contato RI</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                <a
                  href="mailto:ri@olibanovip.com.br"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ri@olibanovip.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                <a href="tel:+5551993622621" className="text-muted-foreground hover:text-foreground transition-colors">
                  +55 (51) 99362-2621
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span className="text-muted-foreground">Porto Alegre-RS</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 OLÍBANO. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a
              href="https://instagram.com/olibanovip"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
