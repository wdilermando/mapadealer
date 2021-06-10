import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import img1 from '../../assets/images/banners/b1.png';
import img2 from '../../assets/images/banners/b2.png'
import img3 from '../../assets/images/banners/b3.png'

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
    font-size: 1.5em;
  }
`;

const HeroSectionCarrousel = () => {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
        <ImgSlider
          src={img1}
          alt="first slide"
        />
        <HeroTitle>
          CONDUZINDO PROCESSOS.{'\n'}POTENCIALIZANDO A GESTÃO.
        </HeroTitle>
      </Carousel.Item>
      <Carousel.Item>
        <ImgSlider
          src={img2}
          alt="second slide"
        />
        <HeroTitle>
          VOCÊ JÁ OUVIU FALAR EM{'\n'}DIGITALIZAÇÃO DE JORNADA?
        </HeroTitle>
      </Carousel.Item>
      <Carousel.Item>
        <ImgSlider
          src={img3}
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
