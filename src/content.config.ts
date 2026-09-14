import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/index.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      // Month/year shown on cards and articles; also orders the tree (newest first after featured).
      date: z.coerce.date(),
      // Optional: shown on the article as "Updated <month year>" for write-ups that change over time.
      updated: z.coerce.date().optional(),
      stack: z.array(z.string()),
      cover: image(),
      coverAlt: z.string(),
      // Short labels shown in the card/header meta line, e.g. "Research", "Under review · ACC 2026".
      category: z.string().optional(),
      status: z.string().optional(),
      repo: z.url().optional(),
      demo: z.url().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
