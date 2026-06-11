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
      await moveToBackup(filePath);
      console.log('Moved original (webp exists):', filePath);
      return;
    }

    await sharp(filePath)
      .webp({ quality: 80, reductionEffort: 6 })
      .toFile(outPath);

    // move original to backup after successful conversion
    await moveToBackup(filePath);

    console.log('Converted and moved original to backup:', filePath, '->', outPath);
  } catch (err) {
    console.error('Failed converting', filePath, err.message || err);
  }
}

(async () => {
  for (const dir of startDirs) {
    await walk(dir);
  }
})();
