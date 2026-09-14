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
Frontmatter is validated by `src/content.config.ts`. `date` (month/year shown), optional
`updated`, `category` and
`status` (e.g. `Research`, `Under review · ACC 2026`) fill the meta line on cards
and article headers. Entries with `draft: true` show in `npm run dev` but are
excluded from the production build.

## Design notes

- **Phase portrait** (`src/components/PhasePortrait.astro`): live Van der Pol
  trajectory over its vector field. It centres the limit cycle in the element
  marked `data-pp-anchor` inside the nearest `data-pp-surface`.
- **Motion** (`src/lib/spring.ts`): every transition uses one spring step
  response baked into a CSS `linear()` easing (`--ease-spring`, ζ = 1, critically damped).
  The footer ζ slider regenerates it at runtime.
- **Tree** (`src/components/TreeTracker.astro`): on the home page the phase
  portrait's head leaves the loop on scroll, following its own trajectory into a
  spine through the work section. On the spine the head steps one project at a
  time: a cover entering the bottom of the viewport calls the head to its branch,
  the branch draws, the cover unfolds, then its text. The card nearest the
  reading line stays in focus while the others recede.
- **Résumé link** appears in the header automatically once `public/resume.pdf` exists.
- `public/og.png` is the default social preview; project pages use their cover.

Keep video loops small (under ~5 MB, WebM/MP4). Longer videos belong on an
external host and get embedded.
