import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/recados">Ir para meus recados</Link>
    </>
  );
};

export default Home;
