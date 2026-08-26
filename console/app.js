const state = {
  kb: null,
  kbText: "",
  scenario: null,
  ranked: [],
  selectedId: null,
  vulnerabilityApplied: false,
  disarmApplied: false,
  simulationScenarioId: null,
  customScenarios: [],
};

const domainLabels = {
  land: "Land",
  sea: "Sea",
  air: "Air",
  space: "Space",
  cyber: "Cyber",
};

const simulationDomainIcons = {
  cyber: "🛡️",
  space: "🛰️",
  land: "🚙",
  sea: "⚓",
  air: "✈️",
  virtual: "◈",
  cognitive: "🧠",
  physical: "⚙️",
  response: "✦",
};

const vulnerabilityProfiles = {
  software_exploit: {
    label: "Software exploit / CVE",
    controls: { DE_AE: 0.65, DE_CM: 0.6, PR_PT: 0.7, RS_MI: 0.55 },
    domainBase: { land: 0.35, sea: 0.28, air: 0.32, space: 0.22, cyber: 0.9 },
    effects: { cognitive: 0.22, physical: 0.25, virtual: 0.88 },
    levels: { organization: 2.7, intelligence: 2.8, tool: 2.4 },
  },
  identity_compromise: {
    label: "Identity compromise",
    controls: { PR_AC: 0.9, DE_CM: 0.55, RS_AN: 0.5, GV_RM: 0.45 },
    domainBase: { land: 0.35, sea: 0.32, air: 0.38, space: 0.3, cyber: 0.86 },
    effects: { cognitive: 0.35, physical: 0.18, virtual: 0.78 },
    levels: { organization: 2.3, intelligence: 2.6, tool: 2.7 },
  },
  supply_chain: {
    label: "Supply chain compromise",
    controls: { GV_RM: 0.75, ID_AM: 0.8, PR_DS: 0.58, DE_CM: 0.62 },
    domainBase: { land: 0.55, sea: 0.48, air: 0.5, space: 0.45, cyber: 0.72 },
    effects: { cognitive: 0.42, physical: 0.46, virtual: 0.7 },
    levels: { organization: 2.0, intelligence: 2.4, tool: 2.7 },
  },
  ot_cps: {
    label: "OT / CPS exposure",
    controls: { ID_AM: 0.75, PR_PT: 0.8, DE_AE: 0.62, RS_MI: 0.72 },
    domainBase: { land: 0.82, sea: 0.62, air: 0.6, space: 0.24, cyber: 0.72 },
    effects: { cognitive: 0.28, physical: 0.86, virtual: 0.62 },
    levels: { organization: 2.5, intelligence: 2.5, tool: 2.2 },
  },
  gnss_spoofing: {
    label: "GNSS spoofing / jamming",
    controls: { DE_AE: 0.72, PR_PT: 0.78, RS_MI: 0.65, RS_CO: 0.48 },
    domainBase: { land: 0.72, sea: 0.65, air: 0.78, space: 0.92, cyber: 0.48 },
    effects: { cognitive: 0.45, physical: 0.78, virtual: 0.55 },
    levels: { organization: 2.4, intelligence: 2.1, tool: 2.4 },
  },
  communication_disruption: {
    label: "Communication disruption",
    controls: { PR_PT: 0.6, DE_CM: 0.62, RS_CO: 0.82, RC_RP: 0.55 },
    domainBase: { land: 0.68, sea: 0.7, air: 0.74, space: 0.66, cyber: 0.58 },
    effects: { cognitive: 0.58, physical: 0.52, virtual: 0.5 },
    levels: { organization: 2.1, intelligence: 2.3, tool: 2.6 },
  },
  data_poisoning: {
    label: "Data poisoning / model drift",
    controls: { PR_DS: 0.72, DE_AE: 0.7, RS_AN: 0.72, GV_RM: 0.48 },
    domainBase: { land: 0.42, sea: 0.35, air: 0.55, space: 0.5, cyber: 0.78 },
    effects: { cognitive: 0.7, physical: 0.28, virtual: 0.72 },
    levels: { organization: 2.3, intelligence: 1.9, tool: 2.6 },
  },
  disinformation: {
    label: "Disinformation / cognitive manipulation",
    controls: { RS_CO: 0.88, GV_OC: 0.7, DE_CM: 0.52, RS_AN: 0.45 },
    domainBase: { land: 0.45, sea: 0.38, air: 0.42, space: 0.25, cyber: 0.52 },
    effects: { cognitive: 0.94, physical: 0.22, virtual: 0.4 },
    levels: { organization: 1.9, intelligence: 2.2, tool: 2.9 },
  },
};

const disarmTactics = {
  plan: {
    label: "Plan strategy",
    summary: "Definisce obiettivi, audience, narrative e finestra operativa dell'influenza.",
    techniques: [
      { id: "D-PLAN-01", label: "Define strategic objective", weight: 0.45, trigger: "Obiettivo informativo o politico-militare dichiarato o inferito.", domains: ["cognitive", "cyber"], response: ["CM-001", "CM-002"] },
      { id: "D-PLAN-02", label: "Identify target audience", weight: 0.5, trigger: "Segmentazione di popolazione, operatori critici, decisori o personale militare.", domains: ["cognitive", "land", "cyber"], response: ["CM-001", "CM-005"] },
      { id: "D-PLAN-03", label: "Select polarizing narrative", weight: 0.6, trigger: "Narrativa polarizzante collegata a fiducia, sicurezza o continuita' dei servizi.", domains: ["cognitive"], response: ["CM-005"] },
    ],
  },
  prepare: {
    label: "Prepare assets",
    summary: "Prepara account, media, domini, gruppi e contenuti per la campagna.",
    techniques: [
      { id: "D-PREP-01", label: "Create personas or sockpuppets", weight: 0.58, trigger: "Account o identita' artificiali usati per creare falsa legittimita'.", domains: ["cyber", "cognitive"], response: ["CM-002", "CM-005"] },
      { id: "D-PREP-02", label: "Prepare manipulated media", weight: 0.64, trigger: "Immagini, video, documenti o prove manipolate preparate prima della diffusione.", domains: ["cyber", "cognitive"], response: ["CM-002", "CM-005"] },
      { id: "D-PREP-03", label: "Stage cross-platform infrastructure", weight: 0.62, trigger: "Canali, domini, gruppi o piattaforme pronti per diffusione coordinata.", domains: ["cyber", "cognitive"], response: ["CM-002", "CM-005"] },
    ],
  },
  seed: {
    label: "Seed narrative",
    summary: "Introduce la narrativa in canali selezionati per creare primi segnali.",
    techniques: [
      { id: "D-SEED-01", label: "Seed misleading claim", weight: 0.62, trigger: "Prima pubblicazione di claim falso o fuorviante legato allo scenario.", domains: ["cognitive", "cyber"], response: ["CM-002", "CM-005"] },
      { id: "D-SEED-02", label: "Use local-looking sources", weight: 0.56, trigger: "Fonte apparentemente locale o istituzionale usata per aumentare fiducia.", domains: ["cognitive", "land"], response: ["CM-001", "CM-005"] },
      { id: "D-SEED-03", label: "Exploit breaking-news window", weight: 0.68, trigger: "Diffusione durante finestra di incertezza, crisi o evento operativo.", domains: ["cognitive", "cyber"], response: ["CM-001", "CM-005"] },
    ],
  },
  amplify: {
    label: "Amplify content",
    summary: "Aumenta portata, velocita' e apparente consenso della narrativa.",
    techniques: [
      { id: "D-AMPL-01", label: "Coordinated sharing", weight: 0.7, trigger: "Condivisione sincronizzata tra account, gruppi o canali.", domains: ["cyber", "cognitive"], response: ["CM-002", "CM-005"] },
      { id: "D-AMPL-02", label: "Bot-like amplification", weight: 0.72, trigger: "Pattern automatizzati o semi-automatizzati di engagement e repost.", domains: ["cyber", "cognitive"], response: ["CM-002", "CM-005"] },
      { id: "D-AMPL-03", label: "Influencer or proxy boosting", weight: 0.66, trigger: "Amplificazione tramite proxy, influencer o canali terzi.", domains: ["cognitive", "cyber"], response: ["CM-001", "CM-005"] },
    ],
  },
  manipulate: {
    label: "Manipulate perception",
    summary: "Modifica percezione, fiducia e decision-making del target.",
    techniques: [
      { id: "D-MANIP-01", label: "Forge evidence or documents", weight: 0.78, trigger: "Prove, log, documenti o media falsificati a supporto della narrativa.", domains: ["cyber", "cognitive"], response: ["CM-002", "CM-005"] },
      { id: "D-MANIP-02", label: "Trigger panic or distrust", weight: 0.82, trigger: "Messaggi mirati a panico, sfiducia verso servizi o autorita'.", domains: ["cognitive", "land"], response: ["CM-001", "CM-005"] },
      { id: "D-MANIP-03", label: "Exploit identity conflict", weight: 0.7, trigger: "Narrativa costruita su fratture identitarie, istituzionali o alleate.", domains: ["cognitive"], response: ["CM-005"] },
    ],
  },
  evade: {
    label: "Evade attribution",
    summary: "Oscura origine, coordinamento e intenzionalita' dell'operazione.",
    techniques: [
      { id: "D-EVADE-01", label: "Launder source", weight: 0.64, trigger: "Origine del contenuto nascosta tramite repost, media proxy o canali intermedi.", domains: ["cyber", "cognitive"], response: ["CM-002", "CM-005"] },
      { id: "D-EVADE-02", label: "Platform hopping", weight: 0.58, trigger: "Spostamento tra piattaforme per evitare moderazione o attribuzione.", domains: ["cyber", "cognitive"], response: ["CM-002", "CM-005"] },
      { id: "D-EVADE-03", label: "Delete or mutate artifacts", weight: 0.6, trigger: "Rimozione o mutazione di contenuti/account per ostacolare analisi.", domains: ["cyber"], response: ["CM-002"] },
    ],
  },
  assess: {
    label: "Assess and adapt",
    summary: "Misura risposta del target e adatta narrativa, canali o timing.",
    techniques: [
      { id: "D-ASSESS-01", label: "Monitor engagement signals", weight: 0.45, trigger: "Misura di reach, engagement, sentiment o reazioni operative.", domains: ["cyber", "cognitive"], response: ["CM-002", "CM-005"] },
      { id: "D-ASSESS-02", label: "A/B test narrative variants", weight: 0.52, trigger: "Varianti narrative testate per massimizzare reazione o confusione.", domains: ["cognitive"], response: ["CM-005"] },
      { id: "D-ASSESS-03", label: "Shift message after rebuttal", weight: 0.55, trigger: "Adattamento messaggio dopo smentita o comunicazione ufficiale.", domains: ["cognitive"], response: ["CM-001", "CM-005"] },
    ],
  },
};

const disarmAudienceDomainWeights = {
  civil_population: { land: 0.52, sea: 0.24, air: 0.3, space: 0.18, cyber: 0.54 },
  military_personnel: { land: 0.62, sea: 0.48, air: 0.56, space: 0.42, cyber: 0.6 },
  critical_infrastructure_operator: { land: 0.68, sea: 0.44, air: 0.45, space: 0.42, cyber: 0.72 },
  decision_makers: { land: 0.5, sea: 0.42, air: 0.48, space: 0.45, cyber: 0.58 },
  allied_partners: { land: 0.5, sea: 0.54, air: 0.54, space: 0.56, cyber: 0.56 },
};

const availabilityOrder = {
  none: 0,
  low: 1,
  medium: 2,
  high: 3,
};

const axisLabels = {
  co_v: "Compromised controls",
  ca_exp: "Offensive capabilities",
  l_v: "Security levels",
  i_pos: "Impact dimensions",
};

const fallbackNatoCases = [{
  id: "notpetya",
  title: "NotPetya-style supply-chain wiper sviluppato in ATHENA",
  description:
    "Scenario storico-difensivo basato sul caso NotPetya: compromissione di un meccanismo di update software fidato, propagazione laterale e impatto distruttivo su servizi pubblici, logistica e continuita' operativa.",
  sourceLabel: "Fonte NATO/CCDCOE citata",
  sourceUrl: "https://www.wired.com/story/notpetya-petya-russia-cause/",
  scenarioId: "SCN-009",
  flow: [
    {
      phase: "Supply chain",
      label: "Trusted update channel",
      evidence: "Compromissione del meccanismo di update software e distribuzione di codice malevolo tramite canale fidato.",
      axis: "P: govern/prevent | L: organization",
      response: "CM-001, CM-002",
    },
    {
      phase: "Initial access",
      label: "Endpoint infection",
      evidence: "Esecuzione su host enterprise e avvio della propagazione interna con elevata fiducia apparente.",
      axis: "P: detect | D: cyber",
      response: "CM-002, CM-006",
    },
    {
      phase: "Lateral movement",
      label: "Credential and admin tooling abuse",
      evidence: "Uso di credenziali e strumenti amministrativi per muoversi rapidamente nella rete.",
      axis: "P: respond/prevent | L: tool",
      response: "CM-003, CM-006",
    },
    {
      phase: "Impact",
      label: "Wiper / destructive outage",
      evidence: "Interruzione dei servizi, perdita operativa e necessita' di ripristino prioritizzato.",
      axis: "E: virtual/physical/cognitive",
      response: "CM-001, CM-008",
    },
  ],
  frameworkRows: [
    ["Initial Access", "T1195 Supply Chain Compromise / trusted software update", "P govern-prevent, L organization", "CM-001, CM-002"],
    ["Credential Access", "Credential material and administrative trust abused during propagation", "P detect-respond, D cyber", "CM-002, CM-006"],
    ["Lateral Movement", "PsExec/WMI-like administrative movement pattern", "P respond-prevent, L tool", "CM-003, CM-006"],
    ["Impact", "Data destruction, service outage and recovery pressure", "E virtual-physical-cognitive", "CM-001, CM-008"],
  ],
}, {
  id: "viasat",
  title: "Viasat KA-SAT satellite communications disruption sviluppato in ATHENA",
  description:
    "Scenario storico-difensivo basato sull'attacco Viasat KA-SAT del 23-24 febbraio 2022: compromissione di infrastruttura di gestione SATCOM, wiper AcidRain sui modem e interruzione di comunicazioni satellitari con spillover europeo.",
  sourceLabel: "Fonte CCDCOE Cyber Law Toolkit",
  sourceUrl: "https://cyberlaw.ccdcoe.org/wiki/Viasat_KA-SAT_attack_(2022)",
  scenarioId: "SCN-010",
  flow: [
    {
      phase: "Ground access",
      label: "SATCOM management path",
      evidence: "Accesso o abuso del segmento di gestione terrestre collegato a terminali KA-SAT e modem SurfBeam.",
      axis: "P: govern/detect | D: cyber-space",
      response: "CM-001, CM-002",
    },
    {
      phase: "Terminal control",
      label: "Modem fleet targeting",
      evidence: "Distribuzione o attivazione di logica distruttiva verso modem satellitari su larga scala.",
      axis: "P: detect/respond | L: tool",
      response: "CM-002, CM-004",
    },
    {
      phase: "Impact",
      label: "AcidRain-like wiper",
      evidence: "Modem resi inutilizzabili, perdita di connettivita' satellitare e necessita' di replacement/recovery.",
      axis: "E: virtual/physical | D: space-land",
      response: "CM-004, CM-008",
    },
    {
      phase: "Spillover",
      label: "European service disruption",
      evidence: "Impatto su utenze civili e servizi dipendenti, inclusi sistemi energetici e comunicazioni operative.",
      axis: "P: respond/recover | E: cognitive",
      response: "CM-001, CM-005, CM-008",
    },
  ],
  frameworkRows: [
    ["Initial Access", "Management network compromise / trusted SATCOM operational access", "P govern-detect, D cyber-space", "CM-001, CM-002"],
    ["Execution", "AcidRain-like modem wiper execution on terminal equipment", "P detect-respond, L tool", "CM-002, CM-004"],
    ["Impact", "Endpoint/terminal denial and loss of satellite broadband connectivity", "E virtual-physical, D space-land", "CM-004, CM-008"],
    ["Recovery", "Large-scale terminal restoration and prioritized fallback communications", "P respond-recover, L organization", "CM-001, CM-005, CM-008"],
  ],
}];

const frameworkMappings = {
  gnss_spoofing: [
    {
      framework: "ESA SPACE-SHIELD",
      tactic: "Impact",
      technique: "Spacecraft Jamming / Ground Segment Jamming / Transmitted Data Manipulation",
      trigger: "Dipendenza GNSS o space link con coordinate incoerenti, jamming o spoofing.",
      response: ["CM-001", "CM-002", "CM-004", "CM-008"],
      domains: ["space", "land", "air", "sea", "cyber"],
    },
    {
      framework: "MITRE ATT&CK",
      tactic: "Impact / Defense Evasion / Collection",
      technique: "T1565 Data Manipulation, T1499 Endpoint DoS, T1027 Obfuscated Files or Information",
      trigger: "Alterazione o degradazione di dati di navigazione, telemetry ingestion o servizi dipendenti.",
      response: ["CM-002", "CM-004", "CM-008"],
      domains: ["cyber", "space", "land"],
    },
    {
      framework: "MITRE ATLAS",
      tactic: "ML model integrity",
      technique: "Data poisoning, evasion of ML-based sensor fusion, model drift exploitation",
      trigger: "Pipeline di sensor fusion o anomaly detection che interpreta segnali GNSS manipolati.",
      response: ["CM-002", "CM-004", "CM-007"],
      domains: ["space", "cyber", "land"],
    },
  ],
  communication_disruption: [
    {
      framework: "ESA SPACE-SHIELD",
      tactic: "Command and Control / Impact",
      technique: "Protocol Tunnelling, RF modification, Temporary loss to telecommand satellite",
      trigger: "Degrado comunicazioni satellitari, fallback incerto o perdita temporanea di link.",
      response: ["CM-001", "CM-004", "CM-008"],
      domains: ["space", "sea", "air", "land"],
    },
    {
      framework: "MITRE ATT&CK",
      tactic: "Command and Control / Impact",
      technique: "T1105 Ingress Tool Transfer, T1498 Network Denial of Service, T1489 Service Stop",
      trigger: "Interruzione o saturazione di servizi di comunicazione mission-critical.",
      response: ["CM-001", "CM-005", "CM-008"],
      domains: ["cyber", "space"],
    },
  ],
  software_exploit: [
    {
      framework: "MITRE ATT&CK",
      tactic: "Initial Access / Execution / Defense Evasion",
      technique: "T1190 Exploit Public-Facing Application, T1059 Command and Scripting Interpreter, T1027 Obfuscated Files or Information",
      trigger: "Vulnerabilita' software, servizio esposto o exploit su backend operativo.",
      response: ["CM-002", "CM-003", "CM-006", "CM-008"],
      domains: ["cyber"],
    },
    {
      framework: "ESA SPACE-SHIELD",
      tactic: "Initial Access / Execution",
      technique: "Software vulnerabilities, Payload exploitation to execute commands",
      trigger: "Software ground/space segment esposto o componente missione vulnerabile.",
      response: ["CM-002", "CM-003", "CM-008"],
      domains: ["space", "cyber"],
    },
  ],
  identity_compromise: [
    {
      framework: "MITRE ATT&CK",
      tactic: "Credential Access / Initial Access / Persistence",
      technique: "T1078 Valid Accounts, T1552 Unsecured Credentials, T1110 Brute Force",
      trigger: "Uso improprio credenziali, MFA bypass o account privilegiato compromesso.",
      response: ["CM-001", "CM-002", "CM-006"],
      domains: ["cyber"],
    },
    {
      framework: "ESA SPACE-SHIELD",
      tactic: "Credential Access",
      technique: "Valid Credentials, Steal cryptographic keys, Forge Digital Certificates",
      trigger: "Credenziali o chiavi usate per telecommand, ground segment o federated mission.",
      response: ["CM-001", "CM-002", "CM-006"],
      domains: ["space", "cyber"],
    },
  ],
  supply_chain: [
    {
      framework: "MITRE ATT&CK",
      tactic: "Initial Access / Resource Development",
      technique: "T1195 Supply Chain Compromise, T1588 Obtain Capabilities",
      trigger: "Compromissione di dipendenze software, update channel, build system o vendor.",
      response: ["CM-001", "CM-002", "CM-003", "CM-008"],
      domains: ["cyber", "land", "air", "sea", "space"],
    },
    {
      framework: "ESA SPACE-SHIELD",
      tactic: "Initial Access / Resource Development",
      technique: "Compromise Software Supply Chain, Compromise Hardware Supply Chain, Malicious supply chain capabilities",
      trigger: "Dipendenze missione o componenti space segment/ground segment non affidabili.",
      response: ["CM-001", "CM-002", "CM-008"],
      domains: ["space", "cyber"],
    },
    {
      framework: "MITRE ATLAS",
      tactic: "ML supply chain",
      technique: "Publish poisoned datasets, compromise ML artifacts, malicious model dependency",
      trigger: "Dataset, modello o pipeline AI/ML importati da fonte non verificata.",
      response: ["CM-002", "CM-007", "CM-008"],
      domains: ["cyber"],
    },
  ],
  ot_cps: [
    {
      framework: "MITRE ATT&CK",
      tactic: "Lateral Movement / Impact",
      technique: "T0831 Manipulation of Control, T0882 Theft of Operational Information, T0814 Denial of Service",
      trigger: "Degrado OT/CPS, manipolazione controllo o interruzione servizi fisici.",
      response: ["CM-001", "CM-003", "CM-008"],
      domains: ["cyber", "land", "sea", "air"],
    },
  ],
  data_poisoning: [
    {
      framework: "MITRE ATLAS",
      tactic: "ML Attack Staging / ML Model Access / Impact",
      technique: "Data poisoning, evade model, manipulate training or runtime data",
      trigger: "Dati alterati in training, inference, decision support o sensor fusion.",
      response: ["CM-001", "CM-002", "CM-007"],
      domains: ["cyber", "air", "space"],
    },
    {
      framework: "MITRE ATT&CK",
      tactic: "Collection / Impact",
      technique: "T1565 Data Manipulation, T1005 Data from Local System",
      trigger: "Alterazione di dataset, log, telemetry o feature usate per decisioni operative.",
      response: ["CM-002", "CM-007", "CM-008"],
      domains: ["cyber"],
    },
  ],
  disinformation: [
    {
      framework: "DISARM",
      tactic: "Plan / Prepare / Seed / Amplify / Manipulate / Evade / Assess",
      technique: "Narrative planning, persona/infrastructure preparation, content seeding, coordinated amplification, perception manipulation",
      trigger: "Operazione informativa coordinata o influenza cognitiva collegata allo scenario.",
      response: ["CM-001", "CM-002", "CM-005"],
      domains: ["cyber", "land", "cognitive"],
    },
    {
      framework: "MITRE ATT&CK",
      tactic: "Reconnaissance / Resource Development / Impact",
      technique: "T1598 Phishing for Information, T1585 Establish Accounts, T1565 Data Manipulation",
      trigger: "Campagna informativa coordinata, narrativa manipolata o falsa evidenza pubblica.",
      response: ["CM-001", "CM-002", "CM-005"],
      domains: ["cyber", "land", "cognitive"],
    },
    {
      framework: "MITRE ATLAS",
      tactic: "LLM / AI-enabled influence",
      technique: "Prompt injection, generated deceptive content, model output manipulation",
      trigger: "Uso di AI generativa per amplificare contenuti o manipolare percezione.",
      response: ["CM-002", "CM-005"],
      domains: ["cyber", "cognitive"],
    },
  ],
};

const entitySummaries = [
  ["Adversary", "State-sponsored or proxy actor with coordinated geopolitical intent."],
  ["Capability", "GNSS spoofing, software exploitation and synchronized disinformation."],
  ["Infrastructure", "Connected vehicle backend, navigation dependencies and public channels."],
  ["Victim", "Civil critical infrastructure operator under time and safety constraints."],
];

const defaultSimulationSteps = [
  {
    title: "Baseline: connected mobility operating normally",
    description: "Vehicle fleet, GNSS dependency, backend services and public communication channels are aligned.",
    active: ["cyber"],
    impacts: { cyber: 0.12, space: 0.08, land: 0.1, cognitive: 0.04, response: 0.0 },
    response: "Monitor baseline telemetry and dependency map.",
  },
  {
    title: "Cyber foothold: backend and update channel exposed",
    description: "A cyber weakness affects vehicle backend, telemetry ingestion or update trust, preparing the GNSS deception path.",
    active: ["cyber"],
    impacts: { cyber: 0.62, space: 0.12, land: 0.18, cognitive: 0.1, response: 0.12 },
    response: "ATHENA detect: CTI correlation and anomaly scoring.",
  },
  {
    title: "Space/GNSS spoofing: false coordinates injected",
    description: "Spoofed or jammed GNSS signals create inconsistent location data and degrade navigation confidence.",
    active: ["cyber", "space"],
    impacts: { cyber: 0.7, space: 0.86, land: 0.42, cognitive: 0.22, response: 0.28 },
    response: "CM-004: GNSS anomaly response and fallback navigation.",
  },
  {
    title: "Land impact: vehicles deviate and services degrade",
    description: "Wrong coordinates affect routing, fleet availability and emergency coordination in the physical domain.",
    active: ["space", "land"],
    impacts: { cyber: 0.68, space: 0.88, land: 0.78, cognitive: 0.38, response: 0.45 },
    response: "CM-003/CM-004: isolate affected services and switch to trusted fallback.",
  },
  {
    title: "Cognitive escalation: rumors amplify panic",
    description: "Narratives about mass vehicle failures spread through social channels, increasing pressure on operators and responders.",
    active: ["land", "cognitive"],
    impacts: { cyber: 0.62, space: 0.72, land: 0.75, cognitive: 0.9, response: 0.62 },
    response: "CM-005: trusted communication and disinformation containment.",
  },
  {
    title: "ATHENA response: cross-domain stabilization",
    description: "Human-in-the-loop coordination ranks candidate countermeasures and applies fallback, communication and recovery actions.",
    active: ["cyber", "space", "land", "cognitive", "response"],
    impacts: { cyber: 0.38, space: 0.4, land: 0.42, cognitive: 0.46, response: 0.9 },
    response: "CM-001 + CM-004 + CM-005 + CM-008 as coordinated response package.",
  },
];

let simulationIndex = 0;
let simulationTimer = null;

async function loadKnowledgeBase() {
  try {
    const response = await fetch("../data/athena_kb_scoring.json", { cache: "no-store" });
    if (response.ok) {
      return response.json();
    }
  } catch {
    // Opening the console as file:// blocks fetch in many browsers; embedded KB is the fallback.
  }
  if (window.ATHENA_KB_DATA || window.ATHENA_KB) {
    return window.ATHENA_KB_DATA || window.ATHENA_KB;
  }
  throw new Error("KB load failed: no server response and no embedded KB found");
}

async function loadKnowledgeBaseText() {
  try {
    const response = await fetch("../data/athena_kb.yaml", { cache: "no-store" });
    if (response.ok) {
      return response.text();
    }
  } catch {
    // See loadKnowledgeBase fallback note.
  }
  return window.ATHENA_KB_TEXT || "athena_kb.yaml not available";
}

function byId(id) {
  return document.getElementById(id);
}

function formatNumber(value) {
  return Number(value).toFixed(3);
}

const customScenarioStorageKey = "athena.customScenarios.v0.1";

function averageMap(values, max = 1) {
  const numbers = Object.values(values || {}).map(Number);
  if (!numbers.length) return 0;
  return numbers.reduce((sum, value) => sum + (value / max), 0) / numbers.length;
}

function calculateGrossRisk(x) {
  const cov = averageMap(x.co_v);
  const exposure = averageMap(x.ca_exp);
  const impact = averageMap(x.i_pos);
  const maturityGap = 1 - averageMap(x.l_v, 5);
  const score = Math.max(0, Math.min(100, (cov * 0.25 + exposure * 0.25 + impact * 0.35 + maturityGap * 0.15) * 100));
  return {
    score: Number(score.toFixed(1)),
    components: { cov, exposure, impact, maturityGap },
    band: score >= 80 ? "CRITICO" : score >= 60 ? "ALTO" : score >= 35 ? "MEDIO" : "BASSO",
  };
}

function collectRangeMap(selector, dataKey) {
  return Object.fromEntries([...document.querySelectorAll(selector)].map((input) => [input.dataset[dataKey], Number(input.value)]));
}

function collectNewScenarioVector() {
  return {
    co_v: collectRangeMap("[data-new-control]", "newControl"),
    ca_exp: collectRangeMap("[data-new-domain]", "newDomain"),
    l_v: collectRangeMap("[data-new-level]", "newLevel"),
    i_pos: collectRangeMap("[data-new-impact]", "newImpact"),
  };
}

function renderNewScenarioRisk() {
  if (!byId("newScenarioRiskScore")) return;
  document.querySelectorAll("#newScenarioForm input[type='range']").forEach((input) => {
    const output = input.closest("label")?.querySelector("output");
    if (output) output.value = Number(input.value).toFixed(2);
  });
  const assessment = calculateGrossRisk(collectNewScenarioVector());
  byId("newScenarioRiskScore").textContent = assessment.score.toFixed(1);
  byId("newScenarioRiskBand").textContent = assessment.band;
  byId("newScenarioRiskBar").style.width = `${assessment.score}%`;
  const card = byId("newScenarioRiskCard");
  card.classList.remove("risk-low", "risk-medium", "risk-high", "risk-critical");
  card.classList.add(`risk-${assessment.band.toLowerCase()}`);
}

function getNextScenarioId() {
  const numbers = (state.kb?.example_scenarios || []).map((item) => Number(String(item.id).match(/SCN-(\d+)/i)?.[1] || 0));
  return `SCN-${String(Math.max(0, ...numbers) + 1).padStart(3, "0")}`;
}

function resetNewScenarioForm() {
  const form = byId("newScenarioForm");
  if (!form) return;
  form.reset();
  byId("newScenarioId").value = getNextScenarioId();
  byId("newScenarioStatus").textContent = "Compila i campi obbligatori e calcola lo scenario.";
  renderNewScenarioRisk();
}

function persistCustomScenarios() {
  try {
    localStorage.setItem(customScenarioStorageKey, JSON.stringify(state.customScenarios));
  } catch {
    // The dashboard still works when browser storage is unavailable.
  }
}

function loadCustomScenarios() {
  try {
    const parsed = JSON.parse(localStorage.getItem(customScenarioStorageKey) || "[]");
    state.customScenarios = Array.isArray(parsed) ? parsed.filter((item) => item?.id && item?.x) : [];
  } catch {
    state.customScenarios = [];
  }
  const builtInIds = new Set(state.kb.example_scenarios.map((item) => item.id));
  state.customScenarios = state.customScenarios.filter((item) => !builtInIds.has(item.id));
  state.kb.example_scenarios.push(...state.customScenarios);
}

function saveAndCalculateNewScenario(event) {
  event.preventDefault();
  const form = byId("newScenarioForm");
  if (!form.reportValidity()) return;
  const id = byId("newScenarioId").value.trim().toUpperCase();
  const builtIn = state.kb.example_scenarios.find((item) => item.id === id && !item.is_custom);
  if (builtIn) {
    byId("newScenarioStatus").textContent = `${id} è riservato a uno scenario predefinito: usa un ID diverso.`;
    byId("newScenarioId").focus();
    return;
  }

  const x = collectNewScenarioVector();
  const risk = calculateGrossRisk(x);
  const scenario = {
    id,
    name: byId("newScenarioName").value.trim(),
    description: byId("newScenarioDescription").value.trim(),
    mission: byId("newScenarioMission").value.trim(),
    classification: byId("newScenarioClassification").value,
    confidence: Number(byId("newScenarioConfidence").value),
    source: "analyst_input",
    created_at: new Date().toISOString(),
    is_custom: true,
    entities: {
      adversary: byId("newScenarioAdversary").value.trim() || "Unknown / da attribuire",
      capability: byId("newScenarioCapability").value.trim(),
      infrastructure: byId("newScenarioMission").value.trim() || "Mission infrastructure",
      victim: byId("newScenarioAsset").value.trim(),
    },
    asset: byId("newScenarioAsset").value.trim(),
    x,
    gross_risk: risk,
    suggested_candidates: [],
  };

  const customIndex = state.customScenarios.findIndex((item) => item.id === id);
  if (customIndex >= 0) state.customScenarios[customIndex] = scenario;
  else state.customScenarios.push(scenario);
  const allIndex = state.kb.example_scenarios.findIndex((item) => item.id === id);
  if (allIndex >= 0) state.kb.example_scenarios[allIndex] = scenario;
  else state.kb.example_scenarios.push(scenario);
  persistCustomScenarios();

  state.scenario = scenario;
  state.selectedId = null;
  state.simulationScenarioId = scenario.id;
  state.vulnerabilityApplied = false;
  state.disarmApplied = false;
  renderScenarioSelector();
  renderSimulationScenarioSelector();
  recalculate();
  byId("newScenarioStatus").textContent = `${id} salvato · rischio ${risk.score}/100 (${risk.band}) · ${state.ranked.length} contromisure valutate.`;
  window.location.hash = "overview";
}

function l2Gap(left, right) {
  const keys = new Set([...Object.keys(left), ...Object.keys(right)]);
  let total = 0;
  keys.forEach((key) => {
    total += (Number(left[key] || 0) - Number(right[key] || 0)) ** 2;
  });
  return Math.sqrt(total);
}

function residualControls(coV, coApp) {
  const keys = new Set([...Object.keys(coV), ...Object.keys(coApp)]);
  let total = 0;
  keys.forEach((key) => {
    total += Math.abs(Number(coV[key] || 0) * (1 - Number(coApp[key] || 0)));
  });
  return total;
}

function getWeights() {
  return {
    w1_impact_gap: Number(byId("w1").value),
    w2_control_residual: Number(byId("w2").value),
    w3_level_gap: Number(byId("w3").value),
  };
}

function scoreCountermeasure(countermeasure) {
  const x = state.scenario.x;
  const weights = getWeights();
  const impactGap = l2Gap(x.i_pos, countermeasure.i_target);
  const controlResidual = residualControls(x.co_v, countermeasure.co_app);
  const levelGap = l2Gap(x.l_v, countermeasure.l_target);
  const score =
    weights.w1_impact_gap * impactGap +
    weights.w2_control_residual * controlResidual +
    weights.w3_level_gap * levelGap;

  return {
    ...countermeasure,
    score,
    impactGap,
    controlResidual,
    levelGap,
  };
}

function getVulnerabilityInput() {
  const type = byId("vulnerabilityType")?.value || "software_exploit";
  const selectedDomains = {};
  document.querySelectorAll("[data-domain-toggle]").forEach((input) => {
    selectedDomains[input.dataset.domainToggle] = input.checked;
  });
  return {
    type,
    asset: byId("affectedAsset")?.value || "",
    severity: Number(byId("vulnSeverity")?.value || 0),
    exposure: Number(byId("vulnExposure")?.value || 0),
    confidence: Number(byId("vulnConfidence")?.value || 0),
    selectedDomains,
  };
}

function calculateDomainImpact() {
  const input = getVulnerabilityInput();
  const profile = vulnerabilityProfiles[input.type];
  const intensity = (input.severity * 0.45) + (input.exposure * 0.35) + (input.confidence * 0.2);
  const impacts = {};
  Object.entries(profile.domainBase).forEach(([domain, base]) => {
    const enabled = input.selectedDomains[domain];
    const domainFactor = enabled ? 1 : 0.28;
    impacts[domain] = Math.min(1, Number((base * intensity * domainFactor).toFixed(4)));
  });
  return { input, profile, intensity, impacts };
}

function applyVulnerabilityToScenario() {
  const assessment = calculateDomainImpact();
  const { input, profile, impacts, intensity } = assessment;
  const next = JSON.parse(JSON.stringify(state.scenario));
  next.id = `${String(state.scenario.id).replace(/-VULN$/, "")}-VULN`;
  next.name = `${state.scenario.name} + ${profile.label}`;
  next.x = {
    co_v: mergeMax(next.x.co_v, scaleMap(profile.controls, intensity)),
    ca_exp: mergeMax(next.x.ca_exp, impacts),
    l_v: blendLevels(next.x.l_v, profile.levels, intensity),
    i_pos: mergeMax(next.x.i_pos, scaleMap(profile.effects, intensity)),
  };
  next.suggested_candidates = Array.from(new Set([
    ...(next.suggested_candidates || []),
    ...suggestCandidatesForVulnerability(input.type),
  ]));
  state.scenario = next;
  state.vulnerabilityApplied = true;
  byId("vulnerabilityStatus").textContent = "profilo applicato allo scoring";
  recalculate();
}

function renderDisarmControls() {
  const tacticSelect = byId("disarmTactic");
  if (!tacticSelect) return;
  if (!tacticSelect.options.length) {
    tacticSelect.innerHTML = Object.entries(disarmTactics)
      .map(([key, tactic]) => `<option value="${key}">${tactic.label}</option>`)
      .join("");
  }
  const tacticKey = tacticSelect.value || Object.keys(disarmTactics)[0];
  const tactic = disarmTactics[tacticKey];
  const selected = getSelectedDisarmTechniqueIds();
  byId("disarmTechniques").innerHTML = tactic.techniques
    .map((technique, index) => {
      const checked = selected.size ? selected.has(technique.id) : index < 2;
      return `
        <label class="disarm-technique-card">
          <input type="checkbox" data-disarm-technique="${technique.id}" ${checked ? "checked" : ""} />
          <span class="disarm-technique-id">${technique.id}</span>
          <strong>${technique.label}</strong>
          <em>${tactic.label}</em>
          <small>${technique.trigger}</small>
          <span class="disarm-domain-list">${(technique.domains || []).map((domain) => domainLabels[domain] || domain).join(", ")}</span>
          <span class="disarm-response-list">${(technique.response || []).map((id) => `<b>${id}</b>`).join(" ")}</span>
        </label>
      `;
    })
    .join("");

  document.querySelectorAll("[data-disarm-technique]").forEach((input) => {
    input.addEventListener("change", () => {
      state.disarmApplied = false;
      byId("disarmStatus").textContent = "threat aggiornata non applicata";
      renderDisarmAssessment();
      renderFrameworkMapping();
      renderContextPack();
    });
  });
}

function getSelectedDisarmTechniqueIds() {
  return new Set(
    [...document.querySelectorAll("[data-disarm-technique]:checked")]
      .map((input) => input.dataset.disarmTechnique)
  );
}

function getDisarmAssessment() {
  const tacticKey = byId("disarmTactic")?.value || Object.keys(disarmTactics)[0];
  const tactic = disarmTactics[tacticKey];
  const selectedIds = getSelectedDisarmTechniqueIds();
  const selectedTechniques = tactic.techniques.filter((technique) => selectedIds.has(technique.id));
  const selectedWeight = selectedTechniques.reduce((sum, technique) => sum + technique.weight, 0);
  const density = tactic.techniques.length ? selectedTechniques.length / tactic.techniques.length : 0;
  const risk = Math.min(1, (selectedWeight / Math.max(1, tactic.techniques.length)) + (density * 0.28));
  const audience = byId("targetAudience")?.value || "civil_population";
  const domainWeights = disarmAudienceDomainWeights[audience] || disarmAudienceDomainWeights.civil_population;
  const domainImpacts = Object.fromEntries(
    Object.entries(domainWeights).map(([domain, value]) => [domain, Number(Math.min(1, value * (0.72 + risk * 0.55)).toFixed(4))])
  );

  return {
    threat: byId("threatName")?.value || "",
    objective: byId("threatObjective")?.value || "",
    audience,
    tacticKey,
    tactic,
    selectedTechniques,
    risk: Number(risk.toFixed(4)),
    domainImpacts,
  };
}

function mapDisarmToAthena() {
  const assessment = getDisarmAssessment();
  const severity = Math.max(0.55, assessment.risk);
  byId("vulnerabilityType").value = "disinformation";
  byId("affectedAsset").value = assessment.threat || "DISARM mapped influence operation";
  byId("vulnSeverity").value = severity.toFixed(2);
  byId("vulnExposure").value = Math.min(1, 0.6 + assessment.risk * 0.35).toFixed(2);
  byId("vulnConfidence").value = Math.min(1, 0.55 + assessment.selectedTechniques.length * 0.12).toFixed(2);
  document.querySelectorAll("[data-domain-toggle]").forEach((input) => {
    input.checked = Number(assessment.domainImpacts[input.dataset.domainToggle] || 0) >= 0.35;
  });
  state.disarmApplied = true;
  byId("disarmStatus").textContent = "threat DISARM mappata su ATHENA";
  renderVulnerabilityAssessment();
  applyVulnerabilityToScenario();
  state.scenario.suggested_candidates = Array.from(new Set([
    ...(state.scenario.suggested_candidates || []),
    "CM-001",
    "CM-002",
    "CM-005",
  ]));
  recalculate();
}

function renderDisarmAssessment() {
  const assessment = getDisarmAssessment();
  byId("disarmRiskPill").textContent = `risk ${assessment.risk.toFixed(2)}`;
  byId("disarmTechniqueCount").textContent = `${assessment.selectedTechniques.length} techniques`;
  drawDisarmFlow(assessment);
  renderThreatFlowFrameworks();
  byId("athenaMappingCards").innerHTML = renderAthenaMappingCards(assessment);
}

function renderAthenaMappingCards(assessment) {
  const p = ["govern", "detect", "respond"];
  const l = ["organization", "intelligence"];
  const e = ["cognitive", "virtual"];
  const d = Object.entries(assessment.domainImpacts)
    .filter(([, value]) => value >= 0.35)
    .map(([domain]) => domain);
  const frameworks = getThreatFlowFrameworkNames();
  return [
    ["Threat", assessment.threat || "-"],
    ["DISARM tactic", assessment.tactic.label],
    ["Frameworks", frameworks.join(", ") || "DISARM"],
    ["P", p.join(", ")],
    ["D", d.join(", ") || "cyber"],
    ["L", l.join(", ")],
    ["E", e.join(", ")],
  ].map(([label, value]) => `
    <div class="athena-map-card">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
}

function getThreatFlowFrameworkNames() {
  const names = new Set(["DISARM"]);
  getFrameworkMappingRows().forEach((row) => names.add(row.framework));
  return Array.from(names);
}

function renderThreatFlowFrameworks() {
  const target = byId("threatFlowFrameworks");
  if (!target) return;
  const names = getThreatFlowFrameworkNames();
  target.innerHTML = names
    .map((name) => `<span class="framework-chip">${name}</span>`)
    .join("");
}

function drawDisarmFlow(assessment) {
  const canvas = byId("disarmFlowCanvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#0b1115";
  ctx.fillRect(0, 0, width, height);

  const frameworkNames = getThreatFlowFrameworkNames();
  const otherFrameworks = frameworkNames.filter((name) => name !== "DISARM");
  const nodes = [
    { label: "Threat", detail: assessment.threat || "campaign", x: 70, y: 80, color: "#ef6868" },
    { label: "DISARM", detail: assessment.tactic.label, x: 225, y: 80, color: "#a98bff" },
    { label: "Frameworks", detail: otherFrameworks.join(" + ") || "scenario map", x: 380, y: 80, color: "#79d389" },
    { label: "Impact", detail: `cognitive ${assessment.risk.toFixed(2)}`, x: 535, y: 80, color: "#f3b75d" },
    { label: "ATHENA", detail: "P-D-L-E + CM", x: 690, y: 80, color: "#35c2d1" },
  ];

  nodes.forEach((node, index) => {
    drawFlowNode(ctx, node);
    if (index < nodes.length - 1) {
      drawArrow(ctx, node.x + 56, node.y, nodes[index + 1].x - 56, nodes[index + 1].y, node.color);
    }
  });

  const domains = Object.entries(assessment.domainImpacts);
  const left = 76;
  const top = 190;
  domains.forEach(([domain, value], index) => {
    const x = left + index * 132;
    const color = value >= 0.7 ? "#ef6868" : value >= 0.4 ? "#f3b75d" : "#35c2d1";
    ctx.fillStyle = color;
    roundRect(ctx, x, top + 72 - value * 72, 76, value * 72, 5);
    ctx.fill();
    ctx.fillStyle = "#e8eef1";
    ctx.font = "700 12px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(domainLabels[domain], x + 38, top + 96);
    ctx.fillText(value.toFixed(2), x + 38, top + 114);
    ctx.textAlign = "left";
  });
}

function drawFlowNode(ctx, node) {
  ctx.strokeStyle = node.color;
  ctx.fillStyle = "rgba(255,255,255,0.035)";
  roundRect(ctx, node.x - 56, node.y - 32, 112, 64, 8);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = node.color;
  ctx.font = "800 12px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(node.label, node.x, node.y - 6);
  ctx.fillStyle = "#c5d0d5";
  ctx.font = "600 11px Inter, sans-serif";
  ctx.fillText(trimCanvasText(node.detail, 20), node.x, node.y + 14);
  ctx.textAlign = "left";
}

function drawArrow(ctx, x1, y1, x2, y2, color) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.65;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - 8, y2 - 5);
  ctx.lineTo(x2 - 8, y2 + 5);
  ctx.closePath();
  ctx.fill();
  ctx.globalAlpha = 1;
}

function trimCanvasText(text, max) {
  return text.length > max ? `${text.slice(0, max - 1)}...` : text;
}

function mergeMax(left, right) {
  const merged = { ...left };
  Object.entries(right).forEach(([key, value]) => {
    merged[key] = Math.max(Number(merged[key] || 0), Number(value || 0));
  });
  return merged;
}

function scaleMap(values, factor) {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, Math.min(1, Number((value * factor).toFixed(4)))])
  );
}

function blendLevels(current, target, factor) {
  const blended = { ...current };
  Object.entries(target).forEach(([key, value]) => {
    const currentValue = Number(blended[key] || 0);
    blended[key] = Number(((currentValue * 0.45) + (Number(value) * factor * 0.55)).toFixed(3));
  });
  return blended;
}

function suggestCandidatesForVulnerability(type) {
  const map = {
    software_exploit: ["CM-002", "CM-003", "CM-006", "CM-008"],
    identity_compromise: ["CM-002", "CM-006", "CM-001"],
    supply_chain: ["CM-001", "CM-002", "CM-008"],
    ot_cps: ["CM-001", "CM-003", "CM-008"],
    gnss_spoofing: ["CM-001", "CM-002", "CM-004", "CM-005"],
    communication_disruption: ["CM-001", "CM-005", "CM-008"],
    data_poisoning: ["CM-002", "CM-007", "CM-001"],
    disinformation: ["CM-001", "CM-002", "CM-005"],
  };
  return map[type] || ["CM-001", "CM-002"];
}

function recalculate() {
  if (!state.kb || !state.scenario) return;

  const budget = Number(byId("budget").value);
  const maxAvailability = availabilityOrder[byId("availability").value];
  const allowedIds = new Set(state.scenario.suggested_candidates || []);
  const candidates = state.kb.countermeasures
    .filter((cm) => !allowedIds.size || allowedIds.has(cm.id))
    .filter((cm) => cm.cost <= budget)
    .filter((cm) => availabilityOrder[cm.availability_impact] <= maxAvailability)
    .map(scoreCountermeasure)
    .sort((a, b) => a.score - b.score || a.cost - b.cost);

  state.ranked = candidates;
  state.selectedId = state.selectedId && candidates.some((cm) => cm.id === state.selectedId)
    ? state.selectedId
    : candidates[0]?.id;

  renderAll();
}

const dashboardPages = {
  overview: ["ATHENA", "MDO CTI Console"],
  "new-scenario": ["Nuovo Scenario", "Scenario intake e calcolo del rischio"],
  vulnerabilities: ["Vulnerabilities", "Valutazione multi-dominio delle vulnerabilità"],
  simulation: ["Simulation", "Cascata di impatto e risposta ATHENA"],
  matrix: ["ATHENA Matrix", "Matrice, ranking e decision"],
  "kg-schema": ["KG Schema v0.1", "Classi, relazioni e schema universale"],
  "framework-disarm": ["DISARM", "Information Threat-to-ATHENA mapping"],
  "framework-attack": ["MITRE ATT&CK", "Cyber Threat-to-ATHENA mapping"],
  "framework-atlas": ["MITRE ATLAS", "AI/ML Threat-to-ATHENA mapping"],
  "framework-space-shield": ["ESA SPACE-SHIELD", "Space Threat-to-ATHENA mapping"],
  "nato-dashboard": ["NATO MDO", "Case study e orchestrazione multi-dominio"],
};

function initializeDashboardPages() {
  document.querySelectorAll("#athenaDashboard > section").forEach((section) => section.classList.add("app-page"));
  window.addEventListener("hashchange", routeDashboardPage);
}

function routeDashboardPage() {
  let pageId = window.location.hash.replace(/^#/, "") || "overview";
  if (pageId === "ranking" || pageId === "decision") {
    pageId = "matrix";
    window.history.replaceState(null, "", "#matrix");
  }
  if (!dashboardPages[pageId]) pageId = "overview";
  const isNato = pageId === "nato-dashboard";
  byId("athenaDashboard").classList.toggle("is-active", !isNato);
  byId("nato-dashboard").classList.toggle("is-active", isNato);
  document.querySelectorAll("#athenaDashboard > .app-page").forEach((page) => page.classList.toggle("is-active", !isNato && page.id === pageId));
  document.querySelectorAll(".nav-list a").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${pageId}`));

  const [title, eyebrow] = dashboardPages[pageId];
  byId("pageTitle").textContent = title;
  byId("pageEyebrow").textContent = eyebrow;
  document.querySelectorAll(".dashboard-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.dashboardTarget === (isNato ? "nato" : "athena"));
  });

  if (isNato) {
    renderNatoDashboard();
    window.requestAnimationFrame(drawNatoFlow);
  } else if (pageId === "matrix") {
    window.requestAnimationFrame(renderCanvas);
  } else if (pageId === "simulation") {
    window.requestAnimationFrame(renderSimulation);
  } else if (pageId === "vulnerabilities") {
    window.requestAnimationFrame(renderVulnerabilityAssessment);
  }
}

function setDashboardView(view) {
  window.location.hash = view === "nato" ? "nato-dashboard" : "overview";
  routeDashboardPage();
}

function getActiveNatoCase() {
  const selected = byId("natoCaseSelect")?.value;
  const cases = getNatoCases();
  return cases.find((item) => item.id === selected) || cases[0];
}

function getNatoCases() {
  return state.kb?.nato_cases || fallbackNatoCases;
}

function renderNatoCaseSelector() {
  const select = byId("natoCaseSelect");
  if (!select) return;
  const cases = getNatoCases();
  const previous = select.value || cases[0]?.id;
  select.innerHTML = "";
  cases.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.title.replace(" sviluppato in ATHENA", "");
    select.append(option);
  });
  select.value = cases.some((item) => item.id === previous) ? previous : cases[0]?.id;
}

function getNatoScenario() {
  const activeCase = getActiveNatoCase();
  return state.kb?.example_scenarios?.find((scenario) => scenario.id === activeCase.scenarioId);
}

function renderNatoDashboard() {
  renderNatoCaseSelector();
  const activeCase = getActiveNatoCase();
  const scenario = getNatoScenario();
  if (!scenario) return;
  byId("natoCaseTitle").textContent = activeCase.title;
  byId("natoCaseDescription").textContent = activeCase.description;
  byId("natoScenarioLabel").textContent = `${scenario.id} - ${scenario.name}`;
  byId("natoSourceLink").textContent = activeCase.sourceLabel;
  byId("natoSourceLink").href = activeCase.sourceUrl;
  byId("natoFrameworkTitle").textContent = activeCase.id === "viasat"
    ? "MITRE ATT&CK + ESA SPACE-SHIELD + ATHENA"
    : "MITRE ATT&CK + ATHENA response";
  byId("natoResponseTitle").textContent = `Risposta ATHENA per ${scenario.name}`;
  renderNatoTimeline(activeCase);
  renderNatoCaseScenarios(activeCase);
  renderNatoVector(scenario);
  renderNatoFlowSteps(activeCase);
  renderNatoFrameworkRows(activeCase);
  renderNatoCountermeasures(scenario);
  drawNatoFlow();
}

function renderNatoVector(scenario) {
  const domainEntries = Object.entries(scenario.x.ca_exp || {}).sort((a, b) => b[1] - a[1]);
  const topDomain = domainEntries[0] || ["-", 0];
  byId("natoTopDomain").textContent = `${domainLabels[topDomain[0]] || topDomain[0]} ${Number(topDomain[1]).toFixed(2)}`;
  const groups = [
    ["Compromised controls", scenario.x.co_v, 1],
    ["Domain capability exposure", scenario.x.ca_exp, 1],
    ["Security maturity", scenario.x.l_v, 5],
    ["Effect impact", scenario.x.i_pos, 1],
  ];
  byId("natoAthenaVector").innerHTML = groups.map(([title, values, max]) => {
    const top = Object.entries(values).sort((a, b) => b[1] - a[1]).slice(0, 4);
    return `
      <div class="nato-vector-card">
        <span>${title}</span>
        ${top.map(([key, value]) => {
          const pct = Math.max(0, Math.min(100, (Number(value) / max) * 100));
          return `
            <strong>${domainLabels[key] || key}: ${Number(value).toFixed(2)}</strong>
            <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
          `;
        }).join("")}
      </div>
    `;
  }).join("");
}

function renderNatoTimeline(activeCase = getActiveNatoCase()) {
  const timeline = activeCase.timeline || [];
  byId("natoTimeline").innerHTML = timeline.map((step) => `
    <div class="nato-timeline-card">
      <span>${step.time}</span>
      <strong>${step.event}</strong>
    </div>
  `).join("");
}

function renderNatoCaseScenarios(activeCase = getActiveNatoCase()) {
  const scenarios = activeCase.case_scenarios || [];
  byId("natoScenarioVariantCount").textContent = `${scenarios.length} scenarios`;
  byId("natoCaseScenarios").innerHTML = scenarios.map((scenario) => `
    <div class="nato-case-scenario-card">
      <span>${scenario.id} | ${(scenario.dominant_domains || []).join(", ")}</span>
      <strong>${scenario.name}</strong>
      <p>${scenario.summary}</p>
      <p>${scenario.athena_focus}</p>
      <footer>
        ${(scenario.responses || []).map((id) => `<span class="mini-badge">${id}</span>`).join(" ")}
      </footer>
    </div>
  `).join("");
}

function renderNatoFlowSteps(activeCase = getActiveNatoCase()) {
  byId("natoFlowSteps").innerHTML = activeCase.flow.map((step, index) => `
    <div class="nato-step-card">
      <span>${String(index + 1).padStart(2, "0")} ${step.phase}</span>
      <strong>${step.label}</strong>
      <p>${step.evidence}</p>
    </div>
  `).join("");
}

function renderNatoFrameworkRows(activeCase = getActiveNatoCase()) {
  byId("natoFrameworkBody").innerHTML = activeCase.frameworkRows.map((row) => `
    <tr>
      <td><strong>${row[0]}</strong></td>
      <td>${row[1]}</td>
      <td>${row[2]}</td>
      <td>${row[3].split(", ").map((id) => `<span class="mini-badge">${id}</span>`).join(" ")}</td>
    </tr>
  `).join("");
}

function renderNatoCountermeasures(scenario) {
  const allowedIds = new Set(scenario.suggested_candidates || []);
  const previousScenario = state.scenario;
  const budget = Number(byId("budget").value);
  const maxAvailability = availabilityOrder[byId("availability").value];
  let ranked = [];
  try {
    state.scenario = scenario;
    ranked = state.kb.countermeasures
      .filter((cm) => !allowedIds.size || allowedIds.has(cm.id))
      .filter((cm) => cm.cost <= budget)
      .filter((cm) => availabilityOrder[cm.availability_impact] <= maxAvailability)
      .map(scoreCountermeasure)
      .sort((a, b) => a.score - b.score || a.cost - b.cost)
      .slice(0, 5);
  } finally {
    state.scenario = previousScenario;
  }
  byId("natoCandidateCount").textContent = `${ranked.length} candidates`;
  byId("natoCountermeasureCards").innerHTML = ranked.map((cm, index) => `
    <div class="nato-countermeasure-card">
      <span>#${index + 1} residual score ${formatNumber(cm.score)}</span>
      <strong>${cm.id} - ${cm.name}</strong>
      <p>Impact ${formatNumber(cm.impactGap)} | Controls ${formatNumber(cm.controlResidual)} | Levels ${formatNumber(cm.levelGap)} | ${cm.time_to_effect}</p>
    </div>
  `).join("");
}

function drawNatoFlow() {
  const canvas = byId("natoFlowCanvas");
  if (!canvas) return;
  const activeCase = getActiveNatoCase();
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#0b1115";
  ctx.fillRect(0, 0, w, h);
  const labels = activeCase.id === "viasat"
    ? ["Ground access", "Modem fleet", "AcidRain wiper", "SATCOM outage"]
    : ["Vendor update", "Enterprise host", "Identity spread", "Service outage"];
  const nodes = [
    { x: 105, y: 180, label: labels[0], color: "#f3b75d" },
    { x: 335, y: 120, label: labels[1], color: "#35c2d1" },
    { x: 575, y: 205, label: labels[2], color: "#a98bff" },
    { x: 830, y: 150, label: labels[3], color: "#ef6868" },
  ];
  ctx.lineWidth = 2;
  for (let i = 0; i < nodes.length - 1; i += 1) {
    const from = nodes[i];
    const to = nodes[i + 1];
    ctx.strokeStyle = "rgba(197, 208, 213, 0.42)";
    ctx.beginPath();
    ctx.moveTo(from.x + 58, from.y);
    ctx.bezierCurveTo(from.x + 120, from.y - 48, to.x - 120, to.y + 48, to.x - 58, to.y);
    ctx.stroke();
    ctx.fillStyle = "rgba(197, 208, 213, 0.75)";
    ctx.beginPath();
    ctx.moveTo(to.x - 62, to.y - 5);
    ctx.lineTo(to.x - 50, to.y);
    ctx.lineTo(to.x - 62, to.y + 5);
    ctx.closePath();
    ctx.fill();
  }
  nodes.forEach((node, index) => {
    ctx.fillStyle = "rgba(255,255,255,0.04)";
    ctx.strokeStyle = node.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(node.x - 74, node.y - 42, 148, 84, 10);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = node.color;
    ctx.font = "700 13px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`STEP ${index + 1}`, node.x, node.y - 11);
    ctx.fillStyle = "#e8eef1";
    ctx.font = "700 14px Inter, sans-serif";
    ctx.fillText(node.label, node.x, node.y + 14);
  });
  ctx.fillStyle = "#91a1aa";
  ctx.font = "700 12px Inter, sans-serif";
  ctx.textAlign = "left";
  const caption = activeCase.id === "viasat"
    ? "ATHENA: correlate SATCOM anomalies -> isolate management path -> fallback communications -> terminal recovery"
    : "ATHENA: detect -> contain -> harden identity -> recover prioritized services";
  ctx.fillText(caption, 28, 322);
}

function renderScenarioSelector() {
  const select = byId("scenarioSelect");
  select.innerHTML = "";
  state.kb.example_scenarios.forEach((scenario) => {
    const option = document.createElement("option");
    option.value = scenario.id;
    option.textContent = `${scenario.id} - ${scenario.name}${scenario.is_custom ? " · custom" : ""}`;
    select.append(option);
  });
  select.value = state.scenario.id;
}

function renderSimulationScenarioSelector() {
  const select = byId("simulationScenarioSelect");
  if (!select) return;
  const previous = select.value || state.simulationScenarioId || state.scenario?.id;
  select.innerHTML = "";
  state.kb.example_scenarios.forEach((scenario) => {
    const option = document.createElement("option");
    option.value = scenario.id;
    option.textContent = `${scenario.id} - ${scenario.name}${scenario.is_custom ? " · custom" : ""}`;
    select.append(option);
  });
  state.simulationScenarioId = state.kb.example_scenarios.some((scenario) => scenario.id === previous)
    ? previous
    : state.kb.example_scenarios[0]?.id;
  select.value = state.simulationScenarioId;
}

function renderScenarioSummary() {
  byId("scenarioName").textContent = state.scenario.name;
  const risk = state.scenario.gross_risk || calculateGrossRisk(state.scenario.x);
  byId("scenarioId").textContent = `${state.scenario.id} · risk ${risk.score}`;
  const entities = state.scenario.entities ? [
    ["Adversary", state.scenario.entities.adversary],
    ["Capability", state.scenario.entities.capability],
    ["Mission / Infrastructure", state.scenario.mission || state.scenario.entities.infrastructure],
    ["Asset / Victim", state.scenario.asset || state.scenario.entities.victim],
  ] : entitySummaries;
  byId("entityStrip").innerHTML = entities
    .map(([label, text]) => `<div class="entity-card"><span>${label}</span><strong>${text}</strong></div>`)
    .join("");
}

function renderRecommendation() {
  const best = state.ranked[0];
  if (!best) {
    byId("bestScore").textContent = "--";
    byId("bestName").textContent = "No candidate";
    byId("bestMeta").textContent = "No countermeasure matches the active constraints.";
    return;
  }

  byId("bestScore").textContent = best.score.toFixed(2);
  byId("bestName").textContent = `${best.id} - ${best.name}`;
  byId("bestMeta").textContent =
    `Cost ${best.cost}, ${best.time_to_effect}, availability ${best.availability_impact}, ` +
    `human approval ${best.human_approval ? "required" : "not required"}.`;
  const angle = Math.max(24, Math.min(330, 330 - best.score * 72));
  document.documentElement.style.setProperty("--score-angle", `${angle}deg`);
}

function renderRanking() {
  byId("candidateCount").textContent = `${state.ranked.length} candidates`;
  byId("rankingBody").innerHTML = state.ranked
    .map((cm, index) => {
      const selected = cm.id === state.selectedId ? "selected" : "";
      return `
        <tr class="${selected}" data-id="${cm.id}">
          <td>${index + 1}</td>
          <td><strong>${cm.id}</strong><br><span class="muted-text">${cm.name}</span></td>
          <td class="score-cell">${formatNumber(cm.score)}</td>
          <td>${formatNumber(cm.impactGap)}</td>
          <td>${formatNumber(cm.controlResidual)}</td>
          <td>${formatNumber(cm.levelGap)}</td>
          <td>${cm.human_approval ? "Human" : "Auto-ok"}</td>
        </tr>
      `;
    })
    .join("");

  byId("rankingBody").querySelectorAll("tr").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedId = row.dataset.id;
      renderAll();
    });
  });
}

function renderDetail() {
  const selected = state.ranked.find((cm) => cm.id === state.selectedId) || state.ranked[0];
  if (!selected) return;

  byId("detailTitle").textContent = `${selected.id} - ${selected.name}`;
  byId("detailBadges").innerHTML = [
    `<span class="badge ${selected.human_approval ? "amber" : "green"}">${selected.human_approval ? "human approval" : "auto advisory"}</span>`,
    `<span class="badge">cost ${selected.cost}</span>`,
    `<span class="badge">${selected.time_to_effect}</span>`,
    `<span class="badge ${selected.availability_impact === "medium" ? "amber" : "green"}">availability ${selected.availability_impact}</span>`,
  ].join("");
  byId("detailImpact").textContent = formatNumber(selected.impactGap);
  byId("detailControls").textContent = formatNumber(selected.controlResidual);
  byId("detailLevels").textContent = formatNumber(selected.levelGap);
  byId("domainBars").innerHTML = renderBars(selected.ca_def, 1);
  byId("levelBars").innerHTML = renderBars(selected.l_target, 5);
}

function renderBars(values, max) {
  return Object.entries(values)
    .map(([label, value]) => {
      const percent = Math.max(0, Math.min(100, (Number(value) / max) * 100));
      return `
        <div class="bar-row">
          <span>${label}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${percent}%"></div></div>
          <strong>${Number(value).toFixed(1)}</strong>
        </div>
      `;
    })
    .join("");
}

function inferFrameworkKeys() {
  const frameworkCatalog = getFrameworkCatalog();
  const keys = new Set();
  const scenarioText = `${state.scenario?.name || ""} ${state.scenario?.description || ""}`.toLowerCase();
  const capabilityText = JSON.stringify(state.scenario?.diamond?.capability || {}).toLowerCase();
  const combined = `${scenarioText} ${capabilityText}`;
  const ca = state.scenario?.x?.ca_exp || {};
  const impact = state.scenario?.x?.i_pos || {};
  const vulnType = byId("vulnerabilityType")?.value;

  if (vulnType && frameworkCatalog[vulnType]) keys.add(vulnType);
  if (combined.includes("gnss") || ca.space >= 0.65) keys.add("gnss_spoofing");
  if (combined.includes("satellite") || combined.includes("communication") || ca.space >= 0.8) keys.add("communication_disruption");
  if (combined.includes("identity") || combined.includes("credential")) keys.add("identity_compromise");
  if (combined.includes("supply chain")) keys.add("supply_chain");
  if (combined.includes("ot") || combined.includes("cps") || combined.includes("ics") || impact.physical >= 0.82) keys.add("ot_cps");
  if (combined.includes("data poisoning") || combined.includes("model") || combined.includes("drift")) keys.add("data_poisoning");
  if (combined.includes("disinformation") || impact.cognitive >= 0.8) keys.add("disinformation");
  if (combined.includes("software") || combined.includes("exploit") || impact.virtual >= 0.8) keys.add("software_exploit");

  return Array.from(keys);
}

function getFrameworkMappingRows() {
  const frameworkCatalog = getFrameworkCatalog();
  const keys = inferFrameworkKeys();
  const rows = keys.flatMap((key) => frameworkCatalog[key] || []);
  const seen = new Set();
  return rows.filter((row) => {
    const id = `${row.framework}:${row.tactic}:${row.technique}`;
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

function getFrameworkCatalog() {
  return state.kb?.framework_mappings || frameworkMappings;
}

function renderFrameworkMapping() {
  renderFrameworkPage(byId("framework-attack"), "MITRE ATT&CK");
  renderFrameworkPage(byId("framework-atlas"), "MITRE ATLAS");
  renderFrameworkPage(byId("framework-space-shield"), "ESA SPACE-SHIELD");
}

function getFrameworkCatalogRows(frameworkName) {
  const rows = Object.values(getFrameworkCatalog()).flat().filter((row) => row.framework === frameworkName);
  const seen = new Set();
  return rows.filter((row) => {
    const key = `${row.tactic}:${row.technique}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function renderFrameworkPage(section, frameworkName) {
  if (!section) return;
  const activeRows = getFrameworkMappingRows().filter((row) => row.framework === frameworkName);
  const rows = activeRows.length ? activeRows : getFrameworkCatalogRows(frameworkName);
  const body = section.querySelector("[data-framework-body]") || byId("frameworkMappingBody");
  const count = section.querySelector("[data-framework-count]") || byId("frameworkMatchCount");
  const coverage = section.querySelector("[data-framework-coverage]") || byId("frameworkCoverageCards");
  const note = section.querySelector("[data-framework-note]") || byId("frameworkMappingNote");
  if (!body || !count || !coverage || !note) return;

  count.textContent = `${activeRows.length}/${rows.length} scenario mappings`;
  body.innerHTML = rows
    .map((row) => `
      <tr>
        <td><strong>${row.framework}</strong></td>
        <td>${row.tactic}</td>
        <td>${row.technique}</td>
        <td>${row.trigger}</td>
        <td>${row.response.map((id) => `<span class="mini-badge">${id}</span>`).join(" ")}</td>
      </tr>
    `)
    .join("");

  const domainCoverage = new Set(rows.flatMap((row) => row.domains || []));
  const responseCoverage = new Set(rows.flatMap((row) => row.response || []));
  coverage.innerHTML = [
    ["Framework", frameworkName],
    ["Domains", Array.from(domainCoverage).map((domain) => domainLabels[domain] || domain).join(", ") || "-"],
    ["ATHENA CM", Array.from(responseCoverage).join(", ") || "-"],
    ["Scenario", `${state.scenario.id} - ${state.scenario.name}`],
  ].map(([label, value]) => `
    <div class="framework-coverage-card">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");

  note.textContent = activeRows.length
    ? "Le righe evidenziano i mapping compatibili con lo scenario attivo; il catalogo collega tattiche e tecniche a domini ATHENA e contromisure candidate."
    : "Nessuna corrispondenza diretta con lo scenario attivo: viene mostrato il catalogo difensivo del framework come riferimento.";
}

function renderVectors() {
  const x = state.scenario.x;
  byId("vectorGrid").innerHTML = Object.entries(x)
    .map(([group, values]) => `
      <div class="vector-group">
        <h3>${axisLabels[group] || group}</h3>
        ${Object.entries(values).map(([key, value]) => {
          const max = group === "l_v" ? 5 : 1;
          const pct = Math.max(0, Math.min(100, (Number(value) / max) * 100));
          return `
            <div class="vector-item">
              <span>${key}</span>
              <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
              <strong>${Number(value).toFixed(2)}</strong>
            </div>
          `;
        }).join("")}
      </div>
    `)
    .join("");
}

function renderKnowledgeBase() {
  const query = byId("kbSearch")?.value.trim().toLowerCase() || "";
  const view = byId("kbView")?.value || "catalog";
  const catalog = byId("kbCatalog");
  const raw = byId("kbRaw");
  if (!catalog || !raw) return;

  const records = state.kb.countermeasures.filter((cm) => {
    const searchable = JSON.stringify(cm).toLowerCase();
    return !query || searchable.includes(query);
  });

  byId("kbRecordCount").textContent = `${records.length} records`;
  catalog.hidden = view !== "catalog";
  raw.hidden = view !== "raw";

  if (view === "raw") {
    raw.textContent = filterRawKnowledgeBase(state.kbText, query);
    return;
  }

  catalog.innerHTML = records
    .map((cm) => {
      const active = cm.id === state.selectedId ? "active" : "";
      const processes = inferProcesses(cm).join(", ") || "-";
      const domains = Object.entries(cm.ca_def)
        .filter(([, value]) => value > 0)
        .map(([key]) => key)
        .join(", ");
      const controls = Object.keys(cm.co_app).join(", ");
      const effects = Object.entries(cm.i_target)
        .filter(([, value]) => value > 0.2)
        .map(([key]) => key)
        .join(", ");
      return `
        <article class="kb-card ${active}" data-id="${cm.id}">
          <div class="kb-card-head">
            <h3>${cm.id} - ${cm.name}</h3>
            <span class="badge ${cm.human_approval ? "amber" : "green"}">${cm.human_approval ? "human" : "auto-ok"}</span>
          </div>
          <p>${buildCountermeasureSummary(cm)}</p>
          <div class="kb-mini-grid">
            <div><span>P</span><strong>${processes}</strong></div>
            <div><span>D</span><strong>${domains}</strong></div>
            <div><span>Controls</span><strong>${controls}</strong></div>
            <div><span>Effects</span><strong>${effects}</strong></div>
          </div>
        </article>
      `;
    })
    .join("");

  catalog.querySelectorAll(".kb-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedId = card.dataset.id;
      renderAll();
      window.location.hash = "matrix";
    });
  });
}

function renderKbArchitecture() {
  const architecture = state.kb?.kb_architecture;
  const summary = byId("kbArchitectureSummary");
  const layers = byId("kbArchitectureLayers");
  const frameworks = byId("kbConceptualFrameworks");
  if (!architecture || !summary || !layers || !frameworks) return;

  byId("kbArchitectureVersion").textContent = state.kb?.metadata?.version || "v-";
  const paper = architecture.paper_alignment || {};
  const tensor = architecture.athena_tensor_model || {};
  summary.innerHTML = [
    ["Paper", paper.framework_name || "-"],
    ["Gap", paper.research_gap || "-"],
    ["Tensor", tensor.relation || "-"],
  ].map(([label, value]) => `
    <div class="kb-architecture-card">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");

  layers.innerHTML = (architecture.entity_layers || []).map((layer) => `
    <div class="kb-layer-card">
      <span>${layer.id} | ${(layer.entities || []).join(", ")}</span>
      <strong>${layer.name}</strong>
      <p>${layer.purpose}</p>
    </div>
  `).join("");

  frameworks.innerHTML = (architecture.conceptual_frameworks || []).map((framework) => {
    const mechanisms = (framework.mdo_mechanisms || []).map((item) => item.name).join(" | ");
    const domains = (framework.operational_domains || []).join(", ");
    const dime = Object.keys(framework.dime_instruments || {}).join(", ");
    return `
      <div class="kb-framework-card">
        <span>Conceptual framework | ${framework.method || "-"}</span>
        <strong>${framework.name}</strong>
        <p>${framework.purpose}</p>
        <div class="kb-framework-meta">
          <span class="mini-badge">domains: ${domains}</span>
          <span class="mini-badge">DIME: ${dime}</span>
          <span class="mini-badge">source: ${framework.source_document || "-"}</span>
        </div>
        <p>${framework.kb_usage?.definition_rule || ""}</p>
        <div class="kb-framework-mechanisms">
          ${mechanisms.split(" | ").filter(Boolean).map((item) => `<span class="framework-chip">${item}</span>`).join("")}
        </div>
      </div>
    `;
  }).join("");
}

function filterRawKnowledgeBase(text, query) {
  if (!query) return text;
  const lines = text.split("\n");
  const matches = [];
  lines.forEach((line, index) => {
    if (line.toLowerCase().includes(query)) {
      const start = Math.max(0, index - 4);
      const end = Math.min(lines.length, index + 8);
      matches.push(lines.slice(start, end).join("\n"));
    }
  });
  return matches.length ? matches.join("\n\n---\n\n") : "No raw YAML matches.";
}

function buildCountermeasureSummary(cm) {
  const time = cm.time_to_effect;
  const approval = cm.human_approval ? "requires expert approval" : "can be proposed as advisory action";
  return `Effect in ${time}, availability impact ${cm.availability_impact}; ${approval}.`;
}

function renderKgSchema() {
  const schema = window.ATHENA_SCHEMA;
  if (!schema || !byId("schemaClassBody")) return;

  const search = (byId("schemaSearch")?.value || "").trim().toLowerCase();
  const layer = byId("schemaLayerFilter")?.value || "all";
  const visible = schema.classes.filter((item) => {
    const matchesLayer = layer === "all" || item.layer === layer;
    const matchesSearch = !search || JSON.stringify(item).toLowerCase().includes(search);
    return matchesLayer && matchesSearch;
  });

  byId("schemaClassCount").textContent = schema.classes.length;
  byId("schemaRelationCount").textContent = schema.relationships.length;
  byId("schemaVisibleCount").textContent = `${visible.length} visible`;
  byId("schemaClassBody").innerHTML = visible.map((item) => `
    <tr>
      <td><span class="schema-prefix">${item.prefix}</span><strong>${item.name}</strong></td>
      <td><span class="mini-badge">${item.layer}</span></td>
      <td>${item.attributes}</td>
      <td>${item.relationships}</td>
      <td><span class="source-pill ${item.source === "OpenCTI" ? "source-opencti" : "source-athena"}">${item.source}</span></td>
      <td>${item.mapping}</td>
    </tr>`).join("");

  byId("schemaPipeline").innerHTML = schema.pipeline.map((step, index) => `
    <div class="pipeline-step"><span>${String(index + 1).padStart(2, "0")}</span><strong>${step}</strong></div>
  `).join("");
  byId("populationFields").innerHTML = schema.populationFields.map((field) => `<code>${field}</code>`).join("");
  byId("populationExample").textContent = [
    "NODE,CSTATE-001,ControlState,DE.AE state,,SCN-001,,,,compromise_value,0.70,float,,,,,,,,,,,,active,,true,analyst,",
    "EDGE,REL-001,Relationship,,,SCN-001,SCN-001,contains,TE-001,,,,,0.95,inferred,analyst,,,,,,,,active,,true,ATHENA,",
  ].join("\n");
}

function initializeKgSchema() {
  const schema = window.ATHENA_SCHEMA;
  const select = byId("schemaLayerFilter");
  if (!schema || !select) return;
  const layers = [...new Set(schema.classes.map((item) => item.layer))];
  select.innerHTML = `<option value="all">tutti i layer</option>${layers.map((item) => `<option value="${item}">${item}</option>`).join("")}`;
  renderKgSchema();
}

function downloadPopulationSchema() {
  const schema = window.ATHENA_SCHEMA;
  if (!schema) return;
  const csv = `${schema.populationFields.join(",")}\n`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ATHENA_Universal_Population_Schema_v0.1.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function renderContextPack() {
  const selected = state.ranked.find((cm) => cm.id === state.selectedId) || state.ranked[0];
  const target = byId("contextPack");
  if (!target || !selected) return;

  const payload = {
    objective: "Use ATHENA KB to evaluate defensive countermeasures for the active MDO scenario.",
    safety_scope: "Defensive analysis, simulation, risk management and incident response only.",
    scenario: {
      id: state.scenario.id,
      name: state.scenario.name,
      vector_x: state.scenario.x,
    },
    vulnerability_assessment: buildVulnerabilityContext(),
    disarm_mapping: buildDisarmContext(),
    framework_mapping: buildFrameworkContext(),
    scoring_policy: {
      weights: getWeights(),
      budget: Number(byId("budget").value),
      max_availability_impact: byId("availability").value,
    },
    selected_countermeasure: {
      id: selected.id,
      name: selected.name,
      score: Number(selected.score.toFixed(4)),
      impact_gap: Number(selected.impactGap.toFixed(4)),
      control_residual: Number(selected.controlResidual.toFixed(4)),
      level_gap: Number(selected.levelGap.toFixed(4)),
      co_app: selected.co_app,
      ca_def: selected.ca_def,
      l_target: selected.l_target,
      i_target: selected.i_target,
      cost: selected.cost,
      time_to_effect: selected.time_to_effect,
      availability_impact: selected.availability_impact,
      human_approval: selected.human_approval,
    },
    ranked_candidates: state.ranked.map((cm, index) => ({
      rank: index + 1,
      id: cm.id,
      name: cm.name,
      score: Number(cm.score.toFixed(4)),
      human_approval: cm.human_approval,
    })),
    expected_response_format: [
      "Recommendation",
      "Why this countermeasure fits P-D-L-E",
      "Required evidence",
      "Operational constraints",
      "Residual risk",
      "Human-in-the-loop decision",
    ],
  };

  target.value = JSON.stringify(payload, null, 2);
}

function buildFrameworkContext() {
  return getFrameworkMappingRows().map((row) => ({
    framework: row.framework,
    tactic: row.tactic,
    technique: row.technique,
    trigger: row.trigger,
    athena_response: row.response,
    domains: row.domains,
  }));
}

function buildVulnerabilityContext() {
  const assessment = calculateDomainImpact();
  const dominant = Object.entries(assessment.impacts).sort((a, b) => b[1] - a[1])[0];
  return {
    type: assessment.profile.label,
    affected_asset: assessment.input.asset,
    severity: assessment.input.severity,
    exposure: assessment.input.exposure,
    confidence: assessment.input.confidence,
    selected_domains: Object.entries(assessment.input.selectedDomains)
      .filter(([, enabled]) => enabled)
      .map(([domain]) => domain),
    domain_impacts: assessment.impacts,
    dominant_domain: dominant ? dominant[0] : null,
    applied_to_scoring: state.vulnerabilityApplied,
  };
}

function buildDisarmContext() {
  const assessment = getDisarmAssessment();
  return {
    applied_to_athena: state.disarmApplied,
    threat: assessment.threat,
    objective: assessment.objective,
    audience: assessment.audience,
    tactic: assessment.tactic.label,
    techniques: assessment.selectedTechniques.map((technique) => ({
      id: technique.id,
      label: technique.label,
      trigger: technique.trigger,
      domains: technique.domains,
      athena_response: technique.response,
      weight: technique.weight,
    })),
    risk: assessment.risk,
    mapped_domain_impacts: assessment.domainImpacts,
    athena_translation: {
      P: ["govern", "detect", "respond"],
      D: Object.entries(assessment.domainImpacts).filter(([, value]) => value >= 0.35).map(([domain]) => domain),
      L: ["organization", "intelligence"],
      E: ["cognitive", "virtual"],
      candidate_countermeasures: ["CM-001", "CM-002", "CM-005"],
    },
  };
}

function renderVulnerabilityAssessment() {
  const assessment = calculateDomainImpact();
  const { input, profile, impacts } = assessment;
  const dominant = Object.entries(impacts).sort((a, b) => b[1] - a[1])[0];

  byId("vulnerabilityTypePill").textContent = profile.label;
  byId("vulnSeverityOut").textContent = input.severity.toFixed(2);
  byId("vulnExposureOut").textContent = input.exposure.toFixed(2);
  byId("vulnConfidenceOut").textContent = input.confidence.toFixed(2);
  byId("dominantDomain").textContent = dominant ? `${domainLabels[dominant[0]]}: ${dominant[1].toFixed(2)}` : "-";

  byId("domainImpactBars").innerHTML = Object.entries(impacts)
    .map(([domain, value]) => {
      const level = impactLevel(value);
      return `
        <div class="domain-impact-row ${level}">
          <span>${domainLabels[domain]}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${value * 100}%"></div></div>
          <strong>${value.toFixed(2)}</strong>
        </div>
      `;
    })
    .join("");

  drawDomainImpactChart(impacts);
}

function impactLevel(value) {
  if (value >= 0.7) return "high";
  if (value >= 0.4) return "medium";
  return "low";
}

function drawDomainImpactChart(impacts) {
  const canvas = byId("domainImpactCanvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#0b1115";
  ctx.fillRect(0, 0, width, height);

  const entries = Object.entries(impacts);
  const chartLeft = 54;
  const chartRight = width - 28;
  const chartBottom = height - 52;
  const chartTop = 30;
  const barGap = 18;
  const barWidth = (chartRight - chartLeft - (entries.length - 1) * barGap) / entries.length;

  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 1;
  [0, 0.25, 0.5, 0.75, 1].forEach((tick) => {
    const y = chartBottom - ((chartBottom - chartTop) * tick);
    ctx.beginPath();
    ctx.moveTo(chartLeft - 10, y);
    ctx.lineTo(chartRight, y);
    ctx.stroke();
    ctx.fillStyle = "#91a1aa";
    ctx.font = "11px Inter, sans-serif";
    ctx.fillText(tick.toFixed(2), 12, y + 4);
  });

  entries.forEach(([domain, value], index) => {
    const x = chartLeft + index * (barWidth + barGap);
    const barHeight = (chartBottom - chartTop) * value;
    const y = chartBottom - barHeight;
    const color = value >= 0.7 ? "#ef6868" : value >= 0.4 ? "#f3b75d" : "#35c2d1";
    ctx.fillStyle = color;
    roundRect(ctx, x, y, barWidth, barHeight, 6);
    ctx.fill();
    ctx.fillStyle = "#e8eef1";
    ctx.font = "700 12px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(domainLabels[domain], x + barWidth / 2, chartBottom + 22);
    ctx.fillStyle = "#c5d0d5";
    ctx.fillText(value.toFixed(2), x + barWidth / 2, Math.max(chartTop + 14, y - 8));
    ctx.textAlign = "left";
  });
}

function getSimulationScenario() {
  const id = state.simulationScenarioId || state.scenario?.id || "SCN-001";
  return state.kb.example_scenarios.find((scenario) => scenario.id === id) || state.scenario;
}

function getSimulationSteps() {
  const scenario = getSimulationScenario();
  if (!scenario) return defaultSimulationSteps;
  const ca = scenario.x.ca_exp;
  const impacts = scenario.x.i_pos;
  const domainRanking = Object.entries(ca).sort((a, b) => b[1] - a[1]);
  const impactRanking = Object.entries(impacts).sort((a, b) => b[1] - a[1]);
  const controlRanking = Object.entries(scenario.x.co_v || {}).sort((a, b) => b[1] - a[1]);
  const [dominantDomain, secondaryDomain, tertiaryDomain] = [domainRanking[0], domainRanking[1] || domainRanking[0], domainRanking[2] || domainRanking[1] || domainRanking[0]];
  const [dominantImpact, secondaryImpact] = [impactRanking[0], impactRanking[1] || impactRanking[0]];
  const [primaryControl, secondaryControl] = [controlRanking[0] || ["DE_AE", 0], controlRanking[1] || controlRanking[0] || ["DE_CM", 0]];
  const recommendations = rankScenarioCountermeasures(scenario).slice(0, 3);
  const primaryRecommendation = recommendations[0];
  const responseIds = recommendations.map((item) => item.id).join(" + ") || "CM-001";
  const responseNames = recommendations.map((item) => `${item.id} ${item.name}`).join("; ") || countermeasureName("CM-001");
  const scenarioRisk = scenario.gross_risk || calculateGrossRisk(scenario.x);
  const asset = scenario.asset || scenario.entities?.victim || "asset multi-dominio";
  const capability = scenario.entities?.capability || scenario.diamond?.capability?.name || inferCapabilityFromScenario(scenario);
  const mission = scenario.mission || "continuita' della missione";
  const effectActive = impactRanking.filter(([, value]) => value >= 0.3).map(([name]) => name);
  const propagatedDomains = [dominantDomain[0], secondaryDomain[0], tertiaryDomain[0]].filter((value, index, values) => value && values.indexOf(value) === index);

  return [
    {
      title: `Baseline: ${scenario.id}`,
      description: `${scenario.name}. Asset: ${asset}. Missione: ${mission}. Il sistema acquisisce telemetria, contesto ed evidenze iniziali.`,
      active: [dominantDomain[0]],
      impacts: simulationImpact(ca, impacts, 0.1, 0.06, 0.0),
      response: `Costruzione del grafo scenario e baseline per ${asset}.`,
    },
    {
      title: `Rilevazione: ${formatControlId(primaryControl[0])} compromesso`,
      description: `Il controllo ${formatControlId(primaryControl[0])} presenta cov ${Number(primaryControl[1]).toFixed(2)}; ${formatControlId(secondaryControl[0])} segue con ${Number(secondaryControl[1]).toFixed(2)}. Capability osservata: ${capability}.`,
      active: uniqueSimulationNodes(["cyber", dominantDomain[0]]),
      impacts: simulationImpact(ca, impacts, 0.3, 0.16, 0.12),
      response: "ATHENA Detect: correlazione CTI, anomalie, evidenze e controlli compromessi.",
    },
    {
      title: `Esposizione primaria: ${domainLabels[dominantDomain[0]] || dominantDomain[0]}`,
      description: `La capability offensiva raggiunge intensita' ${Number(dominantDomain[1]).toFixed(2)} nel dominio ${domainLabels[dominantDomain[0]] || dominantDomain[0]}, sfruttando le dipendenze di ${asset}.`,
      active: uniqueSimulationNodes(["cyber", dominantDomain[0]]),
      impacts: simulationImpact(ca, impacts, 0.54, 0.3, 0.24),
      response: `ATHENA Gap Analysis: verifica capability difensive e dipendenze nel dominio ${dominantDomain[0]}.`,
    },
    {
      title: `Propagazione: ${secondaryDomain[0]} → ${tertiaryDomain[0]}`,
      description: `La cascata passa da ${domainLabels[dominantDomain[0]] || dominantDomain[0]} a ${domainLabels[secondaryDomain[0]] || secondaryDomain[0]} (${Number(secondaryDomain[1]).toFixed(2)}) e ${domainLabels[tertiaryDomain[0]] || tertiaryDomain[0]} (${Number(tertiaryDomain[1]).toFixed(2)}).`,
      active: uniqueSimulationNodes(["cyber", ...propagatedDomains]),
      impacts: simulationImpact(ca, impacts, 0.76, 0.5, 0.36),
      response: "ATHENA Intelligence: aggiorna il grafo delle dipendenze e la propagazione cross-domain.",
    },
    {
      title: `Effetti: ${dominantImpact[0]} → ${secondaryImpact[0]}`,
      description: `L'impatto ${dominantImpact[0]} raggiunge ${Number(dominantImpact[1]).toFixed(2)} e si combina con ${secondaryImpact[0]} (${Number(secondaryImpact[1]).toFixed(2)}), degradando ${mission}.`,
      active: uniqueSimulationNodes([...propagatedDomains, ...effectActive]),
      impacts: simulationImpact(ca, impacts, 0.92, 0.88, 0.48),
      response: "ATHENA Respond: contenimento mission-aware, fallback e protezione degli asset critici.",
    },
    {
      title: `Decisione: rischio ${scenarioRisk.score}/100`,
      description: `Rischio lordo ${scenarioRisk.band}. Il ranking valuta costo, disponibilita', gap di impatto, controlli residui e livelli di sicurezza prima dell'approvazione esperta.`,
      active: uniqueSimulationNodes([...effectActive, dominantDomain[0], "response"]),
      impacts: simulationImpact(ca, impacts, 0.82, 0.94, 0.68),
      response: `Expert-in-the-loop: ${recommendations.length} priorita' — ${responseIds}.`,
    },
    {
      title: `Risposta ATHENA: ${primaryRecommendation?.id || "CM-001"}`,
      description: `Pacchetto dinamico per ${scenario.id}: ${responseNames}. Gli effetti vengono progressivamente ridotti e l'Outcome alimenta il learning loop.`,
      active: uniqueSimulationNodes(["response", ...propagatedDomains, ...effectActive]),
      impacts: simulationImpact(ca, impacts, 0.42, 0.4, 0.96),
      response: primaryRecommendation ? `${primaryRecommendation.id}: ${primaryRecommendation.name} · residual score ${primaryRecommendation.score.toFixed(3)}` : responseNames,
    },
  ];
}

function rankScenarioCountermeasures(scenario) {
  const weights = getWeights();
  const budget = Number(byId("budget").value);
  const maxAvailability = availabilityOrder[byId("availability").value];
  const allowed = new Set(scenario.suggested_candidates || []);
  return state.kb.countermeasures
    .filter((cm) => !allowed.size || allowed.has(cm.id))
    .filter((cm) => cm.cost <= budget)
    .filter((cm) => availabilityOrder[cm.availability_impact] <= maxAvailability)
    .map((cm) => {
      const impactGap = l2Gap(scenario.x.i_pos, cm.i_target);
      const controlResidual = residualControls(scenario.x.co_v, cm.co_app);
      const levelGap = l2Gap(scenario.x.l_v, cm.l_target);
      return { ...cm, impactGap, controlResidual, levelGap, score: weights.w1_impact_gap * impactGap + weights.w2_control_residual * controlResidual + weights.w3_level_gap * levelGap };
    })
    .sort((a, b) => a.score - b.score || a.cost - b.cost);
}

function inferCapabilityFromScenario(scenario) {
  const text = `${scenario.name || ""} ${scenario.description || ""}`.toLowerCase();
  if (text.includes("gnss") || text.includes("navigation")) return "GNSS spoofing / navigation disruption";
  if (text.includes("supply") || text.includes("vendor")) return "Supply-chain compromise";
  if (text.includes("identity") || text.includes("credential")) return "Identity compromise";
  if (text.includes("disinformation") || text.includes("influence")) return "Information manipulation";
  if (text.includes("satellite") || text.includes("satcom")) return "Satellite communication disruption";
  if (text.includes("model") || text.includes("poison")) return "AI/ML data manipulation";
  return "Multi-domain adversarial capability";
}

function uniqueSimulationNodes(values) {
  return Array.from(new Set(values.filter(Boolean)));
}

function formatControlId(id) {
  return String(id || "control").replaceAll("_", ".");
}

function simulationImpact(ca, impact, domainFactor, effectFactor, response) {
  return {
    cyber: clamp01((ca.cyber || 0) * domainFactor + 0.04),
    space: clamp01((ca.space || 0) * domainFactor + 0.03),
    land: clamp01((ca.land || 0) * domainFactor + (impact.physical || 0) * 0.12),
    sea: clamp01((ca.sea || 0) * domainFactor),
    air: clamp01((ca.air || 0) * domainFactor),
    virtual: clamp01((impact.virtual || 0) * effectFactor),
    cognitive: clamp01((impact.cognitive || 0) * effectFactor),
    physical: clamp01((impact.physical || 0) * effectFactor),
    response: clamp01(response),
  };
}

function topEntry(values) {
  return Object.entries(values).sort((a, b) => b[1] - a[1])[0] || ["cyber", 0];
}

function clamp01(value) {
  return Math.max(0, Math.min(1, Number(value.toFixed(4))));
}

function countermeasureName(id) {
  return state.kb?.countermeasures.find((cm) => cm.id === id)?.name || "Coordinated ATHENA response";
}

function renderSimulation() {
  const steps = getSimulationSteps();
  if (simulationIndex >= steps.length) simulationIndex = 0;
  const step = steps[simulationIndex];
  byId("simulationStepPill").textContent = `step ${simulationIndex + 1}/${steps.length}`;
  byId("simulationTitle").textContent = step.title;
  byId("simulationDescription").textContent = step.description;
  byId("simulationAthenaResponse").textContent = step.response;
  byId("simulationPlayLabel").textContent = simulationTimer ? "Pause" : "Play";
  renderSimulationTimeline();
  renderSimulationDomainState(step);
  drawSimulationCanvas(step);
}

function renderSimulationTimeline() {
  const steps = getSimulationSteps();
  byId("simulationTimeline").innerHTML = steps
    .map((step, index) => `
      <button class="simulation-tick ${index === simulationIndex ? "active" : ""}" type="button" data-simulation-step="${index}">
        <strong>${index + 1}. ${step.title.split(":")[0]}</strong>
        <span class="simulation-tick-domains">${step.active.map((domain) => `<i title="${domainLabels[domain] || domain}">${simulationDomainIcons[domain] || "•"}</i>`).join("")}</span>
      </button>
    `)
    .join("");
  document.querySelectorAll("[data-simulation-step]").forEach((button) => {
    button.addEventListener("click", () => {
      stopSimulation();
      simulationIndex = Number(button.dataset.simulationStep);
      renderSimulation();
    });
  });
}

function renderSimulationDomainState(step) {
  const labels = {
    cyber: "Cyber",
    space: "Space",
    land: "Land",
    sea: "Sea / Maritime",
    air: "Air",
    virtual: "Virtual effect",
    cognitive: "Cognitive",
    physical: "Physical effect",
    response: "ATHENA response",
  };
  byId("simulationDomainState").innerHTML = Object.entries(step.impacts)
    .map(([domain, value]) => `
      <div class="simulation-domain-card">
        <header>
          <span class="simulation-domain-name"><i aria-hidden="true">${simulationDomainIcons[domain] || "•"}</i><strong>${labels[domain]}</strong></span>
          <span class="simulation-domain-value">${value.toFixed(2)}</span>
        </header>
        <div class="bar-track"><div class="bar-fill" style="width:${value * 100}%"></div></div>
      </div>
    `)
    .join("");
}

function drawSimulationCanvas(step) {
  const canvas = byId("simulationCanvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#0b1115";
  ctx.fillRect(0, 0, width, height);

  const nodes = [
    { id: "cyber", label: "Cyber", x: 105, y: 255, color: "#35c2d1" },
    { id: "space", label: "Space", x: 285, y: 90, color: "#a98bff" },
    { id: "land", label: "Land", x: 430, y: 260, color: "#f3b75d" },
    { id: "sea", label: "Sea", x: 380, y: 430, color: "#35c2d1" },
    { id: "air", label: "Air", x: 585, y: 105, color: "#c5d0d5" },
    { id: "virtual", label: "Virtual", x: 780, y: 90, color: "#a98bff" },
    { id: "cognitive", label: "Cognitive", x: 955, y: 215, color: "#ef6868" },
    { id: "physical", label: "Physical", x: 770, y: 365, color: "#f3b75d" },
    { id: "response", label: "ATHENA", x: 1010, y: 430, color: "#79d389" },
  ];

  drawSimulationLink(ctx, nodes[0], nodes[1], step);
  drawSimulationLink(ctx, nodes[1], nodes[2], step);
  drawSimulationLink(ctx, nodes[0], nodes[3], step);
  drawSimulationLink(ctx, nodes[1], nodes[4], step);
  drawSimulationLink(ctx, nodes[0], nodes[5], step);
  drawSimulationLink(ctx, nodes[2], nodes[7], step);
  drawSimulationLink(ctx, nodes[3], nodes[7], step);
  drawSimulationLink(ctx, nodes[5], nodes[6], step);
  drawSimulationLink(ctx, nodes[7], nodes[6], step);
  drawSimulationLink(ctx, nodes[8], nodes[2], step);
  drawSimulationLink(ctx, nodes[8], nodes[5], step);
  drawSimulationLink(ctx, nodes[8], nodes[6], step);
  drawSimulationLink(ctx, nodes[8], nodes[7], step);

  nodes.forEach((node) => drawSimulationNode(ctx, node, step));
}

function drawSimulationNode(ctx, node, step) {
  const impact = step.impacts[node.id] || 0;
  const active = step.active.includes(node.id);
  const radius = 42 + impact * 18;
  ctx.globalAlpha = 0.18 + impact * 0.32;
  ctx.fillStyle = node.color;
  ctx.beginPath();
  ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.strokeStyle = active ? node.color : "rgba(255,255,255,0.2)";
  ctx.lineWidth = active ? 3 : 1;
  ctx.fillStyle = "#11171c";
  ctx.beginPath();
  ctx.arc(node.x, node.y, 48, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#e8eef1";
  ctx.font = "18px Apple Color Emoji, Segoe UI Emoji, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(simulationDomainIcons[node.id] || "•", node.x, node.y - 10);
  ctx.font = "700 12px Inter, sans-serif";
  ctx.fillText(node.label, node.x, node.y + 9);
  ctx.fillStyle = node.color;
  ctx.font = "800 13px Inter, sans-serif";
  ctx.fillText(impact.toFixed(2), node.x, node.y + 28);
  ctx.textAlign = "left";
}

function drawSimulationLink(ctx, from, to, step) {
  const active = step.active.includes(from.id) || step.active.includes(to.id);
  const avg = ((step.impacts[from.id] || 0) + (step.impacts[to.id] || 0)) / 2;
  ctx.strokeStyle = active ? `rgba(53, 194, 209, ${0.25 + avg * 0.55})` : "rgba(255,255,255,0.11)";
  ctx.lineWidth = active ? 2 + avg * 3 : 1;
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();
}

function startSimulation() {
  stopSimulation(false);
  const speed = Number(byId("simulationSpeed").value || 1200);
  simulationTimer = window.setInterval(() => {
    const steps = getSimulationSteps();
    simulationIndex = (simulationIndex + 1) % steps.length;
    renderSimulation();
  }, speed);
  renderSimulation();
}

function stopSimulation(render = true) {
  if (simulationTimer) {
    window.clearInterval(simulationTimer);
    simulationTimer = null;
  }
  if (render) renderSimulation();
}

function renderCanvas() {
  const canvas = byId("relationCanvas");
  const ctx = canvas.getContext("2d");
  const selected = state.ranked.find((cm) => cm.id === state.selectedId) || state.ranked[0];
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#0b1115";
  ctx.fillRect(0, 0, width, height);

  const columns = [
    { title: "P", items: ["govern", "detect", "respond", "prevent"], x: 86, color: "#35c2d1" },
    { title: "D", items: Object.keys(selected?.ca_def || {}), x: 310, color: "#f3b75d" },
    { title: "L", items: Object.keys(selected?.l_target || {}), x: 555, color: "#79d389" },
    { title: "E", items: Object.keys(selected?.i_target || {}), x: 790, color: "#a98bff" },
  ];

  ctx.font = "700 12px Inter, sans-serif";
  columns.forEach((column) => {
    ctx.fillStyle = column.color;
    ctx.fillText(column.title, column.x, 34);
    column.items.forEach((item, index) => {
      const y = 84 + index * 48;
      drawNode(ctx, column.x, y, item, column.color);
    });
  });

  if (!selected) return;

  const pActive = inferProcesses(selected);
  const dActive = Object.entries(selected.ca_def).filter(([, value]) => value > 0.25).map(([key]) => key);
  const lActive = Object.entries(selected.l_target).filter(([, value]) => value >= 3).map(([key]) => key);
  const eActive = Object.entries(selected.i_target).filter(([, value]) => value > 0.35).map(([key]) => key);

  drawLinks(ctx, columns[0], pActive, columns[1], dActive, "#35c2d1");
  drawLinks(ctx, columns[1], dActive, columns[2], lActive, "#f3b75d");
  drawLinks(ctx, columns[2], lActive, columns[3], eActive, "#79d389");

  ctx.fillStyle = "#c5d0d5";
  ctx.font = "600 13px Inter, sans-serif";
  ctx.fillText(`${selected.id}: ${selected.name}`, 26, height - 24);
}

function drawNode(ctx, x, y, label, color) {
  ctx.strokeStyle = color;
  ctx.fillStyle = "rgba(255,255,255,0.025)";
  ctx.lineWidth = 1;
  roundRect(ctx, x - 58, y - 16, 116, 32, 6);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#e8eef1";
  ctx.font = "600 12px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(label, x, y + 4);
  ctx.textAlign = "left";
}

function drawLinks(ctx, fromColumn, fromItems, toColumn, toItems, color) {
  ctx.strokeStyle = color;
  ctx.globalAlpha = 0.42;
  ctx.lineWidth = 1.4;
  fromItems.forEach((from) => {
    const fromIndex = fromColumn.items.indexOf(from);
    if (fromIndex < 0) return;
    toItems.forEach((to) => {
      const toIndex = toColumn.items.indexOf(to);
      if (toIndex < 0) return;
      const y1 = 84 + fromIndex * 48;
      const y2 = 84 + toIndex * 48;
      ctx.beginPath();
      ctx.moveTo(fromColumn.x + 60, y1);
      ctx.bezierCurveTo(fromColumn.x + 126, y1, toColumn.x - 126, y2, toColumn.x - 60, y2);
      ctx.stroke();
    });
  });
  ctx.globalAlpha = 1;
}

function inferProcesses(countermeasure) {
  const controls = Object.keys(countermeasure.co_app);
  const processes = new Set();
  controls.forEach((control) => {
    if (control.startsWith("GV") || control.startsWith("ID")) processes.add("govern");
    if (control.startsWith("DE")) processes.add("detect");
    if (control.startsWith("RS") || control.startsWith("RC")) processes.add("respond");
    if (control.startsWith("PR")) processes.add("prevent");
  });
  return Array.from(processes);
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function renderAll() {
  renderScenarioSummary();
  renderRecommendation();
  renderRanking();
  renderDetail();
  renderVectors();
  renderDisarmAssessment();
  renderVulnerabilityAssessment();
  renderFrameworkMapping();
  renderSimulation();
  renderCanvas();
  renderKnowledgeBase();
  renderKbArchitecture();
  renderKgSchema();
  renderContextPack();
  renderNatoDashboard();
  updateOutputs();
}

function updateOutputs() {
  byId("w1Out").textContent = Number(byId("w1").value).toFixed(2);
  byId("w2Out").textContent = Number(byId("w2").value).toFixed(2);
  byId("w3Out").textContent = Number(byId("w3").value).toFixed(2);
  byId("vulnSeverityOut").textContent = Number(byId("vulnSeverity").value).toFixed(2);
  byId("vulnExposureOut").textContent = Number(byId("vulnExposure").value).toFixed(2);
  byId("vulnConfidenceOut").textContent = Number(byId("vulnConfidence").value).toFixed(2);
}

function attachEvents() {
  document.querySelectorAll(".dashboard-tab").forEach((control) => {
    control.addEventListener("click", () => setDashboardView(control.dataset.dashboardTarget));
  });
  byId("natoCaseSelect").addEventListener("change", renderNatoDashboard);

  byId("scenarioSelect").addEventListener("change", (event) => {
    state.scenario = state.kb.example_scenarios.find((scenario) => scenario.id === event.target.value);
    state.selectedId = null;
    state.vulnerabilityApplied = false;
    state.disarmApplied = false;
    state.simulationScenarioId = state.scenario.id;
    byId("simulationScenarioSelect").value = state.simulationScenarioId;
    simulationIndex = 0;
    byId("vulnerabilityStatus").textContent = "profilo attivo non applicato";
    byId("disarmStatus").textContent = "threat non applicata";
    recalculate();
  });
  ["w1", "w2", "w3", "budget", "availability"].forEach((id) => {
    byId(id).addEventListener("input", recalculate);
  });
  byId("recalculateBtn").addEventListener("click", recalculate);
  byId("simulationPlayBtn").addEventListener("click", () => {
    if (simulationTimer) {
      stopSimulation();
    } else {
      startSimulation();
    }
  });
  byId("simulationResetBtn").addEventListener("click", () => {
    stopSimulation(false);
    simulationIndex = 0;
    renderSimulation();
  });
  byId("simulationScenarioSelect").addEventListener("change", (event) => {
    stopSimulation(false);
    state.simulationScenarioId = event.target.value;
    simulationIndex = 0;
    renderSimulation();
  });
  byId("simulationSpeed").addEventListener("change", () => {
    if (simulationTimer) startSimulation();
  });
  byId("disarmTactic").addEventListener("change", () => {
    state.disarmApplied = false;
    byId("disarmStatus").textContent = "threat aggiornata non applicata";
    renderDisarmControls();
    renderDisarmAssessment();
    renderFrameworkMapping();
    renderContextPack();
  });
  ["threatName", "threatObjective", "targetAudience"].forEach((id) => {
    byId(id).addEventListener("input", () => {
      state.disarmApplied = false;
      byId("disarmStatus").textContent = "threat aggiornata non applicata";
      renderDisarmAssessment();
      renderFrameworkMapping();
      renderContextPack();
    });
  });
  byId("mapDisarmBtn").addEventListener("click", mapDisarmToAthena);
  byId("vulnerabilityType").addEventListener("change", () => {
    state.vulnerabilityApplied = false;
    byId("vulnerabilityStatus").textContent = "profilo aggiornato non applicato";
    renderVulnerabilityAssessment();
    renderFrameworkMapping();
    renderDisarmAssessment();
    renderContextPack();
  });
  ["affectedAsset", "vulnSeverity", "vulnExposure", "vulnConfidence"].forEach((id) => {
    byId(id).addEventListener("input", () => {
      state.vulnerabilityApplied = false;
      byId("vulnerabilityStatus").textContent = "profilo aggiornato non applicato";
      renderVulnerabilityAssessment();
      renderFrameworkMapping();
      renderDisarmAssessment();
      renderContextPack();
    });
  });
  document.querySelectorAll("[data-domain-toggle]").forEach((input) => {
    input.addEventListener("change", () => {
      state.vulnerabilityApplied = false;
      byId("vulnerabilityStatus").textContent = "profilo aggiornato non applicato";
      renderVulnerabilityAssessment();
      renderFrameworkMapping();
      renderDisarmAssessment();
      renderContextPack();
    });
  });
  byId("applyVulnerabilityBtn").addEventListener("click", applyVulnerabilityToScenario);
  byId("schemaSearch").addEventListener("input", renderKgSchema);
  byId("schemaLayerFilter").addEventListener("change", renderKgSchema);
  byId("downloadPopulationSchema").addEventListener("click", downloadPopulationSchema);
  byId("newScenarioForm").addEventListener("submit", saveAndCalculateNewScenario);
  byId("resetNewScenario").addEventListener("click", resetNewScenarioForm);
  document.querySelectorAll("#newScenarioForm input[type='range']").forEach((input) => {
    input.addEventListener("input", renderNewScenarioRisk);
  });
}

async function copyContextPack() {
  const status = byId("copyStatus");
  const value = byId("contextPack").value;
  try {
    await navigator.clipboard.writeText(value);
    status.textContent = "copied";
  } catch {
    byId("contextPack").select();
    status.textContent = "selected";
  }
  window.setTimeout(() => {
    status.textContent = "ready";
  }, 1600);
}

async function init() {
  try {
    const [kb, kbText] = await Promise.all([loadKnowledgeBase(), loadKnowledgeBaseText()]);
    state.kb = kb;
    state.kbText = kbText;
    loadCustomScenarios();
    const defaults = state.kb.scoring;
    byId("w1").value = defaults.weights.w1_impact_gap;
    byId("w2").value = defaults.weights.w2_control_residual;
    byId("w3").value = defaults.weights.w3_level_gap;
    byId("budget").value = defaults.budget_B;
    byId("availability").value = defaults.max_availability_impact;
    state.scenario = state.kb.example_scenarios[0];
    state.simulationScenarioId = state.scenario.id;
    byId("kbStatus").textContent = "loaded";
    renderScenarioSelector();
    renderSimulationScenarioSelector();
    renderDisarmControls();
    initializeKgSchema();
    resetNewScenarioForm();
    initializeDashboardPages();
    attachEvents();
    recalculate();
    routeDashboardPage();
  } catch (error) {
    byId("kbStatus").textContent = "error";
    byId("scenarioName").textContent = "Knowledge base not loaded";
    byId("bestName").textContent = "Serve this folder with a local web server";
    byId("bestMeta").textContent = error.message;
  }
}

init();
