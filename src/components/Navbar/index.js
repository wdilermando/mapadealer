import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../Logo';
import { Nav, Navbar, NavDropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Burger from '../Burger';
import Menu from '../Menu';
import styled from 'styled-components';
import wpp from '../../assets/svg/support/wpp.svg';
import { LeadForm } from '..';
import { motion } from 'framer-motion';
import { APP_LOGIN, WHATSAPP_LINK } from '../../lib/constants';

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
  margin-right: 2em;
  @media screen and (max-width: 450px) {
    margin-right: 1em;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

const NavbarCustom = () => {
  const [open, setOpen] = useState(false);
  return (
    <Navbar className="bg-mapa px-4" expand="lg" sticky="top" >
  <Navbar.Brand href="#home"><Logo /> </Navbar.Brand>
  <Nav className="mx-auto">
       <div className="d-none d-sm-none d-md-none d-xl-block d-lg-block justify-content-center">
         <LeadForm inline />
       </div>
    </Nav>
  <div className="justify-content-end">
  <div className="d-flex justify-content-between align-items-center">

        <OverlayTrigger
             placement={'bottom'}
             overlay={
               <Tooltip id={`tooltip-bottom`}>
                 Fale conosco pelo WhatsApp
               </Tooltip>
             }
           >
             <WhatsappLink whileHover={{ scale: 1.15 }}>
              <a href={WHATSAPP_LINK} rel="noreferrer" target="_blank">
                 <Image src={wpp} alt="whatsapp button" width={30} height={30} />
               </a>
             </WhatsappLink>
           </OverlayTrigger>
           <LoginLink className="mr-3">
             <a href={APP_LOGIN} rel="noreferrer" target="_blank">
               Login
             </a>
           </LoginLink>
          <Burger open={open} setOpen={setOpen} />
           <Menu open={open} setOpen={setOpen} />
  </div>
  </div>
</Navbar>    
  );
};

export default NavbarCustom;
