import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    background: white;
  }
  body {
    overflow-x: hidden;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  #__next {
    display: contents;
    height: 100%; // fallback for browsers that don't support display contents
  }
  
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default GlobalStyle;
