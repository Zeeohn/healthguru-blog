import { GiNotebook } from 'react-icons/gi';
import { format } from 'date-fns';

export default {
  title: 'Blog Post',
  name: 'blog',
  type: 'document',
  icon: GiNotebook,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Add a main heading/Title',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description:
        'This will be added to your site link to uniquely identify posts',
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime',
      description: 'Choose current date and time',
    },
    {
      title: 'Category(ies)',
      name: 'category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'categories' }],
        },
      ],
      description: 'Choose or create a new category for this article',
    },
    {
      title: 'Article Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
      description: 'Choose the article author',
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
      description:
        'Choose a good image as this will be the image shown in previews',
    },
    {
      title: 'Article Excerpt',
      name: 'excerpt',
      type: 'excerptText',
      description: 'A short description or preview of the article',
    },
    {
      title: 'Article Body',
      name: 'body',
      type: 'textEditor',
      description: 'The main article body',
    },
  ],

  preview: {
    select: {
      image: 'coverImage',
      title: 'title',
      publishedAt: 'publishedAt',
    },
    prepare({ image, title, publishedAt }) {
      return {
        title,
        media: image,
        subtitle: publishedAt
          ? format(new Date(publishedAt), 'p, dd/MM/yyyy')
          : ' ',
      };
    },
  },
};
