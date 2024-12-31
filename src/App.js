import React from 'react';

import Post from './Post';
import Header from './Header';

const posts = [
  { title: 'Title#01', subtitle: 'Subtitle#01', likes: 10 },
  { title: 'Title#02', subtitle: 'Subtitle#02', likes: 20 },
  { title: 'Title#03', subtitle: 'Subtitle#03', likes: 30 },
  { title: 'Title#04', subtitle: 'Subtitle#02', likes: 40 },
];

function App() {
  return (
    <>
      <Header>
        <h2>Notícias da semana!</h2> {/* children */}
      </Header>

      <Post
        post={{
          // também dá pra passar um objeto: {} ou um array: []
          title: 'vmigu recebe 29 propostas de emprego',
          subtitle:
            'segundo fontes, vmigu é o mais cobiçado employee das Big Techs!',
        }}
        likes={100}
      />

      {/* renderizando lista */}
      {posts.map((post) => (
        <Post // para cada post, renderiza um componente Post
          key={post.title} // key é obrigatório para listas, para o React identificar cada elemento
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
          likes={post.likes}
        />
      ))}
    </> // short-syntax para React.Fragment. Componente que não renderiza nada, mas serve para agrupar elementos
  ); // por baixo dos panos: React.createElement('h1', null, 'Componente App importado!')
}

export default App;
