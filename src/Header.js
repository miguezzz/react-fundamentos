import React from 'react';

export default function Header(props) {
  return (
    <header>
      <h1>Vmigu's journal</h1>
      <button type="button" onClick={props.onToggleTheme}>
        Mudar Tema
      </button>
      {props.children}
      {/*children é uma propriedade especial do React que renderiza o conteúdo que está dentro do componente*/}
      <hr />
    </header>
  );
}
