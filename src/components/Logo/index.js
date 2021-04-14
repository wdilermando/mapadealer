import React from "react";
import styled from "styled-components";
import LogoSrc from "./../../assets/images/logoMapa.png";
import Link from "next/link";

const LogoImg = styled.div`
  width: 150px;
  height: 50px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`;

const NavLogo = styled(Link)`
  color: #fff;
  /* justify-self: flex-start; */

  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const Logo = () => {
  return (
    <NavLogo href="/">
      <LogoImg>
        <img src={LogoSrc} alt="Logo Image" />
      </LogoImg>
    </NavLogo>
  );
};

export default Logo;
