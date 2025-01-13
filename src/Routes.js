import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      {/* Switch component will only render the first child Route that matches the location */}
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/posts/:id" component={Post} />
      <Route component={NotFound} />
    </Switch>
  );
}
