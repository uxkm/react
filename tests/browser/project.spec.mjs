import { test, expect } from '@playwright/test'
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const index = JSON.parse(fs.readFileSync(path.join(root, 'public/data/pub/b2b/index.json'), 'utf8'))
const leaves = (nodes) => nodes.flatMap((node) => node.depth3 ? leaves(node.depth3) : [node])
const rows = index.folders.flatMap((folder) => leaves(JSON.parse(fs.readFileSync(path.join(root, 'public/data/pub/b2b', folder.file), 'utf8')).depth2))
const internalPaths = [...new Set(rows.filter((row) => row.pageUrl?.startsWith('/b2b')).map((row) => row.pageUrl.split('#')[0]))]

test('모든 프로젝트 PUB 내부 주소는 정적 화면을 제공한다', async ({ request }) => {
  for (let i = 0; i < internalPaths.length; i += 8) {
    await Promise.all(internalPaths.slice(i, i + 8).map(async (pathname) => {
      const response = await request.get(pathname)
      expect(response.status(), pathname).toBe(200)
      expect(await response.text(), pathname).toContain('<h1')
    }))
  }
  for (const pathname of ['/project', '/web', '/mobile', '/b2b/corpeduc/ax', '/b2b/about/ceo', '/b2b/insight/corporate-inquiry']) expect((await request.get(pathname)).status()).toBe(404)
})

test('대표 중첩 화면과 위젯 프리뷰를 브라우저에서 연다', async ({ page }) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  for (const [pathname, title] of [
    ['/b2b', '메인'],
    ['/b2b/contents/ax/overview', 'AX교육 Overview'],
    ['/b2b/contents/job/professional', '직무 전문 역량'],
    ['/b2b/contents/mandatory/estimate', '법정교육 간편견적'],
    ['/b2b/service/platform/consulting', '플랫폼 활용 컨설팅'],
    ['/b2b/insight/resources/detail', '자료실 상세'],
    ['/b2b/contact/education', '기업교육문의'],
    ['/b2b/company/ethics/compliance', '준법경영'],
    ['/b2b/company/sustainability/human-rights', '인권경영'],
    ['/b2b/company/investors/ir', 'IR 자료실'],
    ['/b2b/company/pr/news-detail', '언론보도 상세'],
    ['/b2b/common/education-diagnosis', '간편 진단 모달']
  ]) {
    expect((await page.goto(pathname)).status(), pathname).toBe(200)
    await expect(page.locator('main h1')).toHaveText(title)
    await expect(page.locator('.app-layout--has-header')).toBeVisible()
  }
  expect(errors).toEqual([])
})

test('PUB에서 새 분류·페이지·위젯·외부 링크를 구분하고 진행률을 집계한다', async ({ page }) => {
  await page.goto('/pub')
  await expect(page.locator('.wbs-table__group')).toHaveCount(7)
  await page.locator('.wbs-switch').click({ timeout: 10000 })
  await expect(page.locator('.wbs-switch input')).toBeChecked()
  await expect(page.locator('a.wbs-link[href="/b2b/contents/ax/overview"]')).toBeVisible()
  await expect(page.locator('a.wbs-link[href="/b2b/company/sustainability/esg-data"]')).toBeVisible()
  await expect(page.locator('a.wbs-link[href="https://ethics.multicampus.com/"]').first()).toBeVisible()
  const included = rows.filter((row) => !row.excludeFromStats).length
  await expect(page.locator('.wbs-stats > li').first()).toHaveText(new RegExp(`전체\\s+${included}$`))
  await expect(page.locator('a.wbs-link[href^="/b2b/corpeduc"], a.wbs-link[href^="/b2b/about/"]')).toHaveCount(0)
})


test('루트는 단일 프로젝트로 이동하고 PUB에는 프로젝트 전환 탭이 없다', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveURL(/\/b2b$/)
  await expect(page.locator('main h1')).toHaveText('메인')
  await page.goto('/b2b/main')
  await expect(page).toHaveURL(/\/b2b$/)
  await page.goto('/pub')
  await expect(page.locator('.wbs-table__group')).toHaveCount(7)
  await expect(page.getByRole('tab')).toHaveCount(0)
})

test('PUB 설정 요청이 실패해도 재시도하면 설정과 목록을 다시 불러온다', async ({ page }) => {
  let fail = true
  let attempts = 0
  await page.route('**/data/pub/index.json', async (route) => {
    attempts += 1
    if (fail) await route.fulfill({ status: 503, body: 'Temporary failure' })
    else await route.continue()
  })
  await page.goto('/pub')
  const retry = page.getByRole('button', { name: '다시 시도', exact: true })
  await expect(retry).toBeVisible()
  fail = false
  const before = attempts
  await retry.click()
  await expect(page.locator('.wbs-table__group')).toHaveCount(7)
  expect(attempts).toBeGreaterThan(before)
})
