import React, { useContext } from 'react';

import Button from '../Button';
import Title from '../Title';

import { ThemeContext } from '../../contexts/ThemeContext';

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
