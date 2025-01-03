import React, { useState, createContext } from 'react';

import Post from './Post';
import Header from './Header';

export const ThemeContext = createContext('dark'); // criação do contexto com valor inicial 'dark'

function App() {
  const [theme, setTheme] = useState('dark'); // estado inicial 'dark' e função para atualizar o estado

  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title#01',
      subtitle: 'Subtitle#01',
      likes: 10,
      read: false,
    },
    {
      id: Math.random(),
      title: 'Title#02',
      subtitle: 'Subtitle#02',
      likes: 20,
      read: true,
    },
    {
      id: Math.random(),
      title: 'Title#03',
      subtitle: 'Subtitle#03',
      likes: 30,
      read: false,
    },
    {
      id: Math.random(),
      title: 'Title#04',
      subtitle: 'Subtitle#02',
      likes: 40,
      read: true,
    },
  ]); // [state, setState]: estado atual e função para atualizar o estado

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark')); // lembrete: deve-se sempre usar a função de atualização do estado para garantir que o React atualize a interface. prevState "sabe" o valor atual do estado
  }

  // função que irá executar a atualização de estado com o hook useState para o React re-renderizar a interface
  // basicamente executa a função App novamente, mas com o estado atualizado
  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState, // spread operator para copiar o array posts atual
      {
        // objeto com as propriedades do novo post
        id: Math.random(),
        title: `title#0${prevState.length + 1}`,
        subtitle: `subtitle#0${prevState.length + 1}`,
        likes: prevState.length * 10,
      },
    ]);
  }
  // O React não monitora mudanças em variáveis comuns por padrão, porque isso seria custoso e impraticável. O useState resolve esse problema ao fornecer uma forma explícita de gerenciar o estado e notificar o React quando algo muda, permitindo que ele atualize a interface de forma eficiente.

  function handleRemovePost(postId) {
    console.log({ postId });
    setPosts((prevState) => prevState.filter((post) => post.id !== postId)); // filtra os posts que não têm o id do post que queremos remover
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Header onToggleTheme={handleToggleTheme}>
        {/* children */}
        <h2>Notícias da semana!</h2>
        <button type="button" onClick={handleRefresh}>
          Atualizar
        </button>
      </Header>

      {/* renderizando lista */}
      {posts.map((post) => (
        <Post // para cada post, renderiza um componente Post
          key={post.id} // key é obrigatório para listas, para o React identificar cada elemento
          onToggleTheme={handleToggleTheme} // função de callback via props para mudar o tema
          onRemove={handleRemovePost} // função de callback via props para remover o post7
          post={post} // propriedade post com os dados do post
        />
      ))}
    </ThemeContext.Provider> // short-syntax para React.Fragment. Componente que não renderiza nada, mas serve para agrupar elementos
  ); // por baixo dos panos: React.createElement()
}

export default App;
