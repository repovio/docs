---
title: Issues und Pull Requests
description: Synchronisierte Aufgaben und Änderungen lesend prüfen.
---

> Historischer Quellstand. Produktbezeichnungen verwenden den aktuellen Namen. Für diesen Release die
> Konfigurationsnamen und Image-Referenzen seiner versionierten Bereitstellungsdateien unverändert verwenden.

Repovio synchronisiert Issues und Pull beziehungsweise Merge Requests aktivierter Repositories. Mitgliedschaften
begrenzen Listen, Details, Filter und Zähler. Kommentare, Zuweisungen, Labels, Schließen, Freigeben und Mergen erfolgen
über den Provider-Link.

Issues lassen sich nach Titel/Nummer, Provider, Repository, Zustand, Autor, Zuweisung, Meilenstein und Labels filtern.
Mehrere ausgewählte Labels müssen alle vorhanden sein. Details zeigen sichere Metadaten und bereinigtes Markdown.
Der Erstimport umfasst offene Issues und in den letzten 90 Tagen aktualisierte geschlossene Issues. Kommentare,
Reaktionen, Anhänge und Code-Diffs werden nicht synchronisiert.

Pull Requests zeigen zusätzlich Entwürfe, Quell-/Zielbranch und aggregierten Workflow-Zustand. GitLab verwendet den
Begriff Merge Request. Workflow-Freigabebedarf ist keine Code-Review- oder Merge-Freigabe und kein Hinweis auf Konflikte.
Je Workflow zählt der neueste Lauf; Fehler haben Vorrang vor laufend, wartend, abgebrochen, erfolgreich und unbekannt.

Webhooks werden 15 Sekunden zusammengefasst; ein 30-Minuten-Abgleich erfasst verpasste Ereignisse. Paginierte,
idempotente Abfragen beachten Ratenlimits und unabhängige Cursor mit Überlappung. Eingebettetes HTML ist deaktiviert,
unsicheres Markdown wird bereinigt. Fehlende Einträge anhand Mitgliedschaften, Aktivierung, Filtern und Jobs prüfen.
