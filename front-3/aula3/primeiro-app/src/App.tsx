import React from 'react';
import GrowdevInput from './components/GrowdevInput';
import Painel from './components/Painel';

function App() {
  return (
    <div className="App">
      <Painel cor="#FF0000">   
        <>
          <h1>Meu componente</h1>
          <h1>Meu componente</h1>
        </>
      </Painel>
      
      <GrowdevInput 
          texto='Nome' 
          placeholder='Informe o nome'
          tipoBotao='reset' 
          cor="azul"
          type="text"></GrowdevInput>
      <GrowdevInput 
        texto='Data Nascimento'
        tipoBotao='submit' 
        cor="azul"
        placeholder='Informe a data de nascimento' 
        type="date"></GrowdevInput>
    </div>
  );
}

export default App;
