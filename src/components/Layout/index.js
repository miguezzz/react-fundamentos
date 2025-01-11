import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../Routes';

export default function Layout(props) {
  return (
    <BrowserRouter>
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </nav>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
