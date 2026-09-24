import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

// GitHub issue forms render the body as a sequence of "### Label\n\nvalue" blocks.
function parseIssueBody(body) {
  const fields = {};
  const parts = ('\n' + (body ?? '')).split(/\n### /).slice(1);
  for (const part of parts) {
    const [firstLine, ...rest] = part.split('\n');
    const header = firstLine.trim().toLowerCase();
    let content = rest.join('\n').trim();
    if (content.toLowerCase() === '_no response_') content = '';
    fields[header] = content;
  }
  return fields;
}

function findField(fields, keywords) {
  for (const key of Object.keys(fields)) {
    if (keywords.some((keyword) => key.includes(keyword))) return fields[key];
  }
  return '';
}

function slugify(text) {
  return (text ?? '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'unnamed';
}

function readJson(path, fallback) {
  return existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : fallback;
}

const body = process.env.ISSUE_BODY ?? '';
const labels = (process.env.ISSUE_LABELS ?? '').split(',').map((l) => l.trim());
const author = process.env.ISSUE_AUTHOR ?? 'unknown';
const issueNumber = process.env.ISSUE_NUMBER ?? '';
const now = new Date().toISOString();
const fields = parseIssueBody(body);

if (labels.includes('type:project-skills')) {
  const project = findField(fields, ['progetto']);
  const skillsRaw = findField(fields, ['competenze']);
  const notes = findField(fields, ['note']);
  const skills = skillsRaw.split(',').map((s) => s.trim()).filter(Boolean);
  const slug = slugify(project);
  const filePath = `projects/${slug}.json`;
  const data = readJson(filePath, { id: slug, name: project, requiredSkills: [], history: [] });
  data.name = project || data.name;
  data.requiredSkills = Array.from(new Set([...(data.requiredSkills ?? []), ...skills]));
  data.history = data.history ?? [];
  data.history.push({ action: 'update-skills', by: author, at: now, issue: issueNumber, notes });
  mkdirSync('projects', { recursive: true });
  writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log(`Updated ${filePath}`);
} else if (labels.includes('type:assign-course')) {
  const resource = findField(fields, ['risorsa']);
  const course = findField(fields, ['corso']);
  const project = findField(fields, ['progetto']);
  const notes = findField(fields, ['note']);
  const slug = slugify(resource);
  const filePath = `people/${slug}.json`;
  const data = readJson(filePath, { id: slug, displayName: resource, assignedCourses: [], completedCourses: [] });
  data.displayName = resource || data.displayName;
  data.assignedCourses = data.assignedCourses ?? [];
  data.assignedCourses.push({ course, project, assignedBy: author, assignedAt: now, issue: issueNumber, notes });
  mkdirSync('people', { recursive: true });
  writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log(`Updated ${filePath}`);
} else if (labels.includes('type:complete-course')) {
  const resource = findField(fields, ['risorsa']);
  const course = findField(fields, ['corso']);
  const hours = findField(fields, ['ore dedicate', 'ore']);
  const completedOn = findField(fields, ['data completamento', 'data']);
  const evidence = findField(fields, ['evidenza']);
  const quizScore = findField(fields, ['punteggio']);
  const slug = slugify(resource);
  const filePath = `people/${slug}.json`;
  const data = readJson(filePath, { id: slug, displayName: resource, assignedCourses: [], completedCourses: [] });
  data.displayName = resource || data.displayName;
  data.completedCourses = data.completedCourses ?? [];
  data.completedCourses.push({
    course,
    hoursSpent: Number(hours) || null,
    completedOn,
    evidenceUrl: evidence || null,
    quizScore: quizScore || null,
    recordedBy: author,
    recordedAt: now,
    issue: issueNumber,
  });
  mkdirSync('people', { recursive: true });
  writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log(`Updated ${filePath}`);
} else {
  console.log('No matching handler for labels:', labels.join(','));
}
