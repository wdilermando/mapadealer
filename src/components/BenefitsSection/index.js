import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import img1 from '../../assets/images/benefits.png';
import { ContainerCustom } from '../../styles/globalStyles';

const InfoSec = styled.div`
  background: #ffffff;
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
  color: #203663;
`;

const DescriptionText = styled(motion.p)`
  font-size: 16px;
  font-weight: 500;
`;

const SmallestText = styled(motion.small)`
  font-size: 14px;
  font-weight: 500;
  width: 80%;
`;

const BenefitsSection = () => {
  return (
    <InfoSec>
      <Row>
        <Col xs="12" lg="8">
          <ContainerCustom>
            <div className="d-flex flex-column p-4 ml-5 mt-3">
              <TitleSection fSize={'32px'}>Benefícios do MAPPA</TitleSection>
              <DescriptionText>Para o Cliente:</DescriptionText>
              <ul>
                <li>Proteção efetiva de dados</li>
                <li>Maior sensação de segurança</li>
                <li>Agilidade no processo de compra</li>
              </ul>
              <DescriptionText>Para o Cliente:</DescriptionText>
              <ul>
                <li>Armazenamento de dados mais seguro e inteligente</li>
                <li>Melhoria nos canais de acesso a informações</li>
                <li>Proteção efetiva de dados</li>
                <li>
                  Melhor gerência da carteira de vendas de cada membro da equipe
                </li>
                <li>Praticidade no processo administrativo e da gerência</li>
                <li>Possibilidades de criar métricas de performance</li>
                <li>Redução de custos operacionais</li>
                <li>Melhoria no treinamento de equipes</li>
              </ul>
              <DescriptionText>Para o Usuário:</DescriptionText>
              <ul>
                <li>Aumento da produtividade</li>
                <li>
                  Padronização do fluxo de atividades de um processo de vendas
                </li>
                <li>
                  Praticidade no processo de captação dos dados dos clientes
                </li>
                <li>Redução de erros ao longo do processo</li>
                <li>Melhor acompanhamento das pendências</li>
              </ul>

              <SmallestText>
                Nossos serviços estão totalmente adequados à Lei Geral de
                Proteção de Dados Pessoais (Lei n 12.965), que estabelece regras
                sobre coleta, armazenamento, tratamento e compartilhamento de
                dados pessoais.
              </SmallestText>
            </div>
          </ContainerCustom>
        </Col>
        <Col lg="4" xs="12">
          <ImgSideSection src={img1} />
        </Col>
      </Row>
    </InfoSec>
  );
};

export default BenefitsSection;
