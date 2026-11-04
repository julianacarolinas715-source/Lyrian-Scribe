# Lyrian Scribe

Site estatico com blog em Markdown e painel Decap CMS. O Eleventy gera as paginas finais; o Netlify hospeda o resultado e o CMS grava os artigos no repositorio GitHub.

## Estrutura

- `index.html`, `styles.css`, `script.js`: pagina principal, estilos e interacoes.
- `blog/`: modelo da listagem e das paginas de categorias.
- `content/blog/`: artigos em Markdown; cada artigo publicado ganha sua propria URL.
- `_includes/post.njk`, `blog.css`: modelo e estilos dos artigos e listagens.
- `admin/`: painel Decap CMS em `/admin/` e configuracao de campos/editor.
- `images/uploads/`: imagens carregadas pelo painel.
- `.eleventy.js`, `package.json`: geracao do site com Eleventy.
- `netlify.toml`: comando de build e diretorio publicado pelo Netlify.

## Trabalhar localmente

1. Instale Node.js LTS.
2. Na pasta do projeto, execute `npm install`.
3. Execute `npm start` e abra o endereco local indicado pelo Eleventy.
4. O painel `/admin/` precisa de OAuth configurado no Netlify e GitHub.

## Publicar pelo GitHub e Netlify

1. Crie um repositorio GitHub vazio. Abra um terminal nesta pasta e envie todos os arquivos, incluindo os arquivos ocultos `.eleventy.js` e `netlify.toml`:

   ```sh
   git init
   git add .
   git commit -m "Preparar site Lyrian Scribe"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```

   Troque a URL do exemplo pela URL do repositorio. Se o Git ja estiver inicializado e conectado, use `git add .`, `git commit -m "Atualizar site"` e `git push`.
2. No Netlify, escolha **Add new site → Import an existing project** e conecte sua conta GitHub.
3. Selecione o repositorio e configure a branch de producao como `main`. O Netlify le `netlify.toml`: build `npm run build`, diretorio de publicacao `_site`.
4. Edite `admin/config.yml` e troque `SEU-USUARIO/SEU-REPOSITORIO` pelo caminho do repositorio GitHub (por exemplo, `juliana/lyrian-scribe`). Envie essa mudanca com `git add admin/config.yml`, `git commit -m "Configurar repositorio do CMS"` e `git push`.
5. No GitHub, abra **Settings → Developer settings → OAuth Apps** e crie uma OAuth App. Use `https://api.netlify.com/auth/done` como **Authorization callback URL**. Copie o Client ID e gere um Client Secret.
6. No Netlify, abra **Project configuration → Security → OAuth → Authentication Providers → Install Provider**, escolha GitHub e informe o Client ID e o Client Secret. Guarde o secret apenas no Netlify; nao o coloque nos arquivos do site.
7. De a permissao de escrita no repositorio GitHub para cada pessoa que usara o CMS. Abra `https://SEU-SITE.netlify.app/admin/`, entre com GitHub e crie ou edite artigos. Use **Publish**; o fluxo editorial permite revisar a alteracao antes da publicacao final.
8. Cada publicacao e gravada no GitHub. O Netlify detecta a alteracao, executa o build e atualiza o site.

> O CMS usa o backend GitHub do Decap com OAuth fornecido pelo Netlify. Cada editor precisa ter acesso de escrita ao repositorio. A documentacao atual do Netlify marca Git Gateway como obsoleto; por isso este projeto usa OAuth direto. Para um dominio proprio, configure-o no Netlify.

## Escrever artigos

No painel, preencha titulo, resumo, data, uma ou mais categorias, imagem opcional, texto alternativo e corpo do artigo. Artigos com **Rascunho** marcado nao aparecem no site. Categorias e URLs sao geradas automaticamente. Tambem e possivel adicionar um arquivo `.md` em `content/blog/` com esses campos YAML no inicio do arquivo.

O conteudo de demonstracao em `content/blog/2026-11-03-escrita-clara.md` pode ser editado ou removido.
