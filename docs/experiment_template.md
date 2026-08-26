# ATHENA - Template Esperimento

## 1. Identificazione

| Campo | Valore |
| --- | --- |
| ID esperimento | `EXP-YYYY-NNN` |
| Titolo scenario |  |
| Data |  |
| Owner |  |
| Obiettivo |  |
| Ambito | Difensivo / simulato / tabletop / lab |

## 2. Scenario MDO

Descrizione sintetica:

```text
Inserire contesto, asset coinvolti, domini interessati, ipotesi di minaccia e vincoli operativi.
```

Domini coinvolti:

| Dominio | Coinvolto | Note |
| --- | --- | --- |
| Cyber |  |  |
| Land |  |  |
| Sea |  |  |
| Space |  |  |
| Air |  |  |

## 3. Diamond Model

| Vertice | Descrizione | Confidenza |
| --- | --- | --- |
| Adversary |  |  |
| Capability |  |  |
| Infrastructure |  |  |
| Victim |  |  |

## 4. Vettore Scenario `x`

### `co_v` - controlli vulnerati

| Controllo | Severita' 0-1 | Evidenza |
| --- | ---: | --- |
| `GV_OC` |  |  |
| `GV_RM` |  |  |
| `ID_AM` |  |  |
| `PR_AC` |  |  |
| `PR_DS` |  |  |
| `PR_PT` |  |  |
| `DE_CM` |  |  |
| `DE_AE` |  |  |
| `RS_AN` |  |  |
| `RS_CO` |  |  |
| `RS_MI` |  |  |
| `RC_RP` |  |  |

### `ca_exp` - capacita' offensive per dominio

| Dominio | Intensita' 0-1 |
| --- | ---: |
| Cyber |  |
| Land |  |
| Sea |  |
| Space |  |
| Air |  |

### `l_v` - livelli correnti/degradati

| Livello | Valore 0-5 | Note |
| --- | ---: | --- |
| Organization |  |  |
| Intelligence |  |  |
| Tool |  |  |

### `i_pos` - impatti negativi

| Dimensione | Impatto 0-1 | Note |
| --- | ---: | --- |
| Cognitive |  |  |
| Physical |  |  |
| Virtual |  |  |

## 5. Contromisure Candidate

| ID | Nome | Motivo candidatura | Vincoli | Approvazione umana |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## 6. Scoring

Pesi usati:

| Peso | Valore | Note |
| --- | ---: | --- |
| `w1_impact_gap` | 0.45 | gap tra impatto negativo e mitigazione attesa |
| `w2_control_residual` | 0.35 | controlli vulnerati non coperti |
| `w3_level_gap` | 0.20 | gap tra livello corrente e target |

Risultati:

| Rank | CM | Score | Costo | Tempo effetto | Impatto disponibilita' | Decisione |
| ---: | --- | ---: | ---: | --- | --- | --- |
| 1 |  |  |  |  |  |  |
| 2 |  |  |  |  |  |  |
| 3 |  |  |  |  |  |  |

## 7. Decisione Human-In-The-Loop

| Campo | Valore |
| --- | --- |
| Contromisura raccomandata |  |
| Approvata da |  |
| Override? | Si / No |
| Motivazione override |  |
| Rischio accettato |  |
| Condizioni di rollback |  |

## 8. Osservazioni Post-Esperimento

| Aspetto | Valutazione |
| --- | --- |
| Rischio residuo stimato |  |
| Evidenze mancanti |  |
| Controlli da migliorare |  |
| Dipendenze scoperte |  |
| Lezioni apprese |  |
| Aggiornamenti alla KB |  |

