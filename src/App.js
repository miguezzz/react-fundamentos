import React from 'react';

function App() {
  return (
    <div>
      <h1>Componente App importado!</h1>
      <h2>Irmão de H1</h2>
    </div> // componentes irmãos devem estar dentro de um componente pai
  );
  // por baixo dos panos: React.createElement('h1', null, 'Componente App importado!')
}

export default App;
