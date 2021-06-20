import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { ContainerCustom } from '../../styles/globalStyles';
import { Parallax } from 'react-parallax';
import background from '../../assets/images/bgServices.png';
import Link from 'next/link';

SwiperCore.use([Pagination, Autoplay]);

const InfoSec = styled(Parallax)`
  background: #fff;
  color: ${({ theme }) => theme.colors.tertiary};
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
  span {
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
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TextSmall = styled.small`
  color: ${({ theme, destac }) =>
    destac ? theme.colors.primary : theme.colors.tertiary};
  font-weight: 500;
`;

const ThumbTitle = styled.h3`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 18px;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const DescText = styled.div`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 13px;
  line-height: 14px;
`;

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
  return (
    <div id="blog">
      <InfoSec blur={1} bgImage={background} strength={-100}>
        <ContainerCustom>
          <Row className="mb-4">
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
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                breakpoints={thumbBreakpoints}
                pagination={true}
                className="mySwiper"
              >
                {posts.map((item) => {
                  return (
                    <SwiperSlide key={item.id} zoom tag="div">
                      <Link href={`/blog/${item.slug}`}>
                        <CardThumb>
                          <span>
                            <Image
                              src={item.postImage}
                              alt={item.alt}
                              height={150}
                              width={300}
                              objectFit="cover"
                            />
                          </span>
                          <TextSmall destac>{item.category}</TextSmall>
                          <ThumbTitle>{item.title}</ThumbTitle>
                          <TextSmall>{`Publicado por ${item.author} - ${item.postDate}`}</TextSmall>
                          <DescText>{item.excerpt}</DescText>                          
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
