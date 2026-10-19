import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    pattern: '*/index.{md,mdx}',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      year: z.number().int(),
      yearEnd: z.number().int().optional(),
      status: z.enum(['released', 'in-development', 'prototype', 'archived']),
      tags: z.array(z.string()).default([]),
      cover: image(),
      coverAlt: z.string(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

export const collections = { projects };
