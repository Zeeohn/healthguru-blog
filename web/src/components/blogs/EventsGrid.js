import React from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import EventsItems from './EventsItems';

function EventsGrid({ events }) {
  return (
    <BlogGridStyles>
      {events &&
        events?.map((event) => (
          <EventsItems
            key={event.id}
            title={event.title}
            path={event.slug.current}
            image={{
              imageData: event.coverImage.asset.gatsbyImageData,
              altText: event.coverImage.alt,
            }}
            publishedAt={event.publishedAt}
          />
        ))}
    </BlogGridStyles>
  );
}

export default EventsGrid;
