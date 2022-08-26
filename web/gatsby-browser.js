// fonts import
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/inter/500.css";
import Layout from "./src/components/Layout";
import React from "react";

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
