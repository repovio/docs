---
title: Installation
description: Repovio bereitstellen und die erste Administration anlegen.
---

> Historischer Quellstand. Produktbezeichnungen verwenden den aktuellen Namen. Für diesen Release die
> Konfigurationsnamen und Image-Referenzen seiner versionierten Bereitstellungsdateien unverändert verwenden.

## Voraussetzungen

Benötigt werden Docker mit Compose v2, Zugriff auf die privaten Anwendungsquellen und Images sowie ein Reverse Proxy
für HTTPS. Für Entwicklung gelten die Node-/pnpm-Versionen aus den Manifesten des gewählten Quellstands.

## Erste Bereitstellung

1. Einen freigegebenen Anwendungsstand auschecken. `.env.example` nach `.env` kopieren und mit `chmod 600 .env` schützen.
2. Alle Platzhalter ersetzen: PostgreSQL-Zugangsdaten, Datenbank-URLs, `AUTH_JWT_SECRET` und `TOKEN_ENCRYPTION_KEY`.
   Den Verschlüsselungsschlüssel mit `openssl rand -base64 32` erzeugen und dauerhaft sicher aufbewahren.
3. Öffentliche URL, CORS-Ursprung, API-Adresse sowie OAuth-/OIDC-Callbacks passend zum Reverse Proxy setzen.
4. Ein zusammengehöriges, exaktes API-/Web-Imagepaar auswählen. Bei einem Upgrade zuerst die Anleitung zur Umbenennung
   lesen und das vorhandene Datenvolume ausdrücklich auswählen.
5. `docker compose pull` und anschließend `docker compose up --detach --wait` ausführen. Der Migrationsdienst muss vor
   dem API-Start erfolgreich abschließen.
6. `/api/health` prüfen und die öffentliche Webadresse öffnen. Bei einer neuen Datenbank erscheint die Ersteinrichtung.

Das erste Konto erhält `SYSTEM_ADMIN`. Ein Kennwort benötigt mindestens zwölf Zeichen. Danach wird die einmalige
Einrichtung gesperrt; bestehende Installationen behalten ihre Konten.

## Rollen

`SYSTEM_ADMIN` verwaltet die Installation. `VIEWER` liest zugewiesene Repositories. `MANAGER` erhält zusätzlich die
entsprechenden lokalen Verwaltungsrechte für zugewiesene Repositories. Keine dieser Rollen verleiht Provider-Schreibrechte.
Provider-Konto hinzufügen, Zugangsdaten prüfen und anschließend Repositories auswählen. Eine leere Ansicht kann durch
fehlende Mitgliedschaften entstehen; sie beweist keine fehlenden Provider-Daten.
