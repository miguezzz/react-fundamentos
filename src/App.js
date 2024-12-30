import React from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  return (
    <>
      <Header title="Vmigu's journal!">
        <h2>Notícias da semana</h2> {/* children */}
      </Header>

      {/* <Post
        title="vmigu recebe proposta de emprego"
        subtitle="segundo fontes, vmigu é o mais novo employee da Amazon Web Services."
      /> 
      */}

      <Post
        post={{
          // também dá pra passar um objeto: {} ou um array: []
          title: 'vmigu recebe 29 propostas de emprego',
          subtitle:
            'segundo fontes, vmigu é o mais cobiçado employee das Big Techs!',
        }}
      />
    </> // short-syntax para React.Fragment. Componente que não renderiza nada, mas serve para agrupar elementos
  ); // por baixo dos panos: React.createElement('h1', null, 'Componente App importado!')
}

export default App;
