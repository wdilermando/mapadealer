import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ContainerCustom } from '../../styles/globalStyles';

import img1 from '../../assets/images/phone.png';
import img2 from '../../assets/images/mail.png';
import img3 from '../../assets/images/wpp.png';
import Link from 'next/link';

const InfoSec = styled.div`
  background: #ffffff;
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
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  justify-items: center;
`;

const ItemWrapper = styled.article`
  background: #ffffff;
  flex-direction: column;
  height: 200px;
  width: 300px;
  color: #000;
  text-align: center;

  img {
    height: 30%;
    margin-bottom: 30px;
    margin-top: 30px;
  }
`;

const LinkAction = styled(DescriptionText)`
  color: #203663;
  font-weight: 700;
  font-size: 18px;

  a {
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }
`;

const SupportSection = () => {
  return (
    <InfoSec id="support">
      <ContainerCustom>
        <Row>
          <Col lg="6" xs>
            <TitleSection fSize={'32px'}>
              <h2>Suporte</h2>
            </TitleSection>
            <DescriptionText>
              Queremos tirar todas as suas dúvidas em relação à nossa plataforma
              e aos nossos serviços. Fale com a gente por e-mail, telefone ou
              whatsapp clicando abaixo:
            </DescriptionText>
          </Col>
        </Row>
        <Row>
          <Col lg="12" xs="12">
            <GridContainer>
              <ItemWrapper>
                <img src={img1} />
                <DescriptionText>Ligue para o Mappa</DescriptionText>
                <LinkAction>
                  <a href="tel: (81) 3333 3333">+55 81 3333 3333</a>
                </LinkAction>
              </ItemWrapper>
              <ItemWrapper>
                <img src={img2} />
                <DescriptionText>Mande um e-mail</DescriptionText>
                <LinkAction>
                  <a href="mailto:mappa@mappa.com.br">mappa@mappa.com.br</a>
                </LinkAction>
              </ItemWrapper>
              <ItemWrapper>
                <img src={img3} />
                <DescriptionText>Mande uma mensagem</DescriptionText>
                <LinkAction>
                  <a href="tel: (81) 9999 9999">+55 81 9999 9999</a>
                </LinkAction>
              </ItemWrapper>
            </GridContainer>
          </Col>
        </Row>
      </ContainerCustom>
    </InfoSec>
  );
};

export default SupportSection;
