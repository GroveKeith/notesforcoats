import { defineField, defineType } from 'sanity'

export const gallery = defineType({
  name: 'galleryImage',
  title: 'Event Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
