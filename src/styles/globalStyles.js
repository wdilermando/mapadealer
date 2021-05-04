import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    padding-right: 50px;
    padding-left: 50px;
  }
`;

export default GlobalStyle;
