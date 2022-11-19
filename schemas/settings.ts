import { CogIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    {
      name: 'title',
      description: 'This field is the title of your blog.',
      title: 'Title',
      type: 'string',
      initialValue: 'Blog.',
      validation: (rule) => rule.required(),
    },
    {
      name: 'subtitle',
      description: 'This field is the subtitle of your blog.',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Subtitle',
      validation: (rule) => rule.required(),
    },
  ],
})
