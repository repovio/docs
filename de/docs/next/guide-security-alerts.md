---
title: Sicherheitsmeldungen
description: Abhängigkeits-, Code- und Secret-Scanning-Metadaten prüfen.
---

Manager und Systemadministratoren sehen Meldungen verwalteter Repositories. Viewer haben keinen Zugriff. Listen,
Zähler, Filter, Details und Dashboard-Metriken verwenden dieselben Repository-Berechtigungen.

Repovio speichert nur erlaubte Metadaten: Schweregrad, Zustand, Scanner, Paket, Regel, sichere Dateiposition und
Provider-URL. Geheimniswerte, rohe Provider-Antworten und Tokenfragmente werden nicht gespeichert. Behebung,
Verwerfen oder Schließen erfolgen ausschließlich beim Provider.

GitHub unterstützt Dependabot, Code Scanning und Secret Scanning. GitLab bildet Dependency Scanning, SAST und Secret
Detection ab; Verfügbarkeit hängt von Lizenz und Rolle ab. Forgejo und Gitea unterstützen diese Meldungsarten derzeit
nicht. Ein nicht verfügbarer Typ erzeugt einen Hinweis, ohne die übrigen Synchronisationsbereiche zu blockieren.

Der erste erfolgreiche Import pro Repository und Meldungsart erstellt eine stille Ausgangsbasis. Spätere Änderungen
können passende Benachrichtigungen auslösen. Bestehende GitHub-OAuth-Konten für `security_events` erneut autorisieren.
