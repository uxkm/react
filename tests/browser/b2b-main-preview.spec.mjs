import { test, expect } from '@playwright/test'

test('메인 섹션 프리뷰는 선택한 영역만 표시하고 전체 메인으로 복귀한다', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 })
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  const sections = [
    ['hero', '#hero'],
    ['cards', '#card-grid'],
    ['insights', '#on'],
    ['cases', '#cases'],
    ['callouts', '#cta'],
    ['newsletter', '#newsletter']
  ]
  for (const [key, selector] of sections) {
    await page.goto(`/b2b/common/main-section?section=${key}`)
    const preview = page.locator('.main-section-preview')
    await expect(preview.locator(selector)).toBeVisible()
    await expect(page.locator('header.header, footer.footer')).toHaveCount(0)
    await expect(preview.locator('section')).toHaveCount(key === 'newsletter' ? 0 : 1)
    expect(await preview.locator('section').evaluateAll(nodes => nodes.map(node => getComputedStyle(node).marginTop))).toEqual(key === 'newsletter' ? [] : ['0px'])
    if (key === 'cases') {
      await expect.poll(() => preview.locator('.swiper').evaluate(node => node.swiper?.params.loop)).toBe(true)
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(1920)
  }
  await page.goto('/b2b/common/main-section?section=search')
  await expect(page.getByRole('status')).toHaveText('통합검색 위젯은 작업 예정입니다.')
  await expect(page.locator('.main-section-preview section')).toHaveCount(0)
  await page.goto('/b2b')
  await expect(page.locator('header.header')).toBeVisible()
  await expect(page.locator('footer.footer')).toBeVisible()
  await expect(page.locator('#hero, #card-grid, #on, #cases, #cta')).toHaveCount(5)
  expect(errors).toEqual([])
})
