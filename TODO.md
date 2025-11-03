# Plano de Melhorias - Olíbano RI Presentation

**Última atualização:** 03/11/2025
**Status geral:** 🟡 Em progresso (QUICK WINS + LOTE 1 + LOTE 2 = ✅ COMPLETOS)

---

## 📋 Índice de Lotes

1. [✅ LOTE 1 - Fundações Técnicas](#lote-1---fundações-técnicas) (HIGH PRIORITY) **COMPLETO**
2. [✅ LOTE 2 - Conteúdo & Posicionamento](#lote-2---conteúdo--posicionamento) (HIGH PRIORITY) **COMPLETO**
3. [🟡 LOTE 3 - Testes & Qualidade](#lote-3---testes--qualidade) (MEDIUM PRIORITY)
4. [🟢 LOTE 4 - Experiência do Usuário](#lote-4---experiência-do-usuário) (MEDIUM PRIORITY)
5. [🟢 LOTE 5 - Otimizações de Performance](#lote-5---otimizações-de-performance) (LOW PRIORITY)
6. [✅ QUICK WINS - Melhorias Rápidas](#quick-wins---melhorias-rápidas) **COMPLETO**

---

## LOTE 1 - Fundações Técnicas

**Prioridade:** 🔴 HIGH
**Tempo estimado:** 8-10 horas
**Objetivo:** Estabelecer base técnica sólida com validação de dados e TypeScript mais rigoroso
**Status:** ✅ **COMPLETO** (3 commits realizados)

### 1.1 Implementar Validação de Dados com Zod

**Descrição:** Criar schemas Zod para validar a estrutura de `ri.json` na inicialização da aplicação

**Arquivos a criar/modificar:**
- [ ] Criar `lib/validators/ri-data.ts` - Schemas Zod para toda estrutura de dados
- [ ] Criar `lib/validators/index.ts` - Exports dos validators
- [ ] Modificar `lib/index.ts` ou `app.tsx` - Adicionar função de validação na inicialização

**Checklist de implementação:**
```
- [ ] Instalar Zod: npm install zod
- [ ] Criar schema para executiveSummary
- [ ] Criar schema para customer (com segments, painsSummary, hiddenFear)
- [ ] Criar schema para market (com insights)
- [ ] Criar schema para businessModel (com revenueStreams, unitEconomics)
- [ ] Criar schema para SWOT (strengths, weaknesses, opportunities, threats)
- [ ] Criar schema para competition
- [ ] Criar schema para goToMarket (channels, automations, kpis)
- [ ] Criar schema para roadmap
- [ ] Criar schema para team
- [ ] Criar schema para contact
- [ ] Criar função validateRIData() que faz parse + throw erros descritivos
- [ ] Importar e chamar em layout.tsx ou no carregamento inicial
- [ ] Adicionar error boundary para fallbacks graciosos
- [ ] Testar com dados inválidos propositais
```

**Exemplo de código esperado:**
```typescript
// lib/validators/ri-data.ts
import { z } from 'zod'

const RoadmapItemSchema = z.object({
  text: z.string(),
  status: z.enum(['completed', 'planned']).optional()
})

export const RIDataSchema = z.object({
  executiveSummary: z.object({
    title: z.string(),
    headline: z.string(),
    // ... mais campos
  }),
  market: z.object({
    tam: z.string(),
    tamRevenue: z.string(),
    insights: z.array(z.string())
  })
  // ... resto dos schemas
})

export function validateRIData(data: unknown) {
  return RIDataSchema.parse(data)
}
```

---

### 1.2 Aumentar Rigor do TypeScript

**Descrição:** Ativar configurações mais rigorosas no `tsconfig.json`

**Arquivos a modificar:**
- [ ] `tsconfig.json`

**Checklist de implementação:**
```
- [ ] Adicionar "strict": true
- [ ] Adicionar "strictNullChecks": true
- [ ] Adicionar "noImplicitAny": true
- [ ] Adicionar "noUnusedLocals": true
- [ ] Adicionar "noUnusedParameters": true
- [ ] Adicionar "noImplicitReturns": true
- [ ] Executar build e corrigir erros TypeScript que aparecerem
- [ ] Testar que todos os components ainda compilam sem erros
```

---

### 1.3 Extrair Tipos Compartilhados

**Descrição:** Centralizar todas as interfaces TypeScript em arquivos de tipos

**Arquivos a criar/modificar:**
- [ ] Criar `lib/types/index.ts` - Tipos principais
- [ ] Criar `lib/types/animations.ts` - Tipos para animações Framer Motion
- [ ] Criar `lib/constants/index.ts` - Constantes (cores, timings)

**Checklist de implementação:**
```
- [ ] Extrair RoadmapItem, RoadmapSectionProps, etc para types/index.ts
- [ ] Extrair CustomerSectionProps, GoToMarketSectionProps para types/index.ts
- [ ] Extrair MarketSectionProps, BusinessSectionProps para types/index.ts
- [ ] Criar constantes de cores: COLOR_PRIMARY, COLOR_SECONDARY, etc
- [ ] Criar constantes de timing de animação: ANIMATION_DURATION_SHORT, MEDIUM, LONG
- [ ] Criar tipos AnimatedSectionProps, CardProps, etc reutilizáveis
- [ ] Usar "as const" para literal types (quarter names, status values)
- [ ] Importar tipos em todos os components
- [ ] Verificar que TypeScript está satisfeito (sem any implícitos)
```

---

## LOTE 2 - Conteúdo & Posicionamento

**Prioridade:** 🔴 HIGH
**Tempo estimado:** 6-8 horas
**Objetivo:** Otimizar conteúdo e posicionamento para investor mindset
**Status:** ✅ **COMPLETO** (3 commits realizados, 5 seções otimizadas)

### 2.1 Otimizações Implementadas no LOTE 2

**✅ COMPLETO - Seções Otimizadas:**

1. **Problem Section** - Quantificação e clareza
   - ✅ Adicionar pesquisa validada (82% insatisfeitos)
   - ✅ TAM Porto Alegre específico (19.5k A/B, 5.8k com interesse)
   - ✅ Dados sólidos com fontes (ABIHPEC, Euromonitor)

2. **Solution Section** - Descrição editável e detalhar
   - ✅ Campo `description` adicionado ao JSON
   - ✅ Especificar: EEG validation, 5 canais sensoriais, 432Hz
   - ✅ Atualizar componente para renderizar descrição do JSON

3. **Market Section** - TAM/SAM/SOM corrigidos
   - ✅ TAM: 2.5M adultos (R$10-12B) com fontes
   - ✅ SAM: 58k pessoas (R$232M)
   - ✅ SOM: 2.3k clientes (R$9.2M) com clusters

4. **Business Model** - Detalhe completo
   - ✅ Revenue streams com %, margem, targets
   - ✅ Operational metrics: capacity, break-even
   - ✅ CAC mix: organic 40%, referral 30%, performance 30%

5. **Team Section** - Expandir credibilidade
   - ✅ Betusa: 12+ anos ABRAPA, clínica própria
   - ✅ Alexandre: 10+ anos tech/growth, VP Growth edtech
   - ✅ Leonardo: 8+ anos product, PM healthtech

6. **Purpose Section** - Reescrever para dados
   - ✅ Missão: Fokus em NPS 92, retenção 78%, EEG
   - ✅ Visão: Timeline Porto Alegre → Brasil → M&A 2028-2030
   - ✅ Valores: 5 pilares tangíveis (validação, qualidade, IP, escalabilidade, transparência)

7. **Investment Section** - Justificação completa
   - ✅ Valuation: 40x revenue (R$75.6k annual) vs 5-8x healthtech
   - ✅ Allocation: R$350k marketing, R$250k equipe, etc com targets
   - ✅ Milestones: R$30k/mês, 8 SKUs, APP iOS/Android
   - ✅ Exits: 8-10x (M&A), 10-12x (franquia), 12-15x (PE)

8. **FAQ** - 8 perguntas investor-focused
   - ✅ Justificativa de valuation com cálculos
   - ✅ KPIs mensais com dashboard e auditoria
   - ✅ Burn rate mensal e timeline break-even
   - ✅ Cenários de exit com timelines
   - ✅ Risks & mitigation (concentração, equity, growth)

9. **Go-to-Market** - Motores de crescimento
   - ✅ Priorização: 40% organic + 35% partnerships + 25% performance
   - ✅ CAC: R$450 → R$250 em 6 meses
   - ✅ Automations: 5 fluxos CRM, WhatsApp loops, analytics
   - ✅ KPIs: 20+ métricas (CAC payback, retenção 30/60/90, ROAS, etc)

**Dados esperados em ri.json:**
```json
{
  "nextSteps": {
    "title": "Próximos Passos",
    "headline": "Vamos construir juntos o futuro do bem-estar premium",
    "urgency": "Decisão de investimento necessária até Q1 2026",
    "actions": [
      {
        "title": "Chamada Executiva",
        "description": "30 minutos com CEO para deep dive em métricas e projeções",
        "cta": "Agendar chamada",
        "link": "https://calendly.com/..."
      },
      {
        "title": "Visita ao Espaço",
        "description": "Experiência imersiva das terapias e ambiente Olíbano",
        "cta": "Agendar visita",
        "link": "https://calendly.com/..."
      },
      {
        "title": "Due Diligence",
        "description": "Documentação completa: financeiras, legais, operacionais",
        "cta": "Solicitar documentação",
        "link": "mailto:..."
      }
    ],
    "contact": {
      "email": "investimento@olibanovip.com.br",
      "phone": "+55 51 99362-2621"
    }
  }
}
```

**Checklist de implementação:**
```
- [ ] Adicionar dados nextSteps em ri.json
- [ ] Criar component NextStepsSection com layout visual
- [ ] Renderizar 3 cards com ações (chamada, visita, due diligence)
- [ ] Adicionar badges de urgência ("Decisão até Q1 2026")
- [ ] Implementar CTAs com links reais (Calendly, email)
- [ ] Adicionar informações de contato em destaque
- [ ] Aplicar animações Framer Motion consistentes
- [ ] Testar responsividade em mobile
- [ ] Verificar que todos os links funcionam
```

---


## LOTE 3 - Testes & Qualidade

**Prioridade:** 🟡 MEDIUM
**Tempo estimado:** 12-15 horas
**Objetivo:** Implementar testes automatizados e auditoria de qualidade

### 3.1 Configurar Jest + React Testing Library

**Descrição:** Adicionar framework de testes com configuração inicial e testes para lógica de negócio

**Arquivos a criar/modificar:**
- [ ] Criar `jest.config.js`
- [ ] Criar `jest.setup.js`
- [ ] Criar `__tests__/` directory structure
- [ ] Criar `__tests__/lib/validators/ri-data.test.ts`
- [ ] Criar `__tests__/components/ri/sections/market-section.test.tsx`

**Checklist de implementação:**
```
- [ ] npm install --save-dev jest @testing-library/react @testing-library/jest-dom ts-jest
- [ ] Criar jest.config.js com preset TypeScript
- [ ] Configurar Jest para Next.js
- [ ] Criar jest.setup.js com imports globais
- [ ] Escrever testes para validateRIData() (casos válidos/inválidos)
- [ ] Escrever testes para RoadmapSection (renderização, status icons)
- [ ] Escrever testes para MarketSection (renderização de metrics)
- [ ] Mock Framer Motion para testes determinísticos
- [ ] Adicionar script "test" e "test:watch" em package.json
- [ ] Executar testes e atingir 80%+ cobertura de business logic
- [ ] Adicionar teste de integração para validação + renderização
```

---

### 3.2 Configurar Testes E2E com Playwright

**Descrição:** Implementar testes end-to-end para fluxos críticos de navegação e interação

**Arquivos a criar/modificar:**
- [ ] Criar `playwright.config.ts`
- [ ] Criar `e2e/` directory com testes
- [ ] Criar `e2e/navigation.spec.ts` - Testes de navegação entre seções
- [ ] Criar `e2e/animations.spec.ts` - Testes de timing de animações
- [ ] Criar `e2e/responsiveness.spec.ts` - Testes de responsive design

**Checklist de implementação:**
```
- [ ] npm install --save-dev @playwright/test
- [ ] Criar playwright.config.ts
- [ ] Configurar browsers (chromium, firefox, webkit)
- [ ] Escrever teste: navegação entre seções funciona
- [ ] Escrever teste: scroll horizontal em roadmap funciona
- [ ] Escrever teste: cards de mercado renderizam com dados corretos
- [ ] Escrever teste: animações ejecutam sem erro
- [ ] Escrever teste: mobile layout (375px) funciona
- [ ] Escrever teste: tablet layout (768px) funciona
- [ ] Adicionar script "e2e" e "e2e:ui" em package.json
- [ ] Rodar testes em CI/CD pipeline
```

---

### 3.3 Implementar Visual Regression Testing

**Descrição:** Adicionar screenshots automatizados para detectar mudanças visuais não intencionais

**Arquivos a criar/modificar:**
- [ ] Criar configuração Chromatic ou Percy (escolher um)
- [ ] Criar `chromatic.json` ou variáveis de ambiente

**Checklist de implementação:**
```
- [ ] Escolher Chromatic ou Percy (recomendado: Chromatic + Storybook)
- [ ] npm install --save-dev chromatic
- [ ] Criar account no serviço escolhido
- [ ] Configurar CI/CD para rodar ao fazer push
- [ ] Fazer baseline screenshot de todas as seções
- [ ] Configurar PR comments automáticos
- [ ] Testar fluxo: mudança de cor → detecção automática
```

---

## LOTE 4 - Experiência do Usuário

**Prioridade:** 🟡 MEDIUM
**Tempo estimado:** 8-10 horas
**Objetivo:** Melhorar acessibilidade, navegação e responsividade mobile

### 4.1 Melhorias de Acessibilidade (WCAG 2.1 AA)

**Descrição:** Implementar ARIA labels, semantic HTML e melhorias de contraste

**Arquivos a modificar (todos os components de seção):**
- [ ] `components/ri/sections/hero-section.tsx`
- [ ] `components/ri/sections/market-section.tsx`
- [ ] `components/ri/sections/roadmap-section.tsx`
- [ ] `components/ri/sections/customer-section.tsx`
- [ ] `components/ri/sections/business-section.tsx`
- [ ] `components/ri/sections/go-to-market-section.tsx`
- [ ] `components/ri/sections/competition-section.tsx`

**Checklist de implementação:**
```
- [ ] Executar axe DevTools scan em cada seção
- [ ] Executar WAVE tool para contraste de cores
- [ ] Adicionar <section role="region" aria-label="..."> onde apropriado
- [ ] Adicionar aria-label a ícones decorativos (aria-hidden="true" ou aria-label)
- [ ] Adicionar aria-describedby a cards complexos
- [ ] Adicionar role="presentation" a elementos puramente decorativos
- [ ] Adicionar skip navigation link no topo (acessível via TAB)
- [ ] Adicionar focus rings visíveis com ratio 7:1 (AAA standard)
- [ ] Testar com NVDA/JAWS screen readers
- [ ] Revisar cores: #4a463f em fundos claros (garantir 4.5:1)
- [ ] Adicionar @media (prefers-reduced-motion) para usuários sensíveis
- [ ] Atingir score 100 no Lighthouse Accessibility audit
```

---

### 4.2 Navegação por Teclado

**Descrição:** Adicionar navegação completa por teclado (setas, TAB, Enter)

**Arquivos a criar/modificar:**
- [ ] Criar `hooks/useKeyboardNavigation.ts` - Hook customizado
- [ ] Modificar `components/ri/pitch-container.tsx` - Integrar hook

**Checklist de implementação:**
```
- [ ] Criar hook useKeyboardNavigation() que detecta setas esquerda/direita
- [ ] Implementar scroll automático entre seções ao pressionar seta direita/esquerda
- [ ] Adicionar indicador visual (ex: "próxima seção: →" em rodapé)
- [ ] Garantir que todos elementos interativos são focusáveis (tabindex)
- [ ] Testar navegação apenas com teclado em toda apresentação
- [ ] Adicionar escape key para sair de modais (quando implementados)
```

---

### 4.3 Responsividade Mobile & Tablet

**Descrição:** Otimizar layout para dispositivos móveis (375px, 768px)

**Arquivos a revisar/modificar:**
- [ ] Todos os components de seção (adicionar breakpoints mobile)
- [ ] `components/ri/sections/market-section.tsx` - Stack cards em mobile
- [ ] `components/ri/sections/roadmap-section.tsx` - Horizontal scroll mobile-friendly
- [ ] `components/ri/sections/customer-section.tsx` - Grid responsivo

**Checklist de implementação:**
```
- [ ] Testar MarketSection em 375px (stack 3 cards verticalmente)
- [ ] Testar RoadmapSection em 375px (scroll horizontal funciona bem)
- [ ] Testar CustomerSection em 375px (grid 1 coluna)
- [ ] Testar GoToMarketSection em 375px (layout fluido)
- [ ] Reduzir animação duration em 50% em mobile (prefers-reduced-motion)
- [ ] Aumentar tap targets para 44x44px mínimo (Apple HIG)
- [ ] Testar em iPad (768px) - devem render em 2 colunas onde aplicável
- [ ] Verificar padding/margin em mobile (evitar overflow)
- [ ] Testar fonts em mobile (garantir legibilidade)
- [ ] Verificar images em mobile (otimizar tamanho)
```

---

## LOTE 5 - Otimizações de Performance

**Prioridade:** 🟢 LOW
**Tempo estimado:** 10-12 horas
**Objetivo:** Melhorar velocidade de carregamento, bundle size e eficiência de renderização

### 5.1 Implementar Code Splitting & Dynamic Imports

**Descrição:** Carregar componentes sob demanda ao invés de no bundle inicial

**Arquivos a criar/modificar:**
- [ ] Modificar `components/ri/pitch-container.tsx` - Usar dynamic() para sections
- [ ] Modificar `next.config.js` - Configurar webpack bundle analysis

**Checklist de implementação:**
```
- [ ] Converter cada section em dynamic import:
  const HeroSection = dynamic(() => import('./sections/hero-section'))
  const MarketSection = dynamic(() => import('./sections/market-section'), {
    loading: () => <div>Carregando...</div>,
    ssr: true
  })
  // ... resto das sections
- [ ] Adicionar @next/bundle-analyzer em next.config.js
- [ ] Rodar: npm run analyze
- [ ] Verificar que bundle size diminuiu (meta: < 200KB gzip)
- [ ] Testar que lazy-loaded sections funcionam corretamente
- [ ] Verificar que animações não quebram com lazy loading
```

---

### 5.2 Otimização de Imagens

**Descrição:** Implementar Next.js Image component com formatos modernos e responsive

**Arquivos a criar/modificar:**
- [ ] Modificar qualquer arquivo que use <img> para usar next/image
- [ ] Modificar `next.config.js` - Adicionar configurações de imagem

**Checklist de implementação:**
```
- [ ] Revisar todos os <img> tags (procurar em team section, testimonials)
- [ ] Converter para next/image com:
  - priority={true} para acima da dobra (hero)
  - placeholder="blur" para lazy-load
  - sizes para responsive images
- [ ] Adicionar em next.config.js:
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    quality: 85
  }
- [ ] Testar AVIF/WebP support (chrome devtools)
- [ ] Verificar que imagens carregam mais rápido (Lighthouse)
```

---

### 5.3 Extrair Variantes de Animação (DRY)

**Descrição:** Centralizar configurações de Framer Motion para evitar repetição e melhorar performance

**Arquivos a criar/modificar:**
- [ ] Criar `lib/animations/variants.ts` - Todas variantes
- [ ] Criar `lib/animations/index.ts` - Exports
- [ ] Modificar TODOS os components de seção para importar variantes

**Checklist de implementação:**
```
- [ ] Criar lib/animations/variants.ts com:
  export const fadeInVariants = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
  export const slideInLeftVariants = { initial: { opacity: 0, x: -12 }, animate: { opacity: 1, x: 0 } }
  export const staggerContainerVariants = { hidden: { opacity: 0 }, show: { staggerChildren: 0.1 } }
  export const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
  // ... mais variantes
- [ ] Revisar cada section e extrair variantes duplicadas
- [ ] Importar em hero-section.tsx e remover inline variants
- [ ] Importar em market-section.tsx e remover inline variants
- [ ] ... etc para TODOS components
- [ ] Verificar que animações funcionam identicamente
- [ ] Medir bundle size reduction (deve diminuir)
```

---

### 5.4 Cache de Animações & Memoização

**Descrição:** Prevenir re-criação de objetos de animação em cada render

**Arquivos a criar/modificar:**
- [ ] Modificar todos components que usam motion.div (useMemo)

**Checklist de implementação:**
```
- [ ] Em cada section component, usar useMemo para variantes:
  const containerVariants = useMemo(() => ({ ... }), [])
  const itemVariants = useMemo(() => ({ ... }), [])
- [ ] Usar React.memo para components que recebem props infrequentemente
- [ ] Verificar em React DevTools Profiler que renders desnecessários diminuíram
- [ ] Medir performance em dispositivos mobile (deve melhorar)
```

---

## LOTE 6 - Estrutura de Dados & Documentação

**Prioridade:** 🟡 MEDIUM
**Tempo estimado:** 4-6 horas
**Objetivo:** Melhorar mantenibilidade e documentação do projeto

### 6.1 Adicionar Glossário de Termos

**Descrição:** Criar documento interno com definições de termos usados na apresentação

**Arquivos a criar:**
- [ ] Criar `docs/GLOSSARIO.md` - Definições de TAM, SAM, SOM, CAC, LTV, etc

**Checklist de implementação:**
```
- [ ] Criar GLOSSARIO.md com:
  ## TAM (Total Addressable Market)
  Mercado total de pessoas que poderiam se beneficiar do produto

  ## SAM (Serviceable Addressable Market)
  Segmento do TAM que podemos realisticamente atingir

  ## SOM (Serviceable Obtainable Market)
  Meta conservadora que queremos atingir em 3-5 anos

  ## CAC (Customer Acquisition Cost)
  Custo para adquirir um cliente (R$ 450 no Olíbano)

  ## LTV (Customer Lifetime Value)
  Valor total que cliente gera ao longo do relacionamento (R$ 3.2k)

  ## NPS (Net Promoter Score)
  Métrica de satisfação e lealdade (92 no Olíbano)

  ## ARR/Ticket Médio
  Receita média por cliente (R$ 799)

  // ... mais termos
- [ ] Linkr documento em README.md
```

---

### 6.2 Criar README Técnico

**Descrição:** Documentar arquitetura, estrutura de diretórios e como contribuir

**Arquivos a criar:**
- [ ] Criar `docs/ARQUITETURA.md` - Overview técnico
- [ ] Criar `docs/ESTRUTURA.md` - Organização de diretórios

**Checklist de implementação:**
```
- [ ] Documentar estrutura de diretórios esperada (após Lote 1)
- [ ] Explicar que cada section é um component React independente
- [ ] Explicar flow de dados: ri.json → TypeScript → Components
- [ ] Documentar convenções de code (nomes, patterns, tipos)
- [ ] Documentar como adicionar nova seção
- [ ] Documentar processo de deploy
```

---

## QUICK WINS - Melhorias Rápidas

**Prioridade:** ⚡ IMPLEMENTAR AGORA
**Tempo estimado:** 2-3 horas
**Impacto:** Alto para minimal effort

### QW-1: Adicionar Indicador de Progresso

**Descrição:** Mostrar "Página X de Y" no rodapé/header

**Arquivos a modificar:**
- [ ] Criar component `components/ri/progress-indicator.tsx`
- [ ] Modificar `components/ri/pitch-container.tsx` - Adicionar indicador

**Implementação:**
```typescript
// components/ri/progress-indicator.tsx
export default function ProgressIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 text-sm text-[#ac4e15]/70">
      {current} / {total}
    </div>
  )
}

// components/ri/pitch-container.tsx
<ProgressIndicator current={currentSection + 1} total={sections.length} />
```

---

### QW-2: Adicionar Barra de Progresso Visual

**Descrição:** Barra horizontal no topo mostrando progresso da apresentação

**Arquivos a modificar:**
- [ ] Criar component `components/ri/progress-bar.tsx`
- [ ] Modificar `components/ri/pitch-container.tsx` - Integrar

**Implementação:**
```typescript
// components/ri/progress-bar.tsx
export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#AC4E15] to-[#C88715] transition-all duration-300"
      style={{ width: `${progress}%` }} />
  )
}
```

---

### QW-3: Adicionar Breadcrumb Navigation

**Descrição:** Mostrar caminho: "Mercado > TAM/SAM/SOM"

**Arquivos a criar/modificar:**
- [ ] Criar component `components/ri/breadcrumb.tsx`
- [ ] Modificar seções principais para incluir breadcrumb

**Implementação:**
```typescript
// components/ri/breadcrumb.tsx
export default function Breadcrumb({ items }: { items: string[] }) {
  return (
    <nav className="text-xs text-[#ac4e15]/60 mb-4">
      {items.map((item, i) => (
        <span key={i}>
          {item}
          {i < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  )
}
```

---

### QW-4: Adicionar Metadata em ri.json

**Descrição:** Adicionar informações da apresentação no JSON

**Arquivo a modificar:**
- [ ] Modificar `data/ri.json` - Adicionar section "metadata" no topo

**Implementação:**
```json
{
  "metadata": {
    "title": "Olíbano - Investor Relations",
    "subtitle": "Oportunidade no Mercado Premium de Bem-estar",
    "lastUpdated": "2025-11-03",
    "version": "1.0",
    "author": "Olíbano Team",
    "totalSections": 12
  },
  "executiveSummary": { ... }
}
```

---

### QW-5: Standardizar Card Heights

**Descrição:** Definir constant para altura padrão de cards

**Arquivo a criar/modificar:**
- [ ] Criar `lib/constants/layout.ts` - Constantes de layout
- [ ] Modificar market-section.tsx, customer-section.tsx, etc

**Implementação:**
```typescript
// lib/constants/layout.ts
export const CARD_HEIGHT = {
  SMALL: '300px',
  MEDIUM: '400px',
  LARGE: '500px'
}

// Em components:
const cardHeight = CARD_HEIGHT.MEDIUM
<div className="h-[400px]" style={{ height: cardHeight }}>
```

---

## 📊 Matriz de Priorização

| Lote | Prioridade | Horas | Impacto | Começar com |
|------|-----------|-------|--------|------------|
| 1 | 🔴 HIGH | 8-10 | Crucial | 1.1 → 1.2 → 1.3 |
| 2 | 🔴 HIGH | 6-8 | Muito Alto | 2.1 → 2.2 → 2.3 |
| 3 | 🟡 MEDIUM | 12-15 | Alto | 3.1 → 3.2 → 3.3 |
| 4 | 🟡 MEDIUM | 8-10 | Médio | 4.1 → 4.2 → 4.3 |
| 5 | 🟢 LOW | 10-12 | Médio | 5.1 → 5.2 → 5.3 |
| 6 | 🟡 MEDIUM | 4-6 | Documentação | Paralelo |
| QW | ⚡ AGORA | 2-3 | Alto/rápido | Qualquer um |

---

## 🎯 Recomendação de Sequência

### Semana 1 (Fundações)
1. QW-1, QW-2, QW-3, QW-4, QW-5 (2-3 horas) - Quick wins
2. LOTE 1: 1.1 + 1.2 + 1.3 (8-10 horas)
3. LOTE 2: 2.1 (2-3 horas)

### Semana 2 (Conteúdo)
1. LOTE 2: 2.2 + 2.3 (4-5 horas)
2. LOTE 4: 4.1 (acessibilidade) (3-4 horas)
3. LOTE 4: 4.2 (navegação teclado) (2-3 horas)

### Semana 3+ (Aprimorado)
1. LOTE 3: Testes (12-15 horas)
2. LOTE 4: 4.3 (responsividade mobile) (8-10 horas)
3. LOTE 5: Performance (10-12 horas)
4. LOTE 6: Documentação (4-6 horas)

---

## 📝 Como Usar Este TODO

1. **Escolha um lote** que quer implementar
2. **Trabalhe item por item** dentro do lote
3. **Marque como completo** cada item da checklist
4. **Após terminar item**, faça commit com mensagem clara
5. **Após terminar lote**, mande `git push` e atualize este documento

**Exemplo de commit:**
```bash
git commit -m "feat: implementar validação de dados com Zod (LOTE 1.1)

- Criar lib/validators/ri-data.ts com schemas Zod
- Validar estrutura completa de ri.json na inicialização
- Adicionar error boundary para fallbacks graciosos
- Testes inclusos para dados válidos e inválidos

Resolves: LOTE-1.1"
```

---

## ✅ Status de Progresso

- [x] QUICK WINS - Melhorias Rápidas ✅ COMPLETO
- [x] LOTE 1 - Fundações Técnicas ✅ COMPLETO
- [x] LOTE 2 - Conteúdo & Posicionamento ✅ COMPLETO
- [ ] LOTE 3 - Testes & Qualidade
- [ ] LOTE 4 - Experiência do Usuário
- [ ] LOTE 5 - Otimizações de Performance
- [ ] LOTE 6 - Estrutura & Documentação

---

**Última atualização:** 03/11/2025
**Próxima revisão:** Aguardando requisição de novo LOTE

