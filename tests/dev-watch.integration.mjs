import assert from 'node:assert/strict'
import { test } from 'node:test'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawn, execFileSync } from 'node:child_process'
import { chromium, expect } from '@playwright/test'
import { root as sourceRoot } from '../scripts/project.mjs'

async function until (predicate, message, timeout = 30000) {
  const deadline = Date.now() + timeout
  while (Date.now() < deadline) {
    try { if (await predicate()) return } catch { /* Next may be restarting. */ }
    await new Promise((resolve) => setTimeout(resolve, 200))
  }
  throw new Error(message)
}
async function stop (child) {
  if (!child || child.exitCode !== null || child.signalCode !== null) return
  await new Promise((resolve) => {
    const timer = setTimeout(() => child.kill('SIGKILL'), 8000)
    child.once('exit', () => { clearTimeout(timer); resolve() })
    child.kill('SIGTERM')
  })
}
for (const [index, mode] of ['scss', 'css'].entries()) {
  test(`live ${mode}: nested routes, automatic menu, asset/data refresh, rename/delete and new styles`, { timeout: 240000 }, async () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'uxkm-dev-watch-'))
    const port = 18470 + index * 2
    const baseURL = `http://127.0.0.1:${port}`
    let child
    let browser
    let log = ''
    const write = (relative, content) => {
      const file = path.join(root, relative)
      fs.mkdirSync(path.dirname(file), { recursive: true })
      const temporary = path.join(path.dirname(file), '.' + path.basename(file) + '.integration.tmp')
      fs.writeFileSync(temporary, content)
      fs.renameSync(temporary, file)
    }
    try {
      for (const folder of ['src', 'scripts']) fs.cpSync(path.join(sourceRoot, folder), path.join(root, folder), { recursive: true, filter: (file) => !file.includes('/styles/css') })
      for (const folder of ['data', 'fonts', 'assets']) fs.cpSync(path.join(sourceRoot, 'public', folder), path.join(root, 'public', folder), { recursive: true })
      for (const file of ['package.json', 'next.config.ts', 'tsconfig.json', 'postcss.config.mjs', 'README.md']) fs.copyFileSync(path.join(sourceRoot, file), path.join(root, file))
      // The temporary workspace shares dependencies outside its own directory.
      write('next.config.ts', fs.readFileSync(path.join(root, 'next.config.ts'), 'utf8').replace('  turbopack: {', '  turbopack: {\n    root: "/",'))
      fs.symlinkSync(path.join(sourceRoot, 'node_modules'), path.join(root, 'node_modules'), 'dir')
      write('public/assets/watch.svg', '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect width="10" height="10" fill="red"/></svg>')
      write('public/data/watch.json', '{"label":"initial data"}')
      execFileSync(process.execPath, [path.join(root, 'scripts/registry.mjs')], { cwd: root, stdio: 'pipe' })
      child = spawn(process.execPath, [path.join(root, 'scripts/dev.mjs'), ...(mode === 'css' ? ['--css'] : [])], {
        cwd: root, env: { ...process.env, BIND_HOST: '127.0.0.1', PORT: String(port), HTTPS_PORT: String(port + 1) }, stdio: ['ignore', 'pipe', 'pipe']
      })
      const capture = (chunk) => { log += chunk }
      child.stdout.on('data', capture)
      child.stderr.on('data', capture)
      await until(async () => (await fetch(baseURL + '/pub/guide/button')).status === 200, 'dev server did not become ready', 90000)
      browser = await chromium.launch({ headless: true })
      const page = await browser.newPage()
      await page.goto(baseURL + '/pub/guide/button')
      await expect(page.locator('.app-layout--has-header')).toBeVisible()
      const guide = 'src/screen/pub/guide/watch-check/Example.tsx'
      const source = `'use client'
import { useEffect, useState } from 'react'
import '@/styles/watch-check.scss'
export const guideLabel = 'Watcher example'
export default function Example () {
  const [label, setLabel] = useState('loading')
  useEffect(() => { fetch('/data/watch.json').then((res) => res.json()).then((data) => setLabel(data.label)) }, [])
  return <section><h1 id="watch-styled">Watch route</h1><p id="watch-data">{label}</p><img id="watch-asset" src="/assets/watch.svg" alt="Watch" /></section>
}`
      write('src/styles/watch-check.scss', '#watch-styled { color: rgb(1, 2, 3); }')
      write(guide, source)
      const guideURL = '/pub/guide/watch-check/example'
      await until(async () => (await fetch(baseURL + guideURL)).status === 200, 'new nested guide was not registered')
      // The open browser must refresh on its own and pick up the generated menu.
      await expect(page.locator(`.comp-guide__nav a[href="${guideURL}"]`)).toHaveCount(1, { timeout: 30000 })
      const ready = page.waitForResponse((response) => response.url().endsWith('/__uxkm/watch'))
      await page.goto(baseURL + guideURL)
      await ready
      await expect(page.locator('#watch-styled')).toHaveCSS('color', 'rgb(1, 2, 3)')
      await expect(page.locator('#watch-data')).toHaveText('initial data')
      await expect.poll(() => page.locator('#watch-asset').evaluate((image) => image.naturalWidth)).toBe(10)
      write('public/assets/watch.svg', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="10"><rect width="20" height="10" fill="blue"/></svg>')
      await expect.poll(() => page.locator('#watch-asset').evaluate((image) => image.naturalWidth), { timeout: 30000 }).toBe(20)
      write('public/data/watch.json', '{"label":"updated data"}')
      await expect(page.locator('#watch-data')).toHaveText('updated data', { timeout: 30000 })
      write('src/styles/watch-check.scss', '#watch-styled { color: rgb(4, 5, 6); }')
      await expect(page.locator('#watch-styled')).toHaveCSS('color', 'rgb(4, 5, 6)', { timeout: 30000 })
      write(guide, source.replace('Watch route', 'Watch changed'))
      await expect(page.locator('#watch-styled')).toHaveText('Watch changed', { timeout: 30000 })
      fs.renameSync(path.join(root, guide), path.join(root, 'src/screen/pub/guide/watch-check/Renamed.tsx'))
      await until(async () => (await fetch(baseURL + '/pub/guide/watch-check/renamed')).status === 200 && (await fetch(baseURL + guideURL)).status === 404, 'renamed guide routes did not update')
      fs.renameSync(path.join(root, 'src/screen/pub/guide/watch-check'), path.join(root, 'src/screen/pub/guide/relocated'))
      await until(async () => (await fetch(baseURL + '/pub/guide/relocated/renamed')).status === 200 && (await fetch(baseURL + '/pub/guide/watch-check/renamed')).status === 404, 'renamed folder routes did not update')
      write('src/screen/pub/demo/watch-check/NestedDemoPage.tsx', "export const guideLabel = 'Watcher demo'; export default function Nested () { return <h1>Nested demo</h1> }")
      await until(async () => (await fetch(baseURL + '/pub/demo/watch-check/nested')).status === 200, 'nested demo was not registered')
      await page.goto(baseURL + '/pub/demo/libs')
      await expect(page.locator('a.lib-demo-card[href="/pub/demo/watch-check/nested"]')).toHaveCount(1)
      fs.rmSync(path.join(root, 'src/screen/pub/guide/relocated'), { recursive: true })
      fs.rmSync(path.join(root, 'src/screen/pub/demo/watch-check'), { recursive: true })
      fs.unlinkSync(path.join(root, 'src/styles/watch-check.scss'))
      fs.unlinkSync(path.join(root, 'public/assets/watch.svg'))
      await until(async () => (await fetch(baseURL + '/pub/guide/relocated/renamed')).status === 404 && (await fetch(baseURL + '/pub/demo/watch-check/nested')).status === 404 && (await fetch(baseURL + '/assets/watch.svg')).status === 404, 'deleted routes/assets were retained')
      await page.goto(baseURL + '/pub/demo/libs')
      await expect(page.locator('a[href="/pub/demo/watch-check/nested"]')).toHaveCount(0)
      write('src/widgets/b2b/previews/watch-preview/index.tsx', 'export default function Preview () { return <h1>Project widget preview</h1> }')
      await until(async () => (await fetch(baseURL + '/b2b/common/watch-preview')).status === 200, 'new project widget preview was not detected')
      fs.unlinkSync(path.join(root, 'src/widgets/b2b/previews/watch-preview/index.tsx'))
      await until(async () => (await fetch(baseURL + '/b2b/common/watch-preview')).status === 404, 'removed project widget preview was retained')
      write('src/app/watch-static/page.jsx', 'export default function Page () { return <h1>Static app route</h1> }')
      await until(async () => (await fetch(baseURL + '/watch-static')).status === 200, 'new static app folder was not detected')
      fs.rmSync(path.join(root, 'src/app/watch-static'), { recursive: true })
      await until(async () => (await fetch(baseURL + '/watch-static')).status === 404, 'removed static app folder was retained')
      fs.rmSync(path.join(root, 'public/assets/b2b'), { recursive: true })
      fs.unlinkSync(path.join(root, 'src/screen/pub/guide/Accessibility.jsx'))
      await until(async () => (await fetch(baseURL + '/pub/guide/accessibility')).status === 404, 'deleted accessibility route was retained')
      await page.goto(baseURL + '/pub/guide/button')
      await expect(page.locator('.comp-guide__nav a[href="/pub/guide/accessibility"]')).toHaveCount(0)
      if (mode === 'css') assert.equal(fs.existsSync(path.join(root, 'src/styles/css/watch-check.min.css')), false)
      // A local design skeleton is rendered only after the screen is marked manual.
      const overviewFile = 'src/screen/b2b/contents/ax/overview/index.tsx'
      const overviewSource = fs.readFileSync(path.join(root, overviewFile), 'utf8')
      write(overviewFile, overviewSource.replace('loading={false}', 'loading={true}'))
      write('src/screen/b2b/contents/ax/overview/skeleton/indexSkeleton.tsx', 'export default function OverviewSkeleton () { return <div id="manual-b2b-skeleton">Approved design skeleton</div> }')
      await page.goto(baseURL + '/b2b/contents/ax/overview')
      await expect(page.locator('.page-loading[aria-busy="true"]')).toBeVisible({ timeout: 30000 })
      await expect(page.locator('#manual-b2b-skeleton')).toHaveCount(0)
      const configSource = fs.readFileSync(path.join(root, 'src/config/skeleton.ts'), 'utf8')
      write('src/config/skeleton.ts', configSource.replace('export const SKELETON_PAGE_MODE: Record<string, SkeletonMode> = {', "export const SKELETON_PAGE_MODE: Record<string, SkeletonMode> = {\n  'b2b/contents/ax/overview': 'manual',"))
      await expect(page.locator('#manual-b2b-skeleton')).toBeVisible({ timeout: 30000 })
      write('src/config/skeleton.ts', configSource)
      await expect(page.locator('#manual-b2b-skeleton')).toHaveCount(0, { timeout: 30000 })
      await expect(page.locator('.page-loading[aria-busy="true"]')).toBeVisible()
      assert.equal((await fetch(baseURL + '/b2b/contents/ax/overview/skeleton/index-skeleton')).status, 404)
      write(overviewFile, overviewSource)
      assert.ok(!log.includes('update failed'), log)
    } catch (error) {
      fs.writeFileSync(path.join(os.tmpdir(), 'uxkm-watch-' + mode + '.log'), log)
      throw new Error(error.message + '\n--- dev output ---\n' + log.split('\n').filter((line) => /\[watch\]|\[styles\]|wrote|project|Error:/.test(line)).slice(0, 100).join('\n'), { cause: error })
    } finally {
      if (browser) await browser.close()
      await stop(child)
      fs.rmSync(root, { recursive: true, force: true })
    }
  })
}
