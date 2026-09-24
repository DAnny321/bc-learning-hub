import { execFileSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from 'node:fs';
import { extname, join, basename } from 'node:path';

const INCOMING_DIR = 'content/internal/_incoming';
const ORIGINALS_DIR = 'content/internal/_originals';
const CATALOG_PATH = 'catalog/internal-docs.json';
const SUPPORTED_EXTENSIONS = new Set(['.docx', '.xlsx', '.pptx', '.pdf']);
const WORDS_PER_MINUTE = 150;

function slugify(text) {
  return (
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'modulo'
  );
}

function estimateDurationMinutes(markdown) {
  const wordCount = markdown.split(/\s+/).filter(Boolean).length;
  return Math.max(5, Math.round(wordCount / WORDS_PER_MINUTE));
}

function readCatalog() {
  return existsSync(CATALOG_PATH) ? JSON.parse(readFileSync(CATALOG_PATH, 'utf8')) : [];
}

function upsertCatalogEntry(catalog, entry) {
  const index = catalog.findIndex((item) => item.id === entry.id);
  if (index >= 0) catalog[index] = entry;
  else catalog.push(entry);
  return catalog;
}

if (!existsSync(INCOMING_DIR)) {
  console.log('Nessuna cartella _incoming trovata, niente da convertire.');
  process.exit(0);
}

const files = readdirSync(INCOMING_DIR).filter((f) => SUPPORTED_EXTENSIONS.has(extname(f).toLowerCase()));

if (files.length === 0) {
  console.log('Nessun manuale nuovo da convertire in content/internal/_incoming.');
  process.exit(0);
}

mkdirSync(ORIGINALS_DIR, { recursive: true });
let catalog = readCatalog();

for (const fileName of files) {
  const sourcePath = join(INCOMING_DIR, fileName);
  const fallbackTitle = basename(fileName, extname(fileName)).replace(/[-_]+/g, ' ').trim();
  const slug = slugify(fallbackTitle);
  const moduleDir = join('content/internal', slug);
  mkdirSync(moduleDir, { recursive: true });

  console.log(`Conversione ${fileName} -> ${moduleDir}/module.md ...`);
  const markdown = execFileSync('markitdown', [sourcePath], { encoding: 'utf8' });

  // Il titolo del manuale (es. copertina) di solito non è in stile Heading 1 in Word,
  // quindi il nome file scelto dall'autore è una fonte più affidabile del primo '#' estratto.
  const title = fallbackTitle;
  const modulePath = join(moduleDir, 'module.md');
  writeFileSync(modulePath, markdown.trimEnd() + '\n');

  const quizPath = join(moduleDir, 'quiz.json');
  if (!existsSync(quizPath)) {
    const quizStub = {
      moduleId: slug,
      passScore: 70,
      questions: [
        {
          question: 'TODO: sostituisci con una domanda reale sul contenuto del modulo.',
          options: ['Opzione A', 'Opzione B', 'Opzione C'],
          correctIndex: 0,
        },
      ],
    };
    writeFileSync(quizPath, JSON.stringify(quizStub, null, 2) + '\n');
  }

  catalog = upsertCatalogEntry(catalog, {
    id: slug,
    title,
    path: modulePath.replace(/\\/g, '/'),
    quiz: quizPath.replace(/\\/g, '/'),
    durationMinutes: estimateDurationMinutes(markdown),
  });

  renameSync(sourcePath, join(ORIGINALS_DIR, fileName));
  console.log(`Completato: ${title} (${slug})`);
}

writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2) + '\n');
console.log(`Catalogo interno aggiornato: ${catalog.length} moduli totali.`);
