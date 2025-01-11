import React from 'react';

import { Container } from './styles';

export default function Post(props) {
  return (
    <Container>
      <h2>{props.title}</h2>
      <small>{props.description}</small>
    </Container>
  );
}
