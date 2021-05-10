import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 4.5rem 2rem 2rem 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 9;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1.8rem;
    text-transform: uppercase;
    padding: 0.2rem 0;
    font-weight: 700;
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.primaryHover};
      transition: color 0.3s linear;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="#about">Sobre</a>
      <a href="#services">Serviços</a>
      <a href="#customers">Clientes</a>
      <a href="#support">Suporte</a>
      <a href="#blog">Blog</a>
      <a
        href="https://app.mappadealer.com.br/signin?returnUrl=%2Fapp%2Fdashboard"
        target="_blank"
      >
        Login
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
