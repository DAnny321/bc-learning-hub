import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
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
console.log(`Dashboard data built: ${people.length} people, ${projects.length} projects.`);
