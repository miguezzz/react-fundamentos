import React from 'react';
import { useTheme } from 'styled-components';

import { Container } from './styles';

export default function Header(props) {
  const theme = useTheme(); // hook useTheme para acessar o tema atual

  console.log(theme);

  return (
    <Container>
      <h1>Vmigu's Blog</h1>
      <button type="button" onClick={props.onToggleTheme}>
        {props.selectedTheme === 'dark' ? '🌞' : '🌑'}
      </button>
    </Container>
  );
}
