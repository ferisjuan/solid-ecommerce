import { Route, Routes } from '@solidjs/router';
import { Component } from 'solid-js';

import { Header, HomePage, ProductDetail } from './components';

const App: Component = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/detail/:id" component={ProductDetail} />
      </Routes>
    </div>
  );
};

export default App;
