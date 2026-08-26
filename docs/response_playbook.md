# ATHENA - Playbook Di Risposta Alle Contromisure

Questo playbook guida l'uso della knowledge base durante una sperimentazione difensiva. Le contromisure sono raccomandazioni di supporto decisionale: l'esperto mantiene autorita' finale, soprattutto in scenari critici, cross-domain o con impatto sulla disponibilita'.

## 1. Triage

1. Confermare che lo scenario sia simulato, tabletop, lab o difensivo.
2. Identificare asset multi-dominio e dipendenze operative.
3. Stabilire vincoli: budget, tempo, disponibilita', policy, autorita' legale.
4. Raccogliere evidenze minime: indicatori tecnici, segnali CTI, impatti operativi, stato asset.

Output atteso:

```text
scenario_id, domini coinvolti, asset critici, vincoli, confidenza iniziale
```

## 2. Mappatura ATHENA

Compilare:

| Oggetto | Domanda |
| --- | --- |
| `P` | Quali funzioni sono coinvolte: govern, detect, respond, prevent? |
| `D` | Quali domini operativi sono sfruttati o da difendere? |
| `L` | Il problema e' organizzativo, di intelligence, di tool, o combinato? |
| `E` | L'impatto e' fisico, virtuale, cognitivo, o combinato? |

Poi costruire:

```text
x = (co_v, ca_exp, l_v, i_pos)
```

## 3. Generazione Candidate

Selezionare dal catalogo tutte le contromisure con almeno una forte corrispondenza su:

1. dimensione di effetto impattata;
2. dominio operativo coinvolto;
3. controllo compromesso;
4. livello ATHENA degradato;
5. tempo massimo di risposta.

Per scenari a elevata incertezza includere sempre:

| Caso | Contromisura consigliata |
| --- | --- |
| Coordinamento multi-attore necessario | `CM-001` |
| Indicatori eterogenei o sospetta deception | `CM-002` |
| Impatto cognitivo o panico pubblico | `CM-005` |
| Propagazione tecnica in corso | `CM-003` |
| Ripristino servizi critici | `CM-008` |

## 4. Scoring E Ranking

Applicare:

```text
S(CM | x) =
  w1 * ||i_pos - i_target||2
  + w2 * ||co_v * (1 - co_app)||1
  + w3 * ||l_v - l_target||2
```

Regole:

| Condizione | Azione |
| --- | --- |
| `Cost(CM) > B` | Escludere o richiedere escalation |
| `availability_impact = high` | Richiedere approvazione esplicita |
| contromisura cross-domain | Attivare validazione organizzativa |
| score simile tra piu' CM | Preferire minore tempo di effetto e minore impatto disponibilita' |
| confidenza evidenze bassa | Non automatizzare; aumentare raccolta CTI |

## 5. Risposta Raccomandata

Formato di risposta:

```text
Raccomandazione: CM-XXX - Nome
Motivo: copre P/D/L/E rilevanti e riduce il rischio residuo stimato.
Azioni:
1. ...
2. ...
3. ...
Vincoli: ...
Evidenze richieste: ...
Rischio residuo: ...
Approvazione: richiesta/non richiesta
Rollback: ...
```

## 6. Validazione Esperta

L'esperto deve verificare:

| Verifica | Criterio |
| --- | --- |
| Coerenza operativa | La CM non degrada missioni piu' critiche della minaccia |
| Legalita' e policy | Autorita' e regole di ingaggio sono chiare |
| Evidenza | Le fonti sono tracciate e la confidenza e' sufficiente |
| Effetti collaterali | Disponibilita', sicurezza pubblica, fiducia e comunicazione sono considerati |
| Rollback | Esiste una procedura per tornare allo stato precedente |

## 7. Aggiornamento KB

Dopo ogni esperimento registrare:

1. scenario e vettore `x`;
2. contromisure candidate;
3. score e ranking;
4. scelta finale e motivazione;
5. outcome osservato;
6. nuovi controlli o dipendenze;
7. variazione dei pesi `w1`, `w2`, `w3` se giustificata.

## 8. Esempio Di Risposta Breve

Scenario: spoofing GNSS su veicoli con campagna di disinformazione.

Raccomandazione primaria: `CM-004 - GNSS anomaly response and fallback navigation`.

Contromisure complementari:

| CM | Perche' |
| --- | --- |
| `CM-002` | aumenta confidenza correlando telemetria, CTI e anomalie di posizione |
| `CM-005` | riduce impatto cognitivo e panico pubblico |
| `CM-001` | coordina decisione tra SOC, operatori, comunicazione e autorita' |

Decisione: applicare `CM-004` se le anomalie GNSS sono confermate; attivare `CM-005` se la narrativa ostile supera la soglia di diffusione definita dall'esperimento.

