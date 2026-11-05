---
title: "Guide d'utilisation du Repovio"
description:
  "Commencez à utiliser Repovio pour afficher les référentiels, l'état du flux de travail et les actions d'approbation
  requises."
---

Repovio est un tableau de bord d'état du flux de travail en lecture seule. Il permet aux utilisateurs autorisés
d'inspecter l'activité du référentiel sans créer, réexécuter, approuver ou supprimer quoi que ce soit sur GitHub,
GitLab, Forgejo ou Gitea.

<a id="before-you-begin"></a>

## Avant de commencer

Vous avez besoin de l'URL d'une installation Repovio et d'un compte OIDC local ou configuré. Le premier administrateur
effectue une configuration unique ; des utilisateurs locaux supplémentaires sont provisionnés via l'API protégée, ou les
utilisateurs se connectent via OIDC configuré. L'accès aux données du fournisseur dépend de votre rôle et de votre
adhésion au référentiel ; la connexion n’expose pas automatiquement tous les référentiels configurés.

Repovio utilise trois rôles d'application :

- **Viewer** peut inspecter les référentiels, les flux de travail, les problèmes et les demandes d'extraction
  explicitement attribués.
- **Manager** a un accès en lecture et peut inspecter les alertes de sécurité pour les référentiels dont l'adhésion est
  également**Manager**. Les canaux de notification, les abonnements, les tests et l'historique sont gérés globalement
  par les administrateurs système.
- **L'administrateur système** peut accéder à chaque référentiel et gérer les comptes de fournisseur, les référentiels,
  les adhésions, les utilisateurs, les jetons MCP et les valeurs par défaut de l'application.

Les rôles d'application n'accordent jamais d'accès en écriture à GitHub, GitLab, Forgejo ou Gitea. Si une action modifie
l'état du fournisseur, Repovio ouvre l'interface du fournisseur au lieu d'effectuer l'action.

<a id="recommended-first-session"></a>

## Première séance recommandée

1. [Se connecter](/docs/next/sign-in), apprenez [navigation](/docs/next/navigation) et essayez
   [recherche](/docs/next/search).
2. Passez en revue les [Tableau de bord](/docs/next/guide-dashboard), [Toutes les exécutions](/docs/next/workflow-runs),
   [A besoin d'attention](/docs/next/needs-attention) et [En attente d'approbation](/docs/next/awaiting-approval).
3. Inspectez les [Problèmes](/docs/next/guide-issues) et [Demandes de fusion](/docs/next/guide-pull-requests).
4. Ouvrez [Dépôts](/docs/next/repositories) pour comprendre les données que vous pouvez voir.
5. Les administrateurs configurent [canaux de notification](/docs/next/notifications) et
   [abonnements à des événements](/docs/next/notification-rules).

Les administrateurs système doivent ensuite continuer avec [Administration et paramètres](/docs/next/provider-accounts).
Le déploiement, l'enregistrement du fournisseur, la configuration du webhook, la sauvegarde et la récupération sont liés
à partir des pages correspondantes du manuel.

<a id="when-a-page-is-empty-or-unavailable"></a>

## Lorsqu'une page est vide ou indisponible

Une page vide peut signifier qu'aucune donnée du fournisseur correspondant n'a été synchronisée, que les filtres
excluent tous les résultats ou que votre compte n'est pas membre du référentiel. Effacez les filtres actifs et vérifiez
d'abord la sélection du référentiel. Un message d'erreur de chargement signifie que les données demandées n'ont pas pu
être récupérées ; réessayez l'action de page et demandez à l'administrateur d'installation d'inspecter les tâches d'API
et de synchronisation si l'erreur persiste.
