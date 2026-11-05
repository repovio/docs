---
title: Überblick
description: Ein Dashboard für Workflows, Repository-Arbeit und Sicherheitsmeldungen.
---

Repovio bündelt GitHub Actions, GitLab-Pipelines, Forgejo Actions und Gitea Actions. Es liest ausgewählte Repositories,
Workflow-Läufe, Issues und Pull beziehungsweise Merge Requests. Provider-Ressourcen bleiben unverändert: Freigaben,
Kommentare, Wiederholungen und Änderungen erfolgen beim Provider.

## Funktionen

- Dashboard mit aktuellen Fehlern, Freigabe-Warteschlangen, Laufzeiten, Trends und Repository-Zustand.
- Filterbare Workflow-Historie sowie Issues, Pull Requests und verfügbare Sicherheitsmeldungen.
- Dauerhafte Synchronisationsaufträge durch Polling, manuelle Anforderung und signaturgeprüfte Webhooks.
- Benachrichtigungen und rollenabhängige Repository-Mitgliedschaften.
- Lokale Anmeldung, optional OpenID Connect und persönlicher MCP-Lesezugriff.

API, Webanwendung und PostgreSQL werden selbst gehostet. Provider-Tokens, Webhook-Secrets und Benachrichtigungsziele
werden verschlüsselt gespeichert. Zugriffskontrollen begrenzen bereits Datenbankabfragen; ausgeblendete Felder allein
stellen keine Autorisierung dar.

Beginne mit der Installationsanleitung. Die Website dokumentiert Englisch und Deutsch; die Anwendung bietet weitere
Oberflächensprachen. Wähle die Dokumentationsversion passend zur installierten Anwendung.
