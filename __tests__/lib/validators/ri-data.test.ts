import { validateRIData } from "@/lib/validators"
import riData from "@/data/ri.json"

describe("RI Data Validation", () => {
  it("should validate complete ri.json structure", () => {
    expect(() => validateRIData(riData)).not.toThrow()
  })

  it("should have required metadata fields", () => {
    const validated = validateRIData(riData)
    expect(validated.metadata).toBeDefined()
    expect(validated.metadata.title).toBe("Olíbano - Investor Relations")
    expect(validated.metadata.version).toBe("1.0")
  })

  it("should have valid executive summary", () => {
    const validated = validateRIData(riData)
    expect(validated.executiveSummary).toBeDefined()
    expect(validated.executiveSummary.stats).toHaveLength(4)
    expect(validated.executiveSummary.ctas).toHaveLength(2)
  })

  it("should have valid market data", () => {
    const validated = validateRIData(riData)
    expect(validated.market).toBeDefined()
    expect(validated.market.tam).toBeDefined()
    expect(validated.market.sam).toBeDefined()
    expect(validated.market.som).toBeDefined()
  })
})
