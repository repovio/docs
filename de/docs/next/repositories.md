---
title: Erfasste Repositories
description: Identität, Umbenennung und Repository-Mitgliedschaften verstehen.
---

Ein erfasstes Repository wird durch Provider-Konto und stabile Provider-Repository-ID identifiziert. Besitzer,
Namespace, Name und URL sind Provider-Metadaten und lassen sich lokal nicht frei bearbeiten.

Vor jeder Workflow-Synchronisation liest Repovio die Metadaten erneut. Umbenennungen und Transfers behalten dadurch
Historie, Filter, Mitgliedschaften, Regeln und Kanäle. Systemadministratoren können dieselbe lesende Aktualisierung im
Repository-Dialog sofort anfordern.

Änderungen werden nur übernommen, wenn die stabile ID übereinstimmt. Gelöschte oder unzugängliche Repositories sowie ein
neues Repository am bisherigen Pfad erzeugen einen Synchronisationsfehler; die vorhandene Historie bleibt erhalten.
Ein neu erstelltes Repository als neues erfasstes Repository hinzufügen.

## Mitglieder und Profilbilder

Die Tabelle zeigt bis zu fünf Mitglieds-Avatare sowie einen Zähler für weitere Mitglieder. Identitäten werden nur für
Repositories ausgegeben, die der aktuelle Benutzer lesen darf.

Eigene Namen, Benutzername und Profilbild werden unter Einstellungen verwaltet. Eine Benutzernamensänderung benötigt
das aktuelle Kennwort. JPEG, PNG und WebP bis 2 MB können hochgeladen oder von öffentlichen HTTPS-Adressen importiert
werden. Nicht quadratische Bilder müssen zugeschnitten werden. Repovio entfernt Metadaten und speichert ein 256 × 256
WebP in PostgreSQL. OIDC-Konten unterliegen den Einschränkungen ihres Identitätsanbieters.
