#!/usr/bin/env node
const fs = require('fs').promises
const path = require('path')
const sharp = require('sharp')

const projectRoot = path.join(__dirname, '..')
const targetDir = path.join(projectRoot, 'src', 'assets', 'farmstay')

async function listImages(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    return entries.filter(e => e.isFile()).map(e => path.join(dir, e.name))
  } catch (e) {
    return []
  }
}

async function convert(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return

  const dir = path.dirname(filePath)
  const base = path.basename(filePath, ext)
  const outPath = path.join(dir, base + '.webp')

  try {
    // Convert/re-encode to webp with compression
    await sharp(filePath)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 70, reductionEffort: 6 })
      .toFile(outPath)

    if (outPath !== filePath) {
      // remove original file
      await fs.unlink(filePath).catch(() => {})
      console.log('Converted:', filePath, '->', outPath)
    }
  } catch (err) {
    console.error('Failed:', filePath, err && err.message)
  }
}

(async () => {
  const imgs = await listImages(targetDir)
  if (!imgs.length) {
    console.log('No images found in', targetDir)
    return
  }

  for (const img of imgs) {
    await convert(img)
  }

  console.log('Done converting farmstay images to WebP.')
})()
