import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import PageSpace from "../components/PageSpace";
import { SingleCategoryStyles } from "../styles/category/SingleCategoryStyles";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import MyPortableText from "../components/MyPortableText";
import BlogGrid from "../components/blogs/BlogGrid";

export const query = graphql`
  query SingleCategory($id: String!) {
    sanityCategories(id: { eq: $id }) {
      title
      _rawDescription
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
    allSanityBlog(filter: { category: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
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
      }
    }
  }
`;

function SingleCategory({ data }) {
  const category = data.sanityCategories;
  const blogs = data.allSanityBlog.nodes;
  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO
            title={category.title}
            images={
              category?.coverImage?.asset?.gatsbyImageData?.images?.fallback
                ?.src
            }
          />
          <PageHeader title={category.title} className="pageHeader">
            <MyPortableText values={category._rawDescription} />
            <GatsbyImage
              image={category.coverImage.asset.gatsbyImageData}
              className="coverImage"
              alt={category.coverImage.alt}
            />
          </PageHeader>
          <BlogGrid blogs={blogs} />
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SingleCategory;
