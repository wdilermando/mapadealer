import React, { useState } from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs, Navigation } from 'swiper/core';

SwiperCore.use([Thumbs, Navigation]);
import img1 from '../../assets/images/logo.png';

const InfoSec = styled.div`
  background: #fff;
  color: #222;
  height: auto;
`;

const TitleSection = styled(motion.h2)`
  font-weight: ${({ enfasis }) => (enfasis ? 'bolder' : 'normal')};
  margin-bottom: 5vh;
`;

const thumbBreakpoints = {
  960: {
    slidesPerView: 5,
    spaceBetween: 0,
  },
  720: {
    slidesPerView: 3,
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

const ImagePartner = styled.img`
  width: 200px;
  filter: grayscale(1) brightness(1);

  &:hover {
    filter: none;
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
  color: #222;
`;

const PartnerSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <InfoSec>
      <Container>
        <Row>
          <Testimonials>
            <Swiper slidesPerView={1} spaceBetween={0} navigation>
              {[1, 2, 3].map((item) => {
                return (
                  <SwiperSlide>
                    <TestimonialTextWrapper>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariat
                      </p>
                      <PartnerInfo>
                        <strong>NOME SOBRENOME</strong>, Cargo
                      </PartnerInfo>
                    </TestimonialTextWrapper>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Testimonials>
        </Row>
        <Row>
          <Col>
            <div className="mb-5 mt-3">
              <TitleSection enfasis>Quem está com a gente</TitleSection>
              <Swiper
                id="thumbs"
                thumbs={{ swiper: thumbsSwiper }}
                breakpoints={thumbBreakpoints}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                  return (
                    <SwiperSlide onSwiper={setThumbsSwiper}>
                      <ImagePartner src={img1} alt="logo" width="200px" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </InfoSec>
  );
};

export default PartnerSection;
