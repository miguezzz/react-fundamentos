import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'; // importa o componente App (o webpack vai transpilar o arquivo App.js para uma versão compatível com navegadores)

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')); // cria a raiz do React a partir do id root lá no index.html da pasta public

// renderiza o conteúdo na raiz
root.render(<App />);
