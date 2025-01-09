import React, { useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { MyThemeProvider, MyThemeContext } from './contexts/MyThemeContext';

import GlobalStyles from './styles/global';
import Layout from './components/Layout';

export default function App() {
  const { currentTheme } = useContext(MyThemeContext); // acessa o tema atual
  return (
    // esse é o ThemeProvider do MyThemeContext
    <MyThemeProvider theme={currentTheme}>
      <ThemedApp />
    </MyThemeProvider>
  );
}

function ThemedApp() {
  const { currentTheme } = useContext(MyThemeContext);

  return (
    // esse é o ThemeProvider do styled-components
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Layout />
    </StyledThemeProvider>
  );
}
