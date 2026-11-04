<<<<<<< HEAD
﻿# Lyrian Scribe

Site estático com blog em Markdown e painel Decap CMS. O Eleventy gera as páginas; o Netlify hospeda o site e o CMS salva os artigos no GitHub.

## Estrutura do projeto

- `index.html`, `styles.css` e `script.js`: página principal, estilos e interações.
- `blog/`: modelos da listagem do blog e das páginas de categorias.
- `content/blog/`: artigos escritos em Markdown.
- `_includes/post.njk` e `blog.css`: modelo e estilos dos artigos.
- `admin/`: painel Decap CMS, acessado em `/admin/`, e configuração dos campos.
- `images/uploads/`: imagens enviadas pelo painel.
- `.eleventy.js` e `package.json`: configuração e comandos de geração do site.
- `netlify.toml`: comando de build e pasta publicada no Netlify.

## Publicar o projeto

### 1. Enviar os arquivos desta pasta para o GitHub

Primeiro, crie no GitHub um repositório vazio. Por exemplo, você pode chamá-lo de `lyrian-scribe-site`. Não precisa criar README, licença ou outros arquivos no GitHub, porque os arquivos do site já estão nesta pasta do computador.

Agora abra **esta pasta do projeto** no Visual Studio Code: `lyrian_scribe_site/lyrian_scribe_site`. No VS Code, escolha **Terminal → Novo Terminal**. O terminal deve estar aberto nessa pasta, onde você consegue ver `index.html`, `styles.css` e `package.json` no Explorer.

Copie o bloco de comandos abaixo e cole **no terminal do VS Code** — não cole em um arquivo. Antes de executar, substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub e `SEU-REPOSITORIO` pelo nome do repositório vazio que você criou. Por exemplo, se seu usuário for `juliana` e o repositório se chamar `lyrian-scribe-site`, a URL ficará `https://github.com/juliana/lyrian-scribe-site.git`.

```sh
git init
git add .
git commit -m "Preparar site Lyrian Scribe"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

Esses comandos preparam o Git nesta pasta e enviam os arquivos para o repositório. Se o terminal disser que `git` não é reconhecido, instale o Git e reabra o VS Code. Se pedir autenticação, entre na sua conta GitHub quando o navegador abrir.

Se esta pasta **já tiver Git conectado ao repositório**, não execute `git init` nem `git remote add origin`. Nesse caso, depois de editar os arquivos, use:

```sh
git add .
git commit -m "Atualizar site"
git push
```

### 2. Conectar o repositório ao Netlify

1. Entre no Netlify e escolha **Add new site → Import an existing project**.
2. Conecte sua conta GitHub e selecione o repositório para o qual enviou os arquivos.
3. Escolha a branch `main`. O arquivo `netlify.toml` já configura o comando `npm run build` e a pasta de publicação `_site`.
4. Clique para publicar o site. O Netlify fornece um endereço terminado em `.netlify.app`.

### 3. Ativar o acesso ao painel administrativo

1. No GitHub, abra **Settings → Developer settings → OAuth Apps** e crie uma OAuth App. Em **Authorization callback URL**, informe `https://api.netlify.com/auth/done`. Copie o Client ID e gere um Client Secret.
2. No Netlify, abra **Project configuration → Security → OAuth → Authentication Providers → Install Provider**. Escolha GitHub e informe o Client ID e o Client Secret. O secret deve ficar somente nas configurações do Netlify; não o coloque em nenhum arquivo do projeto.
3. Abra `admin/config.yml` nesta pasta. Substitua `SEU-USUARIO/SEU-REPOSITORIO` pelo usuário e nome do repositório GitHub, separados por `/`. Por exemplo: `juliana/lyrian-scribe-site`. Salve o arquivo.
4. Envie essa alteração pelo terminal do VS Code, ainda aberto na pasta do projeto:

   ```sh
   git add admin/config.yml
   git commit -m "Configurar repositório do CMS"
   git push
   ```

5. Dê permissão de escrita nesse repositório GitHub a cada pessoa que usará o CMS. Depois, acesse `https://SEU-SITE.netlify.app/admin/` e entre com GitHub.

A partir daí, os artigos publicados no painel são salvos no GitHub. O Netlify detecta as alterações, gera o site novamente e publica a nova versão. O CMS usa o backend GitHub do Decap com autenticação OAuth do Netlify; cada editor precisa ter acesso de escrita ao repositório.

## Executar localmente

1. Instale Node.js LTS e Git.
2. Abra a pasta do projeto no VS Code e escolha **Terminal → Novo Terminal**.
3. No terminal, execute `npm install` para instalar as dependências.
4. Execute `npm start` e abra no navegador o endereço local mostrado no terminal.

O painel `/admin/` precisa das configurações OAuth do GitHub e Netlify para autenticar editores.

## Criar artigos

No painel, preencha título, resumo, data, categorias, imagem opcional, texto alternativo e corpo do artigo. Marque **Rascunho** para manter um artigo fora do site. A listagem, a página individual e as páginas de categorias são geradas durante o build.

O artigo `content/blog/2026-11-03-escrita-clara.md` é um exemplo que pode ser editado ou removido.
=======
# Lyrian-Scribe
Site e blog da Lyrian Scribe
>>>>>>> origin/main
