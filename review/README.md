# Evidências de revisão visual

Esta pasta reúne prévias da reconstrução institucional do Rerout para facilitar a revisão do pull request.

- `site-desktop.svg`: captura em 1440 × 1000 px.
- `site-mobile.svg`: captura com viewport móvel em 390 × 844 px.

## Validações executadas

- JavaScript validado com `node --check`.
- Navegação, imagens e referências locais verificadas no navegador.
- Responsividade inspecionada em desktop e em viewport móvel real emulado.
- Lighthouse móvel local: Performance 83, Accessibility 100, Best Practices 100 e SEO 100.

O servidor HTTP local usado na auditoria não aplica as regras de cache definidas em `_headers`, por isso a pontuação de Performance deve ser reavaliada no ambiente publicado antes do merge.

