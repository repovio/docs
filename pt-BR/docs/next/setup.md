---
title: 'Configuração de primeira execução'
description: 'Crie o primeiro administrador local e entenda a configuração única.'
---

<a id="before-setup"></a>

## Antes da configuração

Implante a API, o aplicativo da web e PostgreSQL usando [Implantação](/docs/next/deployment). Abra o URL de instalação.
Quando não existe nenhum usuário, Repovio direciona o navegador para `/auth/setup`. As instalações existentes mantêm
suas contas e, em vez disso, abrem o login. A instalação cria uma conta Repovio local, não uma conta de provedor.

<a id="create-the-administrator"></a>

## Crie o administrador

Insira um nome e sobrenome opcionais, um nome de usuário exclusivo, uma senha e uma confirmação de senha. As senhas
requerem pelo menos 12 caracteres. Envie o formulário de configuração uma vez e aguarde a solicitação; instalação
bem-sucedida assina o primeiro administrador do sistema. Erros de validação deixam o formulário disponível para
correção. Se outro operador concluiu a configuração primeiro, prossiga para [Entrar](/docs/next/sign-in) com uma conta
existente.

<a id="continue-configuration"></a>

## Continuar configuração

Conecte um [conta do provedor](/docs/next/provider-accounts), selecione [repositórios](/docs/next/repositories) e
inspecione [trabalhos de sincronização](/docs/next/guide-jobs). Os usuários locais podem ser criados através da API
protegida; a página Usuários lista contas e gerencia a exclusão e o acesso MCP. Como alternativa, configure
[OIDC](/docs/next/authentication) para contas gerenciadas pelo provedor de identidade. Novos não administradores
precisam de associações explícitas ao repositório.

Se a configuração falhar, verifique a disponibilidade da API/banco de dados e os logs de implantação sem publicar
credenciais. Não redefina o banco de dados para repetir a configuração. Consulte
[Recuperação de senha](/docs/next/authentication#reset-a-forgotten-password) para um administrador local existente.
