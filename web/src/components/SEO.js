import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

function SEO({ title, description, twitterUsername, images }) {
  const { site, image } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
          siteUrl
          twitterUsername
        }
      }
      image: file(
      absolutePath: { glob: "**/src/images/preview-icon.png}
      ) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 1200)
        }
      }
    }
  `);

  const location = useLocation();

  const seo = {
    title: title
      ? `${title} - ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    ogImage: images.image ?? image?.childImageSharp?.gatsbyImageData,
    twitterUsername: site.siteMetadata.twitterUsername,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta property="og:title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta
        name="keywords"
        content={"health, fitness, healthy living, WhatsApp tv, blog, menstrual pain, exercise, health guru, healthguru"}
      />
      <meta name="image" content={seo.ogImage} />
      <meta property="og:image" content={seo.ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${site?.siteMetadata?.siteUrl}${location.pathname}`} />
      <meta name="og:url" content={`${site?.siteMetadata?.siteUrl}${location.pathname}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.ogImage} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
    </Helmet>
  );
}

export default SEO;
