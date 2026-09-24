import { writeFileSync, mkdirSync } from 'node:fs';

const CATALOG_URL =
  'https://learn.microsoft.com/api/catalog/?product=dynamics-business-central&type=modules,learningPaths&locale=it-it';

const response = await fetch(CATALOG_URL);
if (!response.ok) {
  throw new Error(`Microsoft Learn Catalog API request failed: ${response.status}`);
}
const data = await response.json();

const modules = (data.modules ?? []).map((m) => ({
  uid: m.uid,
  title: m.title,
  type: m.type,
  url: m.url,
  durationMinutes: m.duration_in_minutes,
  levels: m.levels,
  roles: m.roles,
}));

const learningPaths = (data.learningPaths ?? []).map((p) => ({
  uid: p.uid,
  title: p.title,
  type: p.type,
  url: p.url,
  durationMinutes: p.duration_in_minutes,
  levels: p.levels,
  roles: p.roles,
  modules: p.modules,
}));

mkdirSync('catalog', { recursive: true });
writeFileSync(
  'catalog/learn-modules.json',
  JSON.stringify({ syncedAt: new Date().toISOString(), modules, learningPaths }, null, 2) + '\n',
);

console.log(`Synced ${modules.length} modules and ${learningPaths.length} learning paths.`);
