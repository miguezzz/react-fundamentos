import React, { useState, createContext, useMemo } from 'react';

import themes from '../styles/themes';

export const MyThemeContext = createContext('dark'); // criação do contexto com valor inicial 'dark'

export function MyThemeProvider(props) {
  const [theme, setTheme] = useState('dark'); // estado inicial 'dark' e função para atualizar o estado

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]); // useMemo para evitar que o tema seja recalculado a cada renderização

  function handleToggleTheme() {
    console.log('handleToggleTheme called!');
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark')); // lembrete: deve-se sempre usar a função de atualização do estado para garantir que o React atualize a interface. prevState "sabe" o valor atual do estado
  }

  return (
    <MyThemeContext.Provider
      value={{
        theme, // string 'dark' ou 'light'
        currentTheme, // objeto com as definições do tema atual
        onToggleTheme: handleToggleTheme,
      }}
    >
      {props.children}
    </MyThemeContext.Provider>
  );
}
