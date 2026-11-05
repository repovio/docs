---
title: Synchronisationsaufträge
description: Dauerhafte Leseaufträge beobachten, starten und wiederholen.
---

> Historischer Quellstand. Produktbezeichnungen verwenden den aktuellen Namen. Für diesen Release die
> Konfigurationsnamen und Image-Referenzen seiner versionierten Bereitstellungsdateien unverändert verwenden.

Aufträge zeigen die Arbeit aktivierter sichtbarer Repositories. Zusammenfassung und Tabelle enthalten Repository,
Provider, Bereiche, Phase, Fortschritt, Versuch und sichere Fehlermeldung.

- Idle: weder eingeplant noch aktiv.
- Pending: wartet auf Zeitpunkt oder verfügbaren Worker.
- Running: aktive Phase, gegebenenfalls messbarer Fortschritt.
- Failed: sicherer letzter Fehler bis zur nächsten Anforderung.
- Warning: andere Bereiche abgeschlossen, einzelne Sicherheitsmeldungsarten nicht verfügbar.

Wartezeiten können durch Zusammenfassung von Webhooks, Retry-Backoff oder Provider-Ratenlimits entstehen. Browser-
Aktualisierung zieht den Ausführungszeitpunkt nicht vor.

Systemadministratoren starten alle inaktiven/fehlgeschlagenen Aufträge oder einzelne Zeilen. Bereits wartende oder
laufende Aufträge werden nicht nochmals eingereiht. Die auslösende Schaltfläche bleibt bis zum Anfrageende im Ladezustand.
Danach den Übergang über Pending und Running verfolgen.

Manuelle Aufträge verwenden dieselbe dauerhafte Lese-Warteschlange wie Polling und geprüfte Webhooks. Erfolgreiche
Aufträge kehren zu Idle zurück und bilden keine vollständige Ausführungshistorie. Wiederholte Fehler erfordern Prüfung
von Provider-Konto, Rechten, Basisadresse und Ratenlimit.
