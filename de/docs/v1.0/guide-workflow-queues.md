---
title: Workflow-Warteschlangen
description: Historie, aktuelle Fehler und ausstehende Freigaben unterscheiden.
---

> Historischer Quellstand. Produktbezeichnungen verwenden den aktuellen Namen. Für diesen Release die
> Konfigurationsnamen und Image-Referenzen seiner versionierten Bereitstellungsdateien unverändert verwenden.

## Alle Läufe

Die Historie zeigt gespeicherte, sichtbare Workflow-Läufe. Nach Workflow oder Repository suchen und nach Repository,
Provider, normalisiertem Zustand oder Laufzeit filtern. Sortierung und Spaltenauswahl ändern keine Provider-Daten.
Start, Ende und Dauer können fehlen, wenn der Provider sie nicht liefert.

Zustände sind queued, running, success, failed, cancelled, skipped oder unknown. Der Provider-Link bleibt die
Originalquelle. Bei leeren Ergebnissen zuerst Filter und Aufbewahrung prüfen.

## Handlungsbedarf

Diese Warteschlange enthält Workflow-Kontexte, deren neuester abgeschlossener Lauf fehlgeschlagen ist. Ein späterer
Erfolg sowie Schließen oder Mergen einer zugehörigen Änderung entfernt den Kontext. Synchronisation ordnet auch ältere
Branch-Läufe der zum Startzeitpunkt aktiven Änderung zu. Repovio kann keine Läufe wiederholen, abbrechen oder bearbeiten.

## Ausstehende Freigaben

Freigabepflichtige Läufe erscheinen getrennt. Provider-Link oder Pull-/Merge-Request-Link für Kontext öffnen. Die
Freigabe selbst erfolgt beim Provider. Der Eintrag verschwindet erst, wenn Webhook oder Polling den neuen Zustand liest.
Eine leere Warteschlange bedeutet weder Freigabe noch Berechtigung zur Freigabe.
