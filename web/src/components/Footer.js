import React from 'react';
import { Link } from 'gatsby';
import { FooterStyles } from '../styles/FooterStyles';
import ParagraphText from './typography/ParagraphText';
import { menu } from '../constants/menu';
import { SocialLinks } from '../constants/SocialLinks';
import logo from '../images/logo-dark.png';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Health Guru logo" className="footerImage" />
        </Link>
        <ParagraphText className="footer__text">
          Get to know how to live and adopt a healthy lifestyle, the best
          practices for your health, eating habits and physical wellbeing. You
          can know more by joining our WhatsApp TV.
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {SocialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          Made with <span style={{ color: 'red' }}>❤</span> by{' '}
          <a href="https://wa.me/message/ACG6T4NMBL2EE1" target="_blank"
              rel="noreferrer">
            <span style={{ color: 'green', textDecoration: 'underline', fontWeight: '500' }}>
              Z-CODES
            </span>
          </a>
          . All rights reserved @ {new Date().getFullYear()}.
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
