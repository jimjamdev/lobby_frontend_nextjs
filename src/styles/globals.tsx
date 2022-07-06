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
    display: contents;
    height: 100%; // fallback for browsers that don't support display contents
  }
`;

export default GlobalStyle;
