---
title: 'Repovio-Benutzerhandbuch'
description:
  'Beginnen Sie mit der Verwendung von Repovio, um Repositorys, Workflow-Status und erforderliche Genehmigungsaktionen
  anzuzeigen.'
---

Repovio ist ein schreibgeschütztes Workflow-Status-Dashboard. Damit können autorisierte Benutzer die
Repository-Aktivität überprüfen, ohne etwas unter GitHub, GitLab, Forgejo oder Gitea erstellen, erneut ausführen,
genehmigen oder löschen zu müssen.

<a id="before-you-begin"></a>

## Bevor Sie beginnen

Sie benötigen die URL einer Repovio-Installation und ein lokales oder konfiguriertes OIDC-Konto. Der erste Administrator
führt die einmalige Einrichtung durch. Zusätzliche lokale Benutzer werden über die geschützte API bereitgestellt, oder
Benutzer melden sich über das konfigurierte OIDC an. Der Zugriff auf Anbieterdaten hängt von Ihrer Rolle und Ihren
Repository-Mitgliedschaften ab. Durch die Anmeldung wird nicht automatisch jedes konfigurierte Repository verfügbar
gemacht.

Repovio verwendet drei Anwendungsrollen:

- **Viewer** kann explizit zugewiesene Repositorys, Workflows, Issues und Pull-Requests überprüfen.
- **Manager** hat Lesezugriff und kann Sicherheitswarnungen für Repositorys überprüfen, bei denen die Mitgliedschaft
  ebenfalls **Manager** ist. Benachrichtigungskanäle, Abonnements, Tests und Verlauf werden global von
  Systemadministratoren verwaltet.
- **Systemadministrator** kann auf jedes Repository zugreifen und Anbieterkonten, Repositorys, Mitgliedschaften,
  Benutzer, MCP-Tokens und Anwendungsstandards verwalten.

Anwendungsrollen gewähren niemals Schreibzugriff auf GitHub, GitLab, Forgejo oder Gitea. Wenn eine Aktion den
Anbieterstatus ändert, öffnet Repovio die Anbieterschnittstelle, anstatt die Aktion auszuführen.

<a id="recommended-first-session"></a>

## Empfohlene erste Sitzung

1. [anmelden](/docs/next/sign-in), lernen Sie [Navigation](/docs/next/navigation) und probieren Sie
   [suchen](/docs/next/search) aus.
2. Überprüfen Sie [Dashboard](/docs/next/guide-dashboard), [Alle Läufe](/docs/next/workflow-runs),
   [Handlungsbedarf](/docs/next/needs-attention) und [Ausstehende Freigaben](/docs/next/awaiting-approval).
3. Überprüfen Sie [Issues](/docs/next/guide-issues) und [Pull Requests](/docs/next/guide-pull-requests).
4. Öffnen Sie [Repositories](/docs/next/repositories), um die angezeigten Daten zu verstehen.
5. Administratoren konfigurieren [Benachrichtigungskanäle](/docs/next/notifications) und
   [Ereignisabonnements](/docs/next/notification-rules).

Systemadministratoren sollten dann mit [Verwaltung und Einstellungen](/docs/next/provider-accounts) fortfahren.
Bereitstellung, Anbieterregistrierung, Webhook-Einrichtung, Sicherung und Wiederherstellung sind auf den entsprechenden
Handbuchseiten verlinkt.

<a id="when-a-page-is-empty-or-unavailable"></a>

## Wenn eine Seite leer oder nicht verfügbar ist

Eine leere Seite kann bedeuten, dass keine passenden Anbieterdaten synchronisiert wurden, dass Filter alle Ergebnisse
ausschließen oder dass Ihr Konto keine Mitgliedschaft im Repository hat. Löschen Sie die aktiven Filter und überprüfen
Sie zunächst die Repository-Auswahl. Eine Ladefehlermeldung bedeutet, dass die angeforderten Daten nicht abgerufen
werden konnten; Versuchen Sie die Seitenaktion erneut und bitten Sie den Installationsadministrator, die API und
Synchronisierungsjobs zu überprüfen, wenn der Fehler weiterhin besteht.
