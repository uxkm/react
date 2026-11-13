import { test, expect } from '@playwright/test'

const pages = [
  ['/pub', '퍼블리시 목록'],
  ['/b2b', '메인'],
  ['/pub/guide', '소개'],
  ['/pub/guide/button', 'Button'],
  ['/pub/demo/ajv', 'Ajv']
]

for (const [pathname, title] of pages) {
  test(`빈 메타데이터 div 없이 서버·클라이언트 렌더링: ${pathname}`, async ({ page }) => {
    const errors = []
    page.on('pageerror', (error) => errors.push(error.message))
    const response = await page.goto(pathname)
    expect(response?.status()).toBe(200)
    const html = await response.text()
    expect(html).not.toMatch(/<div hidden="">(?:<!--[\s\S]*?-->|\s)*<\/div>/)
    await expect(page.locator('.app-layout_has-header')).toBeVisible()
    await expect(page.locator('body > div[hidden]:not([id])')).toHaveCount(0)
    await expect(page).toHaveTitle(new RegExp(title, 'i'))
    await expect(page.locator('head > title')).toHaveCount(1)
    await expect(page.locator('head > meta[name="description"]')).toHaveCount(1)
    expect(errors).toEqual([])
  })
}

test('페이지 왕복 이동에도 메타데이터와 hydration 유지', async ({ page }) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  await page.goto('/pub/guide/button')
  await expect(page.locator('.app-layout_has-header')).toBeVisible()
  // This value survives client navigation, so a full reload cannot mask a mismatch.
  await page.evaluate(() => { window.__metadataNavigationCheck = true })
  for (let i = 0; i < 2; i++) {
    for (const [pathname, title] of [['/pub/guide/input', 'Input'], ['/pub/guide/button', 'Button']]) {
      const link = page.locator(`a[href="${pathname}"]`).first()
      const group = page.locator('.comp-guide_group').filter({ has: link })
      const toggle = group.locator('button[aria-expanded]').first()
      if (await toggle.getAttribute('aria-expanded') === 'false') await toggle.click()
      await link.click()
      await expect(page).toHaveURL(new RegExp(pathname + '$'))
      await expect(page).toHaveTitle(new RegExp(title))
      await expect(page.locator('body > div[hidden]:not([id])')).toHaveCount(0)
      // Existing client title hooks may overlap Next's title during navigation.
      // Verify the displayed title and retained description without rewriting head nodes.
      await expect(page.locator('head > meta[name="description"]').first()).toHaveAttribute('content', /.+/)
      expect(await page.evaluate(() => window.__metadataNavigationCheck)).toBe(true)
    }
  }
  expect(errors).toEqual([])
})
