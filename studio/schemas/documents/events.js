import { BsCalendar2Event } from 'react-icons/bs';
import { format } from 'date-fns';

export default {
  title: 'Events',
  name: 'events',
  type: 'document',
  icon: BsCalendar2Event,
  fields: [
    {
      title: 'Event Name',
      name: 'title',
      type: 'string',
      description: 'The event title/theme/topic or type',
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
        'This will be added to your site link to uniquely identify events',
    },
    {
      title: 'Event Date and Time',
      name: 'publishedAt',
      type: 'datetime',
      description: 'Choose the event date and time',
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
      description: 'Upload the graphics design or advert for the event',
    },
    {
      title: 'Event Description / Details',
      name: 'body',
      type: 'textEditor',
      description:
        'Provide a description of this event, including the speakers and their pictures, location / link, etc.',
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
          ? format(new Date(publishedAt), ' p, dd/MM/yyyy')
          : ' ',
      };
    },
  },
};
