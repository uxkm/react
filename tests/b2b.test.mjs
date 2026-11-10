import assert from 'node:assert/strict'
import { test } from 'node:test'
import fs from 'node:fs'
import path from 'node:path'
import { root } from '../scripts/projects.mjs'

// Contract from the supplied B2B IA; independent of the generated registry.
const expected = {
  main: ['index'],
  'contents/ax': ['overview', 'ai-search', 'competency', 'ai-studio', 'workshop', 'hackathon'],
  'contents/it': ['index'],
  'contents/job': ['index', 'professional', 'industry', 'certification'],
  'contents/leadership': ['index', 'assessment', 'executive', 'mba'],
  'contents/mandatory': ['index', 'features', 'courses', 'estimate'],
  'contents/language': ['index', 'ai-language', 'language-life'],
  'contents/small-business': ['index'],
  'service/platform': ['index', 'consulting'],
  'service/learning': ['index'],
  'service/diagnosis': ['index'],
  'service/consulting': ['index'],
  'service/bpo': ['index'],
  'insight/on': ['list', 'detail'],
  'insight/resources': ['list', 'detail'],
  contact: ['education'],
  company: ['intro', 'ceo', 'history'],
  'company/ethics': ['management', 'compliance'],
  'company/sustainability': ['esg', 'environment', 'diversity', 'human-rights', 'safety', 'information', 'consumer', 'contribution', 'esg-data'],
  'company/investors': ['financial', 'stock', 'disclosure', 'ir'],
  'company/pr': ['news-list', 'news-detail', 'awards']
}
const files = Object.entries(expected).flatMap(([folder, names]) => names.map((name) => `${folder}/${name}.tsx`))
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8')
const registry = JSON.parse(read('src/generated/registry-ids.js').match(/export const projectRoutes = ([\s\S]*?)\nexport const componentNames/)[1]).b2b
const index = JSON.parse(read('public/data/pub/b2b/index.json'))
function leaves (nodes) {
  return nodes.flatMap((node) => node.depth3 ? leaves(node.depth3) : [node])
}
const rows = index.folders.flatMap((folder) => leaves(JSON.parse(read('public/data/pub/b2b/' + folder.file)).depth2))

test('all 56 requested TSX screens exist and have generated routes and PUB entries', () => {
  assert.equal(files.length, 56)
  for (const file of files) {
    assert.ok(fs.existsSync(path.join(root, 'src/screen/b2b', file)), file)
    const key = file.replace(/\/index\.tsx$/, '').replace(/\.tsx$/, '')
    assert.ok(registry.includes(key), key)
    assert.ok(rows.some((row) => row.type === 'Page' && row.filePath === '@/screen/b2b/' + file), file)
  }
  for (const obsolete of ['IndexPage.jsx', 'corpeduc', 'about', 'common']) assert.equal(fs.existsSync(path.join(root, 'src/screen/b2b', obsolete)), false, obsolete)
})

test('every internal PUB link and source path resolves, including section fragments', () => {
  const ids = new Set()
  for (const row of rows) {
    assert.ok(!ids.has(row.id), row.id)
    ids.add(row.id)
    if (row.filePath) assert.ok(fs.existsSync(path.join(root, row.filePath.replace('@/', 'src/'))), row.filePath)
    if (!row.pageUrl?.startsWith('/b2b')) continue
    const url = new URL(row.pageUrl, 'http://localhost')
    const key = url.pathname === '/b2b' ? 'main' : url.pathname.slice('/b2b/'.length)
    assert.ok(registry.includes(key), row.pageUrl)
    if (url.hash) assert.ok(read(row.filePath.replace('@/', 'src/')).includes(`id="${url.hash.slice(1)}"`), row.pageUrl)
  }
})

test('main planning history is retained; links and mail handoffs do not create publish pages', () => {
  const main = rows.find((row) => row.id === 'B2B-MAIN-000')
  assert.equal(main.pageUrl, '/b2b')
  assert.ok(main.planning.url.startsWith('https://www.figma.com/'))
  assert.ok(main.design.url.startsWith('https://www.figma.com/'))
  assert.ok(main.remark.some((remark) => remark.date === '2026-03-12'))
  for (const row of rows.filter((row) => ['Link', 'Mail'].includes(row.type))) {
    assert.equal(row.excludeFromStats, true, row.id)
    assert.equal(row.filePath, '', row.id)
    if (row.type === 'Link') assert.match(row.pageUrl, /^https:\/\//)
    else assert.equal(row.pageUrl, '')
  }
  assert.ok(registry.includes('common/gnb'))
  assert.ok(registry.includes('common/education-diagnosis'))
})


test('every B2B screen and widget preview imports its own colocated skeleton without adding routes', () => {
  const screens = files.map((file) => path.join(root, 'src/screen/b2b', file))
  const previewRoot = path.join(root, 'src/widgets/b2b/previews')
  const previews = fs.readdirSync(previewRoot).filter((file) => file.endsWith('.tsx')).map((file) => path.join(previewRoot, file))
  for (const file of [...screens, ...previews]) {
    const stem = path.basename(file, '.tsx')
    const skeleton = path.join(path.dirname(file), 'skeleton', stem + 'Skeleton.tsx')
    assert.ok(fs.existsSync(skeleton), skeleton)
    assert.ok(fs.readFileSync(file, 'utf8').includes(`'./skeleton/${stem}Skeleton'`), file)
  }
  assert.equal(fs.existsSync(path.join(root, 'src/widgets/b2b/PageSkeleton.tsx')), false)
  assert.ok(!registry.some((key) => key.split('/').includes('skeleton')))
})
