import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { buildImageUrl } from 'cloudinary-build-url';

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
  const url = buildImageUrl(
    'https://res.cloudinary.com/dyxbrraat/image/upload/v1620932567/mapa/logo_y1v3ac.png',
    {
      cloud: {
        cloudName: 'dyxbrraat',
      },
    }
  );

  return (
    <NavLogo href="/#home">
      <LogoImg>
        <img src={url} alt="Mapa Dealer" />
      </LogoImg>
    </NavLogo>
  );
};

export default Logo;
