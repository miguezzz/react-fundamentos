import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

export default function App() {
  const [theme, setTheme] = useState('dark'); // estado inicial 'dark' e função para atualizar o estado
  
  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]); // useMemo para evitar que o tema seja recalculado a cada renderização

  function handleToggleTheme() {
    console.log('handleToggleTheme called!');
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark')); // lembrete: deve-se sempre usar a função de atualização do estado para garantir que o React atualize a interface. prevState "sabe" o valor atual do estado
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Layout 
        onToggleTheme={handleToggleTheme}
        selectedTheme={theme}
      />
    </ThemeProvider>
  );
}
