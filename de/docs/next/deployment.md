---
title: Bereitstellung und Betrieb
description: HTTPS, Backups, Upgrades und Rollback sicher durchführen.
---

## Architektur

Compose startet PostgreSQL, einen einmaligen Prisma-Migrationsdienst sowie API und Webanwendung. TLS wird am externen
Reverse Proxy terminiert. Daten und normalisierte Profilbilder liegen im benannten PostgreSQL-Volume.

Setze öffentliche URLs, `CORS_ORIGIN`, `NUXT_PUBLIC_API_BASE_URL`, `OAUTH_CALLBACK_URL` und `OIDC_CALLBACK_URL`
konsistent. Webanwendung an Port 3000, `/api/*`, `/socket.io/*` und `/mcp` an API-Port 3001 weiterleiten. MCP benötigt
seinen unveränderten Pfad. PostgreSQL nicht öffentlich freigeben; lokale Proxy-Upstreams an Loopback binden.

```caddy
repovio.example.com {
  reverse_proxy /api/* 127.0.0.1:3001
  reverse_proxy /socket.io/* 127.0.0.1:3001
  reverse_proxy /mcp 127.0.0.1:3001
  reverse_proxy 127.0.0.1:3000
}
```

Callbacks müssen exakt den HTTPS-Adressen beim Identitätsanbieter beziehungsweise Provider entsprechen. Geheimnisse
bleiben ausschließlich in privaten Konfigurationen. Neue Installationen legen nach erfolgreicher Health-Prüfung das
erste Administrationskonto im Browser an.

## Backup und Wiederherstellung

Vor jedem Upgrade ein PostgreSQL-Backup erzeugen, verschlüsselt außerhalb des Hosts speichern und Wiederherstellung
regelmäßig auf einem getrennten System testen:

```bash
mkdir -p backups
docker compose exec -T postgres sh -c 'pg_dump -U "$POSTGRES_USER" -Fc "$POSTGRES_DB"' > backups/repovio.dump
pg_restore --list backups/repovio.dump
```

Eine Wiederherstellung ersetzt Datenbankobjekte: vorher erneut sichern und API/Web stoppen. Ein kompatibles Backup über
Standardeingabe an `pg_restore --clean --if-exists --no-owner` im PostgreSQL-Container übergeben. Zugangsdaten und
`TOKEN_ENCRYPTION_KEY` unverändert erhalten; ohne Schlüssel sind verschlüsselte Provider-Daten unbrauchbar.

## Upgrade und Rollback

Exakte zusammengehörige API-/Web-Version wählen, Images laden, Compose starten und Migrationslogs, Health-Endpunkt sowie
Dashboard prüfen. Bei der Umbenennung zusätzlich vorhandenes Volume ausdrücklich auswählen; Details stehen im
Upgrade-Leitfaden. Keine parallelen Instanzen auf dieselbe Datenbank schreiben lassen.

Für einen Rollback das vorherige Imagepaar verwenden. Bei inkompatibler Schemaänderung zuerst ein zum alten Stand
passendes Backup wiederherstellen. Niemals `docker compose down --volumes` für Upgrade oder Rollback verwenden.
