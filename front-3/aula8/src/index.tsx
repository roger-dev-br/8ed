import React from 'react';
import ReactDOM from 'react-dom/client';
import Cadastro from './pages/cadastro/Cadastro';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>
);
