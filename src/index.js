import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'; // importa o componente App (o webpack vai transpilar o arquivo App.js para uma versão compatível com navegadores)

// duas formas de criar componentes no React:
// 1. Função
// 2. Classe

const root = ReactDOM.createRoot(document.getElementById('root')); // cria a raiz do React a partir do id root

// renderiza o conteúdo na raiz
root.render(<App />);
