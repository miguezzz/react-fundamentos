import React from 'react';

import { ThemeContext } from './App';

export default function Button(props) {
  const theme = React.useContext(ThemeContext);

  return (
    <button
      type="button"
      onClick={props.onClick}
      style={{
        color: theme === 'dark' ? '#fff' : '#000',
        backgroundColor: theme === 'dark' ? '#000' : '#fff',
      }}
    >
      {props.children}
    </button>
  );
}
