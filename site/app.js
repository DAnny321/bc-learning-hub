async function main() {
  const response = await fetch('data.json', { cache: 'no-store' });
  const data = await response.json();

  document.getElementById('generated-at').textContent = data.generatedAt
    ? `Ultimo aggiornamento: ${new Date(data.generatedAt).toLocaleString('it-IT')}`
    : '';

  renderProjects(data.projects ?? []);
  renderPeople(data.people ?? []);
  renderLearnCatalog(data.catalog?.learn?.modules ?? []);
  renderInternalCatalog(data.catalog?.internal ?? []);
  renderAppliedSkills(data.catalog?.appliedSkills ?? []);
}

function renderProjects(projects) {
  const container = document.getElementById('projects');
  container.innerHTML = projects.map((project) => `
    <div class="card">
      <h3>${escapeHtml(project.name ?? project.id)}</h3>
      <p class="muted">Competenze richieste:</p>
      <ul>${(project.requiredSkills ?? []).map((skill) => `<li>${escapeHtml(skill)}</li>`).join('') || '<li>nessuna</li>'}</ul>
    </div>`).join('') || '<p class="muted">Nessun progetto censito.</p>';
}

function renderPeople(people) {
  const container = document.getElementById('people');
  container.innerHTML = people.map((person) => `
    <div class="card">
      <h3>${escapeHtml(person.displayName ?? person.id)}</h3>
      <p class="muted">Assegnati: ${person.assignedCourses?.length ?? 0} · Completati: ${person.completedCourses?.length ?? 0}</p>
      <ul>${(person.assignedCourses ?? []).map((c) => `<li>${escapeHtml(c.course)} ${c.project ? `(${escapeHtml(c.project)})` : ''}</li>`).join('')}</ul>
    </div>`).join('') || '<p class="muted">Nessuna risorsa censita.</p>';
}

function renderLearnCatalog(modules) {
  const tbody = document.querySelector('#learn-catalog tbody');
  tbody.innerHTML = modules.map((m) => `
    <tr>
      <td>${escapeHtml(m.title)}</td>
      <td>${escapeHtml(m.type)}</td>
      <td>${m.durationMinutes ?? '-'} min</td>
      <td><a href="${m.url}" target="_blank" rel="noopener">apri</a></td>
    </tr>`).join('') || '<tr><td colspan="4" class="muted">Catalogo non ancora sincronizzato.</td></tr>';
}

const REPO_BLOB_BASE = 'https://github.com/DAnny321/bc-learning-hub/blob/main/';

function renderInternalCatalog(docs) {
  const tbody = document.querySelector('#internal-catalog tbody');
  tbody.innerHTML = docs.map((d) => `
    <tr>
      <td>${escapeHtml(d.title)}</td>
      <td>${d.durationMinutes ?? '-'} min</td>
      <td>${d.quiz ? 'sì' : 'no'}</td>
      <td>${d.id ? `<a href="module.html?id=${encodeURIComponent(d.id)}">apri corso</a>` : '-'}</td>
    </tr>`).join('') || '<tr><td colspan="4" class="muted">Nessun modulo interno censito.</td></tr>';
}

function renderAppliedSkills(items) {
  const tbody = document.querySelector('#applied-skills-catalog tbody');
  tbody.innerHTML = items.map((s) => `
    <tr>
      <td>${escapeHtml(s.title)}</td>
      <td>${s.durationMinutes ?? '-'} min</td>
      <td><a href="${s.url}" target="_blank" rel="noopener">apri</a></td>
    </tr>`).join('') || '<tr><td colspan="3" class="muted">Nessuna Applied Skill censita.</td></tr>';
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

main().catch((error) => {
  document.body.innerHTML += `<p style="color:red">Errore nel caricamento dei dati: ${error.message}</p>`;
});
