import { Route, Routes } from '@solidjs/router';
import { Component, createResource, createSignal } from 'solid-js';

import { Header, HomePage } from './components';
import { Product } from './types';

const App: Component = () => {
  const [cart, setCart] = createSignal<Product[]>([])
  const [search, setSearch] = createSignal("")

  const [products] = createResource<Product[]>(() =>
    fetch('https://fakestoreapi.com/products').then(res => res.json()),
    {
      initialValue: []
    }
  )

  return (
    <div>
      <Header
        cart={cart}
        onClearCart={() => setCart([])}
        search={search} onSetSearch={(str) => setSearch(str)} />
      <Routes>
        <Route path="/" element={
          <HomePage
            products={products}
            search={search}
            onAddToCart={p => setCart([...cart(), p])}
          />
        } />
      </Routes>
    </div>
  );
};

export default App;
