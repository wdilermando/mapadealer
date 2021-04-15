import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import img1 from '../../assets/images/img36.jpg';
import img2 from '../../assets/images/mapa.png';

const InfoSec = styled.div`
  background: #fff;
  color: #222;
  height: auto;
`;

const ImgSideSection = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

const TitleSection = styled(motion.h2)`
  font-weight: ${({ enfasis }) => (enfasis ? 'bolder' : 'normal')};
  margin-bottom: 5vh;
  text-align: left;
`;

const InfoSection2 = () => {
  return (
    <InfoSec>
      <Row>
        <Col lg="4" xs="12">
          <ImgSideSection src={img1} />
        </Col>
        <Col xs="12" lg="8">
          <div className="d-flex flex-column p-4">
            <TitleSection enfasis>Jornada em andamento</TitleSection>
            <img src={img2} width="80%" />
            <p>
              d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud d tempor incididunt ut labore et dolore{' '}
            </p>
          </div>
        </Col>
      </Row>
    </InfoSec>
  );
};

export default InfoSection2;
