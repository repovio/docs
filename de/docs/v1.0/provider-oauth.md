---
title: Provider-OAuth
description: Lesende Provider-Konten mit OAuth oder persönlichen Tokens verbinden.
---

> Historischer Quellstand. Produktbezeichnungen verwenden den aktuellen Namen. Für diesen Release die
> Konfigurationsnamen und Image-Referenzen seiner versionierten Bereitstellungsdateien unverändert verwenden.

Repovio unterstützt OAuth oder persönliche Zugriffstokens (PAT). Ohne konfigurierte OAuth-Clients zeigt die Oberfläche
nur PAT-Anmeldung. Zugangsdaten werden vor Speicherung verschlüsselt und nicht an den Browser zurückgegeben.

Je Provider-Instanz eine OAuth-Anwendung registrieren. Deren Callback muss exakt `OAUTH_CALLBACK_URL` entsprechen;
lokal standardmäßig `http://localhost:3001/api/v1/provider-accounts/oauth/callback`.

Client-ID und Secret ausschließlich in der API-Umgebung als zusammengehöriges Paar setzen: `GITHUB_OAUTH_CLIENT_ID` und
`GITHUB_OAUTH_CLIENT_SECRET`, entsprechend `GITLAB_*` und `FORGEJO_*`. GitLab verwendet `GITLAB_OAUTH_BASE_URL`, Forgejo
benötigt `FORGEJO_OAUTH_BASE_URL`. Nur tatsächlich benötigte Provider konfigurieren.

## Leseberechtigungen

- GitHub-OAuth: `repo security_events`. Bestehende Verbindungen für Sicherheitsmeldungen erneut autorisieren.
- GitLab: `read_api read_user`; Sicherheitsfunktionen zusätzlich abhängig von Lizenz und Projektrolle.
- Forgejo: `read:repository`.
- Gitea: PAT mit Lesezugriff und expliziter Instanzadresse; kein geteilter OAuth-Client für beliebige Instanzen.

Feingranulare GitHub-PATs benötigen passende Leserechte auf Dependabot-, Code-Scanning- und Secret-Scanning-Meldungen.
Nicht verfügbare Meldungstypen blockieren die übrige Synchronisation nicht.

Provider-Adapter bieten Validierung, Repository-Auswahl, Synchronisation und Webhook-Prüfung. Sie erstellen, ändern,
starten, wiederholen, stoppen oder löschen keine Provider-Ressourcen.
