# Arquitetura e fluxos — Produto em Um Lugar

Documentação 1.0 · 13/11/2026 · [HTML interativo](fluxos.html)

## Etapa 1 · Inventário

Base GitHub `950dad6453239a9e9c108f078584a1fdd27ec754`.

| Componente | Entrada e ação | Fonte |
| --- | --- | --- |
| Operador | Informa uma URL pública de produto. O formulário envia a URL ao Worker pelo POST /api/product. | [worker/index.js](https://github.com/duduxweb/produto-em-um-lugar/blob/950dad6453239a9e9c108f078584a1fdd27ec754/worker/index.js) |
| Worker | Valida HTTPS e restringe hosts e redirecionamentos. Usa APIs públicas e metadados conforme o marketplace. Bloqueios externos podem limitar o resultado. | [worker/index.js](https://github.com/duduxweb/produto-em-um-lugar/blob/950dad6453239a9e9c108f078584a1fdd27ec754/worker/index.js) |
| Ficha | Apresenta campos disponíveis, origem e avisos. A disponibilidade dos dados varia por página. GET /health indica que o Worker responde. | [README.md](https://github.com/duduxweb/produto-em-um-lugar/blob/950dad6453239a9e9c108f078584a1fdd27ec754/README.md) |

## Etapa 2 · Evidências e pendências

GET /health devolveu HTTP 200 e ok=true no domínio declarado no README. Rota e validações conferidas no código.

Confirmar revisão efetivamente hospedada e testar uma URL pública válida por marketplace em ambiente autorizado. A atualização documental foi publicada em branch.

## Histórico

- 1.0 · Primeiro mapa interativo. Atualize o índice e o HTML na mesma revisão e confira a cópia do Drive.
