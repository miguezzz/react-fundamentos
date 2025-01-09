import React, { useContext } from 'react';

import { Container } from './styles';

import { MyThemeContext } from '../../contexts/MyThemeContext';

export default function Footer(props) {
  const { theme, onToggleTheme } = useContext(MyThemeContext);

  return (
    <Container>
      <span>Vmigu's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={onToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌑'}
      </button>
    </Container>
  );
}
