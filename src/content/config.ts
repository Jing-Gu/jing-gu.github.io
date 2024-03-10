import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		// Transform string to Date object
		date: z.coerce.date(),
		tags: z.array(z.string()).optional()
	}),
});

const projectCollection = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		imgSrc: z.string(),
		tags: z.array(z.string()).optional()
	}),
});

export const collections = {
	blog: blogCollection,
	project: projectCollection
};
