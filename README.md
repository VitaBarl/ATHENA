# Knowledge Base ATHENA

Questa knowledge base traduce il framework ATHENA in una struttura operativa per sperimentare scenari di Multi-Domain Operations (MDO), valutare minacce multi-dominio e generare risposte difensive tramite contromisure cyber-oriented.

Fonte di riferimento: `OUP_Cybersecurity_MDO_SLR (8).pdf`, framework ATHENA - countermeAsures for THreat IntElligence in Multi-DomaiN operAtions.

## Obiettivo

ATHENA integra Cyber Threat Intelligence (CTI) e Cyber Risk Management (CRM) per supportare il ragionamento sulle contromisure in scenari MDO. La knowledge base serve a:

1. rappresentare uno scenario di minaccia come vettore multi-dimensionale;
2. associare lo scenario agli assi del framework ATHENA;
3. generare una lista di contromisure candidate;
4. calcolare il rischio residuo atteso;
5. produrre una raccomandazione human-in-the-loop, non automatica.

## Assi ATHENA

ATHENA modella le contromisure come relazione tra quattro assi:

| Asse | Significato | Valori canonici |
| --- | --- | --- |
| `P` | Cybersecurity process/function | `govern`, `detect`, `respond`, `prevent` |
| `D` | Defensive capability / operational domain | `cyber`, `land`, `sea`, `space`, `air` |
| `L` | Cybersecurity level | `organization`, `intelligence`, `tool` |
| `E` | Effect dimension | `physical`, `virtual`, `cognitive` |

La relazione generale e':

```text
ATHENA: P x D x L x E -> CC
```

dove `CC` e' l'insieme delle contromisure cyber-oriented applicabili in un contesto multi-dominio.

## Struttura Della KB

La KB aggiornata segue una struttura a layer coerente con il paper finale:

| Layer | Nome | Scopo |
| --- | --- | --- |
| `L0` | Source and evidence layer | fonti, evidenze, confidenza, assunzioni e limiti |
| `L1` | Threat model layer | Diamond Model: adversary, capability, infrastructure, victim |
| `L2` | ATHENA tensor layer | relazione `P x D x L x E -> CC` e vettore scenario `x` |
| `L3` | Scenario and case layer | scenari, case NATO/CCDCOE, timeline e sotto-scenari |
| `L4` | Decision and response layer | scoring, vincoli, ranking e validazione human-in-the-loop |

Nel file JSON questa struttura e' disponibile nel blocco `kb_architecture`; nella dashboard e' visibile nella sezione `Knowledge Base`.

## Framework Concettuali Collegati

Oltre ad ATHENA, la KB contiene un blocco `kb_architecture.conceptual_frameworks` per framework usati nella definizione degli scenari. Il primo framework aggiunto e':

| Framework | Uso nella KB |
| --- | --- |
| `NATO MDO Unified Framework` | Estende la definizione scenario con domini operativi NATO, strumenti DIME, integrazione cross-domain, effetti sincronizzati, information/decision superiority, agility/adaptability e orchestration |

Questa estensione consente di descrivere uno scenario non solo come vettore ATHENA `x=(co_v, ca_exp, l_v, i_pos)`, ma anche come contesto MDO: domini coinvolti, strumenti diplomatic/information/military/economic, meccanismi MDO e condizioni di operationalization.

## Modello Di Minaccia

La KB usa il Diamond Model of Intrusion Analysis:

| Vertice | Domande guida |
| --- | --- |
| `adversary` | Chi e' l'attore? Quali obiettivi strategici persegue? |
| `capability` | Quali capacita' offensive usa e su quali domini? |
| `infrastructure` | Quali sistemi, asset o dipendenze sfrutta? |
| `victim` | Quale organizzazione civile/militare subisce l'impatto? |

## Rappresentazione Dello Scenario

Uno scenario attivo e' codificato come:

```text
x = (co_v, ca_exp, l_v, i_pos)
```

| Campo | Descrizione | Scala consigliata |
| --- | --- | --- |
| `co_v` | controlli vulnerati o aggirati | 0.0 - 1.0 |
| `ca_exp` | capacita' offensive sfruttate per dominio | 0.0 - 1.0 |
| `l_v` | degradazione dei livelli organizzazione/intelligence/tool | 0.0 - 5.0 |
| `i_pos` | impatto negativo su cognitive/physical/virtual | 0.0 - 1.0 |

## Rappresentazione Della Contromisura

Una contromisura candidata e' codificata come:

```text
CM = (co_app, ca_def, l_target, i_target)
```

| Campo | Descrizione |
| --- | --- |
| `co_app` | controlli da applicare o rafforzare |
| `ca_def` | capacita' difensive da attivare per dominio |
| `l_target` | livello di maturita' desiderato per organization/intelligence/tool |
| `i_target` | mitigazione positiva attesa sulle dimensioni cognitive/physical/virtual |

## Scoring

La KB adotta una regola di scoring coerente con ATHENA:

```text
S(CM | x) =
  w1 * ||i_pos - i_target||2
  + w2 * ||co_v * (1 - co_app)||1
  + w3 * ||l_v - l_target||2
```

La contromisura raccomandata e' quella con rischio residuo minore, rispettando vincoli di costo, tempo e disponibilita' operativa:

```text
CM* = argmin R_res(CM | x), con Cost(CM) <= B
```

## Workflow Sperimentale

1. Definire scenario e asset multi-dominio.
2. Compilare il modello Diamond.
3. Codificare `co_v`, `ca_exp`, `l_v`, `i_pos`.
4. Selezionare contromisure candidate dal catalogo.
5. Calcolare score e vincoli.
6. Restituire ranking e motivazione.
7. Far validare la scelta da un esperto.
8. Registrare esito, rischio residuo e lezioni apprese.

## Inserimento di un nuovo scenario

La voce `Nuovo Scenario` della dashboard permette di creare casi aggiuntivi senza modificare lo schema della KB. Il modulo acquisisce contesto, asset, capability offensiva e i quattro vettori `cov`, `caexp`, `lv` e `ipos`.

Prima delle contromisure viene calcolato un indicatore di rischio lordo su scala 0-100:

```text
GrossRisk = 0.25 * mean(cov)
          + 0.25 * mean(caexp)
          + 0.35 * mean(ipos)
          + 0.15 * mean((5 - lv) / 5)
```

Lo scenario viene quindi valutato dal normale motore di scoring ATHENA per produrre il ranking delle contromisure. Gli scenari creati sono conservati nel browser locale e identificati come `custom` nel selettore della console.

## Navigazione multipagina e framework

Ogni voce della barra laterale apre una pagina interna dedicata della dashboard; una sola pagina e' visibile alla volta e l'indirizzo mantiene l'identificativo della vista, ad esempio `#ranking` o `#kg-schema`.

I framework dispongono di pagine autonome:

- `DISARM` — minacce informative e cognitive;
- `MITRE ATT&CK` — tattiche e tecniche cyber;
- `MITRE ATLAS` — minacce AI/ML;
- `ESA SPACE-SHIELD` — minacce space e ground segment;
- `NATO MDO` — case study e orchestrazione multi-dominio.

Ogni pagina mostra soltanto il mapping del proprio framework, i domini coperti, le contromisure ATHENA collegate e le corrispondenze con lo scenario selezionato.

## Simulation dinamica per scenario

La pagina `Simulation` ricostruisce la cascata per lo scenario selezionato, compresi gli scenari `custom`. La sequenza non usa un copione fisso: deriva dinamicamente sette fasi dai valori `cov`, `caexp`, `lv` e `ipos`:

1. baseline di asset e missione;
2. rilevazione dei controlli maggiormente compromessi;
3. esposizione nel dominio dominante;
4. propagazione verso i domini secondari;
5. cascata degli effetti virtuali, cognitivi e fisici;
6. rischio lordo e validazione expert-in-the-loop;
7. risposta ATHENA con le prime tre contromisure ricalcolate per lo scenario.

Il diagramma, la timeline, le barre di impatto e il punteggio residuo finale vengono aggiornati a ogni cambio di scenario.

## File

| File | Uso |
| --- | --- |
| `athena_kb.yaml` | Ontologia, controlli, scenari, contromisure e scoring in formato strutturato |
| `experiment_template.md` | Scheda da compilare per ogni esperimento |
| `response_playbook.md` | Playbook operativo per risposta e validazione delle contromisure |

## Knowledge Graph Schema v0.1

La dashboard include una vista `KG Schema v0.1` che formalizza la separazione fra OpenCTI e ATHENA, il catalogo delle classi, le cardinalita', la pipeline di reasoning e la ricostruzione dello stato `x = (cov, caexp, lv, ipos)`.

I file di popolamento universale sono disponibili nella cartella `data/`:

- `ATHENA_Universal_Population_Schema_v0.1.csv` — intestazione canonica NODE/EDGE in formato EAV;
- `ATHENA_Relationship_Schema_v0.1.csv` — relazioni ammesse e cardinalita';
- `ATHENA_Controlled_Vocabularies_v0.1.csv` — domini, processi, livelli, effetti, assertion e decision type.
