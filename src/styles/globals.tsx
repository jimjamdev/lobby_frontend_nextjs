import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
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

  /* Montserrat */
  @font-face {
    font-family: 'Montserrat';
    font-weight: 300;
    src: local('Montserrat'), url('/fonts/Montserrat-Light.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 400;
    src: local('Montserrat'), url('/fonts/Montserrat-Regular.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 500;
    src: local('Montserrat'), url('/fonts/Montserrat-Medium.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 600;
    src: local('Montserrat'), url('/fonts/Montserrat-SemiBold.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 700;
    src: local('Montserrat'), url('/fonts/Montserrat-Bold.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 800;
    src: local('Montserrat'), url('/fonts/Montserrat-ExtraBold.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 900;
    src: local('Montserrat'), url('/fonts/Montserrat-Black.woff') format('woff');
    font-display: swap;
  }

  /* Ruda */
  @font-face {
    font-family: 'Ruda';
    font-weight: 400;
    src: local('Ruda'), url('/fonts/Ruda-Regular.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Ruda';
    font-weight: 700;
    src: local('Ruda'), url('/fonts/Ruda-Bold.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Ruda';
    font-weight: 900;
    src: local('Ruda'), url('/fonts/Ruda-Black.woff') format('woff');
    font-display: swap;
  }

  /*PressStart2P*/
  @font-face {
    font-family: 'PressStart2P';
    font-weight: 400;
    src: local('PressStart2P'), url('/fonts/PressStart2P-Regular.woff') format('woff');
    font-display: swap;
  }


`;

export default GlobalStyle;
