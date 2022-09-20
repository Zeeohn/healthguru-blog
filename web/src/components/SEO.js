import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

function SEO(props) {
  const { site, images } = useStaticQuery(graphql`
    query SeoMetaData {
      site {
        siteMetadata {
          description
          title
          siteUrl
          twitterUsername
        }
      }
      images: file(absolutePath: { glob: "**/src/images/preview-icon.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 1200)
        }
      }
    }
  `);

  const location = useLocation();
  const seo = {
    title: props.title
      ? `${props.title} - ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    description: props.description || site.siteMetadata.description,
    images:
      props.images ??
      images?.childImageSharp?.gatsbyImageData?.images?.fallback?.src,
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
        content="health, fitness, healthy living, WhatsApp tv, blog, menstrual pain, exercise, health guru, healthguru"
      />
      <meta name="image" content={seo.images} />
      <meta property="og:image" content={seo.images} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${site?.siteMetadata?.siteUrl}${location.pathname}`}
      />
      <meta
        name="url"
        content={`${site?.siteMetadata?.siteUrl}${location.pathname}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.images} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
    </Helmet>
  );
}

export default SEO;
