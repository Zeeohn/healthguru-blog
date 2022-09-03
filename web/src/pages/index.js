import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import SEO from '../components/SEO';
import FeaturedBlogs from '../components/homepage/FeaturedBlogs';
import TopCategories from '../components/homepage/TopCategories';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <HeroSection />
    <div className="container">
      <FeaturedBlogs />
      <TopCategories />
    </div>
  </>
);

export default IndexPage;
