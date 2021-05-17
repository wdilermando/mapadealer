import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../Logo';
import img1 from '../../assets/images/footer/in.png';
import img2 from '../../assets/images/footer/ig.png';
import img3 from '../../assets/images/footer/yt.png';
import img4 from '../../assets/images/footer/fb.png';
import { ContainerCustom } from '../../styles/globalStyles';

const CustomFooter = styled.div`
  background: #efefef;
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

const IconsWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
  margin-top: 1em;
`;

const IconImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 15px;
  cursor: pointer;
`;

const CompanyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  height: 20vh;

  @media screen and (max-width: 450px) {
    align-items: center;
    margin-top: 1em;
    height: 15vh;
  }
`;

const Footer = () => {
  return (
    <CustomFooter>
      <ContainerCustom>
        <Row>
          <Col xs="12" lg="4">
            <CompanyInfo>
              <div>
                <Logo />
                <IconsWrapper>
                  <IconImage src={img2} />
                  <IconImage src={img1} />
                  <IconImage src={img4} />
                  <IconImage src={img3} />
                </IconsWrapper>
              </div>
              <SimpleText className="d-none d-sm-none d-md-none d-xl-block d-lg-block">
                2021, todos os direitos reservados
              </SimpleText>
            </CompanyInfo>
          </Col>
          <Col>
            <Row>
              <Col xs="6" lg="6">
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
                <Row>
                  <Col>
                    <InfoWrapper>
                      <TitleText>Empresa</TitleText>
                      <div className="d-flex align-items-start flex-column">
                        <SimpleText>Sobre</SimpleText>
                        <SimpleText>Serviços</SimpleText>
                        <SimpleText>Benefícios</SimpleText>
                        <SimpleText>Clientes</SimpleText>
                        <SimpleText>Suporte</SimpleText>
                        <SimpleText>Blog</SimpleText>
                      </div>
                    </InfoWrapper>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <SimpleText className="d-block d-sm-block d-md-block d-xl-none d-lg-none mt-2 text-center">
          2021, todos os direitos reservados
        </SimpleText>
      </ContainerCustom>
    </CustomFooter>
  );
};

export default Footer;
