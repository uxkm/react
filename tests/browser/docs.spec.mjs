import { test, expect } from '@playwright/test'

const documents = [
  ['README.md', '# 접근성 참고 문서'],
  ['kwcag-2.2-checklist.md', '# KWCAG 2.2 수동 검사 체크리스트']
]

test('이동한 가이드 문서가 정적 URL에서 UTF-8 원문으로 제공된다', async ({ request }) => {
  for (const [file, title] of documents) {
    const response = await request.get('/data/pub/docs/a11y/' + file)
    expect(response.status(), file).toBe(200)
    expect(response.headers()['content-type']).toMatch(/text\/plain; charset=utf-8/)
    expect(await response.text()).toContain(title)
  }
})

test('소개·접근성 가이드의 문서 링크가 이동한 체크리스트를 연다', async ({ page }) => {
  const url = '/data/pub/docs/a11y/kwcag-2.2-checklist.md'
  await page.goto('/pub/guide')
  await expect(page.locator(`a[href="${url}"]`)).toHaveCount(1)
  await page.goto('/pub/guide/accessibility')
  await page.locator(`a[href="${url}"]`).click()
  await expect(page).toHaveURL(new RegExp(url.replaceAll('.', '\\.') + '$'))
  await expect(page.locator('body')).toContainText('# KWCAG 2.2 수동 검사 체크리스트')
})
