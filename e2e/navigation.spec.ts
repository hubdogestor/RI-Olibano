import { test, expect } from "@playwright/test"

test.describe("Navigation Flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/ri")
  })

  test("should navigate between sections using sidebar", async ({ page }) => {
    await page.waitForLoadState("networkidle")

    await page.click('text="Tamanho de Mercado"')
    await expect(page.locator('h2:has-text("Tamanho de Mercado")')).toBeVisible()

    await page.click('text="Time Fundador"')
    await expect(page.locator('h2:has-text("Time")')).toBeVisible()
  })

  test("should navigate using keyboard arrows", async ({ page }) => {
    await page.waitForLoadState("networkidle")
    await page.keyboard.press("ArrowRight")
    await page.waitForTimeout(500)
    await expect(page.locator('text="O Problema"')).toBeVisible()
  })

  test("should show progress indicator", async ({ page }) => {
    await page.waitForLoadState("networkidle")
    const progressIndicator = page.locator('text=/\\d+ \\/ \\d+/')
    await expect(progressIndicator).toBeVisible()
  })
})

test.describe("Responsive Design", () => {
  test("should render correctly on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("http://localhost:3000/ri")
    await page.waitForLoadState("networkidle")

    const main = page.locator("main")
    await expect(main).toBeVisible()
  })

  test("should have minimum tap target sizes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("http://localhost:3000/ri")
    await page.waitForLoadState("networkidle")

    const buttons = page.locator("button")
    const count = await buttons.count()

    for (let i = 0; i < Math.min(count, 5); i++) {
      const button = buttons.nth(i)
      if (await button.isVisible()) {
        const box = await button.boundingBox()
        if (box) {
          expect(box.width).toBeGreaterThanOrEqual(44)
          expect(box.height).toBeGreaterThanOrEqual(44)
        }
      }
    }
  })
})
