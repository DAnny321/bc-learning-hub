import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

function readJsonDir(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(readFileSync(join(dir, f), 'utf8')));
}

function readJsonFile(path, fallback) {
  return existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : fallback;
}

const people = readJsonDir('people');
const projects = readJsonDir('projects');
const learnCatalog = readJsonFile('catalog/learn-modules.json', { modules: [], learningPaths: [] });
const internalDocs = readJsonFile('catalog/internal-docs.json', []);
const appliedSkills = readJsonFile('catalog/applied-skills.json', []);

const dataset = {
  generatedAt: new Date().toISOString(),
  people,
  projects,
  catalog: { learn: learnCatalog, internal: internalDocs, appliedSkills },
};

writeFileSync('site/data.json', JSON.stringify(dataset, null, 2) + '\n');

// Pubblica i contenuti dei moduli (markdown + quiz) dentro site/, cosi' il
// visualizzatore in-app puo' leggerli una volta deployati su GitHub Pages.
const SITE_CONTENT_DIR = 'site/content/internal';
rmSync(SITE_CONTENT_DIR, { recursive: true, force: true });
mkdirSync(SITE_CONTENT_DIR, { recursive: true });
if (existsSync('content/internal')) {
  for (const entry of readdirSync('content/internal', { withFileTypes: true })) {
    if (entry.isDirectory() && !entry.name.startsWith('_')) {
      cpSync(join('content/internal', entry.name), join(SITE_CONTENT_DIR, entry.name), { recursive: true });
    }
  }
}

console.log(`Dashboard data built: ${people.length} people, ${projects.length} projects.`);
