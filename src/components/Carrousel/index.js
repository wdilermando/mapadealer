import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import img1 from '../../assets/images/banners/b1.png';

const ImgSlider = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    filter: brightness(80%);
`;

const CarouselItem = styled(Carousel.Item)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        position: absolute;
        top: calc(50% - 64px);
        z-index: 10;

        @media screen and (max-width: 450px) {
            top: calc(35% - 64px);
        }
    }
`;

const HeroTitle = styled.h2`
    font-size: 3em;
    font-weight: 800;
    color: white;
    text-transform: uppercase;
    text-align: center;
    width: 80%;
    margin: 0 auto;

    @media screen and (max-width: 450px) {
        font-size: 1.5em;
    }
`;

const HeroSectionCarrousel = ({ banners }) => {
    return (
        <Carousel fade controls={false}>
            {banners &&
                banners.map((b) => (
                    <CarouselItem key={b.id}>
                        <span>
                            <HeroTitle>{b.titulo}</HeroTitle>
                        </span>
                        <ImgSlider src={b.imagemDestaque.url} alt={b.imagemDestaque.alt} />
                    </CarouselItem>
                ))}

            {!banners.length && (
                <CarouselItem>
                    <span>
                        <HeroTitle>MAPPA DEALER</HeroTitle>
                    </span>
                    <ImgSlider src={img1} alt="fallback slide" />
                </CarouselItem>
            )}
        </Carousel>
    );
};

export default HeroSectionCarrousel;
