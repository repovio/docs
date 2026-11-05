---
title: Authentifizierung
description: Lokale Konten, OpenID Connect und Wiederherstellung konfigurieren.
---

> Historischer Quellstand. Produktbezeichnungen verwenden den aktuellen Namen. Für diesen Release die
> Konfigurationsnamen und Image-Referenzen seiner versionierten Bereitstellungsdateien unverändert verwenden.

## Ersteinrichtung und lokale Anmeldung

Bis zum ersten Konto führt Repovio zur Route `/auth/setup`. Benutzername, optionaler Vor-/Nachname und ein Kennwort mit
mindestens zwölf Zeichen erzeugen die erste Systemadministration. Spätere Aufrufe führen zur Anmeldung. Ein Upgrade
setzt bestehende Benutzer nicht zurück.

Unter Einstellungen lässt sich das lokale Kennwort mit dem bisherigen Kennwort ändern. Die aktuelle Sitzung erhält
einen neuen Token; andere Sitzungen werden ungültig. Eine E-Mail-basierte Kennwortzurücksetzung ist nicht vorgesehen.
Ein Betreiber kann ein lokales Konto über Standardeingabe zurücksetzen:

```bash
read -rsp 'Neues Repovio-Kennwort: ' REPOVIO_NEW_PASSWORD
printf '\n'
printf '%s\n' "$REPOVIO_NEW_PASSWORD" | docker compose exec -T api node dist/scripts/reset-password.js USERNAME
unset REPOVIO_NEW_PASSWORD
```

Das neue Kennwort muss zwölf bis 256 Zeichen enthalten. Der Befehl widerruft alle Sitzungen und lehnt OIDC-Konten ab.
Kennwörter nicht als Befehlsargument oder in der Shell-Historie speichern.

## OpenID Connect

Ein optionaler OIDC-Provider wird unter Einstellungen → Authentifizierung konfiguriert. OIDC identifiziert Benutzer;
Provider-OAuth gewährt davon unabhängig Lesezugriff auf GitHub, GitLab oder Forgejo.

`PUBLIC_URL` und `OIDC_CALLBACK_URL` auf die externen HTTPS-Adressen setzen. Den exakten Callback
`/api/v1/auth/oidc/callback` beim Identitätsanbieter registrieren. Issuer, Client-ID, optionales Secret, Scopes und
Gruppen-Claim eintragen; Verbindung vor Aktivierung prüfen. Das Client-Secret ist schreibgeschützt und verschlüsselt.
HTTP-Issuer sind ausschließlich für isolierte Labornetze vorgesehen. Lokale Anmeldung bleibt als Wiederherstellungsweg.

Gruppenwerte sind exakt und beachten Groß-/Kleinschreibung. Bei mehreren Treffern gilt `SYSTEM_ADMIN`, dann `MANAGER`,
dann `VIEWER`. Fehlende, ungültige oder übergroße Claims werden abgewiesen, sofern unbekannte Benutzer nicht ausdrücklich
als Viewer zugelassen sind. Claim-Pfade wie `realm_access.groups` werden unterstützt.

Konten werden ausschließlich über verifizierten Issuer und Subject zugeordnet, niemals über E-Mail oder Benutzername.
Namen werden bei Anmeldung aktualisiert; OIDC-Kontodaten lassen sich lokal nicht ändern. Repository-Mitgliedschaften
werden unabhängig von OIDC-Gruppen in Repovio verwaltet. Sicherheitsrelevante Rollen-/Konfigurationsänderungen machen
Sitzungen ungültig.

Verwende Authorization Code Flow mit S256 PKCE, `openid`, `profile`, `email` und asymmetrisch signierten ID-Tokens.
Der Callback übergibt keinen Bearer-Token in der URL, sondern einen einmaligen, 60 Sekunden gültigen Austauschcode.
Die öffentlichen Status-/Start-/Callback-/Exchange-Routen liefern keine Konfigurationsgeheimnisse; Konfiguration und
Verbindungsprüfung erfordern Systemadministration.
