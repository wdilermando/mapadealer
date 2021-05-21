import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

import img3 from '../../assets/images/googleplay.png';
import img4 from '../../assets/images/appstore.png';
import { ContainerCustom } from '../../styles/globalStyles';
import { SocialIcons } from '..';
import { APPLE_STORE, PLAY_GOOGLE } from '../../lib/constants';

const InfoSec = styled.div`
  background: #ffffff;
  color: ${({ theme }) => theme.primaryDark};
  height: auto;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

const IconImage = styled.img`
  width: ${({ social }) => (social ? '50px' : '150px')};
  height: 50px;
  margin-right: 20px;
  cursor: pointer;
`;

const TitleSection = styled(motion.h2)`
  font-weight: ${({ enfasis }) => (enfasis ? '800' : '600')};
  margin-bottom: 3vh;
  white-space: pre-wrap;
  font-size: ${({ fSize }) => fSize};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const SocialSection = () => {
  return (
    <InfoSec>
      <ContainerCustom>
        <Row>
          <Col lg="6" xs="12">
            <TitleSection fSize={'32px'}>Siga o MAPPA</TitleSection>
            <SocialIcons share />
          </Col>
          <Col xs="12" lg="6">
            <TitleSection fSize={'32px'}>Plataformas de Acesso</TitleSection>
            <IconsWrapper>
              <StyledLink href={PLAY_GOOGLE}>
                <a target="_blank">
                  <IconImage src={img3} alt="google play store" />
                </a>
              </StyledLink>
              <StyledLink href={APPLE_STORE}>
                <a target="_blank">
                  <IconImage src={img4} alt="apple app store" />
                </a>
              </StyledLink>
            </IconsWrapper>
          </Col>
        </Row>
      </ContainerCustom>
    </InfoSec>
  );
};

export default SocialSection;
