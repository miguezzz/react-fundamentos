import React from 'react';

export default function Header(props) {
  return (
    <header>
      <h1>Vmigu's journal</h1>
      {props.children}
      <hr />
    </header>
  );
}
