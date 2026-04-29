import { defineField, defineType } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroH1',
      title: 'Hero Headline',
      type: 'string',
      description: 'The main title (e.g., "Notes for Coats\'")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroH2',
      title: 'Hero Subheadline',
      type: 'string',
      description: 'The "5 Years of Stories..." text',
    }),
    defineField({
      name: 'heroP',
      title: 'Hero Paragraph',
      type: 'text',
      description: 'The short description about the event and the distillery.',
      validation: (Rule) => Rule.max(200).warning('Keep it concise for better mobile readability.'),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true, // Allows you to center the focal point of the background
      },
    }),
  ],
})
