import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Parallax } from 'react-parallax';
import { Col, Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import image from '../../assets/images/img35.png';
import playImage from '../../assets/images/play.png';
import background from '../../assets/images/bg1.png';
import { ContainerCustom } from '../../styles/globalStyles';
import ModalVideo from 'react-modal-video';

const InfoSec = styled(Parallax)`
  background: #f8f8f8;
  color: ${({ theme }) => theme.primaryDark};
  height: auto;
  padding-top: 10vh;
  padding-bottom: 10vh;

  @media screen and (max-width: 450px) {
    padding-top: 5vh;
    padding-bottom: 5vh;
  }
`;

const TitleSection = styled(motion.h2)`
  font-weight: ${({ enfasis }) => (enfasis ? '800' : '600')};
  margin-bottom: 5vh;
  white-space: pre-wrap;
  font-size: ${({ fSize }) => fSize};
  color: ${({ theme }) => theme.colors.primary};
`;

const DescriptionText = styled(motion.p)`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.tertiary};
`;

const PlayButton = styled(motion.img)`
  width: 70px;
  height: 70px;
  cursor: pointer;
  opacity: 0.7;
`;

const ImageSection = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: absolute;
    z-index: 10;
  }
`;

const SideSection = styled.div`
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  height: 100%;
`;

const InfoSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <div id="about">
      <InfoSec
        blur={1}
        bgImage={background}
        strength={-200}
        bgImageAlt="background image section 1"
      >
        <ContainerCustom>
          <Row>
            <Col xs="12" md="5" lg="5">
              <SideSection>
                <TitleSection
                  fSize={'32px'}
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  transition={{ duration: 0.8 }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: '-100%' },
                  }}
                >
                  Você já ouviu falar em digitalização de Jornada?
                </TitleSection>
                <TitleSection
                  enfasis
                  fSize={'42px'}
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  transition={{ duration: 0.9 }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: '-80%' },
                  }}
                >
                  Muito prazer,{'\n'}somos o Mappa!
                </TitleSection>
              </SideSection>
            </Col>
            <Col xs>
              <DescriptionText
                ref={ref}
                animate={controls}
                initial="hidden"
                transition={{ duration: 1.1 }}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
              >
                Mais que um software ou um programa, nós somos uma metodologia
                que provoca a mudança através da tecnologia de digitalização de
                jornadas. Nossa plataforma surge no intuito de unir e gerenciar
                processos internos da revenda de forma automática, completa e
                informatizada, agilizando negócios e integrando colaboradores
                que fazem parte de sistemas corporativos de venda.
              </DescriptionText>
              <DescriptionText
                ref={ref}
                animate={controls}
                initial="hidden"
                transition={{ duration: 1.1 }}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
              >
                Abraçar a tecnologia não significa deixar de lado a sua
                essência. Por isso, o Mappa foi pensado para ser adaptável,
                intuitivo e acessível para pessoas diversas. Afinal, caminhar em
                direção ao novo é um processo natural que conduz à direção e à
                forma na qual os negócios vão acontecendo.
              </DescriptionText>
              <ImageSection
                animate={controls}
                initial="hidden"
                transition={{ duration: 0.8 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <span>
                  <PlayButton
                    src={playImage}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setOpen(true)}
                    alt="playbutton"
                  />
                </span>
                <Image
                  src={image}
                  alt="image with man"
                  width={785}
                  height={418}
                />
              </ImageSection>
            </Col>
          </Row>
        </ContainerCustom>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="NPqiwlZwvgE"
          onClose={() => setOpen(false)}
        />
      </InfoSec>
    </div>
  );
};

export default InfoSection;
