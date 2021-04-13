import React, { useState } from 'react';
import Logo from '../Logo';
import { Container, Navbar } from 'react-bootstrap';
import Burger from '../Burger';
import Menu from '../Menu';

const NavbarCustom = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Navbar
        className="bg-light justify-content-between align-items-center"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavbarCustom;
