import React from 'react';
import PrimeiroComponent from './PrimeiroComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <PrimeiroComponent></PrimeiroComponent>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <label htmlFor="nome">Nome</label>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ReactJS
        </a>
      </header>
    </div>
  );
}

export default App;
