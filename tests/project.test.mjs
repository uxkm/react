import assert from 'node:assert/strict'
import { test } from 'node:test'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { root, discoverProject } from '../scripts/project.mjs'
import { validateProject } from '../scripts/validate-project.mjs'

function fixture (t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'uxkm-projects-'))
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }))
  fs.mkdirSync(path.join(dir, 'src/app'), { recursive: true })
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(dir, 'node_modules'), process.platform === 'win32' ? 'junction' : 'dir')
  const write = (file, source) => { fs.mkdirSync(path.dirname(path.join(dir, file)), { recursive: true }); fs.writeFileSync(path.join(dir, file), source) }
  for (const file of ['project.mjs', 'registry.mjs', 'write-if-changed.mjs']) write(`scripts/${file}`, fs.readFileSync(path.join(root, 'scripts', file)))
  write('public/data/pub/index.json', JSON.stringify({ b2b: { id: 'b2b', label: 'B2B', base: 'b2b/' } }))
  write('src/screen/pub/guide/Button.jsx', 'export default function Button () { return null }')
  write('src/screen/pub/demo/ChartDemoPage.jsx', 'export default function Chart () { return null }')
  write('src/screen/b2b/index.jsx', 'export default function Main () { return null }')
  write('public/data/pub/b2b/index.json', '{"folders":[]}')
  const run = (...args) => execFileSync(process.execPath, [path.join(dir, 'scripts/project.mjs'), ...args], { cwd: dir, encoding: 'utf8', stdio: 'pipe' })
  const read = (file) => fs.readFileSync(path.join(dir, file), 'utf8')
  return { dir, write, run, read }
}

test('single project configuration, nested routes and metadata', (t) => {
  const { dir, write, run, read } = fixture(t)
  write('src/screen/b2b/contents/ax/overview/index.tsx', "export const meta = { footer: false }; export const pageTitle = 'AX overview'; export default function Page () { return null }")
  write('src/screen/b2b/contents/ax/index.tsx', 'export default function Page () { return null }')
  write('src/screen/b2b/contents/ax/overview/skeleton/Loading.tsx', 'export default function Loading () { return null }')
  run('sync')
  assert.deepEqual(discoverProject(dir), { id: 'b2b', label: 'B2B', base: 'b2b/' })
  assert.deepEqual(JSON.parse(read('public/data/pub/b2b.generated.json')).b2b.id, 'b2b')
  const ids = read('src/generated/registry-ids.js')
  assert.match(ids, /contents\/ax\/overview/)
  assert.match(ids, /AX overview/)
  assert.doesNotMatch(ids, /skeleton/)
  assert.match(read('src/generated/registry-b2b.js'), /"footer":false/)
  assert.doesNotMatch(read('src/generated/registry.js'), /registry-b2b/)
  assert.match(read('src/app/b2b/[...slug]/page.jsx'), /await params/)
  assert.doesNotThrow(() => validateProject(dir))
  assert.throws(() => run('add', 'other'), /Only one project/)
  assert.throws(() => run('remove', 'project'), /Only one project/)
  write('src/screen/other/index.jsx', 'export default function Other () { return null }')
  assert.throws(() => run('sync'), /Only src\/screen\/b2b/)
})

test('PUB remains usable when project sources are absent', (t) => {
  const { dir, run, read } = fixture(t)
  run('sync')
  fs.rmSync(path.join(dir, 'src/screen/b2b'), { recursive: true })
  run('sync')
  assert.equal(fs.existsSync(path.join(dir, 'src/app/b2b')), false)
  assert.equal(fs.existsSync(path.join(dir, 'src/generated/registry-b2b.js')), false)
  assert.equal(JSON.parse(read('public/data/pub/b2b.generated.json')).b2b, null)
  assert.match(read('src/generated/registry-component.js'), /Button.jsx/)
  assert.match(read('src/generated/registry-demo.js'), /ChartDemoPage.jsx/)
  assert.doesNotThrow(() => validateProject(dir))
})

test('validation protects PUB independence and rejects server APIs', (t) => {
  const { dir, write, run } = fixture(t)
  run('sync')
  write('src/components/bridge.js', "export { default } from '@/screen/b2b/index'")
  write('src/screen/pub/guide/Button.jsx', "import Button from '@/components/bridge'; export default Button")
  assert.throws(() => validateProject(dir), /project dependency is forbidden|PUB depends on a project/)
  write('src/components/bridge.js', 'export default function Button () { return null }')
  write('src/modules/b2b/server.js', "import { cookies } from 'next/headers'; export default cookies")
  assert.throws(() => validateProject(dir), /request-time server API/)
  write('src/modules/b2b/server.js', 'export default null')
  write('src/styles/pages/b2b/index.scss', '')
  write('src/styles/common/_leak.scss', "@use '../pages/b2b/index';")
  assert.throws(() => validateProject(dir), /project dependency is forbidden/)
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
  fs.rmSync(path.join(dir, 'src/screen/pub/guide/forms'), { recursive: true, force: true })
  run('sync')
  assert.doesNotMatch(read('src/generated/registry-ids.js'), /forms/)
  assert.doesNotMatch(read('src/generated/pub-pages.js'), /forms/)
  write('src/screen/pub/demo/duplicate.tsx', "export const routeId = 'examples/nested'; export default function Duplicate () { return null }")
  assert.throws(() => run('sync'), /Duplicate demo route/)
})


test('unused asset/widget/module/style folders can be deleted without breaking project routes', (t) => {
  const { dir, run, read } = fixture(t)
  run('sync')
  for (const folder of ['public/assets/b2b', 'src/widgets/b2b', 'src/modules/b2b', 'src/styles/pages/b2b']) fs.rmSync(path.join(dir, folder), { recursive: true, force: true })
  run('sync')
  assert.doesNotThrow(() => validateProject(dir))
  assert.doesNotMatch(read('src/app/b2b/layout.jsx'), /index.scss/)
  assert.match(read('src/generated/registry-ids.js'), /b2b/)
})


test('project widget previews register under common without entering screen folders', (t) => {
  const { dir, write, run, read } = fixture(t)
  run('sync')
  write('src/widgets/b2b/previews/Download.tsx', "export const pageTitle = 'Download'; export default function Download () { return null }")
  write('src/widgets/b2b/PageSkeleton.tsx', 'export default function Skeleton () { return null }')
  run('sync')
  assert.match(read('src/generated/registry-b2b.js'), /@\/widgets\/b2b\/previews\/Download.tsx/)
  assert.match(read('src/generated/registry-ids.js'), /common\/download/)
  assert.doesNotMatch(read('src/generated/registry-ids.js'), /page-skeleton/)
  assert.doesNotThrow(() => validateProject(dir))
  fs.unlinkSync(path.join(dir, 'src/widgets/b2b/previews/Download.tsx'))
  run('sync')
  assert.doesNotMatch(read('src/generated/registry-ids.js'), /common\/download/)
})

test('legacy settings and project folders fail validation instead of being silently ignored', (t) => {
  const { dir, write, run } = fixture(t)
  for (const key of ['tabs', 'project', 'projects']) {
    write('public/data/pub/index.json', JSON.stringify({ b2b: { id: 'b2b', base: 'b2b/' }, [key]: [] }))
    assert.throws(() => run('sync'), /Legacy project settings/)
  }
  write('public/data/pub/index.json', JSON.stringify({ b2b: { id: 'b2b', base: 'b2b/' } }))
  run('sync')
  fs.unlinkSync(path.join(dir, 'public/data/pub/b2b/index.json'))
  assert.throws(() => validateProject(dir), /Missing PUB index/)
  write('public/data/pub/b2b/index.json', '{"folders":[]}')
  for (const folder of ['src/app/web', 'src/widgets/mobile', 'src/modules/project', 'src/styles/pages/web', 'public/assets/mobile', 'public/data/pub/project']) {
    fs.mkdirSync(path.join(dir, folder), { recursive: true })
    assert.throws(() => validateProject(dir), /Legacy project directory/)
    fs.rmSync(path.join(dir, folder), { recursive: true })
  }
  assert.doesNotThrow(() => validateProject(dir))
})

test('regeneration removes obsolete generated metadata and recreates the complete current output', (t) => {
  const { dir, write, run, read } = fixture(t)
  const legacy = ['src/generated/projects.js', 'src/generated/project.js', 'src/generated/registry-web.js', 'src/generated/registry-mobile.js', 'src/generated/registry-project.js', 'public/data/pub/projects.generated.json', 'public/data/pub/project.generated.json']
  for (const file of legacy) write(file, '// obsolete generated metadata')
  run('sync')
  for (const file of legacy) assert.equal(fs.existsSync(path.join(dir, file)), false, file)
  const expected = ['b2b.js', 'pub-pages.js', 'registry-b2b.js', 'registry-component.js', 'registry-demo.js', 'registry-ids.js', 'registry.js']
  assert.deepEqual(fs.readdirSync(path.join(dir, 'src/generated')).sort(), expected)
  assert.match(read('src/generated/b2b.js'), /export const b2b =/)
  assert.doesNotMatch(read('src/generated/registry.js'), /registry-b2b/)
  const timestamps = expected.map((file) => fs.statSync(path.join(dir, 'src/generated', file)).mtimeMs)
  run('sync')
  assert.deepEqual(expected.map((file) => fs.statSync(path.join(dir, 'src/generated', file)).mtimeMs), timestamps)
  fs.rmSync(path.join(dir, 'src/generated'), { recursive: true })
  run('sync')
  assert.deepEqual(fs.readdirSync(path.join(dir, 'src/generated')).sort(), expected)
  assert.doesNotThrow(() => validateProject(dir))
})

test('root index wins over main/index and removing it restores the nested main', (t) => {
  const { dir, write, run, read } = fixture(t)
  write('src/screen/b2b/index.jsx', "export const pageTitle = 'Root main'; export default function Main () { return null }")
  write('src/screen/b2b/main/index.tsx', "export const pageTitle = 'Nested main'; export default function Main () { return null }")
  run('sync')
  assert.match(read('src/generated/registry-b2b.js'), /@\/screen\/b2b\/index.jsx/)
  assert.doesNotMatch(read('src/generated/registry-b2b.js'), /@\/screen\/b2b\/main\/index.tsx/)
  assert.match(read('src/generated/registry-ids.js'), /"\/b2b": "Root main"/)
  fs.unlinkSync(path.join(dir, 'src/screen/b2b/index.jsx'))
  run('sync')
  assert.match(read('src/generated/registry-b2b.js'), /@\/screen\/b2b\/main\/index.tsx/)
  assert.match(read('src/generated/registry-ids.js'), /"\/b2b": "Nested main"/)
  write('src/screen/b2b/main.tsx', 'export default function Duplicate () { return null }')
  assert.throws(() => run('sync'), /Duplicate route: b2b\/main/)
})


test('page meta preserves nested floating item flags, comments and TypeScript annotations', (t) => {
  const { write, run, read } = fixture(t)
  write('src/screen/b2b/index.jsx', `// export const meta = { floating: false }
export const meta = {
  banner: false,
  header: false,
  floating: true,
  floatingItems: { chat: false, 'page-help': true, header: false /* } */ },
  footer: true
} as const
export default function Page () { return null }
`)
  run('sync')
  const output = read('src/generated/registry-b2b.js')
  assert.match(output, /"banner":false/)
  assert.match(output, /"floating":true/)
  assert.match(output, /"floatingItems":\{"chat":false,"page-help":true,"header":false\}/)
  assert.match(output, /"header":false/)
  assert.match(output, /"footer":true/)
  write('src/screen/pub/guide/Button.jsx', `export const meta: PageMeta = { floating: false, floatingItems: { chat: true } } satisfies PageMeta
export default function Button () { return null }`)
  run('sync')
  assert.match(read('src/generated/registry-component.js'), /"floating":false,"floatingItems":\{"chat":true\}/)
})

test('page meta rejects dynamic visibility flags instead of generating different runtime behavior', (t) => {
  const { write, run } = fixture(t)
  write('src/screen/b2b/index.jsx', `export const meta = { floatingItems: { chat: getVisibility() } }
export default function Page () { return null }`)
  assert.throws(() => run('sync'), /meta.floatingItems.chat must be a static true or false/)
  write('src/screen/b2b/index.jsx', `export const meta = { ...defaults, floating: true }
export default function Page () { return null }`)
  assert.throws(() => run('sync'), /meta requires explicit static properties/)
})
