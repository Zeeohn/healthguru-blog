import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';

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
              guide to teach you how to eat right, adopt and live a healthy
              life.
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Explore blogs
            </Button>
            {/* <a
              href="https://wa.me/2349150823022?text=Hello%2C%20HealthGuruTv%20I%20will%20will%20like%20to%20join%20your%20TV%20and%20view%20your%20status%20My%20name%20is%20"
              target="_blank"
              rel="noreferrer"
            >
            </a> */}
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
