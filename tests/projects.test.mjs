import assert from 'node:assert/strict'
import { test } from 'node:test'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { root, discoverProjects } from '../scripts/projects.mjs'
import { validateProjects } from '../scripts/validate-projects.mjs'

function fixture (t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'uxkm-projects-'))
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }))
  fs.mkdirSync(path.join(dir, 'src/app'), { recursive: true })
  const write = (file, source) => { fs.mkdirSync(path.dirname(path.join(dir, file)), { recursive: true }); fs.writeFileSync(path.join(dir, file), source) }
  for (const file of ['projects.mjs', 'registry.mjs', 'files.mjs']) write(`scripts/${file}`, fs.readFileSync(path.join(root, 'scripts', file)))
  write('public/data/pub/index.json', JSON.stringify({ tabs: [{ id: 'deleted', label: 'STALE' }] }))
  write('src/screen/pub/guide/Button.jsx', 'export default function Button () { return null }')
  write('src/screen/pub/demo/ChartDemoPage.jsx', 'export default function Chart () { return null }')
  const run = (...args) => execFileSync(process.execPath, [path.join(dir, 'scripts/projects.mjs'), ...args], { cwd: dir, encoding: 'utf8', stdio: 'pipe' })
  const read = (file) => fs.readFileSync(path.join(dir, file), 'utf8')
  return { dir, write, run, read }
}

test('scaffolding, nested TSX routes, metadata, and stale project exclusion', (t) => {
  const { dir, write, run, read } = fixture(t)
  run('add', 'alpha-shop')
  write('src/screen/alpha-shop/contents/ax/overview.tsx', "export const meta = { footer: false }; export const pageTitle = 'AX overview'; export default function Page () { return null }")
  write('src/screen/alpha-shop/contents/ax/index.tsx', 'export default function Page () { return null }')
  write('src/screen/alpha-shop/contents/ax/skeleton/Loading.tsx', 'export default function Loading () { return null }')
  run('sync')
  assert.deepEqual(discoverProjects(dir).map(({ id }) => id), ['alpha-shop'])
  const ids = read('src/generated/registry-ids.js')
  assert.match(ids, /contents\/ax\/overview/)
  assert.match(ids, /contents\/ax"/)
  assert.match(ids, /AX overview/)
  assert.ok(ids.includes('"/pub/guide/button"'))
  assert.ok(ids.includes('"/pub/demo/chart"'))
  assert.ok(!ids.includes('"/guide/'))
  assert.ok(!ids.includes('"/demo/'))
  assert.doesNotMatch(ids, /skeleton|deleted/)
  assert.match(read('src/generated/registry-alpha-shop.js'), /"footer":false/)
  assert.doesNotMatch(read('src/generated/registry.js'), /alpha-shop/)
  assert.match(read('src/app/alpha-shop/[...slug]/page.jsx'), /await params/)
  assert.doesNotThrow(() => validateProjects(dir))
  // Removing only the screen directory removes the managed route shells as well.
  fs.rmSync(path.join(dir, 'src/screen/alpha-shop'), { recursive: true })
  fs.unlinkSync(path.join(dir, 'public/data/pub/projects.generated.json'))
  run('sync')
  assert.deepEqual(discoverProjects(dir), [])
  assert.equal(fs.existsSync(path.join(dir, 'src/app/alpha-shop')), false)
  assert.equal(fs.existsSync(path.join(dir, 'src/generated/registry-alpha-shop.js')), false)
  assert.doesNotMatch(read('src/generated/registry-ids.js'), /alpha-shop/)
  assert.deepEqual(JSON.parse(read('public/data/pub/projects.generated.json')).projects, [])
  assert.match(read('src/generated/registry-component.js'), /Button.jsx/)
  assert.match(read('src/generated/registry-demo.js'), /ChartDemoPage.jsx/)
})

test('removing app alone excludes a project; explicit remove clears owned directories', (t) => {
  const { dir, run, read } = fixture(t)
  run('add', 'alpha')
  run('add', 'beta')
  fs.rmSync(path.join(dir, 'src/app/alpha'), { recursive: true })
  run('sync')
  assert.doesNotMatch(read('src/generated/registry-ids.js'), /alpha/)
  assert.match(read('src/generated/registry-ids.js'), /beta/)
  run('remove', 'beta')
  for (const folder of ['src/app/beta', 'src/screen/beta', 'src/widgets/beta', 'src/modules/beta', 'src/styles/pages/beta', 'public/assets/beta', 'public/data/pub/beta']) assert.equal(fs.existsSync(path.join(dir, folder)), false)
})

test('validation rejects transitive PUB imports, cross-project imports and server APIs', (t) => {
  const { dir, write, run } = fixture(t)
  run('add', 'alpha')
  run('add', 'beta')
  write('src/components/bridge.js', "export { default } from '@/screen/alpha/IndexPage'")
  write('src/screen/pub/guide/Button.jsx', "import Button from '@/components/bridge'; export default Button")
  assert.throws(() => validateProjects(dir), /project dependency is forbidden|PUB depends on a project/)
  write('src/components/bridge.js', 'export default function Button () { return null }')
  write('src/modules/alpha/cross.js', "export { default } from '@/screen/beta/IndexPage'")
  assert.throws(() => validateProjects(dir), /project dependency is forbidden/)
  write('src/modules/alpha/cross.js', "import { cookies } from 'next/headers'; export default cookies")
  assert.throws(() => validateProjects(dir), /request-time server API/)
  write('src/modules/alpha/cross.js', 'export default null')
  write('src/styles/common/_leak.scss', "@use '../pages/beta/index';")
  assert.throws(() => validateProjects(dir), /project dependency is forbidden/)
})

test('reserved and escaping project names cannot mutate core directories', (t) => {
  const { run } = fixture(t)
  for (const id of ['pub', 'guide', '../escape', 'Alpha']) {
    assert.throws(() => run('add', id), /Invalid or reserved project id/)
  }
})


test('guide/demo recursively register folders and TSX; deletion clears routes and automatic menus', (t) => {
  const { dir, write, run, read } = fixture(t)
  write('src/screen/pub/guide/forms/index.tsx', "export const guideLabel = 'Forms'; export default function Forms () { return null }")
  write('src/screen/pub/guide/forms/Field.tsx', 'export default function Field () { return null }')
  write('src/screen/pub/demo/examples/NestedDemoPage.tsx', 'export default function Nested () { return null }')
  write('src/screen/pub/guide/forms/shared/Helper.tsx', 'export default function Helper () { return null }')
  run('sync')
  assert.match(read('src/generated/registry-ids.js'), /forms\/field/)
  assert.match(read('src/generated/registry-ids.js'), /examples\/nested/)
  assert.doesNotMatch(read('src/generated/registry-ids.js'), /helper/)
  assert.match(read('src/generated/pub-pages.js'), /Forms/)
  const generated = path.join(dir, 'src/generated/registry-component.js')
  const modified = fs.statSync(generated).mtimeMs
  run('sync')
  assert.equal(fs.statSync(generated).mtimeMs, modified)
  fs.rmSync(path.join(dir, 'src/screen/pub/guide/forms'), { recursive: true })
  run('sync')
  assert.doesNotMatch(read('src/generated/registry-ids.js'), /forms/)
  assert.doesNotMatch(read('src/generated/pub-pages.js'), /forms/)
  write('src/screen/pub/demo/duplicate.tsx', "export const routeId = 'examples/nested'; export default function Duplicate () { return null }")
  assert.throws(() => run('sync'), /Duplicate demo route/)
})


test('unused asset/widget/module/style folders can be deleted without breaking project routes', (t) => {
  const { dir, run, read } = fixture(t)
  run('add', 'alpha')
  for (const folder of ['public/assets/alpha', 'src/widgets/alpha', 'src/modules/alpha', 'src/styles/pages/alpha']) fs.rmSync(path.join(dir, folder), { recursive: true })
  run('sync')
  assert.doesNotThrow(() => validateProjects(dir))
  assert.doesNotMatch(read('src/app/alpha/layout.jsx'), /index.scss/)
  assert.match(read('src/generated/registry-ids.js'), /alpha/)
})


test('project widget previews register under common without entering screen folders', (t) => {
  const { dir, write, run, read } = fixture(t)
  run('add', 'alpha')
  write('src/widgets/alpha/previews/Download.tsx', "export const pageTitle = 'Download'; export default function Download () { return null }")
  write('src/widgets/alpha/PageSkeleton.tsx', 'export default function Skeleton () { return null }')
  run('sync')
  assert.match(read('src/generated/registry-alpha.js'), /@\/widgets\/alpha\/previews\/Download.tsx/)
  assert.match(read('src/generated/registry-ids.js'), /common\/download/)
  assert.doesNotMatch(read('src/generated/registry-ids.js'), /page-skeleton/)
  assert.doesNotThrow(() => validateProjects(dir))
  fs.unlinkSync(path.join(dir, 'src/widgets/alpha/previews/Download.tsx'))
  run('sync')
  assert.doesNotMatch(read('src/generated/registry-ids.js'), /common\/download/)
})
