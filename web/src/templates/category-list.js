import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import PageSpace from '../components/PageSpace';
import PageHeader from '../components/PageHeader';
import CategoryGrid from '../components/category/CategoryGrid';
import Pagination from '../components/Pagination';

export const CategoryListQuery = graphql`
  query categoriesQuery($limit: Int!, $offset: Int!) {
    allSanityCategories(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;

function CategoryList({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const categories = data.allSanityCategories.nodes;
  return (
    <>
      <SEO title="Categories" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="All Blog Categories"
            description="Looking for a specific topic? Checkout our categories to see the list of articles related to that specific topic!"
          />
          <CategoryGrid category={categories} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/categories"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default CategoryList;
