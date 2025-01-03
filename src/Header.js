import React from 'react';

import Button from './Button';

export default function Header(props) {
  return (
    <header>
      <h1>Vmigu's journal</h1>
      <Button onClick={props.onToggleTheme}>Mudar Tema</Button>
      {props.children}
      {/*children é uma propriedade especial do React que renderiza o conteúdo que está dentro do componente*/}
      <hr />
    </header>
  );
}
