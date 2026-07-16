# Site institucional â€” Rethka Labs

Este diretÃ³rio contÃ©m a futura saÃ­da estÃ¡tica para o domÃ­nio raiz `rethkalabs.com`.

- NÃ£o possui processo de build nem dependÃªncias.
- A pasta de publicaÃ§Ã£o esperada no Cloudflare Pages Ã© `site`.
- As pÃ¡ginas jurÃ­dicas permanecem canÃ´nicas em `https://rerout.rethkalabs.com/` e as rotas equivalentes do domÃ­nio raiz usam redirecionamentos 302 definidos em `site/_redirects`.
- NÃ£o hÃ¡ URL pÃºblica da Google Play configurada. O botÃ£o correspondente permanece desabilitado enquanto o aplicativo estÃ¡ em testes.

## PublicaÃ§Ã£o

Criar um projeto Cloudflare Pages ligado a este repositÃ³rio, branch `main`, sem comando de build e diretÃ³rio de saÃ­da `site`. Depois, apontar `rethkalabs.com` e `www.rethkalabs.com` para o projeto sem alterar `api.rethkalabs.com` ou `rerout.rethkalabs.com`.

