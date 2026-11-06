# Produto em Um Lugar

Aplicação web responsiva para consultar informações públicas de um produto a partir de links da Shopee, AliExpress e Mercado Livre.

Use a versão pública: https://produto-em-um-lugar.starrypangolin.chatgpt.site

## Funcionamento

- A página recebe um link direto ou um link curto de uma das lojas e mostra o endereço final quando a loja permite resolver o redirecionamento.
- O Worker valida os domínios e acompanha redirecionamentos que permaneçam na mesma loja.
- No Mercado Livre, consulta a API pública para obter o anúncio, descrição, imagens, preço, estoque, vendedor e atributos disponíveis.
- Na Shopee, tenta o endpoint público de detalhes quando consegue extrair o ID do anúncio; se não funcionar, tenta os metadados HTML.
- No AliExpress, extrai Open Graph, JSON-LD e estados JSON embutidos disponíveis na página pública.
- Mostra uma ficha com título, descrição, preço, fotos, marca, SKU, estoque, avaliações, vendedor, variantes e especificações encontrados.
- Não usa sessão da loja, cookies do usuário, credenciais, carrinho ou ações de compra.
- O app pode ser instalado como atalho/PWA. A casca da página fica disponível offline após uma visita; consultar produtos requer internet.

## Limites

Os marketplaces mudam as páginas e podem ocultar campos, exigir login, carregar dados apenas por JavaScript ou limitar requisições automatizadas. A API do Mercado Livre pode limitar chamadas; o endpoint público da Shopee não é estável. O AliExpress pode bloquear a leitura automatizada. O app informa quando não consegue ler a página e mostra o endereço resolvido, quando disponível. Não tenta resolver CAPTCHA, simular login ou contornar esses controles. Campos ausentes significam que não foram entregues na resposta pública daquela consulta.

O Worker aceita apenas HTTPS e hosts das lojas configuradas, limita o tamanho da resposta e acompanha no máximo dez redirecionamentos dentro da mesma loja.

## Desenvolvimento

Edite `worker/index.js`. O projeto usa o starter Worker ESM do Sites e não tem dependências externas.

```sh
bash scripts/build.sh
node scripts/validate-artifact.mjs
```

O endpoint `POST /api/product` recebe `{ "url": "https://..." }`. `GET /health` informa se o Worker está ativo.

## Contribua

Veja [CONTRIBUTING.md](CONTRIBUTING.md) para sugestões, relatos de problemas e pull requests. O projeto é distribuído sob a licença MIT; consulte [LICENSE](LICENSE).
