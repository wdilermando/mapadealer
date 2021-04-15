import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import image from '../../assets/images/img35.jpg';

const InfoSec = styled.div`
  background: #fff;
  color: #222;
  height: auto;
  padding-top: 10vh;
`;

const TitleSection = styled(motion.h2)`
  font-weight: ${({ enfasis }) => (enfasis ? 'bolder' : 'normal')};
  margin-bottom: 5vh;
`;

const DescriptionText = styled(motion.p)`
  font-size: 16px;
`;

const ImageSection = styled(motion.div)`
  background: green;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const InfoSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <InfoSec>
      <Container>
        <Row>
          <Col xs="12" md="4" lg="4">
            <TitleSection
              enfasis={false}
              ref={ref}
              animate={controls}
              initial="hidden"
              transition={{ duration: 0.8 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: '-100%' },
              }}
            >
              Você já ouviu falar em digitalização de Jornada?
            </TitleSection>
            <TitleSection
              enfasis
              ref={ref}
              animate={controls}
              initial="hidden"
              transition={{ duration: 0.9 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: '-80%' },
              }}
            >
              Muito prazer, somos o Mappa!
            </TitleSection>
          </Col>
          <Col xs>
            <DescriptionText
              ref={ref}
              animate={controls}
              initial="hidden"
              transition={{ duration: 1.1 }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
            >
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </DescriptionText>
            <ImageSection
              animate={controls}
              initial="hidden"
              transition={{ duration: 0.8 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <img src={image} />
            </ImageSection>
          </Col>
        </Row>
      </Container>
    </InfoSec>
  );
};

export default InfoSection;
