import React, { useContext } from 'react';
import Button from './Button';

import { ThemeContext } from './ThemeContext';

import * as styles from './Header.module.css';

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1 className={styles.title}>Vmigu's journal</h1>
      <Button onClick={onToggleTheme}>Mudar Tema</Button>
      {props.children}
      <hr />
    </header>
  );
}
