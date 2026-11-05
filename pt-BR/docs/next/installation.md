---
title: 'Guia do usuário Repovio'
description:
  'Comece a usar Repovio para visualizar repositórios, status do fluxo de trabalho e ações de aprovação necessárias.'
---

Repovio é um painel de status de fluxo de trabalho somente leitura. Ele permite que usuários autorizados inspecionem a
atividade do repositório sem criar, executar novamente, aprovar ou excluir nada em GitHub, GitLab, Forgejo ou Gitea.

<a id="before-you-begin"></a>

## Antes de começar

Você precisa do URL de uma instalação Repovio e de uma conta OIDC local ou configurada. O primeiro administrador conclui
a configuração única; usuários locais adicionais são provisionados por meio da API protegida ou os usuários fazem login
por meio do OIDC configurado. O acesso aos dados do provedor depende da sua função e das associações ao repositório; o
login não expõe automaticamente todos os repositórios configurados.

Repovio usa três funções de aplicativo:

- **O visualizador** pode inspecionar repositórios, fluxos de trabalho, problemas e solicitações pull atribuídos
  explicitamente.
- **Gerente** tem acesso de leitura e pode inspecionar alertas de segurança para repositórios onde a associação também
  é**Gerente**. Canais de notificação, assinaturas, testes e histórico são administrados globalmente pelos
  administradores do sistema.
- **O administrador do sistema** pode acessar todos os repositórios e gerenciar contas de provedores, repositórios,
  associações, usuários, tokens MCP e padrões de aplicativos.

As funções de aplicativo nunca concedem acesso de gravação em GitHub, GitLab, Forgejo ou Gitea. Se uma ação alterar o
estado do provedor, Repovio abrirá a interface do provedor em vez de executar a ação.

<a id="recommended-first-session"></a>

## Primeira sessão recomendada

1. [Entrar](/docs/next/sign-in), aprenda [navegação](/docs/next/navigation) e experimente [procurar](/docs/next/search).
2. Revise [Painel](/docs/next/guide-dashboard), [Todas as execuções](/docs/next/workflow-runs),
   [Precisa de atenção](/docs/next/needs-attention) e [Aguardando aprovação](/docs/next/awaiting-approval).
3. Inspecione [Problemas](/docs/next/guide-issues) e [Solicitações pull](/docs/next/guide-pull-requests).
4. Abra [Repositórios](/docs/next/repositories) para entender os dados que você pode ver.
5. Os administradores configuram [canais de notificação](/docs/next/notifications) e
   [assinaturas de eventos](/docs/next/notification-rules).

Os administradores do sistema devem então continuar com [Administração e configurações](/docs/next/provider-accounts). A
implantação, o registro do provedor, a configuração do webhook, o backup e a recuperação estão vinculados às páginas do
manual correspondentes.

<a id="when-a-page-is-empty-or-unavailable"></a>

## Quando uma página está vazia ou indisponível

Uma página vazia pode significar que nenhum dado do provedor correspondente foi sincronizado, que os filtros excluem
todos os resultados ou que sua conta não tem associação no repositório. Limpe os filtros ativos e verifique primeiro a
seleção do repositório. Uma mensagem de erro de carregamento significa que os dados solicitados não puderam ser
recuperados; tente novamente a ação da página e peça ao administrador da instalação para inspecionar a API e os
trabalhos de sincronização se o erro persistir.
