#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const projectRoot = path.join(__dirname, '..');
const startDirs = [
  path.join(projectRoot, 'public', 'assets'),
  path.join(projectRoot, 'src', 'assets'),
];

async function walk(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        // convert common raster formats to webp
        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') await convert(full);
      }
    }
  } catch (err) {
    // ignore missing directories or permission errors
  }
}

async function convert(filePath) {
  const outPath = filePath.replace(/\.(png|jpe?g)$/i, '.webp');
  try {
    const outExists = await fs.stat(outPath).then(() => true).catch(() => false);
    if (outExists) {
      await fs.unlink(filePath).catch(() => {});
      console.log('Removed original (webp exists):', filePath);
      return;
    }

    // perform conversion with reasonable defaults
    await sharp(filePath)
      .rotate() // respect EXIF orientation
      .webp({ quality: 80, reductionEffort: 6 })
      .toFile(outPath);

    // remove original PNG after successful conversion
    await fs.unlink(filePath).catch((e) => {
      console.warn('Converted but failed to remove original:', filePath, e && e.message);
    });

    console.log('Converted and removed original:', filePath, '->', outPath);
  } catch (err) {
    console.error('Failed converting', filePath, err.message || err);
  }
}

(async () => {
  for (const dir of startDirs) {
    await walk(dir);
  }
})();
