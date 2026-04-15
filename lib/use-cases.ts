export type FlowNode = {
  label: string;
  detail: string;
};

export type UseCase = {
  id: string;
  title: string;
  subtitle: string;
  metric: { value: string; label: string };
  flow: {
    problem: FlowNode;
    data: FlowNode;
    ai: FlowNode;
    result: FlowNode;
  };
  systems: string[];
  roi: string;
};

export const useCases: UseCase[] = [
  {
    id: "dokumentenautomatisierung",
    title: "Dokumentenautomatisierung",
    subtitle: "Von 30 Minuten auf 90 Sekunden",
    metric: { value: "30 Min → 90 Sek", label: "Bearbeitungszeit" },
    flow: {
      problem: {
        label: "Ausgangslage",
        detail:
          "Dokumente werden manuell aus verschiedenen Quellen zusammengestellt. 30 Minuten pro Vorgang, fehleranfällig, nicht skalierbar."
      },
      data: {
        label: "Datenschicht",
        detail:
          "Strukturierte Daten aus ERP, CRM und Fachsystemen werden über APIs in eine zentrale Integrationsschicht zusammengeführt."
      },
      ai: {
        label: "KI-Anwendung",
        detail:
          "Template-Engine mit LLM-gestützter Textgenerierung. Kontextabhängige Inhalte werden automatisch aus der Datenschicht befüllt."
      },
      result: {
        label: "Ergebnis",
        detail:
          "Vollautomatischer Output in 90 Sekunden. Konsistente Qualität, keine manuellen Zwischenschritte, sofort versandfertig."
      }
    },
    systems: ["ERP", "CRM", "Template-Engine", "LLM-API"],
    roi: "95% Zeitersparnis pro Dokument, Fehlerquote nahe Null"
  },
  {
    id: "management-dashboards",
    title: "Management-Dashboards",
    subtitle: "Echtzeit statt monatliche Reports",
    metric: { value: "Echtzeit", label: "Datenverfügbarkeit" },
    flow: {
      problem: {
        label: "Ausgangslage",
        detail:
          "Management-Reports werden manuell aus Excel-Exporten erstellt. Daten sind veraltet, Aufbereitung dauert Tage, keine Ad-hoc-Abfragen möglich."
      },
      data: {
        label: "Datenschicht",
        detail:
          "Quellsysteme (CRM, ERP, Projektmanagement) werden über eine kontrollierte Datenschicht konsolidiert. Einheitliches Datenmodell, automatische Synchronisation."
      },
      ai: {
        label: "KI-Anwendung",
        detail:
          "Dynamische Abfragen über natürliche Sprache. LLM übersetzt Management-Fragen in Datenbankabfragen und liefert kontextualisierte Antworten."
      },
      result: {
        label: "Ergebnis",
        detail:
          "Live-Dashboard mit Echtzeit-Daten. Ad-hoc-Fragen in Sekunden beantwortet. Entscheidungen auf aktueller Datenbasis statt auf Bauchgefühl."
      }
    },
    systems: ["CRM", "ERP", "Projektmanagement", "BI-Dashboard"],
    roi: "Reporting-Aufwand um 80% reduziert, Entscheidungsgeschwindigkeit vervielfacht"
  },
  {
    id: "ausschreibungsanalyse",
    title: "Ausschreibungsanalyse",
    subtitle: "85% schneller zur Go/No-Go-Entscheidung",
    metric: { value: "85%", label: "schneller" },
    flow: {
      problem: {
        label: "Ausgangslage",
        detail:
          "Ausschreibungsunterlagen umfassen hunderte Seiten. Die Voranalyse dauert Tage, bindet Fachkräfte und verzögert die Entscheidung."
      },
      data: {
        label: "Datenschicht",
        detail:
          "Dokumente werden automatisch extrahiert, strukturiert und mit historischen Ausschreibungsdaten und internen Kapazitätsdaten verknüpft."
      },
      ai: {
        label: "KI-Anwendung",
        detail:
          "LLM-gestützte Dokumentenanalyse extrahiert Anforderungen, Fristen und Bewertungskriterien. Automatischer Abgleich mit eigenem Leistungsprofil."
      },
      result: {
        label: "Ergebnis",
        detail:
          "Strukturierte Entscheidungsvorlage für Go/No-Go in Stunden statt Tagen. Risikobewertung, Aufwandsschätzung und Empfehlung auf einer Seite."
      }
    },
    systems: ["DMS", "Dokumentenanalyse", "LLM-API", "Kapazitätsplanung"],
    roi: "85% schnellere Voranalyse, höhere Trefferquote bei Angeboten"
  },
  {
    id: "api-mcp-integration",
    title: "API & MCP-Integration",
    subtitle: "Systeme verbinden statt Daten kopieren",
    metric: { value: "Live-Daten", label: "Systemintegration" },
    flow: {
      problem: {
        label: "Ausgangslage",
        detail:
          "Daten liegen in Silos: CRM kennt keine ERP-Daten, Fachsysteme sind nicht verbunden. Export-Import-Zyklen über CSV und manuelle Abgleiche."
      },
      data: {
        label: "Datenschicht",
        detail:
          "MCP-Server und API-Gateways verbinden Systeme in Echtzeit. Kontrollierte Zugriffsschicht mit einheitlicher Authentifizierung und Berechtigungen."
      },
      ai: {
        label: "KI-Anwendung",
        detail:
          "KI-Agenten greifen über MCP-Protokoll kontextgesteuert auf mehrere Systeme gleichzeitig zu. Dynamische Datenzusammenführung für Entscheidungsprozesse."
      },
      result: {
        label: "Ergebnis",
        detail:
          "Ein Abfragepunkt für alle Systeme. Keine CSV-Exporte, keine Dateninkonsistenzen, Entscheidungen auf vollständiger Datenbasis."
      }
    },
    systems: ["MCP-Server", "API-Gateway", "CRM", "ERP", "Fachsysteme"],
    roi: "Manuelle Datenabgleiche eliminiert, Datenqualität signifikant erhöht"
  },
  {
    id: "prozessautomatisierung",
    title: "Prozessautomatisierung",
    subtitle: "High-Frequency-Prozesse End-to-End",
    metric: { value: "End-to-End", label: "Automatisierung" },
    flow: {
      problem: {
        label: "Ausgangslage",
        detail:
          "Wiederkehrende Prozesse binden qualifizierte Mitarbeitende: Datenextraktion, Prüfung, Aufbereitung, Weiterleitung – manuell, fehleranfällig, nicht skalierbar."
      },
      data: {
        label: "Datenschicht",
        detail:
          "Prozessdaten werden aus Eingangskanälen (E-Mail, Formulare, Systeme) automatisch extrahiert, normalisiert und in die Verarbeitungspipeline eingespeist."
      },
      ai: {
        label: "KI-Anwendung",
        detail:
          "Regelbasierte Automatisierung kombiniert mit LLM für Sonderfälle: Klassifizierung, Priorisierung, Plausibilitätsprüfung – mit Human-in-the-Loop bei Grenzfällen."
      },
      result: {
        label: "Ergebnis",
        detail:
          "Durchlaufzeit um 70-90% reduziert. Mitarbeitende fokussieren auf Ausnahmen und Entscheidungen statt auf Routinearbeit."
      }
    },
    systems: ["Workflow-Engine", "E-Mail", "Formulare", "LLM-API", "Fachsysteme"],
    roi: "70-90% weniger Durchlaufzeit, Kapazitäten für wertschöpfende Arbeit frei"
  }
];
