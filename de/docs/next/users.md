---
title: 'Benutzer'
description:
  'Überprüfen Sie lokale und identitätsverwaltete Benutzer, Rollen, Löschvorgänge und die Verwaltung von MCP-Token.'
---

<a id="review-accounts"></a>

## Konten überprüfen

Systemadministratoren öffnen **Administration → Benutzer**. Die Tabelle zeigt Benutzername, Avatar/Anzeigename, Rolle,
lokale/OIDC-Herkunft und erstellte/aktualisierte Zeitstempel. Nach Rolle filtern, sortieren, Spalten ändern oder
paginieren. Der Repository-Zugriff für einen Viewer oder Manager erfordert einen separaten
[Repository-Mitgliedschaft](/docs/next/repositories); Identitätsanbietergruppen erstellen diese Mitgliedschaften nicht.

<a id="provisioning-and-deletion"></a>

## Bereitstellung und Löschung

Auf der Seite „Benutzer“ gibt es kein Formular zum Erstellen oder Bearbeiten von Benutzern. Zusätzliche lokale Benutzer
werden über die nur für Administratoren geschützte Benutzer-API unter Verwendung von Benutzername, Kennwort und Rolle
erstellt. OIDC-Benutzer werden über eine konfigurierte Identitätsanmeldung bereitgestellt. Informationen zur Zuordnung
und Kontentrennung finden Sie unter [Authentifizierung](/docs/next/authentication). Schließen Sie keine
Benutzerbearbeitungsaktion aus dem Vorhandensein eines bearbeitbaren Profils auf Ihrer eigenen Einstellungsseite ab.

Die Löschaktion ist für andere Benutzer verfügbar und wird sofort ausgeführt; Überprüfen Sie das Konto, bevor Sie es
auswählen. Sie können Ihr eigenes Konto nicht über diese API oder diesen Bildschirm löschen. Durch das Löschen eines
Repovio-Benutzers wird der lokale Zugriff entfernt. Es werden keine Anbieterkonten unter GitHub, GitLab, Forgejo oder
Gitea gelöscht. Überprüfen Sie vor dem Löschen den Zugriff des betroffenen Benutzers.

<a id="user-mcp-tokens"></a>

## Benutzer MCP-Token

Öffnen Sie das MCP-Token-Dialogfeld eines Benutzers, um Token-Metadaten aufzulisten oder ein Token mit Bestätigung zu
widerrufen. Administratoren können über dieses Dialogfeld keine Klartext-Tokenwerte abrufen oder das Token eines anderen
Benutzers erstellen. Benutzer erstellen ihre eigenen Token in [MCP-Einstellungen](/docs/next/mcp). Leere Listen und
Ladefehler sind unterschiedlich; Versuchen Sie es nach der API-Wiederherstellung erneut. Kopieren Sie niemals Tokenwerte
in Supportberichte oder Screenshots.
