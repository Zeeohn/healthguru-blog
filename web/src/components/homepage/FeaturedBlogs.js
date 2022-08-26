import React from "react";
import { graphql, useStaticQuery } from "gatsby";

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          blogs {
            title
            id
            publishedAt
            categories {
              title
              slug {
                current
              }
            }
          }
        }
      }
    }
  `);
  console.log(data);
  return <div>FeaturedBlogs</div>;
}

export default FeaturedBlogs;
