import { promises as fs } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import sharp from 'sharp'

const MAX_IMAGE_BYTES = 1024 * 1024 // 1MB
const PROJECT_ROOT = process.cwd()
const TARGET_DIRS = ['src', 'public']
const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])
const VALIDATE_ONLY_EXTENSIONS = new Set(['.gif', '.svg'])

async function walkFiles(directoryPath) {
  const entries = await fs.readdir(directoryPath, { withFileTypes: true })
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directoryPath, entry.name)
      if (entry.isDirectory()) return walkFiles(fullPath)
      return fullPath
    }),
  )
  return nested.flat()
}

function isImageFile(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  return SUPPORTED_EXTENSIONS.has(ext) || VALIDATE_ONLY_EXTENSIONS.has(ext)
}

async function compressToTargetSize(filePath, originalBuffer) {
  const ext = path.extname(filePath).toLowerCase()
  const qualitySteps = [85, 75, 65, 55, 45, 35, 25]

  for (const quality of qualitySteps) {
    let outputBuffer
    if (ext === '.jpg' || ext === '.jpeg') {
      outputBuffer = await sharp(originalBuffer).jpeg({ quality, mozjpeg: true }).toBuffer()
    } else if (ext === '.png') {
      outputBuffer = await sharp(originalBuffer)
        .png({ quality, compressionLevel: 9, palette: true })
        .toBuffer()
    } else if (ext === '.webp') {
      outputBuffer = await sharp(originalBuffer).webp({ quality }).toBuffer()
    } else if (ext === '.avif') {
      outputBuffer = await sharp(originalBuffer).avif({ quality }).toBuffer()
    } else {
      return null
    }

    if (outputBuffer.length <= MAX_IMAGE_BYTES) {
      return outputBuffer
    }
  }

  return null
}

async function optimizeImage(filePath) {
  const buffer = await fs.readFile(filePath)
  if (buffer.length <= MAX_IMAGE_BYTES) return { status: 'ok', changed: false }

  const ext = path.extname(filePath).toLowerCase()
  if (VALIDATE_ONLY_EXTENSIONS.has(ext)) {
    return {
      status: 'warn',
      message: `자동 압축 미지원 포맷(수동 최적화 권장): ${path.relative(PROJECT_ROOT, filePath)}`,
    }
  }

  const compressed = await compressToTargetSize(filePath, buffer)
  if (!compressed) {
    return {
      status: 'error',
      message: `자동 압축 후에도 1MB를 초과합니다: ${path.relative(PROJECT_ROOT, filePath)}`,
    }
  }

  await fs.writeFile(filePath, compressed)
  return {
    status: 'ok',
    changed: true,
    filePath: path.relative(PROJECT_ROOT, filePath),
    before: buffer.length,
    after: compressed.length,
  }
}

async function run() {
  const targetPaths = TARGET_DIRS.map((dirName) => path.join(PROJECT_ROOT, dirName))
  const existingTargets = []
  for (const targetPath of targetPaths) {
    try {
      await fs.access(targetPath)
      existingTargets.push(targetPath)
    } catch {
      // Ignore absent directories.
    }
  }

  const allFilesNested = await Promise.all(existingTargets.map((target) => walkFiles(target)))
  const imageFiles = allFilesNested.flat().filter(isImageFile)

  const results = await Promise.all(imageFiles.map((filePath) => optimizeImage(filePath)))
  const errors = results.filter((result) => result.status === 'error')
  const warnings = results.filter((result) => result.status === 'warn')
  const changed = results.filter((result) => result.status === 'ok' && result.changed)

  if (changed.length > 0) {
    console.log(`[image-optimize] 압축 완료: ${changed.length}개 파일`)
    for (const item of changed) {
      const savedKb = ((item.before - item.after) / 1024).toFixed(1)
      console.log(` - ${item.filePath}: ${savedKb}KB 절감`)
    }
  } else {
    console.log('[image-optimize] 1MB 초과 이미지 없음')
  }

  if (errors.length > 0) {
    for (const error of errors) {
      console.error(`[image-optimize] ${error.message}`)
    }
    process.exitCode = 1
    return
  }

  if (warnings.length > 0) {
    for (const warning of warnings) {
      console.warn(`[image-optimize] ${warning.message}`)
    }
  }
}

run().catch((error) => {
  console.error('[image-optimize] 실행 실패', error)
  process.exitCode = 1
})
