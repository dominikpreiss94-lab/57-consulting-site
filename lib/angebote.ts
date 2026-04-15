export type Angebot = {
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  participants: string;
  format: string;
  description: string;
  targetGroup: string[];
  agenda: string[];
  deliverables: string[];
  nextStep: string;
};

export const angebote: Angebot[] = [
  {
    slug: "realitaetscheck",
    title: "KI-Realitätscheck + Use-Case-Workshop",
    subtitle: "Von diffusem KI-Interesse zur belastbaren Entscheidungsgrundlage",
    price: "1.500 – 3.000 EUR",
    duration: "Halber bis ganzer Tag",
    participants: "3–8 Personen",
    format: "Vor Ort oder Remote",
    description:
      "Ein halber bis ganzer Tag, an dem wir gemeinsam Klarheit schaffen: Was kann KI für Ihr Unternehmen konkret leisten? Wo liegen die echten Hebel – und womit fangen Sie sinnvoll an? Das Ergebnis ist eine belastbare Entscheidungsgrundlage, kein Foliensatz.",
    targetGroup: [
      "Geschäftsführung und Management-Teams",
      "IT-Leitung und Digitalisierungsverantwortliche",
      "Unternehmen, die KI evaluieren aber nicht wissen, wo sie anfangen sollen",
      "Teams mit ersten KI-Erfahrungen, die Struktur brauchen"
    ],
    agenda: [
      "Infrastruktur-Mapping: Welche Systeme, welche Daten, welche Schnittstellen",
      "Datenqualitäts-Assessment der relevanten Prozesse",
      "Gemeinsame Identifikation von 5–10 potenziellen Use Cases",
      "Priorisierung und Aufwandsschätzung der Top 3–5 Use Cases",
      "EU AI Act: Compliance-Einordnung Ihrer aktuellen KI-Nutzung",
      "Klare Empfehlung für nächste Schritte und abgegrenzte Pilotprojekte"
    ],
    deliverables: [
      "Dokumentierte Infrastruktur- und Datenlandschaft",
      "Priorisierte Use-Case-Liste mit Aufwandsschätzung",
      "Empfehlung für Pilotprojekte mit konkretem Scope",
      "Compliance-Einordnung nach EU AI Act"
    ],
    nextStep: "Der Realitätscheck ist der natürliche Einstieg. Danach wissen Sie, ob ein Pilotprojekt sinnvoll ist – und wie es aussehen würde."
  },
  {
    slug: "impulsvortrag",
    title: "Impulsvortrag",
    subtitle: "KI-Einordnung für Management-Teams und Entscheider",
    price: "ab 500 EUR",
    duration: "45–90 Minuten",
    participants: "Ab 10 Personen",
    format: "Vor Ort oder Remote",
    description:
      "Praxisnahe Einordnung der LLM-Landschaft für Entscheider. Was können Foundation Models heute wirklich? Wo liegen die Grenzen? Welche Datenarchitektur braucht es – und was bedeutet der EU AI Act für Ihr Unternehmen? Substanz statt Buzzwords.",
    targetGroup: [
      "Management-Teams und Führungskräfte",
      "Netzwerkveranstaltungen und Unternehmerkreise",
      "Branchentreffen und Verbände",
      "Interne Kick-offs für KI-Initiativen"
    ],
    agenda: [
      "Standortbestimmung: Was LLMs heute können – und was nicht",
      "Datenarchitektur-Anforderungen für belastbare KI-Anwendungen",
      "Reale Anwendungsfälle aus dem Mittelstand",
      "EU AI Act: Was jetzt gilt und was das operativ bedeutet",
      "Q&A und offene Diskussion"
    ],
    deliverables: [
      "Einordnung der KI-Landschaft für Ihr Team",
      "Überblick über relevante Anwendungsfälle",
      "Grundlage für interne Diskussion und nächste Schritte"
    ],
    nextStep: "Nach dem Vortrag wissen Ihre Entscheider, was möglich ist. Der logische nächste Schritt ist ein Realitätscheck, um konkrete Use Cases für Ihr Unternehmen zu identifizieren."
  },
  {
    slug: "workshop",
    title: "Strategie-Workshop",
    subtitle: "Vom Status Quo zur KI-Roadmap",
    price: "1.500 – 3.000 EUR",
    duration: "Halber oder ganzer Tag",
    participants: "5–12 Personen",
    format: "Vor Ort oder Remote",
    description:
      "Arbeitsorientierter Workshop, in dem Ihr Team nicht über KI redet, sondern konkrete Architekturentscheidungen trifft. Vom Ist-Zustand Ihrer Datenschichten über die Priorisierung von Prozessen bis zur belastbaren Roadmap.",
    targetGroup: [
      "IT-Leitung und technische Führungskräfte",
      "Projektteams für Digitalisierung oder KI-Initiativen",
      "Unternehmen mit ersten KI-Erfahrungen, die skalieren wollen",
      "Teams, die Build-vs-Buy-Entscheidungen treffen müssen"
    ],
    agenda: [
      "Ist-Analyse: Aktuelle Datenschichten, Systeme, Integrationen",
      "Prozess-Mapping: Wo steckt das größte Automatisierungspotenzial?",
      "Architekturentscheidungen: Build vs. Buy, Cloud vs. On-Prem, API vs. MCP",
      "Roadmap-Entwicklung: Phasen, Meilensteine, Ressourcen",
      "Quick-Wins identifizieren und erste Piloten definieren"
    ],
    deliverables: [
      "Dokumentierte KI-Roadmap mit Phasen und Meilensteinen",
      "Architekturentscheidungen mit Begründung",
      "Definierte Quick-Wins und Pilotprojekte",
      "Ressourcen- und Budgetplanung"
    ],
    nextStep: "Die Roadmap ist die Grundlage für gezielte Pilotprojekte. Wir können direkt mit dem ersten Piloten starten."
  },
  {
    slug: "pilot",
    title: "Pilotprojekt",
    subtitle: "Eine Herausforderung, ein messbares Ergebnis",
    price: "Auf Anfrage",
    duration: "2–4 Wochen",
    participants: "Projektteam (2–5 Personen)",
    format: "Hybrid: Remote-Arbeit + Vor-Ort-Termine",
    description:
      "Eine abgegrenzte Herausforderung wird mit KI gelöst – produktionsreif, dokumentiert, mit messbarem ROI. Wir bauen die Lösung, nicht das Konzept. API-Integrationen, Daten-Pipelines, Prozessautomatisierung – was auch immer der Use Case erfordert.",
    targetGroup: [
      "Unternehmen mit identifizierten Use Cases (z.B. aus dem Realitätscheck)",
      "Teams, die einen konkreten Beweis brauchen, dass KI funktioniert",
      "IT-Abteilungen, die Prototypen für Management-Entscheidungen brauchen",
      "Fachabteilungen mit wiederkehrenden High-Frequency-Prozessen"
    ],
    agenda: [
      "Woche 1: Scope-Definition, Datenanbindung, Architektur",
      "Woche 2: Implementierung der Kernlogik, erste Integration",
      "Woche 3: Testing, Iteration, Feinschliff",
      "Woche 4: Dokumentation, Übergabe, Schulung"
    ],
    deliverables: [
      "Funktionsfähiger Prototyp / MVP in Produktionsqualität",
      "API-Integrationen und Daten-Pipelines",
      "Technische Dokumentation",
      "Messbarer ROI und Vergleich zum manuellen Prozess",
      "Empfehlung für Skalierung"
    ],
    nextStep: "Nach einem erfolgreichen Piloten entscheiden Sie, ob und wie Sie skalieren. Wir begleiten auf Wunsch mit Management-Sparring."
  },
  {
    slug: "sparring",
    title: "Management-Sparring",
    subtitle: "Fundierte zweite Meinung für Entscheider",
    price: "300 – 500 EUR / Session",
    duration: "60–90 Minuten",
    participants: "1–3 Personen",
    format: "Remote (Video)",
    description:
      "Für Entscheider, die eine fundierte zweite Meinung brauchen – keinen Verkäufer. Technologie-Bewertung, Vendor-Auswahl, Build-vs-Buy-Entscheidungen, Team-Aufbau, Governance-Fragen. Vertraulich und auf den Punkt.",
    targetGroup: [
      "Geschäftsführung und C-Level",
      "IT-Leitung vor strategischen Entscheidungen",
      "Innovationsmanager und Digitalverantwortliche",
      "Führungskräfte, die KI-Initiativen steuern"
    ],
    agenda: [
      "Ihre konkrete Fragestellung als Ausgangspunkt",
      "Einordnung und Bewertung der Optionen",
      "Erfahrungswerte aus vergleichbaren Situationen",
      "Klare Empfehlung mit Begründung"
    ],
    deliverables: [
      "Dokumentierte Einschätzung und Empfehlung",
      "Entscheidungsgrundlage für Ihr konkretes Thema",
      "Optional: Follow-up-Session nach Umsetzung"
    ],
    nextStep: "Sparring-Sessions können einzeln oder regelmäßig gebucht werden. Viele Kunden nutzen das Format begleitend zu laufenden KI-Initiativen."
  }
];
