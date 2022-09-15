import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { format } from "date-fns";
import { FiCalendar } from "react-icons/fi";
import { SingleBlogStyles } from "../styles/blog/SingleBlogStyles";
import SEO from "../components/SEO";
import PageSpace from "../components/PageSpace";
import { Title } from "../components/typography/Title";
import ParagraphText from "../components/typography/ParagraphText";
import MyPortableText from "../components/MyPortableText";

export const eventQuery = graphql`
  query SingleEventQuery($id: String!) {
    sanityEvents(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
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
`;

function SingleEvent({ data }) {
  const event = data.sanityEvents;

  return (
    <SingleBlogStyles>
      <SEO
        title={event.title}
        images={event.coverImage.asset.gatsbyImageData}
      />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <div className="blog-header">
            <GatsbyImage
              image={event.coverImage.asset.gatsbyImageData}
              alt={event.coverImage.alt}
              className="blog-cover-image"
            />
            <Title className="title">{event.title}</Title>
            <ParagraphText className="publishedAt">
              <FiCalendar /> Event Date:{" "}
              {format(new Date(event.publishedAt), "p, MMM dd yyyy")}
            </ParagraphText>
          </div>
          <hr className="hr" />
          <div className="body">
            <MyPortableText values={event._rawBody} />
          </div>
        </div>
      </PageSpace>
    </SingleBlogStyles>
  );
}

export default SingleEvent;
