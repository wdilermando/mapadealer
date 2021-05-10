import React, { useState } from 'react';
import Logo from '../Logo';
import { Navbar } from 'react-bootstrap';
import Burger from '../Burger';
import Menu from '../Menu';
import styled from 'styled-components';

const LoginLink = styled.span`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8em;
  color: #203663;

  a {
    &:hover {
      text-decoration: none;
      color: #203663;
    }
  }
`;

const NavbarCustom = () => {
  const [open, setOpen] = useState(false);
  return (
    <Navbar
      className="bg-mapa justify-content-between align-items-center pr-5 pl-5"
      fixed="top"
    >
      <Navbar.Brand href="#home">
        <Logo />
      </Navbar.Brand>
      <div className="d-flex justify-content-around align-items-center">
        <LoginLink className="mr-5">
          <a
            href="https://app.mappadealer.com.br/signin?returnUrl=%2Fapp%2Fdashboard"
            target="_blank"
          >
            Login
          </a>
        </LoginLink>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarCustom;
