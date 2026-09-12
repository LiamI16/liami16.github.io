# liami16.github.io

Personal project site built with [Astro](https://astro.build) and MDX, deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Add a project

Create `src/content/projects/<slug>/index.mdx` with a `cover` image beside it.
Frontmatter is validated by `src/content.config.ts`. Entries with `draft: true`
show in `npm run dev` but are excluded from the production build.

Keep video loops small (under ~5 MB, WebM/MP4). Longer videos belong on an
external host and get embedded.
