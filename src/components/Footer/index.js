import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../Logo';

const CustomFooter = styled.div`
  background: #ccc;
  padding: 2% 5%;
  color: #222;
`;

const TitleText = styled.h3`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SimpleText = styled.small`
  font-size: 13px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <CustomFooter>
      <Container>
        <Row>
          <Col xs="12" lg="4">
            <div className="d-flex justify-content-between flex-column h-100">
              <Logo />
              <SimpleText>2021, todos os direitos reservados</SimpleText>
            </div>
          </Col>
          <Col xs="12" lg="3">
            <InfoWrapper>
              <TitleText>Endereço</TitleText>
              <div>
                <SimpleText>
                  Av. Herculano Bandeira, 513 - PinaRecife - PE, 51110-131
                </SimpleText>
              </div>
            </InfoWrapper>
            <InfoWrapper>
              <TitleText>Telefone</TitleText>
              <div className="d-flex align-items-start flex-column">
                <SimpleText>+55 81 00000.0000</SimpleText>
                <SimpleText>+55 81 00000.0000</SimpleText>
              </div>
            </InfoWrapper>
          </Col>
          <Col>
            <InfoWrapper>
              <TitleText>Empresa</TitleText>
              <div className="d-flex align-items-start flex-column">
                <SimpleText>Sobre Nós</SimpleText>
                <SimpleText>Como trabalhamos</SimpleText>
                <SimpleText>Clientes</SimpleText>
                <SimpleText>Serviços</SimpleText>
                <SimpleText>Fale Conosco</SimpleText>
              </div>
            </InfoWrapper>
          </Col>
          <Col>
            <InfoWrapper>
              <TitleText>Blog</TitleText>
              <div className="d-flex align-items-start flex-column">
                <SimpleText>Mais vistos</SimpleText>
                <SimpleText>Últimos posts</SimpleText>
              </div>
            </InfoWrapper>
          </Col>
        </Row>
      </Container>
    </CustomFooter>
  );
};

export default Footer;
