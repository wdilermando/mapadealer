import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import img1 from '../../assets/svg/ead.svg';
import img2 from '../../assets/svg/cogs.svg';
import img3 from '../../assets/svg/platform.svg';
import img4 from '../../assets/svg/support.svg';
import background from '../../assets/images/bgServices.png';
import { ContainerCustom } from '../../styles/globalStyles';
import { Parallax } from 'react-parallax';

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

const InfoSec = styled(Parallax)`
  background: #fcfcfd;
  color: ${({ theme }) => theme.primaryDark};
  height: auto;
  padding-top: 10vh;
  padding-bottom: 10vh;

  @media screen and (max-width: 450px) {
    padding-top: 5vh;
    padding-bottom: 5vh;
  }
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
`;

const DescriptionText = styled(motion.p)`
  font-size: 16px;
  font-weight: ${({ enfasis }) => (enfasis ? '700' : '500')};
  color: ${({ theme }) => theme.colors.tertiary};
`;

const SubTitle = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
`;

const BolderDestaq = styled.span`
  color: ${({ theme }) => theme.primaryLight};
  background: ${({ theme }) => theme.colors.secondary};
`;

const FeatureImage = styled.img`
  width: 80px;
  height: 80px;
  color: ${({ theme }) => theme.primaryDark};
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
    text-align: left;
    color: ${({ theme }) => theme.colors.tertiary};
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

const ServiceItem = styled(motion.article)`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 0.6rem;
  flex-direction: column;
  height: 200px;
  width: 300px;
  color: ${({ theme }) => theme.primaryLight};

  h4 {
    padding: 1rem;
    font-weight: bold;
    font-size: 24px;
    text-align: left;
  }

  h3 {
    padding: 1rem;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin-top: 25%;
  }

  span {
    padding: 1rem;
    position: absolute;
    background: #e5e5e5;
    border-bottom-left-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    height: 105px;
    width: 300px;
    color: ${({ theme }) => theme.colors.tertiary};

    font-size: 16px;
    font-weight: 500;
  }
`;

const ServicesSection = () => {
  return (
    <div id="services">
      <InfoSec
        blur={1}
        bgImage={background}
        strength={-150}
        bgImageAlt="background image section 1"
      >
        <ContainerCustom>
          <Row>
            <Col lg="6" xs="12">
              <TitleSection fSize={'32px'}>
                <h2>Serviços</h2>
              </TitleSection>
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
                  <ServiceItem key={item.id} whileHover={{ scale: 1.05 }}>
                    {item.description !== '' ? (
                      <>
                        <h4>{item.title}</h4>
                        <span>{item.description}</span>
                      </>
                    ) : (
                      <h3>{item.title}</h3>
                    )}
                  </ServiceItem>
                ))}
              </GridContainer>
            </Col>
          </Row>

          <Row className="justify-content-lg-center mt-5 mb-5">
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
            <Col>
              <GridContainer>
                <FeatureItem>
                  <FeatureImage src={img1} alt="feature image 1" />
                  <h4>
                    Treinamento à <strong>distância</strong>
                  </h4>
                </FeatureItem>
                <FeatureItem>
                  <FeatureImage src={img2} alt="feature image 2" />
                  <h4>
                    Plataforma <strong>Web</strong>
                  </h4>
                </FeatureItem>
                <FeatureItem>
                  <FeatureImage src={img3} alt="feature image 3" />
                  <h4>
                    Integra com <strong>ERPs</strong> diversos
                  </h4>
                </FeatureItem>
                <FeatureItem>
                  <FeatureImage src={img4} alt="feature image 4" />
                  <h4>
                    Suporte <strong>Online</strong>
                  </h4>
                </FeatureItem>
              </GridContainer>
            </Col>
          </Row>
        </ContainerCustom>
      </InfoSec>
    </div>
  );
};

export default ServicesSection;
