import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import img1 from '../../assets/images/img36.jpg';
import img2 from '../../assets/images/map.gif';

const InfoSec = styled.div`
  background: #fcfcfd;
  color: #222;
  height: auto;
`;

const ImgSideSection = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const TitleSection = styled(motion.h2)`
  font-weight: ${({ enfasis }) => (enfasis ? '800' : '600')};
  margin-bottom: 3vh;
  white-space: pre-wrap;
  font-size: ${({ fSize }) => fSize};
`;

const DescriptionText = styled(motion.p)`
  font-size: 16px;
  font-weight: 500;
`;

const SmallestText = styled(motion.small)`
  font-size: 14px;
  font-weight: 500;
  width: 40%;
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
            <TitleSection fSize={'32px'}>Metodologia Mappa</TitleSection>
            <DescriptionText>
              Para que uma empresa se saia bem no mercado, é necessário o uso de
              uma tecnologia que consiga atuar bem em todos os setores. Pensando
              nisso, nossa ferramenta funciona em um formato fluido, com quatro
              pastas ordenadas e gerenciadas a partir de uma organização
              pré-estabelecida.
            </DescriptionText>
            <DescriptionText>
              Para manter o controle, toda a condução dos processos é
              administrada em quatro estágios:{' '}
              <strong>
                em aberto, em aprovação, a faturar e faturados pendentes.
              </strong>{' '}
              Dessa forma, conseguimos conduzir os processos de venda dentro de
              métricas pré estabelecidas com responsabilidade e planejamento.
            </DescriptionText>
            <img src={img2} width="80%" />
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
