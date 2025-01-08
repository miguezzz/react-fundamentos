import React, { useContext } from 'react';
import styled from 'styled-components';

import Button from '../Button';

import { ThemeContext } from '../../contexts/ThemeContext';

const Title = styled.h1`
  color:rgb(0, 107, 194);
`;

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <Title>Vmigu's journal</Title>
      <Button onClick={onToggleTheme}>Mudar Tema</Button>
      {props.children}
      <hr />
    </header>
  );
}
