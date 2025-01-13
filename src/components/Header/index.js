import React, { useContext } from 'react';
// import { useTheme } from 'styled-components';

import { Container } from './styles';

import { MyThemeContext } from '../../contexts/MyThemeContext';

export default function Header() {
  const { theme, onToggleTheme } = useContext(MyThemeContext);

  const usetheme = useTheme(); // hook useTheme para acessar o tema atual
  console.log(usetheme);

  return (
    <Container>
      <h1>Vmigu's Blog</h1>
      <button type="button" onClick={onToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌑'}
      </button>
    </Container>
  );
}
