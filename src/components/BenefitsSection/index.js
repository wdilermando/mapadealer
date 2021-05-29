import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InfoSec = styled.div`
  background: #ffffff;
  color: ${({ theme }) => theme.primaryDark};
  height: auto;
`;

const ImgSideSection = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  @media screen and (max-width: 450px) {
    height: 30vh;
  }
`;

const TitleSection = styled(motion.h2)`
  font-weight: ${({ enfasis }) => (enfasis ? '800' : '600')};
  margin-bottom: 3vh;
  white-space: pre-wrap;
  font-size: ${({ fSize }) => fSize};
  color: ${({ theme }) => theme.colors.primary};
`;
const SmallestText = styled(motion.small)`
  font-size: 14px;
  font-weight: 500;
  width: 90%;
  color: ${({ theme }) => theme.colors.tertiary};
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  justify-items: center;
`;

const BenefitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  span {
    background: ${({ theme }) => theme.colors.primary};
    padding: 1em;
    width: 100%;
    color: ${({ theme }) => theme.primaryLight};
    border-radius: 5px;
    font-weight: 700;
    font-size: 18px;
  }
  ul {
    background: #e5e5e5;
    width: 95%;
    color: ${({ theme }) => theme.colors.tertiary};
    padding: 1rem;
    padding-left: 2em;

    li {
      font-size: 15px;
    }
  }
`;

const BenefitsWrapper = styled.div`
  padding-top: 4em;
  padding-left: 6em;

  @media screen and (max-width: 450px) {
    padding: 2em;
  }
`;

const BenefitsSection = () => {
  return (
    <InfoSec id="benefits">
      <Row>
        <Col xs="12" lg="8">
          <BenefitsWrapper>
            <TitleSection fSize={'32px'}>Benefícios do MAPPA</TitleSection>
            <GridContainer>
              <BenefitWrapper>
                <span>Para o Cliente:</span>
                <ul>
                  <li>Proteção efetiva de dados</li>
                  <li>Maior sensação de segurança</li>
                  <li>Agilidade no processo de compra</li>
                  <li>
                    Comodidade para acompanhar toda a venda através do celular
                  </li>
                </ul>
              </BenefitWrapper>
              <BenefitWrapper>
                <span>Para o Concessionário:</span>
                <ul>
                  <li>Armazenamento de dados mais seguro e inteligente</li>
                  <li>Melhoria nos canais de acesso a informações</li>
                  <li>Proteção efetiva de dados</li>
                  <li>
                    Melhor gerência da carteira de vendas de cada membro da
                    equipe
                  </li>
                  <li>Praticidade no processo administrativo e da gerência</li>
                  <li>Possibilidades de criar métricas de performance</li>
                  <li>Redução de custos operacionais</li>
                  <li>Melhoria no treinamento de equipes</li>
                </ul>
              </BenefitWrapper>
              <BenefitWrapper>
                <span>Para o Usuário:</span>
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
              </BenefitWrapper>
            </GridContainer>

            <SmallestText>
              Nossos serviços estão totalmente adequados à Lei Geral de Proteção
              de Dados Pessoais (Lei n 12.965), que estabelece regras sobre
              coleta, armazenamento, tratamento e compartilhamento de dados
              pessoais.
            </SmallestText>
          </BenefitsWrapper>
        </Col>
        <Col lg="4" xs="12">
          <ImgSideSection
            src={
              'https://res.cloudinary.com/dyxbrraat/image/upload/v1620931145/mapa/benefits1_qgpspm.png'
            }
            alt="benefits section image"
          />
        </Col>
      </Row>
    </InfoSec>
  );
};

export default BenefitsSection;
