import React, { useState, createContext } from 'react';

export const ThemeContext = createContext('dark'); // criação do contexto com valor inicial 'dark'

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark'); // estado inicial 'dark' e função para atualizar o estado

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark')); // lembrete: deve-se sempre usar a função de atualização do estado para garantir que o React atualize a interface. prevState "sabe" o valor atual do estado
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
