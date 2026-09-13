# Site Plan

Astro 7 + MDX site for long-form project write-ups, hosted at `https://liami16.github.io`.
The résumé covers the at-a-glance view; this site goes in depth.

## Done
- Astro scaffold with MDX, sitemap, image optimization
- Content collection: `src/content/projects/<slug>/index.mdx` (schema in `src/content.config.ts`)
- GitHub Actions deploy workflow (`.github/workflows/deploy.yml`)
- Design system: Newsreader / Geist / Geist Mono, one accent, light + dark themes with toggle
- Home: phase-portrait hero, project card grid with category/status meta
- Post layout: sticky TOC, reading progress, figure/table/quote/code styles (dual Shiki themes), next-project link
- Motion: ζ-parameterized spring easing, staged intro, scroll-driven card reveals, card → article view-transition morph
- Home tree: the hero trajectory continues into a spine; projects grow off it as the head arrives
- Tonal depth: grain, hero spotlight, deepening section tones, cover-coloured glows
- Fluid sizing: root type and page width scale on large screens; hero sized by viewport height
- Default OG image, favicon + apple-touch-icon, 404 page, reduced-motion fallbacks

## 1. Content
- [ ] Finish write-ups and flip `draft: false` — **every project is still a draft, so production shows none**
- [ ] Real covers for `algp-blooms` and `trading-utils` (currently flat placeholders)
- [ ] Gather screenshots, short screen recordings (under ~5 MB), diagrams
- [ ] Add `public/resume.pdf` (header link appears automatically)

## 2. Next motion / media ideas
- [ ] Live interactive figure covers (start with risk-metrics collision cone)
- [ ] Scroll-stepped figures inside write-ups (pinned figure advances with the text)
- [ ] Hover-to-play cover loops once short videos exist
- [ ] Verify performance on a slow phone

## 3. Launch

### Creating the repo and pushing
Wait until at least one real project is written. `gh` is authenticated as `LiamI16`.

```sh
git add -A && git commit -m "Initial site"
gh repo create LiamI16/liami16.github.io --public --source=. --push
gh api -X POST repos/LiamI16/liami16.github.io/pages -f build_type=workflow
```

The last command sets Pages to deploy from GitHub Actions (or do it in repo Settings → Pages → Source: GitHub Actions).
The push triggers the deploy workflow; the site is live at `https://liami16.github.io` in a few minutes.
