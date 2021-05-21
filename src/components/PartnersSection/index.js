import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import background from '../../assets/images/bgBenefits.png';
import SwiperCore, { Thumbs, Navigation, Autoplay } from 'swiper/core';

SwiperCore.use([Thumbs, Navigation, Autoplay]);

import img1 from '../../assets/images/logo.png';

const partners = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/dyxbrraat/image/upload/v1621515886/mapa/logos/Group_13_bmzlgu.png',
    title: 'Mapa Dealer',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dyxbrraat/image/upload/v1620931154/mapa/logos/disnove_qo7vab.png',
    title: 'Disnove',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/dyxbrraat/image/upload/v1621515854/mapa/logos/Sael_hu7pkf.png',
    title: 'Sael',
  },
];

import { ContainerCustom } from '../../styles/globalStyles';
import { Parallax } from 'react-parallax';

const InfoSec = styled(Parallax)`
  background: #fff;
  color: ${({ theme }) => theme.primaryDark};
  height: auto;
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
  margin-bottom: 5vh;
`;

const DescriptionText = styled(motion.p)`
  font-size: 16px;
  font-weight: ${({ enfasis }) => (enfasis ? '700' : '500')};
  color: ${({ theme }) => theme.colors.tertiary};
`;

const thumbBreakpoints = {
  960: {
    slidesPerView: 5,
    spaceBetween: 0,
  },
  720: {
    slidesPerView: 4,
    spaceBetween: 2,
  },
  540: {
    slidesPerView: 2,
    spaceBetween: 2,
  },
  320: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
};

const ImagePartner = styled(Image)`
  object-fit: contain;

  &:hover {
    cursor: pointer;
  }
`;

const Testimonials = styled.div`
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 10vh;
`;

const TestimonialTextWrapper = styled.div`
  max-width: 70%;
  text-align: center;
  margin: 0 auto;
`;

const PartnerInfo = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.primaryDark};
`;

const PartnerWrapper = styled.div`
  background-color: rgb(250, 250, 250, 0.5);
  padding: 10vh 10vh;
`;

const PartnerSection = () => {
  return (
    <div id="customers">
      <InfoSec blur={1} bgImage={background} strength={-150}>
        <ContainerCustom>
          <Row className="mb-5 mt-5">
            <Col lg="6" xs>
              <TitleSection fSize={'32px'}>
                <h2>Clientes</h2>
              </TitleSection>
              <DescriptionText>
                Saiba o que os nossos clientes estão achando da revolução
                digital que o Mappa oferece para os processos de venda das suas
                empresas.
              </DescriptionText>
            </Col>
          </Row>
          <Row>
            <Col xs lg="12">
              <Testimonials>
                <Swiper slidesPerView={1} spaceBetween={0} navigation>
                  {[1, 2, 3].map((item) => {
                    return (
                      <SwiperSlide key={item}>
                        <TestimonialTextWrapper>
                          <DescriptionText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariat
                          </DescriptionText>
                          <PartnerInfo>
                            <strong>NOME SOBRENOME</strong>, Cargo
                          </PartnerInfo>
                        </TestimonialTextWrapper>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Testimonials>
            </Col>
          </Row>
        </ContainerCustom>
        <PartnerWrapper>
          <ContainerCustom>
            <TitleSection fSize={'32px'}>
              <h2>Quem está com a gente</h2>
            </TitleSection>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={thumbBreakpoints}
            >
              {partners.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={100}
                      objectFit="contain"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ContainerCustom>
        </PartnerWrapper>
      </InfoSec>
    </div>
  );
};

export default PartnerSection;
