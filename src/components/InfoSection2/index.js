import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';

import img1 from '../../assets/images/info1.png';
import img2 from '../../assets/images/map.gif';

const InfoSec = styled.div`
  background: #fcfcfd;
  color: ${({ theme }) => theme.primaryDark};
  height: auto;
`;

const ImgSideSection = styled.img`
  width: 100%;
  height: 110vh;
  object-fit: cover;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const TitleSection = styled(motion.h2)`
  font-weight: ${({ enfasis }) => (enfasis ? '800' : '600')};
  margin-bottom: 3vh;
  white-space: pre-wrap;
  font-size: ${({ fSize }) => fSize};
  padding-top: 5vh;
  color: ${({ theme }) => theme.colors.primary};
  @media screen and (max-width: 991px) {
    padding-top: 0vh;
  }
`;

const DescriptionText = styled(motion.p)`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.tertiary};
`;

const SmallestText = styled(motion.small)`
  font-size: 14px;
  font-weight: 500;
  width: 50%;
  color: ${({ theme }) => theme.colors.tertiary};
  @media screen and (max-width: 450px) {
    width: 100%;
    font-size: 14px;
  }
`;

const WrapperImage = styled.div`
  width: 80%;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const InfoSection2 = () => {
  return (
    <InfoSec>
      <Row>
        <Col lg="4" xs="12">
          <ImgSideSection
            src={
              'https://res.cloudinary.com/dyxbrraat/image/upload/v1620931145/mapa/info1_sozyya.png'
            }
            alt="image with man and methodology"
          />
        </Col>
        <Col xs="12" lg="8">
          <div className="d-flex flex-column p-4">
            <TitleSection fSize={'32px'}>Metodologia Mappa</TitleSection>
            <DescriptionText>
              A Metodologia Mappa atua bem em todos os setores, auxiliando sua
              empresa a se destacar dentro do mercado. A nossa ferramenta
              funciona em um formato fluido, com quatro pastas ordenadas e
              gerenciadas a partir de uma organização pré-estabelecida.
            </DescriptionText>
            <DescriptionText>
              Para manter o controle, toda a condução dos processos é
              administrada em quatro estágios:{' '}
              <strong>
                em aberto, em aprovação, a faturar e faturados pendentes
              </strong>
              . Dessa forma, conseguimos conduzir os processos de venda dentro
              de métricas pré estabelecidas com responsabilidade e planejamento.
            </DescriptionText>
            <WrapperImage>
              <Image
                src={
                  'https://res.cloudinary.com/dyxbrraat/image/upload/v1620931485/mapa/map_vjwjyh.gif'
                }
                alt="map animation"
                width={1048}
                height={558}
                layout="responsive"
                quality="100"
              />
            </WrapperImage>
            <SmallestText>
              A Metodologia Mappa ajusta toda a comunicação e acompanhamento de
              jornadas, incentivando a produtividade de todo o time envolvido no
              processo.
            </SmallestText>
          </div>
        </Col>
      </Row>
    </InfoSec>
  );
};

export default InfoSection2;
