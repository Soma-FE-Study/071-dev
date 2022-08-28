import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Stardust";
    src: url('fonts/stardust.ttf');
  }
  ${normalize}
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    overflow-x: hidden;
    min-width: 320px;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  * { font-family: 'Stardust', 'Sans-serif';}
  a { cursor: pointer; text-decoration: none; }
`;
