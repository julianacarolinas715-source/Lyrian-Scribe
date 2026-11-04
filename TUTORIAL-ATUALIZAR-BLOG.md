# Tutorial: publicar e atualizar artigos do blog

Este tutorial ensina a publicar textos pelo painel do site. No uso normal, você não precisa abrir o VS Code, editar arquivos de configuração ou usar comandos Git.

## Abrir o painel

1. Acesse `https://SEU-ENDERECO-DO-NETLIFY/admin/` — substitua pelo endereço real do site no Netlify e mantenha `/admin/` no final.
2. Clique para entrar com GitHub e autorize o acesso, se solicitado. A conta precisa ter permissão de escrita no repositório `julianacarolinas715-source/Lyrian-Scribe`.
3. No painel, abra **Artigos do blog**.

## Publicar um artigo novo

1. Clique em **Novo artigo**.
2. Preencha **Título**. Esse será o título principal do artigo e também aparecerá na listagem.
3. Escreva um **Resumo** curto, de uma ou duas frases. Ele aparece no cartão do artigo na página do blog.
4. Escolha a **Data** de publicação.
5. Em **Categorias**, digite uma categoria e pressione Enter. Repita para adicionar outras, se necessário. A categoria cria automaticamente a página de listagem correspondente.
6. Se quiser, envie uma **Imagem de capa** e informe o **Texto alternativo** descrevendo a imagem. Esse texto ajuda leitores que usam tecnologias assistivas.
7. Escreva o artigo em **Corpo do artigo**. Use a barra de ferramentas para títulos, subtítulos, listas, links e imagens. Parágrafos simples também funcionam.
8. Deixe **Rascunho** desmarcado para o artigo aparecer no site. Se marcar essa opção, o texto fica fora da listagem pública.
9. Salve e use a ação de publicação do painel. Como o site usa fluxo editorial, talvez seja necessário mudar o artigo de rascunho para pronto/publicado e confirmar a publicação.
10. Aguarde o Netlify terminar o novo deploy. Depois, abra a página do blog e confira o artigo e a categoria.

## Atualizar um artigo existente

1. Em **Artigos do blog**, abra o artigo que deseja alterar.
2. Edite os campos necessários e salve.
3. Confirme a publicação no fluxo editorial. O Netlify fará um novo deploy automaticamente.

## Conferir o resultado

- O artigo aparece na listagem geral do blog.
- O título e o resumo aparecem no cartão da listagem.
- A data e as categorias aparecem junto ao artigo.
- Clicar em uma categoria abre a página com artigos daquela categoria.
- Abrir o artigo mostra o texto completo.

Se a alteração ainda não aparecer, confira no painel do Netlify se o deploy mais recente terminou com sucesso e atualize a página do navegador. Não altere `admin/config.yml`, `.eleventy.js` ou `netlify.toml` para publicar textos.

## Importante

O painel grava cada artigo no GitHub. O Netlify recebe a alteração, gera novamente o blog e publica a atualização. A configuração técnica só precisa ser alterada se o repositório, o domínio ou o processo de publicação mudar.
