import { z } from "zod"

// ============================================================================
// ROADMAP SCHEMAS
// ============================================================================

const RoadmapItemSchema = z.object({
  text: z.string(),
  status: z.enum(["completed", "planned"]).optional(),
})

const RoadmapPhaseSchema = z.object({
  quarter: z.string(),
  items: z.array(z.union([z.string(), RoadmapItemSchema])),
})

// ============================================================================
// CUSTOMER SCHEMAS
// ============================================================================

const CustomerSegmentSchema = z.object({
  name: z.string(),
  profile: z.string(),
  context: z.string(),
  pains: z.array(z.string()),
  desires: z.array(z.string()),
  channels: z.array(z.string()),
})

const CustomerSchema = z.object({
  title: z.string(),
  segments: z.array(CustomerSegmentSchema),
  painsSummary: z.array(z.string()),
  hiddenFear: z.string(),
})

// ============================================================================
// MARKET SCHEMAS
// ============================================================================

const MarketSchema = z.object({
  title: z.string(),
  tam: z.string(),
  tamRevenue: z.string(),
  sam: z.string(),
  samRevenue: z.string(),
  som: z.string(),
  somRevenue: z.string(),
  insights: z.array(z.string()),
})

// ============================================================================
// BUSINESS SCHEMAS
// ============================================================================

const RevenueStreamSchema = z.object({
  name: z.string(),
  description: z.string(),
})

const UnitEconomicsSchema = z.object({
  LTV: z.string(),
  CAC: z.string(),
  ratio: z.string(),
})

const BusinessModelSchema = z.object({
  title: z.string(),
  revenueStreams: z.array(RevenueStreamSchema),
  unitEconomics: UnitEconomicsSchema,
})

// ============================================================================
// SWOT SCHEMAS
// ============================================================================

const SwotSchema = z.object({
  strengths: z.array(z.string()),
  weaknesses: z.array(z.string()),
  opportunities: z.array(z.string()),
  threats: z.array(z.string()),
})

// ============================================================================
// COMPETITION SCHEMAS
// ============================================================================

const CompetitorSchema = z.object({
  name: z.string(),
  focus: z.string(),
  gap: z.string(),
  experience: z.string(),
})

const CompetitionSchema = z.object({
  title: z.string(),
  categories: z.array(CompetitorSchema),
  conclusion: z.string(),
})

// ============================================================================
// GO-TO-MARKET SCHEMAS
// ============================================================================

const ChannelSchema = z.object({
  title: z.string(),
  description: z.string(),
  focus: z.string(),
})

const AutomationSchema = z.object({
  title: z.string(),
  description: z.string(),
})

const KPICategorySchema = z.object({
  category: z.string(),
  metrics: z.array(z.string()),
})

const GoToMarketSchema = z.object({
  headline: z.string(),
  narrative: z.string(),
  channels: z.array(ChannelSchema),
  automations: z.array(AutomationSchema),
  kpis: z.array(KPICategorySchema),
})

// ============================================================================
// EXECUTIVE SUMMARY SCHEMAS
// ============================================================================

const StatSchema = z.object({
  label: z.string(),
  value: z.string(),
})

const FocusAreaSchema = z.object({
  title: z.string(),
  description: z.string(),
})

const ExecutiveSummarySchema = z.object({
  title: z.string(),
  headline: z.string(),
  description: z.string(),
  stats: z.array(StatSchema),
  focusAreas: z.array(FocusAreaSchema),
})

// ============================================================================
// OTHER SECTIONS (Basic validation)
// ============================================================================

const ProblemSchema = z.object({
  title: z.string(),
  description: z.string(),
})

const SolutionSchema = z.object({
  title: z.string(),
  description: z.string(),
})

const PurposeSchema = z.object({
  title: z.string(),
  description: z.string(),
})

const TractionSchema = z.object({
  title: z.string(),
  metrics: z.array(z.object({
    name: z.string(),
    value: z.string(),
    growth: z.string(),
  })),
})

const TeamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  image: z.string(),
  email: z.string(),
  links: z.array(z.object({
    label: z.string(),
    href: z.string(),
    type: z.string(),
  })),
})

const InvestmentSchema = z.object({
  title: z.string(),
  details: z.string(),
})

const ImpactSchema = z.object({
  title: z.string(),
  description: z.string(),
})

const FAQSchema = z.object({
  title: z.string(),
  items: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })),
})

const ContactSchema = z.object({
  title: z.string(),
  description: z.string(),
  details: z.array(z.object({
    label: z.string(),
    value: z.string(),
  })),
})

const MetadataSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  lastUpdated: z.string(),
  version: z.string(),
  author: z.string(),
  totalSections: z.number(),
})

// ============================================================================
// MAIN RI DATA SCHEMA
// ============================================================================

export const RIDataSchema = z.object({
  metadata: MetadataSchema.optional(),
  executiveSummary: ExecutiveSummarySchema,
  problem: ProblemSchema,
  solution: SolutionSchema,
  purpose: PurposeSchema,
  customer: CustomerSchema,
  market: MarketSchema,
  businessModel: BusinessModelSchema,
  traction: TractionSchema,
  swot: SwotSchema,
  competition: CompetitionSchema,
  goToMarket: GoToMarketSchema,
  roadmap: z.array(RoadmapPhaseSchema),
  team: z.array(TeamMemberSchema),
  investment: InvestmentSchema,
  impact: ImpactSchema,
  faq: FAQSchema,
  contact: ContactSchema,
})

export type RIData = z.infer<typeof RIDataSchema>

// ============================================================================
// VALIDATION FUNCTION
// ============================================================================

/**
 * Valida dados de RI e retorna estrutura tipada ou lança erro descritivo
 */
export function validateRIData(data: unknown): RIData {
  try {
    return RIDataSchema.parse(data)
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join("\n")
      throw new Error(`Erro na validação dos dados da RI:\n${errorMessages}`)
    }
    throw error
  }
}

/**
 * Valida dados de RI de forma segura (não lança erro, retorna resultado)
 */
export function validateRIDataSafe(data: unknown) {
  return RIDataSchema.safeParse(data)
}
