import React from 'react';

import { Container } from './styles';

export default function Footer(props) {
  return (
    <Container>
      <span>Vmigu's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={props.onToggleTheme}>🌞</button>
    </Container>
  );
}
