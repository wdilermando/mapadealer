import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import img1 from '../../assets/images/img22.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs } from 'swiper/core';

SwiperCore.use([Thumbs]);

const InfoSec = styled.div`
  background: #fff;
  color: #222;
  height: auto;
  padding-top: 10vh;
`;

const CardThumb = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  min-width: 250px;
  margin-bottom: 10vh;
  img: {
    width: 100%;
  }
`;

const TitleSection = styled(motion.h2)`
  font-weight: ${({ enfasis }) => (enfasis ? 'bolder' : 'normal')};
  margin-bottom: 5vh;
`;

const TextSmall = styled.small`
  color: ${({ destac }) => (destac ? '#222' : '#ccc')};
`;

const ThumbTitle = styled.h3`
  color: #222;
`;

const DescText = styled.p`
  color: #222;
  font-size: 13px;
  line-height: 14px;
`;

const newsArray = [
  {
    id: 1,
    title: 'Title 1',
    autor: 'Autor 1',
    postagem: '29/01/2021',
    conta: 'Mapa Dealer',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing eli.',
  },
  {
    id: 2,
    title: 'Title 2',
    autor: 'Autor 2',
    postagem: '29/02/2021',
    conta: 'Mapa Dealer',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing eli.',
  },
  {
    id: 3,
    title: 'Title 3',
    autor: 'Autor 3',
    postagem: '29/03/2021',
    conta: 'Mapa Dealer',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing eli.',
  },
  {
    id: 4,
    title: 'Title 4',
    autor: 'Autor 4',
    postagem: '29/04/2024',
    conta: 'Mapa Dealer',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing eli.',
  },
  {
    id: 5,
    title: 'Title 5',
    autor: 'Autor 5',
    postagem: '29/05/2021',
    conta: 'Mapa Dealer',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing eli.',
  },
];

const thumbBreakpoints = {
  960: {
    slidesPerView: 4,
    spaceBetween: 8,
  },
  720: {
    slidesPerView: 3,
    spaceBetween: 6,
  },
  540: {
    slidesPerView: 2,
    spaceBetween: 4,
  },
  320: {
    slidesPerView: 1,
    spaceBetween: 2,
  },
};

const NewsSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <InfoSec>
      <Container>
        <TitleSection enfasis>Notícias</TitleSection>
        <Swiper
          id="thumbs"
          thumbs={{ swiper: thumbsSwiper }}
          breakpoints={thumbBreakpoints}
        >
          {newsArray.map((item) => {
            return (
              <SwiperSlide onSwiper={setThumbsSwiper}>
                <CardThumb>
                  <img src={img1} alt="logo" />
                  <TextSmall destac>{item.autor}</TextSmall>
                  <ThumbTitle>{item.title}</ThumbTitle>
                  <TextSmall>{`Publicado por ${item.conta} - ${item.postagem}`}</TextSmall>
                  <DescText>{item.shortDescription}</DescText>
                </CardThumb>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </InfoSec>
  );
};

export default NewsSection;
