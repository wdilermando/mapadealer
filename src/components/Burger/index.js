import React from 'react';
import { bool, func } from 'prop-types';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledBurger = styled(motion.button)`
  position: relative;
  /* top: 1.8rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media screen and (max-width: 768px) {
    right: 2rem;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: ${({ theme }) => theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
      whileHover={{ scale: 1.15 }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
