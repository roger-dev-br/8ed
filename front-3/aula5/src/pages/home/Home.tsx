import React from "react";
import { Link } from "react-router-dom";
import { Botao, BotaoGrande } from "../../components/botao/Botao";
import CaixaTexto from "../../components/caixa-texto/CaixaTexto";
import Titulo from "../../components/titulo/Titulo";

const Home: React.FC = () => {
  return (
    <>
      <CaixaTexto>
        <Titulo>Home</Titulo>

        <p>Titulo da home</p>
      </CaixaTexto>

      <Botao escuro>Botão normal</Botao>
      <div>
        <Link to="/recados">Ir para meus recados</Link>
      </div>
    </>
  );
};

export default Home;
