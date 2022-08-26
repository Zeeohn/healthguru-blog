import React from "react";
import { FooterStyles } from "./../styles/FooterStyles";
import Logo from "./Logo";
import ParagraphText from "./typography/ParagraphText";
import { menu } from "./../constants/menu";
import { Link } from "gatsby";
import { SocialLinks } from "./../constants/SocialLinks";

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          lorem ipsum sndbfh shb fhasbdkhb ,asfbhdsakbdfjkbdsf jkdhsfnjkdsh
          fkjdsnf kjhsdnf kshdfj sn hdf nksajdhakj jhsajfhnsdjkfh jsfnjs.
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
          Made with <span style={{ color: "red" }}>❤</span> by{" "}
          <a href={"https://www.wa.me/2348143447979"}>
            <span style={{ color: "green", textDecoration: "underline" }}>
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
