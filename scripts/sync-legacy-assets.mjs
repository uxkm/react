import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

function mirrorMissingFiles(sourceDir, targetDir) {
  if (!existsSync(sourceDir)) return 0

  let copied = 0

  for (const entry of readdirSync(sourceDir)) {
    const sourcePath = join(sourceDir, entry)
    const targetPath = join(targetDir, entry)
    const stats = statSync(sourcePath)

    if (stats.isDirectory()) {
      copied += mirrorMissingFiles(sourcePath, targetPath)
      continue
    }

    if (existsSync(targetPath)) continue

    mkdirSync(dirname(targetPath), { recursive: true })
    cpSync(sourcePath, targetPath)
    copied += 1
  }

  return copied
}

const root = fileURLToPath(new URL('..', import.meta.url))

export function syncLegacyAssets({
  rootDir = root,
  distDir = join(root, 'dist'),
  includePublic = false,
} = {}) {
  const targets = []
  if (includePublic) targets.push(join(rootDir, 'public'))
  if (existsSync(distDir)) targets.push(distDir)
  let totalCopied = 0

  for (const targetRoot of targets) {
    const imagesDir = join(targetRoot, 'images')
    const legacyDir = join(targetRoot, '_assets/images')
    totalCopied += mirrorMissingFiles(imagesDir, legacyDir)
  }

  return totalCopied
}

const isCli = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]

if (isCli) {
  const copied = syncLegacyAssets()
  console.log(`[sync-legacy-assets] mirrored ${copied} missing file(s) into _assets/images`)
}
