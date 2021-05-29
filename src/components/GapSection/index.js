import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ContainerCustom } from '../../styles/globalStyles';
import LeadForm from '../LeadForm';

const InfoSec = styled.div`
  background: #fafafa;
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
  font-size: 18px;
  font-weight: ${({ enfasis }) => (enfasis ? '700' : '500')};
  text-align: center;
  color: ${({ theme }) => theme.colors.tertiary};
`;

const FormWrapper = styled.div`
  margin: 0 auto;
  width: 25vw;
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
            <DescriptionText>
              Enxergamos a mudança como uma necessidade que deve ser positiva e
              acessível. Por isso, o Mappa oferece videoaulas para mostrar as
              ferramentas fundamentais da nossa plataforma, que vai beneficiar
              toda a sua empresa. Vamos juntos implantar uma cultura de
              produtividade por meio da tecnologia?
            </DescriptionText>
          </Col>
          <Col lg="6" xs="12">
            <FormWrapper>
              <LeadForm />
            </FormWrapper>
          </Col>
        </Row>
      </ContainerCustom>
    </InfoSec>
  );
};

export default GapSection;
