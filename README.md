# Lyrian Scribe

Site institucional e blog da Lyrian Scribe. O site é gerado com Eleventy e publicado pelo Netlify a partir da branch `main` deste repositório.

## Publicar e atualizar artigos

Consulte o [Tutorial para atualizar o blog](./TUTORIAL-ATUALIZAR-BLOG.md). Os textos são enviados pelo painel em `/admin/`; para publicar artigos, não é preciso editar configurações nem usar o terminal.

## Estrutura principal

- `index.html`, `styles.css`, `script.js`: página principal, estilos e interações.
- `blog/`, `content/blog/`, `_includes/`, `blog.css`: listagem, categorias, conteúdo e modelo dos artigos.
- `admin/`: painel Decap CMS e sua configuração.
- `images/uploads/`: imagens dos artigos enviadas pelo painel.
- `.eleventy.js`, `.eleventyignore`, `package.json`: configuração e geração do site.
- `netlify.toml`, `.nvmrc`: build do Netlify e versão do Node.js.
- `lyrian_scribe_site/`: cópia antiga preservada do upload inicial; ela é ignorada durante o build.

## Desenvolvimento local

1. Instale Node.js 24.
2. Abra esta pasta no VS Code e escolha **Terminal → Novo Terminal**.
3. Execute `npm install` uma vez.
4. Execute `npm start` e abra no navegador o endereço local exibido no terminal.

O painel administrativo exige autenticação do GitHub configurada no Netlify.
