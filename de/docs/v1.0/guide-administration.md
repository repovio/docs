---
title: Administration und Einstellungen
description: Provider, Benutzer, Mitgliedschaften und Systemvorgaben verwalten.
---

> Historischer Quellstand. Produktbezeichnungen verwenden den aktuellen Namen. Für diesen Release die
> Konfigurationsnamen und Image-Referenzen seiner versionierten Bereitstellungsdateien unverändert verwenden.

Systemadministratoren erstellen, aktivieren, deaktivieren und löschen lesende Provider-Verbindungen. GitHub, GitLab,
Forgejo oder Gitea wählen, einen erkennbaren Namen vergeben und verfügbares OAuth oder PAT verwenden. Selbst gehostete
Provider benötigen die richtige Basisadresse; Gitea stets eine explizite Adresse.

PATs werden vor Speicherung geprüft; OAuth führt über die Provider-Zustimmung zurück zu Repovio. Zugangsdaten werden
verschlüsselt und erscheinen nicht erneut. Deaktivierung pausiert die Verbindung. Löschung kann abhängige lokale Daten
entfernen und muss bewusst erfolgen. Webhooks werden pro Repository konfiguriert.

## Benutzer und Rechte

Benutzerübersicht zeigt Konten, Rollen und Zeitstempel. Repository-Zugriff wird separat in dessen Mitgliedschaften
vergeben. Eine globale Manager-Rolle allein genügt nicht für jedes Repository. Benutzerlöschung widerruft lokalen
Zugriff und Tokens, ändert aber keine Provider-Konten oder Provider-Rechte.

Eigene Einstellungen umfassen Profil, Bild, Kennwort, Sprache, Darstellung und MCP-Tokens. Systemadministratoren legen
zusätzlich globale Aufbewahrungsdauer und Datumsformat fest; Repository-Werte überschreiben die globale Dauer.
MCP-Tokens werden nur einmal gezeigt. Administratoren können sichere Token-Metadaten ansehen und Tokens widerrufen.
Bei Ladefehlern API-Zustand und Synchronisationsaufträge prüfen; Backups und Rollback gehören zum Betriebsleitfaden.
