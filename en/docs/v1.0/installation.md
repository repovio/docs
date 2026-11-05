---
title: Repovio user guide
description: Start using Repovio to view repositories, workflow status, and required approval actions.
---

> Archived source snapshot. Product labels have been normalized to Repovio. For this historical release,
> use the configuration identifiers and container references from its tagged deployment files unchanged.

Repovio is a read-only workflow status dashboard. It lets authorized users inspect repository activity without creating,
rerunning, approving, or deleting anything at GitHub, GitLab, Forgejo, or Gitea.

## Before you begin

You need the URL of an Repovio installation and a local Repovio user account. A system administrator creates the first
account during deployment and then creates additional users. Access to provider data depends on your role and repository
memberships; signing in does not automatically expose every configured repository.

Repovio uses three application roles:

- **Viewer** can inspect explicitly assigned repositories, workflows, issues, pull requests, and notification status.
- **Manager** has the same read access and can manage notification configuration for repositories where the membership
  is also **Manager**. The current web page shows notification state; configuration is available through the protected
  API.
- **System Administrator** can access every repository and manage provider accounts, repositories, memberships, users,
  MCP tokens, and application defaults.

Application roles never grant write access at GitHub, GitLab, Forgejo, or Gitea. If an action changes provider state,
Repovio opens the provider interface instead of performing the action.

## Recommended first session

1. Follow [Sign in and navigation](/docs/v1.0/guide-sign-in-navigation) to open the application and learn the shared controls.
2. Use the [Workflow dashboard](/docs/v1.0/guide-dashboard) to review current health and recent activity.
3. Open [Workflow queues](/docs/v1.0/guide-workflow-queues) to investigate failures or approval-gated runs.
4. Review [Issues and pull requests](/docs/v1.0/guide-issues-pull-requests) for the work surrounding a workflow result.
5. Use [Repositories and notifications](/docs/v1.0/guide-repositories-notifications) to understand the repositories you can see.

System administrators should then continue with [Administration and settings](/docs/v1.0/guide-administration). Deployment,
provider registration, webhook setup, backup, and recovery are documented separately in the **Operations** and
**Providers** sections.

## When a page is empty or unavailable

An empty page can mean that no matching provider data has been synchronized, that filters exclude all results, or that
your account has no membership for the repository. Clear active filters and check the repository selection first. A
load-error message means the requested data could not be retrieved; retry the page action and ask the installation
administrator to inspect the API and synchronization jobs if the error persists.
