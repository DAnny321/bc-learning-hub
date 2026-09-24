_[immagine non convertita: Immagine che contiene Elementi grafici, Carattere, logo, design Descrizione generata automaticamente]_

MANUALE

Provision And Operation Management

Sommario

[1 Introduzione 3](#_Toc234569782)

[2 Gestione competenze 3](#_Toc234569783)

[2.1 Setup piano dei conti 3](#_Toc234569784)

[2.2 Consenti registrazione competenza da – a 3](#_Toc234569785)

[2.3 Controllo competenze su reg. COGE 3](#_Toc234569786)

[2.4 Correzione date di competenza doc. registrati 4](#_Toc234569787)

[2.5 Gestione date di competenza sui movimenti C/G 4](#_Toc234569788)

[2.6 Gestione date di competenza sui progetti 6](#_Toc234569789)

[3 Gestione Extracontabile 7](#_Toc234569790)

[3.1. Registrazioni di prima nota 8](#_Toc234569791)

[3.2. Ammortamenti in E.C 11](#_Toc234569792)

[3.3. Funzionalità Pagina Movimenti E.C (POM) 13](#_Toc234569793)

[3.4. Report finanziari (ex Situazioni contabili) e Analisi per dimensioni 14](#_Toc234569794)

[3.5.1. Report finanziari (ex Situazioni contabili) 14](#_Toc234569795)

[3.5.2. Analisi per dimensioni 15](#_Toc234569796)

[3.5.3. Stampe con E.C 16](#_Toc234569797)

[4 Accantonamenti a FDR/NDR e FDE/NDE 18](#_Toc234569798)

[4.1 Nr. Serie procedure automatiche 18](#_Toc234569799)

[4.2 Cat. Registrazione Clienti-Fornitori 19](#_Toc234569800)

[4.3 Setup generale E.C. (POM) 19](#_Toc234569801)

[4.4 Fatture e note credito da ricevere e Fatture e note credito da emettere 24](#_Toc234569802)

[4.5 Chiusura Fatture/Note credito da ricevere e Fatture/Note credito da emettere 27](#_Toc234569803)

[5 Risconti e Ratei 29](#_Toc234569804)

[5.1. Setup generale E.C. (POM) 29](#_Toc234569805)

[5.2 Gestione risconti 30](#_Toc234569806)

[5.2.1. Funzionalità calcolo risconti fine anno 31](#_Toc234569807)

[5.2.2. Funzionalità calcolo mensile dei risconti 32](#_Toc234569808)

[5.3 Gestione ratei 33](#_Toc234569809)

[5.3.1. Calcolo dei ratei 33](#_Toc234569810)

[6 Integrazioni e novità 34](#_Toc234569811)

[6.1 Budget Control 34](#_Toc234569812)

[6.2 Integrazione con app Extended Puchasing Cycle Management 35](#_Toc234569813)

[6.3 Ruolo dedicato alla gestione Extra-Contabile 35](#_Toc234569814)

# Introduzione

L’obiettivo del seguente manuale è quello di descrivere la soluzione Agic realizzata per gestire su Business Central:

* il principio di competenza, grazie all’introduzione delle date di inizio e fine competenza;
* il modulo Extracontabile (scritture di contabilità analitica che da ora in poi chiameremo EC);
* le procedure di accantonamento quali:
* Fatture da Ricevere/Emettere
* Ratei
* Risconti.

# Gestione competenze

Tale modulo introduce le date di inizio e fine competenza sui documenti provvisori e registrati grazie alle quali è possibile assegnare ad una scrittura contabile la reale competenza; tali date inoltre sono propedeutiche ed indispensabili al lancio delle funzionalità degli Accantonamenti a Fatture/Note credito da ricevere e delle fatture/note credito da emettere (da questo momento per abbreviare verranno chiamate FDR e FDE), al calcolo dei Ratei e dei Risconti.

## Setup piano dei conti

Per accedere ai setup del piano dei conti, ricercare sulla barra di ricerca “Piano dei conti” e per ogni conto interessato alla voce gestione competenze,è possibile configurare i seguenti setup:

![](data:image/png;base64...)

1. Setup competenze: Indicare se per il conto in esame la valorizzazione delle date competenza è:
   * Opzionale: in questo caso il sistema non effettuerà nessun controllo di valorizzazione date competenza;
   * Mai: In questo caso il sistema controllerà se le date competenza sono valorizzate e nel caso in cui siano valorizzate restituirà un messaggio di errore;
   * Sempre: In questo caso il sistema controllerà se le date competenza sono valorizzate e nel caso in cui NON siano valorizzate restituirà un messaggio di errore.
2. Tipologia di conto: Indicare se si tratta di un conto di “Costo” o di “Ricavo”; questa voce riguarda i conti di natura economica.

## Consenti registrazione competenza da – a

Tramite dei setup dedicati, è possibile configurare sul sistema dei range di date ammissibili per le date di competenza.

Tale configurazione è gestita con le stesse logiche standard presenti in “Setup Utente” e/o “Setup Contabilità Generale”, sui campi “Consenti Registrazione da-a”: impostando dei limiti di date, o sull’utente (livello più basso) o in S.C.G., in fase di registrazione il sistema effettua un controllo se le date inserite soddisfano il limite temporale impostato.

Qualora le date utilizzate non fossero coerenti, verrà restituito un messaggio di errore bloccante.

## Controllo competenze su reg. COGE

Per vari motivi può nascere l’esigenza su alcune registrazioni di giornale generale, di disattivare il controllo sulla valorizzazione delle date di competenza perché ad esempio coincidono con la data di registrazione. Per soddisfare tale requisito, è presente sui Batch di registrazione il setup “Disattiva Controllo Date Competenze” che se valorizzato, non blocca la registrazione delle righe presenti nel batch qualora non soddisfino la valorizzazione delle date.

## Correzione date di competenza doc. registrati

Il sistema offre la possibilità di modificare le date di competenza sui documenti già registrati a sistema. Mediante apposita action è quindi possibile modificare le stesse su documenti quali:

* Fatture di acquisto registrate;
* Fatture di vendita registrate;
* Ricezione acquisti registrate (Carichi);
* Spedizioni vendita registrate (Spedizioni);
* Carichi da reso;
* Spedizioni da reso;

La modifica è gestita dalla funzione “Modifica date competenza” presente sulle righe dei documenti registrati.

![Immagine che contiene tavolo  Descrizione generata automaticamente](data:image/png;base64...)

Il sistema apre una page con tutte le righe del documento, dalla quale è possibile modificare le date:

![Immagine che contiene tavolo  Descrizione generata automaticamente](data:image/png;base64...)

In fase di modifica delle date scattano i seguenti controlli:

* Data inizio non può essere minore di data fine;
* Controllo su date ammissibili per registrazione (Setup cont. generale e/o Setup Utente);
* Il documento non deve essere stato:
  + ***Riscontato***à fatture attive e passive;
  + ***Accantonato*** à carichi/spedizioni.

È possibile altresì modificare le date dalla tabella dei movimenti C/G utilizzando la funzione standard “***Modifica lista***”.

## Gestione date di competenza sui movimenti C/G

Nel Setup Generale E.C è possibile scegliere se riportare le date di competenza nella tabella dei movimenti di contabilità generale.

![Immagine che contiene testo, schermata, linea, Carattere  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

Valorizzando il campo “**Differenzia Mov. Cont. per Date competenza**” il sistema riporta per ogni riga le date di competenza. Non verrà quindi operato l’accorpamento per conto che esiste nelle logiche standard del sistema.

Di seguito un esempio.

* Righe di fattura passiva:

![Immagine che contiene testo  Descrizione generata automaticamente](data:image/png;base64...)

* Movimenti C/G con flag “Differenzia Mov. Cont. per Date competenza” = “Sì”:

![Immagine che contiene tavolo  Descrizione generata automaticamente](data:image/png;base64...)

Come è possibile notare dalla figura in alto, il sistema ha creato 3 righe riferite al conto “8310” (essendo le date di competenza tutte diverse) e 1 riga accorpata per il conto 7120 (essendo le date di competenza uguali).

## Gestione date di competenza sui progetti

All’interno del Setup generale E.C. è inoltre possibile gestire le competenze sui progetti nella sezione “Gestione progetti”.

È stato introdotto il campo “Nascondi data competenza su modulo progetti” che permette di nascondere nelle righe di pianificazione dei progetti i campi “Data inizio/fine competenza”:

![](data:image/png;base64...)

Non attivando il flag si ha la possibilità di visualizzare e compilare i campi in oggetto.

In questo modo le date di competenza verranno ereditate nei rispettivi campi quando viene generata la fattura e batch a partire dalla riga di pianificazione di progetto:

![](data:image/png;base64...)

![](data:image/png;base64...) ![](data:image/png;base64...)

# Gestione Extracontabile

Con il modulo Extracontabile si ha la possibilità di effettuare delle registrazioni che non avranno impatto sulla contabilità standard ma solo su un’ambiente extracontabile/analitico dedicato. Le registrazioni che possono esser effettuate in ambiente E.C. sono:

* Registrazioni di prima nota;
* Fatture e note credito acquisto;
* Fatture e note credito vendita.

La differenza principale tra scritture standard in contabilità e le scritture in extracontabile (riguardando fatti previsionali o semplicemente non ancora definitivi) è quindi che quest’ultime possono esser stornate e/o registrate a piacimento, dando la possibilità così agli utenti di effettuare simulazioni, previsioni e/o accantonamenti.

Per quanto riguarda il piano dei conti, tali registrazioni possono esser consultate sia dalla scheda del conto e/o dalla lista utilizzando i campi dedicati:

* Saldo EC;
* Saldo Periodo EC;

![Immagine che contiene testo, schermata, numero, Carattere  Descrizione generata automaticamente](data:image/png;base64...)

Come già anticipato, poiché è possibile registrare in EC anche fatture e note credito attive e passive, il saldo EC è presente oltre che sul piano dei conti, anche in anagrafica cliente e fornitore.

Ogni registrazione in EC (sia essa una prima nota o fattura/nota credito) viene storicizzata nella pagina “Registri E.C.” dalla quale è possibile navigare i movimenti e/o procedere allo storno (vedi paragrafo 3, storno).

NB: Sul Piano dei Conti sono stati aggiunti i campi del “Saldo cliente” e “Saldo fornitore” : tali i campi sono non visibili per cui, ove richiesti, occorre aggiungerli lato client.

## Registrazioni di prima nota

Per effettuare una registrazione di prima nota in E.C. è sufficiente lanciare la funzionalità di registrazione in provvisorio come da immagine seguente:

![](data:image/png;base64...)

Una volta effettuata la registrazione in provvisorio queste potranno esser consultate dalle liste:

* **Movimenti E.C**.: in questa pagina è presente la lista delle registrazioni effettuate

![Immagine che contiene tavolo  Descrizione generata automaticamente](data:image/png;base64...)

* **Registri Reg. E.C.**: in questa pagina è possibile verificare le registrazioni effettuate raggruappate per tipologia, utente, data di creazione.

![Immagine che contiene tavolo  Descrizione generata automaticamente](data:image/png;base64...)

Dai registri è possibile accedere in base alle scritture effettuate alle seguenti sezioni:

* Contabilità E.C;
* Movimenti contabili clienti E.C ;
* Movimenti contabili fornitori E.C;

Sia sui movimenti E.C. che sui registri sono presenti le seguenti fuzionalità di storno:

![](data:image/png;base64...)

Le due funzioni sono vincolate alla option presente nel Setup generale E.C:

![Immagine che contiene testo, Carattere, schermata, linea  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

Se in setup la option è “Cancella”:

* Storna e rigenera (Registo o Righe a seconda da dove viene eseguita) : con questa funzione è possibile eliminare i movimenti dall’E.C. e ripristinarli in temporaneo (nel caso di registrazioni COGE nel batch originario dal quale erano state registrate) così da poter procedere con la registrazione in contabilità.
* Storna righe E.C. (Registo o Righe a seconda da dove viene eseguita): i movimenti interessati vengono cancellati dal modulo E.C. senza lasciarne traccia a sistema.

Se in setup la option è “Storna con segno opposto”:

* Storna e rigenera (Registo o Righe a seconda da dove viene eseguita) : con questa funzione è possibile ripristinarli in temporaneo (nel caso di registrazioni COGE nel batch originario dal quale erano state registrate) e automaticamente verrà creato un movimento in E.C uguale e contrario.
* Storna righe E.C. (Registo o Righe a seconda da dove viene eseguita): i movimenti interessati vengono stornati con segno opposto ma non ricreati nel batch di origine.

![Immagine che contiene tavolo  Descrizione generata automaticamente](data:image/png;base64...)

**NB:** Nella lista “Movimenti EC” e nella lista “Registri Reg EC”, sono presenti due campi editabili (“Storna a data” e “Rigenera a Data”); nello specifico: “Storna a data”: consente di stornare in data diversa da quella della scrittura di partenza, “Rigenera a data”: consente di rigenerare le scritture sul batch ad una determinata data. Al fine di procedere con storni e rigenerazione delle scritture a date dedicate basterà popolare i suddetti campi.

![Immagine che contiene testo, Carattere, schermata, linea  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

**NB:** Le funzioni su descritte, se eseguite dalla pagina dei registri, hanno effetto su tutte le registrazioni coinvolte nel singolo/i registro/i selezionato.

**NB:** poiché il ripristino delle righe dall’EC al batch temporaneo non può gestire eventuali campi custom che in questo caso verrebbero persi, è possibile valorizzare sul batch il setup “Disabilita registrazioni EC” per evitare che da quel determinato batch vengano effettuate registrazioni simulate.

Per evitare invece che i movimenti creati su un determinato batch vengano registrati in contabilità ufficiale (COGE) è presente sul batch un flag denominato Disabilita registrazioni in CoGe che in caso di utilizzo del tasto standard “Registra”, restituisce un errore bloccante.

![](data:image/png;base64...)

Nota: È stata aggiunta la possibilità di lanciare la funzione “Registra in Provvisorio” anche dalla page “Registrazioni progetti in C/G”.

![Immagine che contiene testo, linea, schermata, Carattere  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

I movimenti registrati in provvisorio da tale batch vengono riportati nei Movimenti contabili progetto con i campi dedicati all’EC popolati (Nr. movimento EC, flag Movimento EC, Nr. transazione EC) e nei Movimenti contabili EC saranno specificate per tali registrazioni le informazioni di progetto e task.

## Ammortamenti in E.C

Il modulo consente di gestire anche la registrazione degli ammortamenti in simulato. L’utilizzo di tale funzionalità consente di poter registrare in E.C gli ammortamenti (ad esempio mensili) senza avere impatti sui movimenti di contabilità generale.

Per il calcolo degli ammortamenti seguire la procedura standard di Business Central, una volta generate le righe di ammortamento è possibile sfruttare la funzionalità “**Registra in provvisorio**” presente sul batch di “**Registrazioni cespiti in C/G**”:

![Immagine che contiene testo, linea, Carattere, schermata  Descrizione generata automaticamente](data:image/png;base64...)

Utilizzando la funzione il sistema registrerà le scritture di ammortamento in:

* Movimenti contabili cespiti;
* Movimenti E.C

![](data:image/png;base64...)

![](data:image/png;base64...)

L’effetto sul cespite è il decremento del valore per effetto dell’ammortamento registrato in simulato.

Dalla pagina dei movimenti E.C è possibile sfruttare la funzione “**Storna e rigenera movimenti E.C**” che provvede a:

* Cancellare il movimento contabile cespite precedentemente creato;
* Modificare il campo “**Data ultimo ammortamento**” sul registro beni ammortizzabili ripristinandola all’ultima data di ammortamento esistente sul cespite;
* Eliminare il movimento extracontabile;
* Ripristinare le righe di ammortamento precedentemente presenti in ambiente simulato sul batch di “**Registrazioni cespiti in C/G**”.

![Immagine che contiene testo, Carattere, linea, numero  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

Una volta ripristinate le scritture è possibile andare a registrare gli ammortamenti in contabilità generale mediante la funzione standard di registrazione.

## Funzionalità Pagina Movimenti E.C (POM)

Sulla pagina dei movimenti E.C è possibile eseguire le seguenti funzioni:

* Stornare/Rigenera movimenti E.C (Storna E.C): già dettagliate nei paragrafi precedenti;
* Edita lista: funzione che consente di editare il campo “Descrizione” dei movimenti E.C;
* Correggi dimensioni/Cronologia delle correzioni dimensioni: stesse logiche delle funzionalità standard per la correzione/eliminazione/aggiunta delle dimensioni dei movimenti registrati in ambiente simulato e per la visualizzazione delle modifiche.

![Immagine che contiene testo, Carattere, linea, numero  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

Nella pagina dei movimenti E.C sono inoltre stati aggiunti i campi:

* Nome conto C/G;
* Campi di collegamento dimensioni non globali.

![Immagine che contiene testo, Carattere, linea, schermata  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

## Report finanziari (ex Situazioni contabili) e Analisi per dimensioni

Le registrazioni extracontabili possono essere utilizzate come base dati per le analisi per dimensioni e/o le situazioni contabili arricchendo quindi tali strumenti con l’interrogazione del modulo E.C.

### 3.5.1. Report finanziari (ex Situazioni contabili)

Nella personalizzazione del layout colonna, è possibile selezionare come fonte dati anche i movimenti E.C.

*![Immagine che contiene testo, schermata, linea, numero  Descrizione generata automaticamente](data:image/png;base64...)*

Così facendo ad esempio si potrebbe creare una struttura di colonne del tipo:

1. Una colonna contenente i movimenti contabili;
2. Una colonna contenente i movimenti E.C.;
3. Una colonna che riporterà la somma dei due precedenti.

### 3.5.2. Analisi per dimensioni

Anche le analisi per dimensioni sono state integrate con il modulo Extracontabile e si può scegliere per ognuna di esse se includere, escludere o integrare l’analisi con i movimenti E.C.

![Immagine che contiene testo, schermata, Carattere, linea  Descrizione generata automaticamente](data:image/png;base64...)

Cliccando su Gestione à Modifica, sarà possibile visualizzare e gestire la sezione Mov. EC.

![Immagine che contiene testo, schermata, Carattere, numero  Descrizione generata automaticamente](data:image/png;base64...)

E nel dettaglio:

1. Gestione movimenti extra contabili, sarà possibile scegliere fra tre opzioni:

* Escludi movimenti E.C., non verranno inclusi i movimenti E.C.;
* Aggiungi movimenti E.C; saranno inclusi movimenti E.C;
* Solo movimenti E.C; sarà possibile vedere solo i movimenti E.C.;

1. Ultimo numero movimenti simulati, indica l’ultimo movimento EC presente nell’analisi.
2. Ultima data aggiornata simulati, indica l’ultima data in cui all’analisi è stata integrata con i movimenti E.C.
3. Ricalcola simulazioni, da utilizzare ad esempio nel caso in cui vengono effettuate delle cancellazioni in simulato; quindi, è necessario obbligare il sistema a rielaborare nuovamente i movimenti E.C. e creare una nuova base dati aggiornata.

### 3.5.3. Stampe con E.C

Con il modulo “E.C è possibile stampare i report:

* Bilancio di verifica E.C;
* Dettaglio bilancio di verifica E.C;
* Stampa con situazioni contabili E.C;
* Bilancio di verifica/budget E.C.

Per “Bilancio di verifica E.C” e “Dettaglio bilancio di verifica E.C”, ricercare il collegamento nella barra di ricerca come da figura:

![Immagine che contiene testo, schermata, Carattere, linea  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

Il report “Stampa con situazioni contabili E.C” è stampabile sia da lista che dalla scheda Report finanziari (ex Situazioni contabili):

![Immagine che contiene testo, Carattere, linea, numero  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

![Immagine che contiene testo, Carattere, numero, linea  Descrizione generata automaticamente](data:image/png;base64...)

Il report “Bilancio di verifica/budget E.C” sostituisce in automatico il report standard “Bilancio di verifica/budget”, <u>selezionando quest’ultimo viene eseguito quello custom</u>.

La funzione “Sintesi con EC”, raggiungibile dalla page “Report finanziari”, consente di accedere ad una pagina custom grazie alla quale è possibile visualizzare su colonne distinte, il saldo CG, il saldo E.C.,il saldo CG+EC.

![Immagine che contiene testo, linea, Carattere, schermata  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

![Immagine che contiene testo, schermata, numero, diagramma  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

Attenzione: è necessario utilizzare tale funzionalità in quanto dai report finanziari tale dettaglio non è, invece, visualizzabile.

![Immagine che contiene testo, ricevuta, linea, numero  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

# Accantonamenti a FDR/NDR e FDE/NDE

Tramite le funzionalità di calcolo degli accantonamenti, sarà possibile analizzare le spedizioni o i carichi registrati sui quali sono state specificate le date di competenza, senza le quali non sarebbe possibile competenziare gli importi registrati.

NB: durante il capitolo, si farà spesso riferimento ai documenti accantonati: con questa dicitura si intendono tutti i carichi/spedizioni standard o di reso, per i quali <u>è stato calcolato e registrato</u> l’accantonamento a FDR/NCR/FDE/NDE <u>con la modalità SENZA STORNO.</u>

Di seguito vengono dettagliati i setup necessari per lanciare le procedure di Accantonamento a FDR/NDR e FDE/NDE.

## Nr. Serie procedure automatiche

Le procedure di calcolo degli accantonamenti generano delle righe di registrazione di prima nota che devono esser consultate e registrate in contabilità o nel modulo extracontabile; tali righe potrebbero contenere dei salti o registrare non in sequenza, motivo per cui, per una corretta gestione e non avere blocchi in fase di registrazione, è necessario impostare sui batch dedicati a tali procedure un numero serie apposito che deve esser configurato dalla lista dei batch popolando il campo “Nr. Serie Procedure Autom.”.

![](data:image/png;base64...)

Successivamente sarà possibile aggiungere, nei campi sopracitati, i nr serie creati.

![Immagine che contiene testo, numero, Carattere, linea  Descrizione generata automaticamente](data:image/png;base64...)

## Cat. Registrazione Clienti-Fornitori

Accedere alle pagine di setup delle categorie di registrazione Clienti e Fornitori e compilare i campi relativi ai Conti FDR-NCR e FDE-NDE.

![Immagine che contiene testo, schermata, linea, numero  Descrizione generata automaticamente](data:image/png;base64...)

## Setup generale E.C. (POM)

In “Setup generale E.C. (POM)” è presente una sezione dedicata “Competenze”:

![](data:image/png;base64...)

Nel dettaglio:

* **Consenti registrazione competenze da-a**: come già dettagliato in precedenza, delimita il range ammissibile per date di competenza.
* **Tipologia calcolo**: con questo setup è possibile decidere se il calcolo deve essere normalizzato per mese (indipendentemente dal numero dei giorni 28/30/31) o per numero di giorni.
* **Normalizza date competenza (\*per ratei)**: flag che permette di normalizzare le date di competenza, cioè anche in presenza di date di competenza intermedie vengono trasformate e considerate per il calcolo le date di inizio o fine mese;
* **Gestione automatica di storni Fatture da ricevere - Fatture da emettere in registrazione doc**: la registrazione di una fattura/nota di credito attiva o passiva effettuata su un carico/spedizione standard o di reso precedentemente accantonati a FDR/FDE/NDR/NDE, avrebbe come effetto una doppia imputazione del costo/ricavo. Tramite questo setup invece è possibile scegliere che tipo di operazione deve compiere BC a valle della registrazione del documento:
  + ***Nessuna****:* registrazione resta totalmente standard e sarà quindi necessario lanciare manualmente il report per la chiusura delle FDR/NDR, FDE/NDE (VEDI PARAGRAFO dedicato);
  + ***Crea righe*:** verranno generate e non registrate (nel batch impostato a setup) le righe di storno a FDR/NDR, FDE/NDE; tali righe dovranno poi essere registrate manualmente direttamente dal batch;
  + ***Crea righe e registra*:** verranno create e registrate automaticamente le righe di chiusura a FDR/NDR e FDE e NDE.

**NB:** la creazione delle righe nel batch impostato a setup, avviene se e solo se la registrazione della fattura avviene tramite la funzione “Prendi righe di carico”. Nel caso in cui la registrazione avvenisse direttamente da ODA, le righe di storno dovranno essere create manualmente.

**NB1:** la creazione delle righe nel batch impostato a setup, avviene e solo se gli accantonamenti vengono eseguiti in modalità “senza storno”.

* **Def. registrazione FDR**: Template COGE che il sistema utilizzerà per depositare le scritture FDR/NDR;
* **Batch registrazione FDR**: batch in cui genereranno le righe una volta registrato il documento relativo alle fatture da ricevere;
* **Batch registrazione Chiudi FDR su FT-NC**: batch dedicato per gestire l’assegnazione di numerazione concorde fra FDR e fattura/nota di credito di riferimento al momento della chiusura dell’FDR;
* **Gestione cespiti su accantonamenti FDR**:
  + ***Escludi:*** il report “Accantonamenti FDR” non prenderà in considerazione le righe con Tipo Cespite;
  + ***Registra su cespite(\*):*** la funzionalità “Accantonamenti FDR” genererà le righe di accantonamento direttamente sul cespite origine movimentando quindi il modulo cespiti;
  + ***Registra su conto(\*):*** la funzionalità “Accantonamenti FDR” genererà le righe di accantonamento non sul cespite origine ma sul conto del costo di acquisto collegato alla categoria di registrazione del cespite;

***(\*)*** Qualora si decidesse di calcolare gli accantonamenti anche sui cespiti, è necessario attivare i seguenti setup sul registro beni ammortizzabili utilizzato:

![Immagine che contiene testo, schermata, numero, Carattere  Descrizione generata automaticamente](data:image/png;base64...)

* “Sottrai sconto in fattura acquisto", al fine di poter visualizzare l’eventuale sconto presente sull’accantonamento del cespite: gli sconti di riga e di fattura vengono sottratti dal costo di acquisto registrato per il cespite;
* “Consenti nr. Documenti identici”, al fine di registrare cespiti con stessa la stessa numerazione.
* **Def. registrazione FDE**: Template COGE che il sistema utilizzerà per depositare le scritture FDE/NDE;
* **Batch registrazione FDE**: batch in cui depositare le righe una volta registrato il documento relativo alla FDE/NDE;
* **Batch registrazione Chiudi FDE su FT-NC**: batch dedicato per gestire l’assegnazione di numerazione concorde fra FDE e fattura/nota di credito di riferimento al momento della chiusura dell’FDE;
* **Usa FDR/FDE su fatturare a/vendere a**: qualora nell’anagrafica di un cliente-fornitore i campi “vendere a”-“fatturare a” o “pagare a” – “acquistare da” differiscano, è necessario impostare quale anagrafica considerare per individuare il conto FDR/FDE/NCE/NCR:
  + ***Nr. fatturare a/pagare a:*** verrà utilizzato il conto degli accantonamenti relativo al cliente/fornitore per cui si fattura/paga per depositare le scritture.
  + ***Nr. vendere a/acquistare da***: verrà utilizzato il conto degli accantonamenti relativo al cliente/fornitore per cui si vende/acquista per depositare le scritture.
* **Controlla modifiche su doc. acquisto accantonati**: tramite questo setup possono essere inibite le modifiche manuali (che impattano l’importo riga) sulle fatture o note di credito provvisorie collegate ad un movimento di magazzino precedentemente accantonato. Nel dettaglio è possibile configurare:
  + ***Errore bloccante:*** apparirà un errore bloccante che non permetterà l’operazione di modifica;
  + ***Messaggio avviso:*** apparirà un messaggio di avviso che si sta modificando una collegata al documento accantonato;
  + ***Messaggio e conferma:*** apparirà un messaggio di avviso che necessita di conferma per proseguire l’operazione di modifica.
* **Controlla modifiche su righe giornali accantonati:** a valle del lancio delle funzionalità di accantonamento, ratei e risconti, vengono generate le righe di registrazione di prima nota e tramite questo setup è possibile applicare dei blocchi/alert:
  + ***Errore bloccante:*** apparirà un errore bloccante che non permetterà l’operazione di modifica;
  + ***Messaggio avviso:*** apparirà un messaggio di avviso che si sta modificando un documento che si sta per accantonare;
  + ***Messaggio e conferma:*** apparirà un messaggio di avviso che necessita di conferma per proseguire l’operazione di modifica del documento che sarà accantonato.
* **Controllo su annulla carichi-spedizioni accantonati**: qualora si voglia annullare un carico/spedizione che è stato già accantonato si può scegliere se generare:
  + ***Errore bloccante:*** apparirà un errore bloccante che non permetterà l’operazione di annullamento;
  + ***Messaggio avviso:*** apparirà un messaggio di avviso che si sta annullando un documento accantonato;
  + ***Messaggio e conferma:*** apparirà un messaggio di avviso che necessita di conferma per proseguire l’operazione di annullamento del documento accantonato.

**NB**: per i suddetti campi (Controlla modifiche su doc. acquisto accantonati, Controlla modifiche su righe giornali accantonati, Controllo su annulla carichi-spedizioni accantonati), il sistema propone di default “blank” ossia nessun controllo; qualora si utilizzino le funzionalità di accantonamento FDR/FDE e relativi storni, è consigliato vivamente di impostare <u>almeno</u> un messaggio di avviso all’utente selezionando l’opzione “Messaggio avviso” così da avere maggior contezza in caso vi fosse necessità di effettuare modifiche.

* **Gestione sconti riga su accantonamenti:** qualora vi sia uno sconto nel documento accantonato, è possibile scegliere come gestirli, e nel dettaglio:
  + ***Accantona netto:*** non verranno generate righe aggiuntive relative allo sconto ma l’intero importo sarà già al netto di quest’ultimo;
  + ***Accantona netto su stesso conto:*** qualora vi sia uno sconto nel documento accantonato, verranno generate separatamente (in base al setup) righe di accantonamento sul conto di costo/ricavo e sul conto di sconto riga.
* **Calcola ratei su doc. accantonati:** determinare se si vuole calcolare i ratei sulle righe di fatture/note credito collegate a documenti accantonati a FDR/NDR/FDE/NDE;
* **Calcola risconti su doc. accantonati:** determinare se si vuole calcolare i risconti sulle righe di fatture/note credito collegate a documenti accantonati a FDR/NDR/FDE/NDE;
* **Genera scritture sopravvenienza:** qualora le fatture/note credito collegate a documenti accantonati venissero registrate dopo aver modificato l’importo, tramite questo setup è possibile generare anche le scritture di sopravvenienze attive o passive a seconda delle caratteristiche del documento;
* **Usa conti di sopravvenienza:** determinare se si vuole avere dei conti dedicati alle sopravvenienze attive/passive;
* **Conto sopravvenienza attiva:** il numero del conto dedicato alle sopravvenienze attive;
* **Conto sopravvenienza passiva:** il numero del conto dedicato alle sopravvenienze passive;
* “**Utilizza conti di utile-perdita per rett. tassi di cambio**”**:** alla chiusura delle FDR/FDE, il sistema verifica e gestisce eventuali utili o perdite dovute ai tassi di cambio variati e li imputa sul conto di costo o ricavo utilizzato sulla scrittura. Attivare questo setup qualora si desideri utilizzare i conti di utile-perdita per la rettifica dei tassi di cambio.
* **Attiva gestione progetti su accantonamenti FDE:** attualmente non disponibile.
* **Attiva gestione progetti su accantonamenti FDR:** se valorizzato a TRUE consente gestione integrata con modulo commesse per cui viene riportato il nr. progetto e nr. task progetto nei documenti di acquisto e nella pagina Movimenti contabili progetto e in Movimenti E.C.(POM).
* **Calcola Ratei-Risconti-Acc. Su Addebito articolo**: Se valorizzato a TRUE consente di calcolare accantonamenti FDR/FDE e risconti su addebito articolo.

Nella page Movimenti contabili progetto sono stati aggiunti i seguenti campi attinenti alla gestione in ExtraContabile:

* Mov. E.C.: se valorizzato a True, identifica un movimento Extra contabile
* Nr. Mov. E.C.: identifica il numero di movimento in Extra Contabile
* Nr. transazione E.C.: identifica il numero transazione E.C.

![Immagine che contiene testo, schermata, linea, Carattere  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

Nota: in base a quanto configurato in Setup generale E.C. nel campo Gestione storno EC, si avrà cancellazione dei movimenti EC qualora si sia selezionato “Cancella”, oppure un movimento EC di segno opposto qualora si sia scelto “Storna con segno opposto”.

Sostanzialmente il comportamento sarà analogo a quanto dettagliato nel par.3.1 a proposito della cancellazione o record con segno opposto per stornare il record EC per cui si è operato lo storno.

Nelle righe di task di progetto sono stati aggiunti i seguenti campi calcolati:

* **Effettivo non E.C. (costo totale),**
* **Effettivo E.C. (costo totale),**
* **Effettivo non E.C. (prezzo totale),**
* **Effettivo E.C. (prezzo totale)**

![Immagine che contiene testo, linea, Carattere, numero  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)Grazie a tali campi è possibile avere contezza immediata di quanto è stato registrato nei movimenti contabili progetto per lo specifico task in maniera separata non in EC / in EC.

Cliccando su tali campi si accede ad una vista prefiltrata della page Movimenti contabili progetto.

## Fatture e note credito da ricevere e Fatture e note credito da emettere

Gli accantonamenti a FDR sono delle scritture di assestamento utilizzate per contabilizzare il costo della merce in attesa che venga emessa la fattura. Gli accantonamenti a FDE funzionano in modo analogo per le vendite.

Per accedere a questa schermata, cercare la pagina “Accantonamenti” e scegliere una delle due operazioni.

![Immagine che contiene testo, schermata, Carattere, linea  Descrizione generata automaticamente](data:image/png;base64...)

Cliccando su “Accantonamenti FDR”, si aprirà la seguente pagina, nella quale si dovranno impostare i parametri di lancio della procedura:

![Immagine che contiene testo, schermata, numero, Parallelo  Descrizione generata automaticamente](data:image/png;base64...)

* **Elabora:** possibile scegliere fra tre opzioni:
* ***Entrambi,*** si può optare per avere entrambe le opzioni sia carichi di acquisto che spedizioni di reso;
* ***Carichi acquisto,*** processa le righe di carico per le quali sono specificate le date di competenza;
* ***Spedizioni di reso,*** processa le righe di reso per le quali sono specificate le date di competenza;
* **Calcola accantonamento a data:** tale data viene utilizzata sia per filtrare i documenti selezionati (data di registrazione inferiore o uguale) sia come parametro di calcolo per le competenze.;
* Tipo Accantonamento:
  + ***Con storno:*** selezionarlo se si vuole far generare al sistema anche le righe di storno dell’accantonamento al primo del mese successivo al mese indicato nel campo “Accantonamento da calcolare a data”. (\*)
  + ***Senza storno***: se si seleziona questa opzione il sistema non effettuerà nessuna scrittura di storno. (\*)
* **Seleziona definizione registrazione:** scegliere il record da movimentare tra le varie soluzioni proposte;
* **Seleziona Batch registrazione:** Batch COGE che il sistema utilizzerà per depositare le scritture FDR/NDR;
* **Seleziona data registrazione prima nota:** Indicare la data di registrazione che il sistema deve utilizzare in fase di generazione della prima nota di accantonamento a FDR/NDR;
* **Crea file di log:** se valorizzato a “true”, al termine dell'elaborazione viene generato un file CSV contenente il dettaglio delle operazioni eseguite, con l'indicazione degli esiti e delle eventuali anomalie o errori riscontrati.

(\*)

Ad esempio prendiamo in considerazione un carico non fatturato di 12000€ con competenza da 01/01/N a 31/12/N, il calcolo al 31/01 genera:

* Con storno: impostando questo parametro viene accantonata solo la quota parte calcolata fino alla data di riferimento scelta, quindi 1000€ sul 31/01 e -1000€ sul 01/02
* Senza storno: impostando questo parametro viene accantonato tutta la riga; quindi, 12000€ sul 31/01 senza generare nessuno storno. Su questa registrazione sarà poi possibile calcolare i risconti per competenziare gli importi sui mesi restanti.

Il calcolo al 28/02 genera:

* Con storno: impostando questo parametro viene accantonata solo la quota parte calcolata fino alla data di riferimento scelta, quindi 2000€ sul 28/02 e -2000€ sul 01/03. Così facendo, combinando le scritture su febbraio, si avrebbe lo storno del -1000€ e l’accantonamento 2000€ generando così un netto di 1000€
* Senza storno: impostando questo parametro viene accantonato tutta la riga; quindi, 12000€ sul 28/02 senza generare nessuno storno. Su questa registrazione sarà poi possibile calcolare i risconti per competenziare gli importi sui mesi restanti.

Una volta impostati i “parametri di lancio”, è possibile lanciare la procedura che scorrerà tutte le righe di carichi e spedizioni da reso acquisti registrate NON ancora fatturate, rientranti nei filtri specificati nei parametri di lancio. Se non ci sono errori si creeranno le righe di registrazione di accantonamento su Template e batch indicati nei parametri su descritti.

![](data:image/png;base64...)

Quanto descritto, relativamente alla procedura di Accantonamenti FDR, vale in maniera speculare (per le vendite, e quindi su spedizioni di vendita) anche per la procedura di Accantonamenti FDE (fatture da emettere).

## Chiusura Fatture/Note credito da ricevere e Fatture/Note credito da emettere

Poiché le scritture a costo/ricavo sono state effettuate dalle procedure descritte nei paragrafi precedenti, la registrazione ad esempio della fattura di acquisto, genera una duplicazione dei costi. Quindi qualora il setup in “Setup generale E.C. (POM)” fosse impostato su **nessuna azione** allora è necessario la procedura di chiusura che stornerà il costo generato dalla registrazione della fattura di acquisto utilizzando come contropartita, ad esempio, il conto FDR per le fatture acquisto.

Per effettuare questa operazione, cercare nella barra di ricerca “chiudi fatture” e scegliere l’operazione che si desidera effettuare.

![](data:image/png;base64...)

Cliccando su “Chiudi FDR su fatture” si aprirà la seguente schermata:

![Immagine che contiene testo, schermata, numero, Carattere  Descrizione generata automaticamente](data:image/png;base64...)

I parametri di lancio sono i seguenti:

* **Elabora:** si può specificare quale tipo di documento si vuole chiudere cioè, Fatture o Note di credito oppure entrambi;
* **Usa data di registrazione fattura-nota di credito per storno:** se si vuole utilizzare la stessa data presente nel documento di Fattura/Nota di credito per la registrazione dello storno della Fatture da ricevere e Note credito da ricevere;
* **Data registrazione prima nota:** se il campo precedente non è valorizzato, è possibile scegliere la data per cui si vuole registrare lo storno della Fatture da ricevere e Note credito da ricevere;
* **Usa nr documento fattura-nota di credito:** se si vuole utilizzare lo stesso nr documento presente nel documento di Fattura/Nota di credito per la registrazione dello storno della Fatture da ricevere e Note credito da ricevere;
* **Accantonamento a data:** impostare la data limite relative alle quantità accantonate relativo al numero di Fatture/Note di credito;
* **Scelta Template:** Template COGE che il sistema utilizzerà per generare le scritture Fatture da ricevere e Note credito da ricevere;
* **Scelta Batch:** scegliere il Batch dove si vuole far depositare le righe relative alla chiusura dei documenti di Fatture da ricevere e Note credito da ricevere.

In maniera analoga è possibile lanciare la procedura relativa alla chiusura delle Fatture da emettere e Note credito da emettere. L’interfaccia del report è speculare a quella per la chiusura delle Fatture da ricevere e Note credito da ricevere.

# Risconti e Ratei

Le funzionalità di calcolo dei ratei e risconti, elaborano i documenti o le registrazioni di contabilità generale per le quali sono state specificate le date di competenza e generano delle scritture di prima nota che possono esser registrate in contabilità generale o in extracontabile.

Le righe generate dalle funzionalità di calcolo saranno visibili in consultazione nella maschera di lancio ma per procedere con la registrazione (sia essa in contabilità generale o in extracontabile) è obbligatorio accedere ai batch selezionati.

## 5.1. Setup generale E.C. (POM)

Prima di procedere con il calcolo, è necessario valorizzare i campi in “Setup generale E.C. (POM)” presenti nella sezione Ratei-Risconti:

![](data:image/png;base64...)

Nel dettaglio:

* **Def. Registrazione risconti:** specificare la definizione di registrazione per i risconti “mensili”; la selezione del batch è possibile direttamente al lancio della funzione.
* **Def. Registrazione risconti fine anno:** specificare la definizione di registrazione per i risconti “fine anno”; la selezione del batch è possibile direttamente al lancio della funzione.
* **Def. Registrazione ratei:** specificare la definizione di registrazione per i ratei; la selezione del batch è possibile direttamente al lancio della funzione.
* **Conto risconto passivo:** selezionare in questo campo il conto di contropartita da utilizzare per i risconti passivi;
* **Conto risconto attivo:** selezionare in questo campo il conto di contropartita da utilizzare per i risconti attivo;
* **Conto rateo attivo**: selezionare in questo campo il conto di contropartita da utilizzare per i ratei attivi;
* **Conto rateo passivo:** selezionare in questo campo il conto di contropartita da utilizzare per i ratei passivi;
* **Imputa ratei su mese precedente:** storna tutto ciò che non è di competenza e, invece di competenziarlo in base alla data di inizio competenza, viene ribaltato tutto sul mese precedente; tale gestione è ottimale qualora è prassi aziendale procedere con la chiusura mese/mese dei periodi.
* **Calcola Ratei-Risconti-Acc. Su Addebito articolo**: Se valorizzato a TRUE consente di calcolare ratei e risconti su addebito articolo.
* **Attiva gestione progetti su Risconti Vendite:** se valorizzato a TRUE consente gestione integrata con modulo commesse per cui viene riportato il nr. progetto e nr. task progetto nei documenti di vendita e nella pagina Movimenti contabili progetto e in Movimenti E.C.(POM).
* **Attiva gestione progetti su Risconti Acquisti:** se valorizzato a TRUE consente gestione integrata con modulo commesse per cui viene riportato il nr. progetto e nr. task progetto nei documenti di acquisto e nella pagina Movimenti contabili progetto e in Movimenti E.C.(POM).
* **Attiva gestione progetti su Ratei Vendite:** se valorizzato a TRUE consente gestione integrata con modulo commesse per cui viene riportato il nr. progetto e nr. task progetto nei documenti di vendita e nella pagina Movimenti contabili progetto e in Movimenti E.C.(POM).
* **Attiva gestione progetti su Ratei Acquisti:** se valorizzato a TRUE consente gestione integrata con modulo commesse per cui viene riportato il nr. progetto e nr. task progetto nei documenti di acquisto e nella pagina Movimenti contabili progetto e in Movimenti E.C.(POM).

Nota: i record registrati in E.C. saranno individuabili grazie ai campi in pagina Movimenti contabili progetto dedicati alla gestione Extra-Contabile.

![](data:image/png;base64...)

## 5.2 Gestione risconti

I risconti fanno parte delle scritture di rettifica, cioè un'altra applicazione del principio della competenza economica; sono infatti componenti di reddito che sono stati misurati da variazioni finanziarie, ma che non sono in tutto o in parte di competenza dell'esercizio in chiusura. Ai fini dell'applicazione del principio della competenza economica, occorre stornare tali quote agli esercizi successivi nonostante non siano di competenza dell'esercizio. I risconti possono essere definiti "valori economici" che, mentre rinviano al futuro il componente di reddito non di competenza, effettuano una "rettifica diretta" nel conto acceso al costo o ricavo nel quale il componente era stato registrato in contabilità generale. I risconti possono essere attivi e passivi (le definizioni inglesi aiutano nella comprensione):

* I risconti attivi (spese anticipate) sono dei costi già sostenuti ma di competenza di uno o più esercizi successivi;
* i risconti passivi (ricavi anticipati) sono dei ricavi già ottenuti ma di competenza di uno o più esercizi successivi.

Si parla di risconti attivi nel caso di un costo già sostenuto, ma da stornare in parte, in quanto parzialmente di competenza dell'esercizio successivo (es.: affitti e premi assicurativi pagati anticipatamente), mentre si avranno dei risconti passivi nel caso di un ricavo già conseguito, ma (parzialmente o totalmente) di competenza dell'esercizio successivo (es.: interessi attivi percepiti anticipatamente). Per loro natura, i risconti vengono quindi rilevati esclusivamente a fine esercizio cioè al (31/12/n), e per questo nella pratica ragionieristica vengono concettualmente compresi nelle cosiddette "operazioni di integrazione e di rettifica" che precedono la chiusura dei conti e la rilevazione del risultato economico.

In “Setup generale E.C. (POM)” è obbligatorio configurare preliminarmente il campo “Gestione Risconti” scegliendo tra:

1. **Fine anno,** scegliendo questa opzione, il calcolo considera tutto l’importo che non è di pertinenza del periodo, lo storna dallo stesso e lo ribalta al primo dell’anno successivo.

Ad esempio, se si lancia una scrittura al 31/12/N il sistema vede tutto ciò che non è di competenza di N, ma successivo, e lo ribalta al primo dell’anno N+1; questa modalità è tipica delle scritture di chiusura dell’esercizio che si effettuano in contabilità generale;

1. **Mensile,** con questa configurazione, tutto l’importo che ha una competenza successiva alla data di riferimento (scelta al lancio della funzione di calcolo) viene stornato dal mese di lancio e spalmato su ogni mese successivo (in base alle competenze presenti). Ad esempio, se la competenza è di due anni spalma l’importo per ogni singolo mese fino al raggiungimento della data di competenza (crea una riga per ogni mese); Le righe generate con questa configurazione tipicamente vengono registrate in extracontabile.
2. **Entrambi,** con questa configurazione, è necessario calcolare ogni mese i risconti “in simulato” (mensile) e registrarli nel modulo extracontabile; a fine anno poi, solo quelle già elaborate dalla gestione mensile verranno prese in considerazione dalla funzionalità e dovranno esser registrate in contabilità generale; in questa modalità, poiché le scritture di fine anno causerebbero una doppia imputazione (le scritture sono state competenziate in simulato con il calcolo mensile) vengono create automaticamente scritture opposte di storno da registrare in extracontabile.

![Immagine che contiene testo, Carattere, linea, numero  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

Nel setup è possibile scegliere, per acquisti e vendite, dove effettuare la verifica delle date di competenza.

Di seguito le option dei campi:

* Verifica competenze su acquisti à Carichi/Fatture;
* Verifica competenze su vendite à Spedizioni/Fatture.

Dopo aver impostato le modalità di calcolo per i risconti è possibile procedere al calcolo degli stessi.

Accedere quindi alla pagina “Gestione Risconti” dalla quale è possibile procedere con il calcolo mensile o di fine anno.

### 5.2.1. Funzionalità calcolo risconti fine anno

![Immagine che contiene testo, schermata, numero, linea  Descrizione generata automaticamente](data:image/png;base64...)

Nello specifico:

* + Selezionare (tramite flag) i documenti per i quali si intende calcolare i risconti di fine anno;
  + Anno di Riferimento, il campo va valorizzato per il calcolo a fine anno dei risconti: in base a questo parametro il sistema genera la data di fine anno (31/12/N) ed elabora tutti i documenti che hanno almeno una riga con competenza maggiore di 01/01/N+1
  + Batch mensile, questo parametro specifica il batch dove verranno depositate le scritture di riferimento e sarà obbligatorio solo se la gestione risconti è configurata su “Entrambi”.
  + Batch di fine anno: selezionare il batch dove si generano le scritture di fine anno;
* Tipo Operazione: tramite questo parametro è possibile aggiungere un filtro sul tipo operazione che verrà utilizzato per filtrare i documenti registrati e restringere così il set di dati elaborati (è possibile includere uno o più tipo operazione).

**NB:** nel caso in cui, sulle righe dei documenti, vengano utilizzati gli addebiti articolo per associare costi aggiuntivi, questi NON vengono considerati nella procedura di calcolo dei risconti.

**NB**: è possibile effettuare il calcolo dei risconti di fine anno anche su periodi contabili differenti (ad es. nel caso in cui il cliente abbia come anno fiscale una data diversa dal 31/12/N).

### 5.2.2. Funzionalità calcolo mensile dei risconti

Per il calcolo mensile dei risconti il procedimento è il medesimo illustrato nel capitolo precedente.

A differenza dei risconti di fine anno è possibile però scegliere la data dalla quale calcolare i risconti mediante il campo evidenziato in figura:

![Immagine che contiene testo, Carattere, linea, numero  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

Di seguito le opzioni del campo:

* Data riferimento à il sistema calcolerà gli importi in base alla data inserita nella maschera di lancio dei risconti (vedi figura a seguire);
* Data di registrazione à il sistema calcolerà gli importi in base alla data di registrazione del documento.

![Immagine che contiene testo, schermata, software, numero  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

Dalla quale è possibile:

* 1. Selezionare (tramite flag) i documenti per i quali si intende calcolare i risconti mensili;
  2. Impostare **Data di riferimento** alla quale calcolare il risconto à questo parametro verrà utilizzato per filtrare i documenti o registrazioni di prima nota che hanno data di registrazione minore o uguale e data di fine competenza maggiore della data scelta (<u>se in Setup E.C, Calcola risconti mensile da = Data riferimento</u>);
  3. Batch Mensile: selezionare il batch di riferimenti;
  4. Tipo Operazione: vedi paragrafo precedente;

**NB:** nel caso in cui, sulle righe dei documenti, vengano utilizzati gli addebiti articolo per associare costi aggiuntivi, questi NON vengono considerati nella procedura di calcolo dei risconti.

**NB1:** per le scritture di prima nota, vengono riscontati solo i movimenti aventi tipo documento = blank.

## 5.3 Gestione ratei

I **ratei** sono quote di entrate o uscite future che misurano ricavi o costi già maturati, ma non ancora rilevati, poiché la loro manifestazione finanziaria si verificherà in esercizi futuri. Si possono avere ratei attivi o ratei passivi. Quelli attivi misurano quote di ricavi, quelli passivi quote di costi. La quota di componente di reddito misurato dal rateo va imputata nel calcolo del risultato d'esercizio, anche se la sua manifestazione finanziaria avverrà in futuro.

* Il rateo attivo è la quota di ricavo di competenza dell'esercizio, la cui manifestazione finanziaria avverrà in un esercizio successivo.
* Il rateo passivo è la quota di costo di competenza dell'esercizio, che avrà la propria manifestazione finanziaria in un esercizio successivo.

In maniera speculare a quanto descritto per i risconti, è possibile Calcolare il valore dei ratei attivi e passivi e successiva generazione delle scritture COGE.

### 5.3.1. Calcolo dei ratei

Per procedere con il calcolo dei ratei, accedere alla pagina dedicata “Gestione Ratei”:

![Immagine che contiene testo, schermata, numero, Carattere  Il contenuto generato dall'IA potrebbe non essere corretto.](data:image/png;base64...)

Nel dettaglio:

* Selezionare su quali documenti si intende calcolare i ratei;
* “Data di riferimento”, indica la data che la funzione utilizza come parametro per filtrare i documenti (data di registrazione minore o uguale a data riferimento) e con data inizio competenza inferiore.
* Selezionare il Batch nel quale il sistema depositerà le scritture generate dalla procedura;
* Calcola ratei fino a, indica la data da cui partire per considerare i ratei.
* Lanciare la procedura cliccando su “Calcola”.

**NB:** nel caso in cui, sulle righe dei documenti, vengano utilizzati gli addebiti articolo per associare costi aggiuntivi, questi NON vengono considerati nella procedura di calcolo dei ratei.

**NB1:** per le scritture di prima nota, vengono considerati solo i movimenti aventi tipo documento = blank.

# Integrazioni e novità

## 6.1 Budget Control

Per i clienti che hanno installato anche l'app del “Budget Control” è disponibile l'app ponte grazie alla quale è possibile integrare le funzionalità delle due app per cui le operazioni di calcolo accantonamento, di ratei e risconti nonché le eventuali sopravvenienze che dovessero aver luogo vengono monitorate dal controllo budget con i relativi alert/ blocchi secondo le impostazioni indicate in "Setup Contabilità Generale".

L’integrazione delle due app viene gestita tramite flag posti in “Setup contabilità generale” nella sezione “Estensione Controllo budget”.

![Immagine che contiene testo, schermata, numero, Carattere  Descrizione generata automaticamente](data:image/png;base64...)

Nel dettaglio,

* **Assegna Budget Ordine su Sopravv**.: flag che consente di gestire la data di riferimento budget da utilizzare nel caso di sopravvenienze; in particolare, valorizzando a “True” tale flag, la data di riferimento budget che verrà considerata sarà quella dell’ordine originario e non della data di registrazione e rilevazione delle sopravvenienze;
* **Assegna Budget Ordine su rett. tassi di cambio**: flag che consente di gestire la data di riferimento budget da utilizzare nel caso di rettifiche del tasso di cambio nelle chiusure FDR; in particolare, valorizzando a “True” tale flag, la data di riferimento budget che verrà considerata sarà quella dell’ordine originario.
* **Assegna Budget Doc Origine su Risconti**: flag che consente di gestire la data di riferimento budget da utilizzare nel caso di calcolo risconti; in particolare, valorizzando a “True” tale flag, la data di riferimento budget che verrà considerata per la gestione del risconto sarà quella del documento originario, altrimenti verrà ricalcolata per ogni riga generata in base alla data di registrazione.
* **Assegna Budget Doc Origine su Ratei**: flag che consente di gestire la data di riferimento budget da utilizzare nel caso di calcolo ratei con le stesse logiche descritte per il flag “Assegna Budget Doc Origine su Risconti”.

## 6.2 Integrazione con app Extended Puchasing Cycle Management

Per i clienti che hanno installato anche l'app “Extended Puchasing Cycle Management”, l’integrazione delle due app fa sì che le date di competenza vengano riportate anche nelle pagine custom previste dal modulo del Ciclo passivo.

## 6.3 Ruolo dedicato alla gestione Extra-Contabile

È disponibile un ruolo dedicato alla gestione del modulo E.C. con creazione automatica del profilo PROVISIONIG\_OPERATION\_MNGT pagina id 66436.

![](data:image/png;base64...)
