import React, { useState } from 'react';
import Logo from '../Logo';
import { Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Burger from '../Burger';
import Menu from '../Menu';
import styled from 'styled-components';
import wpp from '../../assets/svg/wpp.svg';
import { LeadForm } from '..';
import { motion } from 'framer-motion';
import { APP_LOGIN } from '../../lib/constants';

const LoginLink = styled.span`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.primary};

  a {
    &:hover {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const WhatsappLink = styled(motion.span)`
  margin-right: 1em;
  img {
    width: 30px;
    height: 30px;
  }
`;

const WrapperTest = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

const NavbarCustom = () => {
  const [open, setOpen] = useState(false);
  return (
    <Navbar
      className="bg-mapa justify-content-between align-items-center px-4"
      fixed="top"
      collapseOnSelect
    >
      <Navbar.Brand
        href="/"
        className="d-none d-sm-none d-md-none d-xl-block d-lg-block"
      >
        <Logo />
      </Navbar.Brand>
      <div className="d-none d-sm-none d-md-none d-xl-block d-lg-block">
        <LeadForm />
      </div>
      <WrapperTest>
        <div className="d-flex justify-content-between align-items-center">
          <Navbar.Brand
            href="/"
            className="d-block d-sm-block d-md-block d-xl-none d-lg-none"
          >
            <Logo />
          </Navbar.Brand>
          <OverlayTrigger
            placement={'bottom'}
            overlay={
              <Tooltip id={`tooltip-bottom`}>
                Fale conosco pelo WhatsApp
              </Tooltip>
            }
          >
            <WhatsappLink whileHover={{ scale: 1.15 }}>
              <img src={wpp} />
            </WhatsappLink>
          </OverlayTrigger>

          <LoginLink className="mr-3">
            <a href={APP_LOGIN} target="_blank">
              Login
            </a>
          </LoginLink>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <div className="d-block d-sm-block d-md-block d-xl-none d-lg-none mt-2">
          <LeadForm />
        </div>
      </WrapperTest>
    </Navbar>
  );
};

export default NavbarCustom;
