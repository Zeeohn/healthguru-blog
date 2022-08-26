import React from "react";
import HeroSection from "./../components/homepage/HeroSection";
import SEO from "./../components/SEO";
import FeaturedBlogs from "./../components/homepage/FeaturedBlogs";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <HeroSection />
    <div className="container">
      <FeaturedBlogs />
    </div>
    ;
  </>
);

export default IndexPage;
