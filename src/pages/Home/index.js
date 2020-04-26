import React from 'react';
import Navigation from '../../components/Navigation/index';
import Header from '../../components/Header/index';
import Products from '../../components/Products/index';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <Products />
    </div>
  );
}
