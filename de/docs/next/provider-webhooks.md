---
title: Repository-Webhooks
description: Signierte Provider-Ereignisse für gezielte Synchronisation einrichten.
---

Webhooks werden beim Provider manuell eingerichtet. Repovio erstellt oder ändert keine Provider-Webhooks. Öffne als
Systemadministration die Details eines erfassten Repositorys, konfiguriere dessen Secret und kopiere die angezeigte
Callback-Adresse. Webhook-Konfiguration gehört zum Repository, nicht zum Provider-Konto.

Verwende die vom Dialog angezeigte URL unverändert und HTTPS. Trage dasselbe Secret beim Provider ein; es wird in
Repovio verschlüsselt gespeichert und nicht erneut angezeigt. Abonnierte Ereignisse müssen zu Workflows, Issues und
Pull beziehungsweise Merge Requests passen. Die Callback-Adresse verwendet `/api/webhooks/<provider>/<repository-id>` mit der Repovio-Repository-UUID.

## Provider konfigurieren

- GitHub: JSON-Inhalt, Ereignis `workflow_run`, Secret und aktive SSL-Prüfung. Repovio prüft
  `X-Hub-Signature-256` über den Rohtext und verwendet `X-GitHub-Delivery` zur Deduplizierung.
- GitLab: Pipeline-Ereignisse und Signing Token konfigurieren. Den vollständigen `whsec_`-Wert speichern.
  Standard-Webhooks-HMAC-SHA256 und `webhook-id` sind bevorzugt; ältere Instanzen können `X-Gitlab-Token` und
  `X-Gitlab-Event-UUID` verwenden.
- Forgejo: nativer JSON-Webhook, Push- und verfügbare Actions-Ereignisse, Secret und TLS-Prüfung. Signatur und
  Zustell-ID stehen in `X-Forgejo-Signature` und `X-Forgejo-Delivery`; kompatible Gitea-Header bleiben unterstützt.
- Gitea: nativer JSON-Webhook mit Push-/Workflow-Ereignissen. `X-Gitea-Signature` und `X-Gitea-Delivery` werden geprüft.

Ungültige Zustellungen erhalten `401`; `202` mit `duplicate: true` kennzeichnet erwartete Wiederholungen.
`SCHEDULER_SYNC_INTERVAL_SECONDS=1800` setzt den 30-Minuten-Abgleich. `SCHEDULER_ENABLED=false` erhält eingeplante
Anforderungen, pausiert aber deren Verarbeitung und den Fallback.

## Verarbeitung

Die API prüft Provider, Repository-Zuordnung, Signatur und unterstützten Ereignistyp. Unbekannte oder ungültige
Ereignisse dürfen keine Daten anderer Repositories synchronisieren. Akzeptierte Ereignisse stellen einen dauerhaften,
Repository-bezogenen Leseauftrag ein; mehrere Ereignisse werden kurz zusammengefasst. Der Empfang bestätigt daher
keinen bereits abgeschlossenen Datenimport.

Jobs und sichere Fehlermeldungen im Bereich Aufträge prüfen. Ein Provider-Testereignis ist kein vollständiger Beleg für
alle Ereignistypen. Polling dient weiterhin als Abgleich bei verpassten Ereignissen. Bei Fehlern URL, Secret,
Repository-Zuordnung und Proxy-Weiterleitung prüfen; Secret-Werte und rohe Provider-Payloads nicht veröffentlichen.
