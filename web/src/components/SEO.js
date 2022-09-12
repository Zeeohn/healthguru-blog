import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

function SEO({ title, description }) {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
          image
          twitterUsername
          siteUrl
        }
      }
    }
  `);

  const seo = {
    title: title
      ? `${title} - ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    image: `${siteUrl}${site.siteMetadata.image}`,
    twitterUsername: site.siteMetadata.twitterUsername,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta property="og:title" content={seo.title} />
      <meta name="description"  property="og:description" content={seo.description} />
      <meta
        name="keywords"
        content={"health, fitness, healthy living, WhatsApp tv, blog, menstrual pain, exercise, health guru, healthguru"}
      />
      <meta name="image" property="og:image" content={seo.image} />
      <meta property="og:type" content={"website"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
    </Helmet>
  );
}

export default SEO;
