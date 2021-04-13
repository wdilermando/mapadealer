import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import img1 from '../../assets/images/img22.jpg';
import img2 from '../../assets/images/img28.jpg';
import img3 from '../../assets/images/img42.jpg';

const ImgSlider = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const HeroTitle = styled(motion.h2)`
  font-size: 44px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  position: absolute;
  top: calc(50% - 64px);
  text-align: center;
  width: 100%;
`;

const HeroSectionCarrousel = () => {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
        <ImgSlider src={img1} alt="sec slide" />
        <HeroTitle>CONDUZINDO PROCESSOS. POTENCIALIZANDO A GESTÃO.</HeroTitle>
      </Carousel.Item>
      <Carousel.Item>
        <ImgSlider src={img2} alt="sec slide" />
        <HeroTitle>VOCÊ JÁ OUVIU FALAR EM DIGITALIZAÇÃO DE JORNADA?</HeroTitle>
      </Carousel.Item>
      <Carousel.Item>
        <ImgSlider src={img3} alt="sec slide" />
        <HeroTitle>POTENCIALIZANDO A GESTÃO.</HeroTitle>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSectionCarrousel;
