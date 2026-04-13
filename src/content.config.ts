import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const morceaux = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/morceaux' }),
  schema: z.object({
    title: z.string(),
    audioFile: z.string(),
  }),
});

export const collections = { morceaux };
