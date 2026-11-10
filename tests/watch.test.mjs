import assert from 'node:assert/strict'
import { test } from 'node:test'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { watchSourceFiles, isWatchedPath } from '../scripts/watch-files.mjs'
import { mergeGuideGroups, resolveGuideMenu } from '../src/lib/guideMenu.mjs'

async function until (predicate) {
  const deadline = Date.now() + 5000
  while (!predicate()) {
    if (Date.now() >= deadline) throw new Error('Timed out waiting for filesystem watcher')
    await new Promise((resolve) => setTimeout(resolve, 20))
  }
}
function fixture (t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'uxkm-watch-'))
  for (const folder of ['src/screen/pub/guide', 'src/styles/css', 'src/generated', 'public/data/pub', 'public/images', 'public/css', 'scripts']) fs.mkdirSync(path.join(root, folder), { recursive: true })
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  const write = (relative, content = '') => { fs.mkdirSync(path.dirname(path.join(root, relative)), { recursive: true }); fs.writeFileSync(path.join(root, relative), content) }
  return { root, write }
}

test('recursive creation, change, rename and deletion of screens and static files', async (t) => {
  const { root, write } = fixture(t)
  const batches = []
  const errors = []
  const watcher = watchSourceFiles({ root, debounce: 30, onBatch: (paths) => batches.push(paths), onError: (error) => errors.push(error) })
  t.after(() => watcher.close())
  write('src/screen/pub/guide/forms/Field.tsx', 'export default function Field () { return null }')
  await until(() => batches.flat().some((file) => file.startsWith('src/screen/pub/guide/forms')))
  for (const relative of ['public/images/new.svg', 'public/css/theme.css', 'public/data/pub/menu.json', 'src/styles/new.scss']) {
    let index = batches.length
    write(relative, 'initial')
    await until(() => batches.slice(index).flat().includes(relative))
    index = batches.length
    write(relative, 'changed')
    await until(() => batches.slice(index).flat().includes(relative))
    index = batches.length
    fs.renameSync(path.join(root, relative), path.join(root, relative + '.renamed'))
    await until(() => batches.slice(index).flat().some((file) => file === relative || file === relative + '.renamed'))
    index = batches.length
    fs.unlinkSync(path.join(root, relative + '.renamed'))
    await until(() => batches.slice(index).flat().includes(relative + '.renamed'))
  }
  assert.deepEqual(errors, [])
})

test('generated output cannot trigger regeneration loops; static CSS and hidden public folders remain watched', async (t) => {
  const { root, write } = fixture(t)
  const batches = []
  const watcher = watchSourceFiles({ root, debounce: 30, onBatch: (paths) => batches.push(paths) })
  t.after(() => watcher.close())
  write('src/generated/registry.js', 'generated')
  write('src/styles/css/pub.min.css', 'generated')
  write('public/data/pub/projects.generated.json', '{}')
  await new Promise((resolve) => setTimeout(resolve, 180))
  assert.deepEqual(batches, [])
  assert.equal(isWatchedPath('public/css/theme.css'), true)
  assert.equal(isWatchedPath('public/.well-known/assetlinks.json'), true)
  assert.equal(isWatchedPath('public/assets/dist/image.png'), true)
  assert.equal(isWatchedPath('.env.local'), true)
})

test('queued batches never overlap and recover after a generation error', async (t) => {
  const { root, write } = fixture(t)
  const calls = []
  const errors = []
  let running = 0
  let maxRunning = 0
  let release
  const gate = new Promise((resolve) => { release = resolve })
  const watcher = watchSourceFiles({
    root,
    debounce: 20,
    async onBatch (paths) {
      running += 1
      maxRunning = Math.max(maxRunning, running)
      calls.push(paths)
      try {
        if (calls.length === 1) { await gate; throw new Error('temporary invalid edit') }
      } finally { running -= 1 }
    },
    onError: (error) => errors.push(error.message)
  })
  t.after(() => watcher.close())
  write('public/images/first.svg', 'first')
  await until(() => calls.length === 1)
  write('public/images/second.svg', 'second')
  await new Promise((resolve) => setTimeout(resolve, 60))
  release()
  await until(() => calls.length >= 2)
  assert.equal(maxRunning, 1)
  assert.ok(calls.slice(1).flat().includes('public/images/second.svg'))
  assert.deepEqual(errors, ['temporary invalid edit'])
})

test('menu preserves curated labels and removes stale links while adding nested routes', () => {
  const groups = [{ id: 'basic', label: '기본', items: [{ id: 'button', label: '버튼' }, { id: 'deleted', label: '삭제됨' }] }]
  const merged = mergeGuideGroups(groups, [{ id: 'button', label: 'Button' }, { id: 'forms/field', label: 'Field' }])
  assert.deepEqual(merged[0].items, [{ id: 'button', label: '버튼' }])
  assert.deepEqual(merged[1].items, [{ id: 'forms/field', label: 'Field' }])
  assert.deepEqual(mergeGuideGroups(groups, []), [])
})


test('special accessibility entry is omitted when the screen is deleted', () => {
  const defaults = { intro: { id: 'intro' }, accessibility: { id: 'accessibility' } }
  const pages = { guide: [{ id: 'button', label: 'Button' }], demo: [] }
  assert.equal(resolveGuideMenu({}, pages, defaults).accessibility, null)
  pages.guide.push({ id: 'accessibility', label: 'Accessibility' })
  const menu = resolveGuideMenu({}, pages, defaults)
  assert.equal(menu.accessibility.id, 'accessibility')
  assert.deepEqual(menu.guideMenu.flatMap((group) => group.items).map((item) => item.id), ['button'])
})
