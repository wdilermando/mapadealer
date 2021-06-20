import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import background from '../../assets/images/bgBenefits.png';
import SwiperCore, { Thumbs, Navigation, Autoplay } from 'swiper/core';

SwiperCore.use([Thumbs, Navigation, Autoplay]);

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

// const thumbBreakpoints = {
//   960: {
//     slidesPerView: 5,
//     spaceBetween: 0,
//   },
//   720: {
//     slidesPerView: 4,
//     spaceBetween: 2,
//   },
//   540: {
//     slidesPerView: 2,
//     spaceBetween: 2,
//   },
//   320: {
//     slidesPerView: 1,
//     spaceBetween: 0,
//   },
// };

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

  strong {
    text-transform: uppercase;
  }
`;

const PartnerWrapper = styled.div`
  background-color: rgb(250, 250, 250, 0.5);
  padding: 10vh 10vh;

  @media screen and (max-width: 450px) {
    padding: 2vh 2vh;
  }
`;

const PartnerImages = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }

  img {
    filter: grayscale(1) brightness(1.7) contrast(0.2) saturate(0.7);
    &:hover {
      filter: none;
    }
  }
`;

const PartnerSection = ({testimonials, partners}) => {
  return (
    <div id="customers">
      <InfoSec blur={1} bgImage={background} strength={-150}>
        {testimonials && (
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
                    {testimonials.map((item) => {
                      return (
                        <SwiperSlide key={item.id}>
                          <TestimonialTextWrapper>
                            <DescriptionText>{item.conteudo}
                            </DescriptionText>
                            <PartnerInfo>
                              <strong>{item.nomeCliente}</strong>, {item.cargoCliente}
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
        )}
        <PartnerWrapper>
          <ContainerCustom>
            <TitleSection fSize={'32px'}>
              <h2>Quem está com a gente</h2>
            </TitleSection>
            <Row className="justify-content-md-center">
              <Col lg="8" xs="12">
                <PartnerImages>
                  {partners.map((item) => {
                    return (
                      <Image
                        key={item.id}
                        src={item.logo.url}
                        alt={item.nomeCliente}
                        width={200}
                        height={100}
                        objectFit="contain"
                      />
                    );
                  })}
                </PartnerImages>
              </Col>
            </Row>
          </ContainerCustom>
        </PartnerWrapper>
      </InfoSec>
    </div>
  );
};

export default PartnerSection;
