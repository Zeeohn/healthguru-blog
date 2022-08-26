require("dotenv").config("./.env");
const sanityConfig = require("./sanity-config");

module.exports = {
  siteMetadata: {
    title: `Health Guru Blog`,
    siteUrl: `https://www.healthgurutv.com`,
    description: `We are a blog and WhatsApp TV that advises on health related issues, physical and mental wellness and best health practices.`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...sanityConfig,
      },
    },
  ],
};
