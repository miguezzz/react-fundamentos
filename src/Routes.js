import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/posts" component={Posts} />
    </BrowserRouter>
  );
}
