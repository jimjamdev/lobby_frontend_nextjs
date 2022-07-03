import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  #__next {
    min-height: 100%;
  }
`;

export default GlobalStyle;
