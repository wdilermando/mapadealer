import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs } from 'swiper/core';
import { ContainerCustom } from '../../styles/globalStyles';
import { Parallax } from 'react-parallax';
import background from '../../assets/images/bgchange.png';
import Link from 'next/link';

SwiperCore.use([Thumbs]);

const InfoSec = styled(Parallax)`
  background: #fff;
  color: #222;
  height: auto;
  padding-top: 10vh;
  object-fit: contain;
`;

const CardThumb = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  min-width: 250px;
  margin-bottom: 10vh;
  cursor: pointer;
  img: {
    width: 100%;
  }
`;

const TitleSection = styled(motion.div)`
  h2 {
    font-weight: ${({ enfasis }) => (enfasis ? '800' : '600')};
    margin-bottom: 3vh;
    white-space: pre-wrap;
    font-size: ${({ fSize }) => fSize};
    line-height: 45px;
    color: #203663;
  }
`;

const TextSmall = styled.small`
  color: ${({ destac }) => (destac ? '#222' : '#ccc')};
`;

const ThumbTitle = styled.h3`
  color: #222;
  font-size: 18px;
  font-weight: 600;
`;

const DescText = styled.div`
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

const DescriptionText = styled(motion.p)`
  font-size: 16px;
  font-weight: ${({ enfasis }) => (enfasis ? '700' : '500')};
`;

const NewsSection = ({ posts }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div id="blog">
      <InfoSec blur={0} bgImage={background} strength={-100}>
        <ContainerCustom>
          <Row>
            <Col lg="10" xs>
              <TitleSection fSize={'32px'}>
                <h2>Blog</h2>
              </TitleSection>
              <DescriptionText>
                Aqui, vamos manter você atualizado sobre as principais notícias
                relacionadas ao Mappa e à tecnologia utilizada no processo de
                vendas de empresas no meio digital. Acompanhe nosso blog e fique
                por dentro de tudo!
              </DescriptionText>
            </Col>
          </Row>
          <Row>
            <Col xs lg="12">
              <Swiper
                id="thumbs"
                thumbs={{ swiper: thumbsSwiper }}
                breakpoints={thumbBreakpoints}
              >
                {posts.map((item) => {
                  return (
                    <SwiperSlide key={item.id} zoom tag="div">
                      <Link href={`/blog/${item.slug}`}>
                        <CardThumb>
                          <img src={item.postImage} alt="postImage" />
                          <TextSmall destac>{item.author}</TextSmall>
                          <ThumbTitle>{item.title}</ThumbTitle>
                          <TextSmall>{`Publicado por ${item.author} - ${item.postDate}`}</TextSmall>
                          <DescText
                            dangerouslySetInnerHTML={{
                              __html: `${item.excerpt}`,
                            }}
                          />
                        </CardThumb>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Col>
          </Row>
        </ContainerCustom>
      </InfoSec>
    </div>
  );
};

export default NewsSection;
