#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const VERBOSE = args.includes('--verbose');
const rootsFromArg = args.filter(a => !a.startsWith('--'));

const DEFAULT_ROOTS = [
  path.join(process.cwd(), 'trek-site', 'src', 'assets'),
  path.join(process.cwd(), 'trek-site', 'public', 'assets')
];
const roots = rootsFromArg.length ? rootsFromArg.map(p => path.resolve(p)) : DEFAULT_ROOTS;

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.avif', '.heic', '.bmp', '.tif', '.tiff']);
const REMOVE_PREFIX_RE = /^(unfold\s+pictures?\s+of\s+|unfold\s+pictures?\s+of|unfold\s+picture\s+of\s+|unfold\s+picture\s+|unfold\s+)/i;
const STOPWORDS = new Set(['of', 'the', 'a', 'and', '&']);

function getAcronym(folderName) {
  let name = folderName.replace(REMOVE_PREFIX_RE, '').trim();
  // replace separators with space
  name = name.replace(/[-_]/g, ' ');
  // keep letters and numbers and spaces
  const parts = name.split(/\s+/).filter(Boolean).filter(w => !STOPWORDS.has(w.toLowerCase()));
  if (parts.length === 0) {
    // fallback: use first letters of original words
    const fallback = folderName.split(/\s+/).map(w => w[0]).join('').toUpperCase();
    return fallback || 'IMG';
  }
  const acronym = parts.map(w => w[0].toUpperCase()).join('');
  return acronym;
}

async function isDirectory(p) {
  try {
    const st = await fs.stat(p);
    return st.isDirectory();
  } catch (e) {
    return false;
  }
}

async function listFiles(dir) {
  try {
    const items = await fs.readdir(dir);
    return items;
  } catch (e) {
    return [];
  }
}

async function processFolder(folderPath) {
  const name = path.basename(folderPath);
  const acronym = getAcronym(name);
  const items = await listFiles(folderPath);
  // filter image files
  const images = items.filter(it => IMAGE_EXTS.has(path.extname(it).toLowerCase()));
  images.sort((a,b) => a.localeCompare(b, undefined, {numeric: true}));
  if (images.length === 0) return {folder: folderPath, renamed: []};
  const renamed = [];
  for (let i=0;i<images.length;i++){
    const oldName = images[i];
    const ext = path.extname(oldName);
    let newBase = `${acronym} ${i+1}${ext}`;
    let newName = newBase;
    let counter = 1;
    while (items.includes(newName) && newName !== oldName) {
      // conflict: append suffix
      const baseNoExt = `${acronym} ${i+1}`;
      newName = `${baseNoExt}(${counter})${ext}`;
      counter++;
    }
    renamed.push({old: path.join(folderPath, oldName), new: path.join(folderPath, newName)});
    if (APPLY) {
      try {
        await fs.rename(path.join(folderPath, oldName), path.join(folderPath, newName));
      } catch (e) {
        renamed[renamed.length-1].error = String(e);
      }
    }
  }
  return {folder: folderPath, renamed};
}

(async () => {
  const allFolders = [];
  for (const root of roots) {
    const exists = await isDirectory(root);
    if (!exists) continue;
    const items = await fs.readdir(root, {withFileTypes: true});
    for (const it of items) {
      if (it.isDirectory()) {
        allFolders.push(path.join(root, it.name));
      }
    }
  }

  if (allFolders.length === 0) {
    console.log('No asset subfolders found in:', roots.join(', '));
    return;
  }

  const results = [];
  for (const folder of allFolders) {
    const res = await processFolder(folder);
    if (res.renamed.length) results.push(res);
  }

  // print summary
  let total = 0;
  for (const r of results) {
    console.log('\nFolder:', r.folder);
    for (const item of r.renamed) {
      total++;
      if (item.error) {
        console.log('  FAILED:', path.basename(item.old), '->', path.basename(item.new), '-', item.error);
      } else if (APPLY) {
        console.log('  RENAMED:', path.basename(item.old), '->', path.basename(item.new));
      } else {
        console.log('  WILL RENAME:', path.basename(item.old), '->', path.basename(item.new));
      }
    }
  }
  console.log('\nProcessed', results.length, 'folders. Total images affected:', total);
  if (!APPLY) console.log("Run with '--apply' to perform the renames.");
})();
