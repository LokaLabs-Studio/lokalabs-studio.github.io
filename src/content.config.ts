import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const DOC_KINDS = ['privacy', 'terms', 'delete-data'] as const;
export type DocKind = (typeof DOC_KINDS)[number];

const hex = z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'expected #RRGGBB');

const apps = defineCollection({
  loader: glob({
    base: './src/content/apps',
    pattern: '*/index.md',
    generateId: ({ entry }) => entry.split('/')[0]!,
  }),
  schema: ({ image }) =>
    z
      .object({
        name: z.string(),
        wordmark: z.object({ heavy: z.string(), light: z.string() }),
        packageId: z.string().regex(/^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)+$/),
        tagline: z.string().max(80),
        description: z.string().max(160),
        category: z.string(),
        status: z.enum(['coming-soon', 'live']),
        playStoreUrl: z.url().optional(),
        order: z.number().int(),
        theme: z.object({
          bg: hex,
          surface: hex,
          border: hex,
          text: hex,
          textSecondary: hex,
          accent: hex,
          onAccent: hex,
        }),
        icon: image(),
        iconAlt: z.string(),
        featureGraphic: image().optional(),
        featureGraphicAlt: z.string().optional(),
        facts: z.array(z.string()).min(1).max(4),
        docs: z.array(z.enum(DOC_KINDS)).nonempty(),
      })
      .refine((d) => d.status !== 'live' || d.playStoreUrl, {
        path: ['playStoreUrl'],
        message: 'live apps need a playStoreUrl',
      }),
});

const legal = defineCollection({
  loader: glob({ base: './src/content/legal', pattern: '*/*.md' }),
  schema: z.object({
    title: z.string(),
    app: reference('apps').optional(),
    kind: z.enum([...DOC_KINDS, 'website']),
    version: z.string().regex(/^\d+\.\d+$/),
    updated: z.coerce.date(),
    description: z.string().max(160),
    summary: z.array(z.string()).min(2).max(6),
    changes: z
      .array(z.object({ version: z.string(), date: z.coerce.date(), note: z.string() }))
      .default([]),
  }),
});

const faq = defineCollection({
  loader: glob({ base: './src/content/faq', pattern: '*/*.md' }),
  schema: z.object({
    question: z.string(),
    group: z.enum(['studio', 'liftlab']),
    order: z.number(),
  }),
});

export const collections = { apps, legal, faq };
