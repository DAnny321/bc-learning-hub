# BC Learning Hub

Piattaforma di formazione mirata per risorse Business Central, **100% GitHub-native**: nessun server, nessun database esterno, nessuna integrazione con BC. Vedi il piano completo discusso in chat per il contesto architetturale.

## Come funziona

- I dati (persone, progetti, catalogo corsi) sono file JSON versionati in git → tracciabilità gratuita via storico commit/issue.
- Le **scritture** (competenze progetto, assegnazione corso, completamento corso) avvengono aprendo una Issue con un template dedicato (`.github/ISSUE_TEMPLATE/`). Una GitHub Action legge l'issue, aggiorna il file JSON corretto, commenta e chiude l'issue.
- Il **catalogo Microsoft Learn** viene sincronizzato automaticamente ogni settimana (`.github/workflows/sync-learn-catalog.yml`) tramite la Microsoft Learn Catalog API pubblica.
- La **dashboard statica** (`site/`) viene rigenerata a ogni push su `main` e pubblicata su GitHub Pages.

## Struttura

```
catalog/           catalogo corsi (Learn, moduli interni, Applied Skills)
content/internal/  manuali interni migrati da DevOps, come moduli formativi + quiz
projects/          un file JSON per progetto: competenze richieste
people/            un file JSON per risorsa: corsi assegnati/completati
scripts/           script Node usati dalle GitHub Action (nessuna dipendenza esterna)
site/              dashboard statica (HTML/JS vanilla) pubblicata su GitHub Pages
.github/           Issue Form + workflow di automazione
```

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
