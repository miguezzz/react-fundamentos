import React from 'react';

function App() {
  return (
    <>
      <h1>Componente App importado!</h1>
      <h2>Irmão de h1</h2>
    </> // short-syntax para React.Fragment. Componente que não renderiza nada, mas serve para agrupar elementos
  ); // por baixo dos panos: React.createElement('h1', null, 'Componente App importado!')
}

export default App;
