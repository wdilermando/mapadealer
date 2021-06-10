import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import logo from '../../assets/images/logo.png'

const LogoImg = styled.div`
  width: 155px;
  height: 41px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

const NavLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const Logo = () => {
  

  return (
    <NavLogo href="/#home">
      <LogoImg>
        <img src={logo} alt="Mapa Dealer" />
      </LogoImg>
    </NavLogo>
  );
};

export default Logo;
