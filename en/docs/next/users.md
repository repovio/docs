---
title: 'Users'
description: 'Review local and identity-managed users, roles, deletion, and MCP token administration.'
---

<a id="review-accounts"></a>

## Review accounts

System administrators open **Administration → Users**. The table shows username, avatar/display name, role, local/OIDC
origin, and created/updated timestamps. Filter by role, sort, change columns, or paginate. Repository access for a
Viewer or Manager requires a separate [repository membership](/docs/next/repositories); identity-provider groups do not
create those memberships.

<a id="provisioning-and-deletion"></a>

## Provisioning and deletion

The Users page has no create-user or edit-user form. Additional local users are created through the administrator-only
protected user API using username, password, and role. OIDC users are provisioned through configured identity login. See
[Authentication](/docs/next/authentication) for mapping and account separation. Do not infer a user-edit action from the
presence of an editable profile on your own Settings page.

The delete action is available for other users and executes immediately; review the account before selecting it. You
cannot delete your own account through this API or screen. Deleting a Repovio user removes local access; it does not
delete any provider account at GitHub, GitLab, Forgejo, or Gitea. Review the affected user's access before deleting.

<a id="user-mcp-tokens"></a>

## User MCP tokens

Open a user's MCP-token dialog to list token metadata or revoke a token with confirmation. Administrators cannot
retrieve plaintext token values or create another user's token through this dialog. Users create their own tokens in
[MCP settings](/docs/next/mcp). Empty lists and load errors are distinct; retry after API recovery. Never copy token
values into support reports or screenshots.
