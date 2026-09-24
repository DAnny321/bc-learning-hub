# BC Learning Hub

Piattaforma di formazione mirata per risorse Business Central, **100% GitHub-native**: nessun server, nessun database esterno, nessuna integrazione con BC. Vedi il piano completo discusso in chat per il contesto architetturale.

## Come funziona

- I dati (persone, progetti, catalogo corsi) sono file JSON versionati in git → tracciabilità gratuita via storico commit/issue.
- Le **scritture** (competenze progetto, assegnazione corso, completamento corso) avvengono aprendo una Issue con un template dedicato (`.github/ISSUE_TEMPLATE/`). Una GitHub Action legge l'issue, aggiorna il file JSON corretto, commenta e chiude l'issue.
- Il **catalogo Microsoft Learn** viene sincronizzato automaticamente ogni settimana (`.github/workflows/sync-learn-catalog.yml`) tramite la Microsoft Learn Catalog API pubblica.
- I **manuali interni** (Word/Excel/PowerPoint/PDF) si convertono automaticamente in moduli Markdown: basta trascinarli in `content/internal/_incoming/` (vedi sezione dedicata sotto).
- La **dashboard statica** (`site/`) viene rigenerata a ogni push su `main` e pubblicata su GitHub Pages.

## Struttura

```
catalog/                     catalogo corsi (Learn, moduli interni, Applied Skills)
content/internal/_incoming/  drop-zone: trascina qui i manuali Word/Excel/PDF originali
content/internal/_originals/ archivio degli originali dopo la conversione
content/internal/<modulo>/   modulo generato: module.md + quiz.json
projects/                    un file JSON per progetto: competenze richieste
people/                      un file JSON per risorsa: corsi assegnati/completati
scripts/                     script Node usati dalle GitHub Action
site/                        dashboard statica (HTML/JS vanilla) pubblicata su GitHub Pages
.github/                     Issue Form + workflow di automazione
```

## Come aggiungere un manuale interno (Word/Excel/PowerPoint/PDF)

1. Vai su `content/internal/_incoming/` nel repo, **Add file → Upload files**, e trascina il manuale (`.docx`, `.xlsx`, `.pptx`, `.pdf`).
2. Il push attiva `.github/workflows/convert-internal-manuals.yml`, che usa [MarkItDown](https://github.com/microsoft/markitdown) (tool open source Microsoft) per convertirlo in Markdown.
3. Il workflow crea automaticamente `content/internal/<modulo>/module.md`, uno stub di `quiz.json` da rifinire, aggiorna `catalog/internal-docs.json` e sposta l'originale in `content/internal/_originals/`.
4. Rifinisci il testo generato e le domande del quiz con una normale pull request.

Formati legacy (`.doc`/`.xls`/`.ppt`) non sono supportati: risalva prima nel formato moderno equivalente.

## Come segnalare/assegnare formazione

Apri una nuova Issue nel repo scegliendo uno dei tre template:

1. **🏷️ Competenze richieste progetto** — il PM indica le tecnologie/competenze necessarie per un progetto.
2. **📚 Assegna corso a risorsa** — il PM assegna un corso specifico a una persona.
3. **✅ Segna completamento corso** — la risorsa registra ore dedicate, evidenza (Learn/Applied Skills) o punteggio quiz (contenuti interni).

Ogni issue viene processata automaticamente e chiusa; il diff del commit generato è l'evidenza di audit.

## Sviluppo/test locale

```powershell
node scripts/sync-learn-catalog.mjs      # aggiorna catalog/learn-modules.json
node scripts/build-dashboard-data.mjs    # rigenera site/data.json
# poi apri site/index.html in un browser (o servilo con un server statico)
```

## Scope escluso (volutamente, per questa POC)

- Nessuna integrazione con Business Central (associazioni progetto/risorsa gestite qui, manualmente).
- Nessun database esterno o servizio Azure.
- Agente AI di suggerimento automatico (gh-aw) e correzione quiz lato client: da implementare come iterazione successiva (struttura dati già pronta per accoglierli).
