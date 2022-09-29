import { Route, Routes } from '@solidjs/router';
import { Component } from 'solid-js';

import { Header, HomePage } from './components';

const App: Component = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <HomePage />
        } />
      </Routes>
    </div>
  );
};

export default App;
