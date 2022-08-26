import React from "react";
import LogoStyles from "./../styles/LogoStyles";
import logo from "./../images/logo-dark.png";

function Logo() {
  return (
    <LogoStyles to="/">
      <img src={logo} alt={"Health Guru logo"} />
    </LogoStyles>
  );
}

export default Logo;
