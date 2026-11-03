# Como contribuir

Obrigado por ajudar a melhorar o Produto em Um Lugar.

## Antes de começar

- Abra uma issue para descrever mudanças grandes ou discutir suporte a uma nova loja.
- Para correções pequenas, envie um pull request com uma descrição objetiva.
- Não inclua cookies, tokens, credenciais, dados pessoais ou capturas com informações privadas.

## Regras para integrações de lojas

- Leia apenas páginas e dados disponíveis publicamente.
- Não implemente login automatizado, coleta de credenciais, resolução de CAPTCHA ou contorno de controles anti-bot.
- Mantenha a validação de domínios e de redirecionamentos; nunca aceite URLs arbitrárias no servidor.
- Trate os campos ausentes como indisponíveis, sem inventar dados.

## Preparar e validar

Edite `worker/index.js` e rode:

```sh
bash scripts/build.sh
node scripts/validate-artifact.mjs
```

No pull request, explique o comportamento alterado e como verificou a mudança. A publicação do site é feita separadamente; um pull request aprovado não atualiza automaticamente a versão hospedada.
