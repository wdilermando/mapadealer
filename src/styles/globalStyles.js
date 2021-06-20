import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --swiper-theme-color: #000000;
    --swiper-navigation-size: 24px;
  }
  .swiper-button-next,
.swiper-button-prev {
  border: 2px solid;
    border-radius: 50%;
    padding: 15px;
}
html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x:hidden;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {    
    background:#f7f7f7;
    color: #EFFFFA;
    font-family: 'Raleway', sans-serif;
    text-rendering: optimizeLegibility;    
  }
  .bg-mapa {
    background-color:white !important;
    box-shadow: 0px 5px 10px 0px #0000001a;
  }
  a {
    color: #222;
    text-decoration: none;
  }
`;

export const ContainerCustom = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export default GlobalStyle;
