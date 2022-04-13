import loadable from '@loadable/component';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import './App.scss';

const AppRouter = loadable(() => import(/* webpackChunkName: 'AppRouter' */ './features'))

function App() {
  return (    
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
  );
}

export default App;
