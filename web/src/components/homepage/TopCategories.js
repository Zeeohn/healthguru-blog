import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import { SectionTitle } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import CategoryGrid from '../category/CategoryGrid';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          category {
            id
            title
            slug {
              current
            }
            _rawDescription(resolveReferences: { maxDepth: 10 })
          }
        }
      }
    }
  `);

  const categories = data.allSanityFeatured.nodes[0].category;

  return (
    <TopCategoriesStyles>
      <SectionTitle>Top Categories</SectionTitle>
      <ParagraphText className="info">
        The hottest topics in the health space right now! View articles related
        to these categories.
      </ParagraphText>
      <CategoryGrid category={categories} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
