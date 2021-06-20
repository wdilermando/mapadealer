import React from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../Logo';
import img1 from '../../assets/images/footer/in.png';
import img2 from '../../assets/images/footer/ig.png';
import img3 from '../../assets/images/footer/yt.png';
import img4 from '../../assets/images/footer/fb.png';
import { ContainerCustom } from '../../styles/globalStyles';
import { FACEBOOK_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, YOUTUBE_LINK } from '../../lib/constants';
import Link from 'next/link';

const CustomFooter = styled.div`
    background: #efefef;
    padding: 2% 5%;
    color: ${({ theme }) => theme.colors.tertiary};
`;

const TitleText = styled.h3`
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const SimpleText = styled.small`
    font-size: 13px;
    white-space: pre-wrap;
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

    a {
        margin-right: 15px;
    }
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

const Links = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a {
        &:hover {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.secondary};
        }
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
                                    <Link href={INSTAGRAM_LINK} rel="noreferrer">
                                        <a target="_blank">
                                            <Image
                                                src={img2}
                                                alt="instagram link"
                                                width={25}
                                                height={25}
                                            />
                                        </a>
                                    </Link>
                                    <a href={LINKEDIN_LINK} rel="noreferrer" target="_blank">
                                        <Image
                                            src={img1}
                                            alt="linkedin link"
                                            width={25}
                                            height={25}
                                        />
                                    </a>
                                    <a href={FACEBOOK_LINK} rel="noreferrer" target="_blank">
                                        <Image
                                            src={img4}
                                            alt="facebook link"
                                            width={25}
                                            height={25}
                                        />
                                    </a>
                                    <a href={YOUTUBE_LINK} rel="noreferrer" target="_blank">
                                        <Image
                                            src={img3}
                                            alt="youtube link"
                                            width={25}
                                            height={25}
                                        />
                                    </a>
                                </IconsWrapper>
                            </div>
                            <SimpleText className="d-none d-sm-none d-md-none d-xl-block d-lg-block">
                                2021, Todos os direitos reservados
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
                                            Av. Herculano Bandeira, 513 - Pina{'\n'}Recife - PE,
                                            51110-131
                                        </SimpleText>
                                    </div>
                                </InfoWrapper>
                                <InfoWrapper>
                                    <TitleText>Telefone</TitleText>
                                    <Links>
                                        <a href="tel: (81) 9999 9999">
                                            <SimpleText>+55 81 00000.0000</SimpleText>
                                        </a>
                                        <a href="tel: (81) 9999 9999">
                                            <SimpleText>+55 81 00000.0000</SimpleText>
                                        </a>
                                    </Links>
                                </InfoWrapper>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <InfoWrapper>
                                            <TitleText>Empresa</TitleText>
                                            <Links>
                                                <a href="/#about">
                                                    <SimpleText>Sobre</SimpleText>
                                                </a>
                                                <a href="/#services">
                                                    <SimpleText>Serviços</SimpleText>
                                                </a>
                                                <a href="/#benefits">
                                                    <SimpleText>Benefícios</SimpleText>
                                                </a>
                                                <a href="/#customers">
                                                    <SimpleText>Clientes</SimpleText>
                                                </a>
                                                <a href="/#support">
                                                    <SimpleText>Suporte</SimpleText>
                                                </a>
                                                <a href="/#blog">
                                                    <SimpleText>
                                                        <strong>Blog</strong>
                                                    </SimpleText>
                                                </a>
                                            </Links>
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
