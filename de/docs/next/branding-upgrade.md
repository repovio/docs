---
title: Umbenennung und Upgrade
description: Vorhandene Daten bei der Umstellung auf Repovio erhalten.
---

Die Umbenennung ändert technische Konfiguration ohne automatische Alt-Namens-Aliasse. Produktpräfixe auf `REPOVIO_`
umstellen, einschließlich `REPOVIO_ENV_FILE`, `REPOVIO_VERSION`, `REPOVIO_API_PORT` und `REPOVIO_WEB_PORT`. Neue Images
liegen unter `ghcr.io/repovio/repovio-api` und `ghcr.io/repovio/repovio-web`.

## Vorhandenes Volume übernehmen

1. Datenbank sichern und Wiederherstellung prüfen.
2. Mit `docker inspect <postgres-container>` den exakten benannten Mount unter `/var/lib/postgresql/data` feststellen.
3. Alte Dienste ohne Volume-Löschung stoppen. `REPOVIO_POSTGRES_VOLUME` auf den aufgezeichneten Namen setzen und dessen
   Existenz mit `docker volume inspect <recorded-volume>` prüfen. Der Standard für Neuinstallationen darf diesen Namen
   nicht versehentlich ersetzen.
4. Datenbankname, Benutzer, Kennwort, `TOKEN_ENCRYPTION_KEY` und `AUTH_JWT_SECRET` unverändert erhalten. PostgreSQL nicht
   gleichzeitig auf eine neue Hauptversion umstellen.
5. Aufgelöste Compose-Konfiguration privat prüfen: Sie enthält Geheimnisse. PostgreSQL zuerst starten, vorhandene Daten
   prüfen, anschließend Migration und Anwendung starten. Keine parallelen Schreiber verwenden.

Keine Datenkonvertierung ist für das Branding nötig. Niemals Volumes löschen oder eine leere Datenbank als vermeintliche
Migration initialisieren. Die alte Konfiguration und das erhaltene Volume ermöglichen einen kontrollierten Rückweg.

## Sitzungen und Browser

Der Standard-JWT-Issuer lautet `repovio`. Erneut anmelden; ausdrücklich konfigurierte Issuer bewusst anpassen. Alte
Browser-Schlüssel, Cookies und Benachrichtigungszustände werden nicht importiert. Sprache/Theme erneut wählen, PWA bei
Bedarf neu installieren und Browser-Benachrichtigungen wieder aktivieren. Callback-Routen bleiben gleich.

Für das Upgrade `docker compose -f compose.yml -f compose.upgrade.yml` verwenden. Das Override verlangt ein bereits
vorhandenes Volume und verhindert ein unbemerkt neu angelegtes leeres Ersatzvolume. Bisherige MCP-Tokens widerrufen und
neu erstellen; das frühere Token-Präfix wird nicht als Alias akzeptiert.
