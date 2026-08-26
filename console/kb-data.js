window.ATHENA_KB_DATA = {
  "metadata": {
    "name": "ATHENA Knowledge Base",
    "version": "0.2",
    "description": "Structured ATHENA KB aligned with the final paper, including tensor model, evidence quality, case studies, framework mappings and decision traces."
  },
  "scoring": {
    "weights": {
      "w1_impact_gap": 0.45,
      "w3_level_gap": 0.2,
      "w2_control_residual": 0.35
    },
    "budget_B": 10,
    "max_availability_impact": "medium"
  },
  "countermeasures": [
    {
      "id": "CM-001",
      "name": "Cross-domain incident cell activation",
      "co_app": {
        "GV_OC": 0.9,
        "GV_RM": 0.8,
        "RS_CO": 0.9,
        "RS_AN": 0.7
      },
      "ca_def": {
        "cyber": 0.6,
        "land": 0.4,
        "sea": 0.4,
        "space": 0.4,
        "air": 0.4
      },
      "l_target": {
        "organization": 4,
        "intelligence": 3.5,
        "tool": 2.5
      },
      "i_target": {
        "cognitive": 0.7,
        "physical": 0.4,
        "virtual": 0.4
      },
      "time_to_effect": "hours",
      "availability_impact": "low",
      "human_approval": true,
      "cost": 2
    },
    {
      "id": "CM-002",
      "name": "CTI multi-source correlation and confidence scoring",
      "co_app": {
        "DE_CM": 0.9,
        "DE_AE": 0.9,
        "RS_AN": 0.7,
        "ID_AM": 0.6
      },
      "ca_def": {
        "cyber": 0.8,
        "land": 0.3,
        "sea": 0.2,
        "space": 0.5,
        "air": 0.2
      },
      "l_target": {
        "organization": 2.5,
        "intelligence": 4.5,
        "tool": 4
      },
      "i_target": {
        "cognitive": 0.5,
        "physical": 0.2,
        "virtual": 0.8
      },
      "time_to_effect": "hours",
      "availability_impact": "none",
      "human_approval": false,
      "cost": 3
    },
    {
      "id": "CM-003",
      "name": "Mission-aware segmentation and isolation",
      "co_app": {
        "PR_AC": 0.9,
        "PR_PT": 0.9,
        "RS_MI": 0.9,
        "ID_AM": 0.8
      },
      "ca_def": {
        "cyber": 0.9,
        "land": 0.5,
        "sea": 0.4,
        "space": 0.2,
        "air": 0.4
      },
      "l_target": {
        "organization": 3.5,
        "intelligence": 3,
        "tool": 4.5
      },
      "i_target": {
        "cognitive": 0.2,
        "physical": 0.7,
        "virtual": 0.9
      },
      "time_to_effect": "minutes",
      "availability_impact": "medium",
      "human_approval": true,
      "cost": 4
    },
    {
      "id": "CM-004",
      "name": "GNSS anomaly response and fallback navigation",
      "co_app": {
        "DE_AE": 0.8,
        "PR_PT": 0.8,
        "RS_MI": 0.8,
        "RS_CO": 0.6
      },
      "ca_def": {
        "cyber": 0.5,
        "land": 0.6,
        "sea": 0.5,
        "space": 0.9,
        "air": 0.6
      },
      "l_target": {
        "organization": 3.5,
        "intelligence": 4,
        "tool": 4
      },
      "i_target": {
        "cognitive": 0.4,
        "physical": 0.9,
        "virtual": 0.6
      },
      "time_to_effect": "hours",
      "availability_impact": "medium",
      "human_approval": true,
      "cost": 4
    },
    {
      "id": "CM-005",
      "name": "Disinformation containment and trusted communication",
      "co_app": {
        "RS_CO": 0.9,
        "GV_OC": 0.7,
        "DE_CM": 0.6
      },
      "ca_def": {
        "cyber": 0.5,
        "land": 0.3,
        "sea": 0.3,
        "space": 0.2,
        "air": 0.3
      },
      "l_target": {
        "organization": 4.5,
        "intelligence": 3.5,
        "tool": 2.5
      },
      "i_target": {
        "cognitive": 0.95,
        "physical": 0.2,
        "virtual": 0.2
      },
      "time_to_effect": "hours",
      "availability_impact": "none",
      "human_approval": true,
      "cost": 2
    },
    {
      "id": "CM-006",
      "name": "Adaptive access hardening",
      "co_app": {
        "PR_AC": 1,
        "PR_DS": 0.5,
        "DE_CM": 0.5
      },
      "ca_def": {
        "cyber": 0.9,
        "land": 0,
        "sea": 0,
        "space": 0,
        "air": 0
      },
      "l_target": {
        "organization": 3,
        "intelligence": 3,
        "tool": 4
      },
      "i_target": {
        "cognitive": 0.1,
        "physical": 0.2,
        "virtual": 0.85
      },
      "time_to_effect": "minutes",
      "availability_impact": "low",
      "human_approval": false,
      "cost": 2
    },
    {
      "id": "CM-007",
      "name": "Cyber deception and decoy telemetry",
      "co_app": {
        "DE_AE": 0.8,
        "DE_CM": 0.8,
        "PR_PT": 0.5
      },
      "ca_def": {
        "cyber": 0.8,
        "land": 0,
        "sea": 0,
        "space": 0,
        "air": 0
      },
      "l_target": {
        "organization": 2.5,
        "intelligence": 4,
        "tool": 4
      },
      "i_target": {
        "cognitive": 0.4,
        "physical": 0.1,
        "virtual": 0.7
      },
      "time_to_effect": "days",
      "availability_impact": "none",
      "human_approval": true,
      "cost": 3
    },
    {
      "id": "CM-008",
      "name": "Resilient recovery and service prioritization",
      "co_app": {
        "RC_RP": 0.9,
        "RS_CO": 0.8,
        "RS_MI": 0.7,
        "PR_DS": 0.7
      },
      "ca_def": {
        "cyber": 0.7,
        "land": 0.4,
        "sea": 0.4,
        "space": 0.4,
        "air": 0.4
      },
      "l_target": {
        "organization": 4,
        "intelligence": 3,
        "tool": 4
      },
      "i_target": {
        "cognitive": 0.5,
        "physical": 0.7,
        "virtual": 0.8
      },
      "time_to_effect": "hours",
      "availability_impact": "low",
      "human_approval": true,
      "cost": 4
    }
  ],
  "example_scenarios": [
    {
      "id": "SCN-001",
      "name": "Connected vehicle GNSS spoofing with disinformation",
      "x": {
        "co_v": {
          "DE_AE": 0.7,
          "DE_CM": 0.6,
          "RS_CO": 0.8,
          "PR_PT": 0.6,
          "ID_AM": 0.5
        },
        "ca_exp": {
          "cyber": 0.7,
          "land": 0.6,
          "sea": 0,
          "space": 0.9,
          "air": 0
        },
        "l_v": {
          "organization": 2,
          "intelligence": 2,
          "tool": 2.5
        },
        "i_pos": {
          "cognitive": 0.9,
          "physical": 0.5,
          "virtual": 0.75
        }
      },
      "suggested_candidates": [
        "CM-001",
        "CM-002",
        "CM-004",
        "CM-005",
        "CM-008"
      ]
    },
    {
      "id": "SCN-002",
      "name": "Port OT/CPS disruption with maritime logistics impact",
      "x": {
        "co_v": {
          "ID_AM": 0.75,
          "PR_PT": 0.8,
          "DE_AE": 0.65,
          "RS_MI": 0.7,
          "RC_RP": 0.45
        },
        "ca_exp": {
          "cyber": 0.75,
          "land": 0.35,
          "sea": 0.85,
          "space": 0.15,
          "air": 0.1
        },
        "l_v": {
          "organization": 2.3,
          "intelligence": 2.4,
          "tool": 2.1
        },
        "i_pos": {
          "cognitive": 0.35,
          "physical": 0.85,
          "virtual": 0.7
        }
      },
      "suggested_candidates": [
        "CM-001",
        "CM-002",
        "CM-003",
        "CM-008"
      ]
    },
    {
      "id": "SCN-003",
      "name": "Air command data poisoning and model drift",
      "x": {
        "co_v": {
          "PR_DS": 0.8,
          "DE_AE": 0.75,
          "RS_AN": 0.72,
          "GV_RM": 0.55
        },
        "ca_exp": {
          "cyber": 0.72,
          "land": 0.15,
          "sea": 0.1,
          "space": 0.45,
          "air": 0.78
        },
        "l_v": {
          "organization": 2.2,
          "intelligence": 1.8,
          "tool": 2.6
        },
        "i_pos": {
          "cognitive": 0.68,
          "physical": 0.38,
          "virtual": 0.82
        }
      },
      "suggested_candidates": [
        "CM-001",
        "CM-002",
        "CM-007",
        "CM-008"
      ]
    },
    {
      "id": "SCN-004",
      "name": "Identity compromise across joint operations",
      "x": {
        "co_v": {
          "PR_AC": 0.92,
          "DE_CM": 0.58,
          "RS_AN": 0.55,
          "GV_RM": 0.45
        },
        "ca_exp": {
          "cyber": 0.88,
          "land": 0.45,
          "sea": 0.38,
          "space": 0.28,
          "air": 0.42
        },
        "l_v": {
          "organization": 2.4,
          "intelligence": 2.5,
          "tool": 2.7
        },
        "i_pos": {
          "cognitive": 0.42,
          "physical": 0.25,
          "virtual": 0.82
        }
      },
      "suggested_candidates": [
        "CM-001",
        "CM-002",
        "CM-006",
        "CM-008"
      ]
    },
    {
      "id": "SCN-005",
      "name": "Supply chain compromise of multi-domain sensor software",
      "x": {
        "co_v": {
          "GV_RM": 0.78,
          "ID_AM": 0.82,
          "PR_DS": 0.62,
          "DE_CM": 0.66,
          "PR_PT": 0.55
        },
        "ca_exp": {
          "cyber": 0.76,
          "land": 0.55,
          "sea": 0.48,
          "space": 0.52,
          "air": 0.58
        },
        "l_v": {
          "organization": 1.9,
          "intelligence": 2.3,
          "tool": 2.6
        },
        "i_pos": {
          "cognitive": 0.48,
          "physical": 0.52,
          "virtual": 0.78
        }
      },
      "suggested_candidates": [
        "CM-001",
        "CM-002",
        "CM-003",
        "CM-008"
      ]
    },
    {
      "id": "SCN-006",
      "name": "Coordinated DISARM-style influence operation",
      "x": {
        "co_v": {
          "RS_CO": 0.9,
          "GV_OC": 0.72,
          "DE_CM": 0.58,
          "RS_AN": 0.52
        },
        "ca_exp": {
          "cyber": 0.55,
          "land": 0.48,
          "sea": 0.34,
          "space": 0.25,
          "air": 0.4
        },
        "l_v": {
          "organization": 1.8,
          "intelligence": 2,
          "tool": 2.8
        },
        "i_pos": {
          "cognitive": 0.95,
          "physical": 0.2,
          "virtual": 0.45
        }
      },
      "suggested_candidates": [
        "CM-001",
        "CM-002",
        "CM-005"
      ]
    },
    {
      "id": "SCN-007",
      "name": "Satellite communication disruption and fallback coordination",
      "x": {
        "co_v": {
          "PR_PT": 0.68,
          "DE_CM": 0.62,
          "RS_CO": 0.82,
          "RC_RP": 0.58
        },
        "ca_exp": {
          "cyber": 0.58,
          "land": 0.52,
          "sea": 0.6,
          "space": 0.88,
          "air": 0.7
        },
        "l_v": {
          "organization": 2,
          "intelligence": 2.25,
          "tool": 2.5
        },
        "i_pos": {
          "cognitive": 0.62,
          "physical": 0.55,
          "virtual": 0.58
        }
      },
      "suggested_candidates": [
        "CM-001",
        "CM-002",
        "CM-004",
        "CM-005",
        "CM-008"
      ]
    },
    {
      "id": "SCN-008",
      "name": "Historical Stuxnet-style ICS sabotage at Natanz",
      "x": {
        "co_v": {
          "ID_AM": 0.72,
          "PR_PT": 0.92,
          "DE_AE": 0.88,
          "DE_CM": 0.72,
          "RS_MI": 0.8,
          "PR_DS": 0.55
        },
        "ca_exp": {
          "cyber": 0.95,
          "land": 0.82,
          "sea": 0,
          "space": 0.05,
          "air": 0.05
        },
        "l_v": {
          "organization": 2.1,
          "intelligence": 2,
          "tool": 1.9
        },
        "i_pos": {
          "cognitive": 0.45,
          "physical": 0.9,
          "virtual": 0.86
        }
      },
      "suggested_candidates": [
        "CM-001",
        "CM-002",
        "CM-003",
        "CM-006",
        "CM-008"
      ]
    },
    {
      "id": "SCN-009",
      "name": "NATO CCDCOE NotPetya-style supply-chain wiper",
      "description": "Scenario storico-difensivo ispirato a NotPetya: compromissione supply chain software/update, propagazione laterale e impatto wiper su organizzazioni pubbliche, logistica, trasporti, industria e servizi critici.",
      "diamond": {
        "adversary": {
          "actor_type": "state-linked destructive cyber actor",
          "strategic_goal": "degradare continuita' operativa, fiducia nei servizi e capacita' logistica",
          "sophistication": "high",
          "intent": "disruption and irreversible data destruction",
          "confidence": 0.78
        },
        "capability": {
          "technique_family": [
            "software supply-chain compromise",
            "credential abuse",
            "lateral movement",
            "destructive wiper"
          ],
          "domains_used": [
            "cyber",
            "land",
            "sea",
            "air"
          ],
          "synchronization_level": "high",
          "observed_indicators": [
            "malicious software update",
            "rapid internal propagation",
            "irreversible encryption or wiper behavior",
            "service outage across business units"
          ]
        },
        "infrastructure": {
          "systems_abused": [
            "trusted update mechanism",
            "Windows enterprise networks",
            "identity and admin tooling",
            "logistics and operations platforms"
          ],
          "dependency_chain": [
            "vendor update",
            "enterprise endpoints",
            "identity propagation",
            "business continuity",
            "public and allied services"
          ],
          "civil_military_touchpoints": [
            "logistica",
            "trasporti",
            "energia",
            "sanita'",
            "servizi governativi"
          ],
          "exposure": "very high"
        },
        "victim": {
          "organization_type": "public-private critical service ecosystem",
          "mission": "continuita' operativa e preservazione servizi essenziali",
          "critical_assets": [
            "identity services",
            "endpoint fleet",
            "backup and recovery",
            "logistics systems",
            "operational communications"
          ],
          "operational_constraints": [
            "no complete shutdown",
            "restore priority services first",
            "coordinate public messaging",
            "preserve forensic evidence"
          ],
          "risk_tolerance": "very low"
        }
      },
      "x": {
        "co_v": {
          "GV_RM": 0.72,
          "ID_AM": 0.84,
          "PR_AC": 0.82,
          "PR_DS": 0.78,
          "PR_PT": 0.86,
          "DE_CM": 0.74,
          "DE_AE": 0.82,
          "RS_AN": 0.7,
          "RS_MI": 0.88,
          "RC_RP": 0.9
        },
        "ca_exp": {
          "cyber": 0.96,
          "land": 0.72,
          "sea": 0.58,
          "space": 0.12,
          "air": 0.44
        },
        "l_v": {
          "organization": 1.8,
          "intelligence": 2.1,
          "tool": 2
        },
        "i_pos": {
          "cognitive": 0.68,
          "physical": 0.62,
          "virtual": 0.96
        }
      },
      "suggested_candidates": [
        "CM-001",
        "CM-002",
        "CM-003",
        "CM-006",
        "CM-008"
      ]
    },
    {
      "id": "SCN-010",
      "name": "Viasat KA-SAT satellite communications disruption",
      "description": "Scenario storico-difensivo basato sull'attacco Viasat KA-SAT del 23-24 febbraio 2022: compromissione di infrastruttura di gestione SATCOM, distribuzione di wiper AcidRain verso modem e interruzione di comunicazioni satellitari in Ucraina con spillover europeo.",
      "diamond": {
        "adversary": {
          "actor_type": "state-linked military cyber actor",
          "strategic_goal": "degradare comunicazioni satellitari e supporto C2 durante fase cinetica",
          "sophistication": "high",
          "intent": "disruption of satellite broadband terminals",
          "confidence": 0.82
        },
        "capability": {
          "technique_family": [
            "satellite ground segment compromise",
            "management network abuse",
            "firmware or modem wiper",
            "communications disruption"
          ],
          "domains_used": [
            "cyber",
            "space",
            "land",
            "air",
            "sea"
          ],
          "synchronization_level": "high",
          "observed_indicators": [
            "large-scale modem outage",
            "loss of satellite broadband connectivity",
            "AcidRain-like destructive firmware behavior",
            "spillover to European civilian services"
          ]
        },
        "infrastructure": {
          "systems_abused": [
            "SATCOM management network",
            "KA-SAT ground infrastructure",
            "SurfBeam modem fleet",
            "remote terminal update or control path"
          ],
          "dependency_chain": [
            "ground management access",
            "terminal configuration",
            "satellite broadband service",
            "military and civilian communications",
            "mission continuity"
          ],
          "civil_military_touchpoints": [
            "comunicazioni militari",
            "servizi governativi",
            "energia e turbine eoliche",
            "utenze civili europee"
          ],
          "exposure": "high"
        },
        "victim": {
          "organization_type": "satellite communications provider and dependent public-private users",
          "mission": "mantenere connettivita' SATCOM resiliente durante crisi",
          "critical_assets": [
            "SATCOM modems",
            "ground management systems",
            "teleport operations",
            "fallback communications",
            "incident coordination"
          ],
          "operational_constraints": [
            "restore terminals at scale",
            "avoid disruption of unaffected gateways",
            "prioritize military and emergency users",
            "coordinate vendor and allied response"
          ],
          "risk_tolerance": "very low"
        }
      },
      "x": {
        "co_v": {
          "GV_OC": 0.7,
          "GV_RM": 0.66,
          "ID_AM": 0.82,
          "PR_AC": 0.72,
          "PR_PT": 0.88,
          "DE_CM": 0.76,
          "DE_AE": 0.84,
          "RS_CO": 0.82,
          "RS_MI": 0.86,
          "RC_RP": 0.74
        },
        "ca_exp": {
          "cyber": 0.9,
          "land": 0.58,
          "sea": 0.4,
          "space": 0.94,
          "air": 0.52
        },
        "l_v": {
          "organization": 2,
          "intelligence": 2.15,
          "tool": 2.2
        },
        "i_pos": {
          "cognitive": 0.58,
          "physical": 0.52,
          "virtual": 0.92
        }
      },
      "suggested_candidates": [
        "CM-001",
        "CM-002",
        "CM-004",
        "CM-005",
        "CM-008"
      ]
    }
  ],
  "framework_sources": [
    {
      "framework": "ESA SPACE-SHIELD",
      "url": "https://spaceshield.esa.int/",
      "description": "Knowledge base ATT&CK-like per sistemi spaziali, con matrice su Space Segment, Ground Segment e link di comunicazione."
    },
    {
      "framework": "MITRE ATT&CK",
      "url": "https://attack.mitre.org/",
      "description": "Knowledge base globale di tattiche, tecniche e procedure avversarie basata su osservazioni reali."
    },
    {
      "framework": "MITRE ATLAS",
      "url": "https://atlas.mitre.org/",
      "description": "Catalogo di tattiche e tecniche avversarie contro sistemi di intelligenza artificiale."
    },
    {
      "framework": "DISARM",
      "url": "https://www.disarm.foundation/",
      "description": "Framework e linguaggio comune per analizzare e rispondere a campagne di manipolazione informativa."
    },
    {
      "framework": "NATO MDO Unified Framework",
      "url": "https://doi.org/10.21203/rs.3.rs-10386609/v1",
      "description": "Conceptual framework for NATO MDO based on operational domains, DIME instruments, cross-domain integration, synchronized effects and orchestration."
    }
  ],
  "framework_mappings": {
    "gnss_spoofing": [
      {
        "framework": "ESA SPACE-SHIELD",
        "tactic": "Impact",
        "technique": "Spacecraft Jamming / Ground Segment Jamming / Transmitted Data Manipulation",
        "trigger": "Dipendenza GNSS o space link con coordinate incoerenti, jamming o spoofing.",
        "response": [
          "CM-001",
          "CM-002",
          "CM-004",
          "CM-008"
        ],
        "domains": [
          "space",
          "land",
          "air",
          "sea",
          "cyber"
        ]
      },
      {
        "framework": "MITRE ATT&CK",
        "tactic": "Impact / Defense Evasion / Collection",
        "technique": "T1565 Data Manipulation, T1499 Endpoint DoS, T1027 Obfuscated Files or Information",
        "trigger": "Alterazione o degradazione di dati di navigazione, telemetry ingestion o servizi dipendenti.",
        "response": [
          "CM-002",
          "CM-004",
          "CM-008"
        ],
        "domains": [
          "cyber",
          "space",
          "land"
        ]
      },
      {
        "framework": "MITRE ATLAS",
        "tactic": "ML model integrity",
        "technique": "Data poisoning, evasion of ML-based sensor fusion, model drift exploitation",
        "trigger": "Pipeline di sensor fusion o anomaly detection che interpreta segnali GNSS manipolati.",
        "response": [
          "CM-002",
          "CM-004",
          "CM-007"
        ],
        "domains": [
          "space",
          "cyber",
          "land"
        ]
      }
    ],
    "communication_disruption": [
      {
        "framework": "ESA SPACE-SHIELD",
        "tactic": "Command and Control / Impact",
        "technique": "Protocol Tunnelling, RF modification, Temporary loss to telecommand satellite",
        "trigger": "Degrado comunicazioni satellitari, fallback incerto o perdita temporanea di link.",
        "response": [
          "CM-001",
          "CM-004",
          "CM-008"
        ],
        "domains": [
          "space",
          "sea",
          "air",
          "land"
        ]
      },
      {
        "framework": "MITRE ATT&CK",
        "tactic": "Command and Control / Impact",
        "technique": "T1105 Ingress Tool Transfer, T1498 Network Denial of Service, T1489 Service Stop",
        "trigger": "Interruzione o saturazione di servizi di comunicazione mission-critical.",
        "response": [
          "CM-001",
          "CM-005",
          "CM-008"
        ],
        "domains": [
          "cyber",
          "space"
        ]
      }
    ],
    "software_exploit": [
      {
        "framework": "MITRE ATT&CK",
        "tactic": "Initial Access / Execution / Defense Evasion",
        "technique": "T1190 Exploit Public-Facing Application, T1059 Command and Scripting Interpreter, T1027 Obfuscated Files or Information",
        "trigger": "Vulnerabilita' software, servizio esposto o exploit su backend operativo.",
        "response": [
          "CM-002",
          "CM-003",
          "CM-006",
          "CM-008"
        ],
        "domains": [
          "cyber"
        ]
      },
      {
        "framework": "ESA SPACE-SHIELD",
        "tactic": "Initial Access / Execution",
        "technique": "Software vulnerabilities, Payload exploitation to execute commands",
        "trigger": "Software ground/space segment esposto o componente missione vulnerabile.",
        "response": [
          "CM-002",
          "CM-003",
          "CM-008"
        ],
        "domains": [
          "space",
          "cyber"
        ]
      }
    ],
    "identity_compromise": [
      {
        "framework": "MITRE ATT&CK",
        "tactic": "Credential Access / Initial Access / Persistence",
        "technique": "T1078 Valid Accounts, T1552 Unsecured Credentials, T1110 Brute Force",
        "trigger": "Uso improprio credenziali, MFA bypass o account privilegiato compromesso.",
        "response": [
          "CM-001",
          "CM-002",
          "CM-006"
        ],
        "domains": [
          "cyber"
        ]
      },
      {
        "framework": "ESA SPACE-SHIELD",
        "tactic": "Credential Access",
        "technique": "Valid Credentials, Steal cryptographic keys, Forge Digital Certificates",
        "trigger": "Credenziali o chiavi usate per telecommand, ground segment o federated mission.",
        "response": [
          "CM-001",
          "CM-002",
          "CM-006"
        ],
        "domains": [
          "space",
          "cyber"
        ]
      }
    ],
    "supply_chain": [
      {
        "framework": "MITRE ATT&CK",
        "tactic": "Initial Access / Resource Development",
        "technique": "T1195 Supply Chain Compromise, T1588 Obtain Capabilities",
        "trigger": "Compromissione di dipendenze software, update channel, build system o vendor.",
        "response": [
          "CM-001",
          "CM-002",
          "CM-003",
          "CM-008"
        ],
        "domains": [
          "cyber",
          "land",
          "air",
          "sea",
          "space"
        ]
      },
      {
        "framework": "ESA SPACE-SHIELD",
        "tactic": "Initial Access / Resource Development",
        "technique": "Compromise Software Supply Chain, Compromise Hardware Supply Chain, Malicious supply chain capabilities",
        "trigger": "Dipendenze missione o componenti space segment/ground segment non affidabili.",
        "response": [
          "CM-001",
          "CM-002",
          "CM-008"
        ],
        "domains": [
          "space",
          "cyber"
        ]
      },
      {
        "framework": "MITRE ATLAS",
        "tactic": "ML supply chain",
        "technique": "Publish poisoned datasets, compromise ML artifacts, malicious model dependency",
        "trigger": "Dataset, modello o pipeline AI/ML importati da fonte non verificata.",
        "response": [
          "CM-002",
          "CM-007",
          "CM-008"
        ],
        "domains": [
          "cyber"
        ]
      }
    ],
    "ot_cps": [
      {
        "framework": "MITRE ATT&CK",
        "tactic": "Lateral Movement / Impact",
        "technique": "T0831 Manipulation of Control, T0882 Theft of Operational Information, T0814 Denial of Service",
        "trigger": "Degrado OT/CPS, manipolazione controllo o interruzione servizi fisici.",
        "response": [
          "CM-001",
          "CM-003",
          "CM-008"
        ],
        "domains": [
          "cyber",
          "land",
          "sea",
          "air"
        ]
      }
    ],
    "data_poisoning": [
      {
        "framework": "MITRE ATLAS",
        "tactic": "ML Attack Staging / ML Model Access / Impact",
        "technique": "Data poisoning, evade model, manipulate training or runtime data",
        "trigger": "Dati alterati in training, inference, decision support o sensor fusion.",
        "response": [
          "CM-001",
          "CM-002",
          "CM-007"
        ],
        "domains": [
          "cyber",
          "air",
          "space"
        ]
      },
      {
        "framework": "MITRE ATT&CK",
        "tactic": "Collection / Impact",
        "technique": "T1565 Data Manipulation, T1005 Data from Local System",
        "trigger": "Alterazione di dataset, log, telemetry o feature usate per decisioni operative.",
        "response": [
          "CM-002",
          "CM-007",
          "CM-008"
        ],
        "domains": [
          "cyber"
        ]
      }
    ],
    "disinformation": [
      {
        "framework": "DISARM",
        "tactic": "Plan / Prepare / Seed / Amplify / Manipulate / Evade / Assess",
        "technique": "Narrative planning, persona/infrastructure preparation, content seeding, coordinated amplification, perception manipulation",
        "trigger": "Operazione informativa coordinata o influenza cognitiva collegata allo scenario.",
        "response": [
          "CM-001",
          "CM-002",
          "CM-005"
        ],
        "domains": [
          "cyber",
          "land",
          "cognitive"
        ]
      },
      {
        "framework": "MITRE ATT&CK",
        "tactic": "Reconnaissance / Resource Development / Impact",
        "technique": "T1598 Phishing for Information, T1585 Establish Accounts, T1565 Data Manipulation",
        "trigger": "Campagna informativa coordinata, narrativa manipolata o falsa evidenza pubblica.",
        "response": [
          "CM-001",
          "CM-002",
          "CM-005"
        ],
        "domains": [
          "cyber",
          "land",
          "cognitive"
        ]
      },
      {
        "framework": "MITRE ATLAS",
        "tactic": "LLM / AI-enabled influence",
        "technique": "Prompt injection, generated deceptive content, model output manipulation",
        "trigger": "Uso di AI generativa per amplificare contenuti o manipolare percezione.",
        "response": [
          "CM-002",
          "CM-005"
        ],
        "domains": [
          "cyber",
          "cognitive"
        ]
      }
    ]
  },
  "nato_cases": [
    {
      "id": "notpetya",
      "title": "NotPetya-style supply-chain wiper sviluppato in ATHENA",
      "description": "Scenario storico-difensivo basato sul caso NotPetya: compromissione di un meccanismo di update software fidato, propagazione laterale e impatto distruttivo su servizi pubblici, logistica e continuita' operativa.",
      "sourceLabel": "Fonte NATO/CCDCOE citata",
      "sourceUrl": "https://www.wired.com/story/notpetya-petya-russia-cause/",
      "scenarioId": "SCN-009",
      "flow": [
        {
          "phase": "Supply chain",
          "label": "Trusted update channel",
          "evidence": "Compromissione del meccanismo di update software e distribuzione di codice malevolo tramite canale fidato.",
          "axis": "P: govern/prevent | L: organization",
          "response": "CM-001, CM-002"
        },
        {
          "phase": "Initial access",
          "label": "Endpoint infection",
          "evidence": "Esecuzione su host enterprise e avvio della propagazione interna con elevata fiducia apparente.",
          "axis": "P: detect | D: cyber",
          "response": "CM-002, CM-006"
        },
        {
          "phase": "Lateral movement",
          "label": "Credential and admin tooling abuse",
          "evidence": "Uso di credenziali e strumenti amministrativi per muoversi rapidamente nella rete.",
          "axis": "P: respond/prevent | L: tool",
          "response": "CM-003, CM-006"
        },
        {
          "phase": "Impact",
          "label": "Wiper / destructive outage",
          "evidence": "Interruzione dei servizi, perdita operativa e necessita' di ripristino prioritizzato.",
          "axis": "E: virtual/physical/cognitive",
          "response": "CM-001, CM-008"
        }
      ],
      "frameworkRows": [
        [
          "Supply chain",
          "T1195 Supply Chain Compromise / trusted update abuse",
          "P govern-prevent, L organization",
          "CM-001, CM-002"
        ],
        [
          "Credential Access",
          "Credential material and administrative trust abused during propagation",
          "P detect-respond, D cyber",
          "CM-002, CM-006"
        ],
        [
          "Lateral Movement",
          "Administrative tooling and internal trust relationships",
          "P respond-prevent, L tool",
          "CM-003, CM-006"
        ],
        [
          "Impact",
          "Destructive wiper behavior and service outage",
          "E virtual-physical-cognitive",
          "CM-001, CM-008"
        ],
        [
          "Recovery",
          "Prioritized business continuity and public/private coordination",
          "P respond-recover, L organization",
          "CM-001, CM-005, CM-008"
        ]
      ],
      "case_scenarios": [
        {
          "id": "NP-01",
          "name": "Trusted software update compromise",
          "summary": "Compromissione del canale di aggiornamento di un software usato da organizzazioni ucraine e internazionali.",
          "athena_focus": "Governance supply chain, asset dependency mapping, CTI correlation.",
          "dominant_domains": [
            "cyber",
            "land"
          ],
          "evidence": [
            "trusted update channel",
            "vendor dependency",
            "rapid campaign onset"
          ],
          "responses": [
            "CM-001",
            "CM-002",
            "CM-008"
          ]
        },
        {
          "id": "NP-02",
          "name": "Enterprise propagation and credential abuse",
          "summary": "Propagazione interna tramite relazioni di fiducia, credenziali e strumenti amministrativi.",
          "athena_focus": "Identity hardening, segmentation, monitoring, containment.",
          "dominant_domains": [
            "cyber"
          ],
          "evidence": [
            "credential abuse",
            "lateral movement",
            "administrative tooling"
          ],
          "responses": [
            "CM-002",
            "CM-003",
            "CM-006"
          ]
        },
        {
          "id": "NP-03",
          "name": "Destructive wiper disguised as ransomware",
          "summary": "Perdita di disponibilita' e integrita' dei sistemi con impatti operativi oltre il perimetro iniziale.",
          "athena_focus": "Virtual impact mitigation and prioritized recovery.",
          "dominant_domains": [
            "cyber",
            "land",
            "sea",
            "air"
          ],
          "evidence": [
            "irreversible outage",
            "business interruption",
            "logistics disruption"
          ],
          "responses": [
            "CM-001",
            "CM-003",
            "CM-008"
          ]
        },
        {
          "id": "NP-04",
          "name": "Global spillover and continuity pressure",
          "summary": "Effetti a cascata su organizzazioni multinazionali, supply chain, logistica e servizi pubblici.",
          "athena_focus": "Cross-domain incident cell and public/private coordination.",
          "dominant_domains": [
            "cyber",
            "land",
            "sea"
          ],
          "evidence": [
            "multi-country impact",
            "service degradation",
            "public communication needs"
          ],
          "responses": [
            "CM-001",
            "CM-005",
            "CM-008"
          ]
        }
      ],
      "timeline": [
        {
          "time": "pre-attack",
          "event": "Vendor/update path prepared or compromised."
        },
        {
          "time": "execution",
          "event": "Destructive payload deployed through trusted software path."
        },
        {
          "time": "propagation",
          "event": "Internal movement via credentials and administrative trust."
        },
        {
          "time": "impact",
          "event": "Widespread operational disruption and recovery pressure."
        }
      ]
    },
    {
      "id": "viasat",
      "title": "Viasat KA-SAT satellite communications disruption sviluppato in ATHENA",
      "description": "Scenario storico-difensivo basato sull'attacco Viasat KA-SAT del 23-24 febbraio 2022: compromissione di infrastruttura di gestione SATCOM, wiper AcidRain sui modem e interruzione di comunicazioni satellitari con spillover europeo.",
      "sourceLabel": "Fonte CCDCOE Cyber Law Toolkit",
      "sourceUrl": "https://cyberlaw.ccdcoe.org/wiki/Viasat_KA-SAT_attack_(2022)",
      "scenarioId": "SCN-010",
      "flow": [
        {
          "phase": "Ground access",
          "label": "SATCOM management path",
          "evidence": "Accesso o abuso del segmento di gestione terrestre collegato a terminali KA-SAT e modem SurfBeam.",
          "axis": "P: govern/detect | D: cyber-space",
          "response": "CM-001, CM-002"
        },
        {
          "phase": "Terminal control",
          "label": "Modem fleet targeting",
          "evidence": "Distribuzione o attivazione di logica distruttiva verso modem satellitari su larga scala.",
          "axis": "P: detect/respond | L: tool",
          "response": "CM-002, CM-004"
        },
        {
          "phase": "Impact",
          "label": "AcidRain-like wiper",
          "evidence": "Modem resi inutilizzabili, perdita di connettivita' satellitare e necessita' di replacement/recovery.",
          "axis": "E: virtual/physical | D: space-land",
          "response": "CM-004, CM-008"
        },
        {
          "phase": "Spillover",
          "label": "European service disruption",
          "evidence": "Impatto su utenze civili e servizi dipendenti, inclusi sistemi energetici e comunicazioni operative.",
          "axis": "P: respond/recover | E: cognitive",
          "response": "CM-001, CM-005, CM-008"
        }
      ],
      "frameworkRows": [
        [
          "Initial Access",
          "VPN appliance misconfiguration exploited to access trusted management segment",
          "P govern-detect, D cyber-space",
          "CM-001, CM-002, CM-006"
        ],
        [
          "Command/Control",
          "Use of trusted management access to issue modem management commands",
          "P detect-respond, L tool",
          "CM-002, CM-004"
        ],
        [
          "Impact",
          "Flash memory overwrite on modem fleet and loss of network access",
          "E virtual-physical, D space-land",
          "CM-004, CM-008"
        ],
        [
          "Scope control",
          "Single consumer-oriented partition affected; satellite and directly managed government/mobility users not directly impacted",
          "L intelligence, E virtual",
          "CM-001, CM-002"
        ],
        [
          "Recovery",
          "Network stabilization, distributor coordination, factory reset/replacement modem logistics",
          "P respond-recover, L organization",
          "CM-001, CM-005, CM-008"
        ]
      ],
      "case_scenarios": [
        {
          "id": "VS-01",
          "name": "Focused malicious traffic from modems",
          "summary": "Alle 03:02 UTC Viasat rileva traffico malevolo da modem SurfBeam2/SurfBeam2+ in Ucraina, con difficolta' per i modem legittimi a restare online.",
          "athena_focus": "Detect su anomalie SATCOM, correlazione CTI e triage con operatore di ground segment.",
          "dominant_domains": [
            "cyber",
            "space",
            "land"
          ],
          "evidence": [
            "03:02 UTC",
            "malicious modem traffic",
            "consumer-oriented partition"
          ],
          "responses": [
            "CM-001",
            "CM-002",
            "CM-004"
          ]
        },
        {
          "id": "VS-02",
          "name": "Management network intrusion via VPN misconfiguration",
          "summary": "L'analisi Viasat indica un'intrusione ground-based tramite misconfiguration in un'appliance VPN, con accesso remoto al trusted management segment.",
          "athena_focus": "Governance accessi, hardening identity, monitoraggio del segmento di gestione.",
          "dominant_domains": [
            "cyber",
            "space"
          ],
          "evidence": [
            "VPN appliance misconfiguration",
            "trusted management segment",
            "remote access"
          ],
          "responses": [
            "CM-001",
            "CM-002",
            "CM-006"
          ]
        },
        {
          "id": "VS-03",
          "name": "Targeted management commands to modem fleet",
          "summary": "L'attore usa accesso di gestione per eseguire comandi legittimi e mirati su molti modem residenziali contemporaneamente.",
          "athena_focus": "Containment, fallback SATCOM, verifica comandi di gestione e change control.",
          "dominant_domains": [
            "cyber",
            "space",
            "land"
          ],
          "evidence": [
            "simultaneous management commands",
            "residential modems",
            "service partition"
          ],
          "responses": [
            "CM-002",
            "CM-004",
            "CM-008"
          ]
        },
        {
          "id": "VS-04",
          "name": "Flash memory overwrite and modem drop-off",
          "summary": "I comandi distruttivi sovrascrivono dati chiave nella memoria flash dei modem, rendendoli incapaci di accedere alla rete.",
          "athena_focus": "Impact virtual/physical, service restoration, replacement/factory reset.",
          "dominant_domains": [
            "space",
            "cyber",
            "land"
          ],
          "evidence": [
            "flash overwrite",
            "modems unable to access network",
            "04:15 UTC wider drop-off"
          ],
          "responses": [
            "CM-004",
            "CM-008"
          ]
        },
        {
          "id": "VS-05",
          "name": "European spillover and recovery logistics",
          "summary": "Impatto su migliaia di clienti in Ucraina e decine di migliaia in Europa; ripristino tramite stabilizzazione rete, reset o sostituzione modem.",
          "athena_focus": "Coordination, trusted communications, continuity prioritization.",
          "dominant_domains": [
            "space",
            "land",
            "cyber",
            "cognitive"
          ],
          "evidence": [
            "tens of thousands of modems",
            "Ukraine and Europe",
            "nearly 30,000 replacement modems"
          ],
          "responses": [
            "CM-001",
            "CM-005",
            "CM-008"
          ]
        },
        {
          "id": "VS-06",
          "name": "Scope limits and unaffected services",
          "summary": "Viasat dichiara che l'incidente non ha colpito direttamente il satellite KA-SAT, altri network Viasat, utenti mobility/government direttamente gestiti o dati end-user.",
          "athena_focus": "Bounded impact assessment and confidence scoring.",
          "dominant_domains": [
            "space",
            "cyber"
          ],
          "evidence": [
            "single consumer partition",
            "no end-user data compromise",
            "satellite not directly compromised"
          ],
          "responses": [
            "CM-001",
            "CM-002"
          ]
        }
      ],
      "timeline": [
        {
          "time": "2022-02-24 03:02 UTC",
          "event": "High volumes of focused malicious traffic detected from SurfBeam2/SurfBeam2+ modems in Ukraine."
        },
        {
          "time": "2022-02-24 ~04:15 UTC",
          "event": "Large numbers of modems across Europe exited the network over roughly 45 minutes."
        },
        {
          "time": "investigation",
          "event": "Ground-based intrusion via VPN appliance misconfiguration into trusted management segment."
        },
        {
          "time": "restoration",
          "event": "Network stabilized, affected modems reset or replaced, nearly 30,000 replacement modems shipped."
        }
      ]
    }
  ],
  "kb_architecture": {
    "paper_alignment": {
      "source_document": "OUP_Cybersecurity_MDO_SLR (8).pdf",
      "framework_name": "ATHENA: countermeAsures for THreat IntElligence in Multi-DomaiN operAtions framework",
      "research_gap": "CTI and CRM workflows, organizational structures, intelligence processes, and tools remain siloed and are not natively integrated in MDO contexts.",
      "core_contribution": "A multi-domain framework intersecting CTI and CRM through a fourth-order tensor model to conceptualize, develop, and deploy cyber countermeasures in MDOs.",
      "key_messages": [
        "Cyber Threat Intelligence in Multi-Domain Environment",
        "Cyber Risk Management in Multi-Domain Operations",
        "Cyber attack countermeasures to mitigate emerging multi-domain attack scenarios"
      ]
    },
    "entity_layers": [
      {
        "id": "L0",
        "name": "Source and evidence layer",
        "purpose": "Traccia fonti, osservazioni, livello di confidenza e limiti interpretativi.",
        "entities": [
          "source",
          "evidence_record",
          "confidence",
          "assumption",
          "limitation"
        ]
      },
      {
        "id": "L1",
        "name": "Threat model layer",
        "purpose": "Modella lo scenario tramite Diamond Model: adversary, capability, infrastructure, victim.",
        "entities": [
          "adversary",
          "capability",
          "infrastructure",
          "victim"
        ]
      },
      {
        "id": "L2",
        "name": "ATHENA tensor layer",
        "purpose": "Rappresenta la relazione P x D x L x E -> CC e il vettore scenario x.",
        "entities": [
          "P_process",
          "D_domain",
          "L_level",
          "E_effect",
          "countermeasure_class"
        ]
      },
      {
        "id": "L3",
        "name": "Scenario and case layer",
        "purpose": "Conserva scenari sperimentali, case study NATO/CCDCOE e sotto-scenari.",
        "entities": [
          "example_scenario",
          "nato_case",
          "case_scenario",
          "timeline_event"
        ]
      },
      {
        "id": "L4",
        "name": "Decision and response layer",
        "purpose": "Calcola ranking, vincoli, motivazione human-in-the-loop e piano di risposta.",
        "entities": [
          "score",
          "constraint",
          "ranking",
          "approval",
          "response_playbook"
        ]
      }
    ],
    "athena_tensor_model": {
      "relation": "ATHENA: P x D x L x E -> CC",
      "tensor_space": "T = V_P x V_D x V_L x V_E",
      "threat_input": "x = (co_v, ca_exp, l_v, i_pos)",
      "countermeasure_output": "CM = (co_app, ca_def, l_target, i_target)",
      "interpretation": {
        "P": "security process/control function, including govern, detect, respond, prevent",
        "D": "defensive capability across cyber, land, sea, space, air",
        "L": "cybersecurity level across organization, intelligence, tool",
        "E": "effect dimension across cognitive, physical, virtual",
        "CC": "cyber-oriented countermeasure class or concrete countermeasure"
      }
    },
    "scenario_schema_v2": {
      "required_blocks": [
        "metadata",
        "diamond",
        "x",
        "assumptions",
        "evidence_refs",
        "framework_refs",
        "candidate_countermeasures",
        "expected_outputs",
        "mdo_context",
        "dime_instruments",
        "mdo_mechanisms"
      ],
      "x_components": {
        "co_v": "Compromised controls, normalized 0..1",
        "ca_exp": "Observed or inferred offensive capability exposure by domain, normalized 0..1",
        "l_v": "Current/degraded security level across organization/intelligence/tool, scale 0..5",
        "i_pos": "Negative impact on cognitive/physical/virtual dimensions, normalized 0..1"
      },
      "scenario_types": [
        "illustrative_athena",
        "historical_case",
        "nato_ccdcoe_case",
        "vulnerability_intake",
        "simulation_variant",
        "what_if_experiment"
      ],
      "mdo_extension": {
        "scenario_fields_added": [
          "mdo_context",
          "dime_instruments",
          "mdo_mechanisms",
          "synchronization_window",
          "orchestration_intent",
          "civil_military_dependencies"
        ],
        "definition_rule": "Every scenario can be described not only by ATHENA x=(co_v, ca_exp, l_v, i_pos), but also by NATO MDO context: domains, DIME instruments, mechanisms, synchronization and orchestration conditions."
      }
    },
    "evidence_quality_model": {
      "confidence_scale": {
        "0.2": "single-source or weakly inferred",
        "0.5": "plausible but partially corroborated",
        "0.7": "multi-source or primary-source supported",
        "0.9": "high-confidence primary-source and operationally consistent"
      },
      "source_types": [
        "academic_paper",
        "official_report",
        "incident_writeup",
        "framework_matrix",
        "analyst_assumption"
      ],
      "quality_checks": [
        "source attribution present",
        "defensive-only interpretation",
        "domain impact explicitly mapped",
        "uncertainty stated",
        "countermeasure rationale linked to evidence"
      ]
    },
    "experiment_lifecycle": [
      {
        "step": "01_ingest",
        "description": "Importa paper, fonte caso, CTI e vincoli operativi.",
        "output": "source and evidence records"
      },
      {
        "step": "02_model",
        "description": "Costruisce Diamond Model e vettore ATHENA x.",
        "output": "scenario vector and assumptions"
      },
      {
        "step": "03_map",
        "description": "Mappa scenario su framework esterni e assi P-D-L-E.",
        "output": "framework mapping and ATHENA tensor coordinates"
      },
      {
        "step": "04_score",
        "description": "Calcola rischio residuo e ranking delle contromisure.",
        "output": "ranked candidate countermeasures"
      },
      {
        "step": "05_validate",
        "description": "Richiede validazione human-in-the-loop e registra override.",
        "output": "approved response decision"
      },
      {
        "step": "06_learn",
        "description": "Aggiorna KB con lezioni apprese, evidenze e variazioni di peso.",
        "output": "updated KB and experiment record"
      }
    ],
    "decision_trace_schema": {
      "fields": [
        "scenario_id",
        "selected_countermeasure",
        "score",
        "impact_gap",
        "control_residual",
        "level_gap",
        "constraints_applied",
        "evidence_summary",
        "human_decision",
        "override_reason"
      ]
    },
    "conceptual_frameworks": [
      {
        "id": "nato_mdo_unified_framework",
        "name": "A Unified Framework for NATO Multi-Domain Operations",
        "author": "Joao Reis, Joint Warfare Centre",
        "source_document": "v1_covered_c93cdab3-f584-48df-a5c5-2786a57adc93 (1).pdf",
        "posted_date": "2026-07-21",
        "doi": "https://doi.org/10.21203/rs.3.rs-10386609/v1",
        "method": "Systematic Literature Review and Critical Appraisal Skills Program",
        "purpose": "Clarifies NATO MDO mechanisms by integrating operational domains with military and non-military instruments of power.",
        "operational_domains": [
          "land",
          "maritime",
          "air",
          "space",
          "cyberspace"
        ],
        "dime_instruments": {
          "diplomatic": "Political alignment, alliance signalling, de-escalation and partner coordination.",
          "information": "Narrative shaping, information superiority, public communication and cognitive effects.",
          "military": "Cross-domain force employment across land, maritime, air, space and cyberspace.",
          "economic": "Sanctions, industrial resilience, supply chain pressure and recovery prioritization."
        },
        "mdo_mechanisms": [
          {
            "id": "MDO-M1",
            "name": "Cross-domain integration",
            "description": "Deliberate combination of capabilities, effects and activities across domains so they act as a mutually reinforcing system.",
            "athena_mapping": {
              "D": [
                "cyber",
                "land",
                "sea",
                "space",
                "air"
              ],
              "P": [
                "govern",
                "prevent",
                "respond"
              ]
            }
          },
          {
            "id": "MDO-M2",
            "name": "Synchronization and convergence of effects",
            "description": "Alignment of actions across time, space and purpose to generate compound operational effects.",
            "athena_mapping": {
              "P": [
                "detect",
                "respond"
              ],
              "E": [
                "physical",
                "virtual",
                "cognitive"
              ]
            }
          },
          {
            "id": "MDO-M3",
            "name": "Coordination of military and non-military instruments of power",
            "description": "Integration of DIME instruments with military activities in contested and hybrid contexts.",
            "athena_mapping": {
              "L": [
                "organization",
                "intelligence"
              ],
              "E": [
                "cognitive",
                "physical",
                "virtual"
              ]
            }
          },
          {
            "id": "MDO-M4",
            "name": "Information and decision superiority",
            "description": "Fusion of data, intelligence and decision support to shorten decision cycles and improve situational awareness.",
            "athena_mapping": {
              "L": [
                "intelligence",
                "tool"
              ],
              "P": [
                "detect",
                "govern"
              ]
            }
          },
          {
            "id": "MDO-M5",
            "name": "Agility and adaptability",
            "description": "Ability to redirect capabilities, resources and response posture as the operational environment changes.",
            "athena_mapping": {
              "P": [
                "respond",
                "prevent"
              ],
              "L": [
                "organization",
                "tool"
              ]
            }
          },
          {
            "id": "MDO-M6",
            "name": "Orchestration",
            "description": "Strategic and operational guidance that aligns domains, actors, resources and effects with intent.",
            "athena_mapping": {
              "P": [
                "govern",
                "respond"
              ],
              "L": [
                "organization",
                "intelligence"
              ]
            }
          }
        ],
        "operationalization_conditions": [
          "shared situational awareness across domains and stakeholders",
          "resilient and modular command-and-control structures",
          "integrated civil-military planning processes",
          "persistent military and non-military collaboration",
          "political cohesion and authority alignment for DIME actions",
          "secure and resilient communications",
          "decision-support tools for timing, sequencing and prioritization",
          "training and doctrine for cross-domain initiative",
          "feedback loops for continuous adaptation"
        ],
        "kb_usage": {
          "scenario_fields_added": [
            "mdo_context",
            "dime_instruments",
            "mdo_mechanisms",
            "synchronization_window",
            "orchestration_intent",
            "civil_military_dependencies"
          ],
          "definition_rule": "Every scenario can be described not only by ATHENA x=(co_v, ca_exp, l_v, i_pos), but also by NATO MDO context: domains, DIME instruments, mechanisms, synchronization and orchestration conditions."
        }
      }
    ]
  }
};
window.ATHENA_KB_TEXT = "metadata:\n  name: \"ATHENA Knowledge Base\"\n  version: \"0.2\"\n  language: \"it\"\n  purpose: \"Sperimentazione difensiva su scenari MDO e raccomandazione human-in-the-loop di contromisure\"\n  source_document: \"OUP_Cybersecurity_MDO_SLR (8).pdf\"\n  safety_scope:\n    allowed: \"Analisi difensiva, risk management, simulazione, risposta a incidenti, mitigazione\"\n    disallowed: \"Istruzioni operative per attacchi reali, exploit, persistenza, evasione o sabotaggio\"\n\nathena_axes:\n  P_cybersecurity_process:\n    govern:\n      description: \"Regole di ingaggio, governance cross-domain, identificazione asset critici e dipendenze\"\n      nist_csf_alignment: [\"Govern\", \"Identify\"]\n    detect:\n      description: \"Ingestione e contestualizzazione CTI in tempo reale per vettori multi-dominio\"\n      nist_csf_alignment: [\"Detect\"]\n    respond:\n      description: \"Orchestrazione di azioni per contenere e recuperare da impatti cyber-physical-social\"\n      nist_csf_alignment: [\"Respond\", \"Recover\"]\n    prevent:\n      description: \"Riduzione preventiva dell'esposizione e rafforzamento controlli prima della propagazione\"\n      nist_csf_alignment: [\"Protect\"]\n\n  D_defensive_capability:\n    cyber:\n      description: \"Capacita' di difesa su reti, endpoint, identity, cloud, IT/OT e data pipelines\"\n    land:\n      description: \"Protezione di asset terrestri, sistemi mobili, basi, trasporti e infrastrutture fisiche\"\n    sea:\n      description: \"Protezione di porti, navi, sistemi marittimi, logistica e comunicazioni navali\"\n    space:\n      description: \"Protezione di satelliti, GNSS, comunicazioni spaziali e dipendenze di navigazione\"\n    air:\n      description: \"Protezione di piattaforme aeree, controllo del traffico, droni e comunicazioni aeronautiche\"\n\n  L_cybersecurity_level:\n    organization:\n      description: \"Governance, policy, legal authority, relazioni di fiducia, protocolli di condivisione\"\n      maturity_scale: \"0-5\"\n    intelligence:\n      description: \"Pipeline CTI/CRM, correlazione indicatori, asset dependency mapping, risk reasoning\"\n      maturity_scale: \"0-5\"\n    tool:\n      description: \"SIEM/SOAR, data fusion, AI/ML pipeline, agenti autonomi o semi-autonomi\"\n      maturity_scale: \"0-5\"\n\n  E_effect_dimension:\n    cognitive:\n      description: \"Decision-making, percezione pubblica, fiducia, panico, manipolazione informativa\"\n      scale: \"0.0-1.0\"\n    physical:\n      description: \"Danno a infrastrutture, persone, veicoli, impianti, societa' o ambiente\"\n      scale: \"0.0-1.0\"\n    virtual:\n      description: \"Danno a sistemi digitali, dati, reti, servizi, cloud, IT/OT\"\n      scale: \"0.0-1.0\"\n\nthreat_model:\n  diamond_vertices:\n    adversary:\n      fields: [\"actor_type\", \"strategic_goal\", \"sophistication\", \"intent\", \"confidence\"]\n    capability:\n      fields: [\"technique_family\", \"domains_used\", \"synchronization_level\", \"observed_indicators\"]\n    infrastructure:\n      fields: [\"systems_abused\", \"dependency_chain\", \"civil_military_touchpoints\", \"exposure\"]\n    victim:\n      fields: [\"organization_type\", \"mission\", \"critical_assets\", \"operational_constraints\", \"risk_tolerance\"]\n\nscenario_vector_schema:\n  co_v:\n    type: \"map<string,float>\"\n    description: \"Severita' di compromissione dei controlli, 0 intatto, 1 neutralizzato\"\n    suggested_controls:\n      GV_OC: \"Organizational context and mission dependency governance\"\n      GV_RM: \"Risk management strategy\"\n      ID_AM: \"Asset management and dependency mapping\"\n      PR_AC: \"Identity and access enforcement\"\n      PR_DS: \"Data security\"\n      PR_PT: \"Protective technology\"\n      DE_CM: \"Continuous monitoring\"\n      DE_AE: \"Anomaly and event detection\"\n      RS_AN: \"Analysis during response\"\n      RS_CO: \"Response communications\"\n      RS_MI: \"Mitigation\"\n      RC_RP: \"Recovery planning\"\n  ca_exp:\n    type: \"map<domain,float>\"\n    description: \"Intensita' delle capacita' offensive osservate per dominio\"\n  l_v:\n    type: \"map<level,float>\"\n    description: \"Stato corrente o degradazione del livello; scala 0-5\"\n  i_pos:\n    type: \"map<effect,float>\"\n    description: \"Impatto negativo stimato; scala 0-1\"\n\ncountermeasure_schema:\n  fields:\n    id: \"Identificativo stabile\"\n    name: \"Nome breve\"\n    description: \"Azione difensiva o configurazione operativa\"\n    athena_mapping: \"Assi P-D-L-E coperti\"\n    co_app: \"Priorita' di applicazione controlli\"\n    ca_def: \"Capacita' difensive richieste per dominio\"\n    l_target: \"Target organization/intelligence/tool\"\n    i_target: \"Mitigazione attesa cognitive/physical/virtual\"\n    cost: \"Costo relativo 1-5\"\n    time_to_effect: \"minutes | hours | days | weeks\"\n    availability_impact: \"none | low | medium | high\"\n    prerequisites: \"Condizioni necessarie\"\n    evidence_needed: \"Evidenze per attivazione\"\n    human_approval: \"true | false\"\n\ncountermeasures:\n  - id: \"CM-001\"\n    name: \"Cross-domain incident cell activation\"\n    description: \"Attiva una cellula decisionale con SOC, risk owner, legal, comunicazione, operatori infrastrutturali e liaison civile/militare.\"\n    athena_mapping:\n      P: [\"govern\", \"respond\"]\n      D: [\"cyber\", \"land\", \"space\", \"air\", \"sea\"]\n      L: [\"organization\", \"intelligence\"]\n      E: [\"cognitive\", \"physical\", \"virtual\"]\n    co_app: {GV_OC: 0.9, GV_RM: 0.8, RS_CO: 0.9, RS_AN: 0.7}\n    ca_def: {cyber: 0.6, land: 0.4, sea: 0.4, space: 0.4, air: 0.4}\n    l_target: {organization: 4.0, intelligence: 3.5, tool: 2.5}\n    i_target: {cognitive: 0.7, physical: 0.4, virtual: 0.4}\n    cost: 2\n    time_to_effect: \"hours\"\n    availability_impact: \"low\"\n    prerequisites: [\"RACI definita\", \"canali sicuri di comunicazione\", \"authority per escalation\"]\n    evidence_needed: [\"scenario multi-dominio\", \"incertezza elevata\", \"dipendenze civili/militari coinvolte\"]\n    human_approval: true\n\n  - id: \"CM-002\"\n    name: \"CTI multi-source correlation and confidence scoring\"\n    description: \"Correli indicatori tecnici, segnali OSINT, telemetria di asset e dipendenze operative assegnando confidenza e priorita' di rischio.\"\n    athena_mapping:\n      P: [\"detect\"]\n      D: [\"cyber\", \"space\", \"land\"]\n      L: [\"intelligence\", \"tool\"]\n      E: [\"virtual\", \"cognitive\"]\n    co_app: {DE_CM: 0.9, DE_AE: 0.9, RS_AN: 0.7, ID_AM: 0.6}\n    ca_def: {cyber: 0.8, land: 0.3, sea: 0.2, space: 0.5, air: 0.2}\n    l_target: {organization: 2.5, intelligence: 4.5, tool: 4.0}\n    i_target: {cognitive: 0.5, physical: 0.2, virtual: 0.8}\n    cost: 3\n    time_to_effect: \"hours\"\n    availability_impact: \"none\"\n    prerequisites: [\"SIEM/SOAR o data lake\", \"feed CTI\", \"asset inventory\"]\n    evidence_needed: [\"indicatori eterogenei\", \"possibile deception\", \"correlazioni cross-domain\"]\n    human_approval: false\n\n  - id: \"CM-003\"\n    name: \"Mission-aware segmentation and isolation\"\n    description: \"Isola segmenti o servizi compromessi preservando servizi critici tramite priorita' di missione e dependency map.\"\n    athena_mapping:\n      P: [\"respond\", \"prevent\"]\n      D: [\"cyber\", \"land\", \"sea\", \"air\"]\n      L: [\"tool\", \"organization\"]\n      E: [\"virtual\", \"physical\"]\n    co_app: {PR_AC: 0.9, PR_PT: 0.9, RS_MI: 0.9, ID_AM: 0.8}\n    ca_def: {cyber: 0.9, land: 0.5, sea: 0.4, space: 0.2, air: 0.4}\n    l_target: {organization: 3.5, intelligence: 3.0, tool: 4.5}\n    i_target: {cognitive: 0.2, physical: 0.7, virtual: 0.9}\n    cost: 4\n    time_to_effect: \"minutes\"\n    availability_impact: \"medium\"\n    prerequisites: [\"network segmentation\", \"asset criticality ranking\", \"break-glass procedure\"]\n    evidence_needed: [\"movimento laterale\", \"rischio propagazione\", \"asset critici esposti\"]\n    human_approval: true\n\n  - id: \"CM-004\"\n    name: \"GNSS anomaly response and fallback navigation\"\n    description: \"Attiva controlli anti-spoofing/jamming, validazione multi-sensore e fallback procedurali per asset dipendenti da GNSS.\"\n    athena_mapping:\n      P: [\"detect\", \"respond\", \"prevent\"]\n      D: [\"space\", \"land\", \"air\", \"sea\", \"cyber\"]\n      L: [\"tool\", \"intelligence\", \"organization\"]\n      E: [\"physical\", \"virtual\", \"cognitive\"]\n    co_app: {DE_AE: 0.8, PR_PT: 0.8, RS_MI: 0.8, RS_CO: 0.6}\n    ca_def: {cyber: 0.5, land: 0.6, sea: 0.5, space: 0.9, air: 0.6}\n    l_target: {organization: 3.5, intelligence: 4.0, tool: 4.0}\n    i_target: {cognitive: 0.4, physical: 0.9, virtual: 0.6}\n    cost: 4\n    time_to_effect: \"hours\"\n    availability_impact: \"medium\"\n    prerequisites: [\"sensori alternativi\", \"procedure fallback\", \"telemetria posizione\"]\n    evidence_needed: [\"coordinate incoerenti\", \"segnali GNSS anomali\", \"cluster geografico di malfunzionamenti\"]\n    human_approval: true\n\n  - id: \"CM-005\"\n    name: \"Disinformation containment and trusted communication\"\n    description: \"Coordina comunicazione pubblica, fact-checking, canali trusted e monitoraggio narrativo per ridurre impatti cognitivi.\"\n    athena_mapping:\n      P: [\"govern\", \"detect\", \"respond\"]\n      D: [\"cyber\", \"land\", \"air\", \"sea\", \"space\"]\n      L: [\"organization\", \"intelligence\"]\n      E: [\"cognitive\"]\n    co_app: {RS_CO: 0.9, GV_OC: 0.7, DE_CM: 0.6}\n    ca_def: {cyber: 0.5, land: 0.3, sea: 0.3, space: 0.2, air: 0.3}\n    l_target: {organization: 4.5, intelligence: 3.5, tool: 2.5}\n    i_target: {cognitive: 0.95, physical: 0.2, virtual: 0.2}\n    cost: 2\n    time_to_effect: \"hours\"\n    availability_impact: \"none\"\n    prerequisites: [\"messaggi pre-approvati\", \"portavoce\", \"canali ufficiali resilienti\"]\n    evidence_needed: [\"narrative ostili\", \"panico pubblico\", \"informazioni false coordinate\"]\n    human_approval: true\n\n  - id: \"CM-006\"\n    name: \"Adaptive access hardening\"\n    description: \"Rafforza accessi, privilegi, MFA e conditional access in base a rischio, asset criticality e indicatori CTI.\"\n    athena_mapping:\n      P: [\"prevent\", \"respond\"]\n      D: [\"cyber\"]\n      L: [\"tool\", \"organization\"]\n      E: [\"virtual\"]\n    co_app: {PR_AC: 1.0, PR_DS: 0.5, DE_CM: 0.5}\n    ca_def: {cyber: 0.9, land: 0.0, sea: 0.0, space: 0.0, air: 0.0}\n    l_target: {organization: 3.0, intelligence: 3.0, tool: 4.0}\n    i_target: {cognitive: 0.1, physical: 0.2, virtual: 0.85}\n    cost: 2\n    time_to_effect: \"minutes\"\n    availability_impact: \"low\"\n    prerequisites: [\"IAM centralizzato\", \"MFA\", \"policy conditional access\"]\n    evidence_needed: [\"credential abuse\", \"login anomali\", \"privilege escalation\"]\n    human_approval: false\n\n  - id: \"CM-007\"\n    name: \"Cyber deception and decoy telemetry\"\n    description: \"Distribuisce honeypot, honeytoken e decoy asset per rilevare, rallentare e confondere movimenti avversari.\"\n    athena_mapping:\n      P: [\"detect\", \"prevent\"]\n      D: [\"cyber\"]\n      L: [\"tool\", \"intelligence\"]\n      E: [\"virtual\", \"cognitive\"]\n    co_app: {DE_AE: 0.8, DE_CM: 0.8, PR_PT: 0.5}\n    ca_def: {cyber: 0.8, land: 0.0, sea: 0.0, space: 0.0, air: 0.0}\n    l_target: {organization: 2.5, intelligence: 4.0, tool: 4.0}\n    i_target: {cognitive: 0.4, physical: 0.1, virtual: 0.7}\n    cost: 3\n    time_to_effect: \"days\"\n    availability_impact: \"none\"\n    prerequisites: [\"ambiente controllato\", \"logging\", \"regole di ingaggio\"]\n    evidence_needed: [\"ricognizione\", \"movimento laterale sospetto\", \"APT dwell time\"]\n    human_approval: true\n\n  - id: \"CM-008\"\n    name: \"Resilient recovery and service prioritization\"\n    description: \"Ripristina servizi secondo priorita' di missione, con backup validati, runbook e comunicazioni coordinate.\"\n    athena_mapping:\n      P: [\"respond\"]\n      D: [\"cyber\", \"land\", \"sea\", \"air\", \"space\"]\n      L: [\"organization\", \"tool\"]\n      E: [\"physical\", \"virtual\", \"cognitive\"]\n    co_app: {RC_RP: 0.9, RS_CO: 0.8, RS_MI: 0.7, PR_DS: 0.7}\n    ca_def: {cyber: 0.7, land: 0.4, sea: 0.4, space: 0.4, air: 0.4}\n    l_target: {organization: 4.0, intelligence: 3.0, tool: 4.0}\n    i_target: {cognitive: 0.5, physical: 0.7, virtual: 0.8}\n    cost: 4\n    time_to_effect: \"hours\"\n    availability_impact: \"low\"\n    prerequisites: [\"backup testati\", \"runbook\", \"dependency map\", \"priorita' missione\"]\n    evidence_needed: [\"servizio degradato\", \"ransomware o wiper sospetto\", \"impatto su continuita' operativa\"]\n    human_approval: true\n\nscoring:\n  default_weights:\n    w1_impact_gap: 0.45\n    w2_control_residual: 0.35\n    w3_level_gap: 0.20\n  constraints:\n    budget_B: 10\n    max_availability_impact: \"medium\"\n    require_human_approval_for:\n      - \"azioni con availability_impact medium o high\"\n      - \"azioni cross-domain\"\n      - \"azioni che coinvolgono comunicazione pubblica o autorita' esterne\"\n  decision_policy:\n    rank_by: \"lowest_residual_risk\"\n    tie_breakers:\n      - \"lower_time_to_effect\"\n      - \"lower_availability_impact\"\n      - \"higher_evidence_confidence\"\n      - \"lower_cost\"\n\nexample_scenarios:\n  - id: \"SCN-001\"\n    name: \"Connected vehicle GNSS spoofing with disinformation\"\n    description: \"Scenario ispirato al caso illustrativo ATHENA: vulnerabilita' software e segnali GNSS falsati su veicoli con campagna social coordinata.\"\n    diamond:\n      adversary:\n        actor_type: \"state-sponsored or proxy\"\n        strategic_goal: \"degradare fiducia, mobilita' e risposta emergenziale\"\n        sophistication: \"high\"\n        intent: \"disruption and cognitive pressure\"\n        confidence: 0.7\n      capability:\n        technique_family: [\"GNSS spoofing\", \"software exploitation\", \"coordinated disinformation\"]\n        domains_used: [\"cyber\", \"space\", \"land\"]\n        synchronization_level: \"high\"\n        observed_indicators: [\"coordinate incoerenti\", \"malfunzionamenti clusterizzati\", \"narrative social coordinate\"]\n      infrastructure:\n        systems_abused: [\"connected vehicle backend\", \"GNSS dependency\", \"social platforms\"]\n        dependency_chain: [\"navigation\", \"vehicle operations\", \"emergency response\", \"public communication\"]\n        civil_military_touchpoints: [\"trasporti\", \"protezione civile\", \"forze dell'ordine\"]\n        exposure: \"high\"\n      victim:\n        organization_type: \"civil critical infrastructure operator\"\n        mission: \"continuita' mobilita' e sicurezza pubblica\"\n        critical_assets: [\"fleet\", \"navigation services\", \"communication channels\"]\n        operational_constraints: [\"no full shutdown\", \"public safety\", \"time pressure\"]\n        risk_tolerance: \"low\"\n    x:\n      co_v: {DE_AE: 0.7, DE_CM: 0.6, RS_CO: 0.8, PR_PT: 0.6, ID_AM: 0.5}\n      ca_exp: {cyber: 0.7, land: 0.6, sea: 0.0, space: 0.9, air: 0.0}\n      l_v: {organization: 2.0, intelligence: 2.0, tool: 2.5}\n      i_pos: {cognitive: 0.9, physical: 0.5, virtual: 0.75}\n    suggested_candidates: [\"CM-001\", \"CM-002\", \"CM-004\", \"CM-005\", \"CM-008\"]\n  - id: \"SCN-002\"\n    name: \"Port OT/CPS disruption with maritime logistics impact\"\n    description: \"Compromissione OT/CPS in ambiente portuale con effetti su logistica marittima, continuita' fisica e coordinamento operativo.\"\n    x:\n      co_v: {ID_AM: 0.75, PR_PT: 0.8, DE_AE: 0.65, RS_MI: 0.7, RC_RP: 0.45}\n      ca_exp: {cyber: 0.75, land: 0.35, sea: 0.85, space: 0.15, air: 0.1}\n      l_v: {organization: 2.3, intelligence: 2.4, tool: 2.1}\n      i_pos: {cognitive: 0.35, physical: 0.85, virtual: 0.7}\n    suggested_candidates: [\"CM-001\", \"CM-002\", \"CM-003\", \"CM-008\"]\n  - id: \"SCN-003\"\n    name: \"Air command data poisoning and model drift\"\n    description: \"Manipolazione di dati e modelli decisionali a supporto di asset aerei e command-and-control.\"\n    x:\n      co_v: {PR_DS: 0.8, DE_AE: 0.75, RS_AN: 0.72, GV_RM: 0.55}\n      ca_exp: {cyber: 0.72, land: 0.15, sea: 0.1, space: 0.45, air: 0.78}\n      l_v: {organization: 2.2, intelligence: 1.8, tool: 2.6}\n      i_pos: {cognitive: 0.68, physical: 0.38, virtual: 0.82}\n    suggested_candidates: [\"CM-001\", \"CM-002\", \"CM-007\", \"CM-008\"]\n  - id: \"SCN-004\"\n    name: \"Identity compromise across joint operations\"\n    description: \"Compromissione credenziali e privilegi in operazioni congiunte e domini multipli.\"\n    x:\n      co_v: {PR_AC: 0.92, DE_CM: 0.58, RS_AN: 0.55, GV_RM: 0.45}\n      ca_exp: {cyber: 0.88, land: 0.45, sea: 0.38, space: 0.28, air: 0.42}\n      l_v: {organization: 2.4, intelligence: 2.5, tool: 2.7}\n      i_pos: {cognitive: 0.42, physical: 0.25, virtual: 0.82}\n    suggested_candidates: [\"CM-001\", \"CM-002\", \"CM-006\", \"CM-008\"]\n  - id: \"SCN-005\"\n    name: \"Supply chain compromise of multi-domain sensor software\"\n    description: \"Compromissione supply chain software con impatto su sensori e dipendenze operative multi-dominio.\"\n    x:\n      co_v: {GV_RM: 0.78, ID_AM: 0.82, PR_DS: 0.62, DE_CM: 0.66, PR_PT: 0.55}\n      ca_exp: {cyber: 0.76, land: 0.55, sea: 0.48, space: 0.52, air: 0.58}\n      l_v: {organization: 1.9, intelligence: 2.3, tool: 2.6}\n      i_pos: {cognitive: 0.48, physical: 0.52, virtual: 0.78}\n    suggested_candidates: [\"CM-001\", \"CM-002\", \"CM-003\", \"CM-008\"]\n  - id: \"SCN-006\"\n    name: \"Coordinated DISARM-style influence operation\"\n    description: \"Campagna informativa coordinata con manipolazione cognitiva e pressione su decisori, cittadini o operatori critici.\"\n    x:\n      co_v: {RS_CO: 0.9, GV_OC: 0.72, DE_CM: 0.58, RS_AN: 0.52}\n      ca_exp: {cyber: 0.55, land: 0.48, sea: 0.34, space: 0.25, air: 0.4}\n      l_v: {organization: 1.8, intelligence: 2.0, tool: 2.8}\n      i_pos: {cognitive: 0.95, physical: 0.2, virtual: 0.45}\n    suggested_candidates: [\"CM-001\", \"CM-002\", \"CM-005\"]\n  - id: \"SCN-007\"\n    name: \"Satellite communication disruption and fallback coordination\"\n    description: \"Interruzione o degrado comunicazioni satellitari con necessita' di fallback e coordinamento multi-dominio.\"\n    x:\n      co_v: {PR_PT: 0.68, DE_CM: 0.62, RS_CO: 0.82, RC_RP: 0.58}\n      ca_exp: {cyber: 0.58, land: 0.52, sea: 0.6, space: 0.88, air: 0.7}\n      l_v: {organization: 2.0, intelligence: 2.25, tool: 2.5}\n      i_pos: {cognitive: 0.62, physical: 0.55, virtual: 0.58}\n    suggested_candidates: [\"CM-001\", \"CM-002\", \"CM-004\", \"CM-005\", \"CM-008\"]\n  - id: \"SCN-008\"\n    name: \"Historical Stuxnet-style ICS sabotage at Natanz\"\n    description: \"Scenario storico ispirato a Stuxnet: worm ICS/SCADA scoperto nel 2010, mirato a sistemi Siemens Step7/PLC e associato al sabotaggio fisico di centrifughe a Natanz. Usato qui solo come caso difensivo multi-dominio.\"\n    x:\n      co_v: {ID_AM: 0.72, PR_PT: 0.92, DE_AE: 0.88, DE_CM: 0.72, RS_MI: 0.8, PR_DS: 0.55}\n      ca_exp: {cyber: 0.95, land: 0.82, sea: 0.0, space: 0.05, air: 0.05}\n      l_v: {organization: 2.1, intelligence: 2.0, tool: 1.9}\n      i_pos: {cognitive: 0.45, physical: 0.9, virtual: 0.86}\n    suggested_candidates: [\"CM-001\", \"CM-002\", \"CM-003\", \"CM-006\", \"CM-008\"]\n  - id: \"SCN-009\"\n    name: \"NATO CCDCOE NotPetya-style supply-chain wiper\"\n    description: \"Scenario storico-difensivo ispirato a NotPetya: compromissione supply chain software/update, propagazione laterale e impatto wiper su organizzazioni pubbliche, logistica, trasporti, industria e servizi critici.\"\n    diamond:\n      adversary:\n        actor_type: \"state-linked destructive cyber actor\"\n        strategic_goal: \"degradare continuita' operativa, fiducia nei servizi e capacita' logistica\"\n        sophistication: \"high\"\n        intent: \"disruption and irreversible data destruction\"\n        confidence: 0.78\n      capability:\n        technique_family: [\"software supply-chain compromise\", \"credential abuse\", \"lateral movement\", \"destructive wiper\"]\n        domains_used: [\"cyber\", \"land\", \"sea\", \"air\"]\n        synchronization_level: \"high\"\n        observed_indicators: [\"malicious software update\", \"rapid internal propagation\", \"irreversible encryption or wiper behavior\", \"service outage across business units\"]\n      infrastructure:\n        systems_abused: [\"trusted update mechanism\", \"Windows enterprise networks\", \"identity and admin tooling\", \"logistics and operations platforms\"]\n        dependency_chain: [\"vendor update\", \"enterprise endpoints\", \"identity propagation\", \"business continuity\", \"public and allied services\"]\n        civil_military_touchpoints: [\"logistica\", \"trasporti\", \"energia\", \"sanita'\", \"servizi governativi\"]\n        exposure: \"very high\"\n      victim:\n        organization_type: \"public-private critical service ecosystem\"\n        mission: \"continuita' operativa e preservazione servizi essenziali\"\n        critical_assets: [\"identity services\", \"endpoint fleet\", \"backup and recovery\", \"logistics systems\", \"operational communications\"]\n        operational_constraints: [\"no complete shutdown\", \"restore priority services first\", \"coordinate public messaging\", \"preserve forensic evidence\"]\n        risk_tolerance: \"very low\"\n    x:\n      co_v: {GV_RM: 0.72, ID_AM: 0.84, PR_AC: 0.82, PR_DS: 0.78, PR_PT: 0.86, DE_CM: 0.74, DE_AE: 0.82, RS_AN: 0.7, RS_MI: 0.88, RC_RP: 0.9}\n      ca_exp: {cyber: 0.96, land: 0.72, sea: 0.58, space: 0.12, air: 0.44}\n      l_v: {organization: 1.8, intelligence: 2.1, tool: 2.0}\n      i_pos: {cognitive: 0.68, physical: 0.62, virtual: 0.96}\n    suggested_candidates: [\"CM-001\", \"CM-002\", \"CM-003\", \"CM-006\", \"CM-008\"]\n  - id: \"SCN-010\"\n    name: \"Viasat KA-SAT satellite communications disruption\"\n    description: \"Scenario storico-difensivo basato sull'attacco Viasat KA-SAT del 23-24 febbraio 2022: compromissione di infrastruttura di gestione SATCOM, distribuzione di wiper AcidRain verso modem e interruzione di comunicazioni satellitari in Ucraina con spillover europeo.\"\n    diamond:\n      adversary:\n        actor_type: \"state-linked military cyber actor\"\n        strategic_goal: \"degradare comunicazioni satellitari e supporto C2 durante fase cinetica\"\n        sophistication: \"high\"\n        intent: \"disruption of satellite broadband terminals\"\n        confidence: 0.82\n      capability:\n        technique_family: [\"satellite ground segment compromise\", \"management network abuse\", \"firmware or modem wiper\", \"communications disruption\"]\n        domains_used: [\"cyber\", \"space\", \"land\", \"air\", \"sea\"]\n        synchronization_level: \"high\"\n        observed_indicators: [\"large-scale modem outage\", \"loss of satellite broadband connectivity\", \"AcidRain-like destructive firmware behavior\", \"spillover to European civilian services\"]\n      infrastructure:\n        systems_abused: [\"SATCOM management network\", \"KA-SAT ground infrastructure\", \"SurfBeam modem fleet\", \"remote terminal update or control path\"]\n        dependency_chain: [\"ground management access\", \"terminal configuration\", \"satellite broadband service\", \"military and civilian communications\", \"mission continuity\"]\n        civil_military_touchpoints: [\"comunicazioni militari\", \"servizi governativi\", \"energia e turbine eoliche\", \"utenze civili europee\"]\n        exposure: \"high\"\n      victim:\n        organization_type: \"satellite communications provider and dependent public-private users\"\n        mission: \"mantenere connettivita' SATCOM resiliente durante crisi\"\n        critical_assets: [\"SATCOM modems\", \"ground management systems\", \"teleport operations\", \"fallback communications\", \"incident coordination\"]\n        operational_constraints: [\"restore terminals at scale\", \"avoid disruption of unaffected gateways\", \"prioritize military and emergency users\", \"coordinate vendor and allied response\"]\n        risk_tolerance: \"very low\"\n    x:\n      co_v: {GV_OC: 0.7, GV_RM: 0.66, ID_AM: 0.82, PR_AC: 0.72, PR_PT: 0.88, DE_CM: 0.76, DE_AE: 0.84, RS_CO: 0.82, RS_MI: 0.86, RC_RP: 0.74}\n      ca_exp: {cyber: 0.9, land: 0.58, sea: 0.4, space: 0.94, air: 0.52}\n      l_v: {organization: 2.0, intelligence: 2.15, tool: 2.2}\n      i_pos: {cognitive: 0.58, physical: 0.52, virtual: 0.92}\n    suggested_candidates: [\"CM-001\", \"CM-002\", \"CM-004\", \"CM-005\", \"CM-008\"]\n\nevidence_records:\n  required_fields:\n    - \"timestamp\"\n    - \"source\"\n    - \"indicator\"\n    - \"domain\"\n    - \"confidence\"\n    - \"related_asset\"\n    - \"mapped_control\"\n    - \"effect_dimension\"\n\nframework_sources:\n  - framework: \"ESA SPACE-SHIELD\"\n    url: \"https://spaceshield.esa.int/\"\n    description: \"Knowledge base ATT&CK-like per sistemi spaziali, con matrice su Space Segment, Ground Segment e link di comunicazione.\"\n  - framework: \"MITRE ATT&CK\"\n    url: \"https://attack.mitre.org/\"\n    description: \"Knowledge base globale di tattiche, tecniche e procedure avversarie basata su osservazioni reali.\"\n  - framework: \"MITRE ATLAS\"\n    url: \"https://atlas.mitre.org/\"\n    description: \"Catalogo di tattiche e tecniche avversarie contro sistemi di intelligenza artificiale.\"\n  - framework: \"DISARM\"\n    url: \"https://www.disarm.foundation/\"\n    description: \"Framework e linguaggio comune per analizzare e rispondere a campagne di manipolazione informativa.\"\n\nframework_mappings:\n  gnss_spoofing:\n    - framework: \"ESA SPACE-SHIELD\"\n      tactic: \"Impact\"\n      technique: \"Spacecraft Jamming / Ground Segment Jamming / Transmitted Data Manipulation\"\n      trigger: \"Dipendenza GNSS o space link con coordinate incoerenti, jamming o spoofing.\"\n      domains: [\"space\", \"land\", \"air\", \"sea\", \"cyber\"]\n      response: [\"CM-001\", \"CM-002\", \"CM-004\", \"CM-008\"]\n    - framework: \"MITRE ATT&CK\"\n      tactic: \"Impact / Defense Evasion / Collection\"\n      technique: \"T1565 Data Manipulation, T1499 Endpoint DoS, T1027 Obfuscated Files or Information\"\n      trigger: \"Alterazione o degradazione di dati di navigazione, telemetry ingestion o servizi dipendenti.\"\n      domains: [\"cyber\", \"space\", \"land\"]\n      response: [\"CM-002\", \"CM-004\", \"CM-008\"]\n    - framework: \"MITRE ATLAS\"\n      tactic: \"ML model integrity\"\n      technique: \"Data poisoning, evasion of ML-based sensor fusion, model drift exploitation\"\n      trigger: \"Pipeline di sensor fusion o anomaly detection che interpreta segnali GNSS manipolati.\"\n      domains: [\"space\", \"cyber\", \"land\"]\n      response: [\"CM-002\", \"CM-004\", \"CM-007\"]\n  communication_disruption:\n    - framework: \"ESA SPACE-SHIELD\"\n      tactic: \"Command and Control / Impact\"\n      technique: \"Protocol Tunnelling, RF modification, Temporary loss to telecommand satellite\"\n      trigger: \"Degrado comunicazioni satellitari, fallback incerto o perdita temporanea di link.\"\n      domains: [\"space\", \"sea\", \"air\", \"land\"]\n      response: [\"CM-001\", \"CM-004\", \"CM-008\"]\n    - framework: \"MITRE ATT&CK\"\n      tactic: \"Command and Control / Impact\"\n      technique: \"T1105 Ingress Tool Transfer, T1498 Network Denial of Service, T1489 Service Stop\"\n      trigger: \"Interruzione o saturazione di servizi di comunicazione mission-critical.\"\n      domains: [\"cyber\", \"space\"]\n      response: [\"CM-001\", \"CM-005\", \"CM-008\"]\n  software_exploit:\n    - framework: \"MITRE ATT&CK\"\n      tactic: \"Initial Access / Execution / Defense Evasion\"\n      technique: \"T1190 Exploit Public-Facing Application, T1059 Command and Scripting Interpreter, T1027 Obfuscated Files or Information\"\n      trigger: \"Vulnerabilita' software, servizio esposto o exploit su backend operativo.\"\n      domains: [\"cyber\"]\n      response: [\"CM-002\", \"CM-003\", \"CM-006\", \"CM-008\"]\n    - framework: \"ESA SPACE-SHIELD\"\n      tactic: \"Initial Access / Execution\"\n      technique: \"Software vulnerabilities, Payload exploitation to execute commands\"\n      trigger: \"Software ground/space segment esposto o componente missione vulnerabile.\"\n      domains: [\"space\", \"cyber\"]\n      response: [\"CM-002\", \"CM-003\", \"CM-008\"]\n  identity_compromise:\n    - framework: \"MITRE ATT&CK\"\n      tactic: \"Credential Access / Initial Access / Persistence\"\n      technique: \"T1078 Valid Accounts, T1552 Unsecured Credentials, T1110 Brute Force\"\n      trigger: \"Uso improprio credenziali, MFA bypass o account privilegiato compromesso.\"\n      domains: [\"cyber\"]\n      response: [\"CM-001\", \"CM-002\", \"CM-006\"]\n    - framework: \"ESA SPACE-SHIELD\"\n      tactic: \"Credential Access\"\n      technique: \"Valid Credentials, Steal cryptographic keys, Forge Digital Certificates\"\n      trigger: \"Credenziali o chiavi usate per telecommand, ground segment o federated mission.\"\n      domains: [\"space\", \"cyber\"]\n      response: [\"CM-001\", \"CM-002\", \"CM-006\"]\n  supply_chain:\n    - framework: \"MITRE ATT&CK\"\n      tactic: \"Initial Access / Resource Development\"\n      technique: \"T1195 Supply Chain Compromise, T1588 Obtain Capabilities\"\n      trigger: \"Compromissione di dipendenze software, update channel, build system o vendor.\"\n      domains: [\"cyber\", \"land\", \"air\", \"sea\", \"space\"]\n      response: [\"CM-001\", \"CM-002\", \"CM-003\", \"CM-008\"]\n    - framework: \"ESA SPACE-SHIELD\"\n      tactic: \"Initial Access / Resource Development\"\n      technique: \"Compromise Software Supply Chain, Compromise Hardware Supply Chain, Malicious supply chain capabilities\"\n      trigger: \"Dipendenze missione o componenti space segment/ground segment non affidabili.\"\n      domains: [\"space\", \"cyber\"]\n      response: [\"CM-001\", \"CM-002\", \"CM-008\"]\n    - framework: \"MITRE ATLAS\"\n      tactic: \"ML supply chain\"\n      technique: \"Publish poisoned datasets, compromise ML artifacts, malicious model dependency\"\n      trigger: \"Dataset, modello o pipeline AI/ML importati da fonte non verificata.\"\n      domains: [\"cyber\"]\n      response: [\"CM-002\", \"CM-007\", \"CM-008\"]\n  ot_cps:\n    - framework: \"MITRE ATT&CK\"\n      tactic: \"Lateral Movement / Impact\"\n      technique: \"T0831 Manipulation of Control, T0882 Theft of Operational Information, T0814 Denial of Service\"\n      trigger: \"Degrado OT/CPS, manipolazione controllo o interruzione servizi fisici.\"\n      domains: [\"cyber\", \"land\", \"sea\", \"air\"]\n      response: [\"CM-001\", \"CM-003\", \"CM-008\"]\n  data_poisoning:\n    - framework: \"MITRE ATLAS\"\n      tactic: \"ML Attack Staging / ML Model Access / Impact\"\n      technique: \"Data poisoning, evade model, manipulate training or runtime data\"\n      trigger: \"Dati alterati in training, inference, decision support o sensor fusion.\"\n      domains: [\"cyber\", \"air\", \"space\"]\n      response: [\"CM-001\", \"CM-002\", \"CM-007\"]\n    - framework: \"MITRE ATT&CK\"\n      tactic: \"Collection / Impact\"\n      technique: \"T1565 Data Manipulation, T1005 Data from Local System\"\n      trigger: \"Alterazione di dataset, log, telemetry o feature usate per decisioni operative.\"\n      domains: [\"cyber\"]\n      response: [\"CM-002\", \"CM-007\", \"CM-008\"]\n  disinformation:\n    - framework: \"DISARM\"\n      tactic: \"Plan / Prepare / Seed / Amplify / Manipulate / Evade / Assess\"\n      technique: \"Narrative planning, persona/infrastructure preparation, content seeding, coordinated amplification, perception manipulation\"\n      trigger: \"Operazione informativa coordinata o influenza cognitiva collegata allo scenario.\"\n      domains: [\"cyber\", \"land\", \"cognitive\"]\n      response: [\"CM-001\", \"CM-002\", \"CM-005\"]\n    - framework: \"MITRE ATT&CK\"\n      tactic: \"Reconnaissance / Resource Development / Impact\"\n      technique: \"T1598 Phishing for Information, T1585 Establish Accounts, T1565 Data Manipulation\"\n      trigger: \"Campagna informativa coordinata, narrativa manipolata o falsa evidenza pubblica.\"\n      domains: [\"cyber\", \"land\", \"cognitive\"]\n      response: [\"CM-001\", \"CM-002\", \"CM-005\"]\n    - framework: \"MITRE ATLAS\"\n      tactic: \"LLM / AI-enabled influence\"\n      technique: \"Prompt injection, generated deceptive content, model output manipulation\"\n      trigger: \"Uso di AI generativa per amplificare contenuti o manipolare percezione.\"\n      domains: [\"cyber\", \"cognitive\"]\n      response: [\"CM-002\", \"CM-005\"]\n\nnato_cases:\n  - id: \"notpetya\"\n    title: \"NotPetya-style supply-chain wiper sviluppato in ATHENA\"\n    description: \"Scenario storico-difensivo basato sul caso NotPetya: compromissione di un meccanismo di update software fidato, propagazione laterale e impatto distruttivo su servizi pubblici, logistica e continuita' operativa.\"\n    source_label: \"Fonte NATO/CCDCOE citata\"\n    source_url: \"https://www.wired.com/story/notpetya-petya-russia-cause/\"\n    scenario_id: \"SCN-009\"\n    timeline:\n      - time: \"pre-attack\"\n        event: \"Vendor/update path prepared or compromised.\"\n      - time: \"execution\"\n        event: \"Destructive payload deployed through trusted software path.\"\n      - time: \"propagation\"\n        event: \"Internal movement via credentials and administrative trust.\"\n      - time: \"impact\"\n        event: \"Widespread operational disruption and recovery pressure.\"\n    case_scenarios:\n      - id: \"NP-01\"\n        name: \"Trusted software update compromise\"\n        summary: \"Compromissione del canale di aggiornamento di un software usato da organizzazioni ucraine e internazionali.\"\n        athena_focus: \"Governance supply chain, asset dependency mapping, CTI correlation.\"\n        dominant_domains: [\"cyber\", \"land\"]\n        evidence: [\"trusted update channel\", \"vendor dependency\", \"rapid campaign onset\"]\n        responses: [\"CM-001\", \"CM-002\", \"CM-008\"]\n      - id: \"NP-02\"\n        name: \"Enterprise propagation and credential abuse\"\n        summary: \"Propagazione interna tramite relazioni di fiducia, credenziali e strumenti amministrativi.\"\n        athena_focus: \"Identity hardening, segmentation, monitoring, containment.\"\n        dominant_domains: [\"cyber\"]\n        evidence: [\"credential abuse\", \"lateral movement\", \"administrative tooling\"]\n        responses: [\"CM-002\", \"CM-003\", \"CM-006\"]\n      - id: \"NP-03\"\n        name: \"Destructive wiper disguised as ransomware\"\n        summary: \"Perdita di disponibilita' e integrita' dei sistemi con impatti operativi oltre il perimetro iniziale.\"\n        athena_focus: \"Virtual impact mitigation and prioritized recovery.\"\n        dominant_domains: [\"cyber\", \"land\", \"sea\", \"air\"]\n        evidence: [\"irreversible outage\", \"business interruption\", \"logistics disruption\"]\n        responses: [\"CM-001\", \"CM-003\", \"CM-008\"]\n      - id: \"NP-04\"\n        name: \"Global spillover and continuity pressure\"\n        summary: \"Effetti a cascata su organizzazioni multinazionali, supply chain, logistica e servizi pubblici.\"\n        athena_focus: \"Cross-domain incident cell and public/private coordination.\"\n        dominant_domains: [\"cyber\", \"land\", \"sea\"]\n        evidence: [\"multi-country impact\", \"service degradation\", \"public communication needs\"]\n        responses: [\"CM-001\", \"CM-005\", \"CM-008\"]\n    flow:\n      - phase: \"Supply chain\"\n        label: \"Trusted update channel\"\n        evidence: \"Compromissione del meccanismo di update software e distribuzione di codice malevolo tramite canale fidato.\"\n        axis: \"P: govern/prevent | L: organization\"\n        response: \"CM-001, CM-002\"\n      - phase: \"Initial access\"\n        label: \"Endpoint infection\"\n        evidence: \"Esecuzione su host enterprise e avvio della propagazione interna con elevata fiducia apparente.\"\n        axis: \"P: detect | D: cyber\"\n        response: \"CM-002, CM-006\"\n      - phase: \"Lateral movement\"\n        label: \"Credential and admin tooling abuse\"\n        evidence: \"Uso di credenziali e strumenti amministrativi per muoversi rapidamente nella rete.\"\n        axis: \"P: respond/prevent | L: tool\"\n        response: \"CM-003, CM-006\"\n      - phase: \"Impact\"\n        label: \"Wiper / destructive outage\"\n        evidence: \"Interruzione dei servizi, perdita operativa e necessita' di ripristino prioritizzato.\"\n        axis: \"E: virtual/physical/cognitive\"\n        response: \"CM-001, CM-008\"\n    framework_rows:\n      - phase: \"Supply chain\"\n        technique: \"T1195 Supply Chain Compromise / trusted update abuse\"\n        athena_axis: \"P govern-prevent, L organization\"\n        countermeasure: \"CM-001, CM-002\"\n      - phase: \"Credential Access\"\n        technique: \"Credential material and administrative trust abused during propagation\"\n        athena_axis: \"P detect-respond, D cyber\"\n        countermeasure: \"CM-002, CM-006\"\n      - phase: \"Lateral Movement\"\n        technique: \"Administrative tooling and internal trust relationships\"\n        athena_axis: \"P respond-prevent, L tool\"\n        countermeasure: \"CM-003, CM-006\"\n      - phase: \"Impact\"\n        technique: \"Destructive wiper behavior and service outage\"\n        athena_axis: \"E virtual-physical-cognitive\"\n        countermeasure: \"CM-001, CM-008\"\n      - phase: \"Recovery\"\n        technique: \"Prioritized business continuity and public/private coordination\"\n        athena_axis: \"P respond-recover, L organization\"\n        countermeasure: \"CM-001, CM-005, CM-008\"\n  - id: \"viasat\"\n    title: \"Viasat KA-SAT satellite communications disruption sviluppato in ATHENA\"\n    description: \"Scenario storico-difensivo basato sull'attacco Viasat KA-SAT del 23-24 febbraio 2022: compromissione di infrastruttura di gestione SATCOM, wiper AcidRain sui modem e interruzione di comunicazioni satellitari con spillover europeo.\"\n    source_label: \"Fonte CCDCOE Cyber Law Toolkit\"\n    source_url: \"https://cyberlaw.ccdcoe.org/wiki/Viasat_KA-SAT_attack_(2022)\"\n    scenario_id: \"SCN-010\"\n    timeline:\n      - time: \"2022-02-24 03:02 UTC\"\n        event: \"High volumes of focused malicious traffic detected from SurfBeam2/SurfBeam2+ modems in Ukraine.\"\n      - time: \"2022-02-24 ~04:15 UTC\"\n        event: \"Large numbers of modems across Europe exited the network over roughly 45 minutes.\"\n      - time: \"investigation\"\n        event: \"Ground-based intrusion via VPN appliance misconfiguration into trusted management segment.\"\n      - time: \"restoration\"\n        event: \"Network stabilized, affected modems reset or replaced, nearly 30,000 replacement modems shipped.\"\n    case_scenarios:\n      - id: \"VS-01\"\n        name: \"Focused malicious traffic from modems\"\n        summary: \"Alle 03:02 UTC Viasat rileva traffico malevolo da modem SurfBeam2/SurfBeam2+ in Ucraina, con difficolta' per i modem legittimi a restare online.\"\n        athena_focus: \"Detect su anomalie SATCOM, correlazione CTI e triage con operatore di ground segment.\"\n        dominant_domains: [\"cyber\", \"space\", \"land\"]\n        evidence: [\"03:02 UTC\", \"malicious modem traffic\", \"consumer-oriented partition\"]\n        responses: [\"CM-001\", \"CM-002\", \"CM-004\"]\n      - id: \"VS-02\"\n        name: \"Management network intrusion via VPN misconfiguration\"\n        summary: \"L'analisi Viasat indica un'intrusione ground-based tramite misconfiguration in un'appliance VPN, con accesso remoto al trusted management segment.\"\n        athena_focus: \"Governance accessi, hardening identity, monitoraggio del segmento di gestione.\"\n        dominant_domains: [\"cyber\", \"space\"]\n        evidence: [\"VPN appliance misconfiguration\", \"trusted management segment\", \"remote access\"]\n        responses: [\"CM-001\", \"CM-002\", \"CM-006\"]\n      - id: \"VS-03\"\n        name: \"Targeted management commands to modem fleet\"\n        summary: \"L'attore usa accesso di gestione per eseguire comandi legittimi e mirati su molti modem residenziali contemporaneamente.\"\n        athena_focus: \"Containment, fallback SATCOM, verifica comandi di gestione e change control.\"\n        dominant_domains: [\"cyber\", \"space\", \"land\"]\n        evidence: [\"simultaneous management commands\", \"residential modems\", \"service partition\"]\n        responses: [\"CM-002\", \"CM-004\", \"CM-008\"]\n      - id: \"VS-04\"\n        name: \"Flash memory overwrite and modem drop-off\"\n        summary: \"I comandi distruttivi sovrascrivono dati chiave nella memoria flash dei modem, rendendoli incapaci di accedere alla rete.\"\n        athena_focus: \"Impact virtual/physical, service restoration, replacement/factory reset.\"\n        dominant_domains: [\"space\", \"cyber\", \"land\"]\n        evidence: [\"flash overwrite\", \"modems unable to access network\", \"04:15 UTC wider drop-off\"]\n        responses: [\"CM-004\", \"CM-008\"]\n      - id: \"VS-05\"\n        name: \"European spillover and recovery logistics\"\n        summary: \"Impatto su migliaia di clienti in Ucraina e decine di migliaia in Europa; ripristino tramite stabilizzazione rete, reset o sostituzione modem.\"\n        athena_focus: \"Coordination, trusted communications, continuity prioritization.\"\n        dominant_domains: [\"space\", \"land\", \"cyber\", \"cognitive\"]\n        evidence: [\"tens of thousands of modems\", \"Ukraine and Europe\", \"nearly 30,000 replacement modems\"]\n        responses: [\"CM-001\", \"CM-005\", \"CM-008\"]\n      - id: \"VS-06\"\n        name: \"Scope limits and unaffected services\"\n        summary: \"Viasat dichiara che l'incidente non ha colpito direttamente il satellite KA-SAT, altri network Viasat, utenti mobility/government direttamente gestiti o dati end-user.\"\n        athena_focus: \"Bounded impact assessment and confidence scoring.\"\n        dominant_domains: [\"space\", \"cyber\"]\n        evidence: [\"single consumer partition\", \"no end-user data compromise\", \"satellite not directly compromised\"]\n        responses: [\"CM-001\", \"CM-002\"]\n    flow:\n      - phase: \"Ground access\"\n        label: \"SATCOM management path\"\n        evidence: \"Accesso o abuso del segmento di gestione terrestre collegato a terminali KA-SAT e modem SurfBeam.\"\n        axis: \"P: govern/detect | D: cyber-space\"\n        response: \"CM-001, CM-002\"\n      - phase: \"Terminal control\"\n        label: \"Modem fleet targeting\"\n        evidence: \"Distribuzione o attivazione di logica distruttiva verso modem satellitari su larga scala.\"\n        axis: \"P: detect/respond | L: tool\"\n        response: \"CM-002, CM-004\"\n      - phase: \"Impact\"\n        label: \"AcidRain-like wiper\"\n        evidence: \"Modem resi inutilizzabili, perdita di connettivita' satellitare e necessita' di replacement/recovery.\"\n        axis: \"E: virtual/physical | D: space-land\"\n        response: \"CM-004, CM-008\"\n      - phase: \"Spillover\"\n        label: \"European service disruption\"\n        evidence: \"Impatto su utenze civili e servizi dipendenti, inclusi sistemi energetici e comunicazioni operative.\"\n        axis: \"P: respond/recover | E: cognitive\"\n        response: \"CM-001, CM-005, CM-008\"\n    framework_rows:\n      - phase: \"Initial Access\"\n        technique: \"VPN appliance misconfiguration exploited to access trusted management segment\"\n        athena_axis: \"P govern-detect, D cyber-space\"\n        countermeasure: \"CM-001, CM-002, CM-006\"\n      - phase: \"Command/Control\"\n        technique: \"Use of trusted management access to issue modem management commands\"\n        athena_axis: \"P detect-respond, L tool\"\n        countermeasure: \"CM-002, CM-004\"\n      - phase: \"Impact\"\n        technique: \"Flash memory overwrite on modem fleet and loss of network access\"\n        athena_axis: \"E virtual-physical, D space-land\"\n        countermeasure: \"CM-004, CM-008\"\n      - phase: \"Scope control\"\n        technique: \"Single consumer-oriented partition affected; satellite and directly managed government/mobility users not directly impacted\"\n        athena_axis: \"L intelligence, E virtual\"\n        countermeasure: \"CM-001, CM-002\"\n      - phase: \"Recovery\"\n        technique: \"Network stabilization, distributor coordination, factory reset/replacement modem logistics\"\n        athena_axis: \"P respond-recover, L organization\"\n        countermeasure: \"CM-001, CM-005, CM-008\"\n\nkb_architecture:\n  paper_alignment:\n    source_document: \"OUP_Cybersecurity_MDO_SLR (8).pdf\"\n    framework_name: \"ATHENA: countermeAsures for THreat IntElligence in Multi-DomaiN operAtions framework\"\n    research_gap: \"CTI and CRM workflows, organizational structures, intelligence processes, and tools remain siloed and are not natively integrated in MDO contexts.\"\n    core_contribution: \"A multi-domain framework intersecting CTI and CRM through a fourth-order tensor model to conceptualize, develop, and deploy cyber countermeasures in MDOs.\"\n    key_messages:\n      - \"Cyber Threat Intelligence in Multi-Domain Environment\"\n      - \"Cyber Risk Management in Multi-Domain Operations\"\n      - \"Cyber attack countermeasures to mitigate emerging multi-domain attack scenarios\"\n  entity_layers:\n    - id: \"L0\"\n      name: \"Source and evidence layer\"\n      purpose: \"Traccia fonti, osservazioni, livello di confidenza e limiti interpretativi.\"\n      entities: [\"source\", \"evidence_record\", \"confidence\", \"assumption\", \"limitation\"]\n    - id: \"L1\"\n      name: \"Threat model layer\"\n      purpose: \"Modella lo scenario tramite Diamond Model: adversary, capability, infrastructure, victim.\"\n      entities: [\"adversary\", \"capability\", \"infrastructure\", \"victim\"]\n    - id: \"L2\"\n      name: \"ATHENA tensor layer\"\n      purpose: \"Rappresenta la relazione P x D x L x E -> CC e il vettore scenario x.\"\n      entities: [\"P_process\", \"D_domain\", \"L_level\", \"E_effect\", \"countermeasure_class\"]\n    - id: \"L3\"\n      name: \"Scenario and case layer\"\n      purpose: \"Conserva scenari sperimentali, case study NATO/CCDCOE e sotto-scenari.\"\n      entities: [\"example_scenario\", \"nato_case\", \"case_scenario\", \"timeline_event\"]\n    - id: \"L4\"\n      name: \"Decision and response layer\"\n      purpose: \"Calcola ranking, vincoli, motivazione human-in-the-loop e piano di risposta.\"\n      entities: [\"score\", \"constraint\", \"ranking\", \"approval\", \"response_playbook\"]\n  athena_tensor_model:\n    relation: \"ATHENA: P x D x L x E -> CC\"\n    tensor_space: \"T = V_P x V_D x V_L x V_E\"\n    threat_input: \"x = (co_v, ca_exp, l_v, i_pos)\"\n    countermeasure_output: \"CM = (co_app, ca_def, l_target, i_target)\"\n    interpretation:\n      P: \"security process/control function, including govern, detect, respond, prevent\"\n      D: \"defensive capability across cyber, land, sea, space, air\"\n      L: \"cybersecurity level across organization, intelligence, tool\"\n      E: \"effect dimension across cognitive, physical, virtual\"\n      CC: \"cyber-oriented countermeasure class or concrete countermeasure\"\n  scenario_schema_v2:\n    required_blocks:\n      - \"metadata\"\n      - \"diamond\"\n      - \"x\"\n      - \"assumptions\"\n      - \"evidence_refs\"\n      - \"framework_refs\"\n      - \"candidate_countermeasures\"\n      - \"expected_outputs\"\n    x_components:\n      co_v: \"Compromised controls, normalized 0..1\"\n      ca_exp: \"Observed or inferred offensive capability exposure by domain, normalized 0..1\"\n      l_v: \"Current/degraded security level across organization/intelligence/tool, scale 0..5\"\n      i_pos: \"Negative impact on cognitive/physical/virtual dimensions, normalized 0..1\"\n    scenario_types:\n      - \"illustrative_athena\"\n      - \"historical_case\"\n      - \"nato_ccdcoe_case\"\n      - \"vulnerability_intake\"\n      - \"simulation_variant\"\n      - \"what_if_experiment\"\n  evidence_quality_model:\n    confidence_scale:\n      \"0.2\": \"single-source or weakly inferred\"\n      \"0.5\": \"plausible but partially corroborated\"\n      \"0.7\": \"multi-source or primary-source supported\"\n      \"0.9\": \"high-confidence primary-source and operationally consistent\"\n    source_types: [\"academic_paper\", \"official_report\", \"incident_writeup\", \"framework_matrix\", \"analyst_assumption\"]\n    quality_checks:\n      - \"source attribution present\"\n      - \"defensive-only interpretation\"\n      - \"domain impact explicitly mapped\"\n      - \"uncertainty stated\"\n      - \"countermeasure rationale linked to evidence\"\n  experiment_lifecycle:\n    - step: \"01_ingest\"\n      description: \"Importa paper, fonte caso, CTI e vincoli operativi.\"\n      output: \"source and evidence records\"\n    - step: \"02_model\"\n      description: \"Costruisce Diamond Model e vettore ATHENA x.\"\n      output: \"scenario vector and assumptions\"\n    - step: \"03_map\"\n      description: \"Mappa scenario su framework esterni e assi P-D-L-E.\"\n      output: \"framework mapping and ATHENA tensor coordinates\"\n    - step: \"04_score\"\n      description: \"Calcola rischio residuo e ranking delle contromisure.\"\n      output: \"ranked candidate countermeasures\"\n    - step: \"05_validate\"\n      description: \"Richiede validazione human-in-the-loop e registra override.\"\n      output: \"approved response decision\"\n    - step: \"06_learn\"\n      description: \"Aggiorna KB con lezioni apprese, evidenze e variazioni di peso.\"\n      output: \"updated KB and experiment record\"\n  decision_trace_schema:\n    fields:\n      - \"scenario_id\"\n      - \"selected_countermeasure\"\n      - \"score\"\n      - \"impact_gap\"\n      - \"control_residual\"\n      - \"level_gap\"\n      - \"constraints_applied\"\n      - \"evidence_summary\"\n      - \"human_decision\"\n      - \"override_reason\"\n\nnato_mdo_unified_framework:\n  id: \"nato_mdo_unified_framework\"\n  name: \"A Unified Framework for NATO Multi-Domain Operations\"\n  author: \"Joao Reis, Joint Warfare Centre\"\n  source_document: \"v1_covered_c93cdab3-f584-48df-a5c5-2786a57adc93 (1).pdf\"\n  posted_date: \"2026-07-21\"\n  doi: \"https://doi.org/10.21203/rs.3.rs-10386609/v1\"\n  method: \"Systematic Literature Review and Critical Appraisal Skills Program\"\n  purpose: \"Clarifies NATO MDO mechanisms by integrating operational domains with military and non-military instruments of power.\"\n  operational_domains: [\"land\", \"maritime\", \"air\", \"space\", \"cyberspace\"]\n  dime_instruments:\n    diplomatic: \"Political alignment, alliance signalling, de-escalation and partner coordination.\"\n    information: \"Narrative shaping, information superiority, public communication and cognitive effects.\"\n    military: \"Cross-domain force employment across land, maritime, air, space and cyberspace.\"\n    economic: \"Sanctions, industrial resilience, supply chain pressure and recovery prioritization.\"\n  mdo_mechanisms:\n    - id: \"MDO-M1\"\n      name: \"Cross-domain integration\"\n      description: \"Deliberate combination of capabilities, effects and activities across domains so they act as a mutually reinforcing system.\"\n      athena_mapping:\n        D: [\"cyber\", \"land\", \"sea\", \"space\", \"air\"]\n        P: [\"govern\", \"prevent\", \"respond\"]\n    - id: \"MDO-M2\"\n      name: \"Synchronization and convergence of effects\"\n      description: \"Alignment of actions across time, space and purpose to generate compound operational effects.\"\n      athena_mapping:\n        P: [\"detect\", \"respond\"]\n        E: [\"physical\", \"virtual\", \"cognitive\"]\n    - id: \"MDO-M3\"\n      name: \"Coordination of military and non-military instruments of power\"\n      description: \"Integration of DIME instruments with military activities in contested and hybrid contexts.\"\n      athena_mapping:\n        L: [\"organization\", \"intelligence\"]\n        E: [\"cognitive\", \"physical\", \"virtual\"]\n    - id: \"MDO-M4\"\n      name: \"Information and decision superiority\"\n      description: \"Fusion of data, intelligence and decision support to shorten decision cycles and improve situational awareness.\"\n      athena_mapping:\n        L: [\"intelligence\", \"tool\"]\n        P: [\"detect\", \"govern\"]\n    - id: \"MDO-M5\"\n      name: \"Agility and adaptability\"\n      description: \"Ability to redirect capabilities, resources and response posture as the operational environment changes.\"\n      athena_mapping:\n        P: [\"respond\", \"prevent\"]\n        L: [\"organization\", \"tool\"]\n    - id: \"MDO-M6\"\n      name: \"Orchestration\"\n      description: \"Strategic and operational guidance that aligns domains, actors, resources and effects with intent.\"\n      athena_mapping:\n        P: [\"govern\", \"respond\"]\n        L: [\"organization\", \"intelligence\"]\n  operationalization_conditions:\n    - \"shared situational awareness across domains and stakeholders\"\n    - \"resilient and modular command-and-control structures\"\n    - \"integrated civil-military planning processes\"\n    - \"persistent military and non-military collaboration\"\n    - \"political cohesion and authority alignment for DIME actions\"\n    - \"secure and resilient communications\"\n    - \"decision-support tools for timing, sequencing and prioritization\"\n    - \"training and doctrine for cross-domain initiative\"\n    - \"feedback loops for continuous adaptation\"\n  kb_usage:\n    scenario_fields_added:\n      - \"mdo_context\"\n      - \"dime_instruments\"\n      - \"mdo_mechanisms\"\n      - \"synchronization_window\"\n      - \"orchestration_intent\"\n      - \"civil_military_dependencies\"\n    definition_rule: \"Every scenario can be described not only by ATHENA x=(co_v, ca_exp, l_v, i_pos), but also by NATO MDO context: domains, DIME instruments, mechanisms, synchronization and orchestration conditions.\"\n";
