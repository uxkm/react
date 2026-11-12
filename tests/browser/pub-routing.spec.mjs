import { test, expect } from '@playwright/test'

test('Header와 TopBanner는 컴포넌트 밖 위젯 메뉴에만 표시하고 접힌 메뉴에서도 진입한다', async ({ page }) => {
  await page.goto('/pub/guide/header')
  const nav = page.locator('.comp-guide__nav')
  const widgets = nav.locator('[data-guide-section="widgets"]')
  await expect(widgets.locator('a[href="/pub/guide/header"]')).toHaveAttribute('aria-current', 'page')
  await expect(widgets.locator('a[href="/pub/guide/top-banner"]')).toBeVisible()
  await expect(nav.locator('[data-guide-section="components"] a[href="/pub/guide/header"], [data-guide-section="components"] a[href="/pub/guide/top-banner"]')).toHaveCount(0)
  await nav.getByRole('button', { name: '메뉴 접기', exact: true }).click()
  await expect(nav.getByRole('button', { name: '위젯', exact: true })).toHaveClass(/is-active/)
  await nav.getByRole('button', { name: '위젯', exact: true }).click()
  await widgets.locator('a[href="/pub/guide/top-banner"]').click()
  await expect(page).toHaveURL(/\/pub\/guide\/top-banner$/)
  await expect(widgets.locator('a[href="/pub/guide/top-banner"]')).toHaveAttribute('aria-current', 'page')
})

test('PUB 가이드 경로에서 메뉴 활성 상태와 링크 유지', async ({ page }) => {
  await page.goto('/pub/guide/button')
  const active = page.locator('.comp-guide__nav a[href="/pub/guide/button"]')
  await expect(active).toHaveAttribute('aria-current', 'page')
  await expect(active).toBeVisible()
  await expect(page.locator('a[href^="/guide"], a[href^="/demo"]')).toHaveCount(0)
  await page.locator('.comp-guide__nav a[href="/pub/guide"]').click()
  await expect(page).toHaveURL(/\/pub\/guide$/)
  await expect(page).toHaveTitle(/소개/)
})

test('PUB 데모 상세와 목록 사이 이동 및 메뉴 활성 상태 유지', async ({ page }) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/pub/demo/ajv')
  await expect(page.locator('.comp-guide__nav a[href="/pub/demo/ajv"]')).toHaveAttribute('aria-current', 'page')
  await expect(page.locator('.app-layout--has-header')).toBeVisible()
  await page.locator('.app-header a[href="/pub/demo/libs"]').first().click()
  await expect(page).toHaveURL(/\/pub\/demo\/libs$/)
  await page.locator('a.lib-demo-card[href="/pub/demo/ajv"]').click()
  await expect(page).toHaveURL(/\/pub\/demo\/ajv$/)
  await expect(page).toHaveTitle(/ajv/i)
  await expect(page.locator('a[href^="/guide"], a[href^="/demo"]')).toHaveCount(0)
  expect(errors).toEqual([])
})

test('독립 guide·demo 경로는 정적 라우트에서 제외', async ({ request }) => {
  for (const pathname of ['/guide', '/guide/button', '/demo/ajv']) {
    const response = await request.get(pathname)
    expect(response.status(), pathname).toBe(404)
  }
})
