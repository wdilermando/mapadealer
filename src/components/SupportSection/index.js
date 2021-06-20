import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ContainerCustom } from '../../styles/globalStyles';

import img1 from '../../assets/svg/support/phone.svg';
import img2 from '../../assets/svg/support/mail.svg';
import img3 from '../../assets/svg/support/wpp2.svg';
import { WHATSAPP_LINK } from '../../lib/constants';

const InfoSec = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  height: auto;
  padding-top: 10vh;
  padding-bottom: 10vh;
  color: ${({ theme }) => theme.primaryLight};
`;

const TitleSection = styled(motion.div)`
  h2 {
    font-weight: ${({ enfasis }) => (enfasis ? '800' : '600')};
    margin-bottom: 3vh;
    white-space: pre-wrap;
    font-size: ${({ fSize }) => fSize};
    line-height: 45px;
    color: ${({ theme }) => theme.primaryLight};
  }
`;

const DescriptionText = styled(motion.p)`
  font-size: 16px;
  font-weight: 500;
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  justify-items: center;
`;

const ItemWrapper = styled.article`
  flex-direction: column;
  height: 200px;
  width: 300px;
  color: ${({ theme }) => theme.primaryLight};
  text-align: center;

  img {
    height: 30%;
    margin-bottom: 30px;
    margin-top: 30px;
  }
`;

const LinkAction = styled(DescriptionText)`
  color: ${({ theme }) => theme.primaryLight};
  font-weight: 700;
  font-size: 18px;

  a {
    color: ${({ theme }) => theme.primaryLight};
    &:hover {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
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
                <img src={img1} alt="Image call number" />
                <DescriptionText>Ligue para o Mappa</DescriptionText>
                <LinkAction>
                  <a href="tel: (81) 3333 3333">+55 81 3333 3333</a>
                </LinkAction>
              </ItemWrapper>
              <ItemWrapper>
                <img src={img2} alt="Image send email" />
                <DescriptionText>Mande um e-mail</DescriptionText>
                <LinkAction>
                  <a href="mailto:contato@mappadealer.com.br">
                    contato@mappadealer.com.br
                  </a>
                </LinkAction>
              </ItemWrapper>
              <ItemWrapper>
                <img src={img3} alt="Image to contact by whatsapp" />
                <DescriptionText>Mande uma mensagem</DescriptionText>
                <LinkAction>
                  <a href={WHATSAPP_LINK} rel="noreferrer" target="_blank">+55 81 99300 9773</a>
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
