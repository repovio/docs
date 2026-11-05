---
title: Benachrichtigungen
description: Kanäle, Regeln, Zustellversuche und Browser-Push konfigurieren.
---

Der Bereich Benachrichtigungen enthält Kanäle, Regeln und Zustellhistorie. Kanäle unterstützen E-Mail, Gotify, ntfy,
Discord, Browser-Push und eigene Apprise-URLs pro Repository. Regeln verknüpfen Workflow-Glob und Endzustand `SUCCESS`
oder `FAILED` mit einem oder mehreren Kanälen.

E-Mail-, Gotify-, ntfy- und Discord-Formulare werden von der API in kanonische Apprise-Service-URLs übersetzt. Die
mitgelieferte Apprise-CLI übernimmt die Zustellung; ein zusätzlicher Apprise-Server ist nicht erforderlich.

Ziele werden mit `TOKEN_ENCRYPTION_KEY` verschlüsselt und niemals nach dem Speichern zurückgegeben. Bearbeiten erhält
das vorhandene Ziel, bis dessen Ersetzung ausdrücklich ausgewählt wird. Ein anderer Kanaltyp benötigt einen neuen
Kanal. Globale Rolle und Repository-Mitgliedschaft müssen die Verwaltung erlauben.

## Browser-Push

Browser-Push ist ein eigener Transport. Aktiviere ihn mit `WEB_PUSH_VAPID_PUBLIC_KEY`, `WEB_PUSH_VAPID_PRIVATE_KEY` und
`WEB_PUSH_VAPID_SUBJECT`. Schlüssel beispielsweise mit `npx web-push generate-vapid-keys` erzeugen. Der Subject-Wert
muss eine `mailto:`- oder HTTPS-URI sein. Ohne vollständige Konfiguration wird der Transport als nicht verfügbar gezeigt.

Jeder Benutzer aktiviert Push ausdrücklich pro Browser. Ein Kanal gehört seinem Ersteller und sendet an dessen
aktivierte Geräte. Endpunkte und Schlüssel sind verschlüsselt; nicht geheime Fingerabdrücke verhindern Duplikate.
Abgelaufene Abonnements mit HTTP 404/410 werden entfernt.

## Bestehende Kanäle und Historie

Bestehende Apprise-Kanäle erhalten anhand ihres Schemas einen stabilen Typ. Unbekannte Schemas bleiben als eigene
Apprise-URL nutzbar. Verschlüsselte Ziele, Repository-Zuordnung, Regeln und Zustellversuche bleiben erhalten.
Die Historie zeigt sichere Fehler, Versuchszahl und Retry-Zustand ohne Zugangsdaten. Persistierte Versuche und
Deduplizierung verhindern doppelte logische Zustellungen bei wiederholter Verarbeitung.
