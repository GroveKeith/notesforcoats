import { defineField, defineType } from 'sanity'

export const songwriter = defineType({
  name: 'songwriter',
  title: 'Songwriters',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Artist Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'year',
      title: 'Event Year',
      type: 'number',
    }),
  ],
})
