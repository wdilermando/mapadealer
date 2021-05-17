import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ImgSlider = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: brightness(80%);
`;

const HeroTitle = styled(motion.h2)`
  font-size: 3em;
  font-weight: 800;
  color: white;
  text-transform: uppercase;
  position: absolute;
  top: calc(50% - 64px);
  text-align: center;
  width: 100%;
  white-space: pre-wrap;

  @media screen and (max-width: 450px) {
    font-size: 1.8em;
  }
`;

const HeroSectionCarrousel = () => {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
        <ImgSlider
          src={
            'https://res.cloudinary.com/dyxbrraat/image/upload/v1620931126/mapa/banners/b1_tshndo.png'
          }
          alt="first slide"
        />
        <HeroTitle>
          CONDUZINDO PROCESSOS.{'\n'}POTENCIALIZANDO A GESTÃO.
        </HeroTitle>
      </Carousel.Item>
      <Carousel.Item>
        <ImgSlider
          src={
            'https://res.cloudinary.com/dyxbrraat/image/upload/v1620931126/mapa/banners/b2_lrssi0.png'
          }
          alt="second slide"
        />
        <HeroTitle>
          VOCÊ JÁ OUVIU FALAR EM{'\n'}DIGITALIZAÇÃO DE JORNADA?
        </HeroTitle>
      </Carousel.Item>
      <Carousel.Item>
        <ImgSlider
          src={
            'https://res.cloudinary.com/dyxbrraat/image/upload/v1620931126/mapa/banners/b3_h5ek2a.png'
          }
          alt="third slide"
        />
        <HeroTitle>
          MAIS QUE UM SOFTWARE OU UM PROGRAMA:{'\n'}SOMOS UMA METODOLOGIA
        </HeroTitle>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSectionCarrousel;
