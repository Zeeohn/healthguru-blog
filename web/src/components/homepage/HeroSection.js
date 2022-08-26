import React from "react";
import { HeroSectionStyles } from "./../../styles/homePage/HeroSectionStyles";
import ParagraphText from "./../typography/ParagraphText";
import Button from "./../buttons/Button";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">
              We care about your health and wellness!
            </h1>
            <ParagraphText className="hero__text">
              In a world where sickness and diseases is rampant, you need a
              guide to teach you on how to live a healthy life and show you how
              to do it.
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Explore blogs
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/health1.png"
              alt="healthy foods"
              placeholder="blurred"
              objectPosition=" 50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
