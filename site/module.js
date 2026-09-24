const REPO_ISSUE_NEW_URL = 'https://github.com/DAnny321/bc-learning-hub/issues/new';

async function main() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  if (!id) {
    document.getElementById('module-title').textContent = 'Modulo non specificato.';
    return;
  }

  const data = await (await fetch('data.json', { cache: 'no-store' })).json();
  const entry = (data.catalog?.internal ?? []).find((d) => d.id === id);
  if (!entry) {
    document.getElementById('module-title').textContent = 'Modulo non trovato nel catalogo.';
    return;
  }

  document.title = `${entry.title} — BC Learning Hub`;
  document.getElementById('module-title').textContent = entry.title;
  document.getElementById('module-meta').textContent = `Durata stimata: ${entry.durationMinutes ?? '-'} min`;

  const markdownResponse = await fetch(entry.path);
  const markdown = markdownResponse.ok ? await markdownResponse.text() : '_Contenuto non disponibile._';
  document.getElementById('module-content').innerHTML = mdToHtml(markdown);

  if (entry.quiz) {
    const quizResponse = await fetch(entry.quiz);
    if (quizResponse.ok) {
      renderQuiz(await quizResponse.json(), id);
    }
  }
}

function renderQuiz(quiz, moduleId) {
  const section = document.getElementById('quiz-section');
  section.hidden = false;

  const form = document.getElementById('quiz-form');
  form.innerHTML = quiz.questions
    .map(
      (q, qi) => `
    <fieldset>
      <legend>${escapeHtml(q.question)}</legend>
      ${q.options
        .map(
          (opt, oi) => `<label><input type="radio" name="q${qi}" value="${oi}"> ${escapeHtml(opt)}</label><br>`,
        )
        .join('')}
    </fieldset>`,
    )
    .join('');

  document.getElementById('quiz-submit').addEventListener('click', () => {
    let correct = 0;
    quiz.questions.forEach((q, qi) => {
      const checked = form.querySelector(`input[name="q${qi}"]:checked`);
      if (checked && Number(checked.value) === q.correctIndex) correct += 1;
    });
    const score = Math.round((correct / quiz.questions.length) * 100);
    const passScore = quiz.passScore ?? 70;
    const passed = score >= passScore;

    const result = document.getElementById('quiz-result');
    result.textContent = `Punteggio: ${score}% (${correct}/${quiz.questions.length}) — soglia richiesta ${passScore}% — ${passed ? 'superato' : 'non superato'}`;
    result.style.color = passed ? '#0a7' : '#c33';

    const completeLink = document.getElementById('complete-link');
    const issueUrl = new URL(REPO_ISSUE_NEW_URL);
    issueUrl.searchParams.set('template', 'complete-course.yml');
    issueUrl.searchParams.set('course', moduleId);
    issueUrl.searchParams.set('quiz-score', String(score));
    completeLink.href = issueUrl.toString();
    completeLink.hidden = false;
  });
}

// Parser Markdown minimale e senza dipendenze: sufficiente per titoli, elenchi,
// tabelle, grassetto/corsivo, link e immagini. Il testo viene sempre escapato
// prima di inserire i tag generati, per evitare injection di HTML arbitrario.
function mdToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  let html = '';
  let inList = null;
  let paragraph = [];
  let i = 0;

  function flushParagraph() {
    if (paragraph.length) {
      html += `<p>${inline(paragraph.join(' '))}</p>\n`;
      paragraph = [];
    }
  }

  function closeList() {
    if (inList) {
      html += `</${inList}>\n`;
      inList = null;
    }
  }

  function inline(text) {
    let t = escapeHtml(text);
    t = t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_m, alt, url) => {
      const safeUrl = url.trim();
      if (/^(https?:|\.{0,2}\/)/.test(safeUrl) && !safeUrl.includes('...')) {
        return `<img src="${safeUrl}" alt="${alt}" loading="lazy">`;
      }
      return alt ? `<em>[immagine: ${alt}]</em>` : '';
    });
    t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, text, url) => `<a href="${url.trim()}" target="_blank" rel="noopener">${text}</a>`);
    t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    t = t.replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, '$1<em>$2</em>');
    return t;
  }

  while (i < lines.length) {
    const line = lines[i];

    if (/^\s*$/.test(line)) {
      flushParagraph();
      closeList();
      i += 1;
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      closeList();
      const level = heading[1].length;
      html += `<h${level}>${inline(heading[2])}</h${level}>\n`;
      i += 1;
      continue;
    }

    const unordered = line.match(/^\s*[-*]\s+(.*)$/);
    const ordered = line.match(/^\s*\d+\.\s+(.*)$/);
    if (unordered || ordered) {
      flushParagraph();
      const tag = unordered ? 'ul' : 'ol';
      if (inList !== tag) {
        closeList();
        html += `<${tag}>\n`;
        inList = tag;
      }
      html += `<li>${inline((unordered || ordered)[1])}</li>\n`;
      i += 1;
      continue;
    }

    const isTableSeparator = (l) => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(l);
    if (line.includes('|') && lines[i + 1] && isTableSeparator(lines[i + 1])) {
      flushParagraph();
      closeList();
      const headerCells = line.split('|').map((c) => c.trim()).filter(Boolean);
      html += `<table><thead><tr>${headerCells.map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>\n`;
      i += 2;
      while (i < lines.length && lines[i].includes('|')) {
        const cells = lines[i]
          .split('|')
          .map((c) => c.trim())
          .filter((c, idx, arr) => !(idx === 0 && c === '') && !(idx === arr.length - 1 && c === ''));
        html += `<tr>${cells.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>\n`;
        i += 1;
      }
      html += '</tbody></table>\n';
      continue;
    }

    paragraph.push(line.trim());
    i += 1;
  }
  flushParagraph();
  closeList();
  return html;
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

main().catch((error) => {
  document.getElementById('module-title').textContent = 'Errore nel caricamento del modulo.';
  console.error(error);
});
