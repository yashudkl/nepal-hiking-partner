#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const projectRoot = path.join(__dirname, '..');
const startDirs = [
  path.join(projectRoot, 'public', 'assets'),
  path.join(projectRoot, 'src', 'assets'),
];
const backupsRoot = path.join(projectRoot, 'backup', 'originals');
const optimizedRoot = path.join(projectRoot, 'optimized-assets');

async function moveToBackup(filePath) {
  try {
    const rel = path.relative(projectRoot, filePath);
    const dest = path.join(backupsRoot, rel);
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.rename(filePath, dest);
    console.log('Moved original to backup:', dest);
    return true;
  } catch (e) {
    console.warn('Failed to move to backup, deleting instead:', filePath, e && e.message);
    await fs.unlink(filePath).catch(() => {});
    return false;
  }
}

async function walk(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        // process common raster formats and webp
        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.webp') await convert(full);
      }
    }
  } catch (err) {
    // ignore missing directories or permission errors
  }
}

async function convert(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  try {
    // write optimized output into optimizedRoot to avoid overwriting locked files
    const rel = path.relative(projectRoot, filePath);
    const targetRel = rel.replace(/\.(png|jpe?g)$/i, '.webp');
    const optimizedOut = ext === '.webp' ? path.join(optimizedRoot, rel) : path.join(optimizedRoot, targetRel);

    await fs.mkdir(path.dirname(optimizedOut), { recursive: true });

    if (ext === '.webp') {
      await sharp(filePath)
        .rotate()
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 60, reductionEffort: 6 })
        .toFile(optimizedOut);

      console.log('Re-encoded webp into optimized folder:', optimizedOut);
      return;
    }

    // For PNG/JPEG -> produce .webp (optimized)
    await sharp(filePath)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 60, reductionEffort: 6 })
      .toFile(optimizedOut);

    console.log('Converted into optimized folder:', filePath, '->', optimizedOut);
  } catch (err) {
    console.error('Failed converting', filePath, err.message || err);
  }
}

(async () => {
  for (const dir of startDirs) {
    await walk(dir);
  }
})();
