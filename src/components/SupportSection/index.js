import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ContainerCustom } from '../../styles/globalStyles';

import img1 from '../../assets/svg/support/phone.svg';
import img2 from '../../assets/svg/support/mail.svg';
import img3 from '../../assets/svg/support/wpp2.svg';

const InfoSec = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.primaryLight};
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
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const DescriptionText = styled(motion.p)`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryLight};
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const ItemWrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 300px;
  color: ${({ theme }) => theme.primaryDark};
  margin-top: 5vh;

  span {
    margin-left: 20px;
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
      color: ${({ theme }) => theme.primaryLight};
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
          <Col lg="8" xs="12">
            <ItemsWrapper>
              <ItemWrapper>
                <Image
                  src={img1}
                  alt="Image call number"
                  width={60}
                  height={60}
                />
                <span>
                  <DescriptionText>Ligue para o Mappa</DescriptionText>
                  <LinkAction>
                    <a href="tel: (81) 3333 3333">+55 81 3333 3333</a>
                  </LinkAction>
                </span>
              </ItemWrapper>
              <ItemWrapper>
                <Image
                  src={img2}
                  alt="Image send email"
                  width={60}
                  height={60}
                />
                <span>
                  <DescriptionText>Mande um e-mail</DescriptionText>
                  <LinkAction>
                    <a href="mailto:mappa@mappa.com.br">mappa@mappa.com.br</a>
                  </LinkAction>
                </span>
              </ItemWrapper>
              <ItemWrapper>
                <Image
                  src={img3}
                  alt="Image to contact by whatsapp"
                  width={60}
                  height={60}
                />
                <span>
                  <DescriptionText>Mande uma mensagem</DescriptionText>
                  <LinkAction>
                    <a href="tel: (81) 9999 9999">+55 81 9999 9999</a>
                  </LinkAction>
                </span>
              </ItemWrapper>
            </ItemsWrapper>
          </Col>
          <Col>
            <Image
              src={
                'https://res.cloudinary.com/dyxbrraat/image/upload/v1621520187/mapa/Asset_5_1_fybuc1.png'
              }
              alt="support asset"
              layout="fill"
            />
          </Col>
        </Row>
      </ContainerCustom>
    </InfoSec>
  );
};

export default SupportSection;
