---
title: Repovio overview
description: Read-only workflow runs, repository work and security alerts across your providers.
---

Repovio is a self-hosted dashboard for GitHub Actions, GitLab pipelines, Forgejo Actions and Gitea Actions.
Track selected workflow runs, issues and pull requests, identify current failures and send notifications without
modifying provider resources.

## One permission-scoped overview

- Inspect workflow health, latest runs, trends, approval queues and work that needs attention.
- Read issues and pull or merge requests alongside their related workflow activity.
- Review supported security-alert metadata without storing secret values.
- Manage repository memberships, encrypted notification destinations and read-only provider connections.
- Use local accounts, optional OpenID Connect and personal read-only MCP access tokens.

Provider changes, approvals, reviews and workflow reruns remain external actions. Repovio's own administration controls
configure its local tracking and notifications; they do not grant provider write access.

Start with [installation](/docs/v1.0/installation), then follow [sign-in and navigation](/docs/v1.0/guide-sign-in-navigation).
For production operations, see [deployment and backups](/docs/v1.0/deployment).

> Historical release 1.0.1. The handbook uses the current product name. Obtain deployment variable names, image references
> and browser identifiers from this release's tagged source; those identifiers predate the branding change.
