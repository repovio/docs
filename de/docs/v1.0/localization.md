---
title: Sprache und Darstellung
description: Oberflächensprache und Übersetzungen verwalten.
---

> Historischer Quellstand. Produktbezeichnungen verwenden den aktuellen Namen. Für diesen Release die
> Konfigurationsnamen und Image-Referenzen seiner versionierten Bereitstellungsdateien unverändert verwenden.

Die Anwendung unterstützt Englisch (`en`), Deutsch (`de`), Spanisch (`es`), Französisch (`fr`), Italienisch (`it`),
Niederländisch (`nl`), Polnisch (`pl`) und Portugiesisch (`pt`). Das Sprachmenü ist für alle angemeldeten Benutzer
verfügbar. Die Auswahl wird im Sprach-Cookie des jeweiligen Releases gespeichert; Englisch ist Standard und Fallback.

Datums-, Zeit- und Zahlenformate folgen der gewählten Sprache. Provider-, Repository- und Workflow-Namen bleiben
unveränderte Provider-Daten. Website und Handbuch werden zunächst in Englisch und Deutsch gepflegt.

## Übersetzungen beitragen

Die englische Locale-Datei ist die Schlüsselreferenz. Alle ausgelieferten Sprachen müssen denselben vollständigen
Schlüsselsatz besitzen. Neue sichtbare Texte mindestens in Englisch und Deutsch sowie allen übrigen unterstützten
Sprachen ergänzen; neue Locales in der Nuxt-Konfiguration registrieren.

Tests, Typprüfung und betroffene Browserfälle ausführen. Interpolation, längere deutsche Texte, Sprachwechsel und
Fallback-Verhalten prüfen. Ein englischer Fallback ist kein Beleg für eine vollständige Übersetzung.
