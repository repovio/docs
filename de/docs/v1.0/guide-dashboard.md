---
title: Workflow-Dashboard
description: Zusammenfassung, Trends und aktuelle Fehler auswerten.
---

> Historischer Quellstand. Produktbezeichnungen verwenden den aktuellen Namen. Für diesen Release die
> Konfigurationsnamen und Image-Referenzen seiner versionierten Bereitstellungsdateien unverändert verwenden.

Das Dashboard kombiniert ausschließlich sichtbare Repositories. Karten zeigen aktive Läufe, aktuell fehlerhafte
Workflows, ausstehende Freigaben, Laufzeiten, Issues und Pull Requests. Unterschiedliche Benutzer können deshalb
unterschiedliche korrekte Werte sehen.

Sieben, 30 oder 90 Tage ändern historische Übersichten, Trends, Statusverteilung und Repository-Zustand. Aktuelle
Warteschlangen und Work-Item-Zähler bleiben Gegenwartsansichten. Aktualisieren lädt alle Bereiche erneut.

## Fehler untersuchen

Mit den aktuell fehlerhaften Workflows beginnen und zur Warteschlange für Handlungsbedarf wechseln. Neueste Läufe und
Provider-Links führen zu Logs und Originaldetails. Trends helfen, einzelne Ausfälle von wiederkehrenden Problemen zu
unterscheiden. Issues und Pull Requests liefern den Kontext aktiver Änderungen.

Ausstehende Freigaben sind keine Fehler. Repovio öffnet die Provider-Seite, führt aber keine Freigabe durch.
Bei einem Teilfehler bleiben verfügbare Bereiche sichtbar; ein Hinweis kennzeichnet die unvollständige Abfrage.
Leere Diagramme bedeuten fehlende gespeicherte Läufe im Zeitraum und beweisen keine Provider-Erreichbarkeit.
