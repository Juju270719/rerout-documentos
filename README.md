# Site institucional — Rethka Labs

Este diretório contém a futura saída estática para o domínio raiz `rethkalabs.com`.

- Não possui processo de build nem dependências.
- A pasta de publicação esperada no Cloudflare Pages é `site`.
- As páginas jurídicas permanecem canônicas em `https://rerout.rethkalabs.com/` e as rotas equivalentes do domínio raiz usam redirecionamentos 302 definidos em `site/_redirects`.
- Não há URL pública da Google Play configurada. O botão correspondente permanece desabilitado enquanto o aplicativo está em testes.

## Publicação

Criar um projeto Cloudflare Pages ligado a este repositório, branch `main`, sem comando de build e diretório de saída `site`. Depois, apontar `rethkalabs.com` e `www.rethkalabs.com` para o projeto sem alterar `api.rethkalabs.com` ou `rerout.rethkalabs.com`.

