import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import { BlogItemStyles } from '../../styles/blog/BlogItemStyles';
import { Title } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';

function EventsItem({ title, path, image, publishedAt }) {
  return (
    <BlogItemStyles>
      <Link to={`/events/${path}`}>
        <GatsbyImage
          image={image.imageData}
          alt={image.altText}
          className="img"
        />
      </Link>
      <Link to={`/events/${path}`}>
        <Title>{title}</Title>
      </Link>
      {publishedAt && (
        <ParagraphText className="publishedAt">
          Event Date: {format(new Date(publishedAt), 'p, MMMM dd, yyyy')}
        </ParagraphText>
      )}
    </BlogItemStyles>
  );
}

export default EventsItem;
