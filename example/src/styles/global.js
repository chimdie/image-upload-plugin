import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    height: 100%;
    font-family: 'Sniglet', cursive, 'Roboto', 'Oxygen';
    color: rgba(107, 114, 128);
    background-color: rgba(255, 255, 255);
    line-height: 1.5;
  }
`;

export default GlobalStyle;
