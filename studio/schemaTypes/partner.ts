import { defineField, defineType } from 'sanity'

export const partner = defineType({
  name: 'partner',
  title: 'Our Partners',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Partner Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Partner Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'url',
      title: 'Website Link',
      type: 'url',
      description: 'The link users go to when they click the logo.',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'The sequence in which the images appear in the reader.',
    }),
  ],
})
