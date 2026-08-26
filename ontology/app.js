const ttlFile = "ATHENA-Core-Ontology-v0.1.ttl";

const state = {
  classes: [],
  objectProperties: [],
  datatypeProperties: [],
  individuals: [],
  edges: [],
};

const byId = (id) => document.getElementById(id);

const operationalExample = {
  nodes: [
    { id: "SCN-GNSS-001", label: "Scenario", type: "athena:Scenario", x: 36, y: 48 },
    { id: "TE-GNSS-001", label: "GNSS spoofing event", type: "athena:ThreatEvent", x: 286, y: 48 },
    { id: "AC-GNSS-Spoofing", label: "Spoofing capability", type: "athena:AdversarialCapability", x: 536, y: 48 },
    { id: "VehicleFleet", label: "Autonomous vehicle fleet", type: "athena:MultiDomainAsset", x: 36, y: 190 },
    { id: "SpaceDomain", label: "Space domain", type: "athena:OperationalDomain", x: 286, y: 190 },
    { id: "PhysicalEffect", label: "Physical effect", type: "athena:EffectDimension", x: 536, y: 190 },
    { id: "CM-GNSS-Fallback", label: "Fallback navigation", type: "athena:Countermeasure", x: 156, y: 332 },
    { id: "REC-GNSS-001", label: "Ranked recommendation", type: "athena:Recommendation", x: 426, y: 332 },
  ],
  links: [
    { source: "SCN-GNSS-001", target: "TE-GNSS-001", label: "hasThreatEvent", step: 0 },
    { source: "TE-GNSS-001", target: "AC-GNSS-Spoofing", label: "usesAdversarialCapability", step: 1 },
    { source: "TE-GNSS-001", target: "VehicleFleet", label: "targetsAsset", step: 1 },
    { source: "TE-GNSS-001", target: "SpaceDomain", label: "affectsDomain", step: 2 },
    { source: "TE-GNSS-001", target: "PhysicalEffect", label: "producesEffect", step: 2 },
    { source: "CM-GNSS-Fallback", target: "PhysicalEffect", label: "mitigatesEffect", step: 3 },
    { source: "CM-GNSS-Fallback", target: "REC-GNSS-001", label: "score/rationale", step: 4 },
  ],
  steps: [
    {
      title: "1. Istanzia lo scenario",
      body: "La KB crea un individuo athena:Scenario per delimitare il caso operativo: veicoli autonomi dipendenti da GNSS in ambiente multi-dominio.",
    },
    {
      title: "2. Modella il ThreatEvent",
      body: "Lo scenario viene collegato a un evento di spoofing GNSS, alla capability avversaria e all'asset bersaglio secondo il threat model dell'ontologia.",
    },
    {
      title: "3. Proietta su domini ed effetti",
      body: "L'evento impatta Space, Land e Cyber; l'effetto principale e' fisico, con degrado cognitivo per perdita di fiducia nella posizione e nella decisione operativa.",
    },
    {
      title: "4. Applica ATHENA Mapping",
      body: "La cella P-D-L-E seleziona Detect + Respond, Space/Land/Cyber, Intelligence/Tool e Physical/Cognitive per identificare le contromisure candidate.",
    },
    {
      title: "5. Genera raccomandazione",
      body: "La contromisura prioritaria e' fallback navigation con anomaly detection GNSS, validazione multi-sensore e procedura human-in-the-loop.",
    },
  ],
  ttl: `athena:SCN_GNSS_001
    a athena:Scenario ;
    athena:name "GNSS spoofing against autonomous vehicle" ;
    athena:hasThreatEvent athena:TE_GNSS_001 .

athena:TE_GNSS_001
    a athena:ThreatEvent ;
    athena:usesAdversarialCapability athena:AC_GNSS_Spoofing ;
    athena:targetsAsset athena:VehicleFleet ;
    athena:affectsDomain athena:SpaceDomain, athena:LandDomain, athena:CyberDomain ;
    athena:producesEffect athena:PhysicalEffect, athena:CognitiveEffect ;
    athena:likelihood "0.72"^^xsd:decimal .

athena:CM_GNSS_Fallback
    a athena:Countermeasure ;
    athena:mitigatesThreat athena:TE_GNSS_001 ;
    athena:mitigatesEffect athena:PhysicalEffect ;
    athena:providesCapability athena:SpaceDefensiveCapability ;
    athena:operationalImpact "0.35"^^xsd:decimal .

athena:MAP_GNSS_001
    a athena:ATHENAMapping ;
    athena:hasProcess athena:Detect, athena:Respond ;
    athena:hasDefensiveCapability athena:SpaceDefensiveCapability ;
    athena:hasSecurityLevel athena:IntelligenceLevel, athena:ToolLevel ;
    athena:hasEffectDimension athena:PhysicalEffect, athena:CognitiveEffect ;
    athena:recommendsCountermeasure athena:CM_GNSS_Fallback ;
    athena:applicabilityScore "0.84"^^xsd:decimal .`,
};

function localName(value) {
  if (!value) return "";
  return value
    .replace(/[<>,;.]/g, "")
    .replace(/^athena:/, "")
    .replace(/^owl:/, "")
    .replace(/^rdfs:/, "")
    .replace(/^xsd:/, "");
}

function literal(block, predicate) {
  const escaped = predicate.replace(":", "\\:");
  const re = new RegExp(`${escaped}\\s+("""[\\s\\S]*?"""|"[^"]+")`, "m");
  const match = block.match(re);
  if (!match) return "";
  return match[1]
    .replace(/^"""/, "")
    .replace(/"""$/, "")
    .replace(/^"/, "")
    .replace(/"(@[a-z]+)?$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function objects(block, predicate) {
  const escaped = predicate.replace(":", "\\:");
  const re = new RegExp(`${escaped}\\s+([^.;]+)`, "m");
  const match = block.match(re);
  if (!match) return [];
  return match[1]
    .split(",")
    .map((item) => localName(item.trim()))
    .filter(Boolean);
}

function parseOntology(ttl) {
  const blocks = ttl
    .split(/\n(?=athena:|<https:\/\/w3id\.org\/athena\/core>)/g)
    .map((block) => block.trim())
    .filter(Boolean);

  for (const block of blocks) {
    const subjectMatch = block.match(/^(athena:[A-Za-z0-9_]+|<https:\/\/w3id\.org\/athena\/core>)/);
    if (!subjectMatch) continue;
    const subject = localName(subjectMatch[1]);
    const label = literal(block, "rdfs:label") || literal(block, "skos:prefLabel") || subject;
    const definition = literal(block, "athena:definition") || literal(block, "dcterms:description");
    const subClassOf = objects(block, "rdfs:subClassOf").filter((item) => !item.startsWith("["));
    const domain = objects(block, "rdfs:domain");
    const range = objects(block, "rdfs:range");
    const affectsDomain = objects(block, "athena:affectsDomain");

    const item = { id: subject, label, definition, subClassOf, domain, range, affectsDomain };

    if (block.includes("owl:Class")) {
      state.classes.push(item);
      subClassOf.forEach((target) => state.edges.push({ source: subject, target, label: "subClassOf" }));
    }

    if (block.includes("owl:ObjectProperty")) {
      state.objectProperties.push(item);
      domain.forEach((source) => range.forEach((target) => state.edges.push({ source, target, label })));
    }

    if (block.includes("owl:DatatypeProperty")) {
      state.datatypeProperties.push(item);
    }

    if (block.includes("owl:NamedIndividual")) {
      const typeMatch = block.match(/a\s+owl:NamedIndividual,\s+athena:([A-Za-z0-9_]+)/);
      state.individuals.push({ ...item, type: typeMatch ? typeMatch[1] : "NamedIndividual" });
      if (affectsDomain.length) {
        affectsDomain.forEach((target) => state.edges.push({ source: subject, target, label: "affectsDomain" }));
      }
    }
  }
}

function renderMetrics() {
  byId("classCount").textContent = state.classes.length;
  byId("objectPropertyCount").textContent = state.objectProperties.length;
  byId("datatypePropertyCount").textContent = state.datatypeProperties.length;
  byId("individualCount").textContent = state.individuals.length;
}

function card(item, extra = []) {
  const tags = [...(item.subClassOf || []), ...(item.domain || []), ...(item.range || []), ...extra]
    .filter(Boolean)
    .slice(0, 6)
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");
  return `
    <article class="entity-card">
      <strong>${item.label}</strong>
      <small>athena:${item.id}</small>
      ${item.definition ? `<p>${item.definition}</p>` : ""}
      ${tags ? `<div class="tags">${tags}</div>` : ""}
    </article>
  `;
}

function renderClasses() {
  const query = byId("classSearch").value.trim().toLowerCase();
  const rows = state.classes
    .filter((item) => {
      const haystack = `${item.id} ${item.label} ${item.definition}`.toLowerCase();
      return !query || haystack.includes(query);
    })
    .sort((a, b) => a.label.localeCompare(b.label));
  byId("classList").innerHTML = rows.map((item) => card(item)).join("");
}

function renderProperties() {
  const filter = byId("propertyFilter").value;
  const rows = [
    ...(filter !== "datatype" ? state.objectProperties.map((item) => ({ ...item, kind: "Object property" })) : []),
    ...(filter !== "object" ? state.datatypeProperties.map((item) => ({ ...item, kind: "Datatype property" })) : []),
  ].sort((a, b) => a.label.localeCompare(b.label));
  byId("propertyList").innerHTML = rows.map((item) => card(item, [item.kind])).join("");
}

function axisItems(type) {
  return state.individuals
    .filter((item) => item.type === type)
    .sort((a, b) => a.label.localeCompare(b.label));
}

function renderAxisGrid() {
  const sections = [
    ["P", "CybersecurityProcess", "Processi"],
    ["D", "OperationalDomain", "Domini"],
    ["L", "CybersecurityLevel", "Livelli"],
    ["E", "EffectDimension", "Effetti"],
  ];
  byId("axisGrid").innerHTML = sections
    .map(([axis, type, title]) => {
      const items = axisItems(type).map((item) => `<span class="tag">${item.label}</span>`).join("");
      return `
        <article class="axis-card">
          <strong>${axis} - ${title}</strong>
          <p>${type}</p>
          <div class="tags">${items}</div>
        </article>
      `;
    })
    .join("");
}

function graphData(focus) {
  const groups = {
    threat: ["Scenario", "ThreatEvent", "ThreatActor", "AdversarialCapability", "Infrastructure", "Victim", "Asset", "AttackTechnique", "Vulnerability", "ThreatIndicator"],
    athena: ["ATHENAMapping", "CybersecurityProcess", "DefensiveCapability", "CybersecurityLevel", "EffectDimension", "Countermeasure"],
    decision: ["Assessment", "EffectAssessment", "LevelAssessment", "ControlAssessment", "CapabilityAssessment", "Recommendation", "Evidence", "Source"],
  };
  const wanted = focus === "all" ? null : new Set(groups[focus]);
  const classIds = new Set(state.classes.map((item) => item.id));
  const nodes = state.classes
    .filter((item) => !wanted || wanted.has(item.id) || item.subClassOf.some((parent) => wanted.has(parent)))
    .map((item) => ({ ...item, group: "class" }));
  const nodeSet = new Set(nodes.map((node) => node.id));
  const edges = state.edges
    .filter((edge) => nodeSet.has(edge.source) && nodeSet.has(edge.target) && classIds.has(edge.source) && classIds.has(edge.target))
    .slice(0, 80);
  return { nodes, edges };
}

function renderGraph() {
  const svg = byId("ontologyGraph");
  const focus = byId("graphFocus").value;
  const { nodes, edges } = graphData(focus);
  const width = svg.clientWidth || 1000;
  const height = 520;
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = "";

  const center = { x: width / 2, y: height / 2 };
  const radius = Math.min(width, height) * 0.36;
  nodes.forEach((node, index) => {
    const angle = (index / Math.max(nodes.length, 1)) * Math.PI * 2 - Math.PI / 2;
    node.x = center.x + Math.cos(angle) * radius;
    node.y = center.y + Math.sin(angle) * radius;
  });
  const lookup = Object.fromEntries(nodes.map((node) => [node.id, node]));

  edges.forEach((edge) => {
    const source = lookup[edge.source];
    const target = lookup[edge.target];
    if (!source || !target) return;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("class", "edge");
    line.setAttribute("x1", source.x);
    line.setAttribute("y1", source.y);
    line.setAttribute("x2", target.x);
    line.setAttribute("y2", target.y);
    svg.appendChild(line);
  });

  nodes.forEach((node) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("class", "node");
    group.setAttribute("transform", `translate(${node.x}, ${node.y})`);
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", node.id === "ATHENAEntity" ? 18 : 13);
    circle.setAttribute("fill", node.id === "ATHENAEntity" ? "var(--accent)" : "var(--accent-2)");
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", 18);
    text.setAttribute("y", 4);
    text.textContent = node.label.length > 24 ? `${node.label.slice(0, 23)}...` : node.label;
    group.append(circle, text);
    group.addEventListener("click", () => {
      byId("selectedNode").innerHTML = `<strong>${node.label}</strong><br><span>athena:${node.id}</span>${node.definition ? `<p>${node.definition}</p>` : ""}`;
    });
    svg.appendChild(group);
  });
}

function renderExampleStep() {
  const stepIndex = Number(byId("exampleStep").value || 0);
  const step = operationalExample.steps[stepIndex];
  byId("exampleNarrative").innerHTML = `<strong>${step.title}</strong><p>${step.body}</p>`;
  renderExampleGraph(stepIndex);
}

function renderExampleControls() {
  byId("exampleStep").innerHTML = operationalExample.steps
    .map((step, index) => `<option value="${index}">${step.title}</option>`)
    .join("");
  byId("exampleTtl").textContent = operationalExample.ttl;
  renderExampleStep();
}

function renderExampleGraph(stepIndex) {
  const svg = byId("exampleGraph");
  if (!svg) return;
  const width = svg.clientWidth || 760;
  const height = 420;
  const scaleX = width / 760;
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = `
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="currentColor"></path>
      </marker>
    </defs>
  `;
  const lookup = Object.fromEntries(operationalExample.nodes.map((node) => [node.id, node]));

  operationalExample.links.forEach((link) => {
    const source = lookup[link.source];
    const target = lookup[link.target];
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("class", `example-link${link.step <= stepIndex ? " is-active" : ""}`);
    line.setAttribute("x1", (source.x + 82) * scaleX);
    line.setAttribute("y1", source.y + 28);
    line.setAttribute("x2", (target.x + 8) * scaleX);
    line.setAttribute("y2", target.y + 28);
    svg.appendChild(line);
  });

  operationalExample.nodes.forEach((node) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("class", "example-node");
    group.setAttribute("transform", `translate(${node.x * scaleX}, ${node.y})`);
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", 182 * scaleX);
    rect.setAttribute("height", 62);
    rect.setAttribute("fill", node.id.startsWith("CM") || node.id.startsWith("REC") ? "var(--accent)" : "var(--panel-2)");
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", 12);
    label.setAttribute("y", 24);
    label.textContent = node.label;
    const type = document.createElementNS("http://www.w3.org/2000/svg", "text");
    type.setAttribute("x", 12);
    type.setAttribute("y", 45);
    type.setAttribute("opacity", "0.72");
    type.textContent = node.type;
    group.append(rect, label, type);
    svg.appendChild(group);
  });
}

async function init() {
  try {
    const response = await fetch(ttlFile);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    parseOntology(await response.text());
    renderMetrics();
    renderClasses();
    renderProperties();
    renderAxisGrid();
    renderGraph();
    renderExampleControls();
    byId("loadStatus").textContent = "ontology loaded";
  } catch (error) {
    byId("loadStatus").textContent = `load error: ${error.message}`;
  }
}

byId("classSearch").addEventListener("input", renderClasses);
byId("propertyFilter").addEventListener("change", renderProperties);
byId("graphFocus").addEventListener("change", renderGraph);
byId("exampleStep").addEventListener("change", renderExampleStep);
window.addEventListener("resize", renderGraph);

init();
