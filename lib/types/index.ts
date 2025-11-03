// ============================================================================
// ROADMAP TYPES
// ============================================================================

export interface RoadmapItem {
  text: string
  status?: "completed" | "planned"
}

export interface RoadmapPhase {
  quarter: string
  items: Array<string | RoadmapItem>
}

// ============================================================================
// CUSTOMER TYPES
// ============================================================================

export interface CustomerSegment {
  name: string
  profile: string
  context: string
  pains: string[]
  desires: string[]
  channels: string[]
}

export interface Customer {
  title: string
  segments: CustomerSegment[]
  painsSummary: string[]
  hiddenFear: string
}

// ============================================================================
// MARKET TYPES
// ============================================================================

export interface Market {
  title: string
  tam: string
  tamRevenue: string
  sam: string
  samRevenue: string
  som: string
  somRevenue: string
  insights: string[]
}

// ============================================================================
// BUSINESS TYPES
// ============================================================================

export interface RevenueStream {
  name: string
  description: string
}

export interface UnitEconomics {
  LTV: string
  CAC: string
  ratio: string
}

export interface BusinessModel {
  title: string
  revenueStreams: RevenueStream[]
  unitEconomics: UnitEconomics
}

// ============================================================================
// GO-TO-MARKET TYPES
// ============================================================================

export interface Channel {
  title: string
  description: string
  focus: string
}

export interface Automation {
  title: string
  description: string
}

export interface KPICategory {
  category: string
  metrics: string[]
}

export interface GoToMarket {
  headline: string
  narrative: string
  channels: Channel[]
  automations: Automation[]
  kpis: KPICategory[]
}

// ============================================================================
// SECTION PROPS TYPES
// ============================================================================

export interface AnimatedSectionProps {
  className?: string
}

export interface CardProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

// ============================================================================
// COMPONENT PROPS TYPES
// ============================================================================

export interface SectionProps<T> {
  data: T
}

export interface ListItemProps {
  icon?: React.ReactNode
  title: string
  description?: string
  children?: React.ReactNode
}
