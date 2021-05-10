import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import img1 from '../../assets/svg/ead.svg';
import img2 from '../../assets/svg/cogs.svg';
import img3 from '../../assets/svg/platform.svg';
import img4 from '../../assets/svg/support.svg';
import background from '../../assets/images/bg1.png';
import { ContainerCustom } from '../../styles/globalStyles';

const serviceList1 = [
  {
    id: 1,
    title: 'ABERTURA DO PROCESSO',
    description: 'com a inclusão do pedido de venda.',
  },
  {
    id: 2,
    title: 'PERGUNTAS INTERATIVAS',
    description: 'conduzem à montagem do fluxo do processo do cliente',
  },
  {
    id: 3,
    title: 'GERENCIAMENTO DO PROCESSO',
    description: '+ inclusão de documentos',
  },
  {
    id: 4,
    title: 'SOLICITAÇÃO PARA APROVAÇÃO',
    description: 'pelo vendedor(a)',
  },
  {
    id: 5,
    title: 'APROVAÇÃO DA DOCUMENTAÇÃO',
    description: 'pelo Departamento Administrativo',
  },
  {
    id: 6,
    title: 'LIBERAÇÃO PARA FATURAMENTO',
    description: 'e envio do processo para a nuvem',
  },
  {
    id: 7,
    title: 'GERENCIAMENTO DE PENDÊNCIAS',
    description: 'para que o processo seja finalizado',
  },
  { id: 8, title: 'GESTÃO À VISTA', description: '' },
];

const InfoSec = styled.div`
  background: #fcfcfd;
  background-image: url(${background});
  background-position: right;
  background-size: cover;
  color: #222;
  height: auto;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

const TitleSection = styled(motion.div)`
  h2 {
    font-weight: ${({ enfasis }) => (enfasis ? '800' : '600')};
    margin-bottom: 3vh;
    white-space: pre-wrap;
    font-size: ${({ fSize }) => fSize};
    line-height: 45px;
    color: #203663;
  }
`;

const DescriptionText = styled(motion.p)`
  font-size: 16px;
  font-weight: ${({ enfasis }) => (enfasis ? '700' : '500')};
`;

const SubTitle = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
  font-size: 24px;
  color: #203663;
`;

const BolderDestaq = styled.span`
  color: white;
  background: #a00000;
`;

const FeatureImage = styled.img`
  width: 80px;
  height: 80px;
  color: 'black';
`;

const FeatureItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  width: 300px;
  margin-top: 5vh;
  text-align: center;

  h4 {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const WrapperDestaq = styled.div`
  margin-top: 10vh;
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  justify-items: center;
`;

const ServiceItem = styled.article`
  background: #a00000;
  border-radius: 0.6rem;
  flex-direction: column;
  height: 200px;
  width: 300px;
  color: white;

  h4 {
    padding: 1rem;
    font-weight: bold;
    font-size: 24px;
  }

  span {
    padding: 1rem;
    position: absolute;
    background: #e5e5e5;
    border-bottom-left-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    height: 110px;
    width: 300px;
    color: #222;

    font-size: 18px;
    font-weight: 600;
  }
`;

const ServicesSection = () => {
  return (
    <InfoSec id="services">
      <ContainerCustom>
        <Row>
          <Col lg="6" xs>
            <TitleSection fSize={'32px'} enfasis>
              <h2>Serviços</h2>
            </TitleSection>
          </Col>
          <Col xs lg="6">
            <DescriptionText>
              Nós conduzimos toda a jornada do processo de venda de forma
              digital, com agilidade e praticidade.
            </DescriptionText>
          </Col>
        </Row>
        <Row>
          <Col xs lg="10">
            <SubTitle>
              <strong>Jornada em andamento</strong>
            </SubTitle>
          </Col>
        </Row>
        <Row>
          <Col xs lg="12">
            <GridContainer>
              {serviceList1.map((item) => (
                <ServiceItem key={item.id}>
                  <h4>{item.title}</h4>
                  {item.description !== '' && <span>{item.description}</span>}
                </ServiceItem>
              ))}
            </GridContainer>
          </Col>
        </Row>

        <Row className="justify-content-lg-center">
          <Col xs lg="12">
            <WrapperDestaq>
              <TitleSection fSize={'32px'} className="text-center">
                <h2>
                  Implantação rápida e{' '}
                  <BolderDestaq>descomplicada!</BolderDestaq>
                </h2>{' '}
              </TitleSection>
            </WrapperDestaq>
          </Col>
          <Col xs="12" lg="8">
            <GridContainer>
              <FeatureItem>
                <FeatureImage src={img1} />
                <h4>
                  Treinamento à <strong>distância</strong>
                </h4>
              </FeatureItem>
              <FeatureItem>
                <FeatureImage src={img2} />
                <h4>
                  Plataforma <strong>Web</strong>
                </h4>
              </FeatureItem>
              <FeatureItem>
                <FeatureImage src={img3} />
                <h4>
                  Integra com <strong>ERPs</strong> diversos
                </h4>
              </FeatureItem>
              <FeatureItem>
                <FeatureImage src={img4} />
                <h4>
                  Suporte <strong>Online</strong>
                </h4>
              </FeatureItem>
            </GridContainer>
          </Col>
        </Row>
      </ContainerCustom>
    </InfoSec>
  );
};

export default ServicesSection;
