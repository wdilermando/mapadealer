import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ContainerCustom } from '../../styles/globalStyles';

const InfoSec = styled.div`
  background: #ffffff;
  color: ${({ theme }) => theme.primaryDark};
  height: auto;
  padding-bottom: 10vh;
`;
const TitleSection = styled(motion.h2)`
  font-weight: ${({ enfasis }) => (enfasis ? '800' : '600')};
  white-space: pre-wrap;
  font-size: ${({ fSize }) => fSize};
  text-align: center;
  color: ${({ theme }) => theme.primaryLight};
`;

const DestacWrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  height: 15vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  @media screen and (max-width: 450px) {
    height: 30vh;
  }
`;

const DescriptionText = styled(motion.p)`
  font-size: 16px;
  font-weight: ${({ enfasis }) => (enfasis ? '700' : '500')};
  text-align: center;
  font-size: ${({ fSize }) => fSize};
`;

const GapSection = () => {
  return (
    <InfoSec>
      <DestacWrapper>
        <TitleSection fSize={'32px'}>
          NÓS GUIAMOS VOCÊ AO LONGO DESSA JORNADA
        </TitleSection>
      </DestacWrapper>
      <ContainerCustom>
        <Row className="justify-content-md-center mt-5">
          <Col lg="8" xs="12">
            <DescriptionText fSize={'18px'}>
              Enxergamos a mudança como uma necessidade que deve ser positiva e
              acessível. Por isso, o Mappa oferece videoaulas para mostrar as
              ferramentas fundamentais da nossa plataforma, que vai beneficiar
              toda a sua empresa. Vamos juntos implantar uma cultura de
              produtividade por meio da tecnologia?
            </DescriptionText>
          </Col>
        </Row>
      </ContainerCustom>
    </InfoSec>
  );
};

export default GapSection;
