# Astro Starter Kit: Minimal

```
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── astro.config.mjs
├── package.json
├── package-lock.json
├── public
│   ├── astro.svg
│   └── favicon.svg
├── README.md
├── src
│   ├── components
│   │   ├── Articles.astro
│   │   ├── Certificates.astro
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   └── Intro.astro
│   ├── env.d.ts
│   ├── layouts
│   │   └── Layout.astro
│   ├── lib
│   │   ├── getArticles.ts
│   │   ├── getCertificates.ts
│   │   └── getExperience.ts
│   └── pages
│       └── index.astro
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## ☁️ Deploy an Astro site
- [Adding an Adapter](https://docs.astro.build/ja/guides/integrations-guide/cloudflare/)
- [See official docs.](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
```bash
npx astro add cloudflare
```
