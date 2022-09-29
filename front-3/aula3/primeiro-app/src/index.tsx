import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Capturando  o DIV onde toda aplicação 
// vai ser renderizada
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Aqui o react inicia a aplicação na div ROOT
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);