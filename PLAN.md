# Site Plan

Astro 7 + MDX site for long-form project write-ups, hosted at `https://liami16.github.io`.
The résumé covers the at-a-glance view; this site goes in depth.

## Done
- Astro scaffold with MDX, sitemap, image optimization
- Content collection: `src/content/projects/<slug>/index.mdx` (schema in `src/content.config.ts`)
- Home page (`/`), project pages (`/projects/<slug>/`), base layout with meta/OG tags
- `<Video>` component, reduced-motion CSS
- GitHub Actions deploy workflow (`.github/workflows/deploy.yml`)
- Draft placeholder: `src/content/projects/example-project/` (delete once a real project exists)

## 1. Content
- [ ] List 3–6 projects in priority order (name, one-liner, repo, demo, available media)
- [ ] Gather screenshots, short screen recordings (under ~5 MB), diagrams
- [ ] Write each post: problem → approach → hardest part → results → what I'd change
- [ ] Add `public/resume.pdf`

## 2. Design
- [ ] Pick a visual direction (type, color, dark/light); mock 2–3 options first
- [ ] Home: short intro + project card grid with covers and hover states
- [ ] Post layout: readable measure, captions, full-bleed media, table of contents

## 3. Motion & media
- [ ] Page transitions: card morphs into post header (`ClientRouter`)
- [ ] CSS scroll-driven reveals/progress (no library)
- [ ] Components as needed: before/after slider, step diagram, YouTube embed, interactive islands
- [ ] Verify reduced-motion and performance on a slow phone

## 4. Launch
- [ ] Default OG image, favicon, 404 page

### Creating the repo and pushing
Wait until at least one real project is written. `gh` is authenticated as `LiamI16`.

```sh
git add -A && git commit -m "Initial site"
gh repo create LiamI16/liami16.github.io --public --source=. --push
gh api -X POST repos/LiamI16/liami16.github.io/pages -f build_type=workflow
```

The last command sets Pages to deploy from GitHub Actions (or do it in repo Settings → Pages → Source: GitHub Actions).
The push triggers the deploy workflow; the site is live at `https://liami16.github.io` in a few minutes.
