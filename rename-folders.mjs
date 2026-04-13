import fs from 'fs';
import path from 'path';

// Mapping: Bulgarian folder names -> English folder names
const FOLDER_MAP = {
  'начало': 'home',
  'услуги': 'services',
  'отзиви': 'reviews',
  'контакт': 'contact',
};

// Route mapping: Bulgarian routes -> English routes
const ROUTE_MAP = {
  '/услуги': '/services',
  '/отзиви': '/reviews',
  '/контакт': '/contact',
};

// Import path mapping
const IMPORT_MAP = {
  '../начало': '../home',
  '../услуги': '../services',
  '../отзиви': '../reviews',
  '../контакт': '../contact',
  '../../начало': '../../home',
  '../../услуги': '../../services',
  '../../отзиви': '../../reviews',
  '../../контакт': '../../contact',
};

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Replace import paths
  for (const [bg, en] of Object.entries(IMPORT_MAP)) {
    if (content.includes(bg)) {
      content = content.replaceAll(bg, en);
      changed = true;
    }
  }

  // Replace route paths (e.g. to="/услуги" or path="/услуги")
  for (const [bg, en] of Object.entries(ROUTE_MAP)) {
    if (content.includes(`"${bg}"`)) {
      content = content.replaceAll(`"${bg}"`, `"${en}"`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`  Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (item === 'node_modules' || item === '.git' || item === 'dist' || item === '.vercel') continue;
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (/\.(jsx|js|ts|tsx|css)$/.test(item)) {
      replaceInFile(fullPath);
    }
  }
}

// Step 1: Replace all references in source files
console.log('Step 1: Replacing references in source files...');
walkDir('.');

// Step 2: Rename folders
console.log('\nStep 2: Renaming folders...');
for (const [bg, en] of Object.entries(FOLDER_MAP)) {
  if (fs.existsSync(bg)) {
    fs.renameSync(bg, en);
    console.log(`  Renamed: ${bg} -> ${en}`);
  } else {
    console.log(`  Skipped (not found): ${bg}`);
  }
}

console.log('\nDone!');
