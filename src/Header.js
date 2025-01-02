import React from 'react';

export default function Header(props) {
  return (
    <header>
      <h1>Vmigu's journal</h1>
      {props.children}
      {/*children é uma propriedade especial do React que renderiza o conteúdo que está dentro do componente*/}
      <hr />
    </header>
  );
}
