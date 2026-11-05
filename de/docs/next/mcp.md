---
title: MCP-Zugriff
description: Berechtigungsabhängigen Lesezugriff für kompatible MCP-Clients einrichten.
---

Repovio bietet einen zustandslosen MCP-v2-Endpunkt unter `/mcp`. Er liest die lokale Datenbank und gewährt dieselben
Repository-Berechtigungen wie die Anwendung. Er startet keine Synchronisation und ändert weder Repovio- noch
Provider-Konfiguration.

Unter Einstellungen → MCP-Zugriff einen benannten Token mit optionalem Ablaufdatum erstellen. Den vollständigen Wert
sofort in einen Secret-Manager übernehmen: Er wird nur einmal angezeigt; gespeichert wird ausschließlich sein SHA-256-Hash.
Widerruf wirkt bei der nächsten Anfrage. Benutzerlöschung entfernt zugehörige Tokens. Rollen und Mitgliedschaften
werden bei jeder Anfrage aktuell aus der Datenbank bestimmt.

```text
URL: https://repovio.example.com/mcp
Authorization: Bearer repovio_mcp_REPLACE_WITH_TOKEN
```

Der Client muss eigene HTTP-Header unterstützen. Eine MCP-OAuth-Discovery wird nicht angeboten. Tokens niemals in URLs,
Query-Parameter, versionierte Dateien, Shell-Historie oder Logs schreiben.

## Werkzeuge

`list_repositories`, `get_repository`, `list_workflow_runs`, `list_needs_attention`, `list_awaiting_approval`,
`get_dashboard_summary` und `get_workflow_trend` liefern erlaubte Daten. Listen verwenden standardmäßig 25 und höchstens
100 Ergebnisse pro Seite. Antworten enthalten strukturiertes JSON und eine Textdarstellung; Datumswerte sind ISO-8601
in UTC. Ressourcen, Prompts, Tasks, Abonnements und Schreibwerkzeuge werden nicht angeboten.

## Proxy und Administration

`POST /mcp` unverändert an die API leiten. `Authorization`, `Origin`, `Content-Type`, `Accept`, `MCP-Protocol-Version`,
`Mcp-Method` und `Mcp-Name` weiterreichen. HTTPS verwenden; Autorisierungsheader nicht protokollieren. Browser-Ursprünge
müssen in `CORS_ORIGIN` erlaubt sein; native Clients ohne Origin bleiben möglich.
Benutzer verwalten eigene Tokens. Administratoren können sichere Metadaten prüfen und Tokens widerrufen, aber weder
Geheimnisse abrufen noch Tokens im Namen anderer Benutzer erzeugen.
