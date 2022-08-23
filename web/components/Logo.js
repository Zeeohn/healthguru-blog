import React from 'react';
import LogoStyles from './../src/styles/LogoStyles';
import logo from './../src/images/logo.png';


function Logo() {
  return (
    <LogoStyles to='/'>
        <img src={logo} alt={'Health Guru logo'} />
    </LogoStyles>
  )
}

export default Logo;