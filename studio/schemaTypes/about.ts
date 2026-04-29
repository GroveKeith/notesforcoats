import { defineField, defineType } from 'sanity'

export const about = defineType({
  name: 'aboutReader',
  title: 'About Reader Images',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'e.g., "About Notes for Coats - Page 1"',
    }),
    defineField({
      name: 'infoSheetImage',
      title: 'InfoSheet Image',
      type: 'image',
      description: 'Upload the InfoSheet JPEG/PNG here.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'The sequence in which the images appear in the reader.',
    }),
  ],
})
