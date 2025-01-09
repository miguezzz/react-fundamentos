import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body { // como o GlobalStyles está dentro de ThemeProvider no App.js, ele tem pode acessar o tema atual pelas props
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: sans-serif;
  }
`;
