import React, { useContext } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import { SearchResultItemStyles } from '../../styles/search/SearchResultItemStyles';
import { Title } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';

import { SearchModalContext } from '../../context/SearchModalContext';

function BlogsSearchResultItem({ blog }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/blogs/${blog.slug.current}`}
      onClick={() => closeSearchModal()}
    >
      <GatsbyImage
        image={blog.coverImage.asset.gatsbyImageData}
        className="img"
        alt={blog.coverImage.alt}
      />
      <div>
        <Title className="title">{blog.title}</Title>
        <ParagraphText className=".publishedAtText">
          Published at=>{' '}
          {format(new Date(blog.publishedAt), 'p, MMMM dd, yyyy')}
        </ParagraphText>
      </div>
    </SearchResultItemStyles>
  );
}

function EventsSearchResultItem({ event }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/events/${event.slug.current}`}
      onClick={() => closeSearchModal()}
    >
      <GatsbyImage
        image={event.coverImage.asset.gatsbyImageData}
        className="img"
        alt={event.coverImage.alt}
      />
      <div>
        <Title className="title">{event.title}</Title>
        <ParagraphText className=".publishedAtText">
          Event Date/Time =>{' '}
          {format(new Date(event.publishedAt), 'p, MMMM dd, yyyy')}
        </ParagraphText>
      </div>
    </SearchResultItemStyles>
  );
}

function CategoriesSearchResultItem({ category }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/categories/${category.slug.current}`}
      onClick={closeSearchModal}
    >
      <Title className="title">{category.title}</Title>
    </SearchResultItemStyles>
  );
}

function AuthorsSearchResultItem({ author }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/authors/${author.slug.current}`}
      onClick={closeSearchModal}
    >
      <GatsbyImage
        image={author.profileImage.asset.gatsbyImageData}
        alt={author.profileImage.alt}
        className="authorProfileImg"
      />
      <Title className="title">{author.name}</Title>
    </SearchResultItemStyles>
  );
}

export {
  BlogsSearchResultItem,
  CategoriesSearchResultItem,
  EventsSearchResultItem,
  AuthorsSearchResultItem,
};
