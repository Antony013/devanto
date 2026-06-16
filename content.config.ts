import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.json',
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        type: z.string(),
        services: z.array(z.string()),
        description: z.string(),
        cover: z.string(),
        gallery: z.array(z.string()),
        technologies: z.array(z.string()),
        year: z.number(),
        time: z.string(),
        website: z.string(),
        production: z.boolean()
      })
    })
  }
})
