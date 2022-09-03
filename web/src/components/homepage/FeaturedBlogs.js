import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import { SectionTitle } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import BlogGrid from '../blogs/BlogGrid';

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          blogs {
            title
            id
            publishedAt
            category {
              title
              slug {
                current
              }
            }
            coverImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const featuredBlogs = data.allSanityFeatured.nodes[0].blogs;

  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Featured Blogs</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Our featured blogs for the week, which includes articles that will help
        you get through this week with a healthy state of mind and body.
      </ParagraphText>
      <BlogGrid blogs={featuredBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;
