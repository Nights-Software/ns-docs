import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';
import { groups } from '../tools/pages.mjs';
import { entryId } from './entry-id.mjs';

const groupIds = groups.map(g => g.id) as [string, ...string[]];

export const collections = {
  // Relabels Starlight's own UI strings (src/content/i18n/en-GB.json).
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
  docs: defineCollection({
    loader: docsLoader({ generateId: entryId }),
    schema: docsSchema({
      extend: ({ image }) => z.object({
        group: z.enum(groupIds).optional(),
        store: z.url().optional(),
        video: z.url().optional(),
        cover: image().optional(),
        showCover: z.boolean().default(false),
      }),
    }),
  }),
};
